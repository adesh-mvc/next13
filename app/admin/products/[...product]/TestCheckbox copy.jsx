"use client"
import React, { useState, useEffect } from "react";
const TestCheckBox = () => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState({
        nr1: false,
        nr2: false
    });

    /* ################################################ */
    /* #### TOGGLES checK STATE BASED ON inputName #### */
    /* ################################################ */

    const toggleCheck = (inputName) => {
        setChecked((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = !prevState[inputName];
            return newState;
        });
    };

    /* ###################################################### */
    /* #### CHECKS OR UNCHECKS ALL FROM SELECT ALL CLICK #### */
    /* ###################################################### */

    const selectAll = (value) => {
        setCheckedAll(value);
        setChecked((prevState) => {
            const newState = { ...prevState };
            for (const inputName in newState) {
                newState[inputName] = value;
            }
            return newState;
        });
    };

    /* ############################################# */
    /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */
    /* ############################################# */

    // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE
    // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

    useEffect(() => {
        let allChecked = true;
        for (const inputName in checked) {
            if (checked[inputName] === false) {
                allChecked = false;
            }
        }
        if (allChecked) {
            setCheckedAll(true);
        } else {
            setCheckedAll(false);
        }
    }, [checked]);
    return (
        <div className="App">
            <div>
                <label>All</label>
                <input
                    type="checkbox"
                    onChange={(event) => selectAll(event.target.checked)}
                    checked={checkedAll}
                />
            </div>
            <ul>
                <li>

                    <input
                        type="checkbox"
                        name="nr1"
                        onChange={() => toggleCheck("nr1")}
                        checked={checked["nr1"]}
                    />
                    <label>1</label>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                name="nr1"

                            />
                            <label>One of one</label>

                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="nr1"

                            />
                            <label>One of two</label>


                        </li>
                    </ul>
                </li>
                <li>

                    <input
                        type="checkbox"
                        name="nr2"
                        onChange={() => toggleCheck("nr2")}
                        checked={checked["nr2"]}
                    />
                    <label>2</label>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                name="nr1"

                            />
                            <label>Two of one</label>

                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="nr1"

                            />
                            <label>Two of two</label>


                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
export default TestCheckBox;