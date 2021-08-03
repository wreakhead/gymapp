import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { deleteLocalStorage, localStorageCheck } from "@auth/auth";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Button, Paper } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import FitnessCenterRoundedIcon from "@material-ui/icons/FitnessCenterRounded";
import { useRouter } from "next/router";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EmojiFoodBeverageRoundedIcon from "@material-ui/icons/EmojiFoodBeverageRounded";

export default function MobileNav() {
  const router = useRouter()
  const [value, setValue] = React.useState("recents");
  const temp = localStorageCheck();
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <Paper className="fixedNav">
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
      >
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              interactive
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title={
                <>
                  <Button
                    color="secondary"
                    onClick={() => {
                      deleteLocalStorage();
                    }}
                  >
                    Sign out
                  </Button>
                </>
              }
            >
              <BottomNavigationAction
                label="User"
                onClick={() => handleTooltipOpen()}
                icon={<AccountCircleTwoToneIcon />}
              />
            </Tooltip>
          </div>
        </ClickAwayListener>
        <BottomNavigationAction
          onClick={() => router.push("/")}
          label=""
          icon={<HomeRoundedIcon />}
        />

        <BottomNavigationAction
          onClick={() => router.push("/workoutPage")}
          label=""
          icon={<FitnessCenterRoundedIcon />}
        />
        <BottomNavigationAction
          onClick={() => router.push("/diet")}
          label=""
          icon={<EmojiFoodBeverageRoundedIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
