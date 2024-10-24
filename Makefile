
install:
	npm ci

start: 
	npx gendiff -f 'stylish' __tests__/__fixtures__/file1.json __tests__/__fixtures__/file2.json

help:
	npx gendiff -h

v:
	npx gendiff.js -V

lint:
	npx eslint .



