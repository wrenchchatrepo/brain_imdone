module.exports = {
  data: {
    date: new Date().toISOString().split('T')[0],
    timestamp: new Date().toISOString(),
    codeSpan: function (code) {
      return '`' + code + '`'
    },
    codeBlock: function (code) {
      return '```\n' + code + '\n```'
    }
  },
  settings: {
    maxLines: 8,
    showTags: true,
    showMeta: true,
    showDueDate: true,
    showCompletedDate: true,
    showCreatedDate: true,
    showUpdatedDate: true,
    showPriority: true,
    showProgress: true,
    showDescription: true
  }
}
