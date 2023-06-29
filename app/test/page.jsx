"use client"

import { useEffect } from "react"
import { easepick } from "@easepick/core";
import { useState } from "react";

const pickerData = (inputId, stateSetterFunction) => {
    const calender = new easepick.create({
        element: document.getElementById(inputId),
        css: [
            'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
        ],
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
        pickerData('d1', DatepickerChange);
        pickerData('d2', DatepickerChange);
    }, [])

    return (<>
        <form >
            <input type="text" name="d1" placeholder="d1" defaultValue={pickerDate.d1} id="d1" />
            <input type="text" name="d2" placeholder="D 2" defaultValue={pickerDate.d2} id="d2" />
            <input type="text" name="d_3" onChange={(e) => DatepickerChange('d_3', e.target.value)} placeholder="D 2" defaultValue={pickerDate.d3} id="d_3" />
        </form>    </>)
}