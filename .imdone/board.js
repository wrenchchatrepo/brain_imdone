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
        color: "#A5A5A5",
        description: "Items to be processed"
      },
      PLANNING: {
        color: "#74C3D1",
        description: "In planning phase"
      },
      NOTE: {
        color: "#FFE599",
        description: "General notes and documentation"
      },
      TODO: {
        color: "#A4C2F4",
        description: "Ready to work on"
      },
      DOING: {
        color: "#A1D9A0",
        description: "Currently in progress"
      },
      DONE: {
        color: "#B5A0E3",
        description: "Completed tasks"
      },
      REVIEW: {
        color: "#F4A6C0",
        description: "Needs review"
      },
      CODIFY: {
        color: "#F6B786",
        description: "To be codified"
      },
      "TECH DEBT": {
        color: "#E69999",
        description: "Technical debt to address"
      }
    }
  }
} 