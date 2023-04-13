import { useFetchEvent } from 'hooks/useFetchEvent';
import { Link, useLocation } from 'react-router-dom';

export const EventSubPage = () => {
  const event = useFetchEvent();
  const location = useLocation();

  return (
    <div>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width={640} />
        </div>
      )}
      <Link to="details" state={location.state}>
        More info
      </Link>
    </div>
  );
};
