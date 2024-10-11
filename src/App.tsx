import { Container, SvgIcon } from '@mui/material'
import LogoIcon from './assets/logo/IconLogo.svg'

function App() {
  return (
    <Container
      maxWidth={false} // Disable the maxWidth to allow full width
      disableGutters // Remove the default padding
      sx={{
        width: '100vw', // Set width to 100% of the viewport width
        height: '100vh', // Set height to 100% of the viewport height
      }}
    >
      <SvgIcon component={LogoIcon} />
    </Container>
  )
}

export default App
