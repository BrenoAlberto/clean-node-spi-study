========== INITAL SETUP ====================================================================
git init
npm init -y
commit "chore: add npm"

git c - micro commits every time
npm i -D git-commit-msg-linter - so that we can ensure that the commits follow good conventions
https://www.conventionalcommits.org/en/v1.0.0/
npm i -D typescript
npm i -D @types/node - so that we can use node types
commit "chore: add commit linter"

create tsconfig.json
outDir - where to put the compiled js files
module - the module to compile
target - the target to compile
esModuleInterop - true to enable esModuleInterop
commit "chore: add typescript"

add linter
https://standardjs.com/rules.html
npm i eslint-config-standard-with-typescript
install and enable ESlint vscode extension
create .eslintrc.json
extends: standard-with-typescript

add .eslintignore
commit "chore: add eslint"

git commit --amend --no-edit | if you forgot to add something to a commit you can amend it

npm i -D husky
husky is a tool that helps you to manage your git commits
add .huskyrc.json
hooks - pre-commit - lint-staged

npm i -D lint-staged
add .lintstagedrc.json
lint-staged will make sure that husky only checks the files that have been changed

commit "chore: add husky and lint-staged"

npm i -D jest @types/jest ts-jest
npx jest --init
add config to jest.config.ts
collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

git c "chore: add jest"
============================================================================================
