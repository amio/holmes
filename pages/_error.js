import React from 'react'
import Error from 'next/error'
import Router from 'next/router'

export default class extends React.Component {
  componentDidMount () {
    setTimeout(() => {
      console.info('Redirecting to "/"')
      Router.replace('/')
    }, 2000)
  }

  render () {
    return <Error statusCode={404} />
  }
}
