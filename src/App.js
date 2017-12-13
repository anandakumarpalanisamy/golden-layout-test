import React, { Component } from 'react';
import GoldenLayout from 'golden-layout';

import HomeComponent from './components/homeComponent';

import './index.css'




class TestComponent extends Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){

    let arr = [{order: 0, label: 'Hello'}, {order: 1, label: 'Bonjour'}, {order: 2, label: 'Hola'}, {order: 3, label: 'Hunter'}];
    let config = {
      settings:{
        hasHeaders: true,
        constrainDragToContainer: false,
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false
      },
      dimensions: {
        borderWidth: 5,
        minItemHeight: 100,
        minItemWidth: 10,
        headerHeight: 20,
        dragProxyWidth: 300,
        dragProxyHeight: 200
      },
      content: [{
            type: 'row',
            content:[
              {
                type: 'column',
                content:[]
              },
            {
                type: 'column',
                content:[]
            }]
        }]
    };

    let test = arr.map(word => {

      let componentConfig = {
        type:'react-component',
        component: 'HomeComponent',
        props: { label: word.label, order: word.order }
      }

      if(word.order % 2 === 0){
        config.content[0].content[0].content.push(componentConfig);
      }
      else{
        config.content[0].content[1].content.push(componentConfig)
      }

    })


    let myLayout = new GoldenLayout( config, this.node );
    myLayout.registerComponent( 'HomeComponent', HomeComponent );
    myLayout.init();
  }

  render() {
    return (
      <div className="test-div" ref={ref => this.node = ref}>
      </div>
    );
  }
}

export default TestComponent;
