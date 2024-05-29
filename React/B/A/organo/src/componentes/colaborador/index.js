import "./colaborado.css"



    export const Colaborador = ({nome , image, cargo, corp}) => {

        return(<div className="div0">
        <div className="div1" style={{backgroundColor: corp }}>
        <img src={image} alt={nome}></img>
            
        </div>
        
        <div className="div2">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                
        </div>

    </div>)


    }
/*

    return(<div className="div0">
        <div className="div1" style={{backgroundColor: props.corp }}>
            
        </div>
        <img src='../imagens/imgpesouas/dart.png'></img>
        <div className="div2">
                

        </div>

    </div>)


    }

*/