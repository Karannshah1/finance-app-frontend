import React, { useEffect, useState } from 'react';
import API from '../api/api';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    API.get('/tickets')
      .then(res => setTickets(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Your Tickets</h2>
      <div>
        {tickets.map((ticket, idx) => (
          <div key={idx}>
            <p>Ticket Code: {ticket.ticketCode}</p>
            <img src={`data:image/png;base64,${ticket.qrCodeBase64}`} alt="QR Code" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketList;
