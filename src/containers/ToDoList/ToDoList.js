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
        ],
        filter: 'all'
    }

    putTaskToState = task => {
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

    changeTaskStatus = task => {
        const newTaskList = [...this.state.tasks]
        newTaskList.forEach((t) => {
            if (t.id === task.id) {
                t.isDone = task.isDone
                return
            }
        })
        this.setState({tasks: newTaskList})
    }

    changeFilter = filterValue => {
        this.setState({filter: filterValue})
    }

    clearCompleted = () => {
        this.setState({tasks: this.state.tasks.filter(t => !t.isDone)})
    }

    render() {
        const {tasks, filter} = this.state
        var filteredTasks = []

        if (filter ==='all') filteredTasks = tasks
        if (filter ==='active') filteredTasks = tasks.filter(t => !t.isDone)
        if (filter ==='completed') filteredTasks = tasks.filter(t => t.isDone)
        

        return (
            <div className={classes.ToDoList}>  
                <TaskCreator createCallback={this.putTaskToState} />
                <TasksList tasks={filteredTasks}
                onUpdate={this.changeTaskStatus}
                onDelete={this.deleteTask}/>                
                <Footer tasks={tasks}
                    filter={filter}
                    changeFilterCallback={this.changeFilter}
                    clearCompletedCallback={this.clearCompleted} />
            </div>
        )
    }

}

export default ToDoList