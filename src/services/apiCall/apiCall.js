export default async function apiCall({ url, method, body, headers }) {
  try {
    const controller = new AbortController()

    setTimeout(() => {
      controller.abort()
    }, 3000)

    const response = await fetch(url, {
      signal: controller.signal,
      method,
      body,
      headers,
    })
    return response.json()
  } catch (error) {
    Promise.reject(error)
  }
}
