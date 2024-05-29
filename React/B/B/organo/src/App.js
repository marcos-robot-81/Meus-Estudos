import { useState } from 'react';
import Banner from './componentes/Baneer/Banner.js';
import { Formulario } from './componentes/Formulario/Formulario.js';
import {Botao} from './componentes/botao/botao.js';
import {Time} from './componentes/Time'




function App() {
  // Cores.
  const timescolor = [
    {
      nome: 'lider',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Jogadores',
      corPrimaria: '#Db6EBF',
      corSecundaria: '#FAE9F5'
    },
      
  ]
    // Cria uma contante dos colaboradores.
  const [colaboradores, setcolaboradores] = useState([])
    // Adiciona um nova colaborado.
  const aoNovoColovorradorAdicionado = (colaborador) => {
    console.log('Mostra o nova colaborador:  ',colaborador)
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
