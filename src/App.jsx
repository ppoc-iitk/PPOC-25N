import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RootLayout from './layouts/RootLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import PolicyConclavePage from './pages/PolicyConclavePage.jsx'
import CompetitionPage from './pages/CompetitionPage.jsx'
import SpeakersPage from './pages/SpeakersPage.jsx'
import ArticlesPage from './pages/ArticlesPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import EventsPage from './pages/EventsPage.jsx'
import TeamPage from './pages/TeamPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />

          <Route path="policy-conclave" element={<PolicyConclavePage />} />
          <Route
            path="policy-conclave/ecocraft"
            element={
              <CompetitionPage
                title="Ecocraft"
                subtitle="Economics & public policy case competition"
                registerHref="https://unstop.com/competitions/ecocraft-sustainable-product-challenge-iit-kanpur-1615917"
                image="/Others/Ecocraft.png"
              />
            }
          />
          <Route
            path="policy-conclave/rajneeti"
            element={
              <CompetitionPage
                title="Rajneeti"
                subtitle="Indian polity & governance policy challenge"
                registerHref="https://unstop.com/competitions/rajneeti-a-political-case-study-competition-iit-kanpur-1615896"
                image="/Others/Rajneeti.png"
              />
            }
          />
          <Route
            path="policy-conclave/videshneeti"
            element={
              <CompetitionPage
                title="Videshneeti"
                subtitle="Foreign policy & international relations simulation"
                registerHref="https://unstop.com/competitions/videsh-neeti-a-foreign-diplomacy-case-study-challenge-iit-kanpur-1615893"
                image="/Others/Videshneeti.png"
              />
            }
          />
          <Route
            path="policy-conclave/brahmastra"
            element={
              <CompetitionPage
                title="Brahmastra"
                subtitle="Policy debate & strategy sprint"
                registerHref="https://unstop.com/competitions/brahmastra-iit-kanpur-1615438"
                image="/Others/Brahmastra.png"
              />
            }
          />
          <Route
            path="policy-conclave/mun"
            element={
              <CompetitionPage
                title="MUN"
                subtitle="Model United Nations (UNHRC focus)"
                registerHref="https://unstop.com/workshops-webinars/model-united-nations-mun26-policy-conclave26-annual-flagship-event-ppociit-kanpur-iit-kanpur-1616475"
                image="/Others/MUN.png"
              />
            }
          />
          <Route
            path="policy-conclave/policy-hackathon"
            element={
              <CompetitionPage
                title="Policy Hackathon"
                subtitle="Designing data-driven solutions to real policy problems"
                registerHref="https://unstop.com/hackathons/policy-hackathon-innovating-governance-iit-kanpur-1616462"
                image="/Others/Policy Hackathon.png"
              />
            }
          />

          <Route path="speakers" element={<SpeakersPage />} />
          <Route path="articles" element={<ArticlesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="contact" element={<ContactPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
