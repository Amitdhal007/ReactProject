// import logo from './logo.svg';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import FormTodos from './MyComponents/FormTodos'
import React, { useState } from 'react';
import './App.css';

function App() {

  const onDelete = (todo) => {
    console.log("Todo gets deleted",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title,desc)=>{
    console.log("I am adding this todo i.e ",title,desc)
  }
  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Tomorrow is my DBMS Fa3",
      desc: "I need to do study so that i can get good marks"
    },
    {
      sno: 2,
      title: "Tomorrow is Tuesday",
      desc: "I need to come bcz my attendence is very short"
    },
    {
      sno: 3,
      title: "Tomorrow i will be very busy",
      desc: "Therefore i would not play with you"
    },
    {
      sno: 4,
      title: "Tomorrow is Holiday",
      desc: "I need to come bcz my attendence is very short"
    },
  ])
  return (
    <>
      {/* <Header title= {45} searchBar={true}/> */}
      {/* <Header searchBar={true}/> */}
      <Header />
      <FormTodos addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
