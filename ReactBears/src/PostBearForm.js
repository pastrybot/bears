import React from 'react';
import { Form, Button, FormControl} from 'react-bootstrap';

var PostBearForm = function(props){
  return (
    <div>
      <Form>
        <FormControl type="text" placeholder="name" onChange={(event) => props.onChangeHandler('name', event.target.value)}/>
        <FormControl type="text" placeholder="species" onChange={(event) => props.onChangeHandler('species', event.target.value)}/>
        <FormControl type="text" placeholder="age" onChange={(event) => props.onChangeHandler('age', event.target.value)}/>
        <FormControl type="text" placeholder="weight" onChange={(event) => props.onChangeHandler('weight', event.target.value)}/>
        <FormControl type="text" placeholder="location" onChange={(event) => props.onChangeHandler('location', event.target.value)}/>
        <FormControl type="text" placeholder="attitude" onChange={(event) => props.onChangeHandler('attitude', event.target.value)}/>
      </Form>
      <Button bsStyle="success" onClick={() => props.onSubmitHandler()}> </Button>
    </div>
  );
}
export default PostBearForm;
