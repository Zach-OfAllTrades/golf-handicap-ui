import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { getUserInfo } from "../../../temp_redux/reduxMock";

const SHARED_STYLE = {
  card: {
    // background: "linear-gradient(to right bottom, #cfe1b9, #718355)",
    height: 565,
    width: 300,
    margin: 1,
    marginRight: 7.5,
  },
  header: {
    background: "linear-gradient(to right bottom, #cfe1b9, #718355)",
    height: 175,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    bgcolor: "#e9ecef",
    color: "black",
    height: 150,
    width: 150,
    // margin: 10,
    marginY: 15,
  },
};

const MeCard = () => {
  const user = getUserInfo();
  return (
    <Card sx={SHARED_STYLE.card}>
      <CardHeader
        avatar={
          <Avatar sx={SHARED_STYLE.avatar}>
            {user.first_name.substring(0, 1).toUpperCase()}
          </Avatar>
        }
        sx={SHARED_STYLE.header}
      ></CardHeader>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Typography variant="h4">{`${user.first_name} ${user.last_name}`}</Typography>
        <Typography variant="h6">{user.location}</Typography>
      </CardContent>
    </Card>
  );
};

export default MeCard;
