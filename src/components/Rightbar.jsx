import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  ImageList,
  ImageListItem,
  Link,
  styled,
  Typography,
} from "@mui/material";

const StyledLinkBox = styled(Box)(({ theme }) => ({
  "& .MuiLink-root": {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
    textDecoration: "none",
    "& .MuiChip-root": {
      cursor: "pointer",
      marginBottom: theme.spacing(2),
    },
  },
}));

const Rightbar = () => {
  return (
    <Box sx={{ position: "sticky", top: 0, paddingTop: 10 }}>
      <Box p={3} width={300}>
        <Typography variant="h6" fontWeight={100} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup max={5} sx={{}}>
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt=""
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
        </AvatarGroup>

        {/* for latest photos */}
        <Typography variant="h6" fontWeight={100} mt={3} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"
              alt=""
            />
          </ImageListItem>
        </ImageList>

        {/* for users */}
        <Typography variant="h6" fontWeight={100} mt={3} mb={2}>
          Categories
        </Typography>
        <StyledLinkBox>
          <Link href="#" variant="body2">
            <Chip label="Sports" />
          </Link>
          <Link href="#" variant="body2">
            <Chip label="Food" />
          </Link>
          <Link href="#" variant="body2">
            <Chip label="Movies" />
          </Link>
          <Link href="#" variant="body2">
            <Chip label="Science" />
          </Link>
          <Link href="#" variant="body2">
            <Chip label="News" />
          </Link>
          <Link href="#" variant="body2">
            <Chip label="Arts" />
          </Link>
          <Link href="#" variant="body2">
            <Chip label="History" />
          </Link>
        </StyledLinkBox>
      </Box>
    </Box>
  );
};

export default Rightbar;
