import useFetch from "./useFetch"

const url = "http://api.open-notify.org/iss-now.json"

export default function Coordinates() {
  const { data, loading } = useFetch(url)

  return (
    <>
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
