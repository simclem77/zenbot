module.exports = function (conf) {
  return {
    getTrades: () => {
      conf.db.mongo.collection('trades').ensureIndex({selector: 1, time: 1})
      return conf.db.mongo.collection('trades')
    },	

    getResumeMarkers: () => {
      conf.db.mongo.collection('resume_markers').ensureIndex({selector: 1, to: -1})
      return conf.db.mongo.collection('resume_markers')
    }
  }
}

