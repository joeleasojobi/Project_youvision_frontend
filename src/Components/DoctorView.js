import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'
import React, { Component } from 'react'

export default class DoctorView extends Component {

    state = {
        doctors: []
    }

    componentDidMount() {
        this.fetchDoctors()
    }

    fetchDoctors = () => {
        axios.get("https://doctors-student-app.herokuapp.com/doctor/getdoctors").then((response) => {
            console.log(response.data);
            this.setState({
                doctors: response.data
            })

        })
    }
    handle = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h1>Doctor List</h1>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Doctors Name</TableCell>
                                        <TableCell>Qualification</TableCell>
                                        <TableCell>Specialization</TableCell>
                                        <TableCell>Option to Contact</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.doctors.map((value, index) => {
                                        return <TableRow>
                                            <TableCell>{value.name}</TableCell>
                                            <TableCell>{value.qualification}</TableCell>
                                            <TableCell>{value.specification}</TableCell>
                                            <TableCell><input type="radio" onChange={this.handle} value={value._id} name='doctorId' /></TableCell>
                                        </TableRow>
                                    })}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
