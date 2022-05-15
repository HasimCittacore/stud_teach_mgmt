import React from 'react'
import {Create,SimpleForm,TextInput,DateInput} from "react-admin"
const StudentCreate = (props) => {
  return (
    <div><Create title="Create a Student"{...props}>
        <SimpleForm>
            <TextInput source="id"/>
            <TextInput source="name"/>
            <TextInput source="course"/>
            <TextInput source="email"/>
            <DateInput source="joinedAt"/>
            <TextInput source="batchNo"/>
        </SimpleForm>
        </Create>
        </div>
  )
}

export default StudentCreate