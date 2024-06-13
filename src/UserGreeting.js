import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false,
      }
    }
  render() {
    return (
      <div>
        {this.state.isLoggedIn? <div>Welcome User</div> : <div>Welcome Guest</div>}
      </div>
    )
  }
}

export default UserGreeting