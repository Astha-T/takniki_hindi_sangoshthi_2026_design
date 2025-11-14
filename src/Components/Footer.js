import React from "react";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import iitilogowhite from "../Assets/Images/iitilogowhite.png";

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "block", md: "flex" },
        width: "100%",
        pl: { xs: 0, sm: 3, md: 5, lg: 10 },
        py: { xs: 3, sm: 6, md: 7, lg: 10 },
        background: theme.palette.primary.main,
        flexWrap: "wrap",
        textAlign: { xs: "left", sm: "left" },
      }}
    >
      {/* Row 1 for SM: Logo + Map */}
      <Box
        sx={{
          display: { xs: "block", sm: "flex" },
          width: { xs: "100%", md: "50%" },
          alignItems: { xs: "center", sm: "flex-start" },
          justifyContent: {
            xs: "center",
            sm: "space-around",
            md: "space-between",
          },
          gap: 3,
          mb: { xs: 4, sm: 4, md: 0 },
        }}
      >
        {/* Logo */}
        <Box
          component="img"
          src={iitilogowhite}
          alt="IITI"
          sx={{
            width: { xs: "7.5rem", sm: "8rem", md: "8.5rem", lg: "8.9rem" },
            height: { xs: "7.5rem", sm: "8rem", md: "9rem", lg: "9rem" },
            mx: { xs: "auto", sm: 2, md: 4 },
            display: "block",
          }}
        />

        {/* Map */}
        <Box
          sx={{
            borderRadius: "10px",
            mt: { xs: 2, sm: 0 },
            px: { xs: 2, sm: 0, md: 4 },
            mx: { xs: 0, sm: 2, md: 0 },
            display: "flex",
            alignItems: "stretch",
            justifyContent: "center",
          }}
        >
          <iframe
            title="IIT Indore Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.431820085944!2d75.91883597496053!3d22.520368279526254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd43a57e0e0f%3A0x65a8d99bcb8a3d0f!2sIndian%20Institute%20of%20Technology%20Indore!5e0!3m2!1sen!2sin!4v1731501000000!5m2!1sen!2sin"
            style={{
              width: "23rem",
              borderRadius: "0.5rem",
              height: "12rem",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Box>

      {/* Row 2 for SM: Address + Contact */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          mt: { xs: 0, md: 1 },
          width: { xs: "100%", sm: "100%", md: "50%" },
          justifyContent: { xs: "center", sm: "flex-start" }, // ⬅️ NEW: XS center whole block
        }}
      >
        {/* Address */}
        <Box
          sx={{
            mr: { sm: 3, md: 0 },
            flex: 1,
            minWidth: "250px",
            mx: { xs: "auto", sm: 0 }, // ⬅️ XS center block
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "1rem", md: "1.25rem" },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <strong> कैसे पहुँचे</strong>
          </Typography>

          <Divider sx={{ my: 1, borderColor: "#F9DAD0" }} />

          <Typography
            sx={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 400,
              my: 1,
              pr: 2,
              textAlign: { xs: "center", sm: "left" },
              lineHeight: 1.5,
            }}
          >
            <strong>भारतीय प्रौद्योगिकी संस्थान इंदौर</strong> <br />
            सिमरोल, खंडवा रोड, इंदौर, मध्य प्रदेश, भारत - 453552
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: 400,
              my: { xs: 2, sm: 1, md: 1.5 },
              pr: 2,
              textAlign: { xs: "center", sm: "left" },
              lineHeight: 1.5,
            }}
          >
            <strong>Indian Institute of Technology Indore</strong> <br />
            Simrol, Khandwa Road, Indore, Madhya Pradesh India - 453552
          </Typography>
        </Box>

        {/* Contact */}
        <Box
          sx={{
            flex: 1,
            minWidth: "250px",
            mt: { xs: 2, sm: 0 },
            mx: { xs: "auto", sm: 0 }, // ⬅️ XS center block
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "1rem", md: "1.25rem" },
              pl: { xs: 0, sm: 4, md: 2 },
              mt: { xs: 2, sm: 0 },
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <strong>संपर्क</strong>
          </Typography>

          <Divider sx={{ my: 1, borderColor: "#F9DAD0" }} />

          <Box
            sx={{
              display: { xs: "flex", sm: "block" },
              justifyContent: { xs: "space-around", sm: "flex-start" },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 400,
                my: 1,
                pl: { xs: 0, sm: 4, md: 2 },
              }}
            >
              <strong>ईमेल </strong> <br />
              ths2026@iiti.ac.in
            </Typography>

            <Typography
              sx={{
                color: "#fff",
                fontSize: "1rem",
                fontWeight: 400,
                my: 1,
                pl: { xs: 0, sm: 4, md: 2 },
              }}
            >
              <strong>फ़ोन नंबर </strong> <br />
              0731-660-3481
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
