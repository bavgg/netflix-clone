const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const fetcher = (url: string) => {
//   return fetch(url).then(res => {
//     if (!res.ok) {
//       throw new Error('Failed to fetch');
//     }
//     return res.json();
//   });
// };

export default fetcher;
