import styled from 'styled-components'
import { upcomingAppointments } from '../../data/mockData'
import { Event } from '@mui/icons-material'

const ScheduleContainer = styled.div`
  grid-column: span 6;
  background-color: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  margin: 0 0 1.5rem 0;
  color: #333;
  font-size: 1.2rem;
`

const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const DaySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const DayTitle = styled.h3`
  margin: 0;
  color: #666;
  font-size: 1rem;
  font-weight: 500;
`

const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const AppointmentCard = styled.div`
  background-color: #f5f6fa;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`

const AppointmentIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e3f2fd;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2196f3;
`

const AppointmentInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const AppointmentTitle = styled.h4`
  margin: 0;
  color: #333;
  font-size: 0.9rem;
`

const AppointmentTime = styled.span`
  font-size: 0.8rem;
  color: #666;
`

const AppointmentType = styled.span`
  font-size: 0.7rem;
  color: #2196f3;
  background-color: #e3f2fd;
  padding: 0.1rem 0.5rem;
  border-radius: 12px;
  align-self: flex-start;
`

const UpcomingSchedule = () => {
  return (
    <ScheduleContainer>
      <Title>The Upcoming Schedule</Title>
      <ScheduleList>
        {upcomingAppointments.map(day => (
          <DaySection key={day.id}>
            <DayTitle>On {day.day}</DayTitle>
            <AppointmentList>
              {day.appointments.map(appointment => (
                <AppointmentCard key={appointment.id}>
                  <AppointmentIcon>
                    <Event />
                  </AppointmentIcon>
                  <AppointmentInfo>
                    <AppointmentTitle>{appointment.title}</AppointmentTitle>
                    <AppointmentTime>{appointment.time}</AppointmentTime>
                    <AppointmentType>{appointment.type}</AppointmentType>
                  </AppointmentInfo>
                </AppointmentCard>
              ))}
            </AppointmentList>
          </DaySection>
        ))}
      </ScheduleList>
    </ScheduleContainer>
  )
}

export default UpcomingSchedule 