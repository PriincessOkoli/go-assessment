import { createTheme } from '@mui/material/styles'
import resolveConfig from 'tailwindcss/resolveConfig'
import config from '../tailwind.config.js'
import type {} from '@mui/x-data-grid/themeAugmentation'
const tailwindConfig = resolveConfig(config)
const colors = tailwindConfig.theme?.colors as any

const theme = createTheme({
  typography: {
    fontFamily: "'DM Sans', 'serif', 'ui-sans-serif', 'system-ui'",
  },
  palette: {
    primary: {
      main: colors.brand[50],
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        type: 'button',
      },

      styleOverrides: {
        root: {
          fontFamily: " 'Raleway', 'sans-serif' !important",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none',
          borderRadius: 10,
          height: '3rem',
          '&.Mui-disabled': {
            opacity: '0.7 !important',
          },
        },
        contained: {
          background: colors.primary,
        },
        outlined: {
          border: `1px solid ${colors.brand[200]}`,
          color: colors.brand[200],
          '&:hover': {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.brand[200]}`,
          },
          '&.Mui-disabled': {
            '& *': {
              color: `${colors.brand[50]} !important`,
            },
            border: `1px solid ${colors.brand[50]}!important`,
            color: `${colors.brand[50]} !important`,
          },
        },
        text: {
          color: `${colors.brand[200]}`,
          "&:hover":{
            background:'transparent !important'
          }
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 11,
          '& .Mui-focused': {
            border: 0,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          color: colors.brand[200],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // borderRadius: '0.625rem',
          padding: 0,
          '&.Mui-focused fieldset': {
            borderColor: `${colors.brand[100]} !important`,
          },
        },
        input: {
          '&:focus': {
            //  background: colors.brand[100],
            borderRadius: '0.625rem',
          },
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        size: 22,
      },
      styleOverrides: {
        root: {
          color: colors.brand[200],
        },
      },
    },
  },
})

export default theme