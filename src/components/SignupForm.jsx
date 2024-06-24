
import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/signup', {
        username,
        email,
        password,
      });
      console.log('Usuario registrado:', response.data);
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      setErrorMessage('Error al registrar usuario. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Registro</h2>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default SignupForm;
