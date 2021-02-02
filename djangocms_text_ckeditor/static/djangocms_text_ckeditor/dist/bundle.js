(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module2) => () => {
    if (!module2) {
      module2 = {exports: {}};
      callback(module2.exports, module2);
    }
    return module2.exports;
  };
  var __exportStar = (target, module2, desc) => {
    __markAsModule(target);
    if (module2 && typeof module2 === "object" || typeof module2 === "function") {
      for (let key of __getOwnPropNames(module2))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module2) => {
    if (module2 && module2.__esModule)
      return module2;
    return __exportStar(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", {value: module2, enumerable: true}), module2);
  };

  // node_modules/@ckeditor/ckeditor5-dll/build/ckeditor5-dll.js
  var require_ckeditor5_dll = __commonJS((exports, module) => {
    /*!
     * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
     * For licensing, see LICENSE.md.
     */
    !function(e, r) {
      typeof exports == "object" && typeof module == "object" ? module.exports = r() : typeof define == "function" && define.amd ? define([], r) : typeof exports == "object" ? exports.dll = r() : (e.CKEditor5 = e.CKEditor5 || {}, e.CKEditor5.dll = r());
    }(window, function() {
      return function(e) {
        var r = {};
        function n(o) {
          if (r[o])
            return r[o].exports;
          var c = r[o] = {i: o, l: false, exports: {}};
          return e[o].call(c.exports, c, c.exports, n), c.l = true, c.exports;
        }
        return n.m = e, n.c = r, n.d = function(e2, r2, o) {
          n.o(e2, r2) || Object.defineProperty(e2, r2, {enumerable: true, get: o});
        }, n.r = function(e2) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e2, "__esModule", {value: true});
        }, n.t = function(e2, r2) {
          if (1 & r2 && (e2 = n(e2)), 8 & r2)
            return e2;
          if (4 & r2 && typeof e2 == "object" && e2 && e2.__esModule)
            return e2;
          var o = Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", {enumerable: true, value: e2}), 2 & r2 && typeof e2 != "string")
            for (var c in e2)
              n.d(o, c, function(r3) {
                return e2[r3];
              }.bind(null, c));
          return o;
        }, n.n = function(e2) {
          var r2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(r2, "a", r2), r2;
        }, n.o = function(e2, r2) {
          return Object.prototype.hasOwnProperty.call(e2, r2);
        }, n.p = "", n(n.s = 0);
      }({"./src/clipboard.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-clipboard'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-clipboard'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/clipboard
 */




//# sourceURL=webpack://CKEditor5.dll/./src/clipboard.js?`);
      }, "./src/cloud-services-core.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor-cloud-services-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor-cloud-services-core'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/cloud-services-core
 */




//# sourceURL=webpack://CKEditor5.dll/./src/cloud-services-core.js?`);
      }, "./src/core.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-core'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/core
 */




//# sourceURL=webpack://CKEditor5.dll/./src/core.js?`);
      }, "./src/engine.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-engine'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-engine'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/engine
 */




//# sourceURL=webpack://CKEditor5.dll/./src/engine.js?`);
      }, "./src/enter.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-enter'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-enter'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/enter
 */




//# sourceURL=webpack://CKEditor5.dll/./src/enter.js?`);
      }, "./src/paragraph.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-paragraph'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-paragraph'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/paragraph
 */




//# sourceURL=webpack://CKEditor5.dll/./src/paragraph.js?`);
      }, "./src/select-all.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-select-all'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-select-all'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/select-all
 */




//# sourceURL=webpack://CKEditor5.dll/./src/select-all.js?`);
      }, "./src/typing.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-typing'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-typing'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/typing
 */




//# sourceURL=webpack://CKEditor5.dll/./src/typing.js?`);
      }, "./src/ui.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-ui'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-ui'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/ui
 */




//# sourceURL=webpack://CKEditor5.dll/./src/ui.js?`);
      }, "./src/undo.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-undo'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-undo'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/undo
 */




//# sourceURL=webpack://CKEditor5.dll/./src/undo.js?`);
      }, "./src/upload.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-upload'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-upload'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/upload
 */




//# sourceURL=webpack://CKEditor5.dll/./src/upload.js?`);
      }, "./src/utils.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-utils'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-utils'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/utils
 */




//# sourceURL=webpack://CKEditor5.dll/./src/utils.js?`);
      }, "./src/widget.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval(`__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@ckeditor/ckeditor5-widget'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
throw new Error("Cannot find module '@ckeditor/ckeditor5-widget'");
/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 *  @module ckeditor5/widget
 */




//# sourceURL=webpack://CKEditor5.dll/./src/widget.js?`);
      }, 0: function(module, exports, __webpack_require__) {
        eval("module.exports = __webpack_require__;\n\n//# sourceURL=webpack://CKEditor5.dll/dll_main?");
      }});
    });
  });

  // djangocms_text_ckeditor/static/djangocms_text_ckeditor/build.ckeditor.js
  var ckeditor5_dll = __toModule(require_ckeditor5_dll());
  var build_ckeditor_default = ckeditor5_dll.default;
})();
//# sourceMappingURL=bundle.js.map
