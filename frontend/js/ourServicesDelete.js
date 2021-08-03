const deleteButtonService = async (event) => {
  const res = await fetch(`/api/services/${event.target.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  location.reload()
}
