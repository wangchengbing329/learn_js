// 命令行交互方式
// inquirer.prompt 让你知道选择的哪个选项

const inquirer = require('inquirer');

module.exports = (songs) => inquirer.prompt([{
  type: 'list',
  name: 'song',
  message: '共有 ' + songs.length + ' 个结果, 按下回车播放',
  choices: songs.map((i, index) => `${index + 1}${i.name}`)
}])
