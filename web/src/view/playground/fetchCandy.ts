import { gql } from '@apollo/client'

export const fragmentUser = gql`
  fragment User on User {
    id
    name
    email
    userType
  }
`

export const fragmentCandy = gql`
  fragment UserCandy on UserCandy {
    candyCount
    user {
      ...User
    }
  }
`

export const fetchCandies = gql`
  query FetchCandies {
    candies {
      ...UserCandy
    }
  }
  ${fragmentUser}
  ${fragmentCandy}
`

export const subscribeCandy = gql`
  subscription CandySubscription {
    candyUpdates {
      ...UserCandy
    }
  }
  ${fragmentUser}
  ${fragmentCandy}
`
