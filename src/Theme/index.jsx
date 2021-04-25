import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#353535',
        },
        secondary: {
            main: '#d4d0d0',
        },
        background: {
            default: '#a8a4a4',
            paper: '#ffffff',
        },
        text: {
            secondary: 'rgba(140,140,140,0.78)',
            primary: '#4e4e4e',
        },
    },
});

export default theme;