import React, {Component} from 'react'
import classes from './TasksList.css'
import Task from '../Task/Task'

class TasksList extends Component {



    render() {
        return(
            <div className={classes.TasksList}>
                {this.props.tasks.map((task) => {
                    return <Task task={task}
                        deleteCallback={this.props.onDelete}
                        key={task.id} />                                
                })}
            </div>
        )
    }

}

export default TasksList