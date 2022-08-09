import { Link } from 'react-router-dom'

import { Container, Header, LisContainer, Cards, InputSearchContainer } from './style'

import arrow from '../../assets/images/arrow.svg'
import edit from '../../assets/images/edit.svg'
import trash from '../../assets/images/trash.svg'

import Modal from '../../components/modal'

export default function Home () {
  return (
      <Container>
        <Modal danger />

      <InputSearchContainer>
        <input type="text" placeholder='Pesquise pelo nome...'/>
      </InputSearchContainer>

            <Header>
              <strong>3 contatos</strong>
              <Link to="/new">Novo contato</Link>
            </Header>

            <LisContainer>
              <header>
                <button type="button">
                  <span>
                    Nome
                  </span>
                  <img src={arrow} alt="Arrow"/>
                </button>
              </header>

              <Cards>
                <div className="info">
                  <div className="contact-name">
                    <strong>Kewin Abreu</strong>
                    <small>instagram</small>
                  </div>
                  <span>kewin@email.com</span>
                  <span>(81)9999-9999</span>
                </div>

                  <div className="actions">
                    <Link to="/edit/123">
                      <img src={edit} alt="edit"/>
                    </Link>
                    <button type="button">
                      <img src={trash} alt="delete"/>
                    </button>
                  </div>
              </Cards>
            </LisContainer>
          </Container>
  )
}
