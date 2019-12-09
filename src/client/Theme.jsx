import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import { green, red } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[800],
    },
    secondary: {
      main: red[400],
    },
  },
})

export default responsiveFontSizes(theme)
