import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MaterialDialog from './MaterialDialog'
import EventDetails from './EventDetails'
import DialogContentText from '@material-ui/core/DialogContentText'
import RegisteredStudents from './RegisteredStudents'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '28ch',
    },
});

export default function MaterialTable(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    // const [content, setContent] = React.useState()
    const [childProps, setChildProps] = React.useState()

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = (e) => {
        console.log(e.target.getAttribute('eventId'))
        setChildProps({
            handleClose,
            DialogContent: <DialogContentText id="alert-dialog-description">
                                Deleting this will delete the Survey questions associated with this event. Are you sure you want to delete this event?",
                            </DialogContentText>,
            buttons: [<Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>,
                    <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
                        Confirm
                    </Button>],
            dividers: false,
            title:'Confirm Delete',
            eventId: e.target.getAttribute('eventId'),
        })
        setOpen(true);
    }

    const handleEdit = (e) => {
        console.log(e.target.getAttribute('eventId'))
        setChildProps({
            // ...childProps,
            handleClose,
            DialogContent: <DialogContentText><EventDetails /></DialogContentText>,
            buttons: [<Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>,
                    <Button autoFocus onClick={handleSaveChange} color="primary">
                        Save changes
                    </Button>],
            dividers: true,
            title:'Edit Event',
            eventId: e.target.getAttribute('eventId'),
        })
        setOpen(true);
    }

    const handleAddEvent = () => {
        // console.log(e.target.getAttribute('eventId'))
        setChildProps({
            // ...childProps,
            handleClose,
            DialogContent: <EventDetails />,
            buttons: [<Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>,
                    <Button autoFocus onClick={handleSave} color="primary">
                        Save
                    </Button>],
            dividers: true,
            title:'Add Event',
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

    const handleViewParticipation = () => {
        setChildProps({
            // ...childProps,
            handleClose,
            DialogContent: <RegisteredStudents />,
            buttons: [<Button autoFocus onClick={handleClose} color="primary">
                        Close
                    </Button>],
            dividers: true,
            title:'Registered Students',
            participants: true,
        })
        setOpen(true);
    }

    return (
        <div>
            <Button variant="contained" color="primary" style={{ marginBottom: "12px" }} onClick={handleAddEvent}>Add Event</Button>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Event Name</TableCell>
                            <TableCell align="center">Created On</TableCell>
                            <TableCell align="center">Action</TableCell>
                            <TableCell align="center">Participants</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row" >
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.calories}</TableCell>
                                <TableCell align="center">
                                    <div className="action-cell">
                                        <IconButton className="edit-button icons" color="primary" aria-label="edit button" component="span" eventId={row.name} onClick={(e) => handleEdit(e)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton className="icons" color="primary" aria-label="delete button" component="span" eventId={row.name} onClick={(e) => handleDelete(e)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </TableCell>
                                <TableCell align="center"><Button variant="contained" color="primary" onClick={handleViewParticipation}>View Participants</Button></TableCell>
                                {/* <TableCell align="right">{row.protein}</TableCell> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >

            <MaterialDialog open={open} {...childProps} />

        </div>
    );
}
