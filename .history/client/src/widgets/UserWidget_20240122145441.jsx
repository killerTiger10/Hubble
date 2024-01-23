import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;
};

const getUser = async () => {
  const response = await fetch(`http://localhost:3001/users/${userId}`, {
    method: "GET",
    heaeders: { Authorization: `Bearer ${token}` },
  });
};
