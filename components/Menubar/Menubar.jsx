import { Box } from "@material-ui/core";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const Menubar = () => {
  return (
    <>
      <Box display={{ xs: 'none', md: 'block' }}>
        <Navbar />
      </Box>
      <Box display={{ xs: 'block', md: 'none' }}><MobileNav /></Box>
      
    </>
  );
};
export default Menubar;
