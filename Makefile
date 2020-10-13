installdeps:
	npm install mocha --save && npm install chai --save 

test: 
	npm test


# This line is just to avoid conflicts with test folder that for some reason is conflicting with the previous rule
.PHONY: test
