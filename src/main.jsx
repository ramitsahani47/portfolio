import React, { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#07090e', color: '#f43f5e', fontFamily: 'monospace', minHeight: '100vh', zIndex: 99999, position: 'relative' }}>
          <h2 style={{ color: '#38bdf8', marginBottom: '16px' }}>⚠️ React Rendering Exception Caught</h2>
          <div style={{ color: '#f8fafc', fontSize: '1.1rem', marginBottom: '16px', background: 'rgba(244, 63, 94, 0.1)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(244, 63, 94, 0.3)' }}>
            {this.state.error && this.state.error.toString()}
          </div>
          <pre style={{ background: '#0f172a', padding: '20px', borderRadius: '8px', color: '#94a3b8', overflowX: 'auto', fontSize: '0.85rem' }}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </pre>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
