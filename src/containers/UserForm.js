
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Spinner from '../components/spinner/Spinner';
import ListItemForm from '../components/listItemForm/ListItemForm';
import CustomForm from '../components/customForm/CustomForm';

import { fetchUsers, setReadOnly } from '../reducers/usersSlice';
import { useDispatch } from 'react-redux';


const UsersForm = () => {

    const {users, usersLoadingStatus, readonly} = useSelector(state => state.users)
    const dispatch = useDispatch();
    const {id} = useParams();  
    const [userProps, setUserProps] = useState({});

    const setValues = (value) => {
        setUserProps({
            name: value[0].name,
            username: value[0].username,
            email: value[0].email,
            street: value[0].address.street,
            city: value[0].address.city,
            zipcode: value[0].address.zipcode,
            phone: value[0].phone,
            website: value[0].website,
            comment: ''
        })      
    }

    const keys = Object.keys(userProps);
    const items = []
    keys.forEach(key => {
        items.push({label: [key], name : userProps[key]});

    });


    useEffect( () => {
        dispatch(fetchUsers(+id))
        dispatch(setReadOnly(true))
        // eslint-disable-next-line
    }, []);

    useEffect( () => {
        if (users) {
        setValues(users)
        }
        // eslint-disable-next-line
    }, [users]);

   

    const onChangeInputValue = (e) => {setUserProps({...userProps, [e.target.name]: e.target.value})}

    const renderItems = (arr) => {

                    if (usersLoadingStatus === 'loading') {
                        return <Spinner/>
                    }
                
                    return arr.map((item, i) => {
                        return (
                            <ListItemForm 
                                key={i}
                                item={item}
                                readonly={readonly}
                                onChangeInputValue={onChangeInputValue}
                                />
                        )
                    })
            
        }

    const elements = renderItems(items)

    const validationSchema = (Yup) => ({
        name: Yup.string()
                .min(2, 'Минимум 2 символа для заполнения')
                .required('Обязательное поле!'),
        username: Yup.string()
                .min(2, 'Минимум 2 символа для заполнения')
                .required('Обязательное поле!'),
        email: Yup.string()
                .email('Неправильный email адрес')
                .required('Обязательное поле!'),
        street: Yup.string()
                .min(3, 'Минимум 3 символа для заполнения')
                .required('Обязательное поле!'),
        city: Yup.string()
            .min(2, 'Минимум 2 символа для заполнения')
            .required('Обязательное поле!'),
        zipcode: Yup.string()
            .matches(/(^[0-9]{5}(-[0-9]{4})?$)/, "Только цифры и тире")
            .min(5, 'Минимум 5 символов для заполнения')
            .max(10, 'Максимум 10 символов')
            .required('Обязательное поле!'),
        phone: Yup.string()
            .matches(/[0-9]/, "Недопустимый символ")
            // .min(7, 'Минимум 5 символов для заполнения')
            // .max(20, 'Максимум 10 символов')
            .required('Обязательное поле!'),
        website: Yup.string()
        .matches(/^.+[a-zA-Z0-9]\.+[a-z]{2,4}$/, "Недопустимый email")
        .required('Обязательное поле!')

    })

    return (

        <CustomForm
            userProps={userProps}
            elements={elements} 
            readonly={readonly}
            validationSchema={validationSchema}
        />
    )
}


export default UsersForm;






