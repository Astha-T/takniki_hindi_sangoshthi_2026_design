import React from "react";
import { Box, Typography, Divider, Button, useTheme } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sangoshthi_ke_niyam from "../Assets/Files/sangoshthi_ke_niyam.pdf";

const Description = () => {
  const theme = useTheme();

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 5, lg: 10 } }}>
      <Box sx={{ my: { xs: 5, md: 10 } }}>
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          संगोष्ठी का विवरण
        </Typography>

        {/* Divider */}
        <Divider
          sx={{
            my: 1,
            borderColor: "#F9DAD0",
            borderWidth: 1.5,
            mx: "auto",
          }}
        />

        {/* Description text */}
        <Typography
          variant="h6"
          sx={{
            textAlign: "justify",
            color: "#000",
            columnCount: { xs: 1, md: 2 },
            columnGap: { md: "3rem" },
            lineHeight: 1.8,
            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
            mt: { xs: 3, md: 6 },
          }}
        >
          वर्ष 2023 में भारतीय प्रौद्योगिकी संस्थान जोधपुर के तत्वावधान में
          प्रथम तकनीकी हिंदी संगोष्ठी का सफल आयोजन किया गया। इसके उपरांत, वर्ष
          2024 में भारतीय प्रौद्योगिकी संस्थान जोधपुर एवं भारतीय प्रौद्योगिकी
          संस्थान इंदौर द्वारा संयुक्त रूप से द्वितीय तकनीकी हिंदी संगोष्ठी का
          आयोजन भारतीय प्रौद्योगिकी संस्थान जोधपुर में संपन्न हुआ। इसी श्रंखला
          को आगे बढ़ाते हुए तथा हिंदी के उन्नयन और विकास की दिशा में एक और
          महत्वपूर्ण कदम के रूप में,{" "}
          <strong>तृतीय तकनीकी हिंदी संगोष्ठी</strong> का आयोजन{" "}
          <strong>
            भारतीय प्रौद्योगिकी संस्थान इंदौर, भारतीय प्रौद्योगिकी संस्थान
            जोधपुर
          </strong>{" "}
          एवं
          <strong>
            {" "}
            सीएसआईआर- राष्ट्रीय विज्ञान संचार एवं नीति अनुसंधान संस्थान
            (एनआईएससीपीआर), नई दिल्ली
          </strong>{" "}
          के संयुक्त तत्वावधान में किया जा रहा हैं। जैसा कि सर्वविदित है, ये
          तीनों संस्थान देश के प्रमुख तकनीकी एवं अनुसंधान संस्थानों में से हैं,
          जो विज्ञान एवं प्रौद्योगिकी के क्षेत्र में निरंतर प्रगति और नवाचार के
          माध्यम से राष्ट्र निर्माण में योगदान दे रहे हैं। ऐसे में, हमारा यह
          दायित्व है कि हम तकनीकी विषयों को सरल, सुगम और प्रभावी हिन्दी के
          माध्यम से जनसामान्य तक पहुँचाएँ। इसी भावना के अनुरूप, इस संगोष्ठी का
          मुख्य उद्देश्य तकनीकी संकल्पनाओं एवं विचारों के हिन्दी में प्रसार,
          तकनीकी हिन्दी के प्रोत्साहन एवं उपयोगिता को बढ़ावा देना है।
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#8DAA91",
          display: { xs: "block", sm: "block", md: "flex" },
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "30px",
          my: { xs: 5, md: 10 },
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "100%", md: "60%", lg: "70%" },
            px: { xs: 2, sm: 3, md: 5, lg: 10 },
          }}
        >
          <Typography
            sx={{
              color: "white",
              lineHeight: 1.5,
              justifyContent: "center",
              textAlign: "justify",

              py: { xs: 2, sm: 2, md: 3, lg: 4 },
              fontSize: {
                xs: "1.5rem",
                sm: "1.5rem",
                md: "1.75rem",
                lg: "2rem",
              },
              fontWeight: "bold",
            }}
          >
            संगोष्ठी में भाग लेने के इच्छुक प्रतिभागी कृपया निम्नदर्शित पंजीकरण
            फ़ॉर्म के माध्यम से आलेख अपलोड की समय सीमा के अंतर्गत अपना आलेख
            भेजें 
          </Typography>
        </Box>
        <Box sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "30%" } }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              py: { xs: 0, md: 5 },
            }}
          >
            <Button
              variant="contained"
              endIcon={
                <ArrowForwardIcon
                  sx={{
                    borderRadius: "50%",
                    color: "#522B29",
                    background: "#F9DAD0",
                    p: 1,
                    ml: 7,
                    height: {
                      xs: "2rem",
                      sm: "2.2rem",
                      md: "2.5rem",
                      lg: "3rem",
                    },
                    width: {
                      xs: "2rem",
                      sm: "2.2rem",
                      md: "2.5rem",
                      lg: "3rem",
                    },
                  }}
                />
              }
              sx={{
                color: "#F9DAD0",
                backgroundColor: "#522B29",
                width: "fit-content",
                height: "fit-content",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                fontWeight: "bolder",
                borderRadius: "80px",
                px: { xs: 2, sm: 3, md: 4, lg: 7 },
                py: 2,
                mb: { xs: 3, sm: 4, md: 0, lg: 0 },
                textAlign: "center",
                "&:hover": {
                  background: "#8b5e5c",
                },
              }}
              onClick={() =>
                window.open("https://forms.gle/xAS7e4wLckwnWhTe9", "_blank")
              }
            >
              पंजीकरण फ़ॉर्म
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          my: { xs: 5, md: 10 },
          display: { xs: "block", sm: "flex" },
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%", lg: "30%" },
            py: { xs: 0, sm: 2, md: 3 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.primary.main,
              fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
              fontWeight: 700,
              textAlign: "left",
            }}
          >
            आपकी सहायता के लिए:
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            width: { xs: "100%", sm: "50%", md: "60%", lg: "70%" },
            justifyContent: { md: "flex-start" },
            gap: { xs: 2, md: 4, lg: 6 },
            mt: { xs: 3, md: 0 },
          }}
        >
          <Button
            variant="contained"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  borderRadius: "50%",
                  color: "#fff",
                  background: "#522B29",
                  p: 1,
                  ml: { xs: 2, sm: 3, md: 5, lg: 7 },
                  height: {
                    xs: "2rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                  width: {
                    xs: "2rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                }}
              />
            }
            sx={{
              color: "#000",
              backgroundColor: "#F9DAD0",
              width: { xs: "100%", sm: "100%", md: "fit-content" },
              fontSize: {
                xs: "1.2rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
              fontWeight: 400,
              borderRadius: "80px",
              px: { xs: 2, sm: 3, md: 3, lg: 7 },
              py: 2,
              textAlign: "left",
              "&:hover": {
                backgroundColor: "#f0c5b8",
              },
            }}
            onClick={() => {
              window.open(sangoshthi_ke_niyam, "_blank");
            }}
          >
            संगोष्ठी के नियम
          </Button>

          <Button
            variant="contained"
            endIcon={
              <ArrowForwardIcon
                sx={{
                  borderRadius: "50%",
                  color: "#fff",
                  background: "#522B29",
                  p: 1,
                  ml: { xs: 2, sm: 3, md: 5, lg: 7 },
                  height: {
                    xs: "2rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                  width: {
                    xs: "2rem",
                    sm: "2.2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                }}
              />
            }
            sx={{
              color: "#000",
              backgroundColor: "#F9DAD0",
              width: { xs: "100%", sm: "100%", md: "fit-content" },
              fontSize: {
                xs: "1.2rem",
                sm: "1.3rem",
                md: "1.4rem",
                lg: "1.5rem",
              },
              fontWeight: 400,
              borderRadius: "80px",
              px: { xs: 2, sm: 3, md: 3, lg: 7 },
              py: 2,
              textAlign: "left",
              "&:hover": {
                backgroundColor: "#f0c5b8",
              },
            }}
          >
            आलेख प्रारूप
          </Button>
        </Box>
      </Box>

      <Box>
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          मुख्य तिथियाँ
        </Typography>

        {/* Divider */}
        <Divider
          sx={{
            mt: 1,
            mb: 2,
            borderColor: "#F9DAD0",
            borderWidth: 1.5,
            mx: "auto",
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            fontWeight: 400,

            pt: 3,
          }}
        >
          तकनीकी हिन्दी संगोष्ठी 2026 से संबंधित मुख्य तिथियां :
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            fontWeight: 400,
            lineHeight: 1.5,
            pt: 3,
            "& ul": {
              paddingLeft: 5,
              margin: 0,
            },
            "& li": {
              fontSize: "inherit",
              fontWeight: "inherit",
              lineHeight: "inherit",
              marginBottom: "0.5rem",
            },
          }}
        >
          <ul>
            <li>
              आलेख अपलोड करने की समय सीमा - <strong>30 नवंबर 2025</strong>
            </li>
            <li>
              प्रतिभागियों को आलेख चयन संबंधित सूचना -{" "}
              <strong>07 दिसंबर 2025</strong>
            </li>
          </ul>
        </Typography>
      </Box>

      <Box sx={{ my: { xs: 3, md: 7 } }}>
        {/* Heading */}
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          संगोष्ठी पंजीकरण शुल्क
        </Typography>

        {/* Divider */}
        <Divider
          sx={{
            mt: 1,
            mb: 2,
            borderColor: "#F9DAD0",
            borderWidth: 1.5,
            mx: "auto",
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "1.25rem", sm: "1.5rem", md: "1.75rem" },
            fontWeight: 400,
            lineHeight: 1.5,
            pt: 3,
            "& ul": {
              listStyle: "none",
              padding: 0,
              margin: 0,
            },
            "& li": {
              fontSize: "inherit",
              fontWeight: "inherit",
              lineHeight: "inherit",
              marginBottom: "0.5rem",
            },
          }}
        >
          <ul>
            <li>
              छात्र / प्रशिक्षु/ संकाय सदस्य / वैज्ञानिक / अभियंता{" "}
              <strong>-रू.750</strong>
            </li>
            <li>
              महिला प्रतिभागी -<strong>रू.500</strong>
            </li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default Description;
