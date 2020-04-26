import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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

function Pizza(props) {
    return(
        <StyledTableRow key={props.id}>
            <StyledTableCell align="left">
                <Avatar
                    alt={`Avatar n°${props.id}`}
                    src={`./images/${props.id}.jpeg`}
                />
            </StyledTableCell>
            <StyledTableCell align="right">{props.name}</StyledTableCell>
            <StyledTableCell align="right">{props.description}</StyledTableCell>
            <StyledTableCell align="right">{props.price}</StyledTableCell>
            <StyledTableCell align="right">
                <IconButton edge="end" aria-label="add">
                    <AddCircle></AddCircle>
                </IconButton>
            </StyledTableCell>
        </StyledTableRow>
    )
}

export default Pizza