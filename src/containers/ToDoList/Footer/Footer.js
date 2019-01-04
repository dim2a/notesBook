import React, {Component} from 'react'
import classes from './Footer.css'

class Footer extends Component {
    render(){
        return(
            <div className={classes.Footer}>
                <span>5 items left</span>
                <div className={classes.buttons}>
                    <button className={classes.active}>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <button>Clear completed</button>
            </div>
        )
    }
}

export default Footer