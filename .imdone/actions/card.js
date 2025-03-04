module.exports = {
  actions: [
    {
      name: 'edit',
      icon: 'edit',
      text: 'Edit Card',
      action: function (data) {
        return this.editCard(data.cardId)
      }
    },
    {
      name: 'move-to-backlog',
      icon: 'inbox',
      text: 'Move to BACKLOG',
      action: function (data) {
        return this.moveCard(data.cardId, 'BACKLOG')
      }
    },
    {
      name: 'move-to-planning',
      icon: 'event',
      text: 'Move to PLANNING',
      action: function (data) {
        return this.moveCard(data.cardId, 'PLANNING')
      }
    },
    {
      name: 'move-to-todo',
      icon: 'assignment',
      text: 'Move to TODO',
      action: function (data) {
        return this.moveCard(data.cardId, 'TODO')
      }
    },
    {
      name: 'move-to-doing',
      icon: 'trending_up',
      text: 'Move to DOING',
      action: function (data) {
        return this.moveCard(data.cardId, 'DOING')
      }
    },
    {
      name: 'move-to-done',
      icon: 'check_circle',
      text: 'Move to DONE',
      action: function (data) {
        return this.moveCard(data.cardId, 'DONE')
      }
    },
    {
      name: 'move-to-review',
      icon: 'rate_review',
      text: 'Move to REVIEW',
      action: function (data) {
        return this.moveCard(data.cardId, 'REVIEW')
      }
    },
    {
      name: 'move-to-codify',
      icon: 'code',
      text: 'Move to CODIFY',
      action: function (data) {
        return this.moveCard(data.cardId, 'CODIFY')
      }
    },
    {
      name: 'move-to-tech-debt',
      icon: 'build',
      text: 'Move to TECH DEBT',
      action: function (data) {
        return this.moveCard(data.cardId, 'TECH DEBT')
      }
    },
    {
      name: 'add-checklist',
      icon: 'checklist',
      text: 'Add Checklist',
      action: function (data) {
        return this.addChecklist(data.cardId)
      }
    },
    {
      name: 'add-note',
      icon: 'note_add',
      text: 'Add Note',
      action: function (data) {
        return this.moveCard(data.cardId, 'NOTE')
      }
    }
  ]
}
