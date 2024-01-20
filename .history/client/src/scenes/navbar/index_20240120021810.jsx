import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormCOntrol,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/material";
import { useDispatch, UseDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(False);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.alt;

  const fullName = `${user.firstName} ${user.lastName}`;

  return (
  <FlexBetween padding="1rem 6%" backgroundColor={alt}>
    <FlexBetween>
      <Typography 
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate("/home")}
        sx={{
          "&hover": {
            color: primaryLight,
            cursor: "pointer",
          },
        }}
      >
        Hubble
      </Typography>
      {isNonMobileScreens && (
        <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
          <InputBase placegolder="Search...">
            <IconButton>
              <Search />
            </IconButton>
          </InputBase>
        <FlexBetween/>
      )}
    </FlexBetween>
  </FlexBetween>
  );
};

export default Navbar;
