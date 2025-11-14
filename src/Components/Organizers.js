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
      <Box
        sx={{
          mt: { xs: 5, md: 10 },
          textAlign: { xs: "center", sm: "left" },
          display: "flex",
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "33%" },
            px: { xs: 0, sm: 2, md: 4 },
            py: { xs: 2, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            संरक्षक
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 500,
              lineHeight: 1.5,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>आचार्य सुहास जोशी, निदेशक, भा.प्रौ.सं. इंदौर</li>
              <li>आचार्य अविनाश कुमार अग्रवाल, निदेशक, भा.प्रौ.सं. जोधपुर</li>
              <li>डाॅ. गीता वाणी रायसम, निदेशक, सीएसआईआर-निस्पर, नई दिल्ली</li>
            </ul>
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "33%" },
            px: { xs: 0, sm: 2, md: 4 },
            py: { xs: 2, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            सलाहकार समिति
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 500,
              lineHeight: 1.5,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>आचार्य राजेश कुमार, भा.प्रौ.सं.इंदौर</li>
              <li>आचार्य नीरज कुमार शुक्ला, भा.प्रौ.सं. इंदौर</li>
              <li>आचार्य शरद गुप्ता, भा.प्रौ.सं. इंदौर</li>
              <li>श्री एस. पी. होता, भा.प्रौ.सं. इंदौर</li>
              <li>डाॅ. मनीष मोहन गोरे, निस्पर, नई दिल्ली</li>
              <li>डाॅ. अभिषेक यादव, भा.प्रौ.सं. इंदौर</li>
              <li>श्री राजीव पाण्डेय, भा.प्रौ.सं. इंदौर</li>
              <li>श्री गुरपरसाद बग्गा, निस्पर, नई दिल्ली</li>
              <li>श्री पवन कुमार, निस्पर, नई दिल्ली</li>
              <li>श्री अनिरुद्ध तिवारी, निस्पर, नई दिल्ली</li>
            </ul>
          </Typography>
        </Box>

        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "33%" },
            px: { xs: 0, sm: 2, md: 4 },
            py: { xs: 2, md: 0 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "100%",
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 700,
              mb: 2,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            आयोजक समिति
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 500,
              lineHeight: 1.5,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>श्री राजेश कुमार, भा.प्रौ.सं.इंदौर</li>
              <li>डाॅ. पल्लवी रानी, भा.प्रौ.सं. इंदौर</li>
              <li>डाॅ. आशीष उपाध्याय, भा.प्रौ.सं. इंदौर</li>
              <li>श्री नीरज कुमार सोनी, भा.प्रौ.सं. इंदौर</li>
              <li>सुश्री पूजा तिवारी, भा.प्रौ.सं. इंदौर</li>
              <li>सुश्री मिताली दवे, भा.प्रौ.सं. इंदौर</li>
              <li>श्री अनिल कुमार, निस्पर, नई दिल्ली</li>
              <li>श्री शिशिर कुमार, भा.प्रौ.सं. इंदौर</li>
            </ul>
          </Typography>
        </Box>
      </Box>

      <Divider
        sx={{
          my: { xs: 0, sm: 4 },
          borderColor: { xs: "#fff", sm: "#F9DAD0" },
          borderWidth: 1.5,
          mx: "auto",
        }}
      />

      <Box
        sx={{
          mt: { xs: 5, md: 10 },
          display: { xs: "block", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* आयोजक Section */}
        <Box
          sx={{
            width: { xs: "100%", sm: "30%" },
            borderRight: { xs: "none", sm: "2px solid #F9DAD0" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            आयोजक
          </Typography>

          <Box
            component="img"
            src={iitilogo}
            alt="IITI"
            sx={{
              width: { xs: "8.5rem", sm: "9rem", md: "9.25rem", lg: "9.5rem" },
              height: "auto",
              objectFit: "contain",
            }}
          />
        </Box>

        {/* सह-आयोजक Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "70%" },
            mx: { xs: 0, sm: 5 },
            my: { xs: 5, sm: 0 },
            alignItems: { xs: "center", sm: "flex-start" }, // align tops for sm+
            justifyContent: { xs: "center", sm: "space-around" }, // align tops for sm+
            textAlign: "left",
            gap: { xs: 3, sm: 1 },
          }}
        >
          {/* सह-आयोजक title + first logo */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "space-between",
              mt: { xs: 2, sm: 0 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                color: theme.palette.primary.main,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                fontWeight: 700,
                mb: 2,
              }}
            >
              सह-आयोजक
            </Typography>

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
          </Box>

          {/* Second logo (aligned to top of first logo for sm+) */}
          <Box
            sx={{
              display: "flex",
              alignItems: { xs: "center", sm: "flex-start" },
              justifyContent: "center",
            }}
          >
            <Box
              component="img"
              src={CombinedImage}
              alt="CombinedImage"
              sx={{
                width: {
                  xs: "6.5rem",
                  sm: "7rem",
                  md: "7.25rem",
                  lg: "7.5rem",
                },
                height: "auto",
                objectFit: "contain",
                mt: { xs: 0, sm: "2.25rem" }, // adjust so top edges align visually with first logo
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          my: { xs: 0, sm: 4 },
          borderColor: { xs: "#fff", sm: "#F9DAD0" },
          borderWidth: 1.5,
          mx: "auto",
        }}
      />

      <Box
        sx={{
          my: 5,
          display: { xs: "block", md: "flex" },
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
          justifyContent={{ xs: "center", sm: "space-around" }}
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
              src={CombinedImage}
              alt="CombinedImage"
              sx={{
                width: {
                  xs: "6.5rem",
                  sm: "7rem",
                  md: "7.25rem",
                  lg: "7.5rem",
                },
                height: "auto",
                objectFit: "contain",
                mt: { xs: 0, sm: "2.25rem" },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Organizers;
