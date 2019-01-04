import React, { Component } from 'react'
import classes from './ToDoList.css'
import Footer from './Footer/Footer'
import TaskCreator from './TaskCreator/TaskCreator'
import TasksList from './TasksList/TasksList'

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

    deleteTask = (taskId) => {
        const newTaskList = this.state.tasks.filter(t => {
                return t.id !== taskId            
        })
        this.setState({tasks: newTaskList})
    }

    render() {
        return (
            <div className={classes.ToDoList}>  
                <TaskCreator createCallback={this.createNewTask} />
                <TasksList tasks={this.state.tasks} onDelete={this.deleteTask}/>                
                <Footer />
            </div>
        )
    }

}

export default ToDoList