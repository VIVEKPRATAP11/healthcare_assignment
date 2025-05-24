import styled from 'styled-components'
import { Search, Notifications, Add } from '@mui/icons-material'
import { userProfile } from '../data/mockData'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Logo = styled.h1`
  color: #2196f3;
  margin: 0;
  font-size: 1.5rem;
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f6fa;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  width: 300px;
`

const SearchInput = styled.input`
  border: none;
  background: none;
  margin-left: 0.5rem;
  width: 100%;
  outline: none;
  font-size: 0.9rem;
`

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: #f5f6fa;
  }
`

const AddButton = styled(IconButton)`
  background-color: #2196f3;
  color: white;
  
  &:hover {
    background-color: #1976d2;
  }
`

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const UserName = styled.span`
  font-weight: 600;
  font-size: 0.9rem;
`

const UserRole = styled.span`
  font-size: 0.8rem;
  color: #666;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Healthcare.</Logo>
      
      <SearchContainer>
        <Search style={{ color: '#666' }} />
        <SearchInput placeholder="Search..." />
      </SearchContainer>
      
      <RightSection>
        <IconButton>
          <Notifications />
        </IconButton>
        
        <AddButton>
          <Add />
        </AddButton>
        
        <UserProfile>
          <Avatar src={userProfile.avatar} alt={userProfile.name} />
          <UserInfo>
            <UserName>{userProfile.name}</UserName>
            <UserRole>{userProfile.role}</UserRole>
          </UserInfo>
        </UserProfile>
      </RightSection>
    </HeaderContainer>
  )
}

export default Header 