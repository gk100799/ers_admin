import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

function Question(props) {
    return (
        <div className="question-root">
            <div className="question">
                <div className="question-heading"><p>Question:</p> <p style={{ marginLeft: 5 }}>{props.question}</p></div>
                <div className="options" >{props.options.map((option, index) => (
                    <p>{index + 1}. {option} </p>
                ))}
                </div>
            </div>
            <div className="question-hover">
                {/* <EditIcon style={{ color: 'white' }} fontSize="large" /> */}
                {/* <DeleteIcon style={{ color: 'white' }} fontSize="large" /> */}
                <IconButton className="edit-button icons" color="primary" aria-label="edit button" component="span" onClick={(e) => props.handleEdit(props.id)}>
                    <EditIcon style={{ color: 'white' }} fontSize="large" />
                </IconButton>
                <IconButton className="icons" color="primary" aria-label="delete button" component="span" onClick={(e) => props.handleDelete(props.id)}>
                    <DeleteIcon style={{ color: 'white' }} fontSize="large" />
                </IconButton>
            </div>
        </div>
    )
}

export default Question
