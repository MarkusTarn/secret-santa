import React from 'react'
import {
  route,
  mount,
  map,
  redirect,
} from 'navi'
import Home from './home/Home.jsx'

const authenticatedRoutes = mount({
  '/': route({
    title: 'Home',
    view: <Home />,
  }),
  '*': map(() => redirect('/', { exact: false })),
})

export default authenticatedRoutes
