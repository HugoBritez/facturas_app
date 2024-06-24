
import React from 'react';
import SignupForm from './components/SignupForm';
import LoginForm from './components/Login';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Registro e Inicio de Sesión</h1>
      </header>
      <main>
        <SignupForm />
        <LoginForm />
      </main>
    </div>
  );
};

export default App;
