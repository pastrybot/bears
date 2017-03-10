import React from 'react';
import $ from 'jquery';
import BearsList from './BearsList';

var ViewBearsContainer = React.createClass({
 getInitialState: function(){
   return(
     {
       bears: null
     }
   )
 },
 componentWillMount: function() {
   this.getBearsFromServer();
 },
   getBearsFromServer:function(){
     var self = this;
     $.ajax({
       url: '/api/bears',
       method: 'GET'
     }).done(function(data){
       console.log(data);
       self.setState({bears: data});

     })
  },
 deleteBearHandler: function (id){
   $.ajax({
     url: '/api/bears/' + id,
     method: 'DELETE'
   }).done(function (){
     console.log('Deleted the Bear')
   });
 },
 updateBearHandler: function (id) {
   this.props.setActiveComp("activeID", id);
   this.props.setActiveComp("activeComp", 'edit');
 },
  render (){
    return (
      <div>
        <BearsList bears={this.state.bears ? this.state.bears : []} deleteBearHandler={this.deleteBearHandler} updateBearHandler={this.updateBearHandler}/>
      </div>
    );
  }
});

export default ViewBearsContainer;
