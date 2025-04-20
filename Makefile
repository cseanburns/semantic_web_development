.PHONY: create

create:
				mdbook build .
				./epub_gen.sh
