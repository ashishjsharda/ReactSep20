import React from 'react';
import ReactDOM from 'react-dom';

function Cat({name}){
    return <h1>Our cat's name is {name}</h1>
}
ReactDOM.render(
  <Cat name={"Kittu"}/>,
  document.getElementById('root')
);

