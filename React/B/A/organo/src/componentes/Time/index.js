import { Colaborador } from '../colaborador'
import './Time.css'


export const Time = (props) =>{

    return(

        (props.Colaboradores.length > 0)&& <section className="Time" style={{ backgroundColor: props.cors }}>
            <h3 style={{ borderColor: props.corp }}>{props.nome} </h3>
            <div className='Colaboradores'>
            {props.Colaboradores.map( colaboradores => <Colaborador key={colaboradores[0]} nome={colaboradores[0]} cargo={colaboradores[1]} image={colaboradores[2]} corp={props.corp} />  )}
            </div> 
        </section>

    )
} 