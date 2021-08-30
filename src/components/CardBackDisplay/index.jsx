import React from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useStyles from './CardBackDisplay.styles'
import { CARD_TYPE_TO_IMAGE_MAPPER } from '../../utils/constants'

const BackDisplay = (props) => {
  const { cardDetails, fieldToFocus } = props
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.blackStrip}></Box>
      <Box className={classes.middleStrip}>
        <Typography align='right' className={classes.cvvText} >
          CVV
        </Typography>
        <Box className={classes.whiteStrip}>
          <Typography align='right' className={`${classes.cvv} ${classes.cvvText}`} color='#000'>
            {cardDetails.cvv}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row-reverse">
        <img className={ classes.cardType } src={`/images/${CARD_TYPE_TO_IMAGE_MAPPER[cardDetails.type]}`} />
        </Box>
      </Box>
    </Box>
  )
}

BackDisplay.propTypes = {
  cardDetails: PropTypes.object,
  fieldToFocus: PropTypes.string,
}

export default BackDisplay
