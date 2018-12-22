import React, {Component} from 'react'
import classes from './NotesBook.css'


class NotesBook extends Component {
    render() {
        return (
            <div className={classes.NotesBook}>
                <div className={classes.Card}>
                    <p>New Board</p>
                    <input></input>
                    <button>Create</button>
                </div>
            </div>
        )
    }
}

export default NotesBook