export const fetchMovies = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        Search: [
          {
            imdbID: "tt1234567",
            Title: "Mock Movie 1",
            Year: "2024",
            Poster: "https://via.placeholder.com/300x450",
          },
          {
            imdbID: "tt2345678",
            Title: "Mock Movie 2",
            Year: "2023",
            Poster: "https://via.placeholder.com/300x450",
          },
        ],
      });
    }, 1000);
  });
};
