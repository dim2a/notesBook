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

    changeFilter = (filterValue) => {
        console.log(filterValue)
        this.setState({filter: filterValue})
    }

    render() {
        const {tasks, filter} = this.state
        return (
            <div className={classes.ToDoList}>  
                <TaskCreator createCallback={this.putTaskToState} />
                <TasksList tasks={tasks}
                onUpdate={this.changeTaskStatus}
                onDelete={this.deleteTask}/>                
                <Footer tasks={tasks}
                    filter={filter}
                    changeFilterCallback={this.changeFilter} />
            </div>
        )
    }

}

export default ToDoList