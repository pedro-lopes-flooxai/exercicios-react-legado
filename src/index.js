import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA , {CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(<div>
    <Familia>
        <Membro nome="Andre" sobrenome="Pereira"></Membro>
        <Membro nome="Mariana" sobrenome="Pereira"></Membro>
    </Familia>
    <Familia>
        <Membro nome="Bia" sobrenome="Arruda"></Membro>
        <Membro nome="Gustavo" sobrenome="Arruda"></Membro>
    </Familia>
    {/*<FamiliaSilva></FamiliaSilva>*/}
   { /*<MultiElementos></MultiElementos>*/}
    {/*<CompA valor="Olá eu sou A!"></CompA>
    <B valor="B na área!"></B>*/}
    {/*PrimeiroComponente valor='Bom dia!'></PrimeiroComponente>*/}
</div>, elemento)