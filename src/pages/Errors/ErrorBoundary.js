import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorPageMain } from "./ErrorPageMain";

function NavigateOnError() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/"); // Navigate to the error page
  }, []);
  return null;
}

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by Error Boundary: ", error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false });
  };
  render() {
    if (this.state.hasError) {
      // this.resetErrorBoundary();
      // return this.props.fallback;
      return <ErrorPageMain resetErrorBoundary={this.resetErrorBoundary} />;
      // this.setState({ hasError: false });
      // You can render any custom fallback UI
      //   return <h1>Something went wrong.</h1>;
      // return <NavigateOnError />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
