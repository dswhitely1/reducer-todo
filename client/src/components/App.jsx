import React from 'react';
import { StoreProvider } from '../contexts/StoreContext';
import { useStore } from '../hooks/useStore';
import Navigation from './navigation/Navigation';
import Task from './tasks/Task';

function App() {
  const [state, addTask, editTask, deleteTask] = useStore();

  return (
    <StoreProvider value={{
      state,
      addTask,
      editTask,
      deleteTask
    }}>
      <Navigation addTask={addTask} />
      <Task />
    </StoreProvider>
  );
}

export default App;
