import styled from 'styled-components'
import DashboardOverview from './dashboard/DashboardOverview'
import AnatomySection from './dashboard/AnatomySection'
import CalendarView from './dashboard/CalendarView'
import UpcomingSchedule from './dashboard/UpcomingSchedule'
import ActivityFeed from './dashboard/ActivityFeed'

const DashboardGrid = styled.div`
  zoom:0.8;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  padding: var(--container-padding, 1.5rem);
  max-width: 1920px;
  margin: 0 auto;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(8, 1fr);
    
    > * {
      grid-column: span 8;
    }
  }
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.25rem;
    padding: var(--container-padding, 1.25rem);
    
    > * {
      grid-column: span 4;
    }
  }
  
  @media (max-width: 640px) {
    gap: 1rem;
    padding: var(--container-padding, 1rem);
  }
`

const DashboardMainContent = () => {
  return (
    <DashboardGrid>
      {/* Overview Section - Spans 4 columns */}
      <DashboardOverview  />
      
      {/* Anatomy Section - Spans 4 columns */}
      <AnatomySection />
      
      {/* Calendar View - Spans 4 columns */}
      <CalendarView />
      
      {/* Upcoming Schedule - Spans 6 columns */}
      <UpcomingSchedule />
      
      {/* Activity Feed - Spans 6 columns */}
      <ActivityFeed />
    </DashboardGrid>
  )
}

export default DashboardMainContent 