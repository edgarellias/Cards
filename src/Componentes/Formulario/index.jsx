import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
	
	const times = [
		"Programação",
		"Front-end",
		"Data Science",
		"DevOps",
		"UX e Design",
		"Mobile",
		"Inovação e Gestão"
	]

	const aoSalvar = (e) => {
		e.preventDefault();
		console.log("Form foi submetido");

	}

	return (
		<section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dadods para criar o card do Colaborador</h2>
				<CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
				<CampoTexto obrigatorio={true} label="Cargo" placeholder="Informe seu cargo" />
				<CampoTexto label="Imagem" placeholder="Informe o endedreço da imagem" />
				<ListaSuspensa obrigatorio={true} label="Time" itens={times} />
				<Botao>
					Criar card
				</Botao>
			</form>
		</section>
	);
};

export default Formulario;
