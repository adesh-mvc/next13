"use client"
import React, { useState, useEffect } from "react";
const TestCheckBox = () => {
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [rootData, setRootData] = useState([]);

    const selectAllOne = (e) => {
        const { name, checked } = e.target;
        const isOk = checked;
        setCheckedOne(isOk);
        // console.log(checkedOne);
        document.getElementsByClassName(name).forEach((row, index) => {
            setRootData(result => ({ ...result, [row.name]: isOk, [`${row.name}_service`]: { ip: isOk, op: isOk } }));
            //console.log('rootData:', rootData);
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


    return (
        <div className="App">
            <div>

                <input
                    type="checkbox"
                    onChange={selectAllOne}
                    checked={checkedOne}
                    name="root_1"
                />
                <label>Root 1</label>
            </div>
            <ul>
                <li>

                    <input
                        type="checkbox"
                        className="root_1"
                        name="One"

                        onChange={(event) => toggleCheck(event)}
                        checked={rootData.One}
                    />
                    <label> R 1 1</label>
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
                <li>

                    <input
                        type="checkbox"
                        className="root_1"
                        name="Two"
                        onChange={(e) => toggleCheck(e)}
                        checked={rootData.Two}
                    />
                    <label> R 1 2</label>
                    <ul>
                        <li>
                            <input
                                className="Two"
                                type="checkbox"
                                name="Two"
                                data-service={`ip`}
                                onChange={(e) => toggleLeaf(e)}
                                checked={rootData.Two_service?.ip}
                            />
                            <label>1 2 of one</label>

                        </li>
                        <li>
                            <input
                                className="Two"
                                type="checkbox"
                                name="Two"
                                data-service={`op`}
                                onChange={(e) => toggleLeaf(e)}
                                checked={rootData.Two_service?.op}
                            />
                            <label>1 2 of two</label>


                        </li>
                    </ul>
                </li>
                <li>

                    <input
                        type="checkbox"
                        className="root_1"
                        name="Three"
                        onChange={(e) => toggleCheck(e)}
                        checked={rootData.Three}
                    />
                    <label> R 1 3</label>
                    <ul>
                        <li>
                            <input
                                className="Three"
                                type="checkbox"
                                name="Three"
                                data-service={`ip`}
                                onChange={(e) => toggleLeaf(e)}
                                checked={rootData.Three_service?.ip}
                            />
                            <label>1 3 of one</label>

                        </li>
                        <li>
                            <input
                                className="Three"
                                type="checkbox"
                                name="Three"
                                data-service={`op`}
                                onChange={(e) => toggleLeaf(e)}
                                checked={rootData.Three_service?.op}
                            />
                            <label>1 3 of two</label>


                        </li>
                    </ul>
                </li>
            </ul>
            <div>

                <input
                    type="checkbox"
                /*   onChange={(event) => selectAll(event.target.checked)} */
                /*   checked={checkedAll} */
                />
                <label>Root 2</label>
            </div>
            <ul>
                <li>

                    <input
                        type="checkbox"
                        className="root_2"
                        name="One"
                    /* onChange={() => toggleCheck("nr1")} */
                    /* checked={checked["nr1"]} */
                    />
                    <label> R 1 1</label>
                    <ul>
                        <li>
                            <input
                                className=""
                                type="checkbox"
                                name="One1"

                            />
                            <label>One of one</label>

                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="One2"

                            />
                            <label>One of two</label>


                        </li>
                    </ul>
                </li>
                <li>

                    <input
                        type="checkbox"
                        className="root_2"
                        name="Two"
                    /* onChange={() => toggleCheck("nr1")} */
                    /* checked={checked["nr1"]} */
                    />
                    <label> R 1 2</label>
                    <ul>
                        <li>
                            <input
                                className=""
                                type="checkbox"
                                name="One1"

                            />
                            <label>One of one</label>

                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="One2"

                            />
                            <label>One of two</label>


                        </li>
                    </ul>
                </li>
                <li>

                    <input
                        type="checkbox"
                        className="root_2"
                        name="Three"
                    /* onChange={() => toggleCheck("nr1")} */
                    /* checked={checked["nr1"]} */
                    />
                    <label> R 1 3</label>
                    <ul>
                        <li>
                            <input
                                className="root_2"
                                type="checkbox"
                                name="One3"

                            />
                            <label>One of one</label>

                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="One2"

                            />
                            <label>One of two</label>


                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
export default TestCheckBox;