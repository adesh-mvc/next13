import Select from 'react-select';
const TabAdvance = ({ optData, defaultAdvance, TabAdvanceDrop }) => {
    console.log(optData)
    return (
        <div className="d-flex flex-column gap-7 gap-lg-10">
            {/*begin::Inventory*/}
            <div className="card card-flush py-4">
                {/*begin::Card header*/}
                <div className="card-header">
                    <div className="card-title">
                        <h2>Inventory</h2>
                    </div>
                </div>
                {/*end::Card header*/}
                {/*begin::Card body*/}
                <div className="card-body pt-0">
                    <Select
                        value={defaultAdvance}
                        options={optData}
                        onChange={TabAdvanceDrop}
                    />
                </div>
                {/*end::Card header*/}
            </div>
            {/*end::Inventory*/}

        </div>
    );
}

export default TabAdvance;