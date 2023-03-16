import { getUsers } from "@/lib/UserApiData";
import { DataTable } from "./UserDataTable";

export default async function UserDataList() {
    const data = await getUsers();
    return (
        <>
            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start  container-xxl ">
                {/*begin::Post*/}
                <div className="content flex-row-fluid" id="kt_content">
                    {/*begin::Card*/}
                    <div className="card">
                        <DataTable

                            data={data}

                        />

                        {/*end::Card body*/}
                    </div>
                    {/*end::Card*/}					</div>
                {/*end::Post*/}
            </div>
        </>
    )
}