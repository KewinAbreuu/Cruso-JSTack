import './style.css'
import logo from '../../assets/logo.png'
import print from '../../assets/print.png'
import { Link } from 'react-router-dom'

export default function Home (){
  return(
    <div className='contentBody'>
      <div className='menu'>
        <img src={logo}/>
      </div>

      <div className='textChamada'>
        <h1 className='chamada'>Eu vou te ajudar a destravar sua música, e te ensinar a tocar de maneira <span>livre, autêntica e profissional</span> </h1>
      </div>

      <div className='banner'>
        <img src={print}/>
      </div>

      <div className='contentBtn'>
        <Link to="/Login"className='btn'>
          <h2>Resgatar Cupom 100%</h2>
        </Link>
      </div>

      
    </div>
  )
}