import { PaletteMode, Shadows, createTheme } from '@mui/material';
import '@fontsource/poppins';

const dark = {
  bg0: '#282828',
  bg1: '#3c3836',
  bg2: '#504945',
  bg3: '#665c54',
  bg4: '#7c6f64',
  fg0: '#FBF1C7',
  fg1: '#EBDBB2',
  fg2: '#D5C4A1',
  fg3: '#BDAE93',
  fg4: '#A89984',
  red: '#cc241d',
  green: '#98971a',
  yellow: '#d799921',
  blue: '#458588',
  purple: '#B16286',
  aqua: '#689D6A',
  orange: '#D65D0E',
};

const light = {
  bg0: '#FBF1C7',
  bg1: '#EBDBB2',
  bg2: '#D5C4A1',
  bg3: '#BDAE93',
  bg4: '#A89984',
  fg0: '#282828',
  fg1: '#3c3836',
  fg2: '#504945',
  fg3: '#665c54',
  fg4: '#7c6f64',
  red: '#cc241d',
  green: '#98971a',
  yellow: '#d799921',
  blue: '#458588',
  purple: '#B16286',
  aqua: '#689D6A',
  orange: '#D65D0E',
  // red: '#9D0006',
  // green: '#79740E',
  // yellow: '#B57614',
  // blue: '#076678',
  // purple: '#8F3F71',
  // aqua: '#427B58',
  // orange: '#AF3A03',
};

export const getTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            primary: {
              main: light.blue,
            },
            secondary: {
              main: light.aqua,
            },
            divider: light.bg1,
            background: {
              default: light.bg0,
              paper: light.bg0,
            },
            text: {
              primary: light.fg1,
              secondary: light.fg2,
            },
          }
        : {
            primary: {
              main: dark.aqua,
            },
            secondary: {
              main: dark.aqua,
            },
            divider: dark.bg1,
            background: {
              default: dark.bg0,
              paper: dark.bg1,
            },
            text: {
              primary: dark.fg0,
              secondary: dark.fg1,
            },
          }),
    },
    typography: {
      fontFamily: 'Poppins',
      body1: {
        fontWeight: 400,
      },
      h1: {
        fontSize: '2rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '4rem',
        fontWeight: 700,
      },
      h5: {
        fontSize: '1.5rem',
        fontWeight: 700,
      },
      fontSize: 14,
    },
    shadows: Array(25).fill('none') as Shadows,
    components: {
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'small',
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: false,
        },
      },
      MuiPaper: {
        defaultProps: {
          variant: 'outlined',
        },
      },
      MuiList: {
        defaultProps: {
          dense: true,
        },
      },
      MuiListItemButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 900,
          },
        },
      },
      MuiFormControl: {
        defaultProps: {
          size: 'small',
          fullWidth: true,
        },
      },
      MuiMenuItem: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: {
            marginTop: '-.75rem',
          },
        },
      },
      MuiAutocomplete: {
        defaultProps: {
          size: 'small',
        },
        styleOverrides: {
          paper: {
            fontSize: '14px',
          },
          inputRoot: {
            fontSize: '14px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              backgroundColor: light.blue,
              opacity: '0.1',
              zIndex: -1,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          },
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          notched: false,
        },
        styleOverrides: {
          root: {
            fontSize: '14px',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              backgroundColor: light.blue,
              opacity: '0.1',
              zIndex: -1,
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            },
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontSize: '14px',
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          shrink: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: false,
          variant: 'contained',
        },
        styleOverrides: {
          root: {
            textTransform: 'none',
          },
        },
      },
    },
  });
};
