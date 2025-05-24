import { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import DashboardMainContent from './components/DashboardMainContent'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f6fa;
`

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`

const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <MainContainer>
        <Sidebar />
        <ContentContainer>
          <DashboardMainContent />
        </ContentContainer>
      </MainContainer>
    </AppContainer>
  )
}

export default App
