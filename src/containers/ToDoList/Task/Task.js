import React, {Component} from 'react'
import classes from './Task.css'

class Task extends Component {
    state = {
        task: this.props.task
    }

    parrentDeleteCallback = this.props.deleteCallback

    deleteTask = () => {
        this.parrentDeleteCallback(this.state.task.id)
    }

    togleTaskStatus = () => {
        let newTask = {
            ...this.state.task,
            isDone: !this.state.task.isDone
        }
        this.setState({
            task: newTask
        })
    }

    render() {
        return(
            <div className={classes.Task}>
                <input type="checkbox" checked={this.state.task.isDone} onClick={this.togleTaskStatus} />
                {this.props.index}{this.state.task.title}
                <span onClick={this.deleteTask}>X</span>
            </div>
        )
    }
}

export default Task