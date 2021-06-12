import { Grid } from "@material-ui/core";
import Menubar from "@components/Menubar/Menubar";

const Layout = ({ children }) => {
  return (
    <>
      <Menubar />

      {children}
    </>
  );
};

export default Layout;
