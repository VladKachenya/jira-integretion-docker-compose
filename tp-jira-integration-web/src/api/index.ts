import ICredentials from '../dataModels/ICredentials';
import axios from 'axios';
import ApiConstants from '../constants/ApiConstants'


const getProjectsData = (crelentils: ICredentials): Promise<any> => {
    return axios.post(ApiConstants.PROJECTS_SERVER_ADDRESS + ApiConstants.PROJECTS_END_POINT, crelentils);
};

export default { getProjectsData };