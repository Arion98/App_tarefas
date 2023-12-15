/* eslint-disable no-unused-vars */
import styles from "../styles/Input.module.css"
import { Link } from "react-router-dom"
import {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { api } from "../../config_axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
    const {register, handleSubmit, reset} = useForm();
    const [tarefas, setTarefas] = useState([]);
    const [aviso, setAviso] = useState("");

    const salvar = async (campos) => {
        try {
          const response = await api.post("usuarios", campos);
          setAviso(`Tarefa cadastrada com sucesso!`);
        } catch (error) {
          setAviso("Erro ao cadastrar tarefa!");
        }
      };

    return(
        <div className={styles.container}>
                  <h1>Novo usuário</h1>
        <form onSubmit={handleSubmit(salvar)}>
        <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
            <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="img-fluid"
            alt="Sample image"
            />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        
            {/* <!-- Name input --> */}
        <div className="form-outline mb-4">
            <input 
            type="text" 
            id="username" 
            className="form-control form-control-lg"
            placeholder="Enter a valid Name address"
            {...register("username")} />
            <label className="form-label" htmlFor="username">UserName address</label>
          </div>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input 
            type="email" 
            id="email" 
            className="form-control form-control-lg"
            placeholder="Enter a valid email address"
            {...register("email")} />
            <label className="form-label" htmlFor="email">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-3">
            <input 
            type="password" 
            id="senha" 
            className="form-control form-control-lg"
            placeholder="Enter password"
            {...register("senha")}
            autoComplete="current-password" />
            <label className="form-label" htmlFor="senha">Password</label>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            {/* <!-- Checkbox --> */}
            <div className="form-check mb-0">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label className="form-check-label" htmlFor="form2Example3">
                Remember me
              </label>
            </div>
            <button className={styles.register}>Registrar</button>
            <Link to="/">
            <button className={styles.back} >Voltar</button>
            </Link>
            
          </div>
          <div className={styles.menssage}>{aviso}</div>
          

      
      </div>
    </div>
  </div>
  
    
    {/* <!-- Copyright --> */}
    
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    <div>
      
    </div>
    {/* <!-- Right --> */}
  
</section>
        </form>
        
        </div>
    )
}

export default Register