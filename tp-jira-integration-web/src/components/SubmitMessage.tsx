import * as React from 'react';
import { TextField } from '@material-ui/core';
import IServerResponse from '../dataModels/IServerResponse';
import ServerResponseStore from '../stores/ServerResponseStore';
import './SubmitMessage.less';

interface State {
    serverResponse: IServerResponse;
}
class SubmitMessage extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = this._getStateFromStores();
        ServerResponseStore.addChangeListener(() => this._onChange());
    }

    componentWillUnmount() {
        ServerResponseStore.removeChangeListener(() => this._onChange());
    }

    render() {
        return (
            <div className='submit-message'>
                <TextField className='submit-message-text'
                    label="Submit result"
                    multiline
                    rows="4"
                    InputProps={{
                        readOnly: true,
                    }}
                    value={`CODE: ${this.state.serverResponse.statusCode} \nMESSAGE: ${this.state.serverResponse.message}`}
                    variant="outlined"
                />

            </div >
        );
    }

    _onChange() {
        const state = this._getStateFromStores();
        this.setState(state);
    }

    _getStateFromStores(): State {
        const serverResponse = ServerResponseStore.getState();
        const state: State = { serverResponse };
        return state;
    }
}

export default SubmitMessage;