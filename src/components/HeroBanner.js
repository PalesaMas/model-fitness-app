import React from "react";
import { Box, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "221px", xs: "70px" }, ml: { sm: "50px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2626" fontWeight="600" fontSize="30px">
        Model Fitness Studio
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Helping Women on their <br /> Fitness and Wellness Journey
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb="10px">
        Check out the most effective exercises
      </Typography>
      <Button variant="contained" color="error" href="#exercises">
        Explore Exercises
      </Button>
      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>
  );
};

export default HeroBanner;
