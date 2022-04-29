

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import './customForm.scss'


const CustomForm = ({userProps,elements, readonly, validationSchema}) => {

    const submitClassName = readonly ?  'customForm__button' : 'customForm__button is-able'


    return (

            <Formik
                enableReinitialize={true}
                initialValues = {userProps}
                validationSchema = {Yup.object(validationSchema(Yup))}
                onSubmit = {values => console.log(JSON.stringify(values, null, 2))}>    
        
                <Form className="customForm__content" >

                    <ul className='' style={{'listStyleType': 'none'}}>
                        {elements}
                    </ul>
                    <button type='submit' disabled={readonly} className={submitClassName}>Отправить</button>
                </Form>
                
            </Formik>
            )
}

export default CustomForm