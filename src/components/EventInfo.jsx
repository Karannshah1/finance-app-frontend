import React from 'react';

const eventDetails = {
  title: 'Spring Boot & React Tech Conference',
  address: '123 Conference Road, Bengaluru, India',
  date: '2025-08-01',
  time: '10:00 AM',
};

const EventInfo = () => {
  const copyInfo = () => {
    const text = `${eventDetails.title}\n${eventDetails.address}\n${eventDetails.date} ${eventDetails.time}`;
    navigator.clipboard.writeText(text);
    alert("Event info copied!");
  };

  return (
    <div>
      <h2>Event Info</h2>
      <p><strong>Title:</strong> {eventDetails.title}</p>
      <p><strong>Address:</strong> {eventDetails.address}</p>
      <p><strong>Date & Time:</strong> {eventDetails.date} {eventDetails.time}</p>
      <button onClick={copyInfo}>Copy Info</button>
    </div>
  );
};

export default EventInfo;
