import React from 'react';
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
import Button from '@material-ui/core/Button';
import MaterialDialog from './MaterialDialog'
import DialogContentText from '@material-ui/core/DialogContentText'
import Toolbar from '@material-ui/core/Toolbar'
import StudentDetails from './StudentDetails'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(usn, name, email, phone, branch, registered) {
    return { usn, name, email, phone, branch, registered };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 'ISE', 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 'ISE', 4.3),
    createData('Eclair', 262, 16.0, 24, 'ISE', 6.0),
    createData('Cupcake', 305, 3.7, 67, 'ISE', 4.3),
    createData('Gingerbread', 356, 16.0, 49, 'ISE', 3.9),
];

export default function ManageStudents() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // const [content, setContent] = React.useState()
    const [childProps, setChildProps] = React.useState()

    const handleClose = () => {
        setOpen(false);
    };

    const handleEdit = (eventId) => {
        console.log(eventId)
        setChildProps({
            // ...childProps,
            handleClose,
            DialogContent: <DialogContentText> <StudentDetails /></DialogContentText>,
            buttons: [
                <Button autoFocus onClick={handleClose} color="primary">
                    Close
                    </Button>,
                <Button autoFocus onClick={handleSaveChange} color="primary">
                    Save changes
                    </Button>
            ],
            dividers: true,
            title: 'Edit Event',
            eventId,
            maxWidth: "sm",
        })
        setOpen(true);
    }

    const handleDelete = (eventId) => {
        console.log(eventId)
        setChildProps({
            handleClose,
            DialogContent: <DialogContentText id="alert-dialog-description">
                Deleting this will delete the Student details completely. Are you sure you want to delete this Student details?",
                            </DialogContentText>,
            buttons: [<Button onClick={handleClose} color="primary">
                Cancel
                    </Button>,
            <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
                Confirm
                    </Button>],
            dividers: false,
            title: 'Confirm Delete',
            eventId,
            maxWidth: "sm",
        })
        setOpen(true);
    }

    const handleAddEvent = () => {
        // console.log(e.target.getAttribute('eventId'))
        setChildProps({
            // ...childProps,
            handleClose,
            DialogContent: <DialogContentText> <StudentDetails /></DialogContentText>,
            buttons: [<Button autoFocus onClick={handleClose} color="primary">
                Close
                    </Button>,
            <Button autoFocus onClick={handleSave} color="primary">
                Save
                    </Button>],
            dividers: true,
            title: 'Add Student',
            maxWidth: "sm",
        })
        setOpen(true);
    }

    const handleSave = () => {
        setOpen(false);
    }

    const handleSaveChange = () => {
        setOpen(false);
    }

    const handleDeleteConfirm = () => {
        setOpen(false);
    }

    return (
        <div>
            <Toolbar />
            <div className="main-title">
                Manage Students
            </div>
            <Button variant="contained" color="primary" style={{ marginBottom: "12px" }} onClick={handleAddEvent}>Add Student</Button>
            <MaterialDialog open={open} {...childProps} />
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>USN</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Password</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Branch</TableCell>
                            <TableCell align="center">Registered On</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.usn}
                                </TableCell>
                                <TableCell align="center">{row.name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.phone}</TableCell>
                                <TableCell align="center">{row.branch}</TableCell>
                                <TableCell align="center">{row.registered}</TableCell>
                                <TableCell align="center">
                                    <div className="action-cell">
                                        <IconButton className="edit-button icons" color="primary" aria-label="edit button" component="span" onClick={(e) => handleEdit(row.name)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton className="icons" color="primary" aria-label="delete button" component="span" onClick={(e) => handleDelete(row.name)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
