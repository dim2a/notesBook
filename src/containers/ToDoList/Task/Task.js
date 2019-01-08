import React, {Component} from 'react'
import classes from './Task.css'

class Task extends Component {

    togleTaskStatus = () => {
        var task = {...this.props.task}
        task.isDone = !task.isDone
        
        this.props.updateCallBack(task)
    }

    render() {
        return(
            <div className={classes.Task}>
            <div className={this.props.task.isDone ? classes.active : ''}>
                <input type="checkbox"
                    checked={this.props.task.isDone}
                    onChange={this.togleTaskStatus} />
                {this.props.task.title}
                <span onClick={() => {this.props.deleteCallback(this.props.task.id)}}>X</span>
            </div>
            </div>
        )
    }
}

export default Task