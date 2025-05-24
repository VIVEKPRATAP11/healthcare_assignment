import styled from 'styled-components'
import { navigationItems } from '../data/mockData'
import * as Icons from '@mui/icons-material'

const SidebarContainer = styled.nav`
  width: 250px;
  background-color: white;
  padding: 2rem 1rem;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const SectionTitle = styled.h2`
  color: #666;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0;
  padding: 0 1rem;
`

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`

const NavLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  color: ${props => props.active ? '#2196f3' : '#666'};
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease;
  background-color: ${props => props.active ? '#e3f2fd' : 'transparent'};
  
  &:hover {
    background-color: #f5f6fa;
    color: #2196f3;
  }
`

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Sidebar = () => {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName.charAt(0).toUpperCase() + iconName.slice(1)]
    return Icon ? <Icon /> : null
  }

  return (
    <SidebarContainer>
      <SectionTitle>General</SectionTitle>
      <NavList>
        {navigationItems.map((item) => (
          <NavItem key={item.id}>
            <NavLink active={item.id === 1}>
              <IconWrapper>
                {getIcon(item.icon)}
              </IconWrapper>
              {item.title}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  )
}

export default Sidebar 