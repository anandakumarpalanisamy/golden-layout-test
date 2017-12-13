import React, {Component} from 'react';

import '../index.css'


export default class HomeComponent extends Component{
  render(){
    console.log(this.props)
    return(
      <div className="hello">
        <h4>{this.props.label}</h4>
        <h4>{this.props.order}</h4>
      </div>
    )
  }
}
