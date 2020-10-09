import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';

function SurveyQuestions(props) {

    const handleAddQuestion = () => {

    }
    return (
        <div>
            <Toolbar />
            <div className="main-title">
                {props.match.params.eventId}
            </div>
            <Button variant="contained" color="primary" style={{ marginBottom: "12px" }} onClick={handleAddQuestion}>Add Question</Button>
            
        </div>
    )
}

export default SurveyQuestions
