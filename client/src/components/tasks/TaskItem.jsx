import React from 'react';

function TaskItem({task: {id, complete, todo}} ) {

  return (
    <>
      <p>{`${todo}`}</p>
      <p>{`${id}`}</p>
      <p>{`${complete}`}</p>
    </>
  );
}

export default TaskItem;