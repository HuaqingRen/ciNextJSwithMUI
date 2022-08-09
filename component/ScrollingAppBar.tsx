import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";

export default function ScrollingAppBar() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={1}>
                {" "}
              </Grid>
              <Grid item xs={10}>
                <Typography variant="h4" align="center">
                  宋词猜猜猜
                </Typography>
              </Grid>
              <Grid item xs={1} >
                <Typography
                  variant="body2"
                  align="right"
                  color="text.secondary"
                >
                  via randomKT
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}></Box>
      </Container>
    </React.Fragment>
  );
}
