const path = require("path")

module.exports = {
  prompt: async ({ prompter, args: { tag = 'div' } }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'コンポーネントのカテゴリ',
        choices: ['ui', 'features', 'pages', 'layouts'],
      },
      {
        type: 'input',
        name: 'componentName',
        message: 'コンポーネント名(UpperCamelCase)',
        validate: (value) => {
          if (!value) return 'コンポーネント名を入力してください'
          return true
        },
      },
    ]

    const answers = await prompter.prompt(questions)
    const { category, componentName } = answers
    const dirname = path.join('src/components', category, componentName)

    return {
      ...answers,
      tag,
      dirname,
    }
  }
}