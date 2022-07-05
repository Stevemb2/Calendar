import React from "react";
import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Navigate to="/error" />;
    } else if (this.state.hasError) {
      return (
        <div className="error">
          There was an error.{" "}
          <Link className="link" to="/error">
            Click here
          </Link>{" "}
          to go back to the homepage. Or wait five seconds and we will do it for
          you.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
