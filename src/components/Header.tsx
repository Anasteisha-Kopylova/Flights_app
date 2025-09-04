import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          ✈️ Flight App
        </Typography>
        <div>
          <Button color="inherit" component={Link} to="/">
            Flights
          </Button>
          <Button color="inherit" component={Link} to="/cart">
            Cart
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
