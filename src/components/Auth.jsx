import React, { useState, useEffect } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "../config/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Auth = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    return onAuthStateChanged(auth, setUser);
  }, [setUser]);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");

    try {
      isRegistering
        ? await createUserWithEmailAndPassword(auth, email, password)
        : await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado. Intenta iniciar sesión.");
      } else if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta. Inténtalo de nuevo.");
      } else if (error.code === "auth/user-not-found") {
        setError("No existe una cuenta con este correo.");
      } else {
        setError("Ocurrió un error. Verifica tus datos e inténtalo nuevamente.");
      }
    }
  };

  return (
    <div className="auth-container">
      {auth.currentUser ? (
        <>
          <p>Bienvenido, {auth.currentUser.email}</p>
          <button onClick={() => signOut(auth)}>Cerrar Sesión</button>
        </>
      ) : (
        <form onSubmit={handleAuth}>
          <h3>{isRegistering ? "Registrarse" : "Iniciar Sesión"}</h3>
          {error && <p className="error">{error}</p>}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">{isRegistering ? "Registrarse" : "Iniciar Sesión"}</button>
          <p onClick={() => setIsRegistering(!isRegistering)} className="toggle">
            {isRegistering ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
          </p>
        </form>
      )}
    </div>
  );
};

export default Auth;
