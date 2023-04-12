import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/Homepages';
import { EventsPage } from 'pages/EventsPage';
import { EventSubpage } from 'pages/EventSubpage/EventSubpage';
import { SearchPage } from 'pages/SearchPage/SearchPage';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="events" element={<EventsPage />}>
            <Route path=":id" element={<EventSubpage />} />
          </Route>
          <Route path="/search" element={<SearchPage />}></Route>
        </Route>
      </Routes>
    </div>
  );
};
