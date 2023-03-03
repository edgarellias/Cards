import "./Colaborador.css";

import { AiFillCloseCircle } from "react-icons/ai"

const Colaborador = ({ nome, imagem, cargo, corDeFundo, obrigatorio, aoDeletar}) => {
	return (
		<div className="colaborador" required={obrigatorio} >
			<AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
				<div className="cabecalho" style={{background: corDeFundo}}>
				<img src={imagem} alt={nome} />
				</div>

				<div className="rodape">
					<h4>{nome}</h4>
					<h5>{cargo}</h5>
				</div>
			</div>		
	);
};

export default Colaborador;
