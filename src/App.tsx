import React from 'react';
import Form from './components/Form.tsx';

const App: React.FC = () => {
  return (


 
    <header>
    <div className="header">      
      <img src="https://claims.deliverback.com/logo-horizontal.png"></img>
    </div>
    <div className="mainpage">
      <h1>Claim Compensation Form</h1>
      
      <Form />
    </div></header>
  );
};

export default App;
