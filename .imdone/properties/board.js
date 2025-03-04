module.exports = {
  data: {
    date: new Date().toISOString().split('T')[0],
    timestamp: new Date().toISOString(),
    codeSpan: function (code) {
      return '`' + code + '`'
    },
    codeBlock: function (code) {
      return '```\n' + code + '\n```'
    },
    clearFilterURL: 'imdone:///Users/dionedge/dev/brain?filter=',
    getFilterURL: function (filter) {
      return 'imdone:///Users/dionedge/dev/brain?filter=' + encodeURIComponent(filter)
    },
    getFilterLink: function (filter, text) {
      return '[' + text + '](' + this.getFilterURL(filter) + ')'
    }
  },
  settings: {
    defaultFilter: "",
    maxLines: 5,
    totalBoardHeight: 0,
    boardTitle: "Brain Tasks",
    showTagsAndMeta: true,
    showInlineComments: true,
    showBoardTitle: true,
    showCardCounts: true,
    showFilteredCardsOnly: true,
    showTotalCardCounts: true,
    showProgressBars: true,
    showDescriptionBadges: true,
    lists: {
      BACKLOG: {
        color: "#6c757d",
        description: "Items to be processed"
      },
      PLANNING: {
        color: "#17a2b8",
        description: "In planning phase"
      },
      NOTE: {
        color: "#ffc107",
        description: "General notes and documentation"
      },
      TODO: {
        color: "#007bff",
        description: "Ready to work on"
      },
      DOING: {
        color: "#28a745",
        description: "Currently in progress"
      },
      DONE: {
        color: "#6f42c1",
        description: "Completed tasks"
      },
      REVIEW: {
        color: "#e83e8c",
        description: "Needs review"
      },
      CODIFY: {
        color: "#fd7e14",
        description: "To be codified"
      },
      "TECH DEBT": {
        color: "#dc3545",
        description: "Technical debt to address"
      }
    }
  }
}
