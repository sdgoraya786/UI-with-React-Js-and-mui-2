import { Avatar, IconButton, Tooltip } from "@mui/material";

// more work on it later
const UserAvatar = ({ handleClickMenu, menuOpen }) => {
  return (
    <>
      <Tooltip title="SD Goraya">
        <IconButton
          size="small"
          aria-controls={menuOpen ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={menuOpen ? "true" : undefined}
          onClick={handleClickMenu}
        >
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://img.freepik.com/free-photo/confident-businessman-posing-outside_74855-1551.jpg?w=996&t=st=1662984291~exp=1662984891~hmac=684cc5f08fd3658c9eaf7f0b62b193c3d12b8b540f81d2a3c3c5b555d3901514"
          />
        </IconButton>
      </Tooltip>
    </>
  );
};

export default UserAvatar;
