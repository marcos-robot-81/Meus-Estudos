import { useState } from 'react';
import Banner from './componentes/Baneer/Banner.js';
import { Formulario } from './componentes/Formulario/Formulario.js';
import {Botao} from './componentes/botao/botao.js';
import {Time} from './componentes/Time'




function App() {

  const timescolor = [
    {
      nome: 'progamação',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front_End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Disign',
      corPrimaria: '#Db6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'inovação e gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },    
  ]

  const [colaboradores, setcolaboradores] = useState([])

  const aoNovoColovorradorAdicionado = (colaborador) => {
    console.log('fuis:  ',colaborador)
    setcolaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={timescolor.map(time => time.nome)} aoColoborradorCadastrado={colaborador => aoNovoColovorradorAdicionado(colaborador)}/>

      {timescolor.map(time => <Time 
      key={time.nome} 
      nome={time.nome}  
      corp={time.corPrimaria} 
      cors={time.corSecundaria} 
      Colaboradores={colaboradores.filter(colaborador => colaborador[3] === time.nome)}  /> )}
      
      
    </div>
  );
}

export default App;
