import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import aboutImage from "../Assets/Images/aboutImg.png";

const About = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: { xs: "block", sm: "block", md: "flex" },
        width: "100%",
      }}
    >
      {/* Text Box */}
      <Box
        sx={{
          background: "#5F695C",
          width: { xs: "100%", md: "50%" }, // ✅ responsive width
          p: { xs: 3, sm: 4, md: 12 },
          display: "block",
        }}
      >
        <Typography
          variant="h5"
          color="#fff"
          sx={{
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            fontWeight: 700,
          }}
        >
          संस्थान के बारे में
        </Typography>
        <Typography
          color="#fff"
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem" },
            fontWeight: 400,
            textAlign: "justify",
            lineHeight: 1.75,
            pt: 5,
            letterSpacing: "0%",
          }}
        >
          {" "}
          <strong>भारतीय प्रौद्योगिकी संस्थान इंदौर</strong> की स्थापना वर्ष
          2009 में भारत सरकार द्वारा प्रौद्योगिकी, अनुसंधान और नवाचार को
          प्रोत्साहित करने के उद्देश्य से की गई थी। संस्थान का उद्देश्य
          वैज्ञानिक एवं तकनीकी शिक्षा में उत्कृष्टता प्राप्त करना और भारत के
          सामाजिक एवं आर्थिक विकास में योगदान देना है। शिक्षण, अनुसंधान और
          नवाचार भा.प्रौ.सं. इंदौरके तीन प्रमुख स्तंभ हैं, जो इसे एक अग्रणी
          प्रौद्योगिकी संस्थान के रूप में स्थापित करते हैं।
        </Typography>
        <Typography
          color="#fff"
          sx={{
            fontSize: { xs: "0.8rem", sm: "1rem", md: "1.25rem" },
            fontWeight: 400,
            textAlign: "justify",
            lineHeight: 1.75,
            pt: 5,
            letterSpacing: "0%",
          }}
        >
          {" "}
          संस्थान बहुविषयक अनुसंधान और शिक्षा पर विशेष बल देता है। यहाँ
          अत्याधुनिक प्रयोगशालाएँ, अनुसंधान केंद्र, और नवीनतम तकनीकों से
          सुसज्जित शैक्षणिक ढाँचा उपलब्ध है। भा.प्रौ.सं. इंदौर में शैक्षणिक
          कार्यक्रम विभागों के माध्यम से संचालित किए जाते हैं, जबकि अनुसंधान
          कार्य विभिन्न केंद्रों और प्रयोगशालाओं के माध्यम से किया जाता है।
        </Typography>
      </Box>

      {/* Image Box */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <Box
          component="img"
          src={aboutImage}
          alt="About"
          sx={{
            width: "100%",
            height: { xs: "auto", sm: "auto", md: "100%" },
            objectFit: { xs: "contain", sm: "contain", md: "cover" },
          }}
        />
      </Box>
    </Box>
  );
};

export default About;
