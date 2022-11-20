import { createTheme } from '@mui/material/styles';
import darkScrollbar from '@mui/material/darkScrollbar';

export const theme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    h1: { fontSize: '3rem' },
    h2: { fontSize: '2.5rem' },
    h3: { fontSize: '2rem' },
    h4: { fontSize: '1.5rem' },
    h5: { fontSize: '1.2rem' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: themeParam => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
        a: {
          '&:link,&:active,&:visited,&:hover': { color: themeParam.palette.primary.main, textDecoration: 'none' },
        },
      }),
    },
  },
});
