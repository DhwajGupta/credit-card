import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cardDisplay: {
    width: '26%',
    minHeight: '218px',
    borderRadius: '8px',
    marginLeft: '12%',
    position: 'absolute',
    top: '10%',
    zIndex: '9',
    left: '25%',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '55%',
      left: '12%',
    },
    [theme.breakpoints.up('md')]: {
      width: '29%',
      left: '25%',
      top: '15%',
    },
    [theme.breakpoints.up('lg')]: {
      top: '15%',
      left: '25%',
      width: '29%'
    },
  },
  cardImageGrid: {
    marginTop: '1px',
  },
  imgContainer: {
    margin: '5px'
  },
  chip: {
    width: '60px'
  },
  cardType: {
    width: '60px'
  },
  cardHolderBox: {
    margin: '5px',
  },
  cardNumberGrid: {
    marginTop: '20px'
  },
  cardBottomGrid: {
    marginTop: '15px',
  }
}));