
install:
	npm ci

start: 
	npx gendiff -f 'stylish' __tests__/__fixtures__/file3.json __tests__/__fixtures__/file4.json

help:
	npx gendiff -h

v:
	npx gendiff.js -V

lint:
	npx eslint .



