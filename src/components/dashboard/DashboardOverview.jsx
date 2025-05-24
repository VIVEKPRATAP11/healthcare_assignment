import styled from 'styled-components'
import { healthStatusData } from '../../data/mockData'

const OverviewContainer = styled.div`
  grid-column: span 4;
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`

const Title = styled.h2`
  margin: 0 0 1.75rem 0;
  color: var(--text-primary);
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 1.25rem;
    background-color: var(--primary-color);
    border-radius: var(--radius-sm);
  }
`

const StatusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
`

const StatusCard = styled.div`
  background-color: ${props => props.color}08;
  border: 1px solid ${props => props.color}20;
  border-radius: var(--radius-md);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
    background-color: ${props => props.color}12;
    border-color: ${props => props.color}30;
  }
`

const StatusTitle = styled.h3`
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const StatusValue = styled.span`
  font-size: 1.125rem;
  color: ${props => props.color};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::after {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    background-color: ${props => props.color};
    border-radius: 50%;
    opacity: 0.8;
  }
`

const DashboardOverview = () => {
  return (
    <OverviewContainer>
      <Title>Health Overview</Title>
      <StatusGrid>
        {Object.entries(healthStatusData).map(([key, data]) => (
          <StatusCard key={key} color={data.color}>
            <StatusTitle>{key.charAt(0).toUpperCase() + key.slice(1)}</StatusTitle>
            <StatusValue color={data.color}>
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </StatusValue>
          </StatusCard>
        ))}
      </StatusGrid>
    </OverviewContainer>
  )
}

export default DashboardOverview 