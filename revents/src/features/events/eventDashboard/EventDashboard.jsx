import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import EventForm from '../eventForm/EventForm';
import { sampleData } from '../../../app/api/sampleData';
import cuid from 'cuid';

export default function EventDashboard({ formOpen, setFormOpen, selectEvent, selectedEvent }) {
  const [events, setEvents] = useState(sampleData);

  function handleCreateEvent(event) {
    setEvents([...events, event]);
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
            setFormOpen={setFormOpen}
            selectedEvent={selectedEvent}
            createEvent={handleCreateEvent}
          />
        )}
      </Grid.Column>
    </Grid>
  );
}
