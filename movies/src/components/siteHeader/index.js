import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'


const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const SiteHeader = () => {
  const [, setAnchorEl] = useState(null);
  const [subMenuAnchor, setSubMenuAnchor] = useState(null)
  const navigate = useNavigate();

  const menuOptions = [
    { label: "Home", path: "/" },
    { label: "Favorites", path: "/movies/favorites" },
    { label: "upcoming", path: "/movies/upcoming" },
    { label: "NowPlaying", path: "/movies/nowplaying" },
    { label: "popular", path: "/movies/popular" },
    {
      label: "Trending",
      submenu: [
        { label: "Day", path: "/trending/day" },
        { label: "This Week", path: "/trending/week" },
      ],
    },
  ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
    setAnchorEl(null);
    setSubMenuAnchor(null)
  };
  
  const handleSubMenuOpen = (event) =>{
    setSubMenuAnchor(event.currentTarget)
  }

  const handleSubMenuClose = (event) =>{
    setSubMenuAnchor(event.currentTarget)
  }

  return (
     <>
      <AppBar position="fixed" color="secondary">
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            All you ever wanted to know about Movies!
          </Typography>
          <div>
            {menuOptions.map((opt) =>
              opt.submenu ? (
                <div key={opt.label} style={{ display: "inline-block" }}>
                  <Button
                    color="inherit"
                    onClick={handleSubMenuOpen}
                    aria-haspopup="true"
                    endIcon={
                      subMenuAnchor ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )
                    }
                  >
                    {opt.label}
                  </Button>
                  <Menu
                    anchorEl={subMenuAnchor}
                    open={Boolean(subMenuAnchor)}
                    onClose={handleSubMenuClose}
                  >
                    {opt.submenu.map((subOpt) => (
                      <MenuItem
                        key={subOpt.label}
                        onClick={() => handleMenuSelect(subOpt.path)}
                      >
                        {subOpt.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              )
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;