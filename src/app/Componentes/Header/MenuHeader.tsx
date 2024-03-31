import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { AppBarEstilizado } from './MenuHeaderStyles';


const pages = ['HOME', 'QUEM SOMOS', 'ANUNCIE SEU TERRENO'];

const MenuHeader = () => {
    
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBarEstilizado position="static">
            <Container 
                maxWidth="xl"
                sx={{
                    '@media screen and (min-width: 1440px)':{
                        paddingLeft: '120px!important',
                        paddingRight: '120px!important'
                    },
                    '@media screen and (max-width: 767px)':{
                        paddingLeft: '0px!important',
                        paddingRight: '0px!important'
                    },
                    '@media screen and (min-width: 768px) and (max-width: 1439px)':{
                        paddingLeft: '40px!important',
                        paddingRight: '40px!important'
                    }
                }}
            >
                <Toolbar 
                    disableGutters
                    sx={{
                        justifyContent: 'space-between',
                        '@media screen and (min-width: 600px)': {
                            minHeight: '80px'
                        }                     
                    }}
                >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        GreenLots
                    </Typography>
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
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            justifyContent: 'flex-end',
                        }}
                    >
                        GreenLots 
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, columnGap: '1rem' }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBarEstilizado>
    )
}


export default MenuHeader;