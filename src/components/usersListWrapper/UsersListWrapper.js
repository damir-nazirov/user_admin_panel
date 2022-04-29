import UserList from "../../containers/UsersList";

import './usersListWrapper.scss'

const UsersListWrapper = () => {

    return (
        <div className="wrapper__list">
            <h2 className="wrapper__list-name">Список пользователей</h2>
            <UserList/>

        </div>
    )
}

export default UsersListWrapper