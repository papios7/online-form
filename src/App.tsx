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
      <h5>Fill in the form bellow following the steps provided, and we will do our best to contact our suppliers (courier companies) to declare your incident and request details about the next steps for refund/compensation</h5>
      <Form />
    </div></header>
  );
};

export default App;
