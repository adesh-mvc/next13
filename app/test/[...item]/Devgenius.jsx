"use client";

import React, { useState } from 'react'
function Devgenius() {
    const [files, setFiles] = useState([])

    const handleDrop = (event) => {
        event.preventDefault();
        const { files } = event.dataTransfer;
        setFiles([]);
        if (files.length > 0) {
            setFiles([...files]);
        }
    };
    const handleSelected = (event) => {
        event.preventDefault();
        const { files } = event.target;
        console.log("handleSelected", files.length)
        if (files.length > 0) {
            setFiles([...files])
        }
    };
    const handleDragOver = (event) => {
        event.preventDefault()

    }

    const handleDragStart = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id)
    }

    return (
        <div>

            <div className="d-flex justify-content-center align-content-center file-upload">
                <div>
                    <form className="my-form">
                        <div className="file-upload-area m-10" onDragOver={handleDragOver} onDrop={handleDrop} style={{
                            textAlign: 'center', margin: 'auto',
                            alignItems: 'center', width: '30%', backgroundColor: 'aliceblue'
                        }}>

                            <div className="card-body d-flex align-items-center justify-content-center m-2 scan-div" style={{ minHeight: "372px" }} draggable="true" onDragStart={handleDragStart}>
                                <p className="book-upload">Upload a book to start swap</p>
                                <p className="save-cost">save cost of buying new books by book swapping</p>
                                <input type="file" id="fileElem_test" multiple accept="image/*,application/pdf" onChange={handleSelected} />
                            </div>


                        </div>
                        <input type="Submit" name="upload" />
                    </form>
                    <div className='file-upload-div'>
                        <ul>
                            {files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Devgenius