import React, { Component } from 'react'
import classes from './ToDoList.css'
import Task from './Task/Task'
import Footer from './Footer/Footer'
import TaskCreator from './TaskCreator/TaskCreator'

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

    createNewTask = task => {
        this.setState({
            tasks: [...this.state.tasks, task]
        })
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
                <TaskCreator createCallback={this.createNewTask} />                  
                <div className={classes.tasks}>
                    {this.state.tasks.map((task) => {
                        return <Task task={task} deleteCallback={this.deleteTask} key={task.id} />                                
                    })}
                </div>
                <Footer />
            </div>
        )
    }

}

export default ToDoList