.PHONY: create build publish commit push

BRANCH ?= main
COMMIT_MSG ?= rebuild mdbook

create: build

build:
	mdbook build .
	./epub_gen.sh

publish: build commit push

commit:
	git add book semantic_web_development.epub
	git commit -m "$(COMMIT_MSG)"

push:
	git push origin "$(BRANCH)"
