import React from 'react'
import {List,Datagrid,TextField,EditButton,DeleteButton, EmailField, DateField} from "react-admin"
function StudentList(props) {
  return (
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <EmailField source="email"/>
            <TextField source="course"/>
            <TextField source='batchNo'/>
            <DateField source='joinedAt'/>
            <EditButton basepath="/students"/>
            <DeleteButton basepath="/students"/>
        </Datagrid>

    </List>
  )
}

export default StudentList