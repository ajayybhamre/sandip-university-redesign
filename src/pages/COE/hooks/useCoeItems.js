// src/pages/COE/hooks/useCoeItems.js
//
// This is the seam between "static placeholder data" and "real backend"
// mentioned in coeData.js. Every list page (Notices, Results, Timetables)
// calls this hook instead of using its data array directly.
//
// TODAY: it just echoes back whatever static array you pass in.
// LATER (once the CoE backend exists): swap the body below for a real
// fetch/query (Supabase, Firebase, a REST endpoint — whatever gets decided),
// keep returning the same { items, isLoading, error } shape, and every page
// using this hook picks up real data with zero changes to the page or card
// components.
//
// Example future version:
//
//   export function useCoeItems(category) {
//     const [items, setItems] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//
//     useEffect(() => {
//       fetchCoeItems(category)          // e.g. a Supabase query
//         .then(setItems)
//         .catch(setError)
//         .finally(() => setIsLoading(false));
//     }, [category]);
//
//     return { items, isLoading, error };
//   }

import { useState, useEffect } from "react";

export function useCoeItems(staticData) {
  const [items, setItems] = useState(staticData);

  useEffect(() => {
    setItems(staticData);
  }, [staticData]);

  return { items, isLoading: false, error: null };
}
