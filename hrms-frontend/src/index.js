import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global styles
import App from './App'; // Main React component
import reportWebVitals from './reportWebVitals';
import { AppContextProvider } from './context/AppContext';

// Creating the root element where the app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root')); // Points to <div id="root"></div>

// Error Boundary to gracefully handle rendering errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary Caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try refreshing the page.</h1>;
    }

    return this.props.children;
  }
}

// Render the application inside the root element wrapped with Error Boundary & Context
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Optional: Measure performance of your app (e.g., page load time)
reportWebVitals(console.log);
