import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
  }

  function handleUpdateEvent(updatedEvent) {
    setEvents([...events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt)]);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList
          events={events}
          setFormOpen={setFormOpen}
          selectEvent={selectEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && (
          <EventForm
            key={selectedEvent ? selectedEvent.id : null}
            setFormOpen={setFormOpen}
            selectedEvent={selectedEvent}
            createEvent={handleCreateEvent}
            updateEvent={handleUpdateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
