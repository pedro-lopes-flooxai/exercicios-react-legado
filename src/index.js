import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA , CompB as B} from './componentes/DoisComponentes'

const elemento = document.getElementById('root')
ReactDOM.render(<div>
    <CompA valor="Olá eu sou A!"></CompA>
    <B valor="B na área!"></B>
    {/*PrimeiroComponente valor='Bom dia!'></PrimeiroComponente>*/}
</div>, elemento)