import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CentralizedBox from "./CentralizedBox";

const Registration = () => {
  const theme = useTheme();
  return (
    <Box>
      <CentralizedBox>
        <Typography
          variant="h3"
          color="#5F695C"
          sx={{ mt: 10, fontWeight: "bold" }}
        >
          पंजीकरण
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
      <Box
        sx={{
          backgroundColor: "#5F695C",
          mt: 5,
          pb: 3,
          px: { xs: 2, sm: 3, md: 5 },
        }}
      >
        <Typography
          variant="h5"
          sx={{ color: "#fff", textAlign: "center", py: 3 }}
        >
          प्रत्येक सत्र के अंतर्गत प्रतिभागियों को कुल पाँच पुरस्कार
        </Typography>

        {[
          {
            title: (
              <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                प्रथम पुरस्कार
              </Typography>
            ),
            prize: "5000 रुपए",
          },
          {
            title: (
              <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                द्वितीय पुरस्कार
              </Typography>
            ),
            prize: "3500 रुपए",
          },
          {
            title: (
              <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                तृतीय पुरस्कार
              </Typography>
            ),
            prize: "2000 रुपए",
          },
          {
            title: (
              <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
                प्रोत्साहन पुरस्कार <br /> (प्रति सत्र 2)
              </Typography>
            ),
            prize: "1000 रुपए",
          },
        ].map((item, i) => (
          <Box
            key={i}
            sx={{
              width: "100%",
              my: 2,
              display: "flex", // ✅ keep flex
              flexDirection: { xs: "column", sm: "column", md: "row" }, // stack on small screens
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Creme Box */}
            <Box
              sx={{
                backgroundColor: "#F9DAD0",
                width: "22rem",
                py: 2,
                textAlign: "center",
                fontWeight: "bolder",
                borderRadius: "80px",
                whiteSpace: "nowrap",
                zIndex: 1,
              }}
            >
              {item.title}
            </Box>

            {/* Brown Box (slightly overlapping) */}
            <Box
              sx={{
                backgroundColor: "#522B29",
                width: "14rem",
                py: 2,
                fontSize: "36px",
                color: "#fff",
                textAlign: "center",
                fontWeight: "bolder",
                borderRadius: "80px",
                position: "relative",
                left: "-3%", // overlap amount
                zIndex: 2,
              }}
            >
              {item.prize}
            </Box>
          </Box>
        ))}
      </Box>
      <CentralizedBox>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bolder",
            textAlign: "left",
            my: 4,
          }}
        >
          मुख्य बिंदु
        </Typography>
        <Divider
          sx={{
            my: 2,
            borderColor: "#F9DAD0",
            borderWidth: 2,
            width: "100%",
            mx: "auto",
          }}
        />
        <Typography
          sx={{
            textAlign: "left",
            my: 4,
            px: 4,
            lineHeight: 1.25,
            fontSize: "1.5rem",
          }}
        >
          तकनीकी हिन्दी संगोष्ठी 2024 से संबंधित मुख्य तिथियां-
          <ul style={{ paddingLeft: 4.5 }}>
            <li>
              आलेख अपलोड करने की समय सीमा - 31 अक्टूबर 2024    10 नवंबर 2024 तक
              (संशोधित दिनांक)
            </li>
            <li>
              प्रतिभागियों को आलेख चयन संबंधित सूचना - 07 नवंबर 2024 (संशोधित
              तिथि के पश्चात प्राप्त आलेखों का 15 नवंबर 2024 तक)
            </li>
            <li>
              चयनित आलेखों के लिए पंजीकरण शुल्क जमा करने की अंतिम तिथि -  15
              नवंबर 2024
            </li>
          </ul>
        </Typography>
      </CentralizedBox>

      <CentralizedBox sx={{ my: 4 }}>
        <Box
          sx={{
            backgroundColor: "#8DAA91",
            display: { xs: "block", sm: "block", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "30px",
          }}
        >
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "60%", lg: "70%" } }}>
            <Typography
              sx={{
                color: "white",
                lineHeight: { xs: 1, sm: 1.25, md: 1.5, lg: 1.5 },
                px: { xs: 2, sm: 3, md: 5 },
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
              संगोष्ठी में भाग लेने के इच्छुक प्रतिभागी कृपया निम्नदर्शित
              पंजीकरण फ़ॉर्म के माध्यम से आलेख अपलोड की समय सीमा के अंतर्गत अपना
              आलेख भेजें 
            </Typography>
          </Box>
          <Box sx={{ width: { xs: "100%", sm: "100%", md: "40%", lg: "30%" } }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: { xs: 0, md: 5 },
                py: 2,
              }}
            >
              <Button
                variant="contained"
                endIcon={
                  <ArrowForwardIcon
                    sx={{
                      borderRadius: "50%",
                      color: "#F9DAD0",
                      background: "#522B29",
                      p: 1,
                      ml: 2,
                      height: {
                        xs: "2rem",
                        sm: "2.2rem",
                        md: "2.5rem",
                        lg: "2.75rem",
                      },
                      width: {
                        xs: "2rem",
                        sm: "2.2rem",
                        md: "2.5rem",
                        lg: "2.75rem",
                      },
                    }}
                  />
                }
                sx={{
                  color: "#522B29",
                  backgroundColor: "#F9DAD0",
                  width: "fit-content",
                  height: "fit-content",
                  fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
                  fontWeight: "bolder",
                  borderRadius: "80px",
                  // p: { xs: 2, sm: 3, md: 4 },
                  textAlign: "center",
                  "&:hover": {
                    backgroundColor: "#f0c5b8",
                  },
                }}
              >
                पंजीकरण फ़ॉर्म
              </Button>
            </Box>
          </Box>
        </Box>
      </CentralizedBox>
      <CentralizedBox sx={{ pb: 3 }}>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bolder",
            textAlign: "left",
            my: 4,
          }}
        >
          संगोष्ठी पंजीकरण शुल्क
        </Typography>
        <Divider
          sx={{
            my: 2,
            borderColor: "#F9DAD0",
            borderWidth: 2,
            width: "100%",
            mx: "auto",
          }}
        />
        <Typography
          sx={{
            textAlign: "left",
            my: 4,
            lineHeight: 1.25,
            fontSize: "1.5rem",
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          छात्र / प्रशिक्षु - <b>रू. 250</b>
          <br />
          संस्थानों के स्टाफ सदस्य - <b>रू. 500</b>
          <br />
          संकाय सदस्य / वैज्ञानिक / अभियंता - <b>रू. 1000</b>
          <br />
        </Typography>
      </CentralizedBox>

      <CentralizedBox>
        <Typography
          variant="h5"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: "bolder",
            textAlign: "left",
            my: 4,
          }}
        >
          चयनित आलेखों के प्रतिभागियों हेतु दिशानिर्देश
        </Typography>
        <Divider
          sx={{
            my: 2,
            borderColor: "#F9DAD0",
            borderWidth: 2,
            width: "100%",
            mx: "auto",
          }}
        />
        <Typography
          sx={{
            fontWeight: "bolder",
            py: { xs: 1.5, sm: 0.5, md: 0.75 },
            fontSize: {
              xs: "1.25rem",
              sm: "1.25rem",
              md: "1.25rem",
              lg: "1.5rem",
            },
            px: { xs: 2, sm: 3, md: 4 },
            lineHeight: { xs: "1.75rem", sm: "1.75rem", md: "1.5rem" },
          }}
        >
          I. भारतीय प्रौद्योगिकी संस्थान के छात्रों और कार्मिकों के चयनित आलेखों
          के लिए
        </Typography>
        <Typography
          sx={{
            py: { xs: 1.5, sm: 0.5, md: 0.75 },
            fontSize: {
              xs: "1.25rem",
              sm: "1.25rem",
              md: "1.25rem",
              lg: "1.5rem",
            },
            px: { xs: 2, sm: 3, md: 4 },
            mt: { xs: 1, sm: 1.5, md: 2 },
            lineHeight: { xs: "1.75rem", sm: "1.75rem", md: "1.5rem" },
          }}
        >
          <ol style={{ paddingLeft: { xs: 2, sm: 3, md: 4 } }}>
            <li>
              यदि आपका आलेख अंतरिम के रूप में चुन लिया गया है, जिसकी सूचना आपको
              ईमेल द्वारा प्रदान कर दी गई है तो आपसे अनुरोध है कि आप 
              लिंक https:// . form.qfixonline.com/iitjths से पंजीकरण शुल्क का
              भुगतान करें ।
            </li>
            <li>
              प्रतिभागियों के लिए संगोष्ठी के दिन जलपान, दोपहर भोजन, रात्रि भोजन
              की व्यवस्था संगोष्ठी आयोजन समिति द्वारा की जायेगी ।
            </li>
            <li>
              प्रतिभागी को संगोष्ठी में अपना प्रस्तुतिकरण पीपीटी द्वारा देना
              होगा, अत: आपसे निवेदन है कि इमेल द्वारा प्रजेंटेशन भिजवा दें अथवा
              साथ लेकर आने का कष्ट करें ।
            </li>
          </ol>
        </Typography>
        <Typography
          sx={{
            fontWeight: "bolder",
            py: { xs: 1.5, sm: 0.5, md: 0.75 },
            fontSize: {
              xs: "1.25rem",
              sm: "1.25rem",
              md: "1.25rem",
              lg: "1.5rem",
            },
            px: { xs: 2, sm: 3, md: 4 },
            lineHeight: { xs: "1.75rem", sm: "1.75rem", md: "1.5rem" },
          }}
        >
          II. अन्य संस्थानों के छात्रों एवं कार्मिकों के चयनित आलेखों के लिए
        </Typography>
        <Typography
          sx={{
            py: { xs: 1.5, sm: 0.5, md: 0.75 },
            fontSize: {
              xs: "1.25rem",
              sm: "1.25rem",
              md: "1.25rem",
              lg: "1.5rem",
            },
            px: { xs: 2, sm: 3, md: 4 },
            mt: { xs: 1, sm: 1.5, md: 2 },
            lineHeight: { xs: "1.75rem", sm: "1.75rem", md: "1.5rem" },
          }}
        >
          <ol style={{ paddingLeft: { xs: 2, sm: 3, md: 4 } }}>
            <li>
              प्रतिभागियों को अपने आवागमन हेतु रेल/बस/हवाई जहाज के किराये की
              व्यवस्था स्वयं करनी होगी । संस्थान एवं आयोजन समिति द्वारा संस्थान
              से कोई प्रतिपूर्ति नहीं दी जाएगी । स्टेशन एवं हवाई अड्डे से
              संस्थान परिसर तक प्रतिभागी को स्वयं भुगतान करके टैक्सी या रिक्शा
              से आवागमन करना होगा ।
            </li>
            <li>
              यदि आपका आलेख अंतरिम के रूप में चुन लिया गया है, जिसकी सूचना आपको
              ईमेल द्वारा प्रदान कर दी गई है तो आपसे अनुरोध है कि आप 
              लिंकhttps://form.qfixonline.com/iitjths  से पंजीकरण शुल्क का
              भुगतान करें ।
            </li>
            <li>
              आवास व्यवस्था - संस्थान द्वारा प्रतिभागियों के लिए संगोष्ठी आयोजन
              तिथि की रात्रि में ठहरने की व्यवस्था संस्थान के छात्रावास में
              साझाकरण आवास (sharing basis) के आधार पर की जायेगी।
            </li>
            <li>
              प्रतिभागियों के लिए संगोष्ठी के दिन जलपान, दोपहर भोजन, रात्रि भोजन
              की व्यवस्था संगोष्ठी आयोजन समिति द्वारा की जायेगी । 
            </li>
            <li>
              प्रतिभागी को संगोष्ठी में अपना प्रस्तुतिकरण पीपीटी द्वारा देना
              होगा, अत: आपसे निवेदन है कि इमेल द्वारा प्रजेंटेशन भिजवा दें अथवा
              साथ लेकर आने का कष्ट करें ।
            </li>
            <li>
              आपके आवागमन संबंधित विवरण की जानकारी संलग्न गूगल फॉर्म द्वारा
              भिजवाने का कष्ट करें –https://forms.gle/ZZudBgxxh1ChnTrKA{" "}
            </li>
            <li>
              यदि कोई प्रतिभागी इसके आतिरिक्त अन्य दिवस पर आवास सुविधा चाहता है
              तो कक्ष की उपलब्धता के आधार पर कमरा बुक किया जायेगा जिसका भोजन
              सहित शुल्क प्रतिभागी द्वारा देय होगा ।
            </li>
            <li>
              प्रतिभागी निम्नलिखित खाते में भुगतान कर सकता है:
              <Box
                sx={{ display: "flex", flexDirection: "column", mt: 1, ml: 2 }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.25rem",
                      md: "1.25rem",
                      lg: "1.5rem",
                    },
                  }}
                >
                  <b>खाता संख्या -</b> 38448045180
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.25rem",
                      md: "1.25rem",
                      lg: "1.5rem",
                    },
                  }}
                >
                  <b>नाम -</b> IIT Jodhpur Hostel Receipts and Fine Accounts
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.25rem",
                      md: "1.25rem",
                      lg: "1.5rem",
                    },
                  }}
                >
                  <b>बैंक -</b> SBI IIT Jodhpur
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.25rem",
                      md: "1.25rem",
                      lg: "1.5rem",
                    },
                  }}
                >
                  <b>IFSC Code -</b> SBIN0014892
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.25rem",
                      sm: "1.25rem",
                      md: "1.25rem",
                      lg: "1.5rem",
                    },
                  }}
                >
                  <b>UPI ID -</b> 38448045180@sbi
                </Typography>
              </Box>
            </li>
          </ol>
        </Typography>
      </CentralizedBox>
      <CentralizedBox
        sx={{
          background: "#F9DAD0",
          mt: 5,
          pb: 3,
          mb: 0,
        }}
      >
        <Typography
          sx={{
            fontWeight: "bolder",
            fontSize: "2rem",
            pt: 3,
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
          }}
        >
          नोट
        </Typography>
        <Divider
          sx={{
            my: 2,
            borderColor: "#fff",
            borderWidth: 2,
            width: "100%",
            mx: "auto",
          }}
        />
        <Box sx={{ px: { xs: 5, sm: 7, md: 7, lg: 10 } }}>
          <Typography
            sx={{
              py: 3,
              fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            }}
          >
            <ol>
              <li>
                दर्शक अथवा श्रोता के रूप में भाग लेने वाले प्रतिभागियों के लिए
                भी पंजीकरण शुल्क भुगतान करना अनिवार्य है जिसकी सीमित सीटें हैं ।
              </li>
              <li>
                । दर्शकों के रूप में वे प्रतिभागी भी भाग ले सकते हैं जिनके
                संस्थान के अन्य छात्रों, संकाय सदस्यों, कार्मिकों इत्यादि ने
                अपना आलेख प्रस्तुत किया है अथवा वे सह-लेखक के रूप में भाग ले रहे
                हैं।
              </li>
              <li>
                छात्रावास में आवास उपलब्धता के आधार पर दिया जाएगा जिसका शुल्क
                पंजीकरण के अतिरिक्त अदा करना होगा ।
              </li>
              <li>
                कृपया पंजीकरण शुल्क भरने से पहले सीटों की उपलब्धता संबंधित
                जानकारी के लिए ths2024@iitj.ac.in  पर अपने संस्थान/कार्यालय के
                विवरण एव पहचान पत्र के साथ संपर्क करें।
              </li>
              <li>
                ईमेल द्वारा पुष्टि के पश्चात ही शुल्क का भुगतान करें एवं इसी
                इमेल पर पावती भिजवायें ।
              </li>
            </ol>
          </Typography>
        </Box>
      </CentralizedBox>
    </Box>
  );
};

export default Registration;
