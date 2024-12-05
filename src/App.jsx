import { Link } from 'react-router-dom'
import Image from './Image'

function App() {
  return (
    <>
      <h2>Welcome to my routes</h2>
      <p>Links here!</p>
      <Link to="fpv">Link to fpv page!</Link>
      <Image />
    </>
  )
}

export default App
