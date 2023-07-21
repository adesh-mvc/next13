"use client"
// https://arjunphp.com/merging-pdfs-nodejs-ghostscript/
import { useReducer, useState } from "react";
import Toster from "./Toster";
import { Uploader, ImageUpload } from "./S3Bucket";
import FileUpload from "./FileUpload";
import DropzoneUpload from "./DropzoneUpload";
import DropzoneUploader from "./DropzoneUploader";
import DropZone from "./DropZone";
import { useEffect } from "react";
export default function page({ params }) {
    // reducer function to handle state changes
    const reducer = (state, action) => {
        switch (action.type) {
            case "SET_IN_DROP_ZONE":
                return { ...state, inDropZone: action.inDropZone };
            case "ADD_FILE_TO_LIST":
                return { ...state, fileList: state.fileList.concat(action.files) };
            default:
                return state;
        }
    };

    // destructuring state and dispatch, initializing fileList to empty array
    const [data, dispatch] = useReducer(reducer, {
        inDropZone: false,
        fileList: [],
    });
    // console.log(params.item)
    const App = () => {

        const [files, setFile] = useState([]);
        const [message, setMessage] = useState();
        const handleFile = (e) => {
            setMessage("");
            let file = e.target.files;
            console.log("files", file)
            for (let i = 0; i < file.length; i++) {
                console.log("files", file[i])
                const fileType = file[i]['type'];
                const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
                if (validImageTypes.includes(fileType)) {

                    setFile(prevState => [...prevState, file[i]])
                } else {
                    setMessage("only images accepted");
                }

            }



        };
        const removeImage = (i) => {
            setFile(files.filter(x => x.name !== i));
        }




        const preview = () => {
            console.log("preview", files)
            return (<div className="flex flex-wrap gap-2 mt-2">
                {files.map((file, key) => {
                    return (

                        <div key={key} className='w-full h-16 flex items-center justify-between rounded p-3 bg-white'>
                            <div className="flex flex-row items-center gap-2">
                                <div className="h-12 w-12 ">
                                    <img className="w-full h-full rounded" src={URL.createObjectURL(file)} />
                                </div>
                                <span className="truncate w-44">{file.name}</span>
                            </div>
                            <div onClick={() => { removeImage(file.name) }} className="h-6 w-6 bg-red-400 flex items-center cursor-pointer justify-center rounded-sm">
                                <i className="mdi mdi-trash-can text-white text-[14px]"></i>
                            </div>
                        </div>

                    )
                })}



            </div>)
        }

        // preview();

        useEffect(() => {
            console.log("useEffect", files)
        }, [files])
        return (

            <>

                <div className="h-screen flex justify-center items-center bg-gray-900 px-2">

                    <div className="p-3 md:w-1/2 w-[360px] rounded-md">
                        <span className="flex justify-center items-center bg-white text-[12px] mb-1 text-red-500">{message}</span>
                        <div className="h-32 w-full overflow-hidden relative shadow-md border-2 items-center rounded-md cursor-pointer   border-gray-400 border-dotted">
                            <input type="file" onChange={handleFile} className="h-full w-full opacity-0 z-10 absolute" multiple name="files[]" />
                            <div className="h-full w-full bg-gray-200 absolute z-1 flex justify-center items-center top-0">
                                <div className="flex flex-col">
                                    <i className="mdi mdi-folder-open text-[30px] text-gray-400 text-center"></i>
                                    <span className="text-[12px]">{`Drag and Drop a file`}</span>
                                </div>
                            </div>
                        </div>
                        {preview()}
                    </div>
                </div>

            </>
        );

    }
    const Template = () => {
        if (params.item.indexOf('toster') !== -1) {
            return <Toster />
        } else if (params.item.indexOf('upload-s2') !== -1) {
            return <FileUpload />
        } else if (params.item.indexOf('upload') !== -1) {
            return <ImageUpload />
        } else if (params.item.indexOf('dzone') !== -1) {
            // return <DropZone data={data} dispatch={dispatch} />
            return <App />
        } else {
            return <h1>Hello World!</h1>
        }

    }
    return <Template />
}