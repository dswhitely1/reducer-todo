import React from 'react';
import {
  Col,
  Container,
  Row
} from 'react-bootstrap';
import TaskList from './TaskList'

function Task() {
  return (
    <Container>
      <Row>
        <Col md={7}>
          <TaskList />
        </Col>
        <Col md={5}>
          <h1>Form</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Task;