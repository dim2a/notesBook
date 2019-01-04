import React, {Component} from 'react'
import classes from './Task.css'

class Task extends Component {
    state = {
        task: this.props.task
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
                <input type="checkbox"
                    checked={this.state.task.isDone}
                    onChange={this.togleTaskStatus} />
                {this.props.index}{this.state.task.title}
                <span onClick={() => {this.props.deleteCallback(this.state.task.id)}}>X</span>
            </div>
        )
    }
}

export default Task