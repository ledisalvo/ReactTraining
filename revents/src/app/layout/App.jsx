import React from 'react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';

export default function App() {
  console.log('EventDashboard: ', EventDashboard);
  return (
    <div className="App">
      <h1>Re-vents</h1>     
      <EventDashboard />       
    </div>
  );
}