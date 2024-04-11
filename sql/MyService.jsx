"use client";
import { useState, useEffect } from "react";
export const DataService = {
    "bpa_service": [
        { "Id": "bs-1", "Name": "Cash", "Order": 1, "SQL": 15 },
        { "Id": "bs-2", "Name": "Cashless", "Order": 2, "SQL": 16 }
    ],
    "bpa_service_type": [
        { "Id": "bst-1", "Name": "NotRequired", "Order": 1 },
        { "Id": "bst-2", "Name": "Email", "Order": 2 },
        { "Id": "bst-3", "Name": "CRM", "Order": 3 },
        { "Id": "bst-4", "Name": "Courier", "Order": 4 }
    ],
    "bpa_service_facility": [
        { "Id": "bsf-1", "Name": "OPD", "Order": 1 },
        { "Id": "bsf-2", "Name": "IPD", "Order": 2 }
    ],
    "bpa_service_doc": [
        { "Id": "bsd-1", "Name": "AL Required (Through Email)", "Order": 1 },
        { "Id": "bsd-2", "Name": "TPA/Medical Card", "Order": 2 },
        { "Id": "bsd-3", "Name": "Referral Letter", "Order": 3 },
        { "Id": "bsd-4", "Name": "Service Card (Employ ID)", "Order": 4 },
        { "Id": "bsd-5", "Name": "Valid Identity Proof", "Order": 5 },
        { "Id": "bsd-6", "Name": "Others", "Order": 6 }
    ]
};
export const Servicetype = ({ ServiceName, change, sfChange }) => {
    return (
        <div key="st" style={{ paddingLeft: `7%` }}>
            {DataService.bpa_service_type.map((sr, i) => {
                return (<div key={i} >
                    <input type="checkbox"
                        className={ServiceName}
                        onChange={(e) => change(`${ServiceName}_${i}`, e.target.checked)}
                        id={`${ServiceName}_${i}`}
                        name={`type_${i}`}
                        value={sr.Id} key={i}
                    />{sr.Name}
                    <ServiceFacility service_facility={`${ServiceName}_${i}`} sfc={`${ServiceName}_${i}`} whenChange={sfChange} />

                </div>)
            })}
        </div>
    );
}
export const ServiceFacility = ({ service_facility, whenChange, sfc }) => {
    return (
        <div key="st" style={{ paddingLeft: `7%` }}>
            {DataService.bpa_service_facility.map((sf, i) => {
                return (<div key={i} >
                    <input
                        type="checkbox"
                        value={sf.Id}
                        id={`${service_facility}-${sf.Name}`}
                        className={service_facility}
                        key={i}
                        onChange={(e) => whenChange(`${service_facility}-${sf.Name}`, e.target.checked)}
                    />{sf.Name}
                    <hr />
                </div>)
            })}
        </div>
    );
}
export default function MyService() {
    const [recentRootChecked, setRecentRootChecked] = useState(``)
    const [root, setRoot] = useState({ Cash: false, Cashless: false });
    const [rootService,setRootService] = useState({
        Cash:{
            Cash_0:``,
            type_0:{OPD:``,IPD:``},
            Cash_1:``,
            type_1:{OPD:``,IPD:``},
            Cash_2:``,
            type_2:{OPD:``,IPD:``},
            Cash_3:``,
            type_3:{OPD:``,IPD:``},
        },
        Cashless:{
            Cashless_0:``,
            type_0:{OPD:``,IPD:``},
            Cashless_1:``,
            type_1:{OPD:``,IPD:``},
            Cashless_2:``,
            type_2:{OPD:``,IPD:``},
            Cashless_3:``,
            type_3:{OPD:``,IPD:``},
        },
    })
    const checkedFacility = (id, facilityCheckBox) => {
        let cf = document.querySelectorAll(`.${id}`);
        cf.forEach((facilityDoc) => {
            facilityDoc.checked = facilityCheckBox;
        })
    }
    const checkedService = (cls, rootchecked) => {
        cls.forEach((serviceDoc, index) => {
            serviceDoc.checked = rootchecked
            //check facility
            checkedFacility(serviceDoc.getAttribute('id'), rootchecked);
            setRootService((oldService)=>{
                return{
                    ...oldService,
                    Cash:{
                        ...oldService.Cash,
                        [serviceDoc.getAttribute('id')]:serviceDoc.value,
                    },
                    Cashless:{
                        ...oldService.Cashless,
                        [serviceDoc.getAttribute('id')]:serviceDoc.value,
                    }
                }
            },[]);
        });
    }
    useEffect(() => {
        if (recentRootChecked === `Cash`) {
            const boxService = document.querySelectorAll(".Cash");
            checkedService(boxService, root.Cash);
        }
        if (recentRootChecked === `Cashless`) {
            const boxService = document.querySelectorAll(".Cashless");
            checkedService(boxService, root.Cashless);
        }
    }, [root])
    const changeService = (id, checked) => {
        // const { id, checked } = e.target;
        checkedFacility(id, checked);
        const rootBox = id.split('_');
        let totalChecked = document.querySelectorAll(`.${rootBox[0]}:checked`);
        if (totalChecked.length === 1) {
            setRoot((prevRoot) => {
                return {
                    ...prevRoot,
                    [rootBox[0]]: true
                }
            })
        }
        if (totalChecked.length === 0) {
            setRoot((prevRoot) => {
                return {
                    ...prevRoot,
                    [rootBox[0]]: false
                }
            })
        }
        // console.log("totalChecked:", totalChecked.length, rootBox[0]);

    }
    const changeFacility = (id, checked) => {
        // const { id, checked } = e.target;
        const servBox = id.split('-');
        console.log("totalChecked:", servBox[0], checked);
    }
    const changeRoot = (e) => {
        // console.log("e.target:", e.target.checked)
        const { name, checked } = e.target;

        // console.log(`name = ${ name } & ${ checked }, ${ root }`)
        setRecentRootChecked(name);
        setRoot((prevRoot) => {
            return {
                ...prevRoot,
                [name]: checked
            }
        })
        // console.log(root)
    }
    console.log(root)
    return (

        <div style={{ width: `100% `, paddingLeft: `5% ` }} key="root">


            {DataService.bpa_service.map((serv, index) => {
                return (
                    <div style={{ width: "40%" }} key={index}>
                        <input
                            type="checkbox"
                            id={serv.Name} //serv.Name == `Cash` ? root.Cash : root.Cashless
                            checked={serv.Name == `Cash` ? root.Cash : root.Cashless}
                            value={1}
                            name={serv.Name}
                            key={serv.Name}
                            onChange={changeRoot}
                        />{serv.Name}
                        <Servicetype ServiceName={serv.Name} change={changeService} sfChange={changeFacility} />
                    </div>
                )
            })}
        </div>
    );
}
