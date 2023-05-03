"use client"
import React, { useState, useRef } from "react";


const rootSet = ["root_1", "root_2"];
const rootGroup = ["R1", "R2", "R3"];
const TestCheckBox = () => {
    const root = useRef(false);
    const root_group = useRef(false);

    const [checkedOne, setCheckedOne] = useState({ root_1: false, root_2: false });
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [rootData, setRootData] = useState({ R1: false, R1_service: { ip: false, op: false }, R2: false, R2_service: { ip: false, op: false }, R3: false, R3_service: { ip: false, op: false } });


    const selectAllOne = (e) => {
        const { name, checked } = e.target;
        const isOk = checked;
        setCheckedOne(rootRes => ({ ...rootRes, [name]: isOk }));
        // console.log(checkedOne);
        document.getElementsByClassName(name).forEach((row, index) => {
            setRootData(result => ({ ...result, [row.name]: isOk, [`${row.name}_service`]: { ip: isOk, op: isOk } }));
            console.log('rootData:', rootData);
        });
    }
    const toggleCheck = (e) => {
        const { name, checked } = e.target;
        // console.log('nodeName:', e.target.name, e.target.checked);
        setRootData(result => ({ ...result, [name]: checked, [`${name}_service`]: { ip: checked, op: checked } }));
        rootSetter(document.getElementsByClassName('root_1'));
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

            service[row.getAttribute('data-service')] = row.checked;
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
        console.log("totalunchecked:", totalunchecked, rootChild.length);
        if (!totalunchecked) {
            setCheckedOne(false);
        }
        if (totalchecked) {
            setCheckedOne(true);
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

                    <div>
                        <input
                            type="checkbox"
                            onChange={selectAllOne}
                            checked={checkedOne[set]}
                            name={set}
                        />
                        <label>Root {o + 1}</label>
                    </div>
                    <ul>
                        {rootGroup.map((group, g) => {
                            console.log("group", group)
                            console.log('rootData.R1', `${rootData.group}`)
                            return (<>
                                <li>
                                    <span>qwewewe{group}</span>
                                    <input
                                        type="checkbox"
                                        className={set}
                                        name={`${group}`}

                                        onChange={(event) => toggleCheck(event)}
                                        checked={rootData.R1}
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
                                                checked={rootData.One_service?.ip}
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
                                                checked={rootData.One_service?.op}
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