import {Link} from 'react-router-dom';
import './userListItem.scss'

const UserListItem = ({name, address, company, id}) => {
 
    return (
        <li key={id}  className="userListItem__wrapper">
            <div className="userListItem__content">
                
                <p className="">ФИО: <span className="userListItem__data">{name}</span> </p>
                <p className="">город: <span className="userListItem__data">{address.city}</span></p>
                <p className="userListItem__string">компания: <span className="userListItem__data"> {company.name} </span>
                        <Link className='userListItem__link'    to={`/user/${id}`} >
                            Подробнее
                        </Link>
                     </p>
            </div>
        </li>
    )
}

export default UserListItem;