const api = "https://www.mocky.io/v2/5a6bc16631000078341b8b77"

export const getAll = () =>
  fetch(`${api}`)
    .then(res => res.json())
    .then(data => data.links)
    .catch(() => alert('There was an error. Try again.'))