import React from 'react'
import {Edit,SimpleForm,TextInput,DateInput} from "react-admin"
const StudentEdit = (props) => {
  return (
    <div><Edit title="Edit Student List"{...props}>
        <SimpleForm>
            <TextInput disabled source="id"/>
            <TextInput source="name"/>
            <TextInput source="course"/>
            <TextInput source="email"/>
            <DateInput source="joinedAt"/>
            <TextInput source="batchNo"/>
        </SimpleForm>
        </Edit>
        </div>
  )
}

export default StudentEdit