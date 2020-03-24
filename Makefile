
install:
	npm install

start:
	npx babel-node src/bin/gendiff.js

start-h:
	npx babel-node src/bin/gendiff.js -h

publishLocal:
	npm publish --dry-run

publish:
	npm publish

lint:
	npx eslint .

.PHONY: test
