import { Header } from './components/Header'
import { Entry } from './components/Entry'
import data from './data'
import './App.css'

function App() {

  return (
    <>
      <Header />
      <main>
        {data.map((entry) => (
          <Entry
            key = {entry.id}
            {...entry}
          />
        ))}
      </main>
    </>
  )
}

export default App
