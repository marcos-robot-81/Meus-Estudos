
export var Bnumero = [1,1]
export function opera(n,b,c){
    switch (n){
        case ('soma'):
            Bnumero[0] = Bnumero[0] + Bnumero[1]

            break;
        case ('iqual'):
            Bnumero[0] = Bnumero[0] + Bnumero[1]
            Bnumero[1] = Bnumero[0]
            break;
        case ('subi'):
            
            break;
        case ('x'):
        console.log('erro')
        break;
               
    }
}