import styled from 'styled-components'
import { format } from 'date-fns'
import { calendarAppointments } from '../../data/mockData'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const CalendarContainer = styled.div`
  grid-column: span 4;
  background-color: white;
  border-radius: 12px;
  padding: 2.5rem 2rem 2rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  margin: 0;
  color: #333;
  font-size: 1.2rem;
`

const NavigationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const NavButton = styled.button`
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

const MonthYear = styled.h3`
  margin: 0;
  color: #333;
  font-size: 1.1rem;
`

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 12px;
  width: 100%;
  margin-top: 8px;
`

const WeekDay = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: #666;
  padding: 0.5rem;
`

const DayCell = styled.div`
  min-width: 48px;
  min-height: 48px;
  background-color: ${props => props.hasAppointment ? '#e3f2fd' : 'transparent'};
  border: 1px solid ${props => props.hasAppointment ? '#2196f3' : '#eee'};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 6px 6px 2px 8px;
  box-sizing: border-box;
  transition: background 0.2s, border 0.2s;
`

const DayNumber = styled.span`
  font-size: 0.9rem;
  color: ${props => props.isToday ? '#2196f3' : '#333'};
  font-weight: ${props => props.isToday ? '600' : '400'};
`

const AppointmentTimeBadge = styled.span`
  font-size: 0.7rem;
  color: #2196f3;
  background-color: #e3f2fd;
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
`

const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`

const AppointmentCard = styled.div`
  background-color: #f5f6fa;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const AppointmentTitle = styled.h4`
  margin: 0;
  color: #333;
  font-size: 0.9rem;
`

const AppointmentDateTime = styled.span`
  font-size: 0.8rem;
  color: #666;
`

const CalendarView = () => {
  const today = new Date()
  const currentMonth = format(today, 'MMMM yyyy')
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  // Generate days for the current month (simplified version)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  
  // Check if a day has appointments
  const hasAppointments = (day) => {
    return calendarAppointments.some(appointment => 
      format(new Date(appointment.date), 'd') === day.toString()
    )
  }
  
  // Get appointments for a specific day
  const getAppointmentsForDay = (day) => {
    return calendarAppointments.filter(appointment => 
      format(new Date(appointment.date), 'd') === day.toString()
    )
  }

  return (
    <CalendarContainer>
      <CalendarHeader>
        <Title>Calendar</Title>
        <NavigationButtons>
          <NavButton>
            <ChevronLeft />
          </NavButton>
          <MonthYear>{currentMonth}</MonthYear>
          <NavButton>
            <ChevronRight />
          </NavButton>
        </NavigationButtons>
      </CalendarHeader>
      
      <CalendarGrid>
        {weekDays.map(day => (
          <WeekDay key={day}>{day}</WeekDay>
        ))}
        {days.map(day => (
          <DayCell key={day} hasAppointment={hasAppointments(day)}>
            <DayNumber isToday={day === today.getDate()}>{day}</DayNumber>
            {hasAppointments(day) && (
              getAppointmentsForDay(day).map(appointment => (
                <AppointmentTimeBadge key={appointment.time}>
                  {appointment.time}
                </AppointmentTimeBadge>
              ))
            )}
          </DayCell>
        ))}
      </CalendarGrid>
      
      <AppointmentList>
        {calendarAppointments.slice(0, 2).map(appointment => (
          <AppointmentCard key={`${appointment.date}-${appointment.time}`}>
            <AppointmentTitle>{appointment.title}</AppointmentTitle>
            <AppointmentDateTime>
              {format(new Date(appointment.date), 'MMMM d, yyyy')} at {appointment.time}
            </AppointmentDateTime>
          </AppointmentCard>
        ))}
      </AppointmentList>
    </CalendarContainer>
  )
}

export default CalendarView 