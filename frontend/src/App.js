import './App.css'
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs'
import { Navbar } from './components/Navbar/Navbar'
import { PassangersData } from './components/PassangersData/PassangersData'

function App() {
  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <PassangersData />
    </>
  )
}

export default App
