import React from 'react'
import {List,Datagrid,TextField,EditButton,DeleteButton, EmailField} from "react-admin"
function TeacherList(props) {
  return (
      
    <List {...props}>
        <Datagrid>
            <TextField source="id"/>
            <TextField source="name"/>
            <EmailField source="email"/>
            <TextField source="expertise"/>
            <TextField source="assignedto"/>
            <EditButton basepath="/teachers"/>
            <DeleteButton basepath="/teachers"/>
        </Datagrid>

    </List>
    
  )
}

export default TeacherList