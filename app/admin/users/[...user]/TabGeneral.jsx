import Select from 'react-select';
const TabGeneral = ({ optData, defaultData, TabGeneralDrop }) => {
    console.log('optData', optData)
    return (
        <div className="d-flex flex-column gap-7 gap-lg-10">
            {/*begin::General options*/}
            <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                    <div className="card-title">
                        <h2>General</h2>
                    </div>
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-0">
                    {/*begin::Input group*/}
                    <div className="fv-row w-100 flex-md-root fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                        {/*begin::Label*/}
                        <label className="required form-label">DropDown 1 </label>
                        {/*end::Label*/}
                        {/*begin::Select2*/}
                        <Select
                            defaultValue={defaultData}
                            options={optData}
                            onChange={TabGeneralDrop}
                        />
                        {/*end::Select2*/}

                        <div className="fv-plugins-message-container invalid-feedback" /></div>
                    {/*end::Input group*/}
                </div>
                {/*end::Card header*/}
            </div>
            {/*end::General options*/}

        </div>
    );
}

export default TabGeneral;