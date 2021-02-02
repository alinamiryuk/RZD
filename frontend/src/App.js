import { Grid } from 'semantic-ui-react'
import { Breadcrumbs } from './components/Breadcrumbs/Breadcrumbs'
import { Navbar } from './components/Navbar/Navbar'
import { PassangersData } from './components/PassangersData/PassangersData'
import './App.css'

function App() {
  return (
    <Grid.Column>
      <Navbar />
      <Breadcrumbs />
      <PassangersData />
    </Grid.Column>
  )
}

export default App
