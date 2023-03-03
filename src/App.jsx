import { useState } from "react";
import Banner from "./Componentes/Banner";
import Formulario from "./Componentes/Formulario";
import Rodape from "./Componentes/Rodape";
import Time from "./Componentes/Time";

function App() {
	const [times, setTimes] = useState([
		{
			nome: "Atendimento",

			cor: "#D9F7E9",
		},
		{
			nome: "Mineração",

			cor: "#E8F8FF",
		},
		{
			nome: "Desenvolvedores",

			cor: "#F0F8E2",
		},
		{
			nome: "Análista de Dados",

			cor: "#FDE7E8",
		},
		{
			nome: "Estágiarios",

			cor: "#FAE9F5",
		},
	]);

	const [colaboradores, setColaboradores] = useState([]);

	const aoNovoColaboradorAdicionado = (colaborador) => {
		setColaboradores([...colaboradores, colaborador]);
	};

	function deletarColaborador() {
		console.log("Deletando colaborador.");
	}

	function mudarCorDoTime(cor, nome) {
		setTimes(
			times.map((time) => {
				if (time.nome === nome) {
					time.cor = cor;
				}
				return time;
			})
		);
	}

	return (
		<div className="App">
			<Banner />
			<Formulario aoColaboradorCadastrado={(colaborador) => aoNovoColaboradorAdicionado(colaborador)} times={times.map((time) => time.nome)} />

			{times.map((time) => (
				<Time
					key={time.nome}
					nome={time.nome}
					corPrimaria={time.corPrimaria}
					cor={time.cor}
					colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
					aoDeletar={deletarColaborador}
					mudarCor={mudarCorDoTime}
				/>
			))}
			<Rodape />
		</div>
	);
}

export default App;
