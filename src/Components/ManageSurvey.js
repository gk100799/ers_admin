import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(usn, name, email, phone, branch, registered) {
    return { usn, name, email, phone, branch, registered };
}

const rows = [
    createData(159, 'Frozen yoghurt', 6.0, 24, 'ISE', 4.0),
    createData(237, 'Ice cream sandwich', 9.0, 37, 'ISE', 4.3),
    createData(262, 'Eclair', 16.0, 24, 'ISE', 6.0),
    createData(305, 'Cupcake', 3.7, 67, 'ISE', 4.3),
    createData(356, 'Gingerbread', 16.0, 49, 'ISE', 3.9),
];

export default function ManageSurvey() {
    const classes = useStyles();

    const handleEdit = () => {
        
    }

    const handleDelete = () => {
        
    }

    const handleAdd = () => {
        
    }

    return (
        <div>
            <Toolbar />
            <div className="main-title">
                Manage Survey
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Event Name</TableCell>
                            <TableCell align="center">Created On</TableCell>
                            <TableCell align="center">Add / Edit Survey</TableCell>
                            <TableCell align="center">Delete Survey</TableCell>
                            {/* <TableCell align="center">Branch</TableCell> */}
                            {/* <TableCell align="center">Registered On</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.usn}</TableCell>
                                <TableCell align="center">
                                    <div className="action-cell">
                                        <IconButton className="edit-button icons" color="primary" aria-label="edit button" component="span" eventId={row.name} onClick={(e) => handleEdit(e)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton className="icons" color="primary" aria-label="delete button" component="span" eventId={row.name} onClick={(e) => handleAdd(e)}>
                                            <PostAddIcon />
                                        </IconButton>
                                    </div>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton className="icons" color="primary" aria-label="delete button" component="span" eventId={row.name} onClick={(e) => handleDelete(e)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
