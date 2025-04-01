/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { Provider } from './components/ui/provider'

const container = document.getElementById('root')! as HTMLElement

createRoot(container).render(
	<StrictMode>
		<Provider>
			<App />
		</Provider>
	</StrictMode>,
)
