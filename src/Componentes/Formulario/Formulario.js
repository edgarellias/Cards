import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";

const Formulario = () => {
	return (
		<section className="formulario">
            <form>
                <h2>Preencha os dadods para criar o card do Colaborador</h2>
				<CampoTexto label="Nome" placeholder="Digite seu nome" />
				<CampoTexto label="Cargo" placeholder="Informe seu cargo" />
				<CampoTexto label="Imagem" placeholder="Informe o endedreço da imagem" />
				<CampoTexto label="Time" placeholder="Informe o endedreço da imagem" />
			</form>
		</section>
	);
};

export default Formulario;
