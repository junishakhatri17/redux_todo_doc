import React from 'react';
import { connect } from "react-redux";
import {toggleFilter} from '../redux/actions/filter'
import { FILTER } from '../redux/actions/constants';


class Filters extends React.Component {

    toggleCompleted(_filter) {
        this.props.toggleFilter(_filter);
    }
    render() {
        const selected = this.props.selected;
        return (
            <div className='filters'>
                <button className={selected===FILTER.COMPELETED ? 'filter selected' : 'selected'} 
                onClick={()=>this.toggleCompleted(FILTER.COMPELETED)}>COMPLETED</button>
                <button className={selected===FILTER.ALL ? 'filter selected' : 'selected'} 
                onClick={()=>this.toggleCompleted(FILTER.ALL)}>ALL</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selected: state.filter.selected
    }
}

export default connect(mapStateToProps, {toggleFilter})(Filters)