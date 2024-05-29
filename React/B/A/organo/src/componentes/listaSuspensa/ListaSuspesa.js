import './ListaSuspesa.css'


const ListaSuspensa = (props) => {
    
    //  o map ele pecore uma arry
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterado(event.target.value)} required={props.required} value={props.valor}>
                <option valor=""></option>
                {props.itens.map(item => {
                    // cada lista de que ter uma "key" para que react emtende quado ele tem quen rederizar
                    return (<option key={item}>{item}</option>)
                })}
            </select>
        </div>
    )
}
export default ListaSuspensa