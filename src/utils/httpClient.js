const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzM1M2NmOTZmM2VkZDdjMjhlZWM1NWI1N2QwM2Q0MiIsInN1YiI6IjYxNDhkMTA0OTQ1MGZlMDA2NGZlZDg3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqQfy82Yp95cDa_vd9DXRdcs7tPeeu9N6ysQl7ba09k",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
