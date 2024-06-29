import { Box, Grid, Hidden, Typography } from "@mui/material";
import React from "react";

export const MuiLayout = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        // flexDirection: "column",
        // justifyContent: "center",
        // alignItems: "center",
        height: "100vh",
        backgroundColor: "lightblue",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          xl={6}
          md={6}
          sm={6}
          lg={6}
          sx={{ backgroundColor: "blue", height: "200px" }}
        >
          <Typography variant="h4">Hello</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          xl={6}
          md={6}
          sm={6}
          lg={6}
          sx={{ backgroundColor: "pink", height: "200px" }}
        >
          <Typography variant="h3">Hello</Typography>
        </Grid>

        <Grid
          item
          xs={0}
          xl={4}
          md={4}
          sm={0}
          lg={4}
          sx={{
            backgroundColor: "green",
            display: { xs: "none", sm: "none", md: "block" },
          }}> 
          <Typography variant="p" sx={{color:"red"}}>Hello</Typography>
        </Grid>

        <Grid
          item
          xs={12}
          xl={8}
          md={8}
          sm={12}
          lg={8}
          sx={{ backgroundColor: "yellow" }}
        >
          okkkk
        </Grid>
      </Grid>
    </Box>
  );
};
