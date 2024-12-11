import React, { FormEvent } from 'react';
import { useFormStore } from './FormStore';

const Form: React.FC = () => {
  const {
    idNumber,
    receipt,
    packageImage,
    status,
    bankAccountInfo,
    notes,
    setField,
  } = useFormStore();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({
      idNumber,
      receipt,
      status,
      bankAccountInfo,
      notes,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ID Number:</label>
        <input
          type="text"
          value={idNumber}
          onChange={(e) => setField('idNumber', e.target.value)}
        />
      </div>
      <div>
        <label>Receipt:</label>
        <input
          type="text"
          value={receipt}
          onChange={(e) => setField('receipt', e.target.value)}
        />
      </div>
      <div>
        <label>Package Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setField('packageImage', e.target.files?.[0] || null)}
        />
      </div>
      <div>
        <label>Status:</label>
        <select
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
        <label>Bank Account Info:</label>
        <input
          type="text"
          value={bankAccountInfo}
          onChange={(e) => setField('bankAccountInfo', e.target.value)}
        />
      </div>
      <div>
        <label>Notes/Comments:</label>
        <textarea
          value={notes}
          onChange={(e) => setField('notes', e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
