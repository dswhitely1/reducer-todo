import React from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import TaskForm from './TaskForm';
import TaskList from './TaskList'

function Task() {
  return (
    <Container>
      <Row>
        <Col md={7}>
          <TaskList />
        </Col>
        <Col md={5}>
          <TaskForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Task;