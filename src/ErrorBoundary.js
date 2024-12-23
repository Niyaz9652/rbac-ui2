import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
 
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Log error details to the console or an external service
    console.error("ErrorBoundary caught an error", error, info);
  }

  handleRetry = () => {
    // Reset error state to retry rendering child components
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <h1 className="error-title">Something went wrong.</h1>
          <p className="error-message">
            We're sorry for the inconvenience. Please try refreshing the page or
            return to the homepage.
          </p>
          <div className="error-actions">
            <button onClick={this.handleRetry} className="error-button">
              Retry
            </button>
            <Link to="/" className="error-link">
              Go to Homepage
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
