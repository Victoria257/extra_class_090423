import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchEventsByName } from 'servises/eventsApi';

export const SearchPage = () => {
  const [events, setEvents] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('queryEvent');

  useEffect(() => {
    if (!searchQuery) return;
    fetchEventsByName(searchQuery)
      .then(res => setEvents(res))
      .catch(error => console.log(error));
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();

    setSearchParams({
      queryEvent: event.target.elements.searchQuery.value.trim(),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchQuery" />
      </form>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
