import React from 'react';
import { connect } from 'react-redux';


const UserList = (props) => {
    //console.log('UserList::render', props)
    
    return (
        <ul className="user-list">
        <div>{(props.loading) ? 'Loading.....': 'Loaded'}</div>
        {props.users && props.users.map((item, i)=>{
            return <li key={i} className="user">{item.login}</li>
        })}
           
        </ul>
    )
}
const mapStateToProps = (state) => {
    return {
        users: state.users.list,
        loading: state.users.loading
    }
}
export default connect(mapStateToProps)(UserList);