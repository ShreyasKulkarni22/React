import React, { Component } from 'react'
import CompB from './CompB'

class CompA extends Component {
  render() {
    return (
      <CompB/>
    )
  }
}

export default CompA