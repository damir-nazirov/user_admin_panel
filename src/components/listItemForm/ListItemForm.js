

import FormInput from "../formInput/FormInput"

import './listItemForm.scss'


const ListItemForm = (props) => {

    return (
        <li>
                <div>
                     <FormInput 
                        label={props.item.label}
                        readOnly={props.readonly}
                        type="text" 
                        name={props.item.label}
                        id={props.item.label}
                        value={props.item.name}
                        onChange={props.onChangeInputValue}
                        disabled={props.readonly}
                      />
                </div>

           </li>
    )
}

export default ListItemForm
