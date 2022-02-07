import { gql } from '@apollo/client';

export const GET_API = gql`
query getapi {
    hello {
      name
      location
       domain
       webPages
    }
}    
`
