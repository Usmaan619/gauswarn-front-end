import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Check if the error is a ChunkLoadError
    if (error.name === "ChunkLoadError" || error.message.includes("chunk")) {
      console.log("ChunkLoadError detected, reloading page...");
      // Force a reload from the server
      window.location.reload(true);
    }
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div style={{ textAlign: "center", padding: "50px", height: "100vh" }}>
          <h1>Something went wrong.</h1>
          <p>We are experiencing a technical issue. Please try refreshing the page.</p>
          <button 
            onClick={() => window.location.reload(true)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f5e1a4",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
