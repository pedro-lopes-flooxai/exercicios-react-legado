import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA , {CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
import ComponenteComFuncao from './componentes/ComponenteComFuncao'

const elemento = document.getElementById('root')
ReactDOM.render(<div>
    <ComponenteComFuncao></ComponenteComFuncao>
    {/*<Familia sobrenome="Pereira">
        <Membro nome="Andre"> </Membro>
        <Membro nome="Mariana"> </Membro>
    </Familia>*/}
    {/*<FamiliaSilva></FamiliaSilva>*/}
    {/*<FamiliaSilva></FamiliaSilva>*/}
    { /*<MultiElementos></MultiElementos>*/}
    {/*<CompA valor="Olá eu sou A!"></CompA>
    <B valor="B na área!"></B>*/}
    {/*PrimeiroComponente valor='Bom dia!'></PrimeiroComponente>*/}
</div>, elemento)