module.exports = {
  actions: [
    {
      name: 'refresh',
      icon: 'refresh',
      text: 'Refresh Board',
      action: function (data) {
        return this.refresh()
      }
    },
    {
      name: 'filter',
      icon: 'filter_list',
      text: 'Filter Cards',
      action: function (data) {
        return this.setFilter(data.filter || '')
      }
    },
    {
      name: 'clear-filter',
      icon: 'clear_all',
      text: 'Clear Filter',
      action: function (data) {
        return this.clearFilter()
      }
    }
  ]
}
