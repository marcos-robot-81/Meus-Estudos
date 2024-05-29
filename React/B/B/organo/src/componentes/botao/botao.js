
import './botao.css'

export const Botão = (props) => {
    
    return(
        //children são os finhos do camponeti.
        <button className="botão">{props.children}</button>
    )
}
