import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Homepage } from 'pages/Homepages';
import { EventsPage } from 'pages/EventsPage';
import { EventSubPage } from 'pages/EventSubPage/EventSubPage';
import { SearchPage } from 'pages/SearchPage/SearchPage';
import { EventDetailsPage } from 'pages/EventDetailsPage/EventDetailsPage';

export const App = () => {
  return (
    <div>
      <BrowserRouter basename="/extra_class_090423">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="events" element={<EventsPage />}>
              <Route path=":id" element={<EventSubPage />} />
            </Route>
            <Route path="search" element={<SearchPage />}>
              <Route path=":id" element={<EventSubPage />} />
            </Route>
            <Route
              path="events/:id/details"
              element={<EventDetailsPage />}
            ></Route>
            <Route
              path="search/:id/details"
              element={<EventDetailsPage />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
