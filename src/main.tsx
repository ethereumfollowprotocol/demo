import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import * as React from 'react'
import * as reactDom from 'react-dom/client'
import 'typed-query-selector'
import App from '#/App.tsx'
import { ReactQueryProvider } from '#/clients/react-query.tsx'
import '#/index.css'

const root = document.querySelector('div#root')
if (!root) throw new Error('Root element not found')

reactDom.createRoot(root).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <Theme appearance='dark' scaling='110%'>
        <App />
      </Theme>
    </ReactQueryProvider>
  </React.StrictMode>
)
