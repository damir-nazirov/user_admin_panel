
import UserFormWrapper from "../userFormWrapper/userFormWrapper";
import UsersFilters from "../usersFilters/UsersFilters";


const SingleUserPage = () => {

    return (
        <div className="content">
            <UsersFilters/>
            <UserFormWrapper/>
        </div>

    )
}

export default SingleUserPage;