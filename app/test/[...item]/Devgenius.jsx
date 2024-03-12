"use client";

import React, { useState } from 'react';
import axios from 'axios';
function Devgenius() {
    const [files, setFiles] = useState([])
    const [presignedUrl, setPresignedUrl] = useState(``);

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
    const handleUpload = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        // files.map((file) => {
        //     formData.append('files[]', file);
        //     // console.log(formData)
        // });
        formData.append("ACTION", "fileMerge")
        files.forEach((file) => formData.append("files", file));
        // data.append("upload", files);
        // for (var [key, value] of formData.entries()) {
        //     // console.log(key, value);
        // }
        // console.log(formData.get()) http://192.168.5.234/core/upload-test.php
        await axios.post("http://localhost:3000/api/files/bulk-upload",
            formData,
            {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        )
            .then(function (response) {
                console.log(response.data.signedUrl);
                setPresignedUrl(response.data.signedUrl);
                setTimeout(() => {
                    // Create event
                    document.getElementById('s3_file').dispatchEvent(new Event('click', { 'bubbles': true }));
                }, 250)
                // document.getElementById('s3_file').dispatchEvent(new Event('change'));
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    const uploadS3 = (e) => {
        e.preventDefault();
        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: e.target.value,
            headers: {}
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(`Presigned url error:${error}`)
            });
    }
    return (
        <div>
            <form> <input name="s3_file" id="s3_file" value={presignedUrl} onClick={uploadS3} /></form>
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