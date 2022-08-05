import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Container } from './style'

import arrow from '../../assets/images/arrow.svg'
export default function PageHeader ({ title }) {
  return (
    <Container>
      <Link tp="/">
        <img src={arrow} alt="Back"/>
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired
}
