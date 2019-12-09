import React, { useContext } from 'react'
import {
  Avatar,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
  Container,
  CardHeader,
  Typography,
} from '@material-ui/core'

import AppContext from '../AppContext'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(2),
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
  },
}))

export default function Home() {
  const { currentUser, participants } = useContext(AppContext)
  const classes = useStyles()

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container className={classes.message}>
                {currentUser.receiver
                  ? (<Typography variant="h4">Sulle loositud: <u><i>{currentUser.receiver}</i></u></Typography>)
                  : (<Typography variant="h4">Loos toimub 15.12.2019</Typography>)
                }
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Card className={classes.card}>
            <CardHeader title={'Osalevad:'} />
            <CardContent>
              <List>
                {!participants.length && (
                  <ListItem>
                    <ListItemText primary="Ühtegi osalejat pole" />
                  </ListItem>
                )}
                {participants.map((participant) => (
                  <ListItem key={`player-${participant._id}`}>
                    <ListItemAvatar>
                      <Avatar src={participant.avatarUrl} />
                    </ListItemAvatar>
                    <ListItemText primary={(
                      <>
                        {participant.name}
                      </>
                    )} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
