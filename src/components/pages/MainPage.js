
import UsersFilters from "../usersFilters/UsersFilters"
import UsersListWrapper from "../usersListWrapper/UsersListWrapper"

const MainPage = () => {

    return (
        <>
            <div className="content">
                <UsersFilters/>
                <UsersListWrapper/>
            </div>    
        </>

    )
}

export default MainPage;