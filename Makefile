
install:
	npm install

start: 
	node bin/gendiff.js -f 'stylish' __tests__/__fixtures__/file3.json __tests__/__fixtures__/file4.json

start-h:
	node bin/gendiff.js -h

start-v:
	node bin/gendiff.js -V

start-f:
	node src/bin/gendiff.js -f

pack:
	npm pack

lint:
	npx eslint .

start-t:	
	node bin/gendiff.js -h


