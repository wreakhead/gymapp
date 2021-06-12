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
        <ActiveLink activeClassName="menuActive" className="menuOptions" href="/">
          <a>Dashboard</a>
        </ActiveLink>
        {localStorageCheck() ? (
          <>
            <a onClick={() => deleteLocalStorage()}>Signout</a>
          </>
        ) : (
          <ActiveLink activeClassName="menuActive" className="menuOptions" href="/signin">
            <a>Signin</a>
          </ActiveLink>
        )}
        {localStorageCheck() ? (
          <></>
        ) : (
          <ActiveLink activeClassName="menuActive" className="menuOptions" href="/signup">
            <a>Signup</a>
          </ActiveLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
