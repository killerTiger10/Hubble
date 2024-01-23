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
}) => {
    const [isComments, setIsComments] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector((state) => state.user);
    const loggedInUser = useSelector((state) => (state.user._id));
    const isLiked = Boolean(likes[loggedInUser]);
    const likeCount = Object.keys(likes).length;

    const { palette } = useTheme;
    const primaryLight = palette.primary.light;
    const primaryDark = palette.primary.dark;
    const main = palette.neutral.main;
    const medium = palette.neutral.medium;

    const patchLike = async () = {
        const response = await fetch(`http://localhost:3001/posts/${postId}/like`,{
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json"
            },
            body: JSON.stringify({ userId: loggedInUser})
        });
        const updatedPost = await response.json();
        dispatch(setPosts({ post: updatedPost}));
    };

    return (
        <WidgetWrapper>
            <Friend friendId={postUserId} name={name} subtitle={location} userPicturePath={userPicturPath}/>
            
        </WidgetWrapper>
    )
};

export default PostWidget;
