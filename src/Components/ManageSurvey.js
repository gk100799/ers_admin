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
import DialogContentText from '@material-ui/core/DialogContentText'
import MaterialDialog from './MaterialDialog'
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import FullScreenDialog from './FullScreenDialog'
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Question from './Question'
import AddQuestionContent from './AddQuestionContent'

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

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

export default function ManageSurvey(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [fullOpen, setFullOpen] = React.useState(false);
    const [childProps, setChildProps] = React.useState()
    const [fullDialogProps, setFullDialogProps] = React.useState()
    const [footer, setFooter] = React.useState()

    const handleAddQuestion = () => {
        setChildProps({
            handleClose,
            DialogContent: <DialogContentText id="alert-dialog-description">
                <AddQuestionContent setFooter />
            </DialogContentText>,
            buttons: [<Button onClick={handleClose} color="primary">
                Cancel
                    </Button>,
            <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
                Save
            </Button>],
            dividers: true,
            title: 'Add question',
            maxWidth: "sm",
            fullWidth: true,
            noFooter: true,
        })
        setOpen(true)
    }

    const handleEdit = (eventId) => {
        // props.history.push(`/survey/${eventId}`)
        setFullDialogProps({
            handleFullClose,
            DialogContent:
                <>
                    <Button variant="contained" color="primary" style={{ marginBottom: "12px" }} onClick={handleAddQuestion}>Add Question</Button>
                    <div className="questions-container">
                        <Question
                            id="1"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                            handleQuestionDelete={handleQuestionDelete}
                            handleQuestionEdit={handleQuestionEdit}
                        />
                        <Question
                            id="2"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                            handleQuestionDelete={handleQuestionDelete}
                            handleQuestionEdit={handleQuestionEdit}
                        />
                        <Question
                            id="3"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                            handleQuestionDelete={handleQuestionDelete}
                            handleQuestionEdit={handleQuestionEdit}
                        />
                        <Question
                            id="4"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                            handleQuestionDelete={handleQuestionDelete}
                            handleQuestionEdit={handleQuestionEdit}
                        />
                        <Question
                            id="5"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good", "Not good at all"]}
                            handleQuestionDelete={handleQuestionDelete}
                            handleQuestionEdit={handleQuestionEdit}
                        />
                    </div>
                </>,
            close: "Close",
            title: eventId,
            eventId,
        })
        setFullOpen(true);
    }

    const handleQuestionDelete = (eventId) => {
        setChildProps({
            handleClose,
            DialogContent: <DialogContentText id="alert-dialog-description">
                Deleting this will remove this Survey question. Are you sure you want to delete this question?
                            </DialogContentText>,
            buttons: [<Button onClick={handleClose} color="primary">
                Cancel
                    </Button>,
            <Button onClick={() => handleQuestionDeleteConfirm(eventId)} color="primary" autoFocus>
                Confirm
                    </Button>],
            dividers: false,
            title: 'Confirm Delete',
            eventId,
            maxWidth: "sm",
        })
        setOpen(true);
    }

    const handleQuestionDeleteConfirm = (eventId) => {
        console.log(eventId)
        setOpen(false)
    }

    const handleQuestionEdit = (eventId) => {
        const ques = {
            question: "How was the event ?",
            options: ["It was good", "It was moderate", "It was not so good"]
            // options:[]
        }

        setChildProps({
            handleClose,
            DialogContent: <DialogContentText id="alert-dialog-description">
                <AddQuestionContent setFooter ques={ques} handleEditSave={handleEditSave} />
            </DialogContentText>,
            dividers: true,
            title: 'Add question',
            maxWidth: "sm",
            fullWidth: true,
            noFooter: true,
        })
        setOpen(true)
    }

    const handleEditSave = (values) => {
        console.log(values)
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleFullClose = () => {
        setFullOpen(false);
    };

    const handleDeleteConfirm = () => {
        setOpen(false);
    }

    const handleDelete = (eventId) => {
        console.log(eventId)
        setChildProps({
            handleClose,
            DialogContent: <DialogContentText id="alert-dialog-description">
                Deleting this will remove all the Survey questions associated with this event. Are you sure you want to delete?
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

    return (
        <div>
            <Toolbar />
            <MaterialDialog open={open} {...childProps} />
            <FullScreenDialog open={fullOpen} handleClose={handleFullClose} {...fullDialogProps} />
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
                                    <IconButton color="primary" onClick={(e) => handleEdit(row.name)} >
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton className="icons" color="primary" aria-label="delete button" component="span" onClick={(e) => handleDelete(row.name)}>
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
