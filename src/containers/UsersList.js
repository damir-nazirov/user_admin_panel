import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { fetchUsers } from '../reducers/usersSlice';


import UserListItem from '../components/userListItem/UserListItem';

import Spinner from '../components/spinner/Spinner';

 const filteredUsersSelector = createSelector(
    (state) => state.filters.activeFilter,
    (state) => state.users.users,
    (filter, users) => {
        if (filter === 'all') {
            return users;
        } else if (filter === 'cityFilter'){
            const a = [...users]
            function SortArray(x, y){
                return x.address.city.localeCompare(y.address.city);
            }
            const sortCytyArr = a.sort(SortArray);
            return sortCytyArr;
        }
        else if (filter === 'nameFilter'){
            const a = [...users]
            function SortArray(x, y){
                return x.name.localeCompare(y.name);
            }
            const sortNameArr = a.sort(SortArray);
            return sortNameArr;
        }
    }
);

const UserList = () => {

    const filteredUsers = useSelector(filteredUsersSelector);

    const {usersLoadingStatus} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers('users'));
        
        // eslint-disable-next-line
    }, []);


    if (usersLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (usersLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderUsersList = (arr) => {
        if (arr.length === 0) {
            return (
                    <h5 className="text-center mt-5">Пользователей пока нет</h5>
            )
        }
        return arr.map(({id, ...props}) => {
            return (
                    <UserListItem key={id} id={id} {...props}/>
            )
        })
    }

    const elements = renderUsersList(filteredUsers);
    return (
        <ul>
            {elements}
            <h5 id='userscore'>Найдено {filteredUsers.length} пользователей</h5>
        </ul>
    )
}

export default UserList;
