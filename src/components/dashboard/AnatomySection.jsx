import styled from 'styled-components'
import { healthStatusData } from '../../data/mockData'
import anatomyImg from '../../assets/anatomy.png'

const AnatomyContainer = styled.div`
  grid-column: span 4;
  background-color: var(--surface-color);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`

const Title = styled.h2`
  margin: 0;
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

const AnatomyContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`

const BodyIllustration = styled.div`
  flex: 1;
  position: relative;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-color);
  border-radius: var(--radius-lg);
  padding: 1rem;
  transition: transform var(--transition-normal);
  
  &:hover {
    transform: scale(1.02);
  }
`

const AnatomyImage = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: var(--radius-md);
  filter: drop-shadow(var(--shadow-md));
  transition: filter var(--transition-normal);
  
  &:hover {
    filter: drop-shadow(var(--shadow-lg));
  }
`

const HealthIndicators = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const IndicatorCard = styled.div`
  background-color: ${props => props.color}08;
  border: 1px solid ${props => props.color}20;
  border-radius: var(--radius-md);
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateX(4px);
    background-color: ${props => props.color}12;
    border-color: ${props => props.color}30;
  }
`

const IndicatorTitle = styled.h3`
  margin: 0;
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

const IndicatorStatus = styled.span`
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

const IndicatorDate = styled.span`
  font-size: 0.75rem;
  color: var(--text-secondary);
  opacity: 0.8;
`

const AnatomySection = () => {
  return (
    <AnatomyContainer>
      <Title>Body Status</Title>
      <AnatomyContent>
        <BodyIllustration>
          <AnatomyImage src={anatomyImg} alt="Human anatomy illustration" />
        </BodyIllustration>
        <HealthIndicators>
          {Object.entries(healthStatusData).map(([key, data]) => (
            <IndicatorCard key={key} color={data.color}>
              <IndicatorTitle>{key.charAt(0).toUpperCase() + key.slice(1)}</IndicatorTitle>
              <IndicatorStatus color={data.color}>
                {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
              </IndicatorStatus>
              <IndicatorDate>Last updated: {new Date().toLocaleDateString()}</IndicatorDate>
            </IndicatorCard>
          ))}
        </HealthIndicators>
      </AnatomyContent>
    </AnatomyContainer>
  )
}

export default AnatomySection 