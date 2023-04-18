export default function Spinner() {
    return (
        <>
            <h1>Loading...</h1>
            <div className="spinner spinner-primary spinner-lg mr-15">
                <span className="indicator-progress">
                    Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                </span>
            </div>
        </>
    )
}