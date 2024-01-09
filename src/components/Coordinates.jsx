import useFetch from "../hooks/useFetch"

export default function Coordinates() {
  const url = "http://api.open-notify.org/iss-now.json"
  const { data, loading } = useFetch(url)

  return (
    <>
{/* components/coordinates.jsx */}
<div>
  {loading ? (
    "Loading..."
  ) : (
    <div>
      <h2>Longitude</h2>
      <p>{data.iss_position.longitude}</p>
      <h2>Latitude</h2>
      <p>{data.iss_position.latitude}</p>
    </div>
  )}
</div>
    </>
  )
}
