import React, { useState } from 'react'
import CardDisplay from '../../components/CardDisplay/index'
import CardForm from '../../components/CardForm/index'
import Box from '@material-ui/core/Box'
import useStyles from './Card.styles'
import { DEFAULT_CARD_TYPE } from '../../utils/constants'

const Card = () => {
  const classes = useStyles()
  const [fieldToFocus, setFieldToFocus] = useState(null)
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

  const handleSubmitCardDetails = (e) => {
    e.preventDefault()
    setFieldToFocus(null)
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
    </Box>
  )
}

export default Card
