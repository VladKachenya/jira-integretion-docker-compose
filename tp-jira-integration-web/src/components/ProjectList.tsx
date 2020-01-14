import * as React from 'react';
import ProjectPreview from './ProjectPreview';
import { List } from '@material-ui/core';
import IProject from '../dataModels/IProject';
import ProjectStore from '../stores/ProjectStore';

import './ProjectList.less';

interface State {
    projects: IProject[];
}

class ProjectList extends React.Component<any, State> {
    constructor(props: any) {
        super(props);
        this.state = this._getStateFromStores();
        ProjectStore.addChangeListener(() => this._onChange());
    }

    componentWillUnmount() {
        ProjectStore.removeChangeListener(() => this._onChange());
    }

    render() {
        return (
            <div className='project-list'>
                <h3>Projects</h3>
                <List >
                    {
                        this.state.projects.map((project, index) =>
                            <ProjectPreview key={index} project={project} />
                        )
                    }
                </List >
            </div >
        );
    }

    _onChange() {
        const state = this._getStateFromStores();
        this.setState(state);
    }

    _getStateFromStores(): State {
        const projects = ProjectStore.getState();
        const state: State = { projects };
        return state;
    }
}

export default ProjectList;