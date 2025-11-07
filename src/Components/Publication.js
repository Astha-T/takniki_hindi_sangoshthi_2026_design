import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import table from "../Assets/images/table.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CentralizedBox from "./CentralizedBox";

const Publication = () => {
  const theme = useTheme();
  const buttonTitles = [
    "राजभाषा नियम",
    "1976 राजभाषा अधिनियम",
    "1963 सरल प्रशासकीय शब्दावली",
    "वार्षिक कार्यक्रम 2023-2024",
  ];

  return (
    <Box>
      {/* Header Section */}
      <CentralizedBox>
        <Typography
          variant="h3"
          color="#5F695C"
          sx={{ mt: 10, fontWeight: "bold" }}
        >
          हिंदी प्रकोष्ठ
        </Typography>

        <Divider
          sx={{
            my: 2,
            borderColor: "#F9DAD0",
            borderWidth: 2,
            mx: "auto",
          }}
        />
      </CentralizedBox>

      {/* Table Section */}
      <CentralizedBox sx={{ my: 5, width: "100%" }}>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bolder",
            textAlign: "left",
            mb: 2,
          }}
        >
          राजभाषा कार्यान्वयन समिति
        </Typography>

        {/* ✅ Responsive + Scrollable Table Wrapper */}
        <Box
          sx={{
            width: "100%",
            overflowX: { xs: "auto", sm: "visible" },
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box
            component="img"
            src={table}
            alt="table"
            sx={{
              borderRadius: 2,
              boxShadow: 2,
              width: {
                xs: "140%",
                sm: "90%",
                md: "80%",
                lg: "60%",
              },
              height: "auto",
            }}
          />
        </Box>
      </CentralizedBox>

      {/* Rules Section */}
      <CentralizedBox sx={{ my: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bolder",
            textAlign: "left",
            mb: 4,
            textDecoration: "underline",
          }}
        >
          राजभाषा नियमावली एवं शब्दावलियाँ
        </Typography>
      </CentralizedBox>

      {/* ✅ Responsive Button Grid */}
      <Box
        sx={{
          backgroundColor: "#F9DAD0",
          py: 4,
          display: "flex",
          justifyContent: "center", // ✅ centers Grid container horizontally
          alignItems: "center",
        }}
      >
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          {buttonTitles.map((title, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      borderRadius: "50%",
                      color: "#522B29",
                      backgroundColor: "#fff",
                      p: { xs: 0.5, sm: 0.8, md: 1 },
                      ml: { xs: 1, sm: 1.2, md: 1.5 },
                      fontSize: {
                        xs: "1.2rem",
                        sm: "1.5rem",
                        md: "1.5rem",
                        lg: "2rem",
                      }, // ✅ icon scales
                      height: "2rem",
                      width: "fit-content",
                    }}
                  />
                }
                sx={{
                  color: "#fff",
                  backgroundColor: "#522B29",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                  }, // ✅ text scales
                  fontWeight: "bold",
                  borderRadius: "80px",
                  py: 2,
                  textAlign: "center",
                  whiteSpace: "normal",
                  lineHeight: 1.4,
                  "&:hover": {
                    backgroundColor: "#3b1c1b",
                  },
                }}
              >
                {title}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Word Collection Section */}
      <CentralizedBox sx={{ mt: 7 }}>
        <Typography
          sx={{
            fontWeight: "bolder",
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "2rem",
            },
            textAlign: "left",
            mb: 4,
            lineHeight: 2,
          }}
        >
          वृहत पारिभाषिक शब्द संग्रह - अभियांत्रिकी (Engineering) - खंड XIV
          (A-E)
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "2rem",
            },
            fontWeight: "bolder",
            textAlign: "left",
            mb: 4,
            lineHeight: 2,
          }}
        >
          वृहत पारिभाषिक शब्द संग्रह - अभियांत्रिकी (Engineering) - खंड XV (F-Q)
        </Typography>
        <Typography
          sx={{
            fontSize: {
              xs: "1.5rem",
              sm: "1.5rem",
              md: "1.5rem",
              lg: "2rem",
            },
            fontWeight: "bolder",
            textAlign: "left",
            mb: 4,
            lineHeight: 2,
          }}
        >
          वृहत पारिभाषिक शब्द संग्रह - अभियांत्रिकी (Engineering) - खंड XIV
          (R-Z)
        </Typography>
      </CentralizedBox>
    </Box>
  );
};

export default Publication;
