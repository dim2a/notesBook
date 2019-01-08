import React, {Component} from 'react'
import classes from './TaskCreator.css'

class TaskCreator extends Component {

    createNewTask = e => {

        const data = new URLSearchParams();
        data.append('widgetId', 2901)
        data.append('title', e.currentTarget.value)
        const newTaskInput = e.currentTarget

        const settings = {
            method: "POST",
            body: data,
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'accept': 'application/json' 
            },
            mode: 'cors'
        }

        if (e.key === 'Enter') {

            fetch(" https://repetitora.net/api/JS/Tasks", settings )
                .then(result => result.json())
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