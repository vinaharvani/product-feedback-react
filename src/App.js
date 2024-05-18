// import { Component } from 'react';
import './App.css';
import Left from './component/Left';
import Right from './component/Right';
import Detail from './component/Detail';
import article from "./component/Article";
// import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <div class="container">
        <div class="home-page">
            <Left></Left>
            <Right></Right>
        </div>
      </div>  
    </>
  );
}



export default App;

