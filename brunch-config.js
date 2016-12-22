module.exports = {
  npm: {
    globals: {
      $: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom',
      _: 'lodash'
    }
  },
  paths: {
    watched: ['app/brunch'],
    public: 'vendor/assets'
  },

  modules: {
    wrapper: false
  },

  plugins: {
    babel: {
      presets: ['es2015', 'es2016', 'react'],
      ignore: [
        /^(node_modules)/
      ]
    }
  },

  files: {
    javascripts: {joinTo: 'javascripts/brunch/app.js'},
    stylesheets: {joinTo: 'stylesheets/brunch/app.css'}
  }
}
