import React from "react";
import { Box, Typography, Divider, Grid, useTheme } from "@mui/material";
import iitilogo from "../Assets/Images/iitilogo.png";
import croppediitjlogo from "../Assets/Images/croppediitjlogo.png";
import croppedcsirlogo from "../Assets/Images/croppedcsirlogo.png";
import nisprlogo from "../Assets/Images/nisprlogo.png";
import CombinedImage from "../Assets/Images/CombinedImage.png";

const Organizers = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5, lg: 10 } }}>
      <Box sx={{ my: { xs: 5, md: 10 }, display: { xs: "block", sm: "flex" } }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "30%" },
            borderRight: { xs: null, sm: "2px solid #F9DAD0" },
          }}
        >
          {/* Heading */}
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 700,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            आयोजक
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              fontWeight: 500,
              textAlign: { xs: "center", sm: "left" },
              lineHeight: 1.5,
              py: { xs: 2, sm: 4, md: 5 },
            }}
          >
            आचार्य सुहास जोशी <br />
            निर्देशक भा प्रौ सं, इंदौर
          </Typography>
        </Box>
        <Box
          sx={{
            display: "block",
            width: { xs: "100%", sm: "70%" },
            mx: { xs: 0, sm: 5 },
            my: { xs: 3, sm: 0 },
            justifyContent: { md: "space-around" },
          }}
        >
          {/* Heading */}
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 700,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            सह-आयोजक
          </Typography>
          <Grid container spacing={{ xs: 1, md: 4 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  fontWeight: 500,
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: 1.5,
                  py: { xs: 1, sm: 4, md: 5 },
                }}
              >
                आचार्य अविनाश कुमार अग्रवाल <br />
                निर्देशक भा प्रौ सं, जोधपुर
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "block" }}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  fontWeight: 500,
                  textAlign: { xs: "center", sm: "left" },
                  lineHeight: 1.5,
                  py: { xs: 1, sm: 0, md: 5 },
                }}
              >
                डॉ. गीता वाणी रायसम <br />
                निर्देशक, सी एस आई आर, निस्पर
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* Divider */}
      <Divider
        sx={{
          my: 1,
          borderColor: "#F9DAD0",
          borderWidth: 1.5,
          mx: "auto",
        }}
      />
      <Box
        sx={{
          my: { xs: 5, md: 10 },
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 4, sm: 6, md: 10 },
        }}
      >
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            fontWeight: 700,
            textAlign: { xs: "center", sm: "left" },
            mb: { xs: 4, sm: 2, md: 0 },
          }}
        >
          प्रायोजक
        </Typography>

        <Grid
          container
          columnSpacing={{ xs: 2, sm: 3, md: 5, lg: 10 }}
          rowSpacing={{ xs: 2, sm: 3, md: 4 }}
          justifyContent="space-around"
          alignItems="center"
          sx={{
            flex: 1,
            width: "100%",
          }}
        >
          {/* Each logo with custom width */}
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={iitilogo}
              alt="IITI"
              sx={{
                width: {
                  xs: "8.5rem",
                  sm: "9rem",
                  md: "9.25rem",
                  lg: "9.5rem",
                },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={croppediitjlogo}
              alt="IITJ"
              sx={{
                width: {
                  xs: "8.5rem",
                  sm: "9rem",
                  md: "9.25rem",
                  lg: "9.5rem",
                },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={croppedcsirlogo}
              alt="CSIR"
              sx={{
                width: {
                  xs: "6.5rem",
                  sm: "7rem",
                  md: "7.25rem",
                  lg: "7.5rem",
                },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            display="flex"
            justifyContent="center"
          >
            <Box
              component="img"
              src={nisprlogo}
              alt="NISPR"
              sx={{
                width: {
                  xs: "13rem",
                  sm: "13.5rem",
                  md: "14rem",
                  lg: "14.6rem",
                },
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Organizers;
