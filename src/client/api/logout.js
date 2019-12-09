import unfetch from 'unfetch'
import checkStatus from './helpers/checkStatusCode'

export default function logout() {
  return unfetch('/api/users/me', { method: 'DELETE', credentials: 'include' }).then(checkStatus).then((r) => r.json())
}
