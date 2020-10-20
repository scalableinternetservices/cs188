import { useQuery, useSubscription } from '@apollo/client'
import * as React from 'react'
import { useState } from 'react'
import { CandySubscription, FetchCandies, UserType } from '../../graphql/query.gen'
import { Button } from '../../style/button'
import { Input } from '../../style/input'
import { Spacer } from '../../style/spacer'
import { handleError } from '../toast/error'
import { toast } from '../toast/toast'
import { fetchCandies, subscribeCandy } from './fetchCandy'
import { throwCandy } from './mutateCandy'

export function Candy() {
  const [userQuery, setUserQuery] = useState('')
  const { loading, data, refetch } = useQuery<FetchCandies>(fetchCandies)

  const sub = useSubscription<CandySubscription>(subscribeCandy)
  React.useEffect(() => {
    if (sub.data?.candyUpdates) {
      toast(sub.data?.candyUpdates.user.name + ' got candy! 🍭😋')
      refetch().catch(handleError)
    }
  }, [sub.data])

  function doThrowCandy(email: string) {
    throwCandy(email).catch(handleError)
  }

  if (loading) {
    return <div>loading...</div>
  }
  if (!data || data.candies.length === 0) {
    return <div>no candies</div>
  }

  return (
    <div className="mw6">
      <Input $onChange={setUserQuery} />
      <Spacer $h4 />
      {data.candies
        .filter(candy => candy.user.userType !== UserType.ADMIN)
        .filter(candy => candy.user.name.toLowerCase().includes(userQuery.toLowerCase()))
        .sort((a, b) => b.candyCount - a.candyCount)
        .map((candy, i) => (
          <div key={i} className="pa3 br2 mb2 bg-black-10 flex items-center">
            <Button onClick={() => doThrowCandy(candy.user.email)}>🍬</Button>
            <Spacer $w4 />
            {candy.user.name} · {candy.candyCount}
          </div>
        ))}
    </div>
  )
}
