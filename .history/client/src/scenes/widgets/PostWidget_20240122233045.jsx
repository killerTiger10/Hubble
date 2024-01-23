import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlines,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/system";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { UseDispatch, useSelector } from "react-redux";
import { setPosts } from "state";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturPath,
  userPicturPath,
  likes,
  comments,
}) => {};

export default PostWidget;
