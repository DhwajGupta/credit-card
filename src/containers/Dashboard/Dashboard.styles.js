import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    marginTop: '20%',
    maxWidth: '40%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '20%',
      maxWidth: '60%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '21%',
      maxWidth: '60%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '43%',
      marginTop: '21%'
    },
  },
}));