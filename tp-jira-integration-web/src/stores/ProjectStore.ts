import { FluxStore } from "./FluxStore";
import Flux from 'flux';

import IProject from 'dataModels/IProject';
import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';

class ProjectStore extends FluxStore<IProject[]> {
    constructor(dispatcher: Flux.Dispatcher<any>) {
        super(dispatcher, () => []);
    }

    getState(): IProject[] {
        return this._state
    }

    _onDispatch(action: any) {
        switch (action.type) {
            case AppConstants.PROJECTS_LOAD_SUCCESS:
                this._state = action.items.map((project: any): IProject => {
                    const res: IProject = {
                        avatarUrl: project.avatarUrl,
                        projectId: project.id,
                        projectKey: project.key,
                        projectName: project.name,
                        projectType: project.projectType
                    }
                    return res;
                });
                this.emitChange();
                break;
            case AppConstants.PROJECTS_LOAD_FAIL:
                this._cleanState();
                this.emitChange();
                break;
        }
    }
}

const projectStoreInstance = new ProjectStore(AppDispatcher);
export default projectStoreInstance;