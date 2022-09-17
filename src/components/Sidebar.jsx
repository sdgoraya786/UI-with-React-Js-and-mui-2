import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import {
  Home,
  Article,
  Group,
  List as ListIcon,
  Storefront,
  Person,
  Settings,
  CameraAlt,
  PlayCircleFilled,
  PhoneAndroid,
  Bookmark,
  ExitToApp,
} from "@mui/icons-material";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "sticky",
  top: 0,
  height: "100vh",
  paddingTop: theme.spacing(10),
  [theme.breakpoints.down("sm")]: {
    color: "white",
    width: "56px",
    backgroundColor: theme.palette.primary.main,
    "& .MuiButtonBase-root": {
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
    "& .MuiListItemText-root": {
      display: "none",
    },
    "& .MuiListItemIcon-root": {
      color: "white",
      minWidth: 0,
    },
  },
}));

const Sidebar = () => {
  return (
    <StyledBox>
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="List" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <CameraAlt />
            </ListItemIcon>
            <ListItemText primary="Camera" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <PlayCircleFilled />
            </ListItemIcon>
            <ListItemText primary="Videos" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <PhoneAndroid />
            </ListItemIcon>
            <ListItemText primary="Apps" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="Collections" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Market Place" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#" title="Logout">
            <ListItemIcon>
              <ExitToApp />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </StyledBox>
  );
};

export default Sidebar;
