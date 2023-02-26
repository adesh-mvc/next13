import "@/public/assets/plugins/custom/fullcalendar/fullcalendar.bundle.css";

export default function FullCalender() {
    return (<>
        {/*begin::Calendar Widget 1*/}
        <div className="card ">
            {/*begin::Card header*/}
            <div className="card-header">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-dark">
                        My Calendar
                    </span>
                    <span className="text-muted mt-1 fw-semibold fs-7">
                        Preview monthly events
                    </span>
                </h3>
                <div className="card-toolbar">
                    <a href="apps/calendar.html" className="btn btn-primary">
                        Manage Calendar
                    </a>
                </div>
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body">
                {/*begin::Calendar*/}
                <div id="kt_calendar_widget_1" />
                {/*end::Calendar*/}
            </div>
            {/*end::Card body*/}
        </div>
        {/*end::Calendar Widget 1*/}
    </>);
}