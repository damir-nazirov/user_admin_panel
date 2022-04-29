import { useDispatch } from 'react-redux';
import { filtersChanged } from '../reducers/userFiltersSlice';
import {setReadOnly} from '../reducers/usersSlice'

import Link from '../components/link/Link';

const LinkButton = (props) => {

    const dispatch = useDispatch();

    const onClick = (e) => {
        e.preventDefault(); 
        if (typeof props.linkValue === 'string') {
        dispatch(filtersChanged(props.linkValue))
        }
        else {dispatch(setReadOnly(props.linkValue))}
    }

    return (
        <Link onClick={onClick} children={props.children}/>
    )

}


export default LinkButton;