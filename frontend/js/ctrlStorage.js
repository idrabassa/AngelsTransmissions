const StorageCtrl = (function () {
  return {
    storageItem: function (item) {
      let items
      if (localStorage.getItem('items') === null) {
        items = []
        items.push(item)
        localStorage.setItem('items', JSON.stringify(items))
      } else {
        items = JSON.parse(localStorage.getItem('items'))
        items.push(item)
        localStorage.setItem('items', JSON.stringify(items))
      }
    },
    getItemsFromStorage: function () {
      let items
      if (localStorage.getItem('items') === null) {
        items = []
      } else {
        items = JSON.parse(localStorage.getItem('items'))
      }
      return items
    },
    updateItemStorage: function (update) {
      let items = []
      items = JSON.parse(localStorage.getItem('items'))
      items.forEach((item) => {
        if (item.id === update.id) {
          item.title = update.title
          // item.calories=update.calories
        }
      })
      localStorage.setItem('items', JSON.stringify(items))
    },
    deleteItemStorage: function (del) {
      let items = []
      items = JSON.parse(localStorage.getItem('items'))
      items = items.filter((item) => item.id !== del.id)
      localStorage.setItem('items', JSON.stringify(items))
    },
    deleteAllItems: function () {
      let items = []
      localStorage.setItem('items', JSON.stringify(items))
    },
  }
})()

export default StorageCtrl
