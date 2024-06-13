import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class CompC extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (value)=>{
                    return <div>Hello {value}</div>
                }
            }
            
        </UserConsumer>
    )
  }
}

export default CompC