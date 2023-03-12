import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fetch Like a Pro</h1>
        <div className='card'>
          <ul>
            {loading && <li>Loading...</li>}
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      </header>
    </div>
  )
}

export default App
