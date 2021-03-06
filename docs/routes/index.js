
export function configRouter (router) {
  router.map({
    'components': {
      component: require('../views/components.vue'),
      subRoutes: {
        'introduce': {
          component: require('../views/docs/introduce.vue')
        },

        'getting-started': {
          component: require('../views/docs/getting-started.vue')
        },

        'download': {
          component: require('../views/docs/download.vue')
        },

        'alert': {
          component: require('../components/alert.vue')
        },

        'button': {
          component: require('../components/button.vue')
        },

        'badge': {
          component: require('../components/badge.vue')
        },

        'breadcrumb': {
          component: require('../components/breadcrumb.vue')
        },

        'checkbox': {
          component: require('../components/checkbox.vue')
        },

        'iconfont': {
          component: require('../components/iconfont.vue')
        },

        'upload': {
          component: require('../components/upload.vue')
        },

        // 'modal': {
        //   component: require('../components/modal.vue')
        // },

        'radio': {
          component: require('../components/radio.vue')
        },

        'switch': {
          component: require('../components/switch.vue')
        },

        'table': {
          component: require('../components/table.vue')
        },

        'tag': {
          component: require('../components/tag.vue')
        }
      }
    },

    '*': {
      component: require('../views/not-found.vue')
    }
  })

  router.alias({
    '/components': '/components/introduce',
    '/docs/introduce': '/components/introduce',
    '/docs/getting-started': '/components/getting-started',
    '/docs/download': '/components/download'
  })

  // global before
  // 3 options:
  // 1. return a boolean
  // 2. return a Promise that resolves to a boolean
  // 3. call transition.next() or transition.abort()
  router.beforeEach((transition) => {
    if (transition.to.path === '/forbidden') {
      router.app.authenticating = true
      setTimeout(() => {
        router.app.authenticating = false
        // alert('this route is forbidden by a global before hook')
        transition.abort()
      }, 3000)
    } else {
      transition.next()
    }
  })
}
