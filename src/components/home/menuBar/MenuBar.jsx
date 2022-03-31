import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { login, pages } from '../../utils/constants';
import logo from '../../../images/drugs_logo.png'
import { useNavigate } from 'react-router-dom';
import { AuthStatus, useAuth } from '../../auth/auth';



const MenuBar = () => {

  let auth = useAuth();
  const [anchorElNav, setAnchorElNav] = useState(null);

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography>
          {/* <img src={logo} className='s-logo' alt='logo' /> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              page !== 'home' ? <Button
                key={page}
                onClick={() => {
                  /* handleCloseNavMenu(); */
                  navigate(page)
                }}
                sx={{ my: 2, color: 'white', display: 'block', marginLeft: 1 }}
              >
                {page}
              </Button>
                :
                <Button
                  key={page}
                  onClick={() => {
                    /* handleCloseNavMenu(); */
                    navigate('/')
                  }}
                  sx={{ my: 2, color: 'white', display: 'block', marginLeft: 1 }}
                >
                  {page}
                </Button>
            ))}
          </Box>

          {!auth.user ?
            <>
              <AuthStatus />
              <Button
                variant="contained"
                onClick={() => { navigate(login) }}
                style={{ margin: 10 }}
              >Login</Button>

            </>

            :
            <AuthStatus />
          }

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default MenuBar



