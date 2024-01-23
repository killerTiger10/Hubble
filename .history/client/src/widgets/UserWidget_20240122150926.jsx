import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import UserImage from "components/UserImage";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
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
  const data = await response.json();

  useEffect(() => {
    getUser()
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


if(!user){
    return null;
}

const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
} = user;

return (
    {/* FIRST ROW */}
    <WidgetWrapper>
        <FlexBetween
        gap="0.5rem"
        pb="1.1rem"
        onClick={() => navigate(`/profile/$userId`)}
        >
    
</FlexBetween>
    </WidgetWrapper>
);

};

export default UserWidget;