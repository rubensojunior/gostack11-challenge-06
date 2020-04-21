import React from 'react'

import { Link } from 'react-router-dom'
import { FiUpload } from 'react-icons/fi'

import { Container } from './styles'

import Logo from '../../assets/logo.svg'

interface HeaderProps {
  size?: 'small' | 'large'
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <Link to="/">
        <img src={Logo} alt="GoFinances" />
      </Link>
      <nav>
        <Link to="/import">
          <FiUpload size={20} />
          Importar Transações
        </Link>
      </nav>
    </header>
  </Container>
)

export default Header
