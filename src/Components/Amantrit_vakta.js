import React from "react";
import { Box, Typography, Grid, Divider, useTheme } from "@mui/material";
import Speaker from "../Assets/images/Speaker.png";
import CentralizedBox from "./CentralizedBox";

const Amantrit_vakta = () => {
  const theme = useTheme();
  return (
    <Box>
      <CentralizedBox>
        <Typography
          variant="h3"
          color="#5F695C"
          sx={{ mt: 10, fontWeight: "bold" }}
        >
          आमंत्रित वक्ता
        </Typography>

        {/* Divider Below Image Section */}
        <Divider
          sx={{
            my: 2,
            borderColor: "#F9DAD0",
            borderWidth: 2,
            width: "100%",
            mx: "auto",
          }}
        />
      </CentralizedBox>
      {/* Committee Section */}
      <CentralizedBox
        sx={{
          width: "100%",
          background: "#fff",
          my: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={5} alignItems="center" sx={{}}>
          {[...Array(2)].map((_, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              key={i}
              sx={{
                display: "flex",
                gap: 10, // spacing between image and text
                flexDirection: { xs: "column", md: "row" }, // stack on small screens
              }}
            >
              {/* SPEAKER IMAGE WITH OUTWARD BORDER */}
              <Box
                sx={{
                  position: "relative",
                  width: "23rem",
                  height: "29.5rem",
                  borderRadius: "12px",
                  overflow: "visible", // allow borders to extend outside
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-5px", // move border outward
                    left: 0,
                    width: "60%",
                    height: "10px",
                    backgroundColor: "#522B29",
                    transformOrigin: "left",
                    clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-5px", // move border outward
                    right: 0,
                    width: "60%",
                    height: "10px",
                    backgroundColor: "#522B29",
                    transformOrigin: "right",
                    clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={Speaker}
                  alt="Speaker"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              {/* SPEAKER DETAILS */}
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    fontSize: "2.5rem",
                  }}
                >
                  श्री अनिल जोशी
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    lineHeight: 1.5,
                    fontSize: "1.25rem",
                  }}
                >
                  पूर्व उपाध्यक्ष, केंद्रीय हिंदी संस्थान, भारत सरकार
                  <br />
                  एवं <br />
                  अध्यक्ष, वैश्विक हिंदी परिवार
                  <br />
                  कवि - लेखक, पूर्व राजनयिक
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CentralizedBox>
      <Divider
        sx={{
          my: 2,
          borderColor: "#F9DAD0",
          borderWidth: 2,
          width: "100%",
          mx: "auto",
        }}
      />

      <CentralizedBox
        sx={{
          width: "100%",
          background: "#fff",
          my: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid container spacing={5} alignItems="center" sx={{}}>
          {[...Array(9)].map((_, i) => (
            <Grid
              item
              xs={4}
              sm={4}
              key={i}
              sx={{
                display: "flex",
                gap: 7, // spacing between image and text
                flexDirection: { xs: "column", md: "row" }, // stack on small screens
              }}
            >
              {/* SPEAKER IMAGE WITH OUTWARD BORDER */}
              <Box
                sx={{
                  position: "relative",
                  width: "14.7rem",
                  height: "19rem",
                  borderRadius: "12px",
                  overflow: "visible", // allow borders to extend outside
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-5px", // move border outward
                    left: 0,
                    width: "60%",
                    height: "10px",
                    backgroundColor: "#522B29",
                    transformOrigin: "left",
                    clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-5px", // move border outward
                    right: 0,
                    width: "60%",
                    height: "10px",
                    backgroundColor: "#522B29",
                    transformOrigin: "right",
                    clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0% 100%)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={Speaker}
                  alt="Speaker"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </Box>

              {/* SPEAKER DETAILS */}
              <Box sx={{ textAlign: "left" }}>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.main,
                    fontSize: "2.25rem",
                  }}
                >
                  श्री अनिल जोशी
                </Typography>

                <Typography
                  sx={{
                    mt: 10,
                    lineHeight: 1.5,
                    fontSize: "1.25rem",
                  }}
                >
                  पूर्व उपाध्यक्ष, केंद्रीय हिंदी संस्थान, भारत सरकार
                  <br />
                  एवं <br />
                  अध्यक्ष, वैश्विक हिंदी परिवार
                  <br />
                  कवि - लेखक, पूर्व राजनयिक
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </CentralizedBox>
    </Box>
  );
};

export default Amantrit_vakta;
