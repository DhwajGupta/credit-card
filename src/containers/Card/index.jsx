import React, { useState } from 'react'
import CardDisplay from '../../components/CardDisplay/index'
import CardForm from '../../components/CardForm/index'
import Box from '@material-ui/core/Box'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import useStyles from './Card.styles'
import { DEFAULT_CARD_TYPE } from '../../utils/constants'

const Alert = props => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Card = () => {
  const classes = useStyles()
  const [fieldToFocus, setFieldToFocus] = useState(null)
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState({ type: 'info', message: '' })
  const [cardDetails, setCardDetails] = useState({
    cvv: '',
    month: '',
    year: '',
    name: '',
    number: '',
    type: DEFAULT_CARD_TYPE
  })

  const handleFieldFocus = (e, reset = false) => {
    const { target: { name: fieldName, id: fieldId } } = e
    if (reset) setFieldToFocus(null)
    else setFieldToFocus(fieldName || fieldId)
  }

  const handleCardType = (type) => {
    setCardDetails((prev) => ({
      ...prev,
      type: type
    }))
  }

  const handleFieldValueChange = (e) => {
    const { target: { name, value } } = e

    setCardDetails((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSnackbarClose = () => {
    setOpenSnackbar(false)
    setSnackbarMessage({ type: 'info', message: '' })
  }

  const checkForEmptyFields = () => {
    // eslint-disable-next-line no-unused-vars
    for (const [_, value] of Object.entries(cardDetails)) {
      if (!value) return true
    }
    return false
  }

  const handleSubmitCardDetails = (e) => {
    e.preventDefault()
    setFieldToFocus(null)
    if(checkForEmptyFields()) {
      setSnackbarMessage({
        type: 'error',
        message: 'Fill all the fields.'
      })
    } else {
      setSnackbarMessage({
        type: 'success',
        message: 'Submitted successfully.'
      })
    }
    setOpenSnackbar(true)
  }

  return (
    <Box className={classes.cardContainer}>
      <CardDisplay
        cardDetails={cardDetails}
        fieldToFocus={fieldToFocus}
        handleCardType={handleCardType}
      />
      <CardForm
        cardDetails={cardDetails}
        fieldToFocus={fieldToFocus}
        handleFieldValueChange={handleFieldValueChange}
        handleFieldFocus={handleFieldFocus}
        handleSubmit={handleSubmitCardDetails}
      />
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        onClose={handleSnackbarClose}
      >
        <Alert severity={snackbarMessage.type}>
          {snackbarMessage.message}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default Card
