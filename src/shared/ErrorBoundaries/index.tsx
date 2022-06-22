import React from "react"

class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.error(error, errorInfo) // eslint-disable-line
  }

  render() {
    return this.props.children
  }
}

export default ErrorBoundary
