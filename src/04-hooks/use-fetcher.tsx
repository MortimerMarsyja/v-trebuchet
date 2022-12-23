export default function useFetch() {
  const fetcher = (url: string) => {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => res);
  };

  return { fetcher };
}
