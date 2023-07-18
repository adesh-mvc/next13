"use client"

import { useEffect } from "react";

import { useMutation, gql } from "@apollo/client";

import { easepick } from "@easepick/core";
import { AmpPlugin } from "@easepick/amp-plugin";
import { RangePlugin } from "@easepick/range-plugin";
import { useState } from "react";

const SINGLE_UPLOAD = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
      
    }
  }
`;
const pickerData = (inputId, stateSetterFunction) => {

    const calender = new easepick.create({
        element: document.getElementById(inputId),
        css: [
            'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
            'https://cdn.jsdelivr.net/npm/@easepick/range-plugin@1.2.1/dist/index.css',
        ],
        plugins: [AmpPlugin],

        AmpPlugin: {
            dropdown: {
                months: true,
                years: true,
            },
        },
        // plugins: [RangePlugin],
        // RangePlugin: {
        //     tooltip: true,
        // },
        format: "DD/MM/YYYY",
        setup(picker) {
            picker.on('select', (e) => {
                const { view, date, target } = e.detail;
                stateSetterFunction(inputId, date.toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }));
                console.log(date.toLocaleDateString('hi-IN', { day: '2-digit', month: '2-digit', year: 'numeric' }));
                // do something
            });
        },
    });
    return calender;
}
export default function ({ params }) {


    const [pickerDate, setPickerDate] = useState({ d1: '', d2: '', d3: '' });

    const DatepickerChange = (name, value) => {
        // console.log(pickerDate)
        setPickerDate((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    useEffect(() => {
        console.log("DatepickerChangevALUE:", pickerDate)
    }, [pickerDate])
    useEffect(() => {
        const startDate = pickerData('d1', DatepickerChange);
        startDate.setDate("30/06/2023");
        pickerData('d2', DatepickerChange);
    }, []);

    const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD, {
        context: {
            headers: {
                "Content-Type": "application/json"
            }
        }
    });


    const uploadFile2 = (e) => {
        console.log('uploadFile', e)
    }
    const uploadFile = ({ target: { files } }) => {
        const file = files[0]
        console.log(file)
        file && mutate({ variables: { file: file } })
    }
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
    return (

        <form >
            <input type="file" name="file_1" onChange={uploadFile} id="f1" />
            <input type="text" name="d1" placeholder="d1" defaultValue={pickerDate.d1} id="d1" />
            <br />
            <br />
            <input type="text" name="d2" placeholder="D 2" defaultValue={pickerDate.d2} id="d2" />
            <br />
            <br />
            <input type="text" name="d_3" onChange={(e) => DatepickerChange('d_3', e.target.value)} placeholder="D 3" defaultValue={pickerDate.d3} id="d_3" />
            <br />
            <br />
        </form>
    )
}