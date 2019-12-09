import unfetch from 'unfetch'
import checkStatus from './helpers/checkStatusCode'

export default function currentUserQuery() {
  return unfetch('/api/users/me', { credentials: 'include' }).then(checkStatus).then((r) => r.json())
}
