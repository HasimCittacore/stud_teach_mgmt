import React from "react";
import "./App.css";
import {Admin,Resource} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from "./components/Dashboard";
import StudentList from "./components/StudentList";
import StudentEdit from "./components/StudentEdit";
import StudentCreate from "./components/StudentCreate";
import TeacherList from "./components/TeacherList";
import EditTeacher from "./components/EditTeacher";
import CreateTeacher from "./components/CreateTeacher";

function App() {
 
  return (
    
    <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('http://localhost:3000')}>
      <Resource 
                name="students"
                 list={StudentList} 
                 create={StudentCreate} 
                 edit={StudentEdit} 
                 />

      <Resource 
                name="teachers"
                 list={TeacherList} 
                 create={CreateTeacher} 
                 edit={EditTeacher} 
                 />
      

     

    </Admin>
    
  );
}

export default App;
