import { Box, Typography, useTheme, useMediaQuery } from "@mui/system";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 10000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="clamp(32px)" color="primary">
          Hubble
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography>
          Welcome to Hubble, the Social Media for Hustlers!
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
