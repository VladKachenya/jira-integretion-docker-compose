import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import ICredentials from '../dataModels/ICredentials';

import api from '../api';

export default (credentials: ICredentials) => {
    api.getProjectsData(credentials)
        .then(response => {
            AppDispatcher.dispatch({
                type: AppConstants.PROJECTS_LOAD_SUCCESS,
                items: response.data
            });
        })
        .catch( (err: Error) => {
            AppDispatcher.dispatch({
                type: AppConstants.PROJECTS_LOAD_FAIL,
                items: err
            });
        });
};
