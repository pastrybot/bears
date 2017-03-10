//container component - renders the correct view based on UI

import React from 'react';
import Home from './Home';
import ViewBearsContainer from './ViewBearsContainer';
import PostBearsContainer from './PostBearsContainer';
import EditBearsContainer from './EditBearsContainer';


var BearsApp = React.createClass({
  //set up the UI state
  getInitialState: function (){
    return(
      {
        activeComp: 'home',
        activeID: null
      }
    )
  },
  //updates the state variables
  setActiveComp : function (field, val){
    var newData = {};
    newData[field] = val;
    this.setState(newData);
  },
  //change the viewed component based on the state
  renderProperComp: function(){
    if (this.state.activeComp ==="home"){
      return (<Home setActiveComp={this.setActiveComp} />);
    } else if (this.state.activeComp === 'viewAll') {
      return (<ViewBearsContainer setActiveComp={this.setActiveComp} />);
    } else if (this.state.activeComp === 'postNew') {
        return (<PostBearsContainer setActiveComp={this.setActiveComp} />);
    } else if (this.state.activeComp === 'edit') {
      return (<EditBearsContainer setActiveComp={this.setActiveComp} />);
    }
  },
  render: function (){
    return (
      <div>
        {this.renderProperComp()}
      </div>
    );
  }
});

export default BearsApp;
