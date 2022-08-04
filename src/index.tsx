import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Profile from 'pages/Profile'
import Home from 'pages/Home'
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
