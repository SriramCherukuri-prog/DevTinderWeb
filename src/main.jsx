import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '../src/Components/App'
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5c39ab4346174801814bf41023586b94@o4511461435506688.ingest.de.sentry.io/4511461449138256",
  sendDefaultPii: true,
  tracesSampleRate: 1.0,
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
