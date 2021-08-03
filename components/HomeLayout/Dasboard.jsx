import { getlocalStorage } from "@auth/auth";
import { Box, Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import UserLogo from "./UserLogo";
const Dashboard = () => {
  const data = getlocalStorage();
  return (
    <>
      <div className="dasboardMaster">
        <div className="">
          <img
            className="userLogo"
            height="150"
            width="150"
            src="https://st2.depositphotos.com/4841797/7586/i/600/depositphotos_75867919-stock-photo-bodybuilder-taking-a-selfie-in.jpg"
          />
        </div>
        <div className="logoName">
          <h3>{data?.name.toUpperCase()}</h3>
        </div>
        <div className="logoDash">
          <h1 >Dashboard</h1>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
