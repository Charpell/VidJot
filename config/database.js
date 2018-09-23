if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: 'mongodb://vidjot:vidjot1@ds111963.mlab.com:11963/vidjot'
  }
} else {
  module.exports = {
    mongoURI: 'mongodb://vidjot:vidjot1@ds111963.mlab.com:11963/vidjot'
  }
}