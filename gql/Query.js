import {gql} from '@apollo/client';

export const LIFTS_QUERY = gql`
  query GetLiftsEdges {
    lifti {
      nodes {
        title
        crbLiftsUzstadisanasGads
        crbLiftsRupnNr
      }
    }
  }
`;
//192.168.31.74
// fetch('http://ik-word/graphql', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     query: `
//     lifti {
//       nodes {
//         title
//         crbLiftsUzstadisanasGads
//         crbLiftsRupnNr
//       }
//     }
//     `,
//   }),
// })
//   .then(res => res.json())
//   .then(res => console.log(res.data))
