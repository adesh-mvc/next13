import UserList from "./UserDataList";
import UserForm from "./UserForm";
export default async function page({ params }) {
    const userPath = params.user;

    console.log("userPath:", userPath.indexOf('list'))
    // if (userPath.indexOf(needle) !== -1) {
    //     return true;
    // } else {
    //     return false;
    // }
    const userView = (userPath) => {
        if (userPath.indexOf('list') !== -1) {

            return <><UserList /></>;
        } else if (userPath.indexOf('add') !== -1) {

            return <><UserForm /></>;
        } else {
            return <h1>Something gettung wrong</h1>
        }
    }
    const view = userView(userPath)
    return (<>

        {view}
    </>)
}