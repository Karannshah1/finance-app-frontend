import React, { useState } from 'react';
import API from '../api/api';

const TicketTransfer = () => {
  const [targetEmail, setTargetEmail] = useState('');
  const [ticketCode, setTicketCode] = useState('');

  const transfer = () => {
    API.post('/transfer', { ticketCode, targetEmail })
      .then(res => alert(res.data.message))
      .catch(err => alert("Transfer failed"));
  };

  return (
    <div>
      <h2>Transfer Ticket</h2>
      <input placeholder="Ticket Code" value={ticketCode} onChange={e => setTicketCode(e.target.value)} />
      <input placeholder="Target Email" value={targetEmail} onChange={e => setTargetEmail(e.target.value)} />
      <button onClick={transfer}>Transfer</button>
    </div>
  );
};

export default TicketTransfer;
