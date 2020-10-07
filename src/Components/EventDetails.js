import React from 'react'
import TextField from '@material-ui/core/TextField';

function EventDetails() {
    return (
        <div>
            <TextField
                id="standard-full-width"
                label="Name"
                style={{ margin: 8 }}
                // placeholder={undefined}
                // helperText="Full width!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                label="Description"
                style={{ margin: 8 }}
                // placeholder="Event Name"
                // helperText="Full width!"
                fullWidth
                multiline
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                label="Venue"
                style={{ margin: 8 }}
                // placeholder="Event Name"
                // helperText="Full width!"
                // fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                label="Date"
                style={{ margin: 8 }}
                // placeholder="Event Name"
                // helperText="Full width!"
                // fullWidth
                type="date"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                label="Time"
                style={{ margin: 8 }}
                // placeholder="Event Name"
                // helperText="Full width!"
                // fullWidth
                type="time"
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                label="Fee"
                style={{ margin: 8 }}
                // placeholder="Event Name"
                // helperText="Full width!"
                // fullWidth
                margin="normal"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                id="standard-full-width"
                label="Organizers"
                style={{ margin: 8 }}
                // placeholder="Event Name"
                // helperText="Full width!"
                // fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    )
}

export default EventDetails