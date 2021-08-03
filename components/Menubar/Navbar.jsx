import { localStorageCheck, deleteLocalStorage } from "@auth/auth";
import ActiveLink from "./Activelink";

const Navbar = () => {
  return (
    <nav>
      <h1 className="logo">
        <ActiveLink activeClassName="logoActive" className="logo" href="/">
          <a>Gymapp</a>
        </ActiveLink>
      </h1>
      <div className="menuOptions">
        {localStorageCheck() ? (
          <></>
        ) : (
          <ActiveLink
            activeClassName="menuActive"
            className="menuOptions"
            href="/signup"
          >
            <a>Signup</a>
          </ActiveLink>
        )}
        {localStorageCheck() ? (
          <ActiveLink
            activeClassName="menuActive"
            className="menuOptions"
            href="/"
          >
            <a>Dashboard</a>
          </ActiveLink>
        ) : (
          <></>
        )}

        {localStorageCheck() ? (
          <ActiveLink
            activeClassName="menuActive"
            className="menuOptions"
            href="/workoutPage"
          >
            <a>Workout</a>
          </ActiveLink>
        ) : (
          <></>
        )}
        {localStorageCheck() ? (
          <ActiveLink
            activeClassName="menuActive"
            className="menuOptions"
            href="/diet"
          >
            <a>Diet</a>
          </ActiveLink>
        ) : (
          <></>
        )}

        {localStorageCheck() ? (
          <>
            <a onClick={() => deleteLocalStorage()}>Signout</a>
          </>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
