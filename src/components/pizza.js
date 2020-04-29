import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import AddButton from '../containers/add-button';

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);
  
const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const Pizza = (props) => {
    const classes = useStyles();

    return(
        <StyledTableRow key={props.id}>
            <StyledTableCell align="center">
                <Avatar
                    className={classes.large}
                    alt={`Avatar n°${props.id}`}
                    src={`./images/${props.id}.jpeg`}
                />
            </StyledTableCell>
            <StyledTableCell align="center">{props.name}</StyledTableCell>
            <StyledTableCell align="center">{props.description}</StyledTableCell>
            <StyledTableCell align="center">{props.price}</StyledTableCell>
            <StyledTableCell align="center">
                <AddButton 
                  {...props}
                />
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default Pizza;