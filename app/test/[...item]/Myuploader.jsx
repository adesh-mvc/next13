"use Client";
import { useEffect } from "react";
import "./style.css"
const Myuploader = () => {
    // ************************ Drag and drop ***************** //
    let dropArea = document.getElementById("drop-area")


    useEffect(() => {
        // Prevent default drag behaviors
        ['dragenter', 'dragover', 'dragleave', 'drop'].map(eventName => {
            dropArea?.addEventListener(eventName, preventDefaults, false)
            document.body.addEventListener(eventName, preventDefaults, false)
        });
        // Highlight drop area when item is dragged over it
        ['dragenter', 'dragover'].map(eventName => {
            dropArea?.addEventListener(eventName, highlight, false)
        });
        ['dragleave', 'drop'].map(eventName => {
            dropArea?.addEventListener(eventName, unhighlight, false)
        });
    }, [])





    // Handle dropped files
    // dropArea.addEventListener('drop', handleDrop, false)

    function preventDefaults(e) {
        e.preventDefault()
        e.stopPropagation()
    }

    function highlight(e) {
        dropArea.classList.add('highlight')
    }

    function unhighlight(e) {
        dropArea.classList.remove('active')
    }

    function handleDrop(e) {
        var dt = e.dataTransfer
        var files = dt.files

        handleFiles(files)
    }

    let uploadProgress = []
    let progressBar = document.getElementById('progress-bar')

    function initializeProgress(numFiles) {
        progressBar.value = 0
        uploadProgress = []

        for (let i = numFiles; i > 0; i--) {
            uploadProgress.push(0)
        }
    }

    function updateProgress(fileNumber, percent) {
        uploadProgress[fileNumber] = percent
        let total = uploadProgress.reduce((tot, curr) => tot + curr, 0) / uploadProgress.length
        progressBar.value = total
    }

    function handleFiles(e) {

        // files = [...files]
        const files = e.target.files;

        console.log(files)
        // initializeProgress(files.length)
        // files.forEach(uploadFile)
        //  files.forEach(previewFile)
        // files.map(() => previewFile)
    }
    // https://blog.devgenius.io/upload-drag-and-drop-component-in-react-js-22868b063869
    function previewFile(file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function () {
            let img = document.createElement('img')
            img.src = reader.result
            document.getElementById('gallery').appendChild(img)
        }
    }

    function uploadFile(file, i) {
        var url = 'http://192.168.5.234/core/upload-test.php'
        var xhr = new XMLHttpRequest()
        var formData = new FormData()
        xhr.open('POST', url, true)
        xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')

        // Update progress (can be used to show progress indicator)
        xhr.upload.addEventListener("progress", function (e) {
            updateProgress(i, (e.loaded * 100.0 / e.total) || 100)
        })

        xhr.addEventListener('readystatechange', function (e) {
            if (xhr.readyState == 4 && xhr.status == 200) {
                updateProgress(i, 100) // <- Add this
            }
            else if (xhr.readyState == 4 && xhr.status != 200) {
                // Error. Inform the user
            }
        })

        formData.append('upload_preset', 'ujpu6gyk')
        formData.append('file', file)
        xhr.send(formData)
    }
    return (
        <>
            <div id="drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
                <form className="my-form">
                    <p>Upload multiple files with the file dialog or by dragging and dropping images onto the dashed region</p>
                    <input type="file" id="fileElem" multiple accept="image/*,application/pdf" onChange={handleFiles} />
                    <label className="button" htmlFor="fileElem">Select some files</label>
                </form>
                <progress id="progress-bar" max="100" value="0"></progress>
                <div id="gallery" />
            </div >
        </>
    );
}

export default Myuploader;