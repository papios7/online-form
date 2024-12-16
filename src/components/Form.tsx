import React, { FormEvent, useState } from 'react';
import { useFormStore } from '../store/FormStore.ts';
import { Modal, Box, Typography, Button } from '@mui/material';

const Form: React.FC = () => {
  const {
    idNumber,
    receipt,
    totalvalue,
    packageImage,
    status,
    bankAccountInfo1,
    bankAccountInfo2,
    bankAccountInfo3,
    bankAccountInfo4,
    notes,
    setField,
  } = useFormStore();

   const [isSubmitted, setIsSubmitted] = useState(false); // State to track submission

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log({
      idNumber,
      receipt,
      totalvalue,
      status,
      bankAccountInfo1,
      bankAccountInfo2,
      bankAccountInfo3,
      bankAccountInfo4,
      notes,
    });

       // Set the submission state to true
    setIsSubmitted(true);

    // Show the thank-you message
    
  };
  return  (




     <div>
      {isSubmitted ? (
        <div className="alert">
          {/* Thank-You Message */}
        <img src={require('../images/check.png')} />
          <h2> THANK YOU</h2>
          <p>
            Thank you for sharing all those details with us. Our customer care agents will
            process your compensation claim, and we will contact you soon with additional questions (if any).
          </p>
        </div> ) : ( 










    <form onSubmit={handleSubmit}>
    <h5>Fill in the form bellow following the steps provided, and we will do our best to contact our suppliers (courier companies) to declare your incident and request details about the next steps for refund/compensation</h5>
    <div className="formfields">
      <div>
        <label>Deliverback order number</label>
        <span className="subtitle">You can find this number in your Deliverback confirmation email</span>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setField('idNumber', e.target.value)}
        />        
      </div>
      <div>
        <label>Item Purchase Receipt</label>
        <span className="subtitle">We would like your purchase receipt to confirm the value of your item(s) when originally purchased</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setField('receipt', e.target.files?.[0] || null)}
        />
      </div>
      <div>
        <label>Image of the Package</label>
        <span className="subtitle">Please provide one or more pictures of the package as delivered to you</span>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setField('packageImage', e.target.files?.[0] || null)}
        />
      </div>
      <div>
        <label>Total item(s) value when bought</label>
        <input
          type="number"
          value={totalvalue}
          onChange={(e) => setField('totalvalue', e.target.value)}
          />
      </div>
      <div>
        <label>Status</label>
        <span className="subtitle">Please declare the current situation of your shipment</span>
        <select className="arrowselect"
          value={status}
          onChange={(e) => setField('status', e.target.value)}
        >
          <option value="">Select</option>
          <option value="Broken">Broken</option>
          <option value="Partially damaged">Partially damaged</option>
          <option value="Lost">Lost</option>
        </select>

      </div>
      <div>
        <label>Bank Account Info</label>
        <span className="subtitle">In case this claim is confirmed and verified, we need your bank account information in order to compensate you via a Bank transfer</span>
        <input placeholder="BIC"
          type="text"
          value={bankAccountInfo1}
          onChange={(e) => setField('bankAccountInfo1', e.target.value)}
        />
      </div>
      <div className="Bankinfofield">
       <input placeholder="IBAN"
          type="text"
          value={bankAccountInfo2}
          onChange={(e) => setField('bankAccountInfo2', e.target.value)}
        />
      </div>
      <div className="Bankinfofield"> 
       <input  placeholder="Bank Name"
          type="text"
          value={bankAccountInfo3}
          onChange={(e) => setField('bankAccountInfo3', e.target.value)}
        />
      </div>
        <div className="Bankinfofield"> 
       <input  placeholder="Bank Country"
          type="text"
          value={bankAccountInfo4}
          onChange={(e) => setField('bankAccountInfo4', e.target.value)}
        />
      </div>

      <div>
        <label>Notes/Comments</label>
        <span className="subtitle">Please share any additional information that will help us process your claim</span>
        <textarea 
          value={notes}
          onChange={(e) => setField('notes', e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>
 )}
        </div>
  );
};

export default Form;
