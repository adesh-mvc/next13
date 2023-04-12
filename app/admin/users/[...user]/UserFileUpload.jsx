import { useMutation, gql } from "@apollo/client";
const SINGLE_UPLOAD = gql`
  mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
      url
    }
  }
`;
const UserFileUpload = (() => {
    const [mutate, { loading, error }] = useMutation(SINGLE_UPLOAD);
    function onChange({
        target: {
            validity,
            files: [file],
        },
    }) {
        if (validity.valid) mutate({ variables: { file } });
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

    return (<>
        <div className="card card-flush py-4">
            {/*begin::Card header*/}
            <div className="card-header">
                {/*begin::Card title*/}
                <div className="card-title">
                    <h2>Thumbnail</h2>
                </div>
                {/*end::Card title*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body text-center pt-0">
                {/*begin::Image input*/}
                {/*begin::Image input placeholder*/}
                <style dangerouslySetInnerHTML={{ __html: "\n                .image-input-placeholder {\n                    background-image: url('../../../assets/media/svg/files/blank-image.svg');\n                }\n\n                [data-bs-theme=\"dark\"] .image-input-placeholder {\n                    background-image: url('../../../assets/media/svg/files/blank-image-dark.svg');\n                }                \n            " }} />
                {/*end::Image input placeholder*/}
                <div className="image-input image-input-empty image-input-outline image-input-placeholder mb-3" data-kt-image-input="true">
                    {/*begin::Preview existing avatar*/}
                    <div className="image-input-wrapper w-150px h-150px" />
                    {/*end::Preview existing avatar*/}
                    {/*begin::Label*/}
                    <label className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" aria-label="Change avatar" data-bs-original-title="Change avatar" data-kt-initialized={1}>
                        <i className="bi bi-pencil-fill fs-7" />
                        {/*begin::Inputs*/}
                        <input type="file" name="avatar" required onChange={onChange} accept=".png, .jpg, .jpeg" />
                        <input type="hidden" name="avatar_remove" />
                        {/*end::Inputs*/}
                    </label>
                    {/*end::Label*/}
                    {/*begin::Cancel*/}
                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" aria-label="Cancel avatar" data-bs-original-title="Cancel avatar" data-kt-initialized={1}>
                        <i className="bi bi-x fs-2" />
                    </span>
                    {/*end::Cancel*/}
                    {/*begin::Remove*/}
                    <span className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" aria-label="Remove avatar" data-bs-original-title="Remove avatar" data-kt-initialized={1}>
                        <i className="bi bi-x fs-2" />
                    </span>
                    {/*end::Remove*/}
                </div>
                {/*end::Image input*/}
                {/*begin::Description*/}
                <div className="text-muted fs-7">Set the product thumbnail image. Only *.png, *.jpg and *.jpeg image files are accepted</div>
                {/*end::Description*/}
            </div>
            {/*end::Card body*/}
        </div>
    </>)
});

export default UserFileUpload;