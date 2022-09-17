import { Add } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StyledModel = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const StyledModelBox = styled(Box)(({ theme }) => ({
  width: 500,
  minHeight: 550,
  backgroundColor: "white",
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  [theme.breakpoints.down("sm")]: {
    width: "100vh",
    height: "100vh",
    borderRadius: "bone",
  },
  "& .form-root": {
    padding: theme.spacing(2),
  },
  "& .MuiFormControl-root": {
    marginBottom: theme.spacing(3),
  },
  "& .MuiSelect-select": {
    padding: theme.spacing(1),
  },
}));
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const AddPost = () => {
  const [openAddPost, setOpenAddPost] = useState(false);
  const [selectValue, setSelectValue] = useState("");
  function notify() {
    toast.success("Post was Created!");
  }
  return (
    <>
      <Tooltip
        onClick={() => setOpenAddPost(true)}
        title="Add Post"
        sx={{
          position: "fixed",
          bottom: 30,
          right: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      {/* Add Post Model */}
      <StyledModel open={openAddPost}>
        <StyledModelBox>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
              src="https://material-ui.com/static/images/avatar/1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography variant="span" fontWeight={500}>
              SD Goraya
            </Typography>
          </UserBox>

          <Box component="form" autoComplete="off" className="form-root">
            <TextField
              id="post-title"
              label="Title"
              variant="standard"
              size="small"
              sx={{ width: "100%" }}
            />
            <TextField
              sx={{ width: "100%" }}
              id="post-desc"
              label="Description"
              multiline
              rows={3}
              variant="standard"
              placeholder="What's on your mind?"
            />
            <TextField
              sx={{ width: "100%" }}
              id="post-visibility"
              label="Visibility"
              variant="standard"
              select
              value={selectValue}
              onChange={(e) => setSelectValue(e.target.value)}
            >
              <MenuItem value="">--------</MenuItem>
              <MenuItem value="public">Public</MenuItem>
              <MenuItem value="private">Private</MenuItem>
              <MenuItem value="unlisted">Unlisted</MenuItem>
            </TextField>

            <FormControl>
              <FormLabel>Who can comment?</FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="Everbody"
                  control={<Radio size="small" />}
                  label="Everbody"
                />
                <FormControlLabel
                  value="My Friends"
                  control={<Radio size="small" />}
                  label="My Friends"
                />
                <FormControlLabel
                  value="Nobody"
                  control={<Radio size="small" />}
                  label="Nobody"
                />
                <FormControlLabel
                  value="Custom"
                  control={<Radio size="small" />}
                  label="Custom (Premium)"
                  disabled
                />
              </RadioGroup>
            </FormControl>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Button
                variant="outlined"
                onClick={() => {
                  setOpenAddPost(false);
                  notify();
                }}
              >
                Post
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setOpenAddPost(false)}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        </StyledModelBox>
      </StyledModel>
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
};

export default AddPost;
