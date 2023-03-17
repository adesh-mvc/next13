import Link from "next/link";
const MenuWrapperItems = (currentPath) => {
    return (
        <>
            <div
                className="header-navs d-flex align-items-stretch flex-stack h-lg-70px w-100 py-5 py-lg-0"
                id="kt_header_navs"
                data-kt-drawer="true"
                data-kt-drawer-name="header-menu"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                data-kt-drawer-direction="start"
                data-kt-drawer-toggle="#kt_header_navs_toggle"
                data-kt-swapper="true"
                data-kt-swapper-mode="append"
                data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header'}"
            >
                {/*begin::Container*/}
                <div className="d-lg-flex  container-xxl  w-100">
                    {/*begin::Wrapper*/}
                    <div
                        className="d-lg-flex flex-column justify-content-lg-center w-100"
                        id="kt_header_navs_wrapper"
                    >
                        {/*begin::Header tab content*/}
                        <div
                            className="tab-content"
                            data-kt-scroll="true"
                            data-kt-scroll-activate="{default: true, lg: false}"
                            data-kt-scroll-height="auto"
                            data-kt-scroll-offset="70px"
                        >
                            {/*begin::Tab panel*/}
                            <div
                                className={`tab-pane fade ${currentPath.renderPath == `/admin` ? 'active show' : ``}`}
                                id="kt_header_navs_tab_1"
                            >
                                {/*begin::Menu wrapper*/}
                                <div className="header-menu flex-column align-items-stretch flex-lg-row">
                                    {/*begin::Menu*/}
                                    <div
                                        className="menu menu-rounded menu-column menu-lg-row menu-root-here-bg-desktop menu-active-bg menu-title-gray-700 menu-state-primary menu-arrow-gray-400 fw-semibold align-items-stretch flex-grow-1 px-2 px-lg-0"
                                        id="#kt_header_menu"
                                        data-kt-menu="true"
                                    >
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                            data-kt-menu-placement="bottom-start"
                                            className="menu-item here show menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link py-3">
                                                <span className="menu-title">Dashboards</span>
                                                <span className="menu-arrow d-lg-none" />
                                            </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0 w-100 w-lg-850px">
                                                {/*begin:Dashboards menu*/}
                                                <div
                                                    className="menu-state-bg menu-extended overflow-hidden overflow-lg-visible"
                                                    data-kt-menu-dismiss="true"
                                                >
                                                    {/*begin:Row*/}
                                                    <div className="row">
                                                        {/*begin:Col*/}
                                                        <div className="col-lg-8 mb-3 mb-lg-0  py-3 px-3 py-lg-6 px-lg-6">
                                                            {/*begin:Row*/}
                                                            <div className="row">

                                                                {/*begin:Col*/}
                                                                <div className="col-lg-6 mb-3">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/*begin:Menu link*/}
                                                                        <Link
                                                                            href="/"
                                                                            className="menu-link "
                                                                        >
                                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs045.svg*/}
                                                                                <span className="svg-icon svg-icon-info svg-icon-1">
                                                                                    <svg
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path
                                                                                            d="M2 11.7127L10 14.1127L22 11.7127L14 9.31274L2 11.7127Z"
                                                                                            fill="currentColor"
                                                                                        />
                                                                                        <path
                                                                                            opacity="0.3"
                                                                                            d="M20.9 7.91274L2 11.7127V6.81275C2 6.11275 2.50001 5.61274 3.10001 5.51274L20.6 2.01274C21.3 1.91274 22 2.41273 22 3.11273V6.61273C22 7.21273 21.5 7.81274 20.9 7.91274ZM22 16.6127V11.7127L3.10001 15.5127C2.50001 15.6127 2 16.2127 2 16.8127V20.3127C2 21.0127 2.69999 21.6128 3.39999 21.4128L20.9 17.9128C21.5 17.8128 22 17.2127 22 16.6127Z"
                                                                                            fill="currentColor"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                            <span className="d-flex flex-column">
                                                                                <span className="fs-6 fw-bold text-gray-800">
                                                                                    Projects
                                                                                </span>
                                                                                <span className="fs-7 fw-semibold text-muted">
                                                                                    Tasts, graphs &amp; charts
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Col*/}

                                                                {/*begin:Col*/}
                                                                <div className="col-lg-6 mb-3">
                                                                    {/*begin:Menu item*/}
                                                                    <div className="menu-item p-0 m-0">
                                                                        {/*begin:Menu link*/}
                                                                        <Link
                                                                            href="dashboards/pos.html"
                                                                            className="menu-link "
                                                                        >
                                                                            <span className="menu-custom-icon d-flex flex-center flex-shrink-0 rounded w-40px h-40px me-3">
                                                                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs043.svg*/}
                                                                                <span className="svg-icon svg-icon-danger svg-icon-1">
                                                                                    <svg
                                                                                        width={24}
                                                                                        height={24}
                                                                                        viewBox="0 0 24 24"
                                                                                        fill="none"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                    >
                                                                                        <path
                                                                                            opacity="0.3"
                                                                                            d="M22 8H8L12 4H19C19.6 4 20.2 4.39999 20.5 4.89999L22 8ZM3.5 19.1C3.8 19.7 4.4 20 5 20H12L16 16H2L3.5 19.1ZM19.1 20.5C19.7 20.2 20 19.6 20 19V12L16 8V22L19.1 20.5ZM4.9 3.5C4.3 3.8 4 4.4 4 5V12L8 16V2L4.9 3.5Z"
                                                                                            fill="currentColor"
                                                                                        />
                                                                                        <path
                                                                                            d="M22 8L20 12L16 8H22ZM8 16L4 12L2 16H8ZM16 16L12 20L16 22V16ZM8 8L12 4L8 2V8Z"
                                                                                            fill="currentColor"
                                                                                        />
                                                                                    </svg>
                                                                                </span>
                                                                                {/*end::Svg Icon*/}
                                                                            </span>
                                                                            <span className="d-flex flex-column">
                                                                                <span className="fs-6 fw-bold text-gray-800">
                                                                                    POS System
                                                                                </span>
                                                                                <span className="fs-7 fw-semibold text-muted">
                                                                                    Campaings &amp; conversions
                                                                                </span>
                                                                            </span>
                                                                        </Link>
                                                                        {/*end:Menu link*/}
                                                                    </div>
                                                                    {/*end:Menu item*/}
                                                                </div>
                                                                {/*end:Col*/}

                                                            </div>
                                                            {/*end:Row*/}
                                                            <div className="separator separator-dashed mx-5 my-5"></div>
                                                            {/*begin:Landing*/}
                                                            <div className="d-flex flex-stack flex-wrap flex-lg-nowrap gap-2 mx-5">
                                                                <div className="d-flex flex-column me-5">
                                                                    <div className="fs-6 fw-bold text-gray-800">
                                                                        Landing Page Template
                                                                    </div>
                                                                    <div className="fs-7 fw-semibold text-muted">
                                                                        Onpe page landing template with pricing
                                                                        &amp; others
                                                                    </div>
                                                                </div>
                                                                <a
                                                                    href="landing.html"
                                                                    className="btn btn-sm btn-primary fw-bold"
                                                                >
                                                                    Explore
                                                                </a>
                                                            </div>
                                                            {/*end:Landing*/}
                                                        </div>
                                                        {/*end:Col*/}
                                                        {/*begin:Col*/}
                                                        <div className="menu-more bg-light col-lg-4 py-3 px-3 py-lg-6 px-lg-6 rounded-end">
                                                            {/*begin:Heading*/}
                                                            <h4 className="fs-6 fs-lg-4 text-gray-800 fw-bold mt-3 mb-3 ms-4">
                                                                More Dashboards
                                                            </h4>
                                                            {/*end:Heading*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item p-0 m-0">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    href="dashboards/logistics.html"
                                                                    className="menu-link py-2 "
                                                                >
                                                                    <span className="menu-title">
                                                                        Logistics{" "}
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}
                                                            {/*begin:Menu item*/}
                                                            <div className="menu-item p-0 m-0">
                                                                {/*begin:Menu link*/}
                                                                <a
                                                                    href="dashboards/website-analytics.html"
                                                                    className="menu-link py-2 "
                                                                >
                                                                    <span className="menu-title">
                                                                        Website Analytics{" "}
                                                                    </span>
                                                                </a>
                                                                {/*end:Menu link*/}
                                                            </div>
                                                            {/*end:Menu item*/}



                                                        </div>
                                                        {/*end:Col*/}
                                                    </div>
                                                    {/*end:Row*/}
                                                </div>
                                                {/*end:Dashboards menu*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                            data-kt-menu-placement="bottom-start"
                                            className="menu-item menu-lg-down-accordion me-0 me-lg-2"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link py-3">
                                                <span className="menu-title">Pages</span>
                                                <span className="menu-arrow d-lg-none" />
                                            </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown p-0">
                                                {/*begin:Pages menu*/}
                                                <div className="menu-active-bg px-4 px-lg-0">
                                                    {/*begin:Tabs nav*/}
                                                    <div className="d-flex w-100 overflow-auto">
                                                        <ul className="nav nav-stretch nav-line-tabs fw-bold fs-6 p-0 p-lg-10 flex-nowrap flex-grow-1">
                                                            {/*begin:Nav item*/}
                                                            <li className="nav-item mx-lg-1">
                                                                <a
                                                                    className="nav-link py-3 py-lg-6 active text-active-primary"
                                                                    href="#"
                                                                    data-bs-toggle="tab"
                                                                    data-bs-target="#kt_app_header_menu_pages_pages"
                                                                >
                                                                    General{" "}
                                                                </a>
                                                            </li>
                                                            {/*end:Nav item*/}
                                                            {/*begin:Nav item*/}
                                                            <li className="nav-item mx-lg-1">
                                                                <a
                                                                    className="nav-link py-3 py-lg-6  text-active-primary"
                                                                    href="#"
                                                                    data-bs-toggle="tab"
                                                                    data-bs-target="#kt_app_header_menu_pages_account"
                                                                >
                                                                    Account{" "}
                                                                </a>
                                                            </li>
                                                            {/*end:Nav item*/}

                                                            {/*begin:Nav item*/}
                                                            <li className="nav-item mx-lg-1">
                                                                <a
                                                                    className="nav-link py-3 py-lg-6  text-active-primary"
                                                                    href="#"
                                                                    data-bs-toggle="tab"
                                                                    data-bs-target="#kt_app_header_menu_pages_utilities"
                                                                >
                                                                    Utilities{" "}
                                                                </a>
                                                            </li>
                                                            {/*end:Nav item*/}

                                                        </ul>
                                                    </div>
                                                    {/*end:Tabs nav*/}
                                                    {/*begin:Tab content*/}
                                                    <div className="tab-content py-4 py-lg-8 px-lg-7">
                                                        {/*begin:Tab pane*/}
                                                        <div
                                                            className="tab-pane active w-lg-1000px"
                                                            id="kt_app_header_menu_pages_pages"
                                                        >
                                                            {/*begin:Row*/}
                                                            <div className="row">
                                                                {/*begin:Col*/}
                                                                <div className="col-lg-8">
                                                                    {/*begin:Row*/}
                                                                    <div className="row">
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/*begin:Menu heading*/}
                                                                            <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                User Profile
                                                                            </h4>
                                                                            {/*end:Menu heading*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="pages/user-profile/overview.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Overview
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}

                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="pages/user-profile/activity.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Activity
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Col*/}
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/*begin:Menu section*/}
                                                                            <div className="mb-6">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    Corporate
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/about.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            About
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/team.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Our Team
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}

                                                                            </div>
                                                                            {/*end:Menu section*/}

                                                                        </div>
                                                                        {/*end:Col*/}
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/*begin:Menu section*/}
                                                                            <div className="mb-6">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    FAQ
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/faq/classic.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            FAQ Classic
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/faq/extended.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            FAQ Extended
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Menu section*/}

                                                                        </div>
                                                                        {/*end:Col*/}
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-3 mb-6 mb-lg-0">
                                                                            {/*begin:Menu section*/}
                                                                            <div className="mb-0">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    Social
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/social/feeds.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Feeds
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="pages/social/activity.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Activty
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}

                                                                            </div>
                                                                            {/*end:Menu section*/}
                                                                        </div>
                                                                        {/*end:Col*/}
                                                                    </div>
                                                                    {/*end:Row*/}
                                                                </div>
                                                                {/*end:Col*/}
                                                                {/*begin:Col*/}
                                                                <div className="col-lg-4">
                                                                    <img
                                                                        src={`/assets/media/stock/600x600/img-82.jpg`}
                                                                        className="rounded mw-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                {/*end:Col*/}
                                                            </div>
                                                            {/*end:Row*/}
                                                        </div>
                                                        {/*end:Tab pane*/}
                                                        {/*begin:Tab pane*/}
                                                        <div
                                                            className="tab-pane  w-lg-600px"
                                                            id="kt_app_header_menu_pages_account"
                                                        >
                                                            {/*begin:Row*/}
                                                            <div className="row">
                                                                {/*begin:Col*/}
                                                                <div className="col-lg-5 mb-6 mb-lg-0">
                                                                    {/*begin:Row*/}
                                                                    <div className="row">
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-6">
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/overview.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Overview
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/settings.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Settings
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/security.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Security
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/activity.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Activity
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/billing.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Billing
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Col*/}
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-6">
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/statements.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Statements
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/referrals.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Referrals
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/api-keys.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        API Keys
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                            {/*begin:Menu item*/}
                                                                            <div className="menu-item p-0 m-0">
                                                                                {/*begin:Menu link*/}
                                                                                <a
                                                                                    href="account/logs.html"
                                                                                    className="menu-link "
                                                                                >
                                                                                    <span className="menu-title">
                                                                                        Logs
                                                                                    </span>
                                                                                </a>
                                                                                {/*end:Menu link*/}
                                                                            </div>
                                                                            {/*end:Menu item*/}
                                                                        </div>
                                                                        {/*end:Col*/}
                                                                    </div>
                                                                    {/*end:Row*/}
                                                                </div>
                                                                {/*end:Col*/}
                                                                {/*begin:Col*/}
                                                                <div className="col-lg-7">
                                                                    <img
                                                                        src={`/assets/media/stock/900x600/46.jpg`}
                                                                        className="rounded mw-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                {/*end:Col*/}
                                                            </div>
                                                            {/*end:Row*/}
                                                        </div>
                                                        {/*end:Tab pane*/}

                                                        {/*begin:Tab pane*/}
                                                        <div
                                                            className="tab-pane  w-lg-1000px"
                                                            id="kt_app_header_menu_pages_utilities"
                                                        >
                                                            {/*begin:Row*/}
                                                            <div className="row">
                                                                {/*begin:Col*/}
                                                                <div className="col-lg-7">
                                                                    {/*begin:Row*/}
                                                                    <div className="row">
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-4 mb-6 mb-lg-0">
                                                                            {/*begin:Menu section*/}
                                                                            <div className="mb-0">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    General Modals
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/general/invite-friends.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Invite Friends
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/general/view-users.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            View Users
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/general/select-users.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Select Users
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/general/upgrade-plan.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Upgrade Plan
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/general/share-earn.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Share &amp; Earn
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/forms/new-target.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            New Target
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/forms/new-card.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            New Card
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/forms/new-address.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            New Address
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/forms/create-api-key.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create API Key
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/forms/bidding.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Bidding
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Menu section*/}
                                                                        </div>
                                                                        {/*end:Col*/}
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-4 mb-6 mb-lg-0">
                                                                            {/*begin:Menu section*/}
                                                                            <div className="mb-6">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    Advanced Modals
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/create-app.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create App
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/create-campaign.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create Campaign
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/create-account.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create Business Acc
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/create-project.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create Project
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/top-up-wallet.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Top Up Wallet
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/offer-a-deal.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Offer a Deal
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/two-factor-authentication.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Two Factor Auth
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Menu section*/}
                                                                            {/*begin:Menu section*/}
                                                                            <div className="mb-0">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    Search
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/search/horizontal.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Horizontal
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/search/vertical.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Vertical
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/search/users.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Users
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/search/select-location.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Select Location
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Menu section*/}
                                                                        </div>
                                                                        {/*end:Col*/}
                                                                        {/*begin:Col*/}
                                                                        <div className="col-lg-4 mb-6 mb-lg-0">
                                                                            {/*begin:Menu section*/}
                                                                            <div className="mb-0">
                                                                                {/*begin:Menu heading*/}
                                                                                <h4 className="fs-6 fs-lg-4 fw-bold mb-3 ms-4">
                                                                                    Wizards
                                                                                </h4>
                                                                                {/*end:Menu heading*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/horizontal.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Horizontal
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/vertical.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Vertical
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/two-factor-authentication.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Two Factor Auth
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/create-app.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create App
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/create-campaign.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create Campaign
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/create-account.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create Account
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/create-project.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Create Project
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/modals/wizards/top-up-wallet.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Top Up Wallet
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                                {/*begin:Menu item*/}
                                                                                <div className="menu-item p-0 m-0">
                                                                                    {/*begin:Menu link*/}
                                                                                    <a
                                                                                        href="utilities/wizards/offer-a-deal.html"
                                                                                        className="menu-link "
                                                                                    >
                                                                                        <span className="menu-title">
                                                                                            Offer a Deal
                                                                                        </span>
                                                                                    </a>
                                                                                    {/*end:Menu link*/}
                                                                                </div>
                                                                                {/*end:Menu item*/}
                                                                            </div>
                                                                            {/*end:Menu section*/}
                                                                        </div>
                                                                        {/*end:Col*/}
                                                                    </div>
                                                                    {/*end:Row*/}
                                                                </div>
                                                                {/*end:Col*/}
                                                                {/*begin:Col*/}
                                                                <div className="col-lg-5 pe-lg-5">
                                                                    <img
                                                                        src={`/assets/media/stock/600x600/img-84.jpg`}
                                                                        className="rounded mw-100"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                                {/*end:Col*/}
                                                            </div>
                                                            {/*end:Row*/}
                                                        </div>
                                                        {/*end:Tab pane*/}

                                                    </div>
                                                    {/*end:Tab content*/}
                                                </div>
                                                {/*end:Pages menu*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}
                                        {/*begin:Menu item*/}
                                        <div
                                            data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                                            data-kt-menu-placement="bottom-start"
                                            className="menu-item menu-lg-down-accordion menu-sub-lg-down-indention me-0 me-lg-2"
                                        >
                                            {/*begin:Menu link*/}
                                            <span className="menu-link py-3">
                                                <span className="menu-title">Apps</span>
                                                <span className="menu-arrow d-lg-none" />
                                            </span>
                                            {/*end:Menu link*/}
                                            {/*begin:Menu sub*/}
                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown px-lg-2 py-lg-4 w-lg-250px">


                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                    data-kt-menu-placement="right-start"
                                                    className="menu-item menu-lg-down-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link py-3">
                                                        <span className="menu-icon">
                                                            {/*begin::Svg Icon | path: icons/duotune/graphs/gra006.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                                                        fill="currentColor"
                                                                    />
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                        <span className="menu-title">
                                                            Support Center
                                                        </span>
                                                        <span className="menu-arrow" />
                                                    </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link py-3"
                                                                href="apps/support-center/overview.html"
                                                            >
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">Overview</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                            data-kt-menu-placement="right-start"
                                                            className="menu-item menu-lg-down-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">Tickets</span>
                                                                <span className="menu-arrow" />
                                                            </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/support-center/tickets/list.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            Ticket List
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/support-center/tickets/view.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            Ticket View
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                            data-kt-menu-placement="right-start"
                                                            className="menu-item menu-lg-down-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">
                                                                    Tutorials
                                                                </span>
                                                                <span className="menu-arrow" />
                                                            </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/support-center/tutorials/list.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            Tutorials List
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/support-center/tutorials/post.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            Tutorials Post
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link py-3"
                                                                href="apps/support-center/faq.html"
                                                            >
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">FAQ</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link py-3"
                                                                href="apps/support-center/licenses.html"
                                                            >
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">Licenses</span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link py-3"
                                                                href="apps/support-center/contact.html"
                                                            >
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">
                                                                    Contact Us
                                                                </span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}
                                                {/*begin:Menu item*/}
                                                <div
                                                    data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                    data-kt-menu-placement="right-start"
                                                    className="menu-item menu-lg-down-accordion"
                                                >
                                                    {/*begin:Menu link*/}
                                                    <span className="menu-link py-3">
                                                        <span className="menu-icon">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen051.svg*/}
                                                            <span className="svg-icon svg-icon-3">
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                                                                        fill="currentColor"
                                                                    />
                                                                    <path
                                                                        d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                        <span className="menu-title">
                                                            User Management
                                                        </span>
                                                        <span className="menu-arrow" />
                                                    </span>
                                                    {/*end:Menu link*/}
                                                    {/*begin:Menu sub*/}
                                                    <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                            data-kt-menu-placement="right-start"
                                                            className="menu-item menu-lg-down-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">Users</span>
                                                                <span className="menu-arrow" />
                                                            </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/user-management/users/list.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            Users List
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/user-management/users/view.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            View User
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div
                                                            data-kt-menu-trigger="{default:'click', lg: 'hover'}"
                                                            data-kt-menu-placement="right-start"
                                                            className="menu-item menu-lg-down-accordion"
                                                        >
                                                            {/*begin:Menu link*/}
                                                            <span className="menu-link py-3">
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">Roles</span>
                                                                <span className="menu-arrow" />
                                                            </span>
                                                            {/*end:Menu link*/}
                                                            {/*begin:Menu sub*/}
                                                            <div className="menu-sub menu-sub-lg-down-accordion menu-sub-lg-dropdown menu-active-bg px-lg-2 py-lg-4 w-lg-225px">
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/user-management/roles/list.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            Roles List
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                                {/*begin:Menu item*/}
                                                                <div className="menu-item">
                                                                    {/*begin:Menu link*/}
                                                                    <a
                                                                        className="menu-link py-3"
                                                                        href="apps/user-management/roles/view.html"
                                                                    >
                                                                        <span className="menu-bullet">
                                                                            <span className="bullet bullet-dot" />
                                                                        </span>
                                                                        <span className="menu-title">
                                                                            View Roles
                                                                        </span>
                                                                    </a>
                                                                    {/*end:Menu link*/}
                                                                </div>
                                                                {/*end:Menu item*/}
                                                            </div>
                                                            {/*end:Menu sub*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                        {/*begin:Menu item*/}
                                                        <div className="menu-item">
                                                            {/*begin:Menu link*/}
                                                            <a
                                                                className="menu-link py-3"
                                                                href="apps/user-management/permissions.html"
                                                            >
                                                                <span className="menu-bullet">
                                                                    <span className="bullet bullet-dot" />
                                                                </span>
                                                                <span className="menu-title">
                                                                    Permissions
                                                                </span>
                                                            </a>
                                                            {/*end:Menu link*/}
                                                        </div>
                                                        {/*end:Menu item*/}
                                                    </div>
                                                    {/*end:Menu sub*/}
                                                </div>
                                                {/*end:Menu item*/}


                                                {/*begin:Menu item*/}
                                                <div className="menu-item">
                                                    {/*begin:Menu link*/}
                                                    <a
                                                        className="menu-link py-3"
                                                        href="/"
                                                    >
                                                        <span className="menu-icon">
                                                            {/*begin::Svg Icon | path: icons/duotune/general/gen014.svg*/}
                                                            <span className="svg-icon svg-icon-2">
                                                                <svg
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        opacity="0.3"
                                                                        d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                                                                        fill="currentColor"
                                                                    />
                                                                    <path
                                                                        d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                                                                        fill="currentColor"
                                                                    />
                                                                    <path
                                                                        d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                                                                        fill="currentColor"
                                                                    />
                                                                </svg>
                                                            </span>
                                                            {/*end::Svg Icon*/}
                                                        </span>
                                                        <span className="menu-title">Calendar</span>
                                                    </a>
                                                    {/*end:Menu link*/}
                                                </div>
                                                {/*end:Menu item*/}
                                            </div>
                                            {/*end:Menu sub*/}
                                        </div>
                                        {/*end:Menu item*/}

                                    </div>
                                    {/*end::Menu*/}
                                </div>
                                {/*end::Menu wrapper*/}
                            </div>
                            {/*end::Tab panel*/}

                            {/*begin::Tab panel*/}
                            <div className={`tab-pane fade`} id="kt_header_navs_tab_4">
                                {/*begin::Wrapper*/}
                                <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <a
                                            className="btn btn-sm btn-light-primary fw-bold"
                                            href="apps/ecommerce/catalog/products.html"
                                        >
                                            eCommerce
                                        </a>
                                        <a
                                            className="btn btn-sm btn-light-danger fw-bold"
                                            href="apps/file-manager/folders.html"
                                        >
                                            File Manager
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <a
                                            className="btn btn-sm btn-light-info fw-bold"
                                            href="apps/subscriptions/view.html"
                                        >
                                            More Apps
                                        </a>
                                    </div>
                                </div>
                                {/*end::Wrapper*/}
                            </div>
                            {/*end::Tab panel*/}
                            {/*begin::Tab panel*/}
                            <div className="tab-pane fade" id="kt_header_navs_tab_5">
                                {/*begin::Wrapper*/}
                                <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <a
                                            className="btn btn-sm btn-light-primary fw-bold"
                                            href="https://preview.keenthemes.com/html/metronic/docs"
                                        >
                                            Documentation
                                        </a>
                                        <a
                                            className="btn btn-sm btn-light-success fw-bold"
                                            href="https://preview.keenthemes.com/html/metronic/docs/getting-started/video-tutorials"
                                        >
                                            Video Tutorials
                                        </a>
                                        <a
                                            className="btn btn-sm btn-light-danger fw-bold"
                                            href="layout-builder.html"
                                        >
                                            Layout Builder
                                        </a>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <a
                                            className="btn btn-sm btn-light-info fw-bold"
                                            href="https://preview.keenthemes.com/html/metronic/docs/getting-started/changelog"
                                        >
                                            Changelog
                                        </a>
                                    </div>
                                </div>
                                {/*end::Wrapper*/}
                            </div>
                            {/*end::Tab panel*/}

                            {/*begin::Tab panel*/}
                            <div className={`tab-pane fade ${currentPath.renderPath.indexOf('users') !== -1 ? 'active show' : ``}`} id="cd_header_navs_users">
                                {/*begin::Wrapper*/}
                                <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <Link
                                            className="btn btn-sm btn-light-primary fw-bold"
                                            href="/admin/users/list"
                                        >
                                            User List
                                        </Link>
                                        <Link
                                            className="btn btn-sm btn-light-success fw-bold"
                                            href="/admin/users/add"
                                        >
                                            Add New User
                                        </Link>
                                        <Link
                                            className="btn btn-sm btn-light-danger fw-bold"
                                            href="#"
                                        >
                                            Layout Builder
                                        </Link>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <Link
                                            className="btn btn-sm btn-light-info fw-bold"
                                            href="#"
                                        >
                                            Admin Users
                                        </Link>
                                    </div>

                                </div>
                                {/*end::Wrapper*/}
                            </div>
                            <div className={`tab-pane fade ${currentPath.renderPath.indexOf('products') !== -1 ? 'active show' : ``}`} id="cd_header_navs_product">
                                {/*begin::Wrapper*/}
                                <div className="d-flex flex-column flex-lg-row flex-lg-stack flex-wrap gap-2 px-4 px-lg-0">
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <Link
                                            className="btn btn-sm btn-light-primary fw-bold"
                                            href="#"
                                        >
                                            User List
                                        </Link>
                                        <Link
                                            className="btn btn-sm btn-light-success fw-bold"
                                            href="#"
                                        >
                                            Add New User
                                        </Link>
                                        <Link
                                            className="btn btn-sm btn-light-danger fw-bold"
                                            href="#"
                                        >
                                            Layout Builder
                                        </Link>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row gap-2">
                                        <Link
                                            className="btn btn-sm btn-light-info fw-bold"
                                            href="#"
                                        >
                                            Admin Users
                                        </Link>
                                    </div>

                                </div>
                                {/*end::Wrapper*/}
                            </div>
                            {/*end::Tab panel*/}
                        </div>
                        {/*end::Header tab content*/}
                    </div>
                    {/*end::Wrapper*/}
                </div>
                {/*end::Container*/}
            </div>
        </>
    )
}

export default MenuWrapperItems;