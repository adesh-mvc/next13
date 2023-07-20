"use client";
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
const DropzoneUploader = () => {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => {

        return { url: 'http://192.168.5.234/core/upload-test.php' }
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(f => f.meta))
        allFiles.forEach(f => f.remove())
    }

    return (
        <form>
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                accept="image/*,audio/*,video/*,application/pdf"
                multiple
                maxFiles={8}
            // autoUpload={false}
            // getUploadParams={this.getUploadParams}
            // InputComponent={null}
            // onSubmit={this.handleSubmit}
            // initialFiles={[file]}
            // canCancel={false}
            // canRemove={false}
            // canRestart={false}
            />
        </form>
    )
}
export default DropzoneUploader;