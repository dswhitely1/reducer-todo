import {
  Field,
  Form,
  withFormik
} from 'formik';
import React from 'react';
import {
  Button,
  Form as BootStrapForm,
  Nav,
  Navbar
} from 'react-bootstrap';

function Navigation( {values} ) {
  return (
    <Navbar bg="secondary" expand="lg">
      <Navbar.Brand>Digital Solutions By Don</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
      </Nav>
      <Form component={BootStrapForm} className='form-inline'>
        <Field name='todo'
               placeholder='Add Task'
               className="mr-sm-2 form-control" />
        <Button variant="outline-primary" type="submit">Add Task</Button>
      </Form>
    </Navbar>
  );
}

export default withFormik( {
  mapPropsToValues( {todo} ) {
    return {
      todo: todo || ''
    };
  },
  handleSubmit( values, formikBag ) {
    console.log(formikBag.props);
    formikBag.props.addTask(values);
  }
} )( Navigation );