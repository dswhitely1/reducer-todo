import {
  Field,
  Form,
  withFormik
} from 'formik';
import React from 'react';
import {
  Button,
  Form as BootStrapForm
} from 'react-bootstrap';
import * as Yup from 'yup';

function TaskForm( {values, errors, touched} ) {
  console.log(errors, touched)
  return (
    <>
      <h3>Add a Todo!</h3>
      <Form component={BootStrapForm} className='form-inline mr-md-2 d-flex flex-column align-items-start'>

          <Field 
            name='todo'
            placeholder='Add Task'
            className='form-control mr-2'
          />
          {touched.todo && errors.todo &&
          <span className='text-danger'>{errors.todo}</span>}
          <Button type='submit'>Add Todo</Button>

      </Form>
    </>
  );
}

export default withFormik( {
  mapPropsToValues( {todo} ) {
    return {
      todo: todo || ''
    };
  },
  validationSchema: Yup.object().shape({
    todo: Yup.string().required('This field is required.')
  }),
  handleSubmit( values, formikBag ) {
    console.log( formikBag );
  }
} )( TaskForm );