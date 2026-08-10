import Places from "./Places.jsx";

import { useEffect, useState } from "react";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchPlaces = async function () {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const sortedPlaces = sortPlacesByDistance(
              places,
              position.coords.latitude,
              position.coords.longitude,
            );
            setAvailablePlaces(sortedPlaces);
            setIsFetching(false);
          },
          (geoError) => {
            // geolocation denied/failed — fall back to unsorted places
            setAvailablePlaces(places);
            setIsFetching(false);
          },
        );
      } catch (err) {
        setError({
          message:
            err.message || "Could not fetch places, please try again later.",
        });
        setIsFetching(false);
      }
    };
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An error occurred" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching places data...."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
