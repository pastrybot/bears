import React from 'react';
import PostBearForm from './PostBearForm';
import $ from 'jquery';

var PostBearsContainer = React.createClass({
  getInitialState: function (){
    return (
      {
        name: null,
        species: null,
        age: null,
        location: null,
        weight: null,
        attitude: null
      }
    );
  },
  onChangeHandler: function (field, value) {
    var newData={};
    newData[field] = value;
    this.setState(newData);
  },
  onSubmitHandler: function() {
    $.ajax({
      url:'/api/bears',
      method: 'POST',
      data: this.state
    }).done(function (data){
      console.log(data);
    });
  },
  render: function (){
    return (
      <div>
        <PostBearForm onChangeHandler={this.onChangeHander} onSubmitHandler={this.onSubmitHandler} />
      </div>
    );
  }
});

export default PostBearsContainer;
