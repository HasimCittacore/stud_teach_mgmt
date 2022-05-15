import React from 'react'
import {Edit,SimpleForm,TextInput} from "react-admin"
const EditTeacher = (props) => {
  return (
    <div><Edit title="Edit a Teacher field"{...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <TextInput source="expertise"/>
            <TextInput source="assignedto"/>
            <TextInput source="email"/>
        </SimpleForm>
        </Edit>
        </div>
  )
}

export default EditTeacher