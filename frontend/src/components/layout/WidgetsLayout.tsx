import {
  Box,
  IconButton,
  Drawer,
  Paper,
  Typography,
  useTheme,
  styled,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { useWidgets } from '../../lib/api/widgets';
import { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

const drawerWidth = 240;

const he = `calc(100vh - 10rem)`;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));
function WidgetsLayout(): JSX.Element {
  const widgets = useWidgets();
  const navigate = useNavigate();

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  return (
    <Paper sx={{ overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          borderBottom: `1px solid ${theme.palette.divider}`,
          alignItems: 'center',
          px: 1,
        }}
      >
        <IconButton onClick={() => setOpen((old) => !old)}>
          <Icon icon="mdi:menu" fontSize={28} />
        </IconButton>
        <Typography variant="h1" sx={{ p: 2 }}>
          Widgets
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', position: 'relative', height: he }}>
        <Drawer
          open={open}
          variant="persistent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              position: 'absolute',
              border: 'none',
              overflowX: 'hidden',
              bgcolor: theme.palette.background.default,
            },
          }}
        >
          <List>
            {widgets.map((x) => {
              return (
                <ListItem key={x.id}>
                  <ListItemButton onClick={() => navigate(x.name.toLowerCase().replace(' ', '-'))}>
                    <ListItemText primary={x.name} secondary={x.description} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Drawer>
        <Main
          open={open}
          sx={{
            flexGrow: 1,
            borderLeft: `1px solid ${theme.palette.divider}`,
            display: 'flex',
            flexDirection: 'column',
            p: 2,
          }}
        >
          <Outlet />
        </Main>
      </Box>
    </Paper>
  );
}

export default WidgetsLayout;
