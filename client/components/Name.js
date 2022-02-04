import gql from 'graphql-tag'

const Component = ({ data }) => (
  <span>
    Name
  </span>
)

const query = gql`
  query name {
    name
  }
`

export default Component
