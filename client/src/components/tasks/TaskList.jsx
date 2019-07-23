import React, {useContext} from 'react';
import {StoreContext} from '../../contexts/StoreContext';
import TaskItem from './TaskItem';

function TaskList() {
  const store=useContext(StoreContext);
  return (
    <div>
      {store.state.map(item => <TaskItem key={item.id} task={item} />)}
    </div>
  )
}

export default TaskList;