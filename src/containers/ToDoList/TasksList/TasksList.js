import React from 'react'
import classes from './TasksList.css'
import Task from '../Task/Task'

const TasksList = props => {
    
    return(
        <div className={classes.TasksList}>
            {props.tasks.map((task) => {
                return <Task task={task}
                    updateCallBack={props.onUpdate}
                    deleteCallback={props.onDelete}
                    key={task.id} />                                
            })}
        </div>
    )
}

export default TasksList