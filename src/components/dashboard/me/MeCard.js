import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { getColorPallete, getUserInfo } from "../../../temp_redux/reduxMock";
import AddButton from "../../organisms/AddButton";

const SHARED_STYLE = {
  card: {
    height: 450,
    width: 300,
    margin: 1,
    marginRight: 7.5,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: getColorPallete().gradient,
    height: 100,
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
    marginY: 5,
  },
};

const MeCard = ({handleAddClick}) => {
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
      <CardActions sx={{ marginTop: "auto" }}>
        <AddButton handleClick={handleAddClick}/>
      </CardActions>
    </Card>
  );
};

export default MeCard;
