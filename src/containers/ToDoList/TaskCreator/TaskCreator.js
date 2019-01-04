import React, {Component} from 'react'
import classes from './TaskCreator.css'

class TaskCreator extends Component {
    
    newIndex = 2

    createNewTask = e => {
        if (e.key === 'Enter') {
            const newTask =  {
                    title: e.currentTarget.value,
                    isDone: false,
                    id: this.newIndex
                }
            
                this.props.createCallback(newTask)

            e.currentTarget.value = ''
            this.newIndex++
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