import { Button, Container, SvgIcon, ThemeProvider } from '@mui/material'
import LogoIcon from './assets/logo/IconLogo.svg'
import Home from './assets/icons/Home.svg'
import Tiles from './assets/icons/Tiles.svg'
import FullLogo from './assets/logo/FullLogo.svg'
import { grey } from '@mui/material/colors'
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={false} // Disable the maxWidth to allow full width
        disableGutters // Remove the default padding
        sx={{
          width: '100vw', // Set width to 100% of the viewport width
          height: '100vh', // Set height to 100% of the viewport height
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <Container>
          <SvgIcon
            component={Home}
            inheritViewBox
            color="inherit"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              fill: 'none',
            }}
          />
        </Container>
        <Container>
          <SvgIcon
            component={FullLogo}
            inheritViewBox
            color="secondary"
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </Container>
        <Container>
          <SvgIcon
            component={Home}
            inheritViewBox
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '100%',
              maxHeight: '100%',
              fill: 'none',
            }}
          />
        </Container>
        <Container
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            height: '300px',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
        >
          <Button variant="outlined" size="small" color="secondary">
            Grey Button
          </Button>
        </Container>
      </Container>
    </ThemeProvider>
  )
}

export default App
