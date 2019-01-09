import React, {Component} from 'react'
import classes from './TaskCreator.css'
import { createTask } from '../../../services/services';

class TaskCreator extends Component {

    createNewTask = e => {     

        if (e.key === 'Enter') {
            
            const newTaskInput = e.currentTarget
            createTask(newTaskInput.value, 2901)
                .then(data => {
                    const newTask =  {
                        title: data.task.title,
                        isDone: data.task.done,
                        id: data.task.id
                    }
                
                    this.props.createCallback(newTask)
                    newTaskInput.value = ''
                })            
        }            
    }
    
    render() {
        return (
            <div className={classes.TaskCreator}>
                <input onKeyPress={this.createNewTask} />
            </div>
        )
    }
}

export default TaskCreator