import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  blackStrip: {
    marginTop: '8%',
    width: '100%',
    minHeight: '40px',
    backgroundColor: '#000'
  },
  middleStrip: {
    marginTop: '10%',
  },
  whiteStrip: {
    minHeight: '40px',
    width: '94%',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginLeft: '3%'
  },
  cvvText: {
    fontSize: '10px',
    paddingRight: '14px'
  },
  cvv: {
    color: '#000',
    paddingTop: '14px'
  },
  cardType: {
    marginTop: '10px',
    paddingRight: '5px',
    width: '60px'
  }
}));