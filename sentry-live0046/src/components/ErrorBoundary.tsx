import { Component, ErrorInfo, ReactNode } from 'react'
import * as Sentry from '@sentry/react'

interface IState {
  hasError: boolean,
}

interface IProps {
  fallback?: React.ReactNode
  children: ReactNode
}

class ErrorBoundary extends Component<IProps, IState> {
  state ={
    hasError: false
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line no-console
    Sentry.captureException(Error(`ErrorBoundry:${error}, ${info} `))
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <>Error</>
    }

    return this.props.children
  }
}

export default ErrorBoundary
