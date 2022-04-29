import UsersForm from "../../containers/UserForm"
import LinkButton from '../../containers/LinkButton'
import './userFormWrapper.scss'


const UserFormWrapper = () => {


    return(
    
       

    <div className='wrapper-form'>
        <div>
        <p className="wrapper__list-name single-user">Профиль пользователя
        <span className="edit-button">
    <LinkButton linkValue={false} >Редактировать</LinkButton>
        </span>
    </p>
    </div>

        <UsersForm/>

        </div>

        
    )
}

export default UserFormWrapper