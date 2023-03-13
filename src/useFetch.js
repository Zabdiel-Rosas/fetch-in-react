import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [controller, setController] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()
    setController(abortController)
    setLoading(true)

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        if (error.name === 'AbortError') {
          console.log('Request Canceled')
        } else {
          setError(error)
        }
      })
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [])

  function handleCancelRequest() {
    if (controller) {
      controller.abort()
      setError('Request Canceled')
    }
  }

  return { data, loading, error, handleCancelRequest }
}
