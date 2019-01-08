import React, {Component} from 'react'
import classes from './Footer.css'

class Footer extends Component {
    
    handleFilterChanged = e => {
        //console.log(e.currentTarget.dataset.value)
    }
    
    render() {

        const {tasks, filter} = this.props

        return(
            <div className={classes.Footer}>
                <span>{ tasks.filter(t => !t.isDone).length} items left</span>
                <div className={classes.buttons}>
                    <button className={filter === 'all' ? classes.selected : ''}
                        data-value='all'
                        onClick={() => {this.props.changeFilterCallback('all')}}>
                            All
                    </button>
                    <button className={filter === 'active' ? classes.selected : ''}
                        data-value='active'
                        onClick={() => {this.props.changeFilterCallback('active')}}>
                            Active
                     </button>
                    <button className={filter === 'completed' ? classes.selected : ''}
                        data-value='completed'
                        onClick={() => {this.props.changeFilterCallback('completed')}}>
                            Completed
                     </button>
                </div>
                <button>Clear completed</button>
            </div>
        )
    }
}

export default Footer
