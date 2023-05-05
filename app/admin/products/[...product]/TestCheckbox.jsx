"use client"
import React, { useState, useRef } from "react";


const rootSet = ["root_1", "root_2"];
const rootGroup = [{ "root_1": ["R1", "R2", "R3"] }, { "root_2": ["R1", "R2", "R3"] }];
// const rootGroup = { R1_root_1: false, R2_root_1: false, R3_root_1: false };
const TestCheckBox = () => {
    const root = useRef(false);
    const root_group = useRef(false);

    const [checkedOne, setCheckedOne] = useState({ root_1: false, root_2: false });
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [rootData, setRootData] = useState({
        R1_root_1: false,
        R1_root_1_service: { ip: false, op: false },
        R2_root_1: false,
        R2_root_1_service: { ip: false, op: false },
        R3_root_1: false,
        R3_root_1_service: { ip: false, op: false },
        R1_root_2: false,
        R1_root_2_service: { ip: false, op: false },
        R2_root_2: false,
        R2_root_2_service: { ip: false, op: false },
        R3_root_2: false,
        R3_root_2_service: { ip: false, op: false }
    })


    const selectAllOne = (e) => {
        const { name, checked } = e.target;
        const isOk = checked;
        setCheckedOne(rootRes => ({ ...rootRes, [name]: isOk }));

        document.getElementsByClassName(name).forEach((row, index) => {
            setRootData(result => ({ ...result, [row.id]: isOk, [`${row.id}_service`]: { ip: isOk, op: isOk } }));
        });
    }
    const toggleCheck = (e) => {
        const { name, id, checked } = e.target;
        console.log('nodeName:', id);
        // const hasBoolean:checked?true:false
        setRootData(result => ({ ...result, [id]: checked, [`${id}_service`]: { ip: checked, op: checked } }));
        rootSetter(document.getElementsByClassName(name));
        console.log('Toggledata:', rootData);
    }
    const toggleLeaf = (e) => {
        const { name } = e.target;
        const service = {};
        console.log('rootData:', service);
        var uncheck = 0;
        const group_name = document.getElementsByClassName(name);
        group_name.forEach((row, index) => {
            const leafOk = row.checked;
            if (!leafOk) { uncheck++ }

            service[row.id] = row.checked;
        });
        if (group_name.length == uncheck) {
            rootSetter(document.getElementsByClassName('root_1'));
            setRootData(result => ({ ...result, [name]: false }));
        } else {
            setRootData(result => ({ ...result, [name]: true }));
            setCheckedOne(true);
        }
        setRootData(result => ({ ...result, [`${name}_service`]: { ip: service.ip, op: service.op } }));
    }
    const rootSetter = (rootChild) => {
        var totalchecked = 0;
        var totalunchecked = rootChild.length;
        rootChild.forEach((row) => {
            if (row.checked) {
                totalchecked++;
            } else {

                totalunchecked--;
            }
        });
        if (totalchecked) {
            setCheckedOne(true);
            console.log("totalChecked:", totalchecked, rootChild.length);
        }
        if (!totalunchecked) {
            console.log("totalunchecked:", totalunchecked, rootChild.length);
            setCheckedOne(false);
        }

    }
    // root 2

    const rootHandler = () => {
        const { name } = root.current
        // console.log(name)
        document.getElementsByClassName(name).forEach((row, index) => {

            // setRootData(result => ({ ...result, [row.name]: isOk, [`${row.name}_service`]: { ip: isOk, op: isOk } }));
            console.log('rootData:', row.checked);
        });
    }

    return (
        <div className="App">
            {rootSet.map((set, o) => {
                return (<>

                    <div key={o}>
                        <input
                            type="checkbox"
                            onChange={selectAllOne}
                            checked={checkedOne[set]}
                            name={set}
                        />
                        <label>Root {o + 1}</label>
                    </div>
                    <ul>
                        {rootGroup[o][set].map((group, g) => {


                            return (<>
                                <li>
                                    <span>{group}</span>
                                    <input
                                        type="checkbox"
                                        className={set}
                                        name={`${set}`}
                                        id={`${group}_${set}`}
                                        onChange={(event) => toggleCheck(event)}
                                        checked={rootData[`${group}_${set}`]}
                                    />
                                    <label> R {o + 1} {g + 1}</label>
                                    <ul>
                                        <li>
                                            <input
                                                className="One"
                                                type="checkbox"
                                                name="One"
                                                data-service={`ip`}
                                                onChange={(event) => toggleLeaf(event)}
                                                checked={rootData[`${group}_${set}_service`]?.ip}
                                            />
                                            <label>One of one</label>

                                        </li>
                                        <li>
                                            <input
                                                className="One"
                                                type="checkbox"
                                                name="One"
                                                data-service={`op`}
                                                onChange={(event) => toggleLeaf(event)}
                                                checked={rootData[`${group}_${set}_service`]?.op}
                                            />
                                            <label>One of two</label>


                                        </li>
                                    </ul>
                                </li>
                            </>)
                        })}

                    </ul>
                </>)
            })}









        </div>
    );
}
export default TestCheckBox;