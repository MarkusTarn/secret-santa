module.exports = (response) => {
  if (response.ok) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response

  return Promise.reject(error)
}
