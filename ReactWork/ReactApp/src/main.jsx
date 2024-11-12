import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Shreya"} email={"shreya.22b0121006@abes.ac.in"} phone={9305579995} />
    <Marks m1={85} m2={87} m3={83} />
    <App name={"Shivani"} email={"shivani.22b0121032@abes.ac.in"} phone={8097533587} />
    <Marks m1={93} m2={89} m3={85} />
    <App name={"Shilpi"} email={"shreya.22b0121053@abes.ac.in"} phone={4455656667} />
    <Marks m1={93} m2={92} m3={89} />
    <App name={"Shiwangi"} email={"shreya.22b0121013@abes.ac.in"} phone={83739262393} />
    <Marks m1={95} m2={97} m3={93} />
  </StrictMode>,
)
