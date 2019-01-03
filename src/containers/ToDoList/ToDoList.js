import React, { Component } from 'react'
import classes from './ToDoList.css'
import Task from './Task/Task'

class ToDoList extends Component {

    state = {
        tasks: [
            {
                id: 0,
                title: "learn js",
                isDone: false
            },
            {
                id: 1,
                title: "learn react",
                isDone: false
            }
        ]
    }

    newIndex = 2

    createNewTask = e => {
        if (e.key === 'Enter') {
            this.setState({
                tasks: [...this.state.tasks, {
                    title: e.currentTarget.value,
                    isDone: false,
                    id: this.newIndex
                }]
            })
            e.currentTarget.value = ''
            this.newIndex++
        }
    }

    deleteTask = taskId => {
        this.setState({
            tasks: this.state.tasks.filter(t => {
                return t.id !== taskId
            })
        })
    }

    render() {
        return (
            <div className={classes.ToDoList}>
                <div className={classes.header}>
                    <input onKeyPress={this.createNewTask} />
                    <div className={classes.tasks}>
                        {this.state.tasks.map((task) => {
                            return <Task task={task} deleteCallback={this.deleteTask} key={task.id} />
                        })}
                    </div>
                </div>
            </div>
        )
    }

}

export default ToDoList