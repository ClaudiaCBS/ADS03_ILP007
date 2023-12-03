/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Navigate serve para navegar entre paginas
import { useNavigate } from "react-router-dom";

export default function BarraNavegacao(props) {

    // Declarando a função navigate
    const navigate = useNavigate()

    const gerarListaBotoes = () => {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map(valor =>
                <li key={valor} className="nav-item">
                    {/* Incluiu o navigate para navegar para pagina do botão */}
                    <a className="nav-link" onClick={(e) =>  navigate('/' + valor)} style={{cursor: "pointer" }}>{valor}</a>
                </li>
            )
            return lista
        }
    }

    let tema = props.tema
    return (
        <>
            <nav className="navbar navbar-expand-lg" data-bs-theme="light" style={{ backgroundColor: tema, marginBottom: 10 }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">PetLovers</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {gerarListaBotoes()}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}