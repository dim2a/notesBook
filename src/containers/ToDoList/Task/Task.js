import React, { Component } from 'react'
import classes from './Task.css'
import { updateTask } from '../../../services/services';

class Task extends Component {

    state = {
        editMode: false,
        title: this.props.task.title
    }

    togleTaskStatus = () => {
        var task = { ...this.props.task }
        task.isDone = !task.isDone

        updateTask(26901, task.id, task.title, task.isDone)
            .then(data => {
                this.props.updateCallBack(task)
            })
    }

    changeTitle = e => {
        console.log('changeTitle')
        this.setState({
            title: e.currentTarget.value
        })
    }

    goToEditMode = () => {
        console.log('goToEditMode')
        this.setState({editMode: true})
    }

    saveTitle = e => {
        console.log('saveTitle')
        const newTitle = e.currentTarget.value

        var task = { ...this.props.task }
        task.title = newTitle

        updateTask(2901, task.id, newTitle, null)
            .then(data => {
                this.setState({editMode: false})
                this.props.updateCallBack(task)
            })
    }

    render() {
        const {isDone} = this.props.task
        const {title} = this.state
        return (
            <div className={classes.Task}>
                <div className={isDone ? classes.active : ''}>
                    <input type="checkbox"
                        checked={isDone}
                        onChange={this.togleTaskStatus} />
                    {this.state.editMode ? 
                        <input value={title} onChange={this.changeTitle} onBlur={this.saveTitle}/> :
                        <span onDoubleClick={this.goToEditMode}>{title}</span>}                    
                    <span onClick={() => { this.props.deleteCallback(this.props.task.id) }}>X</span>
                </div>
            </div>
        )
    }
}

export default Task