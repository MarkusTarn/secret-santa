import React, { useState, useEffect } from 'react'
import { Router, View } from 'react-navi'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

import Theme from './Theme.jsx'
import routes from './routes.jsx'
import AppContext from './AppContext'
import currentUserQuery from './api/currentUserQuery'
import allUsersQuery from './api/allUsersQuery'
import authenticatedRoutes from './authenticatedRoutes.jsx'
import NavBar from './components/Navbar.jsx'

export default function App() {
  const [currentUser, setCurrentUser] = useState(undefined)
  const [participants, setParticipants] = useState(undefined)
  const [userQueryDone, setUserQueryDone] = useState(false)
  const [usersQueryDone, setusersQueryDone] = useState(false)

  useEffect(() => {
    currentUserQuery().then((user) => setCurrentUser(user)).finally(() => setUserQueryDone(true))
    allUsersQuery().then((users) => setParticipants(users)).finally(() => setusersQueryDone(true))
  }, [false])

  if (!userQueryDone) return null

  if (!usersQueryDone) return null

  return (
    <ThemeProvider theme={Theme}>
      <AppContext.Provider value={{
        currentUser,
        setCurrentUser,
        participants,
        setParticipants,
      }}>
        <React.Fragment>
          <CssBaseline />
          <NavBar />
          {!currentUser && (
            <Router routes={routes}>
              <View />
            </Router>
          )}
          {currentUser && (
            <Router routes={authenticatedRoutes} context={{ currentUser }}>
              <View />
            </Router>
          )}
        </React.Fragment>
      </AppContext.Provider>
    </ThemeProvider>
  )
}
