import React from "react";
import "./NoConnect.style.scss";
import { 
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const card = (
  <React.Fragment>
    <CardContent sx={{width: "60%", margin: "3rem auto"}}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Oops...
      </Typography>
      <Typography variant="h5" component="div">
        Something went wrong
      </Typography>
      <Typography variant="body2">
        Please,
      </Typography>
      <CardActions sx={{display: "flex", justifyContent: "center"}}>
        <Button size="large" sx={{display: "flex", justifySelf: "center"}}>
          <a href="/">REFRESH THE PAGE</a>
        </Button>
      </CardActions>
    </CardContent>
  </React.Fragment>
);

export function NoConnect() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}