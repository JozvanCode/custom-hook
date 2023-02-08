import { useState, useEffect } from "react"

function useFetch(url) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState({})

  useEffect(() => {
    async function getCoordinates() {
      const response = await fetch(url)
      const issCoordinates = await response.json()
      setLoading(false)
      setData(issCoordinates)
    }
    getCoordinates()
  }, [url])

  return { loading, data }
}

export default useFetch
