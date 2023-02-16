export default function Head() {
  return (

    <>
      <title>
        Admin
      </title>


      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
      {/*begin::Fonts(mandatory for all pages)*/}
      {/* <link
        rel="preconnect"
        href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700"
      /> */}
      {/*end::Fonts*/}
      {/*begin::Vendor Stylesheets(used for this page only)*/}
      <link
        href="assets/plugins/custom/fullcalendar/fullcalendar.bundle.css"
        rel="preconnect"
        type="text/css"
      />
      <link
        href="assets/plugins/custom/datatables/datatables.bundle.css"
        rel="preconnect"
        type="text/css"
      />
      {/*end::Vendor Stylesheets*/}
      {/*begin::Global Stylesheets Bundle(mandatory for all pages)*/}
      {/*    <link
        href="assets/plugins/global/plugins.bundle.css"
        rel="preconnect"
        type="text/css"
      /> */}
      {/* <link href="assets/css/style.bundle.css" rel="preconnect" type="text/css" /> */}
      {/*end::Global Stylesheets Bundle*/}
    </>


  )
}
