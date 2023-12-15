import styles from  "../styles/Tarefas.module.css"

const Tarefas = ({
    id,
    titulo,
    descricao,
    status,
    data_criacao,
    data_limite,
    excluirClick,
    alterarClick
}) => {
   

    return(
        <div className={styles.Container}>
            
               
                    <div className={ styles.category}>
                    <div className={styles.i}>{id}</div>
                    <div className={styles.input}>Titulo:{titulo}</div>
                    <div className={styles.input}>Descrição: {descricao}</div>
                    <div className={styles.input}>Status:{status}</div>
                    <div className="text-center">
                        <i className={`exclui text-danger fw-bold ${styles.excluir}`} title="Excluir" onClick={excluirClick}>&#10008;</i>
                        <i className={`altera text-sucess fw-bold ms-2 ${styles.alterar}`} title="Alterar" onClick={alterarClick}>&#36;</i>
                   
                    </div>
                </div>
            
        </div>
    )
}

export default Tarefas







{/* 

 const [Tarefas, setTarefas] = useState([]);
    const [page, setPage] = useState();
    useEffect(() => {
        fetchTasks();
       }, [page]);
   
       const fetchTasks = async () => {
           const data = await TarefasService.getTarefas(page);
           setTarefas([...Tarefas, ...data]);
       };

<div className={styles.Container}>
            <h1>Lista de tarefas</h1>
        <div className={styles.Border}>
            {Tarefas.map((Tarefas) => (
                <div className={styles.category} key={Tarefas.id}>
                    <div className={styles.input}><p>Titulo: </p>{Tarefas.titulo}</div>
                    <div className={styles.input}><p>Descriçâo: </p>{Tarefas.descricao}</div>
                    <div className={styles.input}><p>Status: </p>{Tarefas.status}</div>
                   <button> excluir  {()=>excluir(Tarefas.id,Tarefas.titulo)}</button>
                    <button>alterar</button>  {()=>alterar(Tarefas.id,Tarefas.titulo)}
                </div>
            
            ))}
        </div>
        </div> */}