import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import { Container, ActiveIndicator } from './styles'

import Logo from '../../assets/logo.svg'

interface HeaderProps {
  size?: 'small' | 'large'
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [navItems] = useState([
    { name: 'Listagem', to: '/' },
    { name: 'Importar', to: '/import' },
  ])

  const history = useHistory()

  const getActiveNavItem = (path: string): boolean => {
    return Boolean(path === history.location.pathname)
  }

  return (
    <Container size={size}>
      <header>
        <Link to="/">
          <img src={Logo} alt="GoFinances" />
        </Link>
        <nav>
          {navItems.map(navItem => (
            <Link key={navItem.name} to={navItem.to}>
              {navItem.name}
              <ActiveIndicator isActive={getActiveNavItem(navItem.to)} />
            </Link>
          ))}
        </nav>
      </header>
    </Container>
  )
}

export default Header
