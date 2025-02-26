import { BrowserRouter } from 'react-router-dom'

import { AppSidebar } from './components/app-sidebar'
import { Appbar } from './components/AppBar'
import ErrorBoundary from './components/ErrorBoundary'
import { Router } from './routes'

import {
  SidebarProvider,
} from '@/components/ui/sidebar'

const App = () => (
    <ErrorBoundary>
      <BrowserRouter>
        <SidebarProvider>

          <AppSidebar />

          <div className="w-full bg-background">
            <Appbar />

            <main className="w-full">
              <Router />
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </ErrorBoundary>
  )

export default App
