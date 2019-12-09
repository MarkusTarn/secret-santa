import React from 'react'
import {
  route,
  mount,
  redirect,
  map,
} from 'navi'
import Login from './login/Login.jsx'

const routes = mount({
  '/login': route({
    title: 'Sign in',
    view: <Login />,
  }),
  '*': map((request) => redirect(`/login?redirectTo=${encodeURIComponent(request.originalUrl)}`, { exact: false })),
})

export default routes
