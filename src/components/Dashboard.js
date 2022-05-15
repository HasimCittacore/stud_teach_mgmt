import * as React from "react";
import './Dashboard.css'
import {useNavigate} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Title } from 'react-admin';
export default function Dashboard(){
    const navigate=useNavigate();
    return (
        <div className="dashboard">
    <Card className="card">
        <Title title="Welcome to the Student-Teacher Dashboard" />
        <CardContent className="card_content">Dashboard contains the StudentList and TeacherList.</CardContent>
            <br/><br/>
            <div className="buttons">
            <button onClick={()=>navigate("/students")}>Student Page</button>
            <button onClick={()=>navigate("/teachers")}>Teacher Page</button>
            </div>
            <br/><br/>

            <CardContent className="card_content">List can be edited and created with newly added list </CardContent>

            <CardContent className="card_content">Click on the Students to view the StudentList. </CardContent>

            <CardContent className="card_content">Click on the Teachers to view the TeacherList. </CardContent>
    </Card>
    </div>
    
    )
    };