import React from 'react';
import TicketList from './TicketList';
import TicketTransfer from './TicketTransfer';
import EventInfo from './EventInfo';
import Sender from './Sender';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <Sender />
      <EventInfo />
      <TicketList />
      <TicketTransfer />

    </div>
  );
};

export default Dashboard;
