# Healthcare Dashboard

A modern, responsive healthcare dashboard built with React and styled-components. This project demonstrates a clean, professional UI for healthcare management, featuring various components for displaying health status, appointments, and activity data.

## Features

- Clean, modern UI design
- Responsive layout that works on all screen sizes
- Interactive components with static data
- Health status overview
- Anatomical health indicators
- Calendar view with appointments
- Upcoming schedule display
- Activity feed with charts

## Tech Stack

- React 18
- Vite
- Styled Components
- Material-UI Icons
- Recharts (for data visualization)
- date-fns (for date manipulation)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── DashboardMainContent.jsx
│   └── dashboard/
│       ├── DashboardOverview.jsx
│       ├── AnatomySection.jsx
│       ├── CalendarView.jsx
│       ├── UpcomingSchedule.jsx
│       └── ActivityFeed.jsx
├── data/
│   └── mockData.js
├── App.jsx
└── main.jsx
```

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd healthcare-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Development Notes

- The project uses static mock data for demonstration purposes
- All components are built using styled-components for styling
- The layout is responsive and adapts to different screen sizes
- No state management is implemented as per requirements
- All data is passed through props from mock data sources

## Design Decisions

- Used a clean, minimalist design approach
- Implemented a consistent color scheme throughout the application
- Focused on readability and user experience
- Ensured proper spacing and alignment of all elements
- Made the UI accessible and responsive

## Future Improvements

- Add state management for dynamic data
- Implement user authentication
- Add real-time updates for appointments
- Include more detailed health metrics
- Add filtering and sorting capabilities
- Implement dark mode support

## License

MIT License - feel free to use this project for learning and development purposes.
