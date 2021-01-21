import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222222'
    },
    secondary: {
      main: '#F7A046',
      contrastText: '#5D93FF'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fafafa',
      border: '#ebebeb'
    }
  },
  typography: {
    fontFamily:['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', '"Helvetica Neue"', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold'
    },
    h2: {
      fontWeight: 'bold'
    },
    h3: {
      fontWeight: 'bold'
    }
  }
});

export default theme;