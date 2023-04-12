import { useEffect, useState } from 'react';
import { fetchEvents } from 'servises/eventsApi';
import { Link, Outlet } from 'react-router-dom';
export const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents()
      .then(response => setEvents(response))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};
