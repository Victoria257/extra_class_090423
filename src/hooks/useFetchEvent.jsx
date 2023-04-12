import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventById } from 'servises/eventsApi';

export const useFetchEvent = () => {
  const [event, setEvent] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchEventById(id).then(response => {
      setEvent(response);
    });
  }, [id]);

  return event;
};
