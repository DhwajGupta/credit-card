import React, { useState, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import CardFrontDisplay from '../CardFrontDisplay/index'
import CardBackDisplay from '../CardBackDisplay/index'

import useStyles from './CardDisplay.styles'

const CardDisplay = (props) => {
  const { cardDetails, fieldToFocus, handleCardType } = props
  const classes = useStyles()
  const [ isFlipped, setFlip ] = useState(false)
  const [ background, setBackground ] = useState('/images/6.jpeg')

  useEffect(() => {
    if (fieldToFocus === 'cvv') {
      setFlip(true)
      setBackground('/images/7.jpeg')
    } else {
      setFlip(false)
      setBackground('/images/6.jpeg')
    }
  }, [fieldToFocus === 'cvv'])

  return (
    <Box className={ classes.cardDisplay } style={{ backgroundImage: `url(${background})` }}>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <CardFrontDisplay
          cardDetails={cardDetails}
          fieldToFocus={fieldToFocus}
          handleCardType={handleCardType}
        />
        <CardBackDisplay
          cardDetails={cardDetails}
          fieldToFocus={fieldToFocus}
        />
      </ReactCardFlip>
    </Box>
  );
}

CardDisplay.propTypes = {
  cardDetails: PropTypes.object.isRequired,
  fieldToFocus: PropTypes.string,
  handleCardType: PropTypes.func.isRequired
}

export default CardDisplay