import { useFetchEvent } from 'hooks/useFetchEvent';
import { useLocation, useNavigate } from 'react-router-dom';

export const EventDetailsPage = () => {
  const data = useFetchEvent();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const handleClick = () => {
    navigate(location?.state?.from ?? '/');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Go back
      </button>
      {data && (
        <div>
          <h3>{data.name}</h3>
          <img src={data.images[0].url} alt={data.name} width={240} />
          <p>Genre: {data.classifications[0].genre.name}</p>
          <p>Subgenre: {data.classifications[0].subGenre.name}</p>
        </div>
      )}
    </div>
  );
};
