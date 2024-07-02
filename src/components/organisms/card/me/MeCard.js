import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import React from "react";
import { getUserInfo } from "../../../../temp_redux/reduxMock";
import AddRoundButton from "./AddRoundButton";
import { ME_STYLE } from "./MeCard.style";

const MeCard = ({ handleAddClick }) => {
  const user = getUserInfo();
  return (
    <Card sx={ME_STYLE.card}>
      <CardHeader
        avatar={
          <Avatar sx={ME_STYLE.avatar}>
            {user.first_name.substring(0, 1).toUpperCase()}
          </Avatar>
        }
        sx={ME_STYLE.header}
      ></CardHeader>
      <CardContent sx={ME_STYLE.content}>
        <Typography variant="h4">{`${user.first_name} ${user.last_name}`}</Typography>
        <Typography variant="h6">{user.location}</Typography>
      </CardContent>
      <CardActions sx={ME_STYLE.actions}>
        <AddRoundButton handleClick={handleAddClick} />
      </CardActions>
    </Card>
  );
};

export default MeCard;
