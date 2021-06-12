import { Paper } from "@material-ui/core";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import LockTwoToneIcon from "@material-ui/icons/LockTwoTone";
import PersonAddTwoToneIcon from "@material-ui/icons/PersonAddTwoTone";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { deleteLocalStorage, localStorageCheck } from "@auth/auth";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function MobileNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const temp = localStorageCheck()

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className="fixedNav"
    >
      <BottomNavigationAction
        label="User"
        value="User"
        icon={<AccountCircleTwoToneIcon />}
      />
      <BottomNavigationAction
        label="signin"
        value="signin"
        icon={<LockOpenTwoToneIcon />}
      />
      { temp ? (
        <BottomNavigationAction
          onClick={() => {
            deleteLocalStorage();
          }}
          label="signout"
          value="signout"
          icon={<LockTwoToneIcon />}
        />
      ) : (
        <></>
      )}

      
    </BottomNavigation>
  );
}
