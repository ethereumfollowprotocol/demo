import 'typed-query-selector'
import * as React from 'react'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import * as ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '#/index.css'
import App from '#/App.tsx'

const root = document.querySelector('div#root')
if (!root) throw new Error('Root element not found')

export const queryClient = new QueryClient()

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme appearance='light' scaling='110%'>
        <App />
      </Theme>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </React.StrictMode>
)
