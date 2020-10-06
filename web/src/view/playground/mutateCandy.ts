import { gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'

const throwCandyMutation = gql`
  mutation ThrowCandy($email: String!) {
    throwCandy(email: $email)
  }
`

export function throwCandy(email: string) {
  return getApolloClient().mutate<any, any>({
    mutation: throwCandyMutation,
    variables: { email },
  })
}
