import gql  from 'graphql-tag'

export const GET_USERS = gql`
  query Users($usersQuery: String, $usersFirst: Int, $usersSkip: Int) {
  users(query: $usersQuery, first: $usersFirst, skip: $usersSkip) {
    address
    name
  }
}
`;