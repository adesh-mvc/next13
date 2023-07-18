"use client";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toster = () => {
    const notify = () => toast("Wow so easy!");
    useEffect(() => {
        // toast.success("Wow so easy!");
        toast("I use a custom id", {
            toastId: "customId"
        });
    }, [])
    return (
        <div>
            <button onClick={notify}>Notify!</button>
            <ToastContainer
                position="top-left"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
}
export default Toster;