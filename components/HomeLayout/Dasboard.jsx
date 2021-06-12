import { getlocalStorage } from "@auth/auth";
import { Box, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import UserLogo from "./UserLogo";
const Dashboard = () => {
  const data = getlocalStorage();
  return (
    <>
      <div className="">
        <div className="logo">
          <img
            className="userLogo"
            height="150"
            width="150"
            src="https://st2.depositphotos.com/4841797/7586/i/600/depositphotos_75867919-stock-photo-bodybuilder-taking-a-selfie-in.jpg"
          />
        </div>
        <div className="logo">
          <h3>{data?.name}</h3>
        </div>
        <div>
          <h1 color="secondary">Dashboard</h1>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
