import './Pajina.css'
import {Teclas} from '../teclas/Teclas';
import { Virso } from '../virso';
import {Bnumero} from '../Cau.js'


export const Pajina = ({ numbers }) => {
     

    return (
      <div className='pajina'>
        <div className='virso'>
            <Virso Bnumero={Bnumero}/>
        </div>
        <div className='butão'>
          {numbers.map((number) => (
            <Teclas key={number} number={number} namep={number}  />
          ))}
          <Teclas number='soma' namep='+'/>
          <Teclas number='subitração' namep='-' />
          <Teclas number='multiplicação' namep='X' />
          <Teclas number='divição' namep='/' />
          <Teclas number='posentajen' namep='%' />
          <Teclas number='iqual' namep='=' />

        </div>
      </div>
    );
  };
 