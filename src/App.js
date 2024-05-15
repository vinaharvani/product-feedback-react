import { Component } from 'react';
import './App.css';
import Left from './component/Left';
import Right from './component/Right';

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
