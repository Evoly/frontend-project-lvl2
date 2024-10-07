
install:
	npm install

start:
# node bin/gendiff.js -f 'stylish' __tests__/__fixtures__/file3.json __tests__/__fixtures__/file4.json
	node bin/gendiff.js misc/test-data/__fixtures__/file1.json misc/test-data/__fixtures__/file2.json
# node bin/gendiff.js ./misc/yaml1.yml ./misc/yaml2.yml

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


