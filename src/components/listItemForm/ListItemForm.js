

import FormInput from "../formInput/FormInput"

import './listItemForm.scss'


const ListItemForm = (props) => {

const labelName = props.item.label[0].charAt(0).toUpperCase() + props.item.label[0].slice(1);

    return (
        <li>
                <div>
                     <FormInput 
                        label={labelName}
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