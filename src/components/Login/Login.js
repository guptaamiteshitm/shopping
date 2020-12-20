import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import './Login.css'

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: 'amiteshitm2011@gmail.com',
            password: '123',
            loggedin: false
        }

    }

    onchange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { username, password } = this.state
        if (username === 'amiteshitm2011@gmail.com' && password === '123') {
            this.setState({ loggedin: true })
        }

    }
    render() {
        if (this.state.loggedin) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <div id="login">
                    <div className="container">
                        <div id="login-row" className="row justify-content-center align-items-center">
                            <div id="login-column" className="col-md-6">
                                <div id="login-box" className="col-md-12">
                                    <form id="login-form" className="form" action method="post" onSubmit={this.handleSubmit}>
                                        <h3 className="text-center text-info">Login</h3>
                                        <div className="form-group">
                                            <label htmlFor="username" className="text-info">Username:</label><br />
                                            <input type="text" name="username"
                                                value={this.state.username} id="username" className="form-control"
                                                onChange={this.onchange} defaultValue='amiteshitm2011@gmail.com' />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password" className="text-info">Password:</label><br />
                                            <input type="password" name="password" id="password" className="form-control" value={this.state.password} onChange={this.onchange} defaultValue='123' />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" name="submit" className="btn btn-info btn-md" defaultValue="submit" />
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

