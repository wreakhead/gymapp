const { Box } = require("@material-ui/core");

const MasterLayout = ({ children }) => {
  return (
    <>
      <Box component="div">{children}</Box>
    </>
  );
};

export default MasterLayout;
