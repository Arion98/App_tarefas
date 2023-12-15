import { useState } from "react";
import styles from "../styles/Login.module.css";
import { useAuth } from '../Validacion/AuthProvider'
import { api } from "../../config_axios";
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {

  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log()
      if (username.trim() === "" || senha.trim() === "") {
          alert("Preencha todos os campos!");
          return
      }
  
      try {
          const response = await api.post("/login", { username, senha });
          if (response.status === 200) {
              login();
          } else {
              alert("Usuário ou senha inválidos!");
          }
      } catch (error) {
          alert("Usuário ou senha inválidos!");
      }
  };

  return (
    <div className={styles.container}>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbootstrap.com/img/new/textures/full/171.jpg"
                className="img-fluid"
                alt="Phone image"
              />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleSubmit}>
                {/* Email input */}
                <div className="form-outline mb-4">
                  <input
                    type="text"
                    id="username"
                    className="form-control form-control-lg"
                    value={username} onChange={(e) => setUsername(e.target.value)}
                  />
                  <label className="form-label" htmlFor="username">
                    UserName address
                  </label>
                </div>

                {/* Password input */}
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="senha"
                    className="form-control form-control-lg"
                    value={senha} onChange={(e) => setSenha(e.target.value)}
                  />
                  <label className="form-label" htmlFor="senha">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-around align-items-center mb-4">
                  {/* Checkbox */}
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="form1Example3"
                    >
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                  
                    <Link to="/registrar">
                      <div>
                        Not a member? <a href="#!">Register</a>
                      </div>
                    </Link>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Sign in
                </button>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0 text-muted">
                  </p>
                </div>

                
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
