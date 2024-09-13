
install:
	npm install

start:
	npx node src/bin/gendiff.js -f 'json' ./__tests__/__fixtures__/file3.json ./__tests__/__fixtures__/file4.json
# npx node src/bin/gendiff.js ./misc/yaml1.yml ./misc/yaml2.yml
# node src/bin/gendiff.js /mnt/1C14A29714A27404/Js/hexlet/frontend-project-lvl2/misc/file1.json /mnt/1C14A29714A27404/Js/hexlet/frontend-project-lvl2/misc/file2.json


start-h:
	node src/bin/gendiff.js -h

start-v:
	npx node src/bin/gendiff.js -V

start-f:
	npx node src/bin/gendiff.js -f


publishLocal:
	npm publish --dry-run

publish:
	npm publish

lint:
	npx eslint .

