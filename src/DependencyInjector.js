import 'whatwg-fetch'

const whatwgFetch = self.fetch

class DependencyInjector {
  fetch(url) {
    return whatwgFetch(url)
  }
}

const dependencyInjector = new DependencyInjector()

export default dependencyInjector