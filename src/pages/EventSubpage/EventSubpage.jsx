import { useFetchEvent } from 'hooks/useFetchEvent';

export const EventSubpage = () => {
  const event = useFetchEvent();

  return (
    <div>
      {event && (
        <div>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} />
        </div>
      )}
    </div>
  );
};
