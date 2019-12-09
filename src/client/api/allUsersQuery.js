import unfetch from 'unfetch'
import checkStatus from './helpers/checkStatusCode'

export default function allUsersQuery() {
  return unfetch('/api/users/all', { credentials: 'include' }).then(checkStatus).then((r) => r.json())
}
