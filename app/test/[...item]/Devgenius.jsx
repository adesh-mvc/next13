"use client";

import React, { useState } from 'react';
import axios from 'axios';
function Devgenius() {
    const [files, setFiles] = useState([])

    const handleDrop = (event) => {
        event.preventDefault();

        const { files } = event.dataTransfer;
        console.log(files)
        setFiles([]);
        if (files.length > 0) {
            setFiles([...files]);
        }
    };
    const handleSelected = (event) => {
        event.preventDefault();
        const { files } = event.target;
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
    function updateProgress(fileNumber, percent) {
        uploadProgress[fileNumber] = percent
        let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
        progressBar.value = total
    }
    const handleUpload = (event) => {
        event.preventDefault();
        const formData = new FormData();
        files.map((file) => {
            formData.append('files', file);
            // console.log(formData)
        });
        // data.append("upload", files);
        // for (var [key, value] of formData.entries()) {
        //     console.log(key, value);
        // }
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
                                <input type="file" id="fileElem_test" name="upload_files[]" multiple accept="image/*,application/pdf" onChange={handleSelected} />
                            </div>


                        </div>
                        <input type="Submit" name="upload" onClick={handleUpload} />
                        <progress id="progress-bar" max="100" value="0"></progress>
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
// https://sanjanaraj11.medium.com/upload-files-and-multiple-data-together-using-formdata-in-react-8a0bdf891da0
export default Devgenius