import React, { useEffect, useState } from 'react'
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formState;

  useEffect( () => {
    console.log('hey!!');
  }, []);

  useEffect( () => {
    console.log('formState cambio');
  }, [formState]);

  useEffect( () => {
    console.log('email cambio');
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }

  return (
    <>
      <h1> UseEffect </h1>
      <hr />

      <div className="form-group">
        <input 
          type="text"
          name="name"
          className="form-control"
          placeholder="Ingresa tu nombre"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
       </div>

       <div className="form-group">
        <input 
          type="text"
          name="email"
          className="form-control"
          placeholder="Ingresa tu correo"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { (name === '123') && <Message /> }
    </>
  ) 
}

export default SimpleForm
