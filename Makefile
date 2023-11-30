
builder:
	docker run --rm -it --entrypoint /src/build_tools.sh -v ${PWD}/:/app node:lts-bullseye

shell:
	docker run --rm -it --entrypoint /bin/bash -v ${PWD}/:/app -p 4000:4000 node:lts-bullseye
