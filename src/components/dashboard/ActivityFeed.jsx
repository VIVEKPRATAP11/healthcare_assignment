import styled from 'styled-components'
import { activityData } from '../../data/mockData'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const ActivityContainer = styled.div`
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

const ActivitySummary = styled.p`
  margin: 0 0 1.5rem 0;
  color: #666;
  font-size: 0.9rem;
`

const ChartContainer = styled.div`
  height: 200px;
  width: 100%;
`

const CustomTooltip = styled.div`
  background-color: white;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const TooltipLabel = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.8rem;
`

const TooltipValue = styled.p`
  margin: 0.25rem 0 0 0;
  color: #2196f3;
  font-weight: 600;
  font-size: 0.9rem;
`

const ActivityFeed = () => {
  const totalAppointments = activityData.reduce((sum, day) => sum + day.appointments, 0)

  const CustomTooltipContent = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltip>
          <TooltipLabel>{label}</TooltipLabel>
          <TooltipValue>{payload[0].value} appointments</TooltipValue>
        </CustomTooltip>
      )
    }
    return null
  }

  return (
    <ActivityContainer>
      <Title>Activity</Title>
      <ActivitySummary>
        {totalAppointments} appointments on this week
      </ActivitySummary>
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activityData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="day" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltipContent />} />
            <Bar 
              dataKey="appointments" 
              fill="#2196f3"
              radius={[4, 4, 0, 0]}
              maxBarSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </ActivityContainer>
  )
}

export default ActivityFeed 