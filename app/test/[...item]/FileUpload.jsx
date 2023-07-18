"use client"
import axios from "axios";
export default function FileUpload() {
    async function uploadToS3(e) {
        const formData = new FormData(e.target);
        const file = formData.get('file');
        if (!file) {
            return null;
        }

        const fileType = encodeURIComponent(file.type);
        const { data } = await axios.get(`/api/media?fileType=${fileType}`);
        console.log(data)
        const { uploadUrl, key } = data;
        await axios.put(uploadUrl, file);
        return key;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const key = await uploadToS3(e);
    }
    return (<>
        <p>Please select file to upload</p>
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/jpeg image/png" name="file" />
            <button type="submit">upload</button>
        </form>
    </>)
}