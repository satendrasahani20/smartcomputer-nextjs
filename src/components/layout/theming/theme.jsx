// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7b4ee9', // Your primary color
    },
    secondary: {
      main: '#ff6f61', // Your secondary color
    },
    theme: {
        main: '#7b4ee9', // Your primary color
      },
    // Add more custom colors if needed
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Your custom font-family
  },
  // Add other theme properties as needed
});

export default theme;