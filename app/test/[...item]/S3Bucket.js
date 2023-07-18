"use client";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const Uploader = () => {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadUrl, setUploadUrl] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return;

        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            setUploadUrl(data.url);
            setUploading(false);
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploading(false);
        }
    };

    return (
        <div>
            <h2>Upload Images and Videos</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
                <button type="submit" disabled={!file || uploading}>
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            {uploadUrl && <p>File uploaded successfully! <a href={uploadUrl} target="_blank" rel="noopener noreferrer">View File</a></p>}
        </div>
    );
};

export const ImageUpload = () => {
    const uploadInput = useRef(null);
    const [uploadState, setUploadState] = useState({});

    const handleUpload = (ev) => {
        let file = uploadInput.current.files[0];
        console.log(file)
        // Split the filename to get the name and type
        let fileParts = uploadInput.current.files[0].name.split(".");
        let fileName = fileParts[0];
        let fileType = fileParts[1];

        // Post the file information to the server to obtain a signed URL
        axios
            .post("/api/upload", {
                fileName: fileName,
                fileType: fileType,
                key: file.name
            })
            .then((res) => {
                const signedRequest = res.data.signedRequest;
                const url = res.data.url;
                setUploadState({
                    ...uploadState,
                    url,
                });

                // Perform the actual upload using the signed URL
                const options = {
                    headers: {
                        "Content-Type": fileType,
                    },
                };
                axios
                    .put(signedRequest, file, options)
                    .then((_) => {
                        setUploadState({ ...uploadState, success: true });
                        toast("success", "Image uploaded successfully");
                    })
                    .catch((_) => {
                        toast("error", "We could not upload your image");
                    });
            })
            .catch((error) => {
                toast("error", "We could not upload your image");
            });
    };

    return (
        <div>
            <input type="file" ref={uploadInput} onChange={handleUpload} style={{ display: "none" }} />
            <button onClick={() => uploadInput.current.click()}>Upload Image</button>
            {uploadState.success && <p>Image uploaded successfully!</p>}
        </div>
    );
};
/*
*  [21:04, 16/07/2023] ॐ: AKIAYD42WOPWQW7TKFNR
[21:04, 16/07/2023] ॐ: sd9sP3di9EQdfBn4ABnxqslIvQGs7SzZPiXWxGlV
[21:06, 16/07/2023] ॐ: mycdapp
[21:06, 16/07/2023] ॐ: ap-south-1
*/
// export default Uploader;