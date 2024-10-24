
install:
	npm ci
	npm link

start: 
	gendiff -f 'stylish' __tests__/__fixtures__/file1.json __tests__/__fixtures__/file2.json

help:
	gendiff -h

v:
	gendiff.js -V

lint:
	npx eslint .



