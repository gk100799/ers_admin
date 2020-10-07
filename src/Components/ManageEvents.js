import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import { Button } from '@material-ui/core'
import MaterialTable from './MaterialTable'
function ManageEvents(props) {
    return (
        <div>
            <Toolbar />
            <div className="main-title">
                Manage Events
            </div>
            <MaterialTable />
        </div>
    )
}

export default ManageEvents
