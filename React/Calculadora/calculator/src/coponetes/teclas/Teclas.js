// Teclas.js
import './Teclas.css'
import { opera } from '../Cau.js';
export  const Teclas = (props) => {

  return (
    <div className='divSure'>

      <button className='botão' onClick={console.log('sim')} >
        {props.namep}
        </button>

    </div>
  );
  
};

