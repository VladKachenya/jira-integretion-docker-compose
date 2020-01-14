import { FluxStore } from "./FluxStore";
import Flux from 'flux';

import IServerResponse from 'dataModels/IServerResponse';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class ServerResponseStore extends FluxStore<IServerResponse> {
    constructor(dispatcher: Flux.Dispatcher<any>) {
        super(dispatcher, () => {
            return {
                message: "",
                statusCode: ""
            }
        });
    }

    getState(): IServerResponse {
        return this._state
    }

    _onDispatch(action: any) {
        switch (action.type) {
            case AppConstants.PROJECTS_LOAD_SUCCESS:
                this._state.message = "OK!";
                this._state.statusCode = "200";
                this.emitChange();
                break;
            case AppConstants.PROJECTS_LOAD_FAIL:
                this._state.message = action.items.response.statusText;
                this._state.statusCode = action.items.response.status;
                this.emitChange();
                break;
        }
    }
}

const serverResponseStoreInstance = new ServerResponseStore(AppDispatcher);
export default serverResponseStoreInstance;