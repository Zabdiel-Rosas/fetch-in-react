import { useFetch } from './useFetch'
import './App.css'

function App() {
  const { data, loading, error, handleCancelRequest } = useFetch(
    'https://jsonplaceholder.typicode.com/users'
  )

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Fetch Like a Pro</h1>
        <button onClick={handleCancelRequest}>
          Cancel Request
        </button>
        <div className='card'>
          <ul>
            {error && <li>Error: {error}</li>}
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
