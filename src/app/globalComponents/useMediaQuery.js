"use client";
import { useState, useEffect } from "react";

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false); // Set default state to false

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Ensure this runs only on the client
      const mediaQueryList = window.matchMedia(query);
      setMatches(mediaQueryList.matches); // Initial match check

      const listener = (event) => setMatches(event.matches);
      mediaQueryList.addEventListener("change", listener);
      return () => mediaQueryList.removeEventListener("change", listener);
    }
  }, [query]);

  return matches;
};

export default useMediaQuery;
