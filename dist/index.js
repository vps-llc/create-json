/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 750:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const core = __nccwpck_require__(750);
const fs = __nccwpck_require__(147);
const path = __nccwpck_require__(17);

const fileName = core.getInput('name');
const jsonString = core.getInput('json');
const dir = core.getInput('dir');
const fullPath = path.join(process.env.GITHUB_WORKSPACE, dir || "", fileName);

let fileContent = JSON.stringify(jsonString);

fileContent = JSON.parse(fileContent)

try {
    core.info('Creating json file...')
    fs.writeFile(fullPath, fileContent, function (error) {

        if (error) {
            core.setFailed(error.message);
            throw error
        }

        core.info('JSON file created.')

        fs.readFile(fullPath, null, handleFile)

        function handleFile(err, data) {
            if (err) {
                core.setFailed(error.message)
                throw err
            }

            core.info('JSON checked.')
            core.setOutput("successfully", `Successfully created json on ${fullPath} directory with ${fileContent} data`);
        }
    });
} catch (err) {
    core.setFailed(err.message);
}

})();

module.exports = __webpack_exports__;
/******/ })()
;