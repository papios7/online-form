import React from 'react';
import Form from './components/Form.tsx';

const App: React.FC = () => {
  return (


 
    <header>
    <div className="header">      
      <img src="https://claims.deliverback.com/logo-horizontal.png"></img>
    </div>
    <div className="mainpage">
      <h1>Online Form</h1>
      <h5>Fill in the form bellow following the steps provided, and we will do our best to find and return the item to its owner!</h5>
      <Form />
    </div></header>
  );
};

export default App;
