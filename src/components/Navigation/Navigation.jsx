import css from 'components/Navigation/Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={css.nav} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={css.nav} to="events">
            Event
          </NavLink>
        </li>
        <li>
          <NavLink className={css.nav} to="search">
            Search
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
