import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const WebSorryScreen = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Typography variant="h2" style={{ color: "white", fontWeight: 410 }}>
          Buildi
        </Typography>
        <Typography
          variant="h4"
          style={{ color: "white", width: "50vw", textAlign: "center" }}
        >
          is best experienced on a mobile device
        </Typography>
        <Typography
          variant="h6"
          style={{ color: "white", width: "50vw", textAlign: "center" }}
        >
          Please open on your phone, or use the browser dev tools to view from a
          mobile sized screen
        </Typography>
      </Box>
    </>
  );
};

export default WebSorryScreen;
