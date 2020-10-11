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
import MaterialDialog from './MaterialDialog'
import FullScreenDialog from './FullScreenDialog'
import Button from '@material-ui/core/Button';
import PieChartIcon from '@material-ui/icons/PieChart';
import ResponseLayout from './ResponseLayout'

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

function SurveyResults() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [fullOpen, setFullOpen] = React.useState(false);
    const [childProps, setChildProps] = React.useState()
    const [fullDialogProps, setFullDialogProps] = React.useState()

    const handleClose = () => {
        setOpen(false);
    };

    const handleFullClose = () => {
        setFullOpen(false);
    };

    const handleView = (eventId) => {
        setFullDialogProps({
            handleFullClose,
            DialogContent:
                <>
                    <div className="questions-container">
                        <ResponseLayout
                            id="1"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                        />
                        <ResponseLayout
                            id="2"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                        />
                        <ResponseLayout
                            id="3"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                        />
                        <ResponseLayout
                            id="4"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good"]}
                        />
                        <ResponseLayout
                            id="5"
                            question="How was the event ?"
                            options={["It was good", "It was moderate", "It was not so good", "Not good at all"]}
                        />
                    </div>
                </>,
            close: "Close",
            title: eventId,
            eventId,
        })
        setFullOpen(true);
    }

    return (
        <div>
            <Toolbar />
            <MaterialDialog open={open} {...childProps} />
            <FullScreenDialog open={fullOpen} handleClose={handleFullClose} {...fullDialogProps} />
            <div className="main-title">
                Survey Results
            </div>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Event Name</TableCell>
                            <TableCell align="center">Created On</TableCell>
                            <TableCell align="center">Participants</TableCell>
                            <TableCell align="center">Responses</TableCell>
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
                                    {row.phone}
                                </TableCell>
                                <TableCell align="center">
                                    <IconButton className="icons" color="primary" aria-label="delete button" component="span" onClick={(e) => handleView(row.name)}>
                                        <PieChartIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default SurveyResults
