import css from 'components/Navigation/Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {!pathname.includes('details') && (
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
      )}
    </div>
  );
};
