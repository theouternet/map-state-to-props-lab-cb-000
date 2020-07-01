import React, { Component } from 'react';


import { connect } from 'react-redux'



class Users extends Component {

  render() {
    
    const users = this.props.users.map((user, index) => {
      return <li key={index}>{user.username}</li>
    });
    
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

// connect this component to Redux
export default Users
