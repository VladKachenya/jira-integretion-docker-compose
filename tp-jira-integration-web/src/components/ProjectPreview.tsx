import * as React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IProject from '../dataModels/IProject';
import ListItem from '@material-ui/core/ListItem';

import './ProjectPreview.less';

interface Props {
    project: IProject;
}

class ProjectPreview extends React.Component<Props, any> {
    constructor(project: Props) {
        super(project);
    }

    render() {
        return (
            <ListItem className="ProjectPreview">
                <ListItemAvatar>
                    <Avatar alt={this.props.project.projectKey} src={this.props.project.avatarUrl}>
                        {this.props.project.projectKey}
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={this.props.project.projectName} secondary={`Project type: ${this.props.project.projectType}`} />
            </ListItem>
        );
    }
}

export default ProjectPreview;