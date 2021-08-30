import React from 'react'
import Card from '../Card/index'
import Container from '@material-ui/core/Container'
import useStyles from './Dashboard.styles'

const Dashboard = () => {
  const classes = useStyles()

  return (
    <Container className={ classes.root }>
      <Card />
    </Container>
  )
}

export default Dashboard
