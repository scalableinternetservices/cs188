import * as React from 'react'
import { User } from '../../graphql/query.gen'

export function Demo() {
  const [users, setUsers] = React.useState([] as User[])

  // fetch information from the server that i can use to draw with
  fetch('/users')
    .then(response => response.json())
    .then(json => setUsers(json))
    .catch(err => {
      console.error(err)
    })

  return (
    <div>
      {users.map(u => (
        <div key={u.email}>{u.email}</div>
      ))}
    </div>
  )
}
