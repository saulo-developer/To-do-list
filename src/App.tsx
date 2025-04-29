import './global.css';
import styles from './App.module.css';
import { useState } from 'react';
import rocketIcon  from './assets/Icons/rocket.svg';

export function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: false },
    { id: 2, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: false },
    { id: 3, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: false },
    { id: 4, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: true },
    { id: 5, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', completed: true },
  ]);

  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemoveTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasks = tasks.filter((task) => task.completed).length;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.todoLogo}>ToDo list</span>
        <img src={rocketIcon} alt="" />
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className={styles.input}
        />
        <button onClick={handleAddTask} className={styles.addButton}>
          Criar
        </button>
      </div>
      <div className={styles.taskCounter}>
        <span>Tarefas criadas: {tasks.length}</span>
        <span>Concluídas: {completedTasks} de {tasks.length}</span>
      </div>
      <div className={styles.taskList}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
              className={styles.checkbox}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
            <button onClick={() => handleRemoveTask(task.id)} className={styles.removeButton}>
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;