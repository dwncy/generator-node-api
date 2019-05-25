const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        validate: input => input.trim() !== '',
      }
    ]);
  }

  writing() {
    const props = {
      name: this.answers.name
    };

    this.fs.copyTpl(
      this.templatePath('.env.sample'),
      this.destinationPath('.env.sample'),
      props
    );

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      props
    );

    this.fs.copyTpl(
      this.templatePath('.gitignore'),
      this.destinationPath('.gitignore'),
      props
    );

    this.fs.copyTpl(
      this.templatePath('tests'),
      this.destinationPath('tests'),
      props
    );

    this.fs.copyTpl(
      this.templatePath('src'),
      this.destinationPath('src'),
      props
    );
  }

  install() {
    this.npmInstall();
  }
};
