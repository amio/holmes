module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' + (process.env.SUB_SITE || 'amio.cn') }
    }
  }
}
