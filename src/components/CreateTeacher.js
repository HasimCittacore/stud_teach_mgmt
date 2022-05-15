import React from 'react'
import {Create,SimpleForm,TextInput} from "react-admin"
const CreateTeacher = (props) => {
  return (
    <div><Create title="Add a Teacher to the List"{...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="expertise"/>
            <TextInput source="assignedto"/>
            <TextInput source="email"/>
        </SimpleForm>
        </Create>
        </div>
  )
}

export default CreateTeacher