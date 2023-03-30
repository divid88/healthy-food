import { createTheme } from "@mui/material";


export const themeCustome = createTheme({
    direction: "rtl",
palette:{
  mode: "light",
  primary: {
    main: '#00e180'
  },
  secondary: {
    main: '#fff',
    dark:'000000',
    light: '#fff',
    contrastText:'#555'

  },
  success:{
    main: '#00e180'
  }
},
typography:{
  fontFamily: 'vazir'
},
components:{
  MuiButtonBase: {
    defaultProps:{
      disableRipple: true,
      
    }
  }
},
props:{
  MuiLink: {
    underline: "none"
}
},

})

