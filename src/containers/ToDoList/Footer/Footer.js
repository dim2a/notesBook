import React from 'react'
import classes from './Footer.css'

const Footer = props => {

    const { tasks, filter, changeFilterCallback, clearCompletedCallback } = props

    return (
        <div className={classes.Footer}>
            <span>{tasks.filter(t => !t.isDone).length} items left</span>
            <div className={classes.buttons}>
                <button className={filter === 'all' ? classes.selected : ''}
                    data-value='all'
                    onClick={() => { changeFilterCallback('all') }}>
                    All
                </button>
                <button className={filter === 'active' ? classes.selected : ''}
                    data-value='active'
                    onClick={() => { changeFilterCallback('active') }}>
                    Active
                    </button>
                <button className={filter === 'completed' ? classes.selected : ''}
                    data-value='completed'
                    onClick={() => { changeFilterCallback('completed') }}>
                    Completed
                    </button>
            </div>
            <button onClick={clearCompletedCallback}>Clear completed</button>
        </div>
    )
}

export default Footer