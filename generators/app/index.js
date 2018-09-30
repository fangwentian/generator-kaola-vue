var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    initializing() {
        this.log('Welcome to use this scaffolding tool')
    }

    async prompting() {
        this.answers = await this.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: '请输入你的工程名称',
                default: 'kaola-pop-fed'
            }, 
            {
                type: 'list',
                name: 'isUseVuex',
                message: '是否使用vuex',
                choices: [
                    { name: '使用', value: 0 },
                    { name: '不使用', value: 1 }
                ],
                default: 0
            }
        ])
    }

    configuring() {
        this.log(this.answers)
    }

    writing() {
        this.fs.copyTpl(
            this.templatePath(),
            this.destinationPath(),
            { ...this.answers, BASE_URL: '/kaola/' }
        )
    }

    install() {
        this.npmInstall()
    }

    end() {
        this.log('Generate files done')
    }
}