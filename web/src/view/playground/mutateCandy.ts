import { gql } from '@apollo/client'
import { getApolloClient } from '../../graphql/apolloClient'
import { ThrowCandy, ThrowCandyVariables } from '../../graphql/query.gen'

const throwCandyMutation = gql`
  mutation ThrowCandy($email: String!) {
    throwCandy(email: $email)
  }
`

export function throwCandy(email: string) {
  return getApolloClient().mutate<ThrowCandy, ThrowCandyVariables>({
    mutation: throwCandyMutation,
    variables: { email },
  })
}
