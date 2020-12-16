import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ToDoList from './component/todolist';




function App() {
  const init = 
    [
      {
        'id': 1,
        'name': 'Ten 1'
      },
      {
        'id': 2,
        'name': 'Ten 2'
      },
      {
        'id': 3,
        'name': 'Ten 3'
      }
    ];

  const [student, setStudent] = useState(init)
  return (
    <div className="App">
      <ToDoList student={student}/>
    </div>
  );
}

export default App;
