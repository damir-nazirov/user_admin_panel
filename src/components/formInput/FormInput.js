
import { useField } from "formik";

import './formInput.scss'

const FormInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="label-name" htmlFor={props.name}>{label}</label>
        <input {...field} {...props} 
          className={props.readOnly ? 'form-input' : 
                    !props.readOnly && !meta.touched && !meta.error ?
                    'form-input active' : meta.touched && meta.error ? 
                    'form-input active invalid' : 'form-input active'}/> 
      </>
    );
};

export default FormInput
