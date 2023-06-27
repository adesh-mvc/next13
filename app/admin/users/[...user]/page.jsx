import UserList from "./UserDataList";
import UserForm from "./UserForm";
import TabForm from "./TabForm";
export default async function page({ params }) {
    const userPath = params.user;

    const userView = (current) => {
        if (current.indexOf('list') !== -1) {
            return <><UserList /></>;
        } else if (current.indexOf('add') !== -1) {

            return <><UserForm /></>;
        } else if (current.indexOf('tab') !== -1) {

            return <><TabForm /></>;
        } else {
            return <h1>Something gettung wrong</h1>
        }
    }
    const view = userView(userPath)
    return (<>
        {view}
    </>)
}