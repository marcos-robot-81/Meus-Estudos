import CampoTexto from "../CompoTexto/CampoTexto.js"
import ListaSuspensa from "../listaSuspensa/ListaSuspesa.js"
import {Botão} from '../botao/botao.js'
import {useState} from 'react'


import './Formulario.css'

export const Formulario = (props) => {
    const times = props.times

    const [name, setname] = useState('')
    const [cargo, setcargo] = useState('')
    const [imagem, setimagem] = useState('')
    const [time, settime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()// não sega o seu copotamento padão empedi que  apagina se recarequi
        props.aoColoborradorCadastrado([
           name,
           cargo,
           imagem,
           time 
        ])
        setname('')
        setcargo('')
        setimagem('')
        settime('')
        
    } 
    
    
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar} >
                <h2>Fasa seu time de clash royale</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label='nome' 
                    placeholde='Degite seu nome'
                    valor={name}
                    aoAlterado={valor => setname(valor)}
                    tipo="text"

                    />
                
                <CampoTexto 
                    label="Imagem up" 
                    placeholde="Degite seu imagen"
                    valor={imagem}
                    aoAlterado={valor => setimagem(valor)}
                    tipo="file"

                />
                <ListaSuspensa 
                    label='Que e sua posião' 
                    itens={times}
                    valor={time}
                    aoAlterado={valor => settime(valor)}

                />
                <Botão text='Criar Card'>Criar Card</Botão>
                
                
                
            </form>
        </section>
    )
}
