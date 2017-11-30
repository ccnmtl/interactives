STAGING_URL=https://interactives.stage.ccnmtl.columbia.edu/
PROD_URL=https://interactives.ctl.columbia.edu/
STAGING_BUCKET=interactives.stage.ccnmtl.columbia.edu
PROD_BUCKET=interactives.ctl.columbia.edu
INTERMEDIATE_STEPS ?= echo nothing

JS_FILES=static/js/src

all: eslint webpack

include *.mk

$(PUBLIC)/js/all.json: $(PUBLIC)/json/all/index.html
	mkdir $(PUBLIC)/js/ || true
	mv $< $@ && ./checkjson.py
