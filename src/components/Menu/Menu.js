import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Hamburger from "../../svg/icons8-menu.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export default function Menu() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -94; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const theme = createTheme({
    components: {
      // Name of the component
      MuiDrawer: {
        styleOverrides: {
          // Name of the slot
          paper: {
            // Some CSS
            backgroundColor: "#312272",

          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            color: "#FFFFFF",
            fontSize: "20px",
            fontWeight: 600,
          }
        }
      }
    },
  });

  const list = (anchor) => (
    <Box
      // sx={{ backgroundColor: "#312272", }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        <HashLink smooth to="/#home" scroll={scrollWithOffset}>
          <ListItem button >
            <ListItemText primary={"Home"} />
          </ListItem>
        </HashLink>

        <HashLink smooth to="/#vision" scroll={scrollWithOffset}>
          <ListItem button >
            <ListItemText primary={"Our Vision"} />
          </ListItem>
        </HashLink>

        <HashLink smooth to="/#product" scroll={scrollWithOffset}>
          <ListItem button >
            <ListItemText primary={"Smart Estate Planning"} />
          </ListItem>
        </HashLink>

        <HashLink smooth to="/#team" scroll={scrollWithOffset}>
          <ListItem button >
            <ListItemText primary={"Team"} />
          </ListItem>
        </HashLink>

        <HashLink smooth to="/#contact" scroll={scrollWithOffset}>
          <ListItem button >
            <ListItemText primary={"Contact"} />
          </ListItem>
        </HashLink>

        <a smooth href="https://owlfred-shop.creator-spring.com/">
          <ListItem button >
            <ListItemText primary={"Swag"} />
          </ListItem>
        </a>
        
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{<Hamburger/>}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </ThemeProvider>
  );
}