import * as React from 'react';
import "./Credentials.less";
import { TextField, FormControl, Button, Grid } from '@material-ui/core';
import loadProjectList from '../actions/ProjectsAction';
import ICredentials from '../dataModels/ICredentials';

interface State {
    credentials: ICredentials;
}


class Credentials extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            credentials: {
                url: "user.atlassian.net",
                email: "user@user.user",
                token: "user"
            }
        }
        this._onProductUrlChange = this._onProductUrlChange.bind(this);
        this._onUserEmailChange = this._onUserEmailChange.bind(this);
        this._onAccessTokenChange = this._onAccessTokenChange.bind(this);
        this._onClick = this._onClick.bind(this);
    };


    render() {
        return (
            <Grid className='credential' container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <h3>
                    Credentials
                </h3>
                <FormControl className="credential-text-input">
                    <TextField onChange={this._onProductUrlChange} label="Product url" value={this.state.credentials.url} variant="filled" className="" />
                    <TextField onChange={this._onUserEmailChange} label="User email" value={this.state.credentials.email} variant="filled" className="" />
                    <TextField onChange={this._onAccessTokenChange} label="Access token" value={this.state.credentials.token} variant="filled" className="" />
                    <Button disabled={false} onClick={this._onClick} variant="contained" color="primary" className="credential-text-input-submit">
                        <span>submit</span>
                    </Button>
                </FormControl>
            </Grid>
        );
    }

    _onClick() {
        loadProjectList(this.state.credentials);
    }

    _onProductUrlChange(event: any) {
        const credentials = this.state.credentials;
        credentials.url = event.target.value;
        this.setState({ credentials: credentials });
    }

    _onUserEmailChange(event: any) {
        const credentials = this.state.credentials;
        credentials.email = event.target.value;
        this.setState({ credentials: credentials });
    }

    _onAccessTokenChange(event: any) {
        const credentials = this.state.credentials;
        credentials.token = event.target.value;
        this.setState({ credentials: credentials });
    }
}

export default Credentials;