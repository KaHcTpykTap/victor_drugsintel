import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { pages } from '../../utils/constants';
import logo from '../../../images/drugs_logo.png'
import { useNavigate } from 'react-router-dom';
import { AuthStatus } from '../../auth/auth';
import './menuBar.css';



const MenuBar = () => {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page) => {
    navigate(page !== 'home' ? page : '/');
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" style={{ backgroundColor: '#353a46', height: '9vh', justifyContent: 'center' }}>
      <Container style={{ maxWidth: 'min(100% - 2rem, 1440px)' }}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 1, display: { xs: 'none', xl: 'flex' } }}
          >
            <img src={logo} className='mb-logo' alt='logo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)} >
                  <Typography textAlign="center" >{page.toUpperCase()}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}
          >
            <img src={logo} className='mb-logo' alt='logo' />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
            {pages.map((page) => (
              page !== 'home' ? <Button
                key={page}
                onClick={() => { navigate(page) }}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 1 }}
              >
                {page}
              </Button>
                :
                <Button
                  key={page}
                  onClick={() => { navigate('/') }}
                  sx={{ my: 2, color: 'white', display: 'block', marginLeft: 1 }}
                >
                  {page}
                </Button>
            ))}
          </Box>
          <AuthStatus />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MenuBar



