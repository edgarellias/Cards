import { useState } from "react";



import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = (props) => {
	
	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");

	
	const aoSalvar = (e) => {
		e.preventDefault();
		props.aoColaboradorCadastrado({
			nome,
			cargo,
			imagem,
			time
		})

	}

	return (
		<section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dadods para criar o card do Colaborador</h2>
				<CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
				<CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} obrigatorio={true} label="Cargo" placeholder="Informe seu cargo" />
				<CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} label="Imagem" placeholder="Informe o endedreço da imagem" />
				<ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio={true} label="Time" itens={props.times} />
				<Botao>
					Criar card
				</Botao>
			</form>
		</section>
	);
};

export default Formulario;
