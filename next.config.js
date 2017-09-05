const subPage = '/' + (process.env.SUB_PAGE || 'amio.cn')

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: subPage }
    }
  }
}
