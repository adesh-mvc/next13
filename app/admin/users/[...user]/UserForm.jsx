"use client";

import { useEffect } from "react";


// import "@/public/assets/plugins/custom/formrepeater/formrepeater.bundle.js"
export default function UserForm() {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = "/assets/plugins/custom/formrepeater/formrepeater.bundle.js";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    // Init form repeater --- more info: https://github.com/DubFriend/jquery.repeater
    const initFormRepeater = () => {
        $('#kt_ecommerce_add_product_options').repeater({
            initEmpty: false,

            defaultValues: {
                'text-input': 'foo'
            },

            show: function () {
                $(this).slideDown();

                // Init select2 on new repeated items
                // initConditionsSelect2();
            },

            hide: function (deleteElement) {
                $(this).slideUp(deleteElement);
            }
        });
    }


    var select2FocusFixInitialized = false;
    var createSelect2 = function () {
        // Check if jQuery included
        if (typeof jQuery == 'undefined') {
            return;
        }

        // Check if select2 included
        if (typeof $.fn.select2 === 'undefined') {
            return;
        }

        var elements = [].slice.call(document.querySelectorAll('[data-control="select2"], [data-kt-select2="true"]'));

        elements.map(function (element) {
            if (element.getAttribute("data-kt-initialized") === "1") {
                return;
            }

            var options = {
                dir: document.body.getAttribute('direction')
            };

            if (element.getAttribute('data-hide-search') == 'true') {
                options.minimumResultsForSearch = Infinity;
            }

            $(element).select2(options);

            element.setAttribute("data-kt-initialized", "1");
        });

        /*
        * Hacky fix for a bug in select2 with jQuery 3.6.0's new nested-focus "protection"
        * see: https://github.com/select2/select2/issues/5993
        * see: https://github.com/jquery/jquery/issues/4382
        *
        * TODO: Recheck with the select2 GH issue and remove once this is fixed on their side
        */

        if (select2FocusFixInitialized === false) {
            select2FocusFixInitialized = true;

            $(document).on('select2:open', function (e) {
                var elements = document.querySelectorAll('.select2-container--open .select2-search__field');
                if (elements.length > 0) {
                    elements[elements.length - 1].focus();
                }
            });
        }
    }

    const handleShipping = () => {
        alert()
        // const shippingOption = document.getElementById('kt_ecommerce_add_product_shipping_checkbox');
        // const shippingForm = document.getElementById('kt_ecommerce_add_product_shipping');

        // shippingOption.addEventListener('change', e => {
        //     const value = e.target.checked;

        //     if (value) {
        //         shippingForm.classList.remove('d-none');
        //     } else {
        //         shippingForm.classList.add('d-none');
        //     }
        // });
    }
    // Init condition select2
    const initConditionsSelect2 = () => {

        // alert('Tnit new repeating condition types')
        // Tnit new repeating condition types
        const allConditionTypes = document.querySelectorAll('[data-kt-ecommerce-catalog-add-product="product_option"]');
        console.log("allConditionTypes:", allConditionTypes);
        allConditionTypes.forEach(type => {
            if ($(type).hasClass("select2-hidden-accessible")) {
                return;
            } else {
                $(type).select2({
                    minimumResultsForSearch: -1
                });
            }
        });
    }
    // Category status handler
    const handleStatus = () => {
        const target = document.getElementById('kt_ecommerce_add_product_status');
        const select = document.getElementById('kt_ecommerce_add_product_status_select');
        const statusClasses = ['bg-success', 'bg-warning', 'bg-danger'];

        $(select).on('change', function (e) {
            const value = e.target.value;

            switch (value) {
                case "published": {
                    target.classList.remove(...statusClasses);
                    target.classList.add('bg-success');
                    hideDatepicker();
                    break;
                }
                case "scheduled": {
                    target.classList.remove(...statusClasses);
                    target.classList.add('bg-warning');
                    showDatepicker();
                    break;
                }
                case "inactive": {
                    target.classList.remove(...statusClasses);
                    target.classList.add('bg-danger');
                    hideDatepicker();
                    break;
                }
                case "draft": {
                    target.classList.remove(...statusClasses);
                    target.classList.add('bg-primary');
                    hideDatepicker();
                    break;
                }
                default:
                    break;
            }
        });


        // Handle datepicker
        const datepicker = document.getElementById('kt_ecommerce_add_product_status_datepicker');

        // Init flatpickr --- more info: https://flatpickr.js.org/
        $('#kt_ecommerce_add_product_status_datepicker').flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i",
        });

        const showDatepicker = () => {
            datepicker.parentNode.classList.remove('d-none');
        }

        const hideDatepicker = () => {
            datepicker.parentNode.classList.add('d-none');
        }
    }
    function initDropzones() {
        $('.dropzone').each(function () {

            let dropzoneControl = $(this)[0].dropzone;
            if (dropzoneControl) {
                dropzoneControl.destroy();
            }
        });
    }
    // Init DropzoneJS --- more info:
    const initDropzone = () => {
        //     Dropzone.options.someDropzone = {
        //         url: "/file/post"
        //       };
        var myDropzone = new Dropzone("#kt_ecommerce_add_product_media", {
            url: `${process.env.NEXTAUTH_URL}/void.php`, // Set the url for your upload script location
            paramName: "file", // The name that will be used to transfer the file
            maxFiles: 10,
            maxFilesize: 10, // MB
            addRemoveLinks: true,
            accept: function (file, done) {
                if (file.name == "wow.jpg") {
                    // done("Naha, you don't.");
                } else {
                    // done();
                }
            }
        });
    }
    useEffect(() => {
        createSelect2();
        initConditionsSelect2();

        handleStatus();
        initDropzones();
        initDropzone();
        setTimeout(() => {
            initFormRepeater();
        }, 500);
    }, [])
    return (
        <>
            {/* <Script src={`/assets/plugins/custom/formrepeater/formrepeater.bundle.js`} /> */}

            <div className="toolbar mb-n1 pt-3 mb-lg-n3 pt-lg-6" id="kt_toolbar">
                {/*begin::Container*/}
                <div id="kt_toolbar_container" className=" container-xxl  d-flex flex-stack flex-wrap gap-2">
                    {/*begin::Page title*/}
                    <div className="page-title d-flex flex-column align-items-start me-3 py-2 py-lg-0 gap-2">
                        {/*begin::Title*/}
                        <h1 className="d-flex text-dark fw-bold m-0 fs-3">
                            Product Form
                        </h1>
                        {/*end::Title*/}
                        {/*begin::Breadcrumb*/}
                        <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7">
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-600">
                                <a href="../../../index.html" className="text-gray-600 text-hover-primary">
                                    Home                          </a>
                            </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-600">
                                eCommerce                                          </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-600">
                                Catalog                                          </li>
                            {/*end::Item*/}
                            {/*begin::Item*/}
                            <li className="breadcrumb-item text-gray-500">
                                Add Product                  </li>
                            {/*end::Item*/}
                        </ul>
                        {/*end::Breadcrumb*/}
                    </div>
                    {/*end::Page title*/}
                    {/*begin::Actions*/}
                    <div className="d-flex align-items-center">
                        {/*begin::Button*/}
                        <a href="#" className="btn btn-icon btn-color-primary bg-body w-35px h-35px w-lg-40px h-lg-40px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">
                            {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-md-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z" fill="currentColor" />
                                <path d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z" fill="currentColor" />
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}
                        </a>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <a href="#" className="btn btn-icon btn-color-success bg-body w-35px h-35px w-lg-40px h-lg-40px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_campaign">
                            {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-md-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM16 13.5L12.5 13V10C12.5 9.4 12.6 9.5 12 9.5C11.4 9.5 11.5 9.4 11.5 10L11 13L8 13.5C7.4 13.5 7 13.4 7 14C7 14.6 7.4 14.5 8 14.5H11V18C11 18.6 11.4 19 12 19C12.6 19 12.5 18.6 12.5 18V14.5L16 14C16.6 14 17 14.6 17 14C17 13.4 16.6 13.5 16 13.5Z" fill="currentColor" />
                                <rect x={11} y={19} width={10} height={2} rx={1} transform="rotate(-90 11 19)" fill="currentColor" />
                                <rect x={7} y={13} width={10} height={2} rx={1} fill="currentColor" />
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}
                        </a>
                        {/*end::Button*/}
                        {/*begin::Button*/}
                        <a href="#" className="btn btn-icon btn-color-warning bg-body w-35px h-35px w-lg-40px h-lg-40px me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">
                            {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
                            <span className="svg-icon svg-icon-2 svg-icon-md-1"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z" fill="currentColor" />
                                <rect x={7} y={17} width={6} height={2} rx={1} fill="currentColor" />
                                <rect x={7} y={12} width={10} height={2} rx={1} fill="currentColor" />
                                <rect x={7} y={7} width={6} height={2} rx={1} fill="currentColor" />
                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}
                        </a>
                        {/*end::Button*/}
                        {/*begin::Daterange*/}
                        <a href="#" className="btn btn-flex bg-body h-35px h-lg-40px px-5" id="kt_dashboard_daterangepicker" data-bs-toggle="tooltip" data-bs-dismiss="click" data-bs-trigger="hover" data-bs-original-title="Select dashboard daterange" data-kt-initialized={1}>
                            <span className="me-4">
                                <span className="text-muted fw-semibold me-1" id="kt_dashboard_daterangepicker_title">Today:</span>
                                <span className="text-primary fw-bold" id="kt_dashboard_daterangepicker_date">Mar 16</span>
                            </span>
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                            <span className="svg-icon svg-icon-4 m-0"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor" />
                            </svg>
                            </span>
                            {/*end::Svg Icon*/}          </a>
                        {/*end::Daterange*/}
                    </div>
                    {/*end::Actions*/}
                </div>
                {/*end::Container*/}
            </div>

            <div id="kt_content_container" className="d-flex flex-column-fluid align-items-start  container-xxl ">
                {/*begin::Post*/}
                <div className="content flex-row-fluid" id="kt_content">
                    {/*begin::Form*/}
                    <form id="kt_ecommerce_add_product_form" className="form d-flex flex-column flex-lg-row fv-plugins-bootstrap5 fv-plugins-framework" data-kt-redirect="products.html">
                        {/*begin::Aside column*/}
                        <div className="d-flex flex-column gap-7 gap-lg-10 w-100 w-lg-300px mb-7 me-lg-10">
                            {/*begin::Thumbnail settings*/}
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
                                            <input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
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
                            {/*end::Thumbnail settings*/}
                            {/*begin::Status*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Status</h2>
                                    </div>
                                    {/*end::Card title*/}
                                    {/*begin::Card toolbar*/}
                                    <div className="card-toolbar">
                                        <div className="rounded-circle bg-success w-15px h-15px" id="kt_ecommerce_add_product_status" />
                                    </div>
                                    {/*begin::Card toolbar*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Select2*/}

                                    <select
                                        className="form-select mb-2"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Select an option"
                                        id="kt_ecommerce_add_product_status_select"
                                    >
                                        <option />
                                        <option value="published" selected="">
                                            Published
                                        </option>
                                        <option value="draft">Draft</option>
                                        <option value="scheduled">Scheduled</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Set the product status.</div>
                                    {/*end::Description*/}
                                    {/*begin::Datepicker*/}
                                    <div className="d-none mt-10">
                                        <label htmlFor="kt_ecommerce_add_product_status_datepicker" className="form-label">Select publishing date and time</label>
                                        <input className="form-control flatpickr-input" id="kt_ecommerce_add_product_status_datepicker" placeholder="Pick date & time" type="text" readOnly="readonly" />
                                    </div>
                                    {/*end::Datepicker*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Status*/}
                            {/*begin::Category & tags*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Product Details</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Input group*/}
                                    {/*begin::Label*/}
                                    <label className="form-label">Categories</label>
                                    {/*end::Label*/}
                                    {/*begin::Select2*/}
                                    <select className="form-select mb-2 select2-hidden-accessible" data-control="select2" data-placeholder="Select an option" data-allow-clear="true" multiple data-select2-id="select2-data-9-wnz3" tabIndex={-1} aria-hidden="true" data-kt-initialized={1}>
                                        <option />
                                        <option value="Computers">Computers</option>
                                        <option value="Watches">Watches</option>
                                        <option value="Headphones">Headphones</option>
                                        <option value="Footwear">Footwear</option>
                                        <option value="Cameras">Cameras</option>
                                        <option value="Shirts">Shirts</option>
                                        <option value="Household">Household</option>
                                        <option value="Handbags">Handbags</option>
                                        <option value="Wines">Wines</option>
                                        <option value="Sandals">Sandals</option>
                                    </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-10-t2nw" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--multiple form-select mb-2" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={-1} aria-disabled="false"><ul className="select2-selection__rendered" id="select2-a0mz-container" /><span className="select2-search select2-search--inline"><textarea className="select2-search__field" type="search" tabIndex={0} autoCorrect="off" autoCapitalize="none" spellCheck="false" role="searchbox" aria-autocomplete="list" autoComplete="off" aria-label="Search" aria-describedby="select2-a0mz-container" placeholder="Select an option" style={{ width: '100%' }} defaultValue={""} /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7 mb-7">Add product to a category.</div>
                                    {/*end::Description*/}
                                    {/*end::Input group*/}
                                    {/*begin::Button*/}
                                    <a href="add-category.html" className="btn btn-light-primary btn-sm mb-10">
                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                        <span className="svg-icon svg-icon-2"><svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.5" x={11} y={18} width={12} height={2} rx={1} transform="rotate(-90 11 18)" fill="currentColor" />
                                            <rect x={6} y={11} width={12} height={2} rx={1} fill="currentColor" />
                                        </svg></span>
                                        {/*end::Svg Icon*/}            Create new category
                                    </a>
                                    {/*end::Button*/}
                                    {/*begin::Input group*/}
                                    {/*begin::Label*/}
                                    <label className="form-label d-block">Tags</label>
                                    {/*end::Label*/}
                                    {/*begin::Input*/}
                                    <tags className="tagify form-control mb-2 tagify--noTags tagify--empty" tabIndex={-1}>
                                        <span contentEditable tabIndex={0} data-placeholder="​" aria-placeholder className="tagify__input" role="textbox" aria-autocomplete="both" aria-multiline="false" />

                                    </tags><input id="kt_ecommerce_add_product_tags" name="kt_ecommerce_add_product_tags" className="form-control mb-2" defaultValue tabIndex={-1} />
                                    {/*end::Input*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Add tags to a product.</div>
                                    {/*end::Description*/}
                                    {/*end::Input group*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Category & tags*/}
                            {/*begin::Weekly sales*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Weekly Sales</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    <span className="text-muted">No data available. Sales data will begin capturing once product has been published.</span>
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Weekly sales*/}
                            {/*begin::Template settings*/}
                            <div className="card card-flush py-4">
                                {/*begin::Card header*/}
                                <div className="card-header">
                                    {/*begin::Card title*/}
                                    <div className="card-title">
                                        <h2>Product Template</h2>
                                    </div>
                                    {/*end::Card title*/}
                                </div>
                                {/*end::Card header*/}
                                {/*begin::Card body*/}
                                <div className="card-body pt-0">
                                    {/*begin::Select store template*/}
                                    <label htmlFor="kt_ecommerce_add_product_store_template" className="form-label">Select a product template</label>
                                    {/*end::Select store template*/}
                                    {/*begin::Select2*/}
                                    <select className="form-select mb-2 select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Select an option" id="kt_ecommerce_add_product_store_template" data-select2-id="select2-data-kt_ecommerce_add_product_store_template" tabIndex={-1} aria-hidden="true" data-kt-initialized={1}>
                                        <option />
                                        <option value="default" selected data-select2-id="select2-data-12-oeqr">Default template</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="office">Office stationary</option>
                                        <option value="fashion">Fashion</option>
                                    </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-11-0lxx" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single form-select mb-2" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-kt_ecommerce_add_product_store_template-container" aria-controls="select2-kt_ecommerce_add_product_store_template-container"><span className="select2-selection__rendered" id="select2-kt_ecommerce_add_product_store_template-container" role="textbox" aria-readonly="true" title="Default template">Default template</span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                    {/*end::Select2*/}
                                    {/*begin::Description*/}
                                    <div className="text-muted fs-7">Assign a template from your current theme to define how a single product is displayed.</div>
                                    {/*end::Description*/}
                                </div>
                                {/*end::Card body*/}
                            </div>
                            {/*end::Template settings*/}  </div>
                        {/*end::Aside column*/}
                        {/*begin::Main column*/}
                        <div className="d-flex flex-column flex-row-fluid gap-7 gap-lg-10">
                            {/*begin:::Tabs*/}
                            <ul className="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-semibold mb-n2" role="tablist">
                                {/*begin:::Tab item*/}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link text-active-primary pb-4 active" data-bs-toggle="tab" href="#kt_ecommerce_add_product_general" aria-selected="true" role="tab">General</a>
                                </li>
                                {/*end:::Tab item*/}
                                {/*begin:::Tab item*/}
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link text-active-primary pb-4" data-bs-toggle="tab" href="#kt_ecommerce_add_product_advanced" aria-selected="false" role="tab" tabIndex={-1}>Advanced</a>
                                </li>
                                {/*end:::Tab item*/}
                            </ul>
                            {/*end:::Tabs*/}
                            {/*begin::Tab content*/}
                            <div className="tab-content">
                                {/*begin::Tab pane*/}
                                <div className="tab-pane fade active show" id="kt_ecommerce_add_product_general" role="tab-panel">
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
                                                <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Product Name</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="product_name" className="form-control mb-2" placeholder="Product name" defaultValue />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">A product name is required and recommended to be unique.</div>
                                                    {/*end::Description*/}
                                                    <div className="fv-plugins-message-container invalid-feedback"><div data-field="product_name" data-validator="notEmpty">Product name is required</div></div></div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div>
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Description</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Editor*/}
                                                    <div className="ql-toolbar ql-snow"><span className="ql-formats"><span className="ql-header ql-picker"><span className="ql-picker-label" tabIndex={0} role="button" aria-expanded="false" aria-controls="ql-picker-options-0"><svg viewBox="0 0 18 18"> <polygon className="ql-stroke" points="7 11 9 13 11 11 7 11" /> <polygon className="ql-stroke" points="7 7 9 5 11 7 7 7" /> </svg></span><span className="ql-picker-options" aria-hidden="true" tabIndex={-1} id="ql-picker-options-0"><span tabIndex={0} role="button" className="ql-picker-item" data-value={1} /><span tabIndex={0} role="button" className="ql-picker-item" data-value={2} /><span tabIndex={0} role="button" className="ql-picker-item ql-selected" /></span></span><select className="ql-header" style={{ display: 'none' }}><option value={1} /><option value={2} /><option selected="selected" /></select></span><span className="ql-formats"><button type="button" className="ql-bold"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z" /> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z" /> </svg></button><button type="button" className="ql-italic"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={7} x2={13} y1={4} y2={4} /> <line className="ql-stroke" x1={5} x2={11} y1={14} y2={14} /> <line className="ql-stroke" x1={8} x2={10} y1={14} y2={4} /> </svg></button><button type="button" className="ql-underline"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3" /> <rect className="ql-fill" height={1} rx="0.5" ry="0.5" width={12} x={3} y={15} /> </svg></button></span><span className="ql-formats"><button type="button" className="ql-image"><svg viewBox="0 0 18 18"> <rect className="ql-stroke" height={10} width={12} x={3} y={4} /> <circle className="ql-fill" cx={6} cy={7} r={1} /> <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12" /> </svg></button><button type="button" className="ql-code-block"><svg viewBox="0 0 18 18"> <polyline className="ql-even ql-stroke" points="5 7 3 9 5 11" /> <polyline className="ql-even ql-stroke" points="13 7 15 9 13 11" /> <line className="ql-stroke" x1={10} x2={8} y1={5} y2={13} /> </svg></button></span></div><div id="kt_ecommerce_add_product_description" name="kt_ecommerce_add_product_description" className="min-h-200px mb-2 ql-container ql-snow"><div className="ql-editor ql-blank" data-gramm="false" contentEditable="true" data-placeholder="Type your text here..."><p><br /></p></div><div className="ql-clipboard" contentEditable="true" tabIndex={-1} /><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank" /><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a className="ql-action" /><a className="ql-remove" /></div></div>
                                                    {/*end::Editor*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set a description to the product for better visibility.</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::General options*/}
                                        {/*begin::Media*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Media</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-2">
                                                    {/*begin::Dropzone*/}
                                                    <div className="dropzone dz-clickable" id="kt_ecommerce_add_product_media">
                                                        {/*begin::Message*/}
                                                        <div className="dz-message needsclick">
                                                            {/*begin::Icon*/}
                                                            <i className="bi bi-file-earmark-arrow-up text-primary fs-3x" />
                                                            {/*end::Icon*/}
                                                            {/*begin::Info*/}
                                                            <div className="ms-4">
                                                                <h3 className="fs-5 fw-bold text-gray-900 mb-1">Drop files here or click to upload.</h3>
                                                                <span className="fs-7 fw-semibold text-gray-400">Upload up to 10 files</span>
                                                            </div>
                                                            {/*end::Info*/}
                                                        </div>
                                                    </div>
                                                    {/*end::Dropzone*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Description*/}
                                                <div className="text-muted fs-7">Set the product media gallery.</div>
                                                {/*end::Description*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Media*/}
                                        {/*begin::Pricing*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Pricing</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Base Price</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="price" className="form-control mb-2" placeholder="Product price" defaultValue />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set the product price.</div>
                                                    {/*end::Description*/}
                                                    <div className="fv-plugins-message-container invalid-feedback"><div data-field="price" data-validator="notEmpty">Product base price is required</div></div></div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="fs-6 fw-semibold mb-2">
                                                        Discount Type
                                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Select a discount type that will be applied to this product" data-bs-original-title="Select a discount type that will be applied to this product" data-kt-initialized={1} />
                                                    </label>
                                                    {/*End::Label*/}
                                                    {/*begin::Row*/}
                                                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-1 row-cols-xl-3 g-9" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button='true']" data-kt-initialized={1}>
                                                        {/*begin::Col*/}
                                                        <div className="col">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary active d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="discount_option" defaultValue={1} defaultChecked="checked" />
                                                                </span>
                                                                {/*end::Radio*/}
                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 d-block">No Discount</span>
                                                                </span>
                                                                {/*end::Info*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                        {/*begin::Col*/}
                                                        <div className="col">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary  d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="discount_option" defaultValue={2} />
                                                                </span>
                                                                {/*end::Radio*/}
                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 d-block">Percentage %</span>
                                                                </span>
                                                                {/*end::Info*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                        {/*begin::Col*/}
                                                        <div className="col">
                                                            {/*begin::Option*/}
                                                            <label className="btn btn-outline btn-outline-dashed btn-active-light-primary d-flex text-start p-6" data-kt-button="true">
                                                                {/*begin::Radio*/}
                                                                <span className="form-check form-check-custom form-check-solid form-check-sm align-items-start mt-1">
                                                                    <input className="form-check-input" type="radio" name="discount_option" defaultValue={3} />
                                                                </span>
                                                                {/*end::Radio*/}
                                                                {/*begin::Info*/}
                                                                <span className="ms-5">
                                                                    <span className="fs-4 fw-bold text-gray-800 d-block">Fixed Price</span>
                                                                </span>
                                                                {/*end::Info*/}
                                                            </label>
                                                            {/*end::Option*/}
                                                        </div>
                                                        {/*end::Col*/}
                                                    </div>
                                                    {/*end::Row*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="d-none mb-10 fv-row" id="kt_ecommerce_add_product_discount_percentage">
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Set Discount Percentage</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Slider*/}
                                                    <div className="d-flex flex-column text-center mb-5">
                                                        <div className="d-flex align-items-start justify-content-center mb-7">
                                                            <span className="fw-bold fs-3x" id="kt_ecommerce_add_product_discount_label">10</span>
                                                            <span className="fw-bold fs-4 mt-1 ms-2">%</span>
                                                        </div>
                                                        <div id="kt_ecommerce_add_product_discount_slider" className="noUi-sm noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"><div className="noUi-base"><div className="noUi-connects" /><div className="noUi-origin" style={{ transform: 'translate(-90.9091%, 0px)', zIndex: 4 }}><div className="noUi-handle noUi-handle-lower" data-handle={0} tabIndex={0} role="slider" aria-orientation="horizontal" aria-valuemin={1.0} aria-valuemax={100.0} aria-valuenow={10.0} aria-valuetext={10.00}><div className="noUi-touch-area" /></div></div></div></div>
                                                    </div>
                                                    {/*end::Slider*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set a percentage discount to be applied on this product.</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="d-none mb-10 fv-row" id="kt_ecommerce_add_product_discount_fixed">
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Fixed Discounted Price</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="dicsounted_price" className="form-control mb-2" placeholder="Discounted price" />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set the discounted product price. The product will be reduced at the determined fixed price</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Tax*/}
                                                <div className="d-flex flex-wrap gap-5">
                                                    {/*begin::Input group*/}
                                                    <div className="fv-row w-100 flex-md-root fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                                                        {/*begin::Label*/}
                                                        <label className="required form-label">Tax Class</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Select2*/}
                                                        <select className="form-select mb-2 select2-hidden-accessible" name="tax" data-control="select2" data-hide-search="true" data-placeholder="Select an option" data-select2-id="select2-data-13-01wn" tabIndex={-1} aria-hidden="true" data-kt-initialized={1}>
                                                            <option data-select2-id="select2-data-15-geqo" />
                                                            <option value={0}>Tax Free</option>
                                                            <option value={1}>Taxable Goods</option>
                                                            <option value={2}>Downloadable Product</option>
                                                        </select><span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-14-qvpp" style={{ width: '100%' }}><span className="selection"><span className="select2-selection select2-selection--single form-select mb-2" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex={0} aria-disabled="false" aria-labelledby="select2-tax-vi-container" aria-controls="select2-tax-vi-container"><span className="select2-selection__rendered" id="select2-tax-vi-container" role="textbox" aria-readonly="true" title="Select an option"><span className="select2-selection__placeholder">Select an option</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation" /></span></span></span><span className="dropdown-wrapper" aria-hidden="true" /></span>
                                                        {/*end::Select2*/}
                                                        {/*begin::Description*/}
                                                        <div className="text-muted fs-7">Set the product tax class.</div>
                                                        {/*end::Description*/}
                                                        <div className="fv-plugins-message-container invalid-feedback" /></div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="fv-row w-100 flex-md-root">
                                                        {/*begin::Label*/}
                                                        <label className="form-label">VAT Amount (%)</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Input*/}
                                                        <input type="text" className="form-control mb-2" defaultValue />
                                                        {/*end::Input*/}
                                                        {/*begin::Description*/}
                                                        <div className="text-muted fs-7">Set the product VAT about.</div>
                                                        {/*end::Description*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                </div>
                                                {/*end:Tax*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Pricing*/}
                                    </div>
                                </div>
                                {/*end::Tab pane*/}
                                {/*begin::Tab pane*/}
                                <div className="tab-pane fade" id="kt_ecommerce_add_product_advanced" role="tab-panel">
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
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">SKU</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="sku" className="form-control mb-2" placeholder="SKU Number" defaultValue />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Enter the product SKU.</div>
                                                    {/*end::Description*/}
                                                    <div className="fv-plugins-message-container invalid-feedback"><div data-field="sku" data-validator="notEmpty">Product barcode is required</div></div></div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Barcode</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" name="sku" className="form-control mb-2" placeholder="Barcode Number" defaultValue />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Enter the product barcode number.</div>
                                                    {/*end::Description*/}
                                                    <div className="fv-plugins-message-container invalid-feedback"><div data-field="sku" data-validator="notEmpty">Product barcode is required</div></div></div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-10 fv-row fv-plugins-icon-container fv-plugins-bootstrap5-row-valid">
                                                    {/*begin::Label*/}
                                                    <label className="required form-label">Quantity</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <div className="d-flex gap-3">
                                                        <input type="number" name="shelf" className="form-control mb-2" placeholder="On shelf" defaultValue />
                                                        <input type="number" name="warehouse" className="form-control mb-2" placeholder="In warehouse" />
                                                    </div>
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Enter the product quantity.</div>
                                                    {/*end::Description*/}
                                                    <div className="fv-plugins-message-container invalid-feedback" /></div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="fv-row">
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Allow Backorders</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                                        <input className="form-check-input" type="checkbox" defaultValue />
                                                        <label className="form-check-label">
                                                            Yes
                                                        </label>
                                                    </div>
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Allow customers to purchase products that are out of stock.</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Inventory*/}
                                        {/*begin::Variations*/}
                                        <div className="card card-flush py-4" data-select2-id="select2-data-152-2rn0">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Variations</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0" data-select2-id="select2-data-151-5i3l">
                                                {/*begin::Input group*/}
                                                <div
                                                    className=""
                                                    data-kt-ecommerce-catalog-add-product="auto-options"
                                                    data-select2-id="select2-data-150-go5e"
                                                >
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Add Product Variations</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Repeater*/}
                                                    <div
                                                        id="kt_ecommerce_add_product_options"
                                                        data-select2-id="select2-data-kt_ecommerce_add_product_options"
                                                    >
                                                        {/*begin::Form group*/}
                                                        <div className="form-group" data-select2-id="select2-data-149-39rs">
                                                            <div
                                                                data-repeater-list="kt_ecommerce_add_product_options"
                                                                className="d-flex flex-column gap-3"
                                                                data-select2-id="select2-data-148-jg7i"
                                                            >
                                                                <div
                                                                    data-repeater-item=""
                                                                    className="form-group d-flex flex-wrap align-items-center gap-5"
                                                                    style={{}}
                                                                    data-select2-id="select2-data-147-qtvj"
                                                                >
                                                                    {/*begin::Select2*/}
                                                                    <div
                                                                        className="w-100 w-md-200px"
                                                                        data-select2-id="select2-data-146-mkhy"
                                                                    >
                                                                        <select
                                                                            className="form-select select2-hidden-accessible"
                                                                            name="kt_ecommerce_add_product_options[0][product_option]"
                                                                            data-placeholder="Select a variation"
                                                                            data-kt-ecommerce-catalog-add-product="product_option"
                                                                            data-select2-id="select2-data-142-d74c"
                                                                            tabIndex={-1}
                                                                            aria-hidden="true"
                                                                        >
                                                                            <option data-select2-id="select2-data-144-93l4" />
                                                                            <option value="color" data-select2-id="select2-data-159-gchk">
                                                                                Color
                                                                            </option>
                                                                            <option value="size" data-select2-id="select2-data-160-zmbs">
                                                                                Size
                                                                            </option>
                                                                            <option
                                                                                value="material"
                                                                                data-select2-id="select2-data-161-4xul"
                                                                            >
                                                                                Material
                                                                            </option>
                                                                            <option value="style" data-select2-id="select2-data-162-c5gk">
                                                                                Style
                                                                            </option>
                                                                        </select>
                                                                        <span
                                                                            className="select2 select2-container select2-container--bootstrap5 select2-container--below"
                                                                            dir="ltr"
                                                                            data-select2-id="select2-data-143-fsrd"
                                                                            style={{ width: "100%" }}
                                                                        >
                                                                            <span className="selection">
                                                                                <span
                                                                                    className="select2-selection select2-selection--single form-select"
                                                                                    role="combobox"
                                                                                    aria-haspopup="true"
                                                                                    aria-expanded="false"
                                                                                    tabIndex={0}
                                                                                    aria-disabled="false"
                                                                                    aria-labelledby="select2-kt_ecommerce_add_product_options0product_option-dc-container"
                                                                                    aria-controls="select2-kt_ecommerce_add_product_options0product_option-dc-container"
                                                                                >
                                                                                    <span
                                                                                        className="select2-selection__rendered"
                                                                                        id="select2-kt_ecommerce_add_product_options0product_option-dc-container"
                                                                                        role="textbox"
                                                                                        aria-readonly="true"
                                                                                        title="Select a variation"
                                                                                    >
                                                                                        <span className="select2-selection__placeholder">
                                                                                            Select a variation
                                                                                        </span>
                                                                                    </span>
                                                                                    <span
                                                                                        className="select2-selection__arrow"
                                                                                        role="presentation"
                                                                                    >
                                                                                        <b role="presentation" />
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                            <span className="dropdown-wrapper" aria-hidden="true" />
                                                                        </span>
                                                                    </div>
                                                                    {/*end::Select2*/}
                                                                    {/*begin::Input*/}
                                                                    <input
                                                                        type="text"
                                                                        className="form-control mw-100 w-200px"
                                                                        name="kt_ecommerce_add_product_options[0][product_option_value]"
                                                                        placeholder="Variation"
                                                                    />
                                                                    {/*end::Input*/}
                                                                    <button
                                                                        type="button"
                                                                        data-repeater-delete=""
                                                                        className="btn btn-sm btn-icon btn-light-danger"
                                                                    >
                                                                        {/*begin::Svg Icon | path: icons/duotune/arrows/arr088.svg*/}
                                                                        <span className="svg-icon svg-icon-1">
                                                                            <svg
                                                                                width={24}
                                                                                height={24}
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <rect
                                                                                    opacity="0.5"
                                                                                    x="7.05025"
                                                                                    y="15.5356"
                                                                                    width={12}
                                                                                    height={2}
                                                                                    rx={1}
                                                                                    transform="rotate(-45 7.05025 15.5356)"
                                                                                    fill="currentColor"
                                                                                />
                                                                                <rect
                                                                                    x="8.46447"
                                                                                    y="7.05029"
                                                                                    width={12}
                                                                                    height={2}
                                                                                    rx={1}
                                                                                    transform="rotate(45 8.46447 7.05029)"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </span>
                                                                        {/*end::Svg Icon*/}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/*end::Form group*/}
                                                        {/*begin::Form group*/}
                                                        <div className="form-group mt-5">
                                                            <button
                                                                type="button"
                                                                data-repeater-create=""
                                                                className="btn btn-sm btn-light-primary"
                                                            >
                                                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr087.svg*/}
                                                                <span className="svg-icon svg-icon-2">
                                                                    <svg
                                                                        width={24}
                                                                        height={24}
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                    >
                                                                        <rect
                                                                            opacity="0.5"
                                                                            x={11}
                                                                            y={18}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            transform="rotate(-90 11 18)"
                                                                            fill="currentColor"
                                                                        />
                                                                        <rect
                                                                            x={6}
                                                                            y={11}
                                                                            width={12}
                                                                            height={2}
                                                                            rx={1}
                                                                            fill="currentColor"
                                                                        />
                                                                    </svg>
                                                                </span>
                                                                {/*end::Svg Icon*/} Add another variation
                                                            </button>
                                                        </div>
                                                        {/*end::Form group*/}
                                                    </div>
                                                    {/*end::Repeater*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Variations*/}
                                        {/*begin::Shipping*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Shipping</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="fv-row">
                                                    {/*begin::Input*/}
                                                    <div className="form-check form-check-custom form-check-solid mb-2">
                                                        <input className="form-check-input" type="checkbox" onChange={handleShipping} id="kt_ecommerce_add_product_shipping_checkbox" defaultValue={1} />
                                                        <label className="form-check-label">
                                                            This is a physical product
                                                        </label>
                                                    </div>
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set if the product is a physical or digital item. Physical products may require shipping.</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Shipping form*/}
                                                <div id="kt_ecommerce_add_product_shipping" className="d-none mt-10">
                                                    {/*begin::Input group*/}
                                                    <div className="mb-10 fv-row">
                                                        {/*begin::Label*/}
                                                        <label className="form-label">Weight</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Editor*/}
                                                        <input type="text" name="weight" className="form-control mb-2" placeholder="Product weight" defaultValue />
                                                        {/*end::Editor*/}
                                                        {/*begin::Description*/}
                                                        <div className="text-muted fs-7">Set a product weight in kilograms (kg).</div>
                                                        {/*end::Description*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                    {/*begin::Input group*/}
                                                    <div className="fv-row">
                                                        {/*begin::Label*/}
                                                        <label className="form-label">Dimension</label>
                                                        {/*end::Label*/}
                                                        {/*begin::Input*/}
                                                        <div className="d-flex flex-wrap flex-sm-nowrap gap-3">
                                                            <input type="number" name="width" className="form-control mb-2" placeholder="Width (w)" defaultValue />
                                                            <input type="number" name="height" className="form-control mb-2" placeholder="Height (h)" defaultValue />
                                                            <input type="number" name="length" className="form-control mb-2" placeholder="Lengtn (l)" defaultValue />
                                                        </div>
                                                        {/*end::Input*/}
                                                        {/*begin::Description*/}
                                                        <div className="text-muted fs-7">Enter the product dimensions in centimeters (cm).</div>
                                                        {/*end::Description*/}
                                                    </div>
                                                    {/*end::Input group*/}
                                                </div>
                                                {/*end::Shipping form*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Shipping*/}
                                        {/*begin::Meta options*/}
                                        <div className="card card-flush py-4">
                                            {/*begin::Card header*/}
                                            <div className="card-header">
                                                <div className="card-title">
                                                    <h2>Meta Options</h2>
                                                </div>
                                            </div>
                                            {/*end::Card header*/}
                                            {/*begin::Card body*/}
                                            <div className="card-body pt-0">
                                                {/*begin::Input group*/}
                                                <div className="mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Meta Tag Title</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Input*/}
                                                    <input type="text" className="form-control mb-2" name="meta_title" placeholder="Meta tag name" />
                                                    {/*end::Input*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set a meta tag title. Recommended to be simple and precise keywords.</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div className="mb-10">
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Meta Tag Description</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Editor*/}
                                                    <div className="ql-toolbar ql-snow"><span className="ql-formats"><span className="ql-header ql-picker"><span className="ql-picker-label" tabIndex={0} role="button" aria-expanded="false" aria-controls="ql-picker-options-1"><svg viewBox="0 0 18 18"> <polygon className="ql-stroke" points="7 11 9 13 11 11 7 11" /> <polygon className="ql-stroke" points="7 7 9 5 11 7 7 7" /> </svg></span><span className="ql-picker-options" aria-hidden="true" tabIndex={-1} id="ql-picker-options-1"><span tabIndex={0} role="button" className="ql-picker-item" data-value={1} /><span tabIndex={0} role="button" className="ql-picker-item" data-value={2} /><span tabIndex={0} role="button" className="ql-picker-item ql-selected" /></span></span><select className="ql-header" style={{ display: 'none' }}><option value={1} /><option value={2} /><option selected="selected" /></select></span><span className="ql-formats"><button type="button" className="ql-bold"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z" /> <path className="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z" /> </svg></button><button type="button" className="ql-italic"><svg viewBox="0 0 18 18"> <line className="ql-stroke" x1={7} x2={13} y1={4} y2={4} /> <line className="ql-stroke" x1={5} x2={11} y1={14} y2={14} /> <line className="ql-stroke" x1={8} x2={10} y1={14} y2={4} /> </svg></button><button type="button" className="ql-underline"><svg viewBox="0 0 18 18"> <path className="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3" /> <rect className="ql-fill" height={1} rx="0.5" ry="0.5" width={12} x={3} y={15} /> </svg></button></span><span className="ql-formats"><button type="button" className="ql-image"><svg viewBox="0 0 18 18"> <rect className="ql-stroke" height={10} width={12} x={3} y={4} /> <circle className="ql-fill" cx={6} cy={7} r={1} /> <polyline className="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12" /> </svg></button><button type="button" className="ql-code-block"><svg viewBox="0 0 18 18"> <polyline className="ql-even ql-stroke" points="5 7 3 9 5 11" /> <polyline className="ql-even ql-stroke" points="13 7 15 9 13 11" /> <line className="ql-stroke" x1={10} x2={8} y1={5} y2={13} /> </svg></button></span></div><div id="kt_ecommerce_add_product_meta_description" name="kt_ecommerce_add_product_meta_description" className="min-h-100px mb-2 ql-container ql-snow"><div className="ql-editor ql-blank" data-gramm="false" contentEditable="true" data-placeholder="Type your text here..."><p><br /></p></div><div className="ql-clipboard" contentEditable="true" tabIndex={-1} /><div className="ql-tooltip ql-hidden"><a className="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank" /><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL" /><a className="ql-action" /><a className="ql-remove" /></div></div>
                                                    {/*end::Editor*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set a meta tag description to the product for increased SEO ranking.</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                                {/*begin::Input group*/}
                                                <div>
                                                    {/*begin::Label*/}
                                                    <label className="form-label">Meta Tag Keywords</label>
                                                    {/*end::Label*/}
                                                    {/*begin::Editor*/}
                                                    <input id="kt_ecommerce_add_product_meta_keywords" name="kt_ecommerce_add_product_meta_keywords" className="form-control mb-2" />
                                                    {/*end::Editor*/}
                                                    {/*begin::Description*/}
                                                    <div className="text-muted fs-7">Set a list of keywords that the product is related to. Separate the keywords by adding a comma <code>,</code> between each keyword.</div>
                                                    {/*end::Description*/}
                                                </div>
                                                {/*end::Input group*/}
                                            </div>
                                            {/*end::Card header*/}
                                        </div>
                                        {/*end::Meta options*/}              </div>
                                </div>
                                {/*end::Tab pane*/}
                            </div>
                            {/*end::Tab content*/}
                            <div className="d-flex justify-content-end">
                                {/*begin::Button*/}
                                <a href="products.html" id="kt_ecommerce_add_product_cancel" className="btn btn-light me-5">
                                    Cancel
                                </a>
                                {/*end::Button*/}
                                {/*begin::Button*/}
                                <button type="submit" id="kt_ecommerce_add_product_submit" className="btn btn-primary">
                                    <span className="indicator-label">
                                        Save Changes
                                    </span>
                                    <span className="indicator-progress">
                                        Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>
                                </button>
                                {/*end::Button*/}
                            </div>
                        </div>
                        {/*end::Main column*/}
                    </form>
                    {/*end::Form*/}					</div>
                {/*end::Post*/}
            </div>
        </>
    );
}