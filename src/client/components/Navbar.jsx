import React, { useContext } from 'react'
import { AccountCircleOutlined } from '@material-ui/icons'
import {
  AppBar,
  Typography,
  IconButton,
  Toolbar,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core'
import AppContext from '../AppContext'
import logout from '../api/logout'
import Avatar from './Avatar.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(2),
    backgroundColor: 'green',
  },
  title: {
    flexGrow: 1,
  },
}))

export default function NavBar() {
  const classes = useStyles()
  const { currentUser, setCurrentUser } = useContext(AppContext)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onLogout = () => {
    setAnchorEl(null)
    logout()
      .then(() => setCurrentUser(null))
  }

  return (
    <AppBar style={{ marginBottom: 8, textAlign: 'center' }} position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title}> Meloni jõululoos</Typography>

        {currentUser && (
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              color="inherit"
            >
              <AccountCircleOutlined />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem >
                <Avatar src={currentUser.avatarUrl} title={currentUser.name}></Avatar>
              </MenuItem>
              <MenuItem >Help</MenuItem>
              <MenuItem onClick={() => onLogout()}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
