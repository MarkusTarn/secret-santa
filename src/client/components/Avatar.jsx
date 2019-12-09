import React from 'react'
import { Avatar as MuiAvatar, Typography, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
  avatarSpacing: {
    marginRight: theme.spacing(2),
  },
}))

export default function Avatar({ src, title }) {
  const classes = useStyles()

  return (
    <>
      <MuiAvatar src={src} className={classes.avatarSpacing}></MuiAvatar>
      <Typography>{title}</Typography>
    </>
  )
}

Avatar.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
}
