// em veis de cria uma fusão cria uma const e ela uma uma fucão
import './CampoTexto.css';

const CampoTexto = (props) => {

    const placeholdederMOdificada = '${props.placeholder}...'//?

    const aoDigitado = (evento)=>{
        props.aoAlterado(evento.target.value)
    }


    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} type={props.tipo} onChange={aoDigitado} required={props.obrigatorio}  placeholder={props.placeholde}/>
        </div>
    )

}
export default CampoTexto