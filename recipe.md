========== INITAL SETUP ====================================================================
git init
npm init -y
git c - micro commits every time
npm i -D git-commit-msg-linter - so that we can ensure that the commits follow good conventions
https://www.conventionalcommits.org/en/v1.0.0/
npm i -D typescript
npm i -D @types/node - so that we can use node types

create tsconfig.json
outDir - where to put the compiled js files
module - the module to compile
target - the target to compile
esModuleInterop - true to enable esModuleInterop


add linter
https://standardjs.com/rules.html
npm i eslint-config-standard-with-typescript
install and enable ESlint vscode extension
create .eslintrc.json
extends: standard-with-typescript

add .eslintignore
============================================================================================
