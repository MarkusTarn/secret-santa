import React from 'react'
import {
  Button,
  Grid,
  CardContent,
  Card,
  Typography,
  Divider,
} from '@material-ui/core'

export default function Login() {
  return (
    <>
      <Grid container justify="center">
        <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
          <Card>
            <CardContent>
              <Typography align="center" variant="h5">Osaled loosis?</Typography>
              <Divider style={{ marginBottom: '1rem', marginTop: '1rem' }}/>
              <Button fullWidth variant="contained" color="secondary" href="/api/auth/google">Umm, loog...</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
