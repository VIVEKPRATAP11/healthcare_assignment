export const navigationItems = [
  { id: 1, title: 'Dashboard', icon: 'dashboard' },
  { id: 2, title: 'History', icon: 'history' },
  { id: 3, title: 'Calendar', icon: 'calendar' },
  { id: 4, title: 'Appointments', icon: 'event' },
  { id: 5, title: 'Statistics', icon: 'bar_chart' },
  { id: 6, title: 'Tests', icon: 'science' },
  { id: 7, title: 'Chat', icon: 'chat' },
  { id: 8, title: 'Support', icon: 'support' },
  { id: 9, title: 'Setting', icon: 'settings' }
]

export const healthStatusData = {
  heart: { status: 'healthy', color: '#4CAF50' },
  lungs: { status: 'warning', color: '#FFA726' },
  teeth: { status: 'healthy', color: '#4CAF50' },
  bone: { status: 'healthy', color: '#4CAF50' }
}

export const upcomingAppointments = [
  {
    id: 1,
    day: 'Thursday',
    appointments: [
      { id: 1, title: 'Health checkup complete', time: '09:00 AM', type: 'checkup' },
      { id: 2, title: 'Ophthalmologist', time: '11:00 AM', type: 'specialist' }
    ]
  },
  {
    id: 2,
    day: 'Saturday',
    appointments: [
      { id: 3, title: 'Cardiologist', time: '10:00 AM', type: 'specialist' },
      { id: 4, title: 'Neurologist', time: '02:00 PM', type: 'specialist' }
    ]
  }
]

export const calendarAppointments = [
  { date: '2025-03-15', time: '09:00', title: 'Dentist Appointment' },
  { date: '2025-03-15', time: '11:00', title: 'Physiotherapy' },
  { date: '2025-03-16', time: '13:00', title: 'General Checkup' },
  { date: '2025-03-16', time: '15:00', title: 'Cardiology Consultation' }
]

export const activityData = [
  { day: 'Mon', appointments: 2 },
  { day: 'Tue', appointments: 1 },
  { day: 'Wed', appointments: 3 },
  { day: 'Thu', appointments: 2 },
  { day: 'Fri', appointments: 1 },
  { day: 'Sat', appointments: 2 },
  { day: 'Sun', appointments: 0 }
]

export const userProfile = {
  name: 'John Doe',
  avatar: 'https://i.pravatar.cc/150?img=1',
  role: 'Patient'
} 