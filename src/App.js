import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AddPost from "./components/AddPost";
import { Box, Grid } from "@mui/material";

function App() {
  return (
    <Box>
      <Navbar />
      <Grid container>
        <Grid item md={2} sm={3} xs={2}>
          <Sidebar />
        </Grid>
        <Grid item md={6} sm={9} xs={10}>
          <Feed />
        </Grid>
        <Grid item md={4} sx={{ display: { xs: "none", md: "block" } }}>
          <Rightbar />
        </Grid>
      </Grid>
      <AddPost />
    </Box>
  );
}

export default App;
