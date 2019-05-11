export default (val, type) => {
  const date = new Date(val)

  switch (type) {
    case 'date':
      return date.toLocaleDateString()

    case 'time':
      return date.toLocaleTimeString()

    default:
      return date.toLocaleString()
  }
}
