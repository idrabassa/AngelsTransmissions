const deleteButton = async (event) => {
  const res = await fetch(`/api/seeus/${event.target.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  location.reload()
}
