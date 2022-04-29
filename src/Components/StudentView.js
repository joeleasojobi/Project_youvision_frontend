import { Grid, Button, TextField } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class StudentView extends Component {

    state = {
        nameStudent: "",
        contactNo: "",
        message: ""
    }



    handle = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitData = () => {
        console.log(this.state);
        axios.post("https://doctors-student-app.herokuapp.com/student/addstudents", this.state).then(
            (response) => {
                console.log(response);
                if (response.data.status === "success") {
                    alert("Something went wrong")
                }
                else {
                    alert("Added Sucessfully")
                }
            })
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <h1>Student Info and Message</h1>
                        <TextField label='Student Name' name='nameStudent' onChange={this.handle} variant='outlined' /><br /><br />
                        <TextField label='Student Contact No' name='contactNo' onChange={this.handle} variant='outlined' /><br /><br />
                        <TextField label='Student Message' name='message' onChange={this.handle} variant='outlined' multiline={true} minRows={3} /><br /><br />
                        <Button variant='contained' onClick={this.submitData} color='primary'>Submit</Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
