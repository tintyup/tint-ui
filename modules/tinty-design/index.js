import Transfer from './Transfer/Transfer'

const components = {
  Transfer,
}

export default {
  install(Vue) {
    Object.keys(components).forEach((key) => {
      Vue.component(key, components[key])
    })
  },
}
