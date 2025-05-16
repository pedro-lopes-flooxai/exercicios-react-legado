import React from 'react'
import ReactDOM from 'react-dom'
import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'
import Hook from './componentes/Hook'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import CompA , {CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponenteComFuncao from './componentes/ComponenteComFuncao'
//import Pai from './componentes/Pai'

const elemento = document.getElementById('root')
ReactDOM.render(<div>
    <Hook></Hook>
    {/*<Contador numeroInicial={100}></Contador>*/}
    {/*<ComponenteClasse valor="Sou um componente de classe!"></ComponenteClasse>*/}
    {/*<Pai></Pai>*/}
    {/*<ComponenteComFuncao></ComponenteComFuncao>*/}
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