const fs = require('fs')

module.exports = function (plop) {
  plop.setActionType('folder', function (answers, config, plop) {
    const dir = `./src/stories/${answers.name}`
    fs.mkdirSync(dir, { recursive: true })
  })

  plop.setGenerator('test', {
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'Name of the component to create:',
    }],
    actions: [{
      type: 'folder',
      configProp: 'available from the config param',
    }, {
      type: 'add',
      path: 'src/stories/{{name}}/index.tsx',
      templateFile: '.plop/Component.tsx.hbs',
    }, {
      type: 'add',
      path: 'src/stories/{{name}}/{{name}}.stories.tsx',
      templateFile: '.plop/Component.stories.tsx.hbs',
    }],
  })
}