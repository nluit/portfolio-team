build:
	docker build -t jayvirrathi/nodejs-basic .

run:
	docker run --rm -p 3000:3000 jayvirrathi/nodejs-basic

run-dev:
	docker run \
		-p 3000:3000 \
		-p 9229:9229 \
		-v $(PWD):/usr/src/app \
		-v /usr/src/app/node_modules \
		jayvirrathi/nodejs-basic nodemon --inspect=0.0.0.0:9229 src/index.js
