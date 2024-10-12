import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#0808F6',
          dark: '#0D10C6',
          light: '#5C7AFF',
          contrastText: '#FFFFFF',
          _states: {
            hover: 'rgba(8, 8, 246, 0.04)',
            selected: 'rgba(8, 8, 246, 0.08)',
            focus: 'rgba(8, 8, 246, 0.12)',
            focusVisible: 'rgba(8, 8, 246, 0.3)',
            outlinedBorder: 'rgba(8, 8, 246, 0.5)',
          },
        },
        secondary: {
          main: '#616161',
          dark: '#212121',
          light: '#9E9E9E',
          _states: {
            hover: 'rgba(97, 97, 97, 0.04)',
            selected: 'rgba(97, 97, 97, 0.08)',
            focus: 'rgba(97, 97, 97, 0.12)',
            focusVisible: 'rgba(97, 97, 97, 0.3)',
            outlinedBorder: 'rgba(97, 97, 97, 0.5)',
          },
          contrast: '#FFFFFF',
        },
        error: {
          contrastText: '#FFFFFF',
          main: '#D32F2F',
          dark: '#C62828',
          _states: {
            outlinedBorder: 'rgba(211, 47, 47, 0.5)',
            focusVisible: 'rgba(211, 47, 47, 0.3)',
            hover: 'rgba(211, 47, 47, 0.04)',
          },
        },
        warning: {
          contrastText: '#FFFFFF',
          main: '#EF6C00',
          dark: '#E65100',
          _states: {
            outlinedBorder: 'rgba(239, 108, 0, 0.5)',
            focusVisible: 'rgba(239, 108, 0, 0.3)',
            hover: 'rgba(239, 108, 0, 0.04)',
          },
        },
        info: {
          contrastText: '#FFFFFF',
          main: '#0288D1',
          dark: '#01579B',
          _states: {
            outlinedBorder: 'rgba(2, 136, 209, 0.5)',
            hover: 'rgba(2, 136, 209, 0.04)',
          },
        },
        common: {
          white_states: {
            main: '#FFFFFF',
            focusVisible: 'rgba(255, 255, 255, 0.3)',
          },
        },
        action: {
          disabled: 'rgba(0, 0, 0, 0.38)',
          disabledBackground: 'rgba(0, 0, 0, 0.12)',
          hover: 'rgba(0, 0, 0, 0.04)',
        },
        text: {
          _states: {
            focusVisible: 'rgba(0, 0, 0, 0.3)',
          },
          primary: 'rgba(0, 0, 0, 0.87)',
        },
        success: {
          contrast: '#FFFFFF',
          main: '#2E7D32',
          dark: '#1B5E20',
          _states: {
            outlinedBorder: 'rgba(46, 125, 50, 0.5)',
            focusVisible: 'rgba(46, 125, 50, 0.3)',
            hover: 'rgba(46, 125, 50, 0.04)',
          },
        },
        _components: {
          switch: {
            knobFillEnabled: '#FAFAFA',
            slideFill: '#000000',
          },
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#374BFF',
          dark: '#1519FF',
          light: '#B6CEFF',
          contrastText: 'rgba(0, 0, 0, 0.87)',
          _states: {
            hover: 'rgba(92, 122, 255, 0.08)',
            selected: 'rgba(92, 122, 255, 0.16)',
            focus: 'rgba(92, 122, 255, 0.12)',
            focusVisible: 'rgba(92, 122, 255, 0.3)',
            outlinedBorder: 'rgba(92, 122, 255, 0.5)',
          },
        },
        secondary: {
          main: '#9E9E9E',
          dark: '#616161',
          light: '#FAFAFA',
          _states: {
            hover: 'rgba(158, 158, 158, 0.08)',
            selected: 'rgba(158, 158, 158, 0.16)',
            focus: 'rgba(158, 158, 158, 0.12)',
            focusVisible: 'rgba(158, 158, 158, 0.3)',
            outlinedBorder: 'rgba(158, 158, 158, 0.5)',
          },
          contrast: 'rgba(0, 0, 0, 0.87)',
        },
        error: {
          contrastText: '#FFFFFF',
          main: '#F44336',
          dark: '#D32F2F',
          _states: {
            outlinedBorder: 'rgba(244, 67, 54, 0.5)',
            focusVisible: 'rgba(244, 67, 54, 0.3)',
            hover: 'rgba(244, 67, 54, 0.08)',
          },
        },
        warning: {
          contrastText: 'rgba(0, 0, 0, 0.87)',
          main: '#FFA726',
          dark: '#F57C00',
          _states: {
            outlinedBorder: 'rgba(255, 167, 38, 0.5)',
            focusVisible: 'rgba(255, 167, 38, 0.3)',
            hover: 'rgba(255, 167, 38, 0.08)',
          },
        },
        info: {
          contrastText: 'rgba(0, 0, 0, 0.87)',
          main: '#29B6F6',
          dark: '#0288D1',
          _states: {
            outlinedBorder: 'rgba(41, 182, 246, 0.5)',
            hover: 'rgba(41, 182, 246, 0.08)',
          },
        },
        common: {
          white_states: {
            main: '#FFFFFF',
            focusVisible: 'rgba(255, 255, 255, 0.3)',
          },
        },
        action: {
          disabled: 'rgba(255, 255, 255, 0.38)',
          disabledBackground: 'rgba(255, 255, 255, 0.12)',
          hover: 'rgba(255, 255, 255, 0.08)',
        },
        text: {
          _states: {
            focusVisible: 'rgba(255, 255, 255, 0.3)',
          },
          primary: '#FFFFFF',
        },
        success: {
          contrast: 'rgba(0, 0, 0, 0.87)',
          main: '#66BB6A',
          dark: '#388E3C',
          _states: {
            outlinedBorder: 'rgba(102, 187, 106, 0.5)',
            focusVisible: 'rgba(102, 187, 106, 0.3)',
            hover: 'rgba(102, 187, 106, 0.08)',
          },
        },
        _components: {
          switch: {
            knobFillEnabled: '#E0E0E0',
            slideFill: 'rgba(255, 255, 255, 0.38)',
          },
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          boxShadow: 'none',
          variants: [
            {
              props: { size: 'small' },
              style: {
                padding: '0px 16px',
              },
            },
          ],
        },
        outlinedSecondary: {
          border: '1px solid',
        },
      },
    },
  },
})

export default theme
