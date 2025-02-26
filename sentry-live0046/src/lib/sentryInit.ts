import * as Sentry from '@sentry/react'

  Sentry.init({
    enabled: import.meta.env.PROD,
    dsn: 'https://9a04d1d7283983e9b6bcba1adcc819bd@o4508857120784384.ingest.us.sentry.io/4508857148702720',
    integrations: [
      Sentry.browserTracingIntegration(),
      Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0,
    tracePropagationTargets: [/^https:\/\/api\.Rubens\.dev\.br/],
    // adicionar no Access-Control-Allow-Headers: sentry-trace, baggage
    replaysSessionSampleRate: 0,
    replaysOnErrorSampleRate: 1.0,
    release: 'teste-live0046',

  })