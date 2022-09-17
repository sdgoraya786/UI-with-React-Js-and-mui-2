import {
  AppBar,
  Badge,
  InputBase,
  styled,
  Toolbar,
  Typography,
  Box,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
  alpha,
  IconButton,
} from "@mui/material";
import {
  Mail,
  Notifications,
  Logout,
  PersonAdd,
  Settings,
  Search as SearchIcon,
  Cancel,
} from "@mui/icons-material";
import { useState } from "react";
import UserAvatar from "./UserAvatar";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme, opensearchbar }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    display: opensearchbar === "true" ? "flex" : "none",
    width: "70%",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
  },
}));

const Icons = styled(Box)(({ opensearchbar }) => ({
  gap: "3px",
  alignItems: "center",
  display: opensearchbar === "true" ? "none" : "flex",
}));

const Navbar = () => {
  const [openSearchBar, setOpenSearchBar] = useState("false");

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          SD GORAYA
        </Typography>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none" } }}>
          SDG
        </Typography>

        <Search opensearchbar={openSearchBar}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search..." />
          <Cancel
            onClick={() => setOpenSearchBar("false")}
            sx={{ mr: { sm: 2, xs: 1 }, display: { xs: "block", sm: "none" } }}
          />
        </Search>

        <Icons opensearchbar={openSearchBar}>
          {/* on click open model for search */}
          <IconButton
            sx={{ color: "white", display: { xs: "flex", sm: "none" } }}
            onClick={() => setOpenSearchBar("true")}
          >
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={4} color="error">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton sx={{ color: "white" }}>
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </IconButton>
          <UserAvatar handleClickMenu={handleClickMenu} menuOpen={menuOpen} />
        </Icons>
      </StyledToolbar>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        aria-labelledby="account-menu"
        open={menuOpen}
        onClose={handleCloseMenu}
        onClick={handleCloseMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 6,
            width: "230px",
            "& .MuiAvatar-root": {
              width: 30,
              height: 30,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 15,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <Avatar />
          Profile
        </MenuItem>
        <MenuItem>
          <Avatar />
          My Account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
