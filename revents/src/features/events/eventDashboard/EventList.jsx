import React from 'react';
import EventListItem from './EventListItem';

export default function EventList({ events, setFormOpen, selectEvent }) {
  return (
    <>
      {events.map((event) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          setFormOpen={setFormOpen}
        />
      ))}
    </>
  );
}
