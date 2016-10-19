window.camTasklistConf = {
  // change the app name and vendor
  'app': {
    'name': ' - Единое окно',
    'vendor': 'Innovative People'
  },
  //
  // configure the date format
  // "dateFormat": {
  //   "normal": "LLL",
  //   "long":   "LLLL"
  // },
  //
  'locales': {
    'availableLocales': ['ru', 'en'],
    'fallbackLocale': 'en'
  },
  //
  // // custom libraries and scripts loading and initialization,
  // // see: http://docs.camunda.org/guides/user-guide/#tasklist-customizing-custom-scripts
  // customScripts: {
  //   // AngularJS module names
  //   ngDeps: ['ui.bootstrap'],
  //   // RequireJS configuration for a complete configuration documentation see:
  //   // http://requirejs.org/docs/api.html#config
  //   deps: ['jquery', 'custom-ui'],
  //   paths: {
  //     // if you have a folder called `custom-ui` (in the `scripts` folder)
  //     // with a file called `scripts.js` in it and defining the `custom-ui` AMD module
  //     'custom-ui': 'custom-ui/scripts'
  //   }
  // },

  'shortcuts': {
    'claimTask': {
      'key': 'ctrl+alt+c',
      'description': 'назначить выбранную задачу'
    },
    'focusFilter': {
      'key': 'ctrl+shift+f',
      'description': 'выбрать первый фильтр в списке'
    },
    'focusList': {
      'key': 'ctrl+alt+l',
      'description': 'выбрать первую задачу в списке'
    },
    'focusForm': {
      'key': 'ctrl+alt+f',
      'description': 'выбрать первый элемент в форме для ввода данных'
    },
    'startProcess': {
      'key': 'ctrl+alt+p',
      'description': 'открыть диалог для старта процессов'
    }
  }
};
