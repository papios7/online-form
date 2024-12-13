import React, { FormEvent } from 'react';
import { useFormStore } from '../store/FormStore.ts';

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
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className="formfields">
      <div>
        <label>Deliverback order number (check your confirmation email to find it)</label>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setField('idNumber', e.target.value)}
        />
      </div>
      <div>
        <label>Receipt</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setField('receipt', e.target.files?.[0] || null)}
        />
      </div>
      <div>
        <label>Package Image</label>
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
        <textarea 
          value={notes}
          onChange={(e) => setField('notes', e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
      </div>
    </form>

  );
};

export default Form;
