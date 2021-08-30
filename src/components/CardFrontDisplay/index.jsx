import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useStyles from '../CardDisplay/CardDisplay.styles'
import { getCardType } from '../../utils/helper/index'
import { CARD_TYPE_TO_IMAGE_MAPPER } from '../../utils/constants'

const FrontDisplay = (props) => {
  const classes = useStyles()
  const { cardDetails, fieldToFocus, handleCardType } = props
  const [ background, setBackground ] = useState('/images/6.jpeg')
  const [ cardNumberToDisplay, setCardNumberToDisplay ] = useState('################')
  const [ expiryDate, setExpiryDate ] = useState('MM/YY')
  const { number: cardNumber, name: cardOwner, cvv, month, year, type: cardType } = cardDetails

  const getFormattedCardNumber = () => {
    const lengthOfCardNumberInput = cardNumber.length
    if (lengthOfCardNumberInput <= 16) {
      const formattedValue = `${ cardNumber }${ '#'.repeat(16 - lengthOfCardNumberInput) }`.match(/.{1,4}/g).join(' ')
      setCardNumberToDisplay(formattedValue)
    }
  }

  const getFormattedExpiryDate = () => {
    const monthValue = month ? `0${month}`.slice(-2) : 'MM'
    const yearValue = year ? `${year}`.slice(-2) : 'YY'
    setExpiryDate(`${monthValue}/${yearValue}`)
  }

  const processCardType = () => {
    const cardTypeCalculated = getCardType(cardNumber)
    handleCardType(cardTypeCalculated || 'JCB')
  }

  useEffect(() => {
    getFormattedCardNumber()
    if (cardNumber.length > 4) processCardType()
  }, [cardNumber])

  useEffect(() => {
    getFormattedExpiryDate()
  }, [month, year])

  return (
    <Box marginLeft='3%'>
      <Grid className={ classes.cardImageGrid } container spacing={3}>
        <Grid item xs={2} className={ classes.imgContainer }>
          <img className={ classes.chip } src='/images/chip.png' />
        </Grid>
        <Grid item xs={6} />
        <Grid item xs={3} className={ classes.imgContainer }>
        <img className={ classes.cardType } src={`/images/${CARD_TYPE_TO_IMAGE_MAPPER[cardType]}`} />
        </Grid>
      </Grid>
      <Grid className={ classes.cardNumberGrid } container>
        <Grid item xs={9} className={ classes.imgContainer }>
          <Typography variant="h6" >{ cardNumberToDisplay } </Typography>
        </Grid>
      </Grid>
      <Grid className={ classes.cardBottomGrid } container>
        <Grid item xs={9} className={ classes.cardHolderBox }>
          <Box>
            <Typography variant="subtitle2">Card Holder</Typography>
          </Box>
          <Box width='80%'>
            <Typography noWrap={true} variant="subtitle2">{ cardOwner } </Typography>
          </Box>
        </Grid>
        <Grid item xs={2} className={ classes.cardHolderBox }>
          <Box>
            <Typography variant="subtitle2">Expires</Typography>
          </Box>
          <Box width='80%'>
            <Typography noWrap={true} variant="subtitle2">{ expiryDate } </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

FrontDisplay.propTypes = {
  cardDetails: PropTypes.object,
  fieldToFocus: PropTypes.string,
  handleCardType: PropTypes.func
}

export default FrontDisplay
