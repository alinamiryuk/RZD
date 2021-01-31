import './App.css'
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs'
import { Navbar } from './components/Navbar/Navbar'
import { PassangersData } from './components/PassangersData/PassangersData'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Breadcrumbs />
      <PassangersData />
    </div>
  )
}

export default App
