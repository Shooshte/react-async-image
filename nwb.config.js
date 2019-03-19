module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AsyncImg',
      externals: {
        react: 'React'
      }
    }
  }
}
