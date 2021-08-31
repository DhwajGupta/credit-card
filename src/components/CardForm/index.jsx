import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import Box from '@material-ui/core/Box'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import { getMonthList, getNextTenYearsList } from '../../utils/helper'
import { DEFAULT_CVC_LENGTH } from '../../utils/constants'
import useStyles from './CardForm.styles'

const CardForm = (props) => {
  const {
    handleFieldValueChange, handleFieldFocus, handleSubmit
  } = props

  const classes = useStyles()
  const monthList = useMemo(() => getMonthList(), [])
  const yearsList = useMemo(() => getNextTenYearsList(), [])

  return (
    <Box className={classes.cardForm}>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <Box padding='2%'>
          <TextField
            type='tel'
            onChange={handleFieldValueChange}
            onFocus={handleFieldFocus}
            onBlur={(e) => handleFieldFocus(e, true)}
            fullWidth
            name='number'
            label='Card Number'
            variant='outlined'
            inputProps={{ type:'tel', maxLength: 16 }}
          />
        </Box>
        <Box padding='2%'>
          <TextField
            onChange={handleFieldValueChange}
            onFocus={handleFieldFocus}
            onBlur={(e) => handleFieldFocus(e, true)}
            fullWidth 
            name='name'
            label='Card Name'
            variant='outlined' 
            inputProps={{ maxLength: 50 }}
          />
        </Box>
        <Box padding='2%'>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormControl style={{ width: '100%' }} variant='outlined'>
                <InputLabel id='demo-simple-select-label'>Month</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  name='month'
                  id='month'
                  fullWidth
                  variant='outlined'
                  label='Month'
                  onChange={handleFieldValueChange}
                  onFocus={handleFieldFocus}
                  onBlur={(e) => handleFieldFocus(e, true)}
                >
                  <MenuItem value={'1'} disabled>Month</MenuItem>
                  {monthList?.length && monthList.map((month) => (
                    <MenuItem key={month.label} value={month.value}>{month.label}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <FormControl style={{ width: '100%' }} variant='outlined'>
                <InputLabel id='demo-simple-select-label'>Year</InputLabel>
                <Select
                  labelId='demo-simple-select-label'
                  name='year'
                  id='year'
                  fullWidth
                  variant='outlined'
                  label='Year'
                  onChange={handleFieldValueChange}
                  onFocus={handleFieldFocus}
                  onBlur={(e) => handleFieldFocus(e, true)}
                >
                  <MenuItem value={''} disabled>Year</MenuItem>
                  {yearsList?.length && yearsList.map((year) => (
                    <MenuItem key={year} value={year}>{year}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                type='tel'
                onChange={handleFieldValueChange}
                onFocus={handleFieldFocus}
                onBlur={(e) => handleFieldFocus(e, true)}
                fullWidth
                name='cvv'
                label='CVV'
                variant='outlined' 
                inputProps={{ maxLength: DEFAULT_CVC_LENGTH }}
              />
            </Grid>
          </Grid>
        </Box>
        <Box padding='2%' alignItems='center' width='100%'>
          <Button className={classes.submitBtn} type='submit' variant='contained' color='primary' size='large'>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  )
}

CardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFieldValueChange: PropTypes.func.isRequired,
  handleFieldFocus: PropTypes.func.isRequired
}

export default CardForm
