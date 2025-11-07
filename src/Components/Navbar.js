import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "मुख्य पृष्ठ", path: "/" },
    { label: "आमंत्रित वक्ता", path: "/speakers" },
    { label: "पंजीकरण", path: "/register" },
    { label: "आवेदन आमंत्रण", path: "/invitation" },
    { label: "संस्थान के बारे में", path: "/about" },
    { label: "हिंदी प्रकाश", path: "/publication" },
  ];

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.success.main,
          height: "6.5rem", // ↓ scaled down from 8.5rem
          width: { xs: "100%", md: "80%", sm: "60%", lg: "65%" },
          borderBottomLeftRadius: { xs: "6rem", md: "6rem" },
          boxShadow: "none",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: {
              xs: "space-between",
              lg: "center",
              md: "center",
            },
            alignItems: "center",
            height: "100%",
            px: 2,
            pt: 2,
            pb: 1,
            width: "100%",
          }}
        >
          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
              mt: 2,
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                color="inherit"
                sx={{
                  fontSize: { md: "1rem", lg: "1.25rem" },
                  color: location.pathname === item.path ? "#5F695C" : "#fff",
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              >
                {item.label}
              </Button>
            ))}
            <IconButton color="inherit">
              <SearchIcon sx={{ fontSize: 22, color: "#fff" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.success.main,
            color: "#fff",
            width: "65%",
            borderTopRightRadius: "2rem",
            borderBottomRightRadius: "2rem",
          },
        }}
      >
        <Box sx={{ height: "100%", pt: 2 }}>
          <List>
            {navItems.map((item) => (
              <ListItem
                button
                key={item.path}
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.15)",
                  },
                }}
              >
                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        fontSize: "1rem", // ↓ scaled
                        fontWeight:
                          location.pathname === item.path ? "bold" : "normal",
                      }}
                    >
                      {item.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
