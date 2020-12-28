(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
  var __commonJS = (callback, module) => () => {
    if (!module) {
      module = {exports: {}};
      callback(module.exports, module);
    }
    return module.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, {get: all[name], enumerable: true});
  };
  var __exportStar = (target, module, desc) => {
    __markAsModule(target);
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, {get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable});
    }
    return target;
  };
  var __toModule = (module) => {
    if (module && module.__esModule)
      return module;
    return __exportStar(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", {value: module, enumerable: true}), module);
  };

  // node_modules/lodash-es/isBuffer.js
  var require_isBuffer = __commonJS((exports, module) => {
    __export(exports, {
      default: () => isBuffer_default
    });
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root_default.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer9 = nativeIsBuffer || stubFalse_default;
    var isBuffer_default = isBuffer9;
  });

  // node_modules/lodash-es/_nodeUtil.js
  var require_nodeUtil = __commonJS((exports, module) => {
    __export(exports, {
      default: () => nodeUtil_default
    });
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal_default.process;
    var nodeUtil7 = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeUtil_default = nodeUtil7;
  });

  // node_modules/lodash-es/_cloneBuffer.js
  var require_cloneBuffer = __commonJS((exports, module) => {
    __export(exports, {
      default: () => cloneBuffer_default
    });
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root_default.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer5(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    var cloneBuffer_default = cloneBuffer5;
  });

  // node_modules/lodash-es/_freeGlobal.js
  var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
  var freeGlobal_default = freeGlobal;

  // node_modules/lodash-es/_root.js
  var freeSelf = typeof self == "object" && self && self.Object === Object && self;
  var root = freeGlobal_default || freeSelf || Function("return this")();
  var root_default = root;

  // node_modules/lodash-es/_Symbol.js
  var Symbol2 = root_default.Symbol;
  var Symbol_default = Symbol2;

  // node_modules/lodash-es/_getRawTag.js
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var nativeObjectToString = objectProto.toString;
  var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
      value[symToStringTag] = void 0;
      var unmasked = true;
    } catch (e) {
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  var getRawTag_default = getRawTag;

  // node_modules/lodash-es/_objectToString.js
  var objectProto2 = Object.prototype;
  var nativeObjectToString2 = objectProto2.toString;
  function objectToString(value) {
    return nativeObjectToString2.call(value);
  }
  var objectToString_default = objectToString;

  // node_modules/lodash-es/_baseGetTag.js
  var nullTag = "[object Null]";
  var undefinedTag = "[object Undefined]";
  var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
  function baseGetTag(value) {
    if (value == null) {
      return value === void 0 ? undefinedTag : nullTag;
    }
    return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
  }
  var baseGetTag_default = baseGetTag;

  // node_modules/lodash-es/isObjectLike.js
  function isObjectLike(value) {
    return value != null && typeof value == "object";
  }
  var isObjectLike_default = isObjectLike;

  // node_modules/lodash-es/isSymbol.js
  var symbolTag = "[object Symbol]";
  function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
  }
  var isSymbol_default = isSymbol;

  // node_modules/lodash-es/_arrayMap.js
  function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }
    return result;
  }
  var arrayMap_default = arrayMap;

  // node_modules/lodash-es/isArray.js
  var isArray = Array.isArray;
  var isArray_default = isArray;

  // node_modules/lodash-es/_baseToString.js
  var INFINITY = 1 / 0;
  var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolToString = symbolProto ? symbolProto.toString : void 0;
  function baseToString(value) {
    if (typeof value == "string") {
      return value;
    }
    if (isArray_default(value)) {
      return arrayMap_default(value, baseToString) + "";
    }
    if (isSymbol_default(value)) {
      return symbolToString ? symbolToString.call(value) : "";
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
  }
  var baseToString_default = baseToString;

  // node_modules/lodash-es/isObject.js
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
  }
  var isObject_default = isObject;

  // node_modules/lodash-es/toNumber.js
  var NAN = 0 / 0;
  var reTrim = /^\s+|\s+$/g;
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  var reIsBinary = /^0b[01]+$/i;
  var reIsOctal = /^0o[0-7]+$/i;
  var freeParseInt = parseInt;
  function toNumber(value) {
    if (typeof value == "number") {
      return value;
    }
    if (isSymbol_default(value)) {
      return NAN;
    }
    if (isObject_default(value)) {
      var other = typeof value.valueOf == "function" ? value.valueOf() : value;
      value = isObject_default(other) ? other + "" : other;
    }
    if (typeof value != "string") {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }
  var toNumber_default = toNumber;

  // node_modules/lodash-es/identity.js
  function identity(value) {
    return value;
  }
  var identity_default = identity;

  // node_modules/lodash-es/isFunction.js
  var asyncTag = "[object AsyncFunction]";
  var funcTag = "[object Function]";
  var genTag = "[object GeneratorFunction]";
  var proxyTag = "[object Proxy]";
  function isFunction(value) {
    if (!isObject_default(value)) {
      return false;
    }
    var tag = baseGetTag_default(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }
  var isFunction_default = isFunction;

  // node_modules/lodash-es/_coreJsData.js
  var coreJsData = root_default["__core-js_shared__"];
  var coreJsData_default = coreJsData;

  // node_modules/lodash-es/_isMasked.js
  var maskSrcKey = function() {
    var uid8 = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
    return uid8 ? "Symbol(src)_1." + uid8 : "";
  }();
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }
  var isMasked_default = isMasked;

  // node_modules/lodash-es/_toSource.js
  var funcProto = Function.prototype;
  var funcToString = funcProto.toString;
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {
      }
      try {
        return func + "";
      } catch (e) {
      }
    }
    return "";
  }
  var toSource_default = toSource;

  // node_modules/lodash-es/_baseIsNative.js
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto2 = Function.prototype;
  var objectProto3 = Object.prototype;
  var funcToString2 = funcProto2.toString;
  var hasOwnProperty2 = objectProto3.hasOwnProperty;
  var reIsNative = RegExp("^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  function baseIsNative(value) {
    if (!isObject_default(value) || isMasked_default(value)) {
      return false;
    }
    var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource_default(value));
  }
  var baseIsNative_default = baseIsNative;

  // node_modules/lodash-es/_getValue.js
  function getValue(object, key) {
    return object == null ? void 0 : object[key];
  }
  var getValue_default = getValue;

  // node_modules/lodash-es/_getNative.js
  function getNative(object, key) {
    var value = getValue_default(object, key);
    return baseIsNative_default(value) ? value : void 0;
  }
  var getNative_default = getNative;

  // node_modules/lodash-es/_WeakMap.js
  var WeakMap2 = getNative_default(root_default, "WeakMap");
  var WeakMap_default = WeakMap2;

  // node_modules/lodash-es/_baseCreate.js
  var objectCreate = Object.create;
  var baseCreate = function() {
    function object() {
    }
    return function(proto) {
      if (!isObject_default(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = void 0;
      return result;
    };
  }();
  var baseCreate_default = baseCreate;

  // node_modules/lodash-es/_apply.js
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }
  var apply_default = apply;

  // node_modules/lodash-es/_copyArray.js
  function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }
  var copyArray_default = copyArray;

  // node_modules/lodash-es/_shortOut.js
  var HOT_COUNT = 800;
  var HOT_SPAN = 16;
  var nativeNow = Date.now;
  function shortOut(func) {
    var count4 = 0, lastCalled = 0;
    return function() {
      var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;
      if (remaining > 0) {
        if (++count4 >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count4 = 0;
      }
      return func.apply(void 0, arguments);
    };
  }
  var shortOut_default = shortOut;

  // node_modules/lodash-es/constant.js
  function constant(value) {
    return function() {
      return value;
    };
  }
  var constant_default = constant;

  // node_modules/lodash-es/_defineProperty.js
  var defineProperty = function() {
    try {
      var func = getNative_default(Object, "defineProperty");
      func({}, "", {});
      return func;
    } catch (e) {
    }
  }();
  var defineProperty_default = defineProperty;

  // node_modules/lodash-es/_baseSetToString.js
  var baseSetToString = !defineProperty_default ? identity_default : function(func, string) {
    return defineProperty_default(func, "toString", {
      configurable: true,
      enumerable: false,
      value: constant_default(string),
      writable: true
    });
  };
  var baseSetToString_default = baseSetToString;

  // node_modules/lodash-es/_setToString.js
  var setToString = shortOut_default(baseSetToString_default);
  var setToString_default = setToString;

  // node_modules/lodash-es/_arrayEach.js
  function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }
  var arrayEach_default = arrayEach;

  // node_modules/lodash-es/_isIndex.js
  var MAX_SAFE_INTEGER = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
  }
  var isIndex_default = isIndex;

  // node_modules/lodash-es/_baseAssignValue.js
  function baseAssignValue(object, key, value) {
    if (key == "__proto__" && defineProperty_default) {
      defineProperty_default(object, key, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      });
    } else {
      object[key] = value;
    }
  }
  var baseAssignValue_default = baseAssignValue;

  // node_modules/lodash-es/eq.js
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }
  var eq_default = eq;

  // node_modules/lodash-es/_assignValue.js
  var objectProto4 = Object.prototype;
  var hasOwnProperty3 = objectProto4.hasOwnProperty;
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var assignValue_default = assignValue;

  // node_modules/lodash-es/_copyObject.js
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
      if (newValue === void 0) {
        newValue = source[key];
      }
      if (isNew) {
        baseAssignValue_default(object, key, newValue);
      } else {
        assignValue_default(object, key, newValue);
      }
    }
    return object;
  }
  var copyObject_default = copyObject;

  // node_modules/lodash-es/_overRest.js
  var nativeMax = Math.max;
  function overRest(func, start, transform4) {
    start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
    return function() {
      var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform4(array);
      return apply_default(func, this, otherArgs);
    };
  }
  var overRest_default = overRest;

  // node_modules/lodash-es/_baseRest.js
  function baseRest(func, start) {
    return setToString_default(overRest_default(func, start, identity_default), func + "");
  }
  var baseRest_default = baseRest;

  // node_modules/lodash-es/isLength.js
  var MAX_SAFE_INTEGER2 = 9007199254740991;
  function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER2;
  }
  var isLength_default = isLength;

  // node_modules/lodash-es/isArrayLike.js
  function isArrayLike(value) {
    return value != null && isLength_default(value.length) && !isFunction_default(value);
  }
  var isArrayLike_default = isArrayLike;

  // node_modules/lodash-es/_isIterateeCall.js
  function isIterateeCall(value, index, object) {
    if (!isObject_default(object)) {
      return false;
    }
    var type = typeof index;
    if (type == "number" ? isArrayLike_default(object) && isIndex_default(index, object.length) : type == "string" && index in object) {
      return eq_default(object[index], value);
    }
    return false;
  }
  var isIterateeCall_default = isIterateeCall;

  // node_modules/lodash-es/_createAssigner.js
  function createAssigner(assigner) {
    return baseRest_default(function(object, sources) {
      var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
      customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
      if (guard && isIterateeCall_default(sources[0], sources[1], guard)) {
        customizer = length < 3 ? void 0 : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }
  var createAssigner_default = createAssigner;

  // node_modules/lodash-es/_isPrototype.js
  var objectProto5 = Object.prototype;
  function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto5;
    return value === proto;
  }
  var isPrototype_default = isPrototype;

  // node_modules/lodash-es/_baseTimes.js
  function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }
  var baseTimes_default = baseTimes;

  // node_modules/lodash-es/_baseIsArguments.js
  var argsTag = "[object Arguments]";
  function baseIsArguments(value) {
    return isObjectLike_default(value) && baseGetTag_default(value) == argsTag;
  }
  var baseIsArguments_default = baseIsArguments;

  // node_modules/lodash-es/isArguments.js
  var objectProto6 = Object.prototype;
  var hasOwnProperty4 = objectProto6.hasOwnProperty;
  var propertyIsEnumerable = objectProto6.propertyIsEnumerable;
  var isArguments = baseIsArguments_default(function() {
    return arguments;
  }()) ? baseIsArguments_default : function(value) {
    return isObjectLike_default(value) && hasOwnProperty4.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  var isArguments_default = isArguments;

  // node_modules/lodash-es/stubFalse.js
  function stubFalse() {
    return false;
  }
  var stubFalse_default = stubFalse;

  // node_modules/lodash-es/_arrayLikeKeys.js
  var isBuffer = __toModule(require_isBuffer());

  // node_modules/lodash-es/_baseIsTypedArray.js
  var argsTag2 = "[object Arguments]";
  var arrayTag = "[object Array]";
  var boolTag = "[object Boolean]";
  var dateTag = "[object Date]";
  var errorTag = "[object Error]";
  var funcTag2 = "[object Function]";
  var mapTag = "[object Map]";
  var numberTag = "[object Number]";
  var objectTag = "[object Object]";
  var regexpTag = "[object RegExp]";
  var setTag = "[object Set]";
  var stringTag = "[object String]";
  var weakMapTag = "[object WeakMap]";
  var arrayBufferTag = "[object ArrayBuffer]";
  var dataViewTag = "[object DataView]";
  var float32Tag = "[object Float32Array]";
  var float64Tag = "[object Float64Array]";
  var int8Tag = "[object Int8Array]";
  var int16Tag = "[object Int16Array]";
  var int32Tag = "[object Int32Array]";
  var uint8Tag = "[object Uint8Array]";
  var uint8ClampedTag = "[object Uint8ClampedArray]";
  var uint16Tag = "[object Uint16Array]";
  var uint32Tag = "[object Uint32Array]";
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag2] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag2] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  function baseIsTypedArray(value) {
    return isObjectLike_default(value) && isLength_default(value.length) && !!typedArrayTags[baseGetTag_default(value)];
  }
  var baseIsTypedArray_default = baseIsTypedArray;

  // node_modules/lodash-es/_baseUnary.js
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }
  var baseUnary_default = baseUnary;

  // node_modules/lodash-es/isTypedArray.js
  var nodeUtil = __toModule(require_nodeUtil());
  var nodeIsTypedArray = nodeUtil.default && nodeUtil.default.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary_default(nodeIsTypedArray) : baseIsTypedArray_default;
  var isTypedArray_default = isTypedArray;

  // node_modules/lodash-es/_arrayLikeKeys.js
  var objectProto7 = Object.prototype;
  var hasOwnProperty5 = objectProto7.hasOwnProperty;
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_default(value), isArg = !isArr && isArguments_default(value), isBuff = !isArr && !isArg && isBuffer.default(value), isType = !isArr && !isArg && !isBuff && isTypedArray_default(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes_default(value.length, String) : [], length = result.length;
    for (var key in value) {
      if ((inherited || hasOwnProperty5.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex_default(key, length)))) {
        result.push(key);
      }
    }
    return result;
  }
  var arrayLikeKeys_default = arrayLikeKeys;

  // node_modules/lodash-es/_overArg.js
  function overArg(func, transform4) {
    return function(arg) {
      return func(transform4(arg));
    };
  }
  var overArg_default = overArg;

  // node_modules/lodash-es/_nativeKeys.js
  var nativeKeys = overArg_default(Object.keys, Object);
  var nativeKeys_default = nativeKeys;

  // node_modules/lodash-es/_baseKeys.js
  var objectProto8 = Object.prototype;
  var hasOwnProperty6 = objectProto8.hasOwnProperty;
  function baseKeys(object) {
    if (!isPrototype_default(object)) {
      return nativeKeys_default(object);
    }
    var result = [];
    for (var key in Object(object)) {
      if (hasOwnProperty6.call(object, key) && key != "constructor") {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeys_default = baseKeys;

  // node_modules/lodash-es/keys.js
  function keys(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object) : baseKeys_default(object);
  }
  var keys_default = keys;

  // node_modules/lodash-es/_nativeKeysIn.js
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }
  var nativeKeysIn_default = nativeKeysIn;

  // node_modules/lodash-es/_baseKeysIn.js
  var objectProto9 = Object.prototype;
  var hasOwnProperty7 = objectProto9.hasOwnProperty;
  function baseKeysIn(object) {
    if (!isObject_default(object)) {
      return nativeKeysIn_default(object);
    }
    var isProto = isPrototype_default(object), result = [];
    for (var key in object) {
      if (!(key == "constructor" && (isProto || !hasOwnProperty7.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }
  var baseKeysIn_default = baseKeysIn;

  // node_modules/lodash-es/keysIn.js
  function keysIn2(object) {
    return isArrayLike_default(object) ? arrayLikeKeys_default(object, true) : baseKeysIn_default(object);
  }
  var keysIn_default = keysIn2;

  // node_modules/lodash-es/assignIn.js
  var assignIn = createAssigner_default(function(object, source) {
    copyObject_default(source, keysIn_default(source), object);
  });
  var assignIn_default = assignIn;

  // node_modules/lodash-es/_isKey.js
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
  var reIsPlainProp = /^\w*$/;
  function isKey(value, object) {
    if (isArray_default(value)) {
      return false;
    }
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
      return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
  }
  var isKey_default = isKey;

  // node_modules/lodash-es/_nativeCreate.js
  var nativeCreate = getNative_default(Object, "create");
  var nativeCreate_default = nativeCreate;

  // node_modules/lodash-es/_hashClear.js
  function hashClear() {
    this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
    this.size = 0;
  }
  var hashClear_default = hashClear;

  // node_modules/lodash-es/_hashDelete.js
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }
  var hashDelete_default = hashDelete;

  // node_modules/lodash-es/_hashGet.js
  var HASH_UNDEFINED = "__lodash_hash_undefined__";
  var objectProto10 = Object.prototype;
  var hasOwnProperty8 = objectProto10.hasOwnProperty;
  function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate_default) {
      var result = data[key];
      return result === HASH_UNDEFINED ? void 0 : result;
    }
    return hasOwnProperty8.call(data, key) ? data[key] : void 0;
  }
  var hashGet_default = hashGet;

  // node_modules/lodash-es/_hashHas.js
  var objectProto11 = Object.prototype;
  var hasOwnProperty9 = objectProto11.hasOwnProperty;
  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty9.call(data, key);
  }
  var hashHas_default = hashHas;

  // node_modules/lodash-es/_hashSet.js
  var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
    return this;
  }
  var hashSet_default = hashSet;

  // node_modules/lodash-es/_Hash.js
  function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  Hash.prototype.clear = hashClear_default;
  Hash.prototype["delete"] = hashDelete_default;
  Hash.prototype.get = hashGet_default;
  Hash.prototype.has = hashHas_default;
  Hash.prototype.set = hashSet_default;
  var Hash_default = Hash;

  // node_modules/lodash-es/_listCacheClear.js
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }
  var listCacheClear_default = listCacheClear;

  // node_modules/lodash-es/_assocIndexOf.js
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_default(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }
  var assocIndexOf_default = assocIndexOf;

  // node_modules/lodash-es/_listCacheDelete.js
  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;
  function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }
  var listCacheDelete_default = listCacheDelete;

  // node_modules/lodash-es/_listCacheGet.js
  function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    return index < 0 ? void 0 : data[index][1];
  }
  var listCacheGet_default = listCacheGet;

  // node_modules/lodash-es/_listCacheHas.js
  function listCacheHas(key) {
    return assocIndexOf_default(this.__data__, key) > -1;
  }
  var listCacheHas_default = listCacheHas;

  // node_modules/lodash-es/_listCacheSet.js
  function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf_default(data, key);
    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }
  var listCacheSet_default = listCacheSet;

  // node_modules/lodash-es/_ListCache.js
  function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  ListCache.prototype.clear = listCacheClear_default;
  ListCache.prototype["delete"] = listCacheDelete_default;
  ListCache.prototype.get = listCacheGet_default;
  ListCache.prototype.has = listCacheHas_default;
  ListCache.prototype.set = listCacheSet_default;
  var ListCache_default = ListCache;

  // node_modules/lodash-es/_Map.js
  var Map2 = getNative_default(root_default, "Map");
  var Map_default = Map2;

  // node_modules/lodash-es/_mapCacheClear.js
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      hash: new Hash_default(),
      map: new (Map_default || ListCache_default)(),
      string: new Hash_default()
    };
  }
  var mapCacheClear_default = mapCacheClear;

  // node_modules/lodash-es/_isKeyable.js
  function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
  }
  var isKeyable_default = isKeyable;

  // node_modules/lodash-es/_getMapData.js
  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
  }
  var getMapData_default = getMapData;

  // node_modules/lodash-es/_mapCacheDelete.js
  function mapCacheDelete(key) {
    var result = getMapData_default(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
  }
  var mapCacheDelete_default = mapCacheDelete;

  // node_modules/lodash-es/_mapCacheGet.js
  function mapCacheGet(key) {
    return getMapData_default(this, key).get(key);
  }
  var mapCacheGet_default = mapCacheGet;

  // node_modules/lodash-es/_mapCacheHas.js
  function mapCacheHas(key) {
    return getMapData_default(this, key).has(key);
  }
  var mapCacheHas_default = mapCacheHas;

  // node_modules/lodash-es/_mapCacheSet.js
  function mapCacheSet(key, value) {
    var data = getMapData_default(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }
  var mapCacheSet_default = mapCacheSet;

  // node_modules/lodash-es/_MapCache.js
  function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }
  MapCache.prototype.clear = mapCacheClear_default;
  MapCache.prototype["delete"] = mapCacheDelete_default;
  MapCache.prototype.get = mapCacheGet_default;
  MapCache.prototype.has = mapCacheHas_default;
  MapCache.prototype.set = mapCacheSet_default;
  var MapCache_default = MapCache;

  // node_modules/lodash-es/memoize.js
  var FUNC_ERROR_TEXT = "Expected a function";
  function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
      var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
      if (cache.has(key)) {
        return cache.get(key);
      }
      var result = func.apply(this, args);
      memoized.cache = cache.set(key, result) || cache;
      return result;
    };
    memoized.cache = new (memoize.Cache || MapCache_default)();
    return memoized;
  }
  memoize.Cache = MapCache_default;
  var memoize_default = memoize;

  // node_modules/lodash-es/_memoizeCapped.js
  var MAX_MEMOIZE_SIZE = 500;
  function memoizeCapped(func) {
    var result = memoize_default(func, function(key) {
      if (cache.size === MAX_MEMOIZE_SIZE) {
        cache.clear();
      }
      return key;
    });
    var cache = result.cache;
    return result;
  }
  var memoizeCapped_default = memoizeCapped;

  // node_modules/lodash-es/_stringToPath.js
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = memoizeCapped_default(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46) {
      result.push("");
    }
    string.replace(rePropName, function(match, number, quote, subString) {
      result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
  });
  var stringToPath_default = stringToPath;

  // node_modules/lodash-es/toString.js
  function toString(value) {
    return value == null ? "" : baseToString_default(value);
  }
  var toString_default = toString;

  // node_modules/lodash-es/_castPath.js
  function castPath(value, object) {
    if (isArray_default(value)) {
      return value;
    }
    return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
  }
  var castPath_default = castPath;

  // node_modules/lodash-es/_toKey.js
  var INFINITY2 = 1 / 0;
  function toKey(value) {
    if (typeof value == "string" || isSymbol_default(value)) {
      return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
  }
  var toKey_default = toKey;

  // node_modules/lodash-es/_baseGet.js
  function baseGet(object, path) {
    path = castPath_default(path, object);
    var index = 0, length = path.length;
    while (object != null && index < length) {
      object = object[toKey_default(path[index++])];
    }
    return index && index == length ? object : void 0;
  }
  var baseGet_default = baseGet;

  // node_modules/lodash-es/get.js
  function get(object, path, defaultValue) {
    var result = object == null ? void 0 : baseGet_default(object, path);
    return result === void 0 ? defaultValue : result;
  }
  var get_default = get;

  // node_modules/lodash-es/_arrayPush.js
  function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while (++index < length) {
      array[offset + index] = values[index];
    }
    return array;
  }
  var arrayPush_default = arrayPush;

  // node_modules/lodash-es/_getPrototype.js
  var getPrototype = overArg_default(Object.getPrototypeOf, Object);
  var getPrototype_default = getPrototype;

  // node_modules/lodash-es/isPlainObject.js
  var objectTag2 = "[object Object]";
  var funcProto3 = Function.prototype;
  var objectProto12 = Object.prototype;
  var funcToString3 = funcProto3.toString;
  var hasOwnProperty10 = objectProto12.hasOwnProperty;
  var objectCtorString = funcToString3.call(Object);
  function isPlainObject(value) {
    if (!isObjectLike_default(value) || baseGetTag_default(value) != objectTag2) {
      return false;
    }
    var proto = getPrototype_default(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty10.call(proto, "constructor") && proto.constructor;
    return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString3.call(Ctor) == objectCtorString;
  }
  var isPlainObject_default = isPlainObject;

  // node_modules/lodash-es/_baseSlice.js
  function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
      start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
      end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while (++index < length) {
      result[index] = array[index + start];
    }
    return result;
  }
  var baseSlice_default = baseSlice;

  // node_modules/lodash-es/_stackClear.js
  function stackClear() {
    this.__data__ = new ListCache_default();
    this.size = 0;
  }
  var stackClear_default = stackClear;

  // node_modules/lodash-es/_stackDelete.js
  function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
  }
  var stackDelete_default = stackDelete;

  // node_modules/lodash-es/_stackGet.js
  function stackGet(key) {
    return this.__data__.get(key);
  }
  var stackGet_default = stackGet;

  // node_modules/lodash-es/_stackHas.js
  function stackHas(key) {
    return this.__data__.has(key);
  }
  var stackHas_default = stackHas;

  // node_modules/lodash-es/_stackSet.js
  var LARGE_ARRAY_SIZE = 200;
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache_default) {
      var pairs = data.__data__;
      if (!Map_default || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new MapCache_default(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }
  var stackSet_default = stackSet;

  // node_modules/lodash-es/_Stack.js
  function Stack(entries) {
    var data = this.__data__ = new ListCache_default(entries);
    this.size = data.size;
  }
  Stack.prototype.clear = stackClear_default;
  Stack.prototype["delete"] = stackDelete_default;
  Stack.prototype.get = stackGet_default;
  Stack.prototype.has = stackHas_default;
  Stack.prototype.set = stackSet_default;
  var Stack_default = Stack;

  // node_modules/lodash-es/_baseAssign.js
  function baseAssign(object, source) {
    return object && copyObject_default(source, keys_default(source), object);
  }
  var baseAssign_default = baseAssign;

  // node_modules/lodash-es/_baseAssignIn.js
  function baseAssignIn(object, source) {
    return object && copyObject_default(source, keysIn_default(source), object);
  }
  var baseAssignIn_default = baseAssignIn;

  // node_modules/lodash-es/_baseClone.js
  var cloneBuffer = __toModule(require_cloneBuffer());

  // node_modules/lodash-es/_arrayFilter.js
  function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while (++index < length) {
      var value = array[index];
      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }
    return result;
  }
  var arrayFilter_default = arrayFilter;

  // node_modules/lodash-es/stubArray.js
  function stubArray() {
    return [];
  }
  var stubArray_default = stubArray;

  // node_modules/lodash-es/_getSymbols.js
  var objectProto13 = Object.prototype;
  var propertyIsEnumerable2 = objectProto13.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray_default : function(object) {
    if (object == null) {
      return [];
    }
    object = Object(object);
    return arrayFilter_default(nativeGetSymbols(object), function(symbol) {
      return propertyIsEnumerable2.call(object, symbol);
    });
  };
  var getSymbols_default = getSymbols;

  // node_modules/lodash-es/_copySymbols.js
  function copySymbols(source, object) {
    return copyObject_default(source, getSymbols_default(source), object);
  }
  var copySymbols_default = copySymbols;

  // node_modules/lodash-es/_getSymbolsIn.js
  var nativeGetSymbols2 = Object.getOwnPropertySymbols;
  var getSymbolsIn = !nativeGetSymbols2 ? stubArray_default : function(object) {
    var result = [];
    while (object) {
      arrayPush_default(result, getSymbols_default(object));
      object = getPrototype_default(object);
    }
    return result;
  };
  var getSymbolsIn_default = getSymbolsIn;

  // node_modules/lodash-es/_copySymbolsIn.js
  function copySymbolsIn(source, object) {
    return copyObject_default(source, getSymbolsIn_default(source), object);
  }
  var copySymbolsIn_default = copySymbolsIn;

  // node_modules/lodash-es/_baseGetAllKeys.js
  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray_default(object) ? result : arrayPush_default(result, symbolsFunc(object));
  }
  var baseGetAllKeys_default = baseGetAllKeys;

  // node_modules/lodash-es/_getAllKeys.js
  function getAllKeys(object) {
    return baseGetAllKeys_default(object, keys_default, getSymbols_default);
  }
  var getAllKeys_default = getAllKeys;

  // node_modules/lodash-es/_getAllKeysIn.js
  function getAllKeysIn(object) {
    return baseGetAllKeys_default(object, keysIn_default, getSymbolsIn_default);
  }
  var getAllKeysIn_default = getAllKeysIn;

  // node_modules/lodash-es/_DataView.js
  var DataView = getNative_default(root_default, "DataView");
  var DataView_default = DataView;

  // node_modules/lodash-es/_Promise.js
  var Promise2 = getNative_default(root_default, "Promise");
  var Promise_default = Promise2;

  // node_modules/lodash-es/_Set.js
  var Set2 = getNative_default(root_default, "Set");
  var Set_default = Set2;

  // node_modules/lodash-es/_getTag.js
  var mapTag2 = "[object Map]";
  var objectTag3 = "[object Object]";
  var promiseTag = "[object Promise]";
  var setTag2 = "[object Set]";
  var weakMapTag2 = "[object WeakMap]";
  var dataViewTag2 = "[object DataView]";
  var dataViewCtorString = toSource_default(DataView_default);
  var mapCtorString = toSource_default(Map_default);
  var promiseCtorString = toSource_default(Promise_default);
  var setCtorString = toSource_default(Set_default);
  var weakMapCtorString = toSource_default(WeakMap_default);
  var getTag = baseGetTag_default;
  if (DataView_default && getTag(new DataView_default(new ArrayBuffer(1))) != dataViewTag2 || Map_default && getTag(new Map_default()) != mapTag2 || Promise_default && getTag(Promise_default.resolve()) != promiseTag || Set_default && getTag(new Set_default()) != setTag2 || WeakMap_default && getTag(new WeakMap_default()) != weakMapTag2) {
    getTag = function(value) {
      var result = baseGetTag_default(value), Ctor = result == objectTag3 ? value.constructor : void 0, ctorString = Ctor ? toSource_default(Ctor) : "";
      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag2;
          case mapCtorString:
            return mapTag2;
          case promiseCtorString:
            return promiseTag;
          case setCtorString:
            return setTag2;
          case weakMapCtorString:
            return weakMapTag2;
        }
      }
      return result;
    };
  }
  var getTag_default = getTag;

  // node_modules/lodash-es/_initCloneArray.js
  var objectProto14 = Object.prototype;
  var hasOwnProperty11 = objectProto14.hasOwnProperty;
  function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    if (length && typeof array[0] == "string" && hasOwnProperty11.call(array, "index")) {
      result.index = array.index;
      result.input = array.input;
    }
    return result;
  }
  var initCloneArray_default = initCloneArray;

  // node_modules/lodash-es/_Uint8Array.js
  var Uint8Array2 = root_default.Uint8Array;
  var Uint8Array_default = Uint8Array2;

  // node_modules/lodash-es/_cloneArrayBuffer.js
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array_default(result).set(new Uint8Array_default(arrayBuffer));
    return result;
  }
  var cloneArrayBuffer_default = cloneArrayBuffer;

  // node_modules/lodash-es/_cloneDataView.js
  function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer_default(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
  }
  var cloneDataView_default = cloneDataView;

  // node_modules/lodash-es/_cloneRegExp.js
  var reFlags = /\w*$/;
  function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
  }
  var cloneRegExp_default = cloneRegExp;

  // node_modules/lodash-es/_cloneSymbol.js
  var symbolProto2 = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf = symbolProto2 ? symbolProto2.valueOf : void 0;
  function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
  }
  var cloneSymbol_default = cloneSymbol;

  // node_modules/lodash-es/_cloneTypedArray.js
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer_default(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  var cloneTypedArray_default = cloneTypedArray;

  // node_modules/lodash-es/_initCloneByTag.js
  var boolTag2 = "[object Boolean]";
  var dateTag2 = "[object Date]";
  var mapTag3 = "[object Map]";
  var numberTag2 = "[object Number]";
  var regexpTag2 = "[object RegExp]";
  var setTag3 = "[object Set]";
  var stringTag2 = "[object String]";
  var symbolTag2 = "[object Symbol]";
  var arrayBufferTag2 = "[object ArrayBuffer]";
  var dataViewTag3 = "[object DataView]";
  var float32Tag2 = "[object Float32Array]";
  var float64Tag2 = "[object Float64Array]";
  var int8Tag2 = "[object Int8Array]";
  var int16Tag2 = "[object Int16Array]";
  var int32Tag2 = "[object Int32Array]";
  var uint8Tag2 = "[object Uint8Array]";
  var uint8ClampedTag2 = "[object Uint8ClampedArray]";
  var uint16Tag2 = "[object Uint16Array]";
  var uint32Tag2 = "[object Uint32Array]";
  function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
      case arrayBufferTag2:
        return cloneArrayBuffer_default(object);
      case boolTag2:
      case dateTag2:
        return new Ctor(+object);
      case dataViewTag3:
        return cloneDataView_default(object, isDeep);
      case float32Tag2:
      case float64Tag2:
      case int8Tag2:
      case int16Tag2:
      case int32Tag2:
      case uint8Tag2:
      case uint8ClampedTag2:
      case uint16Tag2:
      case uint32Tag2:
        return cloneTypedArray_default(object, isDeep);
      case mapTag3:
        return new Ctor();
      case numberTag2:
      case stringTag2:
        return new Ctor(object);
      case regexpTag2:
        return cloneRegExp_default(object);
      case setTag3:
        return new Ctor();
      case symbolTag2:
        return cloneSymbol_default(object);
    }
  }
  var initCloneByTag_default = initCloneByTag;

  // node_modules/lodash-es/_initCloneObject.js
  function initCloneObject(object) {
    return typeof object.constructor == "function" && !isPrototype_default(object) ? baseCreate_default(getPrototype_default(object)) : {};
  }
  var initCloneObject_default = initCloneObject;

  // node_modules/lodash-es/_baseClone.js
  var isBuffer3 = __toModule(require_isBuffer());

  // node_modules/lodash-es/_baseIsMap.js
  var mapTag4 = "[object Map]";
  function baseIsMap(value) {
    return isObjectLike_default(value) && getTag_default(value) == mapTag4;
  }
  var baseIsMap_default = baseIsMap;

  // node_modules/lodash-es/isMap.js
  var nodeUtil3 = __toModule(require_nodeUtil());
  var nodeIsMap = nodeUtil3.default && nodeUtil3.default.isMap;
  var isMap = nodeIsMap ? baseUnary_default(nodeIsMap) : baseIsMap_default;
  var isMap_default = isMap;

  // node_modules/lodash-es/_baseIsSet.js
  var setTag4 = "[object Set]";
  function baseIsSet(value) {
    return isObjectLike_default(value) && getTag_default(value) == setTag4;
  }
  var baseIsSet_default = baseIsSet;

  // node_modules/lodash-es/isSet.js
  var nodeUtil5 = __toModule(require_nodeUtil());
  var nodeIsSet = nodeUtil5.default && nodeUtil5.default.isSet;
  var isSet = nodeIsSet ? baseUnary_default(nodeIsSet) : baseIsSet_default;
  var isSet_default = isSet;

  // node_modules/lodash-es/_baseClone.js
  var CLONE_DEEP_FLAG = 1;
  var CLONE_FLAT_FLAG = 2;
  var CLONE_SYMBOLS_FLAG = 4;
  var argsTag3 = "[object Arguments]";
  var arrayTag2 = "[object Array]";
  var boolTag3 = "[object Boolean]";
  var dateTag3 = "[object Date]";
  var errorTag2 = "[object Error]";
  var funcTag3 = "[object Function]";
  var genTag2 = "[object GeneratorFunction]";
  var mapTag5 = "[object Map]";
  var numberTag3 = "[object Number]";
  var objectTag4 = "[object Object]";
  var regexpTag3 = "[object RegExp]";
  var setTag5 = "[object Set]";
  var stringTag3 = "[object String]";
  var symbolTag3 = "[object Symbol]";
  var weakMapTag3 = "[object WeakMap]";
  var arrayBufferTag3 = "[object ArrayBuffer]";
  var dataViewTag4 = "[object DataView]";
  var float32Tag3 = "[object Float32Array]";
  var float64Tag3 = "[object Float64Array]";
  var int8Tag3 = "[object Int8Array]";
  var int16Tag3 = "[object Int16Array]";
  var int32Tag3 = "[object Int32Array]";
  var uint8Tag3 = "[object Uint8Array]";
  var uint8ClampedTag3 = "[object Uint8ClampedArray]";
  var uint16Tag3 = "[object Uint16Array]";
  var uint32Tag3 = "[object Uint32Array]";
  var cloneableTags = {};
  cloneableTags[argsTag3] = cloneableTags[arrayTag2] = cloneableTags[arrayBufferTag3] = cloneableTags[dataViewTag4] = cloneableTags[boolTag3] = cloneableTags[dateTag3] = cloneableTags[float32Tag3] = cloneableTags[float64Tag3] = cloneableTags[int8Tag3] = cloneableTags[int16Tag3] = cloneableTags[int32Tag3] = cloneableTags[mapTag5] = cloneableTags[numberTag3] = cloneableTags[objectTag4] = cloneableTags[regexpTag3] = cloneableTags[setTag5] = cloneableTags[stringTag3] = cloneableTags[symbolTag3] = cloneableTags[uint8Tag3] = cloneableTags[uint8ClampedTag3] = cloneableTags[uint16Tag3] = cloneableTags[uint32Tag3] = true;
  cloneableTags[errorTag2] = cloneableTags[funcTag3] = cloneableTags[weakMapTag3] = false;
  function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
      result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== void 0) {
      return result;
    }
    if (!isObject_default(value)) {
      return value;
    }
    var isArr = isArray_default(value);
    if (isArr) {
      result = initCloneArray_default(value);
      if (!isDeep) {
        return copyArray_default(value, result);
      }
    } else {
      var tag = getTag_default(value), isFunc = tag == funcTag3 || tag == genTag2;
      if (isBuffer3.default(value)) {
        return cloneBuffer.default(value, isDeep);
      }
      if (tag == objectTag4 || tag == argsTag3 || isFunc && !object) {
        result = isFlat || isFunc ? {} : initCloneObject_default(value);
        if (!isDeep) {
          return isFlat ? copySymbolsIn_default(value, baseAssignIn_default(result, value)) : copySymbols_default(value, baseAssign_default(result, value));
        }
      } else {
        if (!cloneableTags[tag]) {
          return object ? value : {};
        }
        result = initCloneByTag_default(value, tag, isDeep);
      }
    }
    stack || (stack = new Stack_default());
    var stacked = stack.get(value);
    if (stacked) {
      return stacked;
    }
    stack.set(value, result);
    if (isSet_default(value)) {
      value.forEach(function(subValue) {
        result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
      });
    } else if (isMap_default(value)) {
      value.forEach(function(subValue, key2) {
        result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn_default : getAllKeys_default : isFlat ? keysIn : keys_default;
    var props = isArr ? void 0 : keysFunc(value);
    arrayEach_default(props || value, function(subValue, key2) {
      if (props) {
        key2 = subValue;
        subValue = value[key2];
      }
      assignValue_default(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
    return result;
  }
  var baseClone_default = baseClone;

  // node_modules/lodash-es/clone.js
  var CLONE_SYMBOLS_FLAG2 = 4;
  function clone(value) {
    return baseClone_default(value, CLONE_SYMBOLS_FLAG2);
  }
  var clone_default = clone;

  // node_modules/lodash-es/cloneDeep.js
  var CLONE_DEEP_FLAG2 = 1;
  var CLONE_SYMBOLS_FLAG3 = 4;
  function cloneDeep(value) {
    return baseClone_default(value, CLONE_DEEP_FLAG2 | CLONE_SYMBOLS_FLAG3);
  }
  var cloneDeep_default = cloneDeep;

  // node_modules/lodash-es/cloneDeepWith.js
  var CLONE_DEEP_FLAG3 = 1;
  var CLONE_SYMBOLS_FLAG4 = 4;
  function cloneDeepWith(value, customizer) {
    customizer = typeof customizer == "function" ? customizer : void 0;
    return baseClone_default(value, CLONE_DEEP_FLAG3 | CLONE_SYMBOLS_FLAG4, customizer);
  }
  var cloneDeepWith_default = cloneDeepWith;

  // node_modules/lodash-es/_setCacheAdd.js
  var HASH_UNDEFINED3 = "__lodash_hash_undefined__";
  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED3);
    return this;
  }
  var setCacheAdd_default = setCacheAdd;

  // node_modules/lodash-es/_setCacheHas.js
  function setCacheHas(value) {
    return this.__data__.has(value);
  }
  var setCacheHas_default = setCacheHas;

  // node_modules/lodash-es/_SetCache.js
  function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache_default();
    while (++index < length) {
      this.add(values[index]);
    }
  }
  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd_default;
  SetCache.prototype.has = setCacheHas_default;
  var SetCache_default = SetCache;

  // node_modules/lodash-es/_arraySome.js
  function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }
    return false;
  }
  var arraySome_default = arraySome;

  // node_modules/lodash-es/_cacheHas.js
  function cacheHas(cache, key) {
    return cache.has(key);
  }
  var cacheHas_default = cacheHas;

  // node_modules/lodash-es/_equalArrays.js
  var COMPARE_PARTIAL_FLAG = 1;
  var COMPARE_UNORDERED_FLAG = 2;
  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache_default() : void 0;
    stack.set(array, other);
    stack.set(other, array);
    while (++index < arrLength) {
      var arrValue = array[index], othValue = other[index];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }
      if (compared !== void 0) {
        if (compared) {
          continue;
        }
        result = false;
        break;
      }
      if (seen) {
        if (!arraySome_default(other, function(othValue2, othIndex) {
          if (!cacheHas_default(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
  }
  var equalArrays_default = equalArrays;

  // node_modules/lodash-es/_mapToArray.js
  function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
      result[++index] = [key, value];
    });
    return result;
  }
  var mapToArray_default = mapToArray;

  // node_modules/lodash-es/_setToArray.js
  function setToArray(set2) {
    var index = -1, result = Array(set2.size);
    set2.forEach(function(value) {
      result[++index] = value;
    });
    return result;
  }
  var setToArray_default = setToArray;

  // node_modules/lodash-es/_equalByTag.js
  var COMPARE_PARTIAL_FLAG2 = 1;
  var COMPARE_UNORDERED_FLAG2 = 2;
  var boolTag4 = "[object Boolean]";
  var dateTag4 = "[object Date]";
  var errorTag3 = "[object Error]";
  var mapTag6 = "[object Map]";
  var numberTag4 = "[object Number]";
  var regexpTag4 = "[object RegExp]";
  var setTag6 = "[object Set]";
  var stringTag4 = "[object String]";
  var symbolTag4 = "[object Symbol]";
  var arrayBufferTag4 = "[object ArrayBuffer]";
  var dataViewTag5 = "[object DataView]";
  var symbolProto3 = Symbol_default ? Symbol_default.prototype : void 0;
  var symbolValueOf2 = symbolProto3 ? symbolProto3.valueOf : void 0;
  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag5:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }
        object = object.buffer;
        other = other.buffer;
      case arrayBufferTag4:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array_default(object), new Uint8Array_default(other))) {
          return false;
        }
        return true;
      case boolTag4:
      case dateTag4:
      case numberTag4:
        return eq_default(+object, +other);
      case errorTag3:
        return object.name == other.name && object.message == other.message;
      case regexpTag4:
      case stringTag4:
        return object == other + "";
      case mapTag6:
        var convert = mapToArray_default;
      case setTag6:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG2;
        convert || (convert = setToArray_default);
        if (object.size != other.size && !isPartial) {
          return false;
        }
        var stacked = stack.get(object);
        if (stacked) {
          return stacked == other;
        }
        bitmask |= COMPARE_UNORDERED_FLAG2;
        stack.set(object, other);
        var result = equalArrays_default(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack["delete"](object);
        return result;
      case symbolTag4:
        if (symbolValueOf2) {
          return symbolValueOf2.call(object) == symbolValueOf2.call(other);
        }
    }
    return false;
  }
  var equalByTag_default = equalByTag;

  // node_modules/lodash-es/_equalObjects.js
  var COMPARE_PARTIAL_FLAG3 = 1;
  var objectProto15 = Object.prototype;
  var hasOwnProperty12 = objectProto15.hasOwnProperty;
  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG3, objProps = getAllKeys_default(object), objLength = objProps.length, othProps = getAllKeys_default(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
      return false;
    }
    var index = objLength;
    while (index--) {
      var key = objProps[index];
      if (!(isPartial ? key in other : hasOwnProperty12.call(other, key))) {
        return false;
      }
    }
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
      return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key], othValue = other[key];
      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }
      if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }
      skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
      var objCtor = object.constructor, othCtor = other.constructor;
      if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
        result = false;
      }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
  }
  var equalObjects_default = equalObjects;

  // node_modules/lodash-es/_baseIsEqualDeep.js
  var isBuffer5 = __toModule(require_isBuffer());
  var COMPARE_PARTIAL_FLAG4 = 1;
  var argsTag4 = "[object Arguments]";
  var arrayTag3 = "[object Array]";
  var objectTag5 = "[object Object]";
  var objectProto16 = Object.prototype;
  var hasOwnProperty13 = objectProto16.hasOwnProperty;
  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray_default(object), othIsArr = isArray_default(other), objTag = objIsArr ? arrayTag3 : getTag_default(object), othTag = othIsArr ? arrayTag3 : getTag_default(other);
    objTag = objTag == argsTag4 ? objectTag5 : objTag;
    othTag = othTag == argsTag4 ? objectTag5 : othTag;
    var objIsObj = objTag == objectTag5, othIsObj = othTag == objectTag5, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer5.default(object)) {
      if (!isBuffer5.default(other)) {
        return false;
      }
      objIsArr = true;
      objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack_default());
      return objIsArr || isTypedArray_default(object) ? equalArrays_default(object, other, bitmask, customizer, equalFunc, stack) : equalByTag_default(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG4)) {
      var objIsWrapped = objIsObj && hasOwnProperty13.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty13.call(other, "__wrapped__");
      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack_default());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }
    if (!isSameTag) {
      return false;
    }
    stack || (stack = new Stack_default());
    return equalObjects_default(object, other, bitmask, customizer, equalFunc, stack);
  }
  var baseIsEqualDeep_default = baseIsEqualDeep;

  // node_modules/lodash-es/_baseIsEqual.js
  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }
    if (value == null || other == null || !isObjectLike_default(value) && !isObjectLike_default(other)) {
      return value !== value && other !== other;
    }
    return baseIsEqualDeep_default(value, other, bitmask, customizer, baseIsEqual, stack);
  }
  var baseIsEqual_default = baseIsEqual;

  // node_modules/lodash-es/_createBaseFor.js
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }
  var createBaseFor_default = createBaseFor;

  // node_modules/lodash-es/_baseFor.js
  var baseFor = createBaseFor_default();
  var baseFor_default = baseFor;

  // node_modules/lodash-es/now.js
  var now = function() {
    return root_default.Date.now();
  };
  var now_default = now;

  // node_modules/lodash-es/debounce.js
  var FUNC_ERROR_TEXT2 = "Expected a function";
  var nativeMax2 = Math.max;
  var nativeMin = Math.min;
  function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") {
      throw new TypeError(FUNC_ERROR_TEXT2);
    }
    wait = toNumber_default(wait) || 0;
    if (isObject_default(options)) {
      leading = !!options.leading;
      maxing = "maxWait" in options;
      maxWait = maxing ? nativeMax2(toNumber_default(options.maxWait) || 0, wait) : maxWait;
      trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
      var args = lastArgs, thisArg = lastThis;
      lastArgs = lastThis = void 0;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }
    function leadingEdge(time) {
      lastInvokeTime = time;
      timerId = setTimeout(timerExpired, wait);
      return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
      return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
      return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
      var time = now_default();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
      timerId = void 0;
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = void 0;
      return result;
    }
    function cancel() {
      if (timerId !== void 0) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = void 0;
    }
    function flush() {
      return timerId === void 0 ? result : trailingEdge(now_default());
    }
    function debounced() {
      var time = now_default(), isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;
      if (isInvoking) {
        if (timerId === void 0) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          clearTimeout(timerId);
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === void 0) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  var debounce_default = debounce;

  // node_modules/lodash-es/_assignMergeValue.js
  function assignMergeValue(object, key, value) {
    if (value !== void 0 && !eq_default(object[key], value) || value === void 0 && !(key in object)) {
      baseAssignValue_default(object, key, value);
    }
  }
  var assignMergeValue_default = assignMergeValue;

  // node_modules/lodash-es/_baseMergeDeep.js
  var cloneBuffer3 = __toModule(require_cloneBuffer());

  // node_modules/lodash-es/isArrayLikeObject.js
  function isArrayLikeObject(value) {
    return isObjectLike_default(value) && isArrayLike_default(value);
  }
  var isArrayLikeObject_default = isArrayLikeObject;

  // node_modules/lodash-es/_baseMergeDeep.js
  var isBuffer7 = __toModule(require_isBuffer());

  // node_modules/lodash-es/_safeGet.js
  function safeGet(object, key) {
    if (key === "constructor" && typeof object[key] === "function") {
      return;
    }
    if (key == "__proto__") {
      return;
    }
    return object[key];
  }
  var safeGet_default = safeGet;

  // node_modules/lodash-es/toPlainObject.js
  function toPlainObject(value) {
    return copyObject_default(value, keysIn_default(value));
  }
  var toPlainObject_default = toPlainObject;

  // node_modules/lodash-es/_baseMergeDeep.js
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = safeGet_default(object, key), srcValue = safeGet_default(source, key), stacked = stack.get(srcValue);
    if (stacked) {
      assignMergeValue_default(object, key, stacked);
      return;
    }
    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
    var isCommon = newValue === void 0;
    if (isCommon) {
      var isArr = isArray_default(srcValue), isBuff = !isArr && isBuffer7.default(srcValue), isTyped = !isArr && !isBuff && isTypedArray_default(srcValue);
      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray_default(objValue)) {
          newValue = objValue;
        } else if (isArrayLikeObject_default(objValue)) {
          newValue = copyArray_default(objValue);
        } else if (isBuff) {
          isCommon = false;
          newValue = cloneBuffer3.default(srcValue, true);
        } else if (isTyped) {
          isCommon = false;
          newValue = cloneTypedArray_default(srcValue, true);
        } else {
          newValue = [];
        }
      } else if (isPlainObject_default(srcValue) || isArguments_default(srcValue)) {
        newValue = objValue;
        if (isArguments_default(objValue)) {
          newValue = toPlainObject_default(objValue);
        } else if (!isObject_default(objValue) || isFunction_default(objValue)) {
          newValue = initCloneObject_default(srcValue);
        }
      } else {
        isCommon = false;
      }
    }
    if (isCommon) {
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack["delete"](srcValue);
    }
    assignMergeValue_default(object, key, newValue);
  }
  var baseMergeDeep_default = baseMergeDeep;

  // node_modules/lodash-es/_baseMerge.js
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    baseFor_default(source, function(srcValue, key) {
      stack || (stack = new Stack_default());
      if (isObject_default(srcValue)) {
        baseMergeDeep_default(object, source, key, srcIndex, baseMerge, customizer, stack);
      } else {
        var newValue = customizer ? customizer(safeGet_default(object, key), srcValue, key + "", object, source, stack) : void 0;
        if (newValue === void 0) {
          newValue = srcValue;
        }
        assignMergeValue_default(object, key, newValue);
      }
    }, keysIn_default);
  }
  var baseMerge_default = baseMerge;

  // node_modules/lodash-es/last.js
  function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : void 0;
  }
  var last_default = last;

  // node_modules/lodash-es/isString.js
  var stringTag5 = "[object String]";
  function isString(value) {
    return typeof value == "string" || !isArray_default(value) && isObjectLike_default(value) && baseGetTag_default(value) == stringTag5;
  }
  var isString_default = isString;

  // node_modules/lodash-es/_parent.js
  function parent(object, path) {
    return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
  }
  var parent_default = parent;

  // node_modules/lodash-es/isElement.js
  function isElement(value) {
    return isObjectLike_default(value) && value.nodeType === 1 && !isPlainObject_default(value);
  }
  var isElement_default = isElement;

  // node_modules/lodash-es/isEqual.js
  function isEqual(value, other) {
    return baseIsEqual_default(value, other);
  }
  var isEqual_default = isEqual;

  // node_modules/lodash-es/isEqualWith.js
  function isEqualWith(value, other, customizer) {
    customizer = typeof customizer == "function" ? customizer : void 0;
    var result = customizer ? customizer(value, other) : void 0;
    return result === void 0 ? baseIsEqual_default(value, other, void 0, customizer) : !!result;
  }
  var isEqualWith_default = isEqualWith;

  // node_modules/lodash-es/merge.js
  var merge = createAssigner_default(function(object, source, srcIndex) {
    baseMerge_default(object, source, srcIndex);
  });
  var merge_default = merge;

  // node_modules/lodash-es/_baseUnset.js
  function baseUnset(object, path) {
    path = castPath_default(path, object);
    object = parent_default(object, path);
    return object == null || delete object[toKey_default(last_default(path))];
  }
  var baseUnset_default = baseUnset;

  // node_modules/lodash-es/_baseSet.js
  function baseSet(object, path, value, customizer) {
    if (!isObject_default(object)) {
      return object;
    }
    path = castPath_default(path, object);
    var index = -1, length = path.length, lastIndex = length - 1, nested = object;
    while (nested != null && ++index < length) {
      var key = toKey_default(path[index]), newValue = value;
      if (index != lastIndex) {
        var objValue = nested[key];
        newValue = customizer ? customizer(objValue, key, nested) : void 0;
        if (newValue === void 0) {
          newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
        }
      }
      assignValue_default(nested, key, newValue);
      nested = nested[key];
    }
    return object;
  }
  var baseSet_default = baseSet;

  // node_modules/lodash-es/set.js
  function set(object, path, value) {
    return object == null ? object : baseSet_default(object, path, value);
  }
  var set_default = set;

  // node_modules/lodash-es/unset.js
  function unset(object, path) {
    return object == null ? true : baseUnset_default(object, path);
  }
  var unset_default = unset;

  // node_modules/@ckeditor/ckeditor5-utils/src/config.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Config = class {
    constructor(configurations, defaultConfigurations) {
      this._config = {};
      if (defaultConfigurations) {
        this.define(cloneConfig(defaultConfigurations));
      }
      if (configurations) {
        this._setObjectToTarget(this._config, configurations);
      }
    }
    set(name, value) {
      this._setToTarget(this._config, name, value);
    }
    define(name, value) {
      const isDefine = true;
      this._setToTarget(this._config, name, value, isDefine);
    }
    get(name) {
      return this._getFromSource(this._config, name);
    }
    *names() {
      for (const name of Object.keys(this._config)) {
        yield name;
      }
    }
    _setToTarget(target, name, value, isDefine = false) {
      if (isPlainObject_default(name)) {
        this._setObjectToTarget(target, name, isDefine);
        return;
      }
      const parts = name.split(".");
      name = parts.pop();
      for (const part of parts) {
        if (!isPlainObject_default(target[part])) {
          target[part] = {};
        }
        target = target[part];
      }
      if (isPlainObject_default(value)) {
        if (!isPlainObject_default(target[name])) {
          target[name] = {};
        }
        target = target[name];
        this._setObjectToTarget(target, value, isDefine);
        return;
      }
      if (isDefine && typeof target[name] != "undefined") {
        return;
      }
      target[name] = value;
    }
    _getFromSource(source, name) {
      const parts = name.split(".");
      name = parts.pop();
      for (const part of parts) {
        if (!isPlainObject_default(source[part])) {
          source = null;
          break;
        }
        source = source[part];
      }
      return source ? cloneConfig(source[name]) : void 0;
    }
    _setObjectToTarget(target, configuration, isDefine) {
      Object.keys(configuration).forEach((key) => {
        this._setToTarget(target, key, configuration[key], isDefine);
      });
    }
  };
  var config_default = Config;
  function cloneConfig(source) {
    return cloneDeepWith_default(source, leaveDOMReferences);
  }
  function leaveDOMReferences(value) {
    return isElement_default(value) ? value : void 0;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/spy.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function spy() {
    return function spy3() {
      spy3.called = true;
    };
  }
  var spy_default = spy;

  // node_modules/@ckeditor/ckeditor5-utils/src/eventinfo.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EventInfo = class {
    constructor(source, name) {
      this.source = source;
      this.name = name;
      this.path = [];
      this.stop = spy_default();
      this.off = spy_default();
    }
  };
  var eventinfo_default = EventInfo;

  // node_modules/@ckeditor/ckeditor5-utils/src/uid.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var HEX_NUMBERS = new Array(256).fill().map((val, index) => ("0" + index.toString(16)).slice(-2));
  function uid() {
    const r1 = Math.random() * 4294967296 >>> 0;
    const r2 = Math.random() * 4294967296 >>> 0;
    const r3 = Math.random() * 4294967296 >>> 0;
    const r4 = Math.random() * 4294967296 >>> 0;
    return "e" + HEX_NUMBERS[r1 >> 0 & 255] + HEX_NUMBERS[r1 >> 8 & 255] + HEX_NUMBERS[r1 >> 16 & 255] + HEX_NUMBERS[r1 >> 24 & 255] + HEX_NUMBERS[r2 >> 0 & 255] + HEX_NUMBERS[r2 >> 8 & 255] + HEX_NUMBERS[r2 >> 16 & 255] + HEX_NUMBERS[r2 >> 24 & 255] + HEX_NUMBERS[r3 >> 0 & 255] + HEX_NUMBERS[r3 >> 8 & 255] + HEX_NUMBERS[r3 >> 16 & 255] + HEX_NUMBERS[r3 >> 24 & 255] + HEX_NUMBERS[r4 >> 0 & 255] + HEX_NUMBERS[r4 >> 8 & 255] + HEX_NUMBERS[r4 >> 16 & 255] + HEX_NUMBERS[r4 >> 24 & 255];
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/priorities.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var priorities = {
    get(priority) {
      if (typeof priority != "number") {
        return this[priority] || this.normal;
      } else {
        return priority;
      }
    },
    highest: 1e5,
    high: 1e3,
    normal: 0,
    low: -1e3,
    lowest: -1e5
  };
  var priorities_default = priorities;

  // node_modules/@ckeditor/ckeditor5-utils/src/ckeditorerror.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DOCUMENTATION_URL = "https://ckeditor.com/docs/ckeditor5/latest/framework/guides/support/error-codes.html";
  var CKEditorError = class extends Error {
    constructor(errorName, context2, data) {
      const message = `${errorName}${data ? ` ${JSON.stringify(data)}` : ""}${getLinkToDocumentationMessage(errorName)}`;
      super(message);
      this.name = "CKEditorError";
      this.context = context2;
      this.data = data;
    }
    is(type) {
      return type === "CKEditorError";
    }
    static rethrowUnexpectedError(err, context2) {
      if (err.is && err.is("CKEditorError")) {
        throw err;
      }
      const error = new CKEditorError(err.message, context2);
      error.stack = err.stack;
      throw error;
    }
  };
  var ckeditorerror_default = CKEditorError;
  function logWarning(errorName, data) {
    console.warn(...formatConsoleArguments(errorName, data));
  }
  function logError(errorName, data) {
    console.error(...formatConsoleArguments(errorName, data));
  }
  function getLinkToDocumentationMessage(errorName) {
    return `
Read more: ${DOCUMENTATION_URL}#error-${errorName}`;
  }
  function formatConsoleArguments(errorName, data) {
    const documentationMessage = getLinkToDocumentationMessage(errorName);
    return data ? [errorName, data, documentationMessage] : [errorName, documentationMessage];
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/version.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var version = "24.0.0";
  var windowOrGlobal = typeof window === "object" ? window : global;
  if (windowOrGlobal.CKEDITOR_VERSION) {
    throw new ckeditorerror_default("ckeditor-duplicated-modules", null);
  } else {
    windowOrGlobal.CKEDITOR_VERSION = version;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/emittermixin.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var _listeningTo = Symbol("listeningTo");
  var _emitterId = Symbol("emitterId");
  var EmitterMixin = {
    on(event, callback, options = {}) {
      this.listenTo(this, event, callback, options);
    },
    once(event, callback, options) {
      let wasFired = false;
      const onceCallback = function(event2, ...args) {
        if (!wasFired) {
          wasFired = true;
          event2.off();
          callback.call(this, event2, ...args);
        }
      };
      this.listenTo(this, event, onceCallback, options);
    },
    off(event, callback) {
      this.stopListening(this, event, callback);
    },
    listenTo(emitter, event, callback, options = {}) {
      let emitterInfo, eventCallbacks;
      if (!this[_listeningTo]) {
        this[_listeningTo] = {};
      }
      const emitters = this[_listeningTo];
      if (!_getEmitterId(emitter)) {
        _setEmitterId(emitter);
      }
      const emitterId = _getEmitterId(emitter);
      if (!(emitterInfo = emitters[emitterId])) {
        emitterInfo = emitters[emitterId] = {
          emitter,
          callbacks: {}
        };
      }
      if (!(eventCallbacks = emitterInfo.callbacks[event])) {
        eventCallbacks = emitterInfo.callbacks[event] = [];
      }
      eventCallbacks.push(callback);
      createEventNamespace(emitter, event);
      const lists = getCallbacksListsForNamespace(emitter, event);
      const priority = priorities_default.get(options.priority);
      const callbackDefinition = {
        callback,
        priority
      };
      for (const callbacks of lists) {
        let added = false;
        for (let i = 0; i < callbacks.length; i++) {
          if (callbacks[i].priority < priority) {
            callbacks.splice(i, 0, callbackDefinition);
            added = true;
            break;
          }
        }
        if (!added) {
          callbacks.push(callbackDefinition);
        }
      }
    },
    stopListening(emitter, event, callback) {
      const emitters = this[_listeningTo];
      let emitterId = emitter && _getEmitterId(emitter);
      const emitterInfo = emitters && emitterId && emitters[emitterId];
      const eventCallbacks = emitterInfo && event && emitterInfo.callbacks[event];
      if (!emitters || emitter && !emitterInfo || event && !eventCallbacks) {
        return;
      }
      if (callback) {
        removeCallback(emitter, event, callback);
        const index = eventCallbacks.indexOf(callback);
        if (index !== -1) {
          if (eventCallbacks.length === 1) {
            delete emitterInfo.callbacks[event];
          } else {
            removeCallback(emitter, event, callback);
          }
        }
      } else if (eventCallbacks) {
        while (callback = eventCallbacks.pop()) {
          removeCallback(emitter, event, callback);
        }
        delete emitterInfo.callbacks[event];
      } else if (emitterInfo) {
        for (event in emitterInfo.callbacks) {
          this.stopListening(emitter, event);
        }
        delete emitters[emitterId];
      } else {
        for (emitterId in emitters) {
          this.stopListening(emitters[emitterId].emitter);
        }
        delete this[_listeningTo];
      }
    },
    fire(eventOrInfo, ...args) {
      try {
        const eventInfo = eventOrInfo instanceof eventinfo_default ? eventOrInfo : new eventinfo_default(this, eventOrInfo);
        const event = eventInfo.name;
        let callbacks = getCallbacksForEvent(this, event);
        eventInfo.path.push(this);
        if (callbacks) {
          const callbackArgs = [eventInfo, ...args];
          callbacks = Array.from(callbacks);
          for (let i = 0; i < callbacks.length; i++) {
            callbacks[i].callback.apply(this, callbackArgs);
            if (eventInfo.off.called) {
              delete eventInfo.off.called;
              removeCallback(this, event, callbacks[i].callback);
            }
            if (eventInfo.stop.called) {
              break;
            }
          }
        }
        if (this._delegations) {
          const destinations = this._delegations.get(event);
          const passAllDestinations = this._delegations.get("*");
          if (destinations) {
            fireDelegatedEvents(destinations, eventInfo, args);
          }
          if (passAllDestinations) {
            fireDelegatedEvents(passAllDestinations, eventInfo, args);
          }
        }
        return eventInfo.return;
      } catch (err) {
        ckeditorerror_default.rethrowUnexpectedError(err, this);
      }
    },
    delegate(...events) {
      return {
        to: (emitter, nameOrFunction) => {
          if (!this._delegations) {
            this._delegations = new Map();
          }
          events.forEach((eventName) => {
            const destinations = this._delegations.get(eventName);
            if (!destinations) {
              this._delegations.set(eventName, new Map([[emitter, nameOrFunction]]));
            } else {
              destinations.set(emitter, nameOrFunction);
            }
          });
        }
      };
    },
    stopDelegating(event, emitter) {
      if (!this._delegations) {
        return;
      }
      if (!event) {
        this._delegations.clear();
      } else if (!emitter) {
        this._delegations.delete(event);
      } else {
        const destinations = this._delegations.get(event);
        if (destinations) {
          destinations.delete(emitter);
        }
      }
    }
  };
  var emittermixin_default = EmitterMixin;
  function _getEmitterListenedTo(listeningEmitter, listenedToEmitterId) {
    if (listeningEmitter[_listeningTo] && listeningEmitter[_listeningTo][listenedToEmitterId]) {
      return listeningEmitter[_listeningTo][listenedToEmitterId].emitter;
    }
    return null;
  }
  function _setEmitterId(emitter, id) {
    if (!emitter[_emitterId]) {
      emitter[_emitterId] = id || uid();
    }
  }
  function _getEmitterId(emitter) {
    return emitter[_emitterId];
  }
  function getEvents(source) {
    if (!source._events) {
      Object.defineProperty(source, "_events", {
        value: {}
      });
    }
    return source._events;
  }
  function makeEventNode() {
    return {
      callbacks: [],
      childEvents: []
    };
  }
  function createEventNamespace(source, eventName) {
    const events = getEvents(source);
    if (events[eventName]) {
      return;
    }
    let name = eventName;
    let childEventName = null;
    const newEventNodes = [];
    while (name !== "") {
      if (events[name]) {
        break;
      }
      events[name] = makeEventNode();
      newEventNodes.push(events[name]);
      if (childEventName) {
        events[name].childEvents.push(childEventName);
      }
      childEventName = name;
      name = name.substr(0, name.lastIndexOf(":"));
    }
    if (name !== "") {
      for (const node12 of newEventNodes) {
        node12.callbacks = events[name].callbacks.slice();
      }
      events[name].childEvents.push(childEventName);
    }
  }
  function getCallbacksListsForNamespace(source, eventName) {
    const eventNode = getEvents(source)[eventName];
    if (!eventNode) {
      return [];
    }
    let callbacksLists = [eventNode.callbacks];
    for (let i = 0; i < eventNode.childEvents.length; i++) {
      const childCallbacksLists = getCallbacksListsForNamespace(source, eventNode.childEvents[i]);
      callbacksLists = callbacksLists.concat(childCallbacksLists);
    }
    return callbacksLists;
  }
  function getCallbacksForEvent(source, eventName) {
    let event;
    if (!source._events || !(event = source._events[eventName]) || !event.callbacks.length) {
      if (eventName.indexOf(":") > -1) {
        return getCallbacksForEvent(source, eventName.substr(0, eventName.lastIndexOf(":")));
      } else {
        return null;
      }
    }
    return event.callbacks;
  }
  function fireDelegatedEvents(destinations, eventInfo, fireArgs) {
    for (let [emitter, name] of destinations) {
      if (!name) {
        name = eventInfo.name;
      } else if (typeof name == "function") {
        name = name(eventInfo.name);
      }
      const delegatedInfo = new eventinfo_default(eventInfo.source, name);
      delegatedInfo.path = [...eventInfo.path];
      emitter.fire(delegatedInfo, ...fireArgs);
    }
  }
  function removeCallback(emitter, event, callback) {
    const lists = getCallbacksListsForNamespace(emitter, event);
    for (const callbacks of lists) {
      for (let i = 0; i < callbacks.length; i++) {
        if (callbacks[i].callback == callback) {
          callbacks.splice(i, 1);
          i--;
        }
      }
    }
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/isiterable.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function isIterable(value) {
    return !!(value && value[Symbol.iterator]);
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/mix.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function mix(baseClass, ...mixins) {
    mixins.forEach((mixin) => {
      Object.getOwnPropertyNames(mixin).concat(Object.getOwnPropertySymbols(mixin)).forEach((key) => {
        if (key in baseClass.prototype) {
          return;
        }
        const sourceDescriptor = Object.getOwnPropertyDescriptor(mixin, key);
        sourceDescriptor.enumerable = false;
        Object.defineProperty(baseClass.prototype, key, sourceDescriptor);
      });
    });
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/collection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Collection = class {
    constructor(initialItemsOrOptions = {}, options = {}) {
      const hasInitialItems = isIterable(initialItemsOrOptions);
      if (!hasInitialItems) {
        options = initialItemsOrOptions;
      }
      this._items = [];
      this._itemMap = new Map();
      this._idProperty = options.idProperty || "id";
      this._bindToExternalToInternalMap = new WeakMap();
      this._bindToInternalToExternalMap = new WeakMap();
      this._skippedIndexesFromExternal = [];
      if (hasInitialItems) {
        for (const item of initialItemsOrOptions) {
          this._items.push(item);
          this._itemMap.set(this._getItemIdBeforeAdding(item), item);
        }
      }
    }
    get length() {
      return this._items.length;
    }
    get first() {
      return this._items[0] || null;
    }
    get last() {
      return this._items[this.length - 1] || null;
    }
    add(item, index) {
      return this.addMany([item], index);
    }
    addMany(items, index) {
      if (index === void 0) {
        index = this._items.length;
      } else if (index > this._items.length || index < 0) {
        throw new ckeditorerror_default("collection-add-item-invalid-index", this);
      }
      for (let offset = 0; offset < items.length; offset++) {
        const item = items[offset];
        const itemId = this._getItemIdBeforeAdding(item);
        const currentItemIndex = index + offset;
        this._items.splice(currentItemIndex, 0, item);
        this._itemMap.set(itemId, item);
        this.fire("add", item, currentItemIndex);
      }
      this.fire("change", {
        added: items,
        removed: [],
        index
      });
      return this;
    }
    get(idOrIndex) {
      let item;
      if (typeof idOrIndex == "string") {
        item = this._itemMap.get(idOrIndex);
      } else if (typeof idOrIndex == "number") {
        item = this._items[idOrIndex];
      } else {
        throw new ckeditorerror_default("collection-get-invalid-arg", this);
      }
      return item || null;
    }
    has(itemOrId) {
      if (typeof itemOrId == "string") {
        return this._itemMap.has(itemOrId);
      } else {
        const idProperty = this._idProperty;
        const id = itemOrId[idProperty];
        return this._itemMap.has(id);
      }
    }
    getIndex(itemOrId) {
      let item;
      if (typeof itemOrId == "string") {
        item = this._itemMap.get(itemOrId);
      } else {
        item = itemOrId;
      }
      return this._items.indexOf(item);
    }
    remove(subject) {
      const [item, index] = this._remove(subject);
      this.fire("change", {
        added: [],
        removed: [item],
        index
      });
      return item;
    }
    map(callback, ctx) {
      return this._items.map(callback, ctx);
    }
    find(callback, ctx) {
      return this._items.find(callback, ctx);
    }
    filter(callback, ctx) {
      return this._items.filter(callback, ctx);
    }
    clear() {
      if (this._bindToCollection) {
        this.stopListening(this._bindToCollection);
        this._bindToCollection = null;
      }
      const removedItems = Array.from(this._items);
      while (this.length) {
        this._remove(0);
      }
      this.fire("change", {
        added: [],
        removed: removedItems,
        index: 0
      });
    }
    bindTo(externalCollection) {
      if (this._bindToCollection) {
        throw new ckeditorerror_default("collection-bind-to-rebind", this);
      }
      this._bindToCollection = externalCollection;
      return {
        as: (Class) => {
          this._setUpBindToBinding((item) => new Class(item));
        },
        using: (callbackOrProperty) => {
          if (typeof callbackOrProperty == "function") {
            this._setUpBindToBinding((item) => callbackOrProperty(item));
          } else {
            this._setUpBindToBinding((item) => item[callbackOrProperty]);
          }
        }
      };
    }
    _setUpBindToBinding(factory) {
      const externalCollection = this._bindToCollection;
      const addItem = (evt, externalItem, index) => {
        const isExternalBoundToThis = externalCollection._bindToCollection == this;
        const externalItemBound = externalCollection._bindToInternalToExternalMap.get(externalItem);
        if (isExternalBoundToThis && externalItemBound) {
          this._bindToExternalToInternalMap.set(externalItem, externalItemBound);
          this._bindToInternalToExternalMap.set(externalItemBound, externalItem);
        } else {
          const item = factory(externalItem);
          if (!item) {
            this._skippedIndexesFromExternal.push(index);
            return;
          }
          let finalIndex = index;
          for (const skipped of this._skippedIndexesFromExternal) {
            if (index > skipped) {
              finalIndex--;
            }
          }
          for (const skipped of externalCollection._skippedIndexesFromExternal) {
            if (finalIndex >= skipped) {
              finalIndex++;
            }
          }
          this._bindToExternalToInternalMap.set(externalItem, item);
          this._bindToInternalToExternalMap.set(item, externalItem);
          this.add(item, finalIndex);
          for (let i = 0; i < externalCollection._skippedIndexesFromExternal.length; i++) {
            if (finalIndex <= externalCollection._skippedIndexesFromExternal[i]) {
              externalCollection._skippedIndexesFromExternal[i]++;
            }
          }
        }
      };
      for (const externalItem of externalCollection) {
        addItem(null, externalItem, externalCollection.getIndex(externalItem));
      }
      this.listenTo(externalCollection, "add", addItem);
      this.listenTo(externalCollection, "remove", (evt, externalItem, index) => {
        const item = this._bindToExternalToInternalMap.get(externalItem);
        if (item) {
          this.remove(item);
        }
        this._skippedIndexesFromExternal = this._skippedIndexesFromExternal.reduce((result, skipped) => {
          if (index < skipped) {
            result.push(skipped - 1);
          }
          if (index > skipped) {
            result.push(skipped);
          }
          return result;
        }, []);
      });
    }
    _getItemIdBeforeAdding(item) {
      const idProperty = this._idProperty;
      let itemId;
      if (idProperty in item) {
        itemId = item[idProperty];
        if (typeof itemId != "string") {
          throw new ckeditorerror_default("collection-add-invalid-id", this);
        }
        if (this.get(itemId)) {
          throw new ckeditorerror_default("collection-add-item-already-exists", this);
        }
      } else {
        item[idProperty] = itemId = uid();
      }
      return itemId;
    }
    _remove(subject) {
      let index, id, item;
      let itemDoesNotExist = false;
      const idProperty = this._idProperty;
      if (typeof subject == "string") {
        id = subject;
        item = this._itemMap.get(id);
        itemDoesNotExist = !item;
        if (item) {
          index = this._items.indexOf(item);
        }
      } else if (typeof subject == "number") {
        index = subject;
        item = this._items[index];
        itemDoesNotExist = !item;
        if (item) {
          id = item[idProperty];
        }
      } else {
        item = subject;
        id = item[idProperty];
        index = this._items.indexOf(item);
        itemDoesNotExist = index == -1 || !this._itemMap.get(id);
      }
      if (itemDoesNotExist) {
        throw new ckeditorerror_default("collection-remove-404", this);
      }
      this._items.splice(index, 1);
      this._itemMap.delete(id);
      const externalItem = this._bindToInternalToExternalMap.get(item);
      this._bindToInternalToExternalMap.delete(item);
      this._bindToExternalToInternalMap.delete(externalItem);
      this.fire("remove", item, index);
      return [item, index];
    }
    [Symbol.iterator]() {
      return this._items[Symbol.iterator]();
    }
  };
  var collection_default = Collection;
  mix(Collection, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-core/src/plugincollection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var PluginCollection = class {
    constructor(context2, availablePlugins = [], contextPlugins = []) {
      this._context = context2;
      this._plugins = new Map();
      this._availablePlugins = new Map();
      for (const PluginConstructor of availablePlugins) {
        if (PluginConstructor.pluginName) {
          this._availablePlugins.set(PluginConstructor.pluginName, PluginConstructor);
        }
      }
      this._contextPlugins = new Map();
      for (const [PluginConstructor, pluginInstance] of contextPlugins) {
        this._contextPlugins.set(PluginConstructor, pluginInstance);
        this._contextPlugins.set(pluginInstance, PluginConstructor);
        if (PluginConstructor.pluginName) {
          this._availablePlugins.set(PluginConstructor.pluginName, PluginConstructor);
        }
      }
    }
    *[Symbol.iterator]() {
      for (const entry of this._plugins) {
        if (typeof entry[0] == "function") {
          yield entry;
        }
      }
    }
    get(key) {
      const plugin28 = this._plugins.get(key);
      if (!plugin28) {
        let pluginName = key;
        if (typeof key == "function") {
          pluginName = key.pluginName || key.name;
        }
        throw new ckeditorerror_default("plugincollection-plugin-not-loaded", this._context, {plugin: pluginName});
      }
      return plugin28;
    }
    has(key) {
      return this._plugins.has(key);
    }
    init(plugins, removePlugins = []) {
      const that = this;
      const context2 = this._context;
      const loading = new Set();
      const loaded = [];
      const pluginConstructors = mapToAvailableConstructors(plugins);
      const removePluginConstructors = mapToAvailableConstructors(removePlugins);
      const missingPlugins = getMissingPluginNames(plugins);
      if (missingPlugins) {
        const errorId = "plugincollection-plugin-not-found";
        logError(errorId, {plugins: missingPlugins});
        return Promise.reject(new ckeditorerror_default(errorId, context2, {plugins: missingPlugins}));
      }
      return Promise.all(pluginConstructors.map(loadPlugin)).then(() => initPlugins(loaded, "init")).then(() => initPlugins(loaded, "afterInit")).then(() => loaded);
      function loadPlugin(PluginConstructor) {
        if (removePluginConstructors.includes(PluginConstructor)) {
          return;
        }
        if (that._plugins.has(PluginConstructor) || loading.has(PluginConstructor)) {
          return;
        }
        return instantiatePlugin(PluginConstructor).catch((err) => {
          logError("plugincollection-load", {plugin: PluginConstructor});
          throw err;
        });
      }
      function initPlugins(loadedPlugins, method) {
        return loadedPlugins.reduce((promise, plugin28) => {
          if (!plugin28[method]) {
            return promise;
          }
          if (that._contextPlugins.has(plugin28)) {
            return promise;
          }
          return promise.then(plugin28[method].bind(plugin28));
        }, Promise.resolve());
      }
      function instantiatePlugin(PluginConstructor) {
        return new Promise((resolve) => {
          loading.add(PluginConstructor);
          if (PluginConstructor.requires) {
            PluginConstructor.requires.forEach((RequiredPluginConstructorOrName) => {
              const RequiredPluginConstructor = getPluginConstructor(RequiredPluginConstructorOrName);
              if (PluginConstructor.isContextPlugin && !RequiredPluginConstructor.isContextPlugin) {
                throw new ckeditorerror_default("plugincollection-context-required", null, {plugin: RequiredPluginConstructor.name, requiredBy: PluginConstructor.name});
              }
              if (removePlugins.includes(RequiredPluginConstructor)) {
                throw new ckeditorerror_default("plugincollection-required", context2, {plugin: RequiredPluginConstructor.name, requiredBy: PluginConstructor.name});
              }
              loadPlugin(RequiredPluginConstructor);
            });
          }
          const plugin28 = that._contextPlugins.get(PluginConstructor) || new PluginConstructor(context2);
          that._add(PluginConstructor, plugin28);
          loaded.push(plugin28);
          resolve();
        });
      }
      function getPluginConstructor(PluginConstructorOrName) {
        if (typeof PluginConstructorOrName == "function") {
          return PluginConstructorOrName;
        }
        return that._availablePlugins.get(PluginConstructorOrName);
      }
      function getMissingPluginNames(plugins2) {
        const missingPlugins2 = [];
        for (const pluginNameOrConstructor of plugins2) {
          if (!getPluginConstructor(pluginNameOrConstructor)) {
            missingPlugins2.push(pluginNameOrConstructor);
          }
        }
        return missingPlugins2.length ? missingPlugins2 : null;
      }
      function mapToAvailableConstructors(plugins2) {
        return plugins2.map((pluginNameOrConstructor) => getPluginConstructor(pluginNameOrConstructor)).filter((PluginConstructor) => !!PluginConstructor);
      }
    }
    destroy() {
      const promises = [];
      for (const [, pluginInstance] of this) {
        if (typeof pluginInstance.destroy == "function" && !this._contextPlugins.has(pluginInstance)) {
          promises.push(pluginInstance.destroy());
        }
      }
      return Promise.all(promises);
    }
    _add(PluginConstructor, plugin28) {
      this._plugins.set(PluginConstructor, plugin28);
      const pluginName = PluginConstructor.pluginName;
      if (!pluginName) {
        return;
      }
      if (this._plugins.has(pluginName)) {
        throw new ckeditorerror_default("plugincollection-plugin-name-conflict", null, {pluginName, plugin1: this._plugins.get(pluginName).constructor, plugin2: PluginConstructor});
      }
      this._plugins.set(pluginName, plugin28);
    }
  };
  var plugincollection_default = PluginCollection;
  mix(PluginCollection, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-utils/src/toarray.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function toArray(data) {
    return Array.isArray(data) ? data : [data];
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/translation-service.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  if (!window.CKEDITOR_TRANSLATIONS) {
    window.CKEDITOR_TRANSLATIONS = {};
  }
  function _translate(language, message, quantity = 1) {
    if (typeof quantity !== "number") {
      throw new ckeditorerror_default("translation-service-quantity-not-a-number", null, {quantity});
    }
    const numberOfLanguages = getNumberOfLanguages();
    if (numberOfLanguages === 1) {
      language = Object.keys(window.CKEDITOR_TRANSLATIONS)[0];
    }
    const messageId = message.id || message.string;
    if (numberOfLanguages === 0 || !hasTranslation(language, messageId)) {
      if (quantity !== 1) {
        return message.plural;
      }
      return message.string;
    }
    const dictionary = window.CKEDITOR_TRANSLATIONS[language].dictionary;
    const getPluralForm = window.CKEDITOR_TRANSLATIONS[language].getPluralForm || ((n) => n === 1 ? 0 : 1);
    if (typeof dictionary[messageId] === "string") {
      return dictionary[messageId];
    }
    const pluralFormIndex = Number(getPluralForm(quantity));
    return dictionary[messageId][pluralFormIndex];
  }
  function hasTranslation(language, messageId) {
    return !!window.CKEDITOR_TRANSLATIONS[language] && !!window.CKEDITOR_TRANSLATIONS[language].dictionary[messageId];
  }
  function getNumberOfLanguages() {
    return Object.keys(window.CKEDITOR_TRANSLATIONS).length;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/locale.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var RTL_LANGUAGE_CODES = ["ar", "fa", "he", "ku", "ug"];
  var Locale = class {
    constructor(options = {}) {
      this.uiLanguage = options.uiLanguage || "en";
      this.contentLanguage = options.contentLanguage || this.uiLanguage;
      this.uiLanguageDirection = getLanguageDirection(this.uiLanguage);
      this.contentLanguageDirection = getLanguageDirection(this.contentLanguage);
      this.t = (message, values) => this._t(message, values);
    }
    get language() {
      console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead.");
      return this.uiLanguage;
    }
    _t(message, values = []) {
      values = toArray(values);
      if (typeof message === "string") {
        message = {string: message};
      }
      const hasPluralForm = !!message.plural;
      const quantity = hasPluralForm ? values[0] : 1;
      const translatedString = _translate(this.uiLanguage, message, quantity);
      return interpolateString(translatedString, values);
    }
  };
  var locale_default = Locale;
  function interpolateString(string, values) {
    return string.replace(/%(\d+)/g, (match, index) => {
      return index < values.length ? values[index] : match;
    });
  }
  function getLanguageDirection(languageCode) {
    return RTL_LANGUAGE_CODES.includes(languageCode) ? "rtl" : "ltr";
  }

  // node_modules/@ckeditor/ckeditor5-core/src/context.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Context = class {
    constructor(config3) {
      this.config = new config_default(config3, this.constructor.defaultConfig);
      const availablePlugins = this.constructor.builtinPlugins;
      this.config.define("plugins", availablePlugins);
      this.plugins = new plugincollection_default(this, availablePlugins);
      const languageConfig = this.config.get("language") || {};
      this.locale = new locale_default({
        uiLanguage: typeof languageConfig === "string" ? languageConfig : languageConfig.ui,
        contentLanguage: this.config.get("language.content")
      });
      this.t = this.locale.t;
      this.editors = new collection_default();
      this._contextOwner = null;
    }
    initPlugins() {
      const plugins = this.config.get("plugins") || [];
      for (const Plugin2 of plugins) {
        if (typeof Plugin2 != "function") {
          throw new ckeditorerror_default("context-initplugins-constructor-only", null, {Plugin: Plugin2});
        }
        if (Plugin2.isContextPlugin !== true) {
          throw new ckeditorerror_default("context-initplugins-invalid-plugin", null, {Plugin: Plugin2});
        }
      }
      return this.plugins.init(plugins);
    }
    destroy() {
      return Promise.all(Array.from(this.editors, (editor2) => editor2.destroy())).then(() => this.plugins.destroy());
    }
    _addEditor(editor2, isContextOwner) {
      if (this._contextOwner) {
        throw new ckeditorerror_default("context-addeditor-private-context");
      }
      this.editors.add(editor2);
      if (isContextOwner) {
        this._contextOwner = editor2;
      }
    }
    _removeEditor(editor2) {
      if (this.editors.has(editor2)) {
        this.editors.remove(editor2);
      }
      if (this._contextOwner === editor2) {
        return this.destroy();
      }
      return Promise.resolve();
    }
    _getEditorConfig() {
      const result = {};
      for (const name of this.config.names()) {
        if (!["plugins", "removePlugins", "extraPlugins"].includes(name)) {
          result[name] = this.config.get(name);
        }
      }
      return result;
    }
    static create(config3) {
      return new Promise((resolve) => {
        const context2 = new this(config3);
        resolve(context2.initPlugins().then(() => context2));
      });
    }
  };
  var context_default = Context;

  // node_modules/@ckeditor/ckeditor5-utils/src/comparearrays.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function compareArrays(a, b) {
    const minLen = Math.min(a.length, b.length);
    for (let i = 0; i < minLen; i++) {
      if (a[i] != b[i]) {
        return i;
      }
    }
    if (a.length == b.length) {
      return "same";
    } else if (a.length < b.length) {
      return "prefix";
    } else {
      return "extension";
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/node.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Node2 = class {
    constructor(document5) {
      this.document = document5;
      this.parent = null;
    }
    get index() {
      let pos;
      if (!this.parent) {
        return null;
      }
      if ((pos = this.parent.getChildIndex(this)) == -1) {
        throw new ckeditorerror_default("view-node-not-found-in-parent", this);
      }
      return pos;
    }
    get nextSibling() {
      const index = this.index;
      return index !== null && this.parent.getChild(index + 1) || null;
    }
    get previousSibling() {
      const index = this.index;
      return index !== null && this.parent.getChild(index - 1) || null;
    }
    get root() {
      let root11 = this;
      while (root11.parent) {
        root11 = root11.parent;
      }
      return root11;
    }
    isAttached() {
      return this.root.is("rootElement");
    }
    getPath() {
      const path = [];
      let node12 = this;
      while (node12.parent) {
        path.unshift(node12.index);
        node12 = node12.parent;
      }
      return path;
    }
    getAncestors(options = {includeSelf: false, parentFirst: false}) {
      const ancestors = [];
      let parent3 = options.includeSelf ? this : this.parent;
      while (parent3) {
        ancestors[options.parentFirst ? "push" : "unshift"](parent3);
        parent3 = parent3.parent;
      }
      return ancestors;
    }
    getCommonAncestor(node12, options = {}) {
      const ancestorsA = this.getAncestors(options);
      const ancestorsB = node12.getAncestors(options);
      let i = 0;
      while (ancestorsA[i] == ancestorsB[i] && ancestorsA[i]) {
        i++;
      }
      return i === 0 ? null : ancestorsA[i - 1];
    }
    isBefore(node12) {
      if (this == node12) {
        return false;
      }
      if (this.root !== node12.root) {
        return false;
      }
      const thisPath = this.getPath();
      const nodePath = node12.getPath();
      const result = compareArrays(thisPath, nodePath);
      switch (result) {
        case "prefix":
          return true;
        case "extension":
          return false;
        default:
          return thisPath[result] < nodePath[result];
      }
    }
    isAfter(node12) {
      if (this == node12) {
        return false;
      }
      if (this.root !== node12.root) {
        return false;
      }
      return !this.isBefore(node12);
    }
    _remove() {
      this.parent._removeChildren(this.index);
    }
    _fireChange(type, node12) {
      this.fire("change:" + type, node12);
      if (this.parent) {
        this.parent._fireChange(type, node12);
      }
    }
    toJSON() {
      const json = clone_default(this);
      delete json.parent;
      return json;
    }
    is(type) {
      return type === "node" || type === "view:node";
    }
  };
  var node_default = Node2;
  mix(Node2, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/view/text.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Text2 = class extends node_default {
    constructor(document5, data) {
      super(document5);
      this._textData = data;
    }
    is(type) {
      return type === "$text" || type === "view:$text" || type === "text" || type === "view:text" || type === "node" || type === "view:node";
    }
    get data() {
      return this._textData;
    }
    get _data() {
      return this.data;
    }
    set _data(data) {
      this._fireChange("text", this);
      this._textData = data;
    }
    isSimilar(otherNode) {
      if (!(otherNode instanceof Text2)) {
        return false;
      }
      return this === otherNode || this.data === otherNode.data;
    }
    _clone() {
      return new Text2(this.document, this.data);
    }
  };
  var text_default = Text2;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/textproxy.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var TextProxy = class {
    constructor(textNode, offsetInText, length) {
      this.textNode = textNode;
      if (offsetInText < 0 || offsetInText > textNode.data.length) {
        throw new ckeditorerror_default("view-textproxy-wrong-offsetintext", this);
      }
      if (length < 0 || offsetInText + length > textNode.data.length) {
        throw new ckeditorerror_default("view-textproxy-wrong-length", this);
      }
      this.data = textNode.data.substring(offsetInText, offsetInText + length);
      this.offsetInText = offsetInText;
    }
    get offsetSize() {
      return this.data.length;
    }
    get isPartial() {
      return this.data.length !== this.textNode.data.length;
    }
    get parent() {
      return this.textNode.parent;
    }
    get root() {
      return this.textNode.root;
    }
    get document() {
      return this.textNode.document;
    }
    is(type) {
      return type === "$textProxy" || type === "view:$textProxy" || type === "textProxy" || type === "view:textProxy";
    }
    getAncestors(options = {includeSelf: false, parentFirst: false}) {
      const ancestors = [];
      let parent3 = options.includeSelf ? this.textNode : this.parent;
      while (parent3 !== null) {
        ancestors[options.parentFirst ? "push" : "unshift"](parent3);
        parent3 = parent3.parent;
      }
      return ancestors;
    }
  };
  var textproxy_default = TextProxy;

  // node_modules/@ckeditor/ckeditor5-utils/src/objecttomap.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function objectToMap(obj) {
    const map = new Map();
    for (const key in obj) {
      map.set(key, obj[key]);
    }
    return map;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/tomap.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function toMap(data) {
    if (isIterable(data)) {
      return new Map(data);
    } else {
      return objectToMap(data);
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/matcher.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Matcher = class {
    constructor(...pattern) {
      this._patterns = [];
      this.add(...pattern);
    }
    add(...pattern) {
      for (let item of pattern) {
        if (typeof item == "string" || item instanceof RegExp) {
          item = {name: item};
        }
        if (item.classes && (typeof item.classes == "string" || item.classes instanceof RegExp)) {
          item.classes = [item.classes];
        }
        this._patterns.push(item);
      }
    }
    match(...element18) {
      for (const singleElement of element18) {
        for (const pattern of this._patterns) {
          const match = isElementMatching(singleElement, pattern);
          if (match) {
            return {
              element: singleElement,
              pattern,
              match
            };
          }
        }
      }
      return null;
    }
    matchAll(...element18) {
      const results = [];
      for (const singleElement of element18) {
        for (const pattern of this._patterns) {
          const match = isElementMatching(singleElement, pattern);
          if (match) {
            results.push({
              element: singleElement,
              pattern,
              match
            });
          }
        }
      }
      return results.length > 0 ? results : null;
    }
    getElementName() {
      if (this._patterns.length !== 1) {
        return null;
      }
      const pattern = this._patterns[0];
      const name = pattern.name;
      return typeof pattern != "function" && name && !(name instanceof RegExp) ? name : null;
    }
  };
  var matcher_default = Matcher;
  function isElementMatching(element18, pattern) {
    if (typeof pattern == "function") {
      return pattern(element18);
    }
    const match = {};
    if (pattern.name) {
      match.name = matchName(pattern.name, element18.name);
      if (!match.name) {
        return null;
      }
    }
    if (pattern.attributes) {
      match.attributes = matchAttributes(pattern.attributes, element18);
      if (!match.attributes) {
        return null;
      }
    }
    if (pattern.classes) {
      match.classes = matchClasses(pattern.classes, element18);
      if (!match.classes) {
        return false;
      }
    }
    if (pattern.styles) {
      match.styles = matchStyles(pattern.styles, element18);
      if (!match.styles) {
        return false;
      }
    }
    return match;
  }
  function matchName(pattern, name) {
    if (pattern instanceof RegExp) {
      return pattern.test(name);
    }
    return pattern === name;
  }
  function matchAttributes(patterns, element18) {
    const match = [];
    for (const name in patterns) {
      const pattern = patterns[name];
      if (element18.hasAttribute(name)) {
        const attribute = element18.getAttribute(name);
        if (pattern === true) {
          match.push(name);
        } else if (pattern instanceof RegExp) {
          if (pattern.test(attribute)) {
            match.push(name);
          } else {
            return null;
          }
        } else if (attribute === pattern) {
          match.push(name);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    return match;
  }
  function matchClasses(patterns, element18) {
    const match = [];
    for (const pattern of patterns) {
      if (pattern instanceof RegExp) {
        const classes = element18.getClassNames();
        for (const name of classes) {
          if (pattern.test(name)) {
            match.push(name);
          }
        }
        if (match.length === 0) {
          return null;
        }
      } else if (element18.hasClass(pattern)) {
        match.push(pattern);
      } else {
        return null;
      }
    }
    return match;
  }
  function matchStyles(patterns, element18) {
    const match = [];
    for (const name in patterns) {
      const pattern = patterns[name];
      if (element18.hasStyle(name)) {
        const style = element18.getStyle(name);
        if (pattern instanceof RegExp) {
          if (pattern.test(style)) {
            match.push(name);
          } else {
            return null;
          }
        } else if (style === pattern) {
          match.push(name);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    return match;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/stylesmap.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var StylesMap = class {
    constructor(styleProcessor) {
      this._styles = {};
      this._styleProcessor = styleProcessor;
    }
    get isEmpty() {
      const entries = Object.entries(this._styles);
      const from = Array.from(entries);
      return !from.length;
    }
    get size() {
      if (this.isEmpty) {
        return 0;
      }
      return this.getStyleNames().length;
    }
    setTo(inlineStyle) {
      this.clear();
      const parsedStyles = Array.from(parseInlineStyles(inlineStyle).entries());
      for (const [key, value] of parsedStyles) {
        this._styleProcessor.toNormalizedForm(key, value, this._styles);
      }
    }
    has(name) {
      if (this.isEmpty) {
        return false;
      }
      const styles = this._styleProcessor.getReducedForm(name, this._styles);
      const propertyDescriptor = styles.find(([property]) => property === name);
      return Array.isArray(propertyDescriptor);
    }
    set(nameOrObject, valueOrObject) {
      if (isObject_default(nameOrObject)) {
        for (const [key, value] of Object.entries(nameOrObject)) {
          this._styleProcessor.toNormalizedForm(key, value, this._styles);
        }
      } else {
        this._styleProcessor.toNormalizedForm(nameOrObject, valueOrObject, this._styles);
      }
    }
    remove(name) {
      const path = toPath(name);
      unset_default(this._styles, path);
      delete this._styles[name];
      this._cleanEmptyObjectsOnPath(path);
    }
    getNormalized(name) {
      return this._styleProcessor.getNormalized(name, this._styles);
    }
    toString() {
      if (this.isEmpty) {
        return "";
      }
      return this._getStylesEntries().map((arr) => arr.join(":")).sort().join(";") + ";";
    }
    getAsString(propertyName) {
      if (this.isEmpty) {
        return;
      }
      if (this._styles[propertyName] && !isObject_default(this._styles[propertyName])) {
        return this._styles[propertyName];
      }
      const styles = this._styleProcessor.getReducedForm(propertyName, this._styles);
      const propertyDescriptor = styles.find(([property]) => property === propertyName);
      if (Array.isArray(propertyDescriptor)) {
        return propertyDescriptor[1];
      }
    }
    getStyleNames() {
      if (this.isEmpty) {
        return [];
      }
      const entries = this._getStylesEntries();
      return entries.map(([key]) => key);
    }
    clear() {
      this._styles = {};
    }
    _getStylesEntries() {
      const parsed = [];
      const keys5 = Object.keys(this._styles);
      for (const key of keys5) {
        parsed.push(...this._styleProcessor.getReducedForm(key, this._styles));
      }
      return parsed;
    }
    _cleanEmptyObjectsOnPath(path) {
      const pathParts = path.split(".");
      const isChildPath = pathParts.length > 1;
      if (!isChildPath) {
        return;
      }
      const parentPath = pathParts.splice(0, pathParts.length - 1).join(".");
      const parentObject = get_default(this._styles, parentPath);
      if (!parentObject) {
        return;
      }
      const isParentEmpty = !Array.from(Object.keys(parentObject)).length;
      if (isParentEmpty) {
        this.remove(parentPath);
      }
    }
  };
  var stylesmap_default = StylesMap;
  var StylesProcessor = class {
    constructor() {
      this._normalizers = new Map();
      this._extractors = new Map();
      this._reducers = new Map();
      this._consumables = new Map();
    }
    toNormalizedForm(name, propertyValue, styles) {
      if (isObject_default(propertyValue)) {
        appendStyleValue(styles, toPath(name), propertyValue);
        return;
      }
      if (this._normalizers.has(name)) {
        const normalizer = this._normalizers.get(name);
        const {path, value} = normalizer(propertyValue);
        appendStyleValue(styles, path, value);
      } else {
        appendStyleValue(styles, name, propertyValue);
      }
    }
    getNormalized(name, styles) {
      if (!name) {
        return merge_default({}, styles);
      }
      if (styles[name] !== void 0) {
        return styles[name];
      }
      if (this._extractors.has(name)) {
        const extractor = this._extractors.get(name);
        if (typeof extractor === "string") {
          return get_default(styles, extractor);
        }
        const value = extractor(name, styles);
        if (value) {
          return value;
        }
      }
      return get_default(styles, toPath(name));
    }
    getReducedForm(name, styles) {
      const normalizedValue = this.getNormalized(name, styles);
      if (normalizedValue === void 0) {
        return [];
      }
      if (this._reducers.has(name)) {
        const reducer = this._reducers.get(name);
        return reducer(normalizedValue);
      }
      return [[name, normalizedValue]];
    }
    getRelatedStyles(name) {
      return this._consumables.get(name) || [];
    }
    setNormalizer(name, callback) {
      this._normalizers.set(name, callback);
    }
    setExtractor(name, callbackOrPath) {
      this._extractors.set(name, callbackOrPath);
    }
    setReducer(name, callback) {
      this._reducers.set(name, callback);
    }
    setStyleRelation(shorthandName, styleNames) {
      this._mapStyleNames(shorthandName, styleNames);
      for (const alsoName of styleNames) {
        this._mapStyleNames(alsoName, [shorthandName]);
      }
    }
    _mapStyleNames(name, styleNames) {
      if (!this._consumables.has(name)) {
        this._consumables.set(name, []);
      }
      this._consumables.get(name).push(...styleNames);
    }
  };
  function parseInlineStyles(stylesString) {
    let quoteType = null;
    let propertyNameStart = 0;
    let propertyValueStart = 0;
    let propertyName = null;
    const stylesMap = new Map();
    if (stylesString === "") {
      return stylesMap;
    }
    if (stylesString.charAt(stylesString.length - 1) != ";") {
      stylesString = stylesString + ";";
    }
    for (let i = 0; i < stylesString.length; i++) {
      const char = stylesString.charAt(i);
      if (quoteType === null) {
        switch (char) {
          case ":":
            if (!propertyName) {
              propertyName = stylesString.substr(propertyNameStart, i - propertyNameStart);
              propertyValueStart = i + 1;
            }
            break;
          case '"':
          case "'":
            quoteType = char;
            break;
          case ";": {
            const propertyValue = stylesString.substr(propertyValueStart, i - propertyValueStart);
            if (propertyName) {
              stylesMap.set(propertyName.trim(), propertyValue.trim());
            }
            propertyName = null;
            propertyNameStart = i + 1;
            break;
          }
        }
      } else if (char === quoteType) {
        quoteType = null;
      }
    }
    return stylesMap;
  }
  function toPath(name) {
    return name.replace("-", ".");
  }
  function appendStyleValue(stylesObject, nameOrPath, valueOrObject) {
    let valueToSet = valueOrObject;
    if (isObject_default(valueOrObject)) {
      valueToSet = merge_default({}, get_default(stylesObject, nameOrPath), valueOrObject);
    }
    set_default(stylesObject, nameOrPath, valueToSet);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/element.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Element = class extends node_default {
    constructor(document5, name, attrs, children) {
      super(document5);
      this.name = name;
      this._attrs = parseAttributes(attrs);
      this._children = [];
      if (children) {
        this._insertChild(0, children);
      }
      this._classes = new Set();
      if (this._attrs.has("class")) {
        const classString = this._attrs.get("class");
        parseClasses(this._classes, classString);
        this._attrs.delete("class");
      }
      this._styles = new stylesmap_default(this.document.stylesProcessor);
      if (this._attrs.has("style")) {
        this._styles.setTo(this._attrs.get("style"));
        this._attrs.delete("style");
      }
      this._customProperties = new Map();
    }
    get childCount() {
      return this._children.length;
    }
    get isEmpty() {
      return this._children.length === 0;
    }
    is(type, name = null) {
      if (!name) {
        return type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "element" || type === "view:element");
      }
    }
    getChild(index) {
      return this._children[index];
    }
    getChildIndex(node12) {
      return this._children.indexOf(node12);
    }
    getChildren() {
      return this._children[Symbol.iterator]();
    }
    *getAttributeKeys() {
      if (this._classes.size > 0) {
        yield "class";
      }
      if (!this._styles.isEmpty) {
        yield "style";
      }
      yield* this._attrs.keys();
    }
    *getAttributes() {
      yield* this._attrs.entries();
      if (this._classes.size > 0) {
        yield ["class", this.getAttribute("class")];
      }
      if (!this._styles.isEmpty) {
        yield ["style", this.getAttribute("style")];
      }
    }
    getAttribute(key) {
      if (key == "class") {
        if (this._classes.size > 0) {
          return [...this._classes].join(" ");
        }
        return void 0;
      }
      if (key == "style") {
        const inlineStyle = this._styles.toString();
        return inlineStyle == "" ? void 0 : inlineStyle;
      }
      return this._attrs.get(key);
    }
    hasAttribute(key) {
      if (key == "class") {
        return this._classes.size > 0;
      }
      if (key == "style") {
        return !this._styles.isEmpty;
      }
      return this._attrs.has(key);
    }
    isSimilar(otherElement) {
      if (!(otherElement instanceof Element)) {
        return false;
      }
      if (this === otherElement) {
        return true;
      }
      if (this.name != otherElement.name) {
        return false;
      }
      if (this._attrs.size !== otherElement._attrs.size || this._classes.size !== otherElement._classes.size || this._styles.size !== otherElement._styles.size) {
        return false;
      }
      for (const [key, value] of this._attrs) {
        if (!otherElement._attrs.has(key) || otherElement._attrs.get(key) !== value) {
          return false;
        }
      }
      for (const className of this._classes) {
        if (!otherElement._classes.has(className)) {
          return false;
        }
      }
      for (const property of this._styles.getStyleNames()) {
        if (!otherElement._styles.has(property) || otherElement._styles.getAsString(property) !== this._styles.getAsString(property)) {
          return false;
        }
      }
      return true;
    }
    hasClass(...className) {
      for (const name of className) {
        if (!this._classes.has(name)) {
          return false;
        }
      }
      return true;
    }
    getClassNames() {
      return this._classes.keys();
    }
    getStyle(property) {
      return this._styles.getAsString(property);
    }
    getNormalizedStyle(property) {
      return this._styles.getNormalized(property);
    }
    getStyleNames() {
      return this._styles.getStyleNames();
    }
    hasStyle(...property) {
      for (const name of property) {
        if (!this._styles.has(name)) {
          return false;
        }
      }
      return true;
    }
    findAncestor(...patterns) {
      const matcher4 = new matcher_default(...patterns);
      let parent3 = this.parent;
      while (parent3) {
        if (matcher4.match(parent3)) {
          return parent3;
        }
        parent3 = parent3.parent;
      }
      return null;
    }
    getCustomProperty(key) {
      return this._customProperties.get(key);
    }
    *getCustomProperties() {
      yield* this._customProperties.entries();
    }
    getIdentity() {
      const classes = Array.from(this._classes).sort().join(",");
      const styles = this._styles.toString();
      const attributes = Array.from(this._attrs).map((i) => `${i[0]}="${i[1]}"`).sort().join(" ");
      return this.name + (classes == "" ? "" : ` class="${classes}"`) + (!styles ? "" : ` style="${styles}"`) + (attributes == "" ? "" : ` ${attributes}`);
    }
    _clone(deep = false) {
      const childrenClone = [];
      if (deep) {
        for (const child of this.getChildren()) {
          childrenClone.push(child._clone(deep));
        }
      }
      const cloned = new this.constructor(this.document, this.name, this._attrs, childrenClone);
      cloned._classes = new Set(this._classes);
      cloned._styles.set(this._styles.getNormalized());
      cloned._customProperties = new Map(this._customProperties);
      cloned.getFillerOffset = this.getFillerOffset;
      return cloned;
    }
    _appendChild(items) {
      return this._insertChild(this.childCount, items);
    }
    _insertChild(index, items) {
      this._fireChange("children", this);
      let count4 = 0;
      const nodes = normalize(this.document, items);
      for (const node12 of nodes) {
        if (node12.parent !== null) {
          node12._remove();
        }
        node12.parent = this;
        node12.document = this.document;
        this._children.splice(index, 0, node12);
        index++;
        count4++;
      }
      return count4;
    }
    _removeChildren(index, howMany = 1) {
      this._fireChange("children", this);
      for (let i = index; i < index + howMany; i++) {
        this._children[i].parent = null;
      }
      return this._children.splice(index, howMany);
    }
    _setAttribute(key, value) {
      value = String(value);
      this._fireChange("attributes", this);
      if (key == "class") {
        parseClasses(this._classes, value);
      } else if (key == "style") {
        this._styles.setTo(value);
      } else {
        this._attrs.set(key, value);
      }
    }
    _removeAttribute(key) {
      this._fireChange("attributes", this);
      if (key == "class") {
        if (this._classes.size > 0) {
          this._classes.clear();
          return true;
        }
        return false;
      }
      if (key == "style") {
        if (!this._styles.isEmpty) {
          this._styles.clear();
          return true;
        }
        return false;
      }
      return this._attrs.delete(key);
    }
    _addClass(className) {
      this._fireChange("attributes", this);
      for (const name of toArray(className)) {
        this._classes.add(name);
      }
    }
    _removeClass(className) {
      this._fireChange("attributes", this);
      for (const name of toArray(className)) {
        this._classes.delete(name);
      }
    }
    _setStyle(property, value) {
      this._fireChange("attributes", this);
      this._styles.set(property, value);
    }
    _removeStyle(property) {
      this._fireChange("attributes", this);
      for (const name of toArray(property)) {
        this._styles.remove(name);
      }
    }
    _setCustomProperty(key, value) {
      this._customProperties.set(key, value);
    }
    _removeCustomProperty(key) {
      return this._customProperties.delete(key);
    }
  };
  var element_default = Element;
  function parseAttributes(attrs) {
    attrs = toMap(attrs);
    for (const [key, value] of attrs) {
      if (value === null) {
        attrs.delete(key);
      } else if (typeof value != "string") {
        attrs.set(key, String(value));
      }
    }
    return attrs;
  }
  function parseClasses(classesSet, classesString) {
    const classArray = classesString.split(/\s+/);
    classesSet.clear();
    classArray.forEach((name) => classesSet.add(name));
  }
  function normalize(document5, nodes) {
    if (typeof nodes == "string") {
      return [new text_default(document5, nodes)];
    }
    if (!isIterable(nodes)) {
      nodes = [nodes];
    }
    return Array.from(nodes).map((node12) => {
      if (typeof node12 == "string") {
        return new text_default(document5, node12);
      }
      if (node12 instanceof textproxy_default) {
        return new text_default(document5, node12.data);
      }
      return node12;
    });
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/containerelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ContainerElement = class extends element_default {
    constructor(document5, name, attrs, children) {
      super(document5, name, attrs, children);
      this.getFillerOffset = getFillerOffset;
    }
    is(type, name = null) {
      if (!name) {
        return type === "containerElement" || type === "view:containerElement" || type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "containerElement" || type === "view:containerElement" || type === "element" || type === "view:element");
      }
    }
  };
  var containerelement_default = ContainerElement;
  function getFillerOffset() {
    const children = [...this.getChildren()];
    const lastChild = children[this.childCount - 1];
    if (lastChild && lastChild.is("element", "br")) {
      return this.childCount;
    }
    for (const child of children) {
      if (!child.is("uiElement")) {
        return null;
      }
    }
    return this.childCount;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/observablemixin.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var observablePropertiesSymbol = Symbol("observableProperties");
  var boundObservablesSymbol = Symbol("boundObservables");
  var boundPropertiesSymbol = Symbol("boundProperties");
  var ObservableMixin = {
    set(name, value) {
      if (isObject_default(name)) {
        Object.keys(name).forEach((property) => {
          this.set(property, name[property]);
        }, this);
        return;
      }
      initObservable(this);
      const properties = this[observablePropertiesSymbol];
      if (name in this && !properties.has(name)) {
        throw new ckeditorerror_default("observable-set-cannot-override", this);
      }
      Object.defineProperty(this, name, {
        enumerable: true,
        configurable: true,
        get() {
          return properties.get(name);
        },
        set(value2) {
          const oldValue = properties.get(name);
          let newValue = this.fire("set:" + name, name, value2, oldValue);
          if (newValue === void 0) {
            newValue = value2;
          }
          if (oldValue !== newValue || !properties.has(name)) {
            properties.set(name, newValue);
            this.fire("change:" + name, name, newValue, oldValue);
          }
        }
      });
      this[name] = value;
    },
    bind(...bindProperties) {
      if (!bindProperties.length || !isStringArray(bindProperties)) {
        throw new ckeditorerror_default("observable-bind-wrong-properties", this);
      }
      if (new Set(bindProperties).size !== bindProperties.length) {
        throw new ckeditorerror_default("observable-bind-duplicate-properties", this);
      }
      initObservable(this);
      const boundProperties = this[boundPropertiesSymbol];
      bindProperties.forEach((propertyName) => {
        if (boundProperties.has(propertyName)) {
          throw new ckeditorerror_default("observable-bind-rebind", this);
        }
      });
      const bindings = new Map();
      bindProperties.forEach((a) => {
        const binding = {property: a, to: []};
        boundProperties.set(a, binding);
        bindings.set(a, binding);
      });
      return {
        to: bindTo,
        toMany: bindToMany,
        _observable: this,
        _bindProperties: bindProperties,
        _to: [],
        _bindings: bindings
      };
    },
    unbind(...unbindProperties) {
      if (!this[observablePropertiesSymbol]) {
        return;
      }
      const boundProperties = this[boundPropertiesSymbol];
      const boundObservables = this[boundObservablesSymbol];
      if (unbindProperties.length) {
        if (!isStringArray(unbindProperties)) {
          throw new ckeditorerror_default("observable-unbind-wrong-properties", this);
        }
        unbindProperties.forEach((propertyName) => {
          const binding = boundProperties.get(propertyName);
          if (!binding) {
            return;
          }
          let toObservable, toProperty, toProperties, toPropertyBindings;
          binding.to.forEach((to) => {
            toObservable = to[0];
            toProperty = to[1];
            toProperties = boundObservables.get(toObservable);
            toPropertyBindings = toProperties[toProperty];
            toPropertyBindings.delete(binding);
            if (!toPropertyBindings.size) {
              delete toProperties[toProperty];
            }
            if (!Object.keys(toProperties).length) {
              boundObservables.delete(toObservable);
              this.stopListening(toObservable, "change");
            }
          });
          boundProperties.delete(propertyName);
        });
      } else {
        boundObservables.forEach((bindings, boundObservable) => {
          this.stopListening(boundObservable, "change");
        });
        boundObservables.clear();
        boundProperties.clear();
      }
    },
    decorate(methodName) {
      const originalMethod = this[methodName];
      if (!originalMethod) {
        throw new ckeditorerror_default("observablemixin-cannot-decorate-undefined", this, {object: this, methodName});
      }
      this.on(methodName, (evt, args) => {
        evt.return = originalMethod.apply(this, args);
      });
      this[methodName] = function(...args) {
        return this.fire(methodName, args);
      };
    }
  };
  assignIn_default(ObservableMixin, emittermixin_default);
  var observablemixin_default = ObservableMixin;
  function initObservable(observable) {
    if (observable[observablePropertiesSymbol]) {
      return;
    }
    Object.defineProperty(observable, observablePropertiesSymbol, {
      value: new Map()
    });
    Object.defineProperty(observable, boundObservablesSymbol, {
      value: new Map()
    });
    Object.defineProperty(observable, boundPropertiesSymbol, {
      value: new Map()
    });
  }
  function bindTo(...args) {
    const parsedArgs = parseBindToArgs(...args);
    const bindingsKeys = Array.from(this._bindings.keys());
    const numberOfBindings = bindingsKeys.length;
    if (!parsedArgs.callback && parsedArgs.to.length > 1) {
      throw new ckeditorerror_default("observable-bind-to-no-callback", this);
    }
    if (numberOfBindings > 1 && parsedArgs.callback) {
      throw new ckeditorerror_default("observable-bind-to-extra-callback", this);
    }
    parsedArgs.to.forEach((to) => {
      if (to.properties.length && to.properties.length !== numberOfBindings) {
        throw new ckeditorerror_default("observable-bind-to-properties-length", this);
      }
      if (!to.properties.length) {
        to.properties = this._bindProperties;
      }
    });
    this._to = parsedArgs.to;
    if (parsedArgs.callback) {
      this._bindings.get(bindingsKeys[0]).callback = parsedArgs.callback;
    }
    attachBindToListeners(this._observable, this._to);
    updateBindToBound(this);
    this._bindProperties.forEach((propertyName) => {
      updateBoundObservableProperty(this._observable, propertyName);
    });
  }
  function bindToMany(observables, attribute, callback) {
    if (this._bindings.size > 1) {
      throw new ckeditorerror_default("observable-bind-to-many-not-one-binding", this);
    }
    this.to(...getBindingTargets(observables, attribute), callback);
  }
  function getBindingTargets(observables, attribute) {
    const observableAndAttributePairs = observables.map((observable) => [observable, attribute]);
    return Array.prototype.concat.apply([], observableAndAttributePairs);
  }
  function isStringArray(arr) {
    return arr.every((a) => typeof a == "string");
  }
  function parseBindToArgs(...args) {
    if (!args.length) {
      throw new ckeditorerror_default("observable-bind-to-parse-error", null);
    }
    const parsed = {to: []};
    let lastObservable;
    if (typeof args[args.length - 1] == "function") {
      parsed.callback = args.pop();
    }
    args.forEach((a) => {
      if (typeof a == "string") {
        lastObservable.properties.push(a);
      } else if (typeof a == "object") {
        lastObservable = {observable: a, properties: []};
        parsed.to.push(lastObservable);
      } else {
        throw new ckeditorerror_default("observable-bind-to-parse-error", null);
      }
    });
    return parsed;
  }
  function updateBoundObservables(observable, binding, toObservable, toPropertyName) {
    const boundObservables = observable[boundObservablesSymbol];
    const bindingsToObservable = boundObservables.get(toObservable);
    const bindings = bindingsToObservable || {};
    if (!bindings[toPropertyName]) {
      bindings[toPropertyName] = new Set();
    }
    bindings[toPropertyName].add(binding);
    if (!bindingsToObservable) {
      boundObservables.set(toObservable, bindings);
    }
  }
  function updateBindToBound(chain) {
    let toProperty;
    chain._bindings.forEach((binding, propertyName) => {
      chain._to.forEach((to) => {
        toProperty = to.properties[binding.callback ? 0 : chain._bindProperties.indexOf(propertyName)];
        binding.to.push([to.observable, toProperty]);
        updateBoundObservables(chain._observable, binding, to.observable, toProperty);
      });
    });
  }
  function updateBoundObservableProperty(observable, propertyName) {
    const boundProperties = observable[boundPropertiesSymbol];
    const binding = boundProperties.get(propertyName);
    let propertyValue;
    if (binding.callback) {
      propertyValue = binding.callback.apply(observable, binding.to.map((to) => to[0][to[1]]));
    } else {
      propertyValue = binding.to[0];
      propertyValue = propertyValue[0][propertyValue[1]];
    }
    if (Object.prototype.hasOwnProperty.call(observable, propertyName)) {
      observable[propertyName] = propertyValue;
    } else {
      observable.set(propertyName, propertyValue);
    }
  }
  function attachBindToListeners(observable, toBindings) {
    toBindings.forEach((to) => {
      const boundObservables = observable[boundObservablesSymbol];
      let bindings;
      if (!boundObservables.get(to.observable)) {
        observable.listenTo(to.observable, "change", (evt, propertyName) => {
          bindings = boundObservables.get(to.observable)[propertyName];
          if (bindings) {
            bindings.forEach((binding) => {
              updateBoundObservableProperty(observable, binding.property);
            });
          }
        });
      }
    });
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/editableelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EditableElement = class extends containerelement_default {
    constructor(document5, name, attrs, children) {
      super(document5, name, attrs, children);
      this.set("isReadOnly", false);
      this.set("isFocused", false);
      this.bind("isReadOnly").to(document5);
      this.bind("isFocused").to(document5, "isFocused", (isFocused) => isFocused && document5.selection.editableElement == this);
      this.listenTo(document5.selection, "change", () => {
        this.isFocused = document5.isFocused && document5.selection.editableElement == this;
      });
    }
    is(type, name = null) {
      if (!name) {
        return type === "editableElement" || type === "view:editableElement" || type === "containerElement" || type === "view:containerElement" || type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "editableElement" || type === "view:editableElement" || type === "containerElement" || type === "view:containerElement" || type === "element" || type === "view:element");
      }
    }
    destroy() {
      this.stopListening();
    }
  };
  var editableelement_default = EditableElement;
  mix(EditableElement, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/view/rooteditableelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var rootNameSymbol = Symbol("rootName");
  var RootEditableElement = class extends editableelement_default {
    constructor(document5, name) {
      super(document5, name);
      this.rootName = "main";
    }
    is(type, name = null) {
      if (!name) {
        return type === "rootElement" || type === "view:rootElement" || type === "editableElement" || type === "view:editableElement" || type === "containerElement" || type === "view:containerElement" || type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "rootElement" || type === "view:rootElement" || type === "editableElement" || type === "view:editableElement" || type === "containerElement" || type === "view:containerElement" || type === "element" || type === "view:element");
      }
    }
    get rootName() {
      return this.getCustomProperty(rootNameSymbol);
    }
    set rootName(rootName) {
      this._setCustomProperty(rootNameSymbol, rootName);
    }
    set _name(name) {
      this.name = name;
    }
  };
  var rooteditableelement_default = RootEditableElement;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/treewalker.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var TreeWalker = class {
    constructor(options = {}) {
      if (!options.boundaries && !options.startPosition) {
        throw new ckeditorerror_default("view-tree-walker-no-start-position", null);
      }
      if (options.direction && options.direction != "forward" && options.direction != "backward") {
        throw new ckeditorerror_default("view-tree-walker-unknown-direction", options.startPosition, {direction: options.direction});
      }
      this.boundaries = options.boundaries || null;
      if (options.startPosition) {
        this.position = position_default._createAt(options.startPosition);
      } else {
        this.position = position_default._createAt(options.boundaries[options.direction == "backward" ? "end" : "start"]);
      }
      this.direction = options.direction || "forward";
      this.singleCharacters = !!options.singleCharacters;
      this.shallow = !!options.shallow;
      this.ignoreElementEnd = !!options.ignoreElementEnd;
      this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null;
      this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null;
    }
    [Symbol.iterator]() {
      return this;
    }
    skip(skip) {
      let done, value, prevPosition;
      do {
        prevPosition = this.position;
        ({done, value} = this.next());
      } while (!done && skip(value));
      if (!done) {
        this.position = prevPosition;
      }
    }
    next() {
      if (this.direction == "forward") {
        return this._next();
      } else {
        return this._previous();
      }
    }
    _next() {
      let position30 = this.position.clone();
      const previousPosition = this.position;
      const parent3 = position30.parent;
      if (parent3.parent === null && position30.offset === parent3.childCount) {
        return {done: true};
      }
      if (parent3 === this._boundaryEndParent && position30.offset == this.boundaries.end.offset) {
        return {done: true};
      }
      let node12;
      if (parent3 instanceof text_default) {
        if (position30.isAtEnd) {
          this.position = position_default._createAfter(parent3);
          return this._next();
        }
        node12 = parent3.data[position30.offset];
      } else {
        node12 = parent3.getChild(position30.offset);
      }
      if (node12 instanceof element_default) {
        if (!this.shallow) {
          position30 = new position_default(node12, 0);
        } else {
          position30.offset++;
        }
        this.position = position30;
        return this._formatReturnValue("elementStart", node12, previousPosition, position30, 1);
      } else if (node12 instanceof text_default) {
        if (this.singleCharacters) {
          position30 = new position_default(node12, 0);
          this.position = position30;
          return this._next();
        } else {
          let charactersCount = node12.data.length;
          let item;
          if (node12 == this._boundaryEndParent) {
            charactersCount = this.boundaries.end.offset;
            item = new textproxy_default(node12, 0, charactersCount);
            position30 = position_default._createAfter(item);
          } else {
            item = new textproxy_default(node12, 0, node12.data.length);
            position30.offset++;
          }
          this.position = position30;
          return this._formatReturnValue("text", item, previousPosition, position30, charactersCount);
        }
      } else if (typeof node12 == "string") {
        let textLength;
        if (this.singleCharacters) {
          textLength = 1;
        } else {
          const endOffset = parent3 === this._boundaryEndParent ? this.boundaries.end.offset : parent3.data.length;
          textLength = endOffset - position30.offset;
        }
        const textProxy = new textproxy_default(parent3, position30.offset, textLength);
        position30.offset += textLength;
        this.position = position30;
        return this._formatReturnValue("text", textProxy, previousPosition, position30, textLength);
      } else {
        position30 = position_default._createAfter(parent3);
        this.position = position30;
        if (this.ignoreElementEnd) {
          return this._next();
        } else {
          return this._formatReturnValue("elementEnd", parent3, previousPosition, position30);
        }
      }
    }
    _previous() {
      let position30 = this.position.clone();
      const previousPosition = this.position;
      const parent3 = position30.parent;
      if (parent3.parent === null && position30.offset === 0) {
        return {done: true};
      }
      if (parent3 == this._boundaryStartParent && position30.offset == this.boundaries.start.offset) {
        return {done: true};
      }
      let node12;
      if (parent3 instanceof text_default) {
        if (position30.isAtStart) {
          this.position = position_default._createBefore(parent3);
          return this._previous();
        }
        node12 = parent3.data[position30.offset - 1];
      } else {
        node12 = parent3.getChild(position30.offset - 1);
      }
      if (node12 instanceof element_default) {
        if (!this.shallow) {
          position30 = new position_default(node12, node12.childCount);
          this.position = position30;
          if (this.ignoreElementEnd) {
            return this._previous();
          } else {
            return this._formatReturnValue("elementEnd", node12, previousPosition, position30);
          }
        } else {
          position30.offset--;
          this.position = position30;
          return this._formatReturnValue("elementStart", node12, previousPosition, position30, 1);
        }
      } else if (node12 instanceof text_default) {
        if (this.singleCharacters) {
          position30 = new position_default(node12, node12.data.length);
          this.position = position30;
          return this._previous();
        } else {
          let charactersCount = node12.data.length;
          let item;
          if (node12 == this._boundaryStartParent) {
            const offset = this.boundaries.start.offset;
            item = new textproxy_default(node12, offset, node12.data.length - offset);
            charactersCount = item.data.length;
            position30 = position_default._createBefore(item);
          } else {
            item = new textproxy_default(node12, 0, node12.data.length);
            position30.offset--;
          }
          this.position = position30;
          return this._formatReturnValue("text", item, previousPosition, position30, charactersCount);
        }
      } else if (typeof node12 == "string") {
        let textLength;
        if (!this.singleCharacters) {
          const startOffset = parent3 === this._boundaryStartParent ? this.boundaries.start.offset : 0;
          textLength = position30.offset - startOffset;
        } else {
          textLength = 1;
        }
        position30.offset -= textLength;
        const textProxy = new textproxy_default(parent3, position30.offset, textLength);
        this.position = position30;
        return this._formatReturnValue("text", textProxy, previousPosition, position30, textLength);
      } else {
        position30 = position_default._createBefore(parent3);
        this.position = position30;
        return this._formatReturnValue("elementStart", parent3, previousPosition, position30, 1);
      }
    }
    _formatReturnValue(type, item, previousPosition, nextPosition, length) {
      if (item instanceof textproxy_default) {
        if (item.offsetInText + item.data.length == item.textNode.data.length) {
          if (this.direction == "forward" && !(this.boundaries && this.boundaries.end.isEqual(this.position))) {
            nextPosition = position_default._createAfter(item.textNode);
            this.position = nextPosition;
          } else {
            previousPosition = position_default._createAfter(item.textNode);
          }
        }
        if (item.offsetInText === 0) {
          if (this.direction == "backward" && !(this.boundaries && this.boundaries.start.isEqual(this.position))) {
            nextPosition = position_default._createBefore(item.textNode);
            this.position = nextPosition;
          } else {
            previousPosition = position_default._createBefore(item.textNode);
          }
        }
      }
      return {
        done: false,
        value: {
          type,
          item,
          previousPosition,
          nextPosition,
          length
        }
      };
    }
  };
  var treewalker_default = TreeWalker;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/position.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Position = class {
    constructor(parent3, offset) {
      this.parent = parent3;
      this.offset = offset;
    }
    get nodeAfter() {
      if (this.parent.is("$text")) {
        return null;
      }
      return this.parent.getChild(this.offset) || null;
    }
    get nodeBefore() {
      if (this.parent.is("$text")) {
        return null;
      }
      return this.parent.getChild(this.offset - 1) || null;
    }
    get isAtStart() {
      return this.offset === 0;
    }
    get isAtEnd() {
      const endOffset = this.parent.is("$text") ? this.parent.data.length : this.parent.childCount;
      return this.offset === endOffset;
    }
    get root() {
      return this.parent.root;
    }
    get editableElement() {
      let editable = this.parent;
      while (!(editable instanceof editableelement_default)) {
        if (editable.parent) {
          editable = editable.parent;
        } else {
          return null;
        }
      }
      return editable;
    }
    getShiftedBy(shift) {
      const shifted = Position._createAt(this);
      const offset = shifted.offset + shift;
      shifted.offset = offset < 0 ? 0 : offset;
      return shifted;
    }
    getLastMatchingPosition(skip, options = {}) {
      options.startPosition = this;
      const treeWalker = new treewalker_default(options);
      treeWalker.skip(skip);
      return treeWalker.position;
    }
    getAncestors() {
      if (this.parent.is("documentFragment")) {
        return [this.parent];
      } else {
        return this.parent.getAncestors({includeSelf: true});
      }
    }
    getCommonAncestor(position30) {
      const ancestorsA = this.getAncestors();
      const ancestorsB = position30.getAncestors();
      let i = 0;
      while (ancestorsA[i] == ancestorsB[i] && ancestorsA[i]) {
        i++;
      }
      return i === 0 ? null : ancestorsA[i - 1];
    }
    is(type) {
      return type === "position" || type === "view:position";
    }
    isEqual(otherPosition) {
      return this.parent == otherPosition.parent && this.offset == otherPosition.offset;
    }
    isBefore(otherPosition) {
      return this.compareWith(otherPosition) == "before";
    }
    isAfter(otherPosition) {
      return this.compareWith(otherPosition) == "after";
    }
    compareWith(otherPosition) {
      if (this.root !== otherPosition.root) {
        return "different";
      }
      if (this.isEqual(otherPosition)) {
        return "same";
      }
      const thisPath = this.parent.is("node") ? this.parent.getPath() : [];
      const otherPath = otherPosition.parent.is("node") ? otherPosition.parent.getPath() : [];
      thisPath.push(this.offset);
      otherPath.push(otherPosition.offset);
      const result = compareArrays(thisPath, otherPath);
      switch (result) {
        case "prefix":
          return "before";
        case "extension":
          return "after";
        default:
          return thisPath[result] < otherPath[result] ? "before" : "after";
      }
    }
    getWalker(options = {}) {
      options.startPosition = this;
      return new treewalker_default(options);
    }
    clone() {
      return new Position(this.parent, this.offset);
    }
    static _createAt(itemOrPosition, offset) {
      if (itemOrPosition instanceof Position) {
        return new this(itemOrPosition.parent, itemOrPosition.offset);
      } else {
        const node12 = itemOrPosition;
        if (offset == "end") {
          offset = node12.is("$text") ? node12.data.length : node12.childCount;
        } else if (offset == "before") {
          return this._createBefore(node12);
        } else if (offset == "after") {
          return this._createAfter(node12);
        } else if (offset !== 0 && !offset) {
          throw new ckeditorerror_default("view-createpositionat-offset-required", node12);
        }
        return new Position(node12, offset);
      }
    }
    static _createAfter(item) {
      if (item.is("$textProxy")) {
        return new Position(item.textNode, item.offsetInText + item.data.length);
      }
      if (!item.parent) {
        throw new ckeditorerror_default("view-position-after-root", item, {root: item});
      }
      return new Position(item.parent, item.index + 1);
    }
    static _createBefore(item) {
      if (item.is("$textProxy")) {
        return new Position(item.textNode, item.offsetInText);
      }
      if (!item.parent) {
        throw new ckeditorerror_default("view-position-before-root", item, {root: item});
      }
      return new Position(item.parent, item.index);
    }
  };
  var position_default = Position;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/range.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Range = class {
    constructor(start, end = null) {
      this.start = start.clone();
      this.end = end ? end.clone() : start.clone();
    }
    *[Symbol.iterator]() {
      yield* new treewalker_default({boundaries: this, ignoreElementEnd: true});
    }
    get isCollapsed() {
      return this.start.isEqual(this.end);
    }
    get isFlat() {
      return this.start.parent === this.end.parent;
    }
    get root() {
      return this.start.root;
    }
    getEnlarged() {
      let start = this.start.getLastMatchingPosition(enlargeTrimSkip, {direction: "backward"});
      let end = this.end.getLastMatchingPosition(enlargeTrimSkip);
      if (start.parent.is("$text") && start.isAtStart) {
        start = position_default._createBefore(start.parent);
      }
      if (end.parent.is("$text") && end.isAtEnd) {
        end = position_default._createAfter(end.parent);
      }
      return new Range(start, end);
    }
    getTrimmed() {
      let start = this.start.getLastMatchingPosition(enlargeTrimSkip);
      if (start.isAfter(this.end) || start.isEqual(this.end)) {
        return new Range(start, start);
      }
      let end = this.end.getLastMatchingPosition(enlargeTrimSkip, {direction: "backward"});
      const nodeAfterStart = start.nodeAfter;
      const nodeBeforeEnd = end.nodeBefore;
      if (nodeAfterStart && nodeAfterStart.is("$text")) {
        start = new position_default(nodeAfterStart, 0);
      }
      if (nodeBeforeEnd && nodeBeforeEnd.is("$text")) {
        end = new position_default(nodeBeforeEnd, nodeBeforeEnd.data.length);
      }
      return new Range(start, end);
    }
    isEqual(otherRange) {
      return this == otherRange || this.start.isEqual(otherRange.start) && this.end.isEqual(otherRange.end);
    }
    containsPosition(position30) {
      return position30.isAfter(this.start) && position30.isBefore(this.end);
    }
    containsRange(otherRange, loose = false) {
      if (otherRange.isCollapsed) {
        loose = false;
      }
      const containsStart = this.containsPosition(otherRange.start) || loose && this.start.isEqual(otherRange.start);
      const containsEnd = this.containsPosition(otherRange.end) || loose && this.end.isEqual(otherRange.end);
      return containsStart && containsEnd;
    }
    getDifference(otherRange) {
      const ranges = [];
      if (this.isIntersecting(otherRange)) {
        if (this.containsPosition(otherRange.start)) {
          ranges.push(new Range(this.start, otherRange.start));
        }
        if (this.containsPosition(otherRange.end)) {
          ranges.push(new Range(otherRange.end, this.end));
        }
      } else {
        ranges.push(this.clone());
      }
      return ranges;
    }
    getIntersection(otherRange) {
      if (this.isIntersecting(otherRange)) {
        let commonRangeStart = this.start;
        let commonRangeEnd = this.end;
        if (this.containsPosition(otherRange.start)) {
          commonRangeStart = otherRange.start;
        }
        if (this.containsPosition(otherRange.end)) {
          commonRangeEnd = otherRange.end;
        }
        return new Range(commonRangeStart, commonRangeEnd);
      }
      return null;
    }
    getWalker(options = {}) {
      options.boundaries = this;
      return new treewalker_default(options);
    }
    getCommonAncestor() {
      return this.start.getCommonAncestor(this.end);
    }
    getContainedElement() {
      if (this.isCollapsed) {
        return null;
      }
      let nodeAfterStart = this.start.nodeAfter;
      let nodeBeforeEnd = this.end.nodeBefore;
      if (this.start.parent.is("$text") && this.start.isAtEnd && this.start.parent.nextSibling) {
        nodeAfterStart = this.start.parent.nextSibling;
      }
      if (this.end.parent.is("$text") && this.end.isAtStart && this.end.parent.previousSibling) {
        nodeBeforeEnd = this.end.parent.previousSibling;
      }
      if (nodeAfterStart && nodeAfterStart.is("element") && nodeAfterStart === nodeBeforeEnd) {
        return nodeAfterStart;
      }
      return null;
    }
    clone() {
      return new Range(this.start, this.end);
    }
    *getItems(options = {}) {
      options.boundaries = this;
      options.ignoreElementEnd = true;
      const treeWalker = new treewalker_default(options);
      for (const value of treeWalker) {
        yield value.item;
      }
    }
    *getPositions(options = {}) {
      options.boundaries = this;
      const treeWalker = new treewalker_default(options);
      yield treeWalker.position;
      for (const value of treeWalker) {
        yield value.nextPosition;
      }
    }
    is(type) {
      return type === "range" || type === "view:range";
    }
    isIntersecting(otherRange) {
      return this.start.isBefore(otherRange.end) && this.end.isAfter(otherRange.start);
    }
    static _createFromParentsAndOffsets(startElement, startOffset, endElement, endOffset) {
      return new this(new position_default(startElement, startOffset), new position_default(endElement, endOffset));
    }
    static _createFromPositionAndShift(position30, shift) {
      const start = position30;
      const end = position30.getShiftedBy(shift);
      return shift > 0 ? new this(start, end) : new this(end, start);
    }
    static _createIn(element18) {
      return this._createFromParentsAndOffsets(element18, 0, element18, element18.childCount);
    }
    static _createOn(item) {
      const size = item.is("$textProxy") ? item.offsetSize : 1;
      return this._createFromPositionAndShift(position_default._createBefore(item), size);
    }
  };
  var range_default = Range;
  function enlargeTrimSkip(value) {
    if (value.item.is("attributeElement") || value.item.is("uiElement")) {
      return true;
    }
    return false;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/count.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function count(iterator) {
    let count4 = 0;
    for (const _ of iterator) {
      count4++;
    }
    return count4;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/selection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Selection = class {
    constructor(selectable = null, placeOrOffset, options) {
      this._ranges = [];
      this._lastRangeBackward = false;
      this._isFake = false;
      this._fakeSelectionLabel = "";
      this.setTo(selectable, placeOrOffset, options);
    }
    get isFake() {
      return this._isFake;
    }
    get fakeSelectionLabel() {
      return this._fakeSelectionLabel;
    }
    get anchor() {
      if (!this._ranges.length) {
        return null;
      }
      const range29 = this._ranges[this._ranges.length - 1];
      const anchor = this._lastRangeBackward ? range29.end : range29.start;
      return anchor.clone();
    }
    get focus() {
      if (!this._ranges.length) {
        return null;
      }
      const range29 = this._ranges[this._ranges.length - 1];
      const focus = this._lastRangeBackward ? range29.start : range29.end;
      return focus.clone();
    }
    get isCollapsed() {
      return this.rangeCount === 1 && this._ranges[0].isCollapsed;
    }
    get rangeCount() {
      return this._ranges.length;
    }
    get isBackward() {
      return !this.isCollapsed && this._lastRangeBackward;
    }
    get editableElement() {
      if (this.anchor) {
        return this.anchor.editableElement;
      }
      return null;
    }
    *getRanges() {
      for (const range29 of this._ranges) {
        yield range29.clone();
      }
    }
    getFirstRange() {
      let first6 = null;
      for (const range29 of this._ranges) {
        if (!first6 || range29.start.isBefore(first6.start)) {
          first6 = range29;
        }
      }
      return first6 ? first6.clone() : null;
    }
    getLastRange() {
      let last3 = null;
      for (const range29 of this._ranges) {
        if (!last3 || range29.end.isAfter(last3.end)) {
          last3 = range29;
        }
      }
      return last3 ? last3.clone() : null;
    }
    getFirstPosition() {
      const firstRange = this.getFirstRange();
      return firstRange ? firstRange.start.clone() : null;
    }
    getLastPosition() {
      const lastRange = this.getLastRange();
      return lastRange ? lastRange.end.clone() : null;
    }
    isEqual(otherSelection) {
      if (this.isFake != otherSelection.isFake) {
        return false;
      }
      if (this.isFake && this.fakeSelectionLabel != otherSelection.fakeSelectionLabel) {
        return false;
      }
      if (this.rangeCount != otherSelection.rangeCount) {
        return false;
      } else if (this.rangeCount === 0) {
        return true;
      }
      if (!this.anchor.isEqual(otherSelection.anchor) || !this.focus.isEqual(otherSelection.focus)) {
        return false;
      }
      for (const thisRange of this._ranges) {
        let found = false;
        for (const otherRange of otherSelection._ranges) {
          if (thisRange.isEqual(otherRange)) {
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
      return true;
    }
    isSimilar(otherSelection) {
      if (this.isBackward != otherSelection.isBackward) {
        return false;
      }
      const numOfRangesA = count(this.getRanges());
      const numOfRangesB = count(otherSelection.getRanges());
      if (numOfRangesA != numOfRangesB) {
        return false;
      }
      if (numOfRangesA == 0) {
        return true;
      }
      for (let rangeA of this.getRanges()) {
        rangeA = rangeA.getTrimmed();
        let found = false;
        for (let rangeB of otherSelection.getRanges()) {
          rangeB = rangeB.getTrimmed();
          if (rangeA.start.isEqual(rangeB.start) && rangeA.end.isEqual(rangeB.end)) {
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
      return true;
    }
    getSelectedElement() {
      if (this.rangeCount !== 1) {
        return null;
      }
      return this.getFirstRange().getContainedElement();
    }
    setTo(selectable, placeOrOffset, options) {
      if (selectable === null) {
        this._setRanges([]);
        this._setFakeOptions(placeOrOffset);
      } else if (selectable instanceof Selection || selectable instanceof documentselection_default) {
        this._setRanges(selectable.getRanges(), selectable.isBackward);
        this._setFakeOptions({fake: selectable.isFake, label: selectable.fakeSelectionLabel});
      } else if (selectable instanceof range_default) {
        this._setRanges([selectable], placeOrOffset && placeOrOffset.backward);
        this._setFakeOptions(placeOrOffset);
      } else if (selectable instanceof position_default) {
        this._setRanges([new range_default(selectable)]);
        this._setFakeOptions(placeOrOffset);
      } else if (selectable instanceof node_default) {
        const backward = !!options && !!options.backward;
        let range29;
        if (placeOrOffset === void 0) {
          throw new ckeditorerror_default("view-selection-setto-required-second-parameter", this);
        } else if (placeOrOffset == "in") {
          range29 = range_default._createIn(selectable);
        } else if (placeOrOffset == "on") {
          range29 = range_default._createOn(selectable);
        } else {
          range29 = new range_default(position_default._createAt(selectable, placeOrOffset));
        }
        this._setRanges([range29], backward);
        this._setFakeOptions(options);
      } else if (isIterable(selectable)) {
        this._setRanges(selectable, placeOrOffset && placeOrOffset.backward);
        this._setFakeOptions(placeOrOffset);
      } else {
        throw new ckeditorerror_default("view-selection-setto-not-selectable", this);
      }
      this.fire("change");
    }
    setFocus(itemOrPosition, offset) {
      if (this.anchor === null) {
        throw new ckeditorerror_default("view-selection-setfocus-no-ranges", this);
      }
      const newFocus = position_default._createAt(itemOrPosition, offset);
      if (newFocus.compareWith(this.focus) == "same") {
        return;
      }
      const anchor = this.anchor;
      this._ranges.pop();
      if (newFocus.compareWith(anchor) == "before") {
        this._addRange(new range_default(newFocus, anchor), true);
      } else {
        this._addRange(new range_default(anchor, newFocus));
      }
      this.fire("change");
    }
    is(type) {
      return type === "selection" || type === "view:selection";
    }
    _setRanges(newRanges, isLastBackward = false) {
      newRanges = Array.from(newRanges);
      this._ranges = [];
      for (const range29 of newRanges) {
        this._addRange(range29);
      }
      this._lastRangeBackward = !!isLastBackward;
    }
    _setFakeOptions(options = {}) {
      this._isFake = !!options.fake;
      this._fakeSelectionLabel = options.fake ? options.label || "" : "";
    }
    _addRange(range29, isBackward = false) {
      if (!(range29 instanceof range_default)) {
        throw new ckeditorerror_default("view-selection-add-range-not-range", this);
      }
      this._pushRange(range29);
      this._lastRangeBackward = !!isBackward;
    }
    _pushRange(range29) {
      for (const storedRange of this._ranges) {
        if (range29.isIntersecting(storedRange)) {
          throw new ckeditorerror_default("view-selection-range-intersects", this, {addedRange: range29, intersectingRange: storedRange});
        }
      }
      this._ranges.push(new range_default(range29.start, range29.end));
    }
  };
  var selection_default = Selection;
  mix(Selection, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/view/documentselection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DocumentSelection = class {
    constructor(selectable = null, placeOrOffset, options) {
      this._selection = new selection_default();
      this._selection.delegate("change").to(this);
      this._selection.setTo(selectable, placeOrOffset, options);
    }
    get isFake() {
      return this._selection.isFake;
    }
    get fakeSelectionLabel() {
      return this._selection.fakeSelectionLabel;
    }
    get anchor() {
      return this._selection.anchor;
    }
    get focus() {
      return this._selection.focus;
    }
    get isCollapsed() {
      return this._selection.isCollapsed;
    }
    get rangeCount() {
      return this._selection.rangeCount;
    }
    get isBackward() {
      return this._selection.isBackward;
    }
    get editableElement() {
      return this._selection.editableElement;
    }
    get _ranges() {
      return this._selection._ranges;
    }
    *getRanges() {
      yield* this._selection.getRanges();
    }
    getFirstRange() {
      return this._selection.getFirstRange();
    }
    getLastRange() {
      return this._selection.getLastRange();
    }
    getFirstPosition() {
      return this._selection.getFirstPosition();
    }
    getLastPosition() {
      return this._selection.getLastPosition();
    }
    getSelectedElement() {
      return this._selection.getSelectedElement();
    }
    isEqual(otherSelection) {
      return this._selection.isEqual(otherSelection);
    }
    isSimilar(otherSelection) {
      return this._selection.isSimilar(otherSelection);
    }
    is(type) {
      return type === "selection" || type == "documentSelection" || type == "view:selection" || type == "view:documentSelection";
    }
    _setTo(selectable, placeOrOffset, options) {
      this._selection.setTo(selectable, placeOrOffset, options);
    }
    _setFocus(itemOrPosition, offset) {
      this._selection.setFocus(itemOrPosition, offset);
    }
  };
  var documentselection_default = DocumentSelection;
  mix(DocumentSelection, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/view/document.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Document = class {
    constructor(stylesProcessor) {
      this.selection = new documentselection_default();
      this.roots = new collection_default({idProperty: "rootName"});
      this.stylesProcessor = stylesProcessor;
      this.set("isReadOnly", false);
      this.set("isFocused", false);
      this.set("isComposing", false);
      this._postFixers = new Set();
    }
    getRoot(name = "main") {
      return this.roots.get(name);
    }
    registerPostFixer(postFixer) {
      this._postFixers.add(postFixer);
    }
    destroy() {
      this.roots.map((root11) => root11.destroy());
      this.stopListening();
    }
    _callPostFixers(writer2) {
      let wasFixed = false;
      do {
        for (const callback of this._postFixers) {
          wasFixed = callback(writer2);
          if (wasFixed) {
            break;
          }
        }
      } while (wasFixed);
    }
  };
  var document_default = Document;
  mix(Document, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/view/attributeelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DEFAULT_PRIORITY = 10;
  var AttributeElement = class extends element_default {
    constructor(document5, name, attrs, children) {
      super(document5, name, attrs, children);
      this.getFillerOffset = getFillerOffset2;
      this._priority = DEFAULT_PRIORITY;
      this._id = null;
      this._clonesGroup = null;
    }
    get priority() {
      return this._priority;
    }
    get id() {
      return this._id;
    }
    getElementsWithSameId() {
      if (this.id === null) {
        throw new ckeditorerror_default("attribute-element-get-elements-with-same-id-no-id", this);
      }
      return new Set(this._clonesGroup);
    }
    is(type, name = null) {
      if (!name) {
        return type === "attributeElement" || type === "view:attributeElement" || type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "attributeElement" || type === "view:attributeElement" || type === "element" || type === "view:element");
      }
    }
    isSimilar(otherElement) {
      if (this.id !== null || otherElement.id !== null) {
        return this.id === otherElement.id;
      }
      return super.isSimilar(otherElement) && this.priority == otherElement.priority;
    }
    _clone(deep) {
      const cloned = super._clone(deep);
      cloned._priority = this._priority;
      cloned._id = this._id;
      return cloned;
    }
  };
  var attributeelement_default = AttributeElement;
  AttributeElement.DEFAULT_PRIORITY = DEFAULT_PRIORITY;
  function getFillerOffset2() {
    if (nonUiChildrenCount(this)) {
      return null;
    }
    let element18 = this.parent;
    while (element18 && element18.is("attributeElement")) {
      if (nonUiChildrenCount(element18) > 1) {
        return null;
      }
      element18 = element18.parent;
    }
    if (!element18 || nonUiChildrenCount(element18) > 1) {
      return null;
    }
    return this.childCount;
  }
  function nonUiChildrenCount(element18) {
    return Array.from(element18.getChildren()).filter((element19) => !element19.is("uiElement")).length;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/emptyelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EmptyElement = class extends element_default {
    constructor(document5, name, attrs, children) {
      super(document5, name, attrs, children);
      this.getFillerOffset = getFillerOffset3;
    }
    is(type, name = null) {
      if (!name) {
        return type === "emptyElement" || type === "view:emptyElement" || type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "emptyElement" || type === "view:emptyElement" || type === "element" || type === "view:element");
      }
    }
    _insertChild(index, nodes) {
      if (nodes && (nodes instanceof node_default || Array.from(nodes).length > 0)) {
        throw new ckeditorerror_default("view-emptyelement-cannot-add", [this, nodes]);
      }
    }
  };
  var emptyelement_default = EmptyElement;
  function getFillerOffset3() {
    return null;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/env.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var userAgent = navigator.userAgent.toLowerCase();
  var env = {
    isMac: isMac(userAgent),
    isGecko: isGecko(userAgent),
    isSafari: isSafari(userAgent),
    isAndroid: isAndroid(userAgent),
    isBlink: isBlink(userAgent),
    features: {
      isRegExpUnicodePropertySupported: isRegExpUnicodePropertySupported()
    }
  };
  var env_default = env;
  function isMac(userAgent2) {
    return userAgent2.indexOf("macintosh") > -1;
  }
  function isGecko(userAgent2) {
    return !!userAgent2.match(/gecko\/\d+/);
  }
  function isSafari(userAgent2) {
    return userAgent2.indexOf(" applewebkit/") > -1 && userAgent2.indexOf("chrome") === -1;
  }
  function isAndroid(userAgent2) {
    return userAgent2.indexOf("android") > -1;
  }
  function isBlink(userAgent2) {
    return userAgent2.indexOf("chrome/") > -1 && userAgent2.indexOf("edge/") < 0;
  }
  function isRegExpUnicodePropertySupported() {
    let isSupported = false;
    try {
      isSupported = "\u0107".search(new RegExp("[\\p{L}]", "u")) === 0;
    } catch (error) {
    }
    return isSupported;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/keyboard.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var macGlyphsToModifiers = {
    "\u2318": "ctrl",
    "\u21E7": "shift",
    "\u2325": "alt"
  };
  var modifiersToMacGlyphs = {
    ctrl: "\u2318",
    shift: "\u21E7",
    alt: "\u2325"
  };
  var keyCodes = generateKnownKeyCodes();
  function getCode(key) {
    let keyCode;
    if (typeof key == "string") {
      keyCode = keyCodes[key.toLowerCase()];
      if (!keyCode) {
        throw new ckeditorerror_default("keyboard-unknown-key", null, {key});
      }
    } else {
      keyCode = key.keyCode + (key.altKey ? keyCodes.alt : 0) + (key.ctrlKey ? keyCodes.ctrl : 0) + (key.shiftKey ? keyCodes.shift : 0);
    }
    return keyCode;
  }
  function parseKeystroke(keystroke) {
    if (typeof keystroke == "string") {
      keystroke = splitKeystrokeText(keystroke);
    }
    return keystroke.map((key) => typeof key == "string" ? getCode(key) : key).reduce((key, sum) => sum + key, 0);
  }
  function getEnvKeystrokeText(keystroke) {
    if (!env_default.isMac) {
      return keystroke;
    }
    return splitKeystrokeText(keystroke).map((key) => modifiersToMacGlyphs[key.toLowerCase()] || key).reduce((value, key) => {
      if (value.slice(-1) in macGlyphsToModifiers) {
        return value + key;
      } else {
        return value + "+" + key;
      }
    });
  }
  function isArrowKeyCode(keyCode) {
    return keyCode == keyCodes.arrowright || keyCode == keyCodes.arrowleft || keyCode == keyCodes.arrowup || keyCode == keyCodes.arrowdown;
  }
  function generateKnownKeyCodes() {
    const keyCodes2 = {
      arrowleft: 37,
      arrowup: 38,
      arrowright: 39,
      arrowdown: 40,
      backspace: 8,
      delete: 46,
      enter: 13,
      space: 32,
      esc: 27,
      tab: 9,
      ctrl: 1114112,
      cmd: 1114112,
      shift: 2228224,
      alt: 4456448
    };
    for (let code = 65; code <= 90; code++) {
      const letter = String.fromCharCode(code);
      keyCodes2[letter.toLowerCase()] = code;
    }
    for (let code = 48; code <= 57; code++) {
      keyCodes2[code - 48] = code;
    }
    for (let code = 112; code <= 123; code++) {
      keyCodes2["f" + (code - 111)] = code;
    }
    return keyCodes2;
  }
  function splitKeystrokeText(keystroke) {
    return keystroke.split(/\s*\+\s*/);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/uielement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var UIElement = class extends element_default {
    constructor(document5, name, attributes, children) {
      super(document5, name, attributes, children);
      this.getFillerOffset = getFillerOffset4;
    }
    is(type, name = null) {
      if (!name) {
        return type === "uiElement" || type === "view:uiElement" || type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "uiElement" || type === "view:uiElement" || type === "element" || type === "view:element");
      }
    }
    _insertChild(index, nodes) {
      if (nodes && (nodes instanceof node_default || Array.from(nodes).length > 0)) {
        throw new ckeditorerror_default("view-uielement-cannot-add", this);
      }
    }
    render(domDocument) {
      return this.toDomElement(domDocument);
    }
    toDomElement(domDocument) {
      const domElement = domDocument.createElement(this.name);
      for (const key of this.getAttributeKeys()) {
        domElement.setAttribute(key, this.getAttribute(key));
      }
      return domElement;
    }
  };
  var uielement_default = UIElement;
  function injectUiElementHandling(view19) {
    view19.document.on("keydown", (evt, data) => jumpOverUiElement(evt, data, view19.domConverter));
  }
  function getFillerOffset4() {
    return null;
  }
  function jumpOverUiElement(evt, data, domConverter) {
    if (data.keyCode == keyCodes.arrowright) {
      const domSelection = data.domTarget.ownerDocument.defaultView.getSelection();
      const domSelectionCollapsed = domSelection.rangeCount == 1 && domSelection.getRangeAt(0).collapsed;
      if (domSelectionCollapsed || data.shiftKey) {
        const domParent = domSelection.focusNode;
        const domOffset = domSelection.focusOffset;
        const viewPosition = domConverter.domPositionToView(domParent, domOffset);
        if (viewPosition === null) {
          return;
        }
        let jumpedOverAnyUiElement = false;
        const nextViewPosition = viewPosition.getLastMatchingPosition((value) => {
          if (value.item.is("uiElement")) {
            jumpedOverAnyUiElement = true;
          }
          if (value.item.is("uiElement") || value.item.is("attributeElement")) {
            return true;
          }
          return false;
        });
        if (jumpedOverAnyUiElement) {
          const newDomPosition = domConverter.viewPositionToDom(nextViewPosition);
          if (domSelectionCollapsed) {
            domSelection.collapse(newDomPosition.parent, newDomPosition.offset);
          } else {
            domSelection.extend(newDomPosition.parent, newDomPosition.offset);
          }
        }
      }
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/rawelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var RawElement = class extends element_default {
    constructor(document5, name, attrs, children) {
      super(document5, name, attrs, children);
      this.getFillerOffset = getFillerOffset5;
    }
    is(type, name = null) {
      if (!name) {
        return type === "rawElement" || type === "view:rawElement" || type === this.name || type === "view:" + this.name || type === "element" || type === "view:element" || type === "node" || type === "view:node";
      } else {
        return name === this.name && (type === "rawElement" || type === "view:rawElement" || type === "element" || type === "view:element");
      }
    }
    _insertChild(index, nodes) {
      if (nodes && (nodes instanceof node_default || Array.from(nodes).length > 0)) {
        throw new ckeditorerror_default("view-rawelement-cannot-add", [this, nodes]);
      }
    }
  };
  var rawelement_default = RawElement;
  function getFillerOffset5() {
    return null;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/documentfragment.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DocumentFragment = class {
    constructor(document5, children) {
      this.document = document5;
      this._children = [];
      if (children) {
        this._insertChild(0, children);
      }
    }
    [Symbol.iterator]() {
      return this._children[Symbol.iterator]();
    }
    get childCount() {
      return this._children.length;
    }
    get isEmpty() {
      return this.childCount === 0;
    }
    get root() {
      return this;
    }
    get parent() {
      return null;
    }
    is(type) {
      return type === "documentFragment" || type === "view:documentFragment";
    }
    _appendChild(items) {
      return this._insertChild(this.childCount, items);
    }
    getChild(index) {
      return this._children[index];
    }
    getChildIndex(node12) {
      return this._children.indexOf(node12);
    }
    getChildren() {
      return this._children[Symbol.iterator]();
    }
    _insertChild(index, items) {
      this._fireChange("children", this);
      let count4 = 0;
      const nodes = normalize2(this.document, items);
      for (const node12 of nodes) {
        if (node12.parent !== null) {
          node12._remove();
        }
        node12.parent = this;
        this._children.splice(index, 0, node12);
        index++;
        count4++;
      }
      return count4;
    }
    _removeChildren(index, howMany = 1) {
      this._fireChange("children", this);
      for (let i = index; i < index + howMany; i++) {
        this._children[i].parent = null;
      }
      return this._children.splice(index, howMany);
    }
    _fireChange(type, node12) {
      this.fire("change:" + type, node12);
    }
  };
  var documentfragment_default = DocumentFragment;
  mix(DocumentFragment, emittermixin_default);
  function normalize2(document5, nodes) {
    if (typeof nodes == "string") {
      return [new text_default(document5, nodes)];
    }
    if (!isIterable(nodes)) {
      nodes = [nodes];
    }
    return Array.from(nodes).map((node12) => {
      if (typeof node12 == "string") {
        return new text_default(document5, node12);
      }
      if (node12 instanceof textproxy_default) {
        return new text_default(document5, node12.data);
      }
      return node12;
    });
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/downcastwriter.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DowncastWriter = class {
    constructor(document5) {
      this.document = document5;
      this._cloneGroups = new Map();
    }
    setSelection(selectable, placeOrOffset, options) {
      this.document.selection._setTo(selectable, placeOrOffset, options);
    }
    setSelectionFocus(itemOrPosition, offset) {
      this.document.selection._setFocus(itemOrPosition, offset);
    }
    createText(data) {
      return new text_default(this.document, data);
    }
    createAttributeElement(name, attributes, options = {}) {
      const attributeElement = new attributeelement_default(this.document, name, attributes);
      if (options.priority) {
        attributeElement._priority = options.priority;
      }
      if (options.id) {
        attributeElement._id = options.id;
      }
      return attributeElement;
    }
    createContainerElement(name, attributes) {
      return new containerelement_default(this.document, name, attributes);
    }
    createEditableElement(name, attributes) {
      const editableElement = new editableelement_default(this.document, name, attributes);
      editableElement._document = this.document;
      return editableElement;
    }
    createEmptyElement(name, attributes) {
      return new emptyelement_default(this.document, name, attributes);
    }
    createUIElement(name, attributes, renderFunction) {
      const uiElement = new uielement_default(this.document, name, attributes);
      if (renderFunction) {
        uiElement.render = renderFunction;
      }
      return uiElement;
    }
    createRawElement(name, attributes, renderFunction) {
      const rawElement = new rawelement_default(this.document, name, attributes);
      rawElement.render = renderFunction || (() => {
      });
      return rawElement;
    }
    setAttribute(key, value, element18) {
      element18._setAttribute(key, value);
    }
    removeAttribute(key, element18) {
      element18._removeAttribute(key);
    }
    addClass(className, element18) {
      element18._addClass(className);
    }
    removeClass(className, element18) {
      element18._removeClass(className);
    }
    setStyle(property, value, element18) {
      if (isPlainObject_default(property) && element18 === void 0) {
        element18 = value;
      }
      element18._setStyle(property, value);
    }
    removeStyle(property, element18) {
      element18._removeStyle(property);
    }
    setCustomProperty(key, value, element18) {
      element18._setCustomProperty(key, value);
    }
    removeCustomProperty(key, element18) {
      return element18._removeCustomProperty(key);
    }
    breakAttributes(positionOrRange) {
      if (positionOrRange instanceof position_default) {
        return this._breakAttributes(positionOrRange);
      } else {
        return this._breakAttributesRange(positionOrRange);
      }
    }
    breakContainer(position30) {
      const element18 = position30.parent;
      if (!element18.is("containerElement")) {
        throw new ckeditorerror_default("view-writer-break-non-container-element", this.document);
      }
      if (!element18.parent) {
        throw new ckeditorerror_default("view-writer-break-root", this.document);
      }
      if (position30.isAtStart) {
        return position_default._createBefore(element18);
      } else if (!position30.isAtEnd) {
        const newElement = element18._clone(false);
        this.insert(position_default._createAfter(element18), newElement);
        const sourceRange = new range_default(position30, position_default._createAt(element18, "end"));
        const targetPosition = new position_default(newElement, 0);
        this.move(sourceRange, targetPosition);
      }
      return position_default._createAfter(element18);
    }
    mergeAttributes(position30) {
      const positionOffset = position30.offset;
      const positionParent = position30.parent;
      if (positionParent.is("$text")) {
        return position30;
      }
      if (positionParent.is("attributeElement") && positionParent.childCount === 0) {
        const parent3 = positionParent.parent;
        const offset = positionParent.index;
        positionParent._remove();
        this._removeFromClonedElementsGroup(positionParent);
        return this.mergeAttributes(new position_default(parent3, offset));
      }
      const nodeBefore = positionParent.getChild(positionOffset - 1);
      const nodeAfter = positionParent.getChild(positionOffset);
      if (!nodeBefore || !nodeAfter) {
        return position30;
      }
      if (nodeBefore.is("$text") && nodeAfter.is("$text")) {
        return mergeTextNodes(nodeBefore, nodeAfter);
      } else if (nodeBefore.is("attributeElement") && nodeAfter.is("attributeElement") && nodeBefore.isSimilar(nodeAfter)) {
        const count4 = nodeBefore.childCount;
        nodeBefore._appendChild(nodeAfter.getChildren());
        nodeAfter._remove();
        this._removeFromClonedElementsGroup(nodeAfter);
        return this.mergeAttributes(new position_default(nodeBefore, count4));
      }
      return position30;
    }
    mergeContainers(position30) {
      const prev = position30.nodeBefore;
      const next = position30.nodeAfter;
      if (!prev || !next || !prev.is("containerElement") || !next.is("containerElement")) {
        throw new ckeditorerror_default("view-writer-merge-containers-invalid-position", this.document);
      }
      const lastChild = prev.getChild(prev.childCount - 1);
      const newPosition = lastChild instanceof text_default ? position_default._createAt(lastChild, "end") : position_default._createAt(prev, "end");
      this.move(range_default._createIn(next), position_default._createAt(prev, "end"));
      this.remove(range_default._createOn(next));
      return newPosition;
    }
    insert(position30, nodes) {
      nodes = isIterable(nodes) ? [...nodes] : [nodes];
      validateNodesToInsert(nodes, this.document);
      const container = getParentContainer(position30);
      if (!container) {
        throw new ckeditorerror_default("view-writer-invalid-position-container", this.document);
      }
      const insertionPosition = this._breakAttributes(position30, true);
      const length = container._insertChild(insertionPosition.offset, nodes);
      for (const node12 of nodes) {
        this._addToClonedElementsGroup(node12);
      }
      const endPosition = insertionPosition.getShiftedBy(length);
      const start = this.mergeAttributes(insertionPosition);
      if (length === 0) {
        return new range_default(start, start);
      } else {
        if (!start.isEqual(insertionPosition)) {
          endPosition.offset--;
        }
        const end = this.mergeAttributes(endPosition);
        return new range_default(start, end);
      }
    }
    remove(rangeOrItem) {
      const range29 = rangeOrItem instanceof range_default ? rangeOrItem : range_default._createOn(rangeOrItem);
      validateRangeContainer(range29, this.document);
      if (range29.isCollapsed) {
        return new documentfragment_default(this.document);
      }
      const {start: breakStart, end: breakEnd} = this._breakAttributesRange(range29, true);
      const parentContainer = breakStart.parent;
      const count4 = breakEnd.offset - breakStart.offset;
      const removed = parentContainer._removeChildren(breakStart.offset, count4);
      for (const node12 of removed) {
        this._removeFromClonedElementsGroup(node12);
      }
      const mergePosition = this.mergeAttributes(breakStart);
      range29.start = mergePosition;
      range29.end = mergePosition.clone();
      return new documentfragment_default(this.document, removed);
    }
    clear(range29, element18) {
      validateRangeContainer(range29, this.document);
      const walker = range29.getWalker({
        direction: "backward",
        ignoreElementEnd: true
      });
      for (const current of walker) {
        const item = current.item;
        let rangeToRemove;
        if (item.is("element") && element18.isSimilar(item)) {
          rangeToRemove = range_default._createOn(item);
        } else if (!current.nextPosition.isAfter(range29.start) && item.is("$textProxy")) {
          const parentElement = item.getAncestors().find((ancestor) => {
            return ancestor.is("element") && element18.isSimilar(ancestor);
          });
          if (parentElement) {
            rangeToRemove = range_default._createIn(parentElement);
          }
        }
        if (rangeToRemove) {
          if (rangeToRemove.end.isAfter(range29.end)) {
            rangeToRemove.end = range29.end;
          }
          if (rangeToRemove.start.isBefore(range29.start)) {
            rangeToRemove.start = range29.start;
          }
          this.remove(rangeToRemove);
        }
      }
    }
    move(sourceRange, targetPosition) {
      let nodes;
      if (targetPosition.isAfter(sourceRange.end)) {
        targetPosition = this._breakAttributes(targetPosition, true);
        const parent3 = targetPosition.parent;
        const countBefore = parent3.childCount;
        sourceRange = this._breakAttributesRange(sourceRange, true);
        nodes = this.remove(sourceRange);
        targetPosition.offset += parent3.childCount - countBefore;
      } else {
        nodes = this.remove(sourceRange);
      }
      return this.insert(targetPosition, nodes);
    }
    wrap(range29, attribute) {
      if (!(attribute instanceof attributeelement_default)) {
        throw new ckeditorerror_default("view-writer-wrap-invalid-attribute", this.document);
      }
      validateRangeContainer(range29, this.document);
      if (!range29.isCollapsed) {
        return this._wrapRange(range29, attribute);
      } else {
        let position30 = range29.start;
        if (position30.parent.is("element") && !_hasNonUiChildren(position30.parent)) {
          position30 = position30.getLastMatchingPosition((value) => value.item.is("uiElement"));
        }
        position30 = this._wrapPosition(position30, attribute);
        const viewSelection = this.document.selection;
        if (viewSelection.isCollapsed && viewSelection.getFirstPosition().isEqual(range29.start)) {
          this.setSelection(position30);
        }
        return new range_default(position30);
      }
    }
    unwrap(range29, attribute) {
      if (!(attribute instanceof attributeelement_default)) {
        throw new ckeditorerror_default("view-writer-unwrap-invalid-attribute", this.document);
      }
      validateRangeContainer(range29, this.document);
      if (range29.isCollapsed) {
        return range29;
      }
      const {start: breakStart, end: breakEnd} = this._breakAttributesRange(range29, true);
      const parentContainer = breakStart.parent;
      const newRange = this._unwrapChildren(parentContainer, breakStart.offset, breakEnd.offset, attribute);
      const start = this.mergeAttributes(newRange.start);
      if (!start.isEqual(newRange.start)) {
        newRange.end.offset--;
      }
      const end = this.mergeAttributes(newRange.end);
      return new range_default(start, end);
    }
    rename(newName, viewElement) {
      const newElement = new containerelement_default(this.document, newName, viewElement.getAttributes());
      this.insert(position_default._createAfter(viewElement), newElement);
      this.move(range_default._createIn(viewElement), position_default._createAt(newElement, 0));
      this.remove(range_default._createOn(viewElement));
      return newElement;
    }
    clearClonedElementsGroup(groupName) {
      this._cloneGroups.delete(groupName);
    }
    createPositionAt(itemOrPosition, offset) {
      return position_default._createAt(itemOrPosition, offset);
    }
    createPositionAfter(item) {
      return position_default._createAfter(item);
    }
    createPositionBefore(item) {
      return position_default._createBefore(item);
    }
    createRange(start, end) {
      return new range_default(start, end);
    }
    createRangeOn(item) {
      return range_default._createOn(item);
    }
    createRangeIn(element18) {
      return range_default._createIn(element18);
    }
    createSelection(selectable, placeOrOffset, options) {
      return new selection_default(selectable, placeOrOffset, options);
    }
    _wrapChildren(parent3, startOffset, endOffset, wrapElement) {
      let i = startOffset;
      const wrapPositions = [];
      while (i < endOffset) {
        const child = parent3.getChild(i);
        const isText2 = child.is("$text");
        const isAttribute = child.is("attributeElement");
        const isEmpty = child.is("emptyElement");
        const isUI = child.is("uiElement");
        const isRaw = child.is("rawElement");
        if (isAttribute && this._wrapAttributeElement(wrapElement, child)) {
          wrapPositions.push(new position_default(parent3, i));
        } else if (isText2 || isEmpty || isUI || isRaw || isAttribute && shouldABeOutsideB(wrapElement, child)) {
          const newAttribute = wrapElement._clone();
          child._remove();
          newAttribute._appendChild(child);
          parent3._insertChild(i, newAttribute);
          this._addToClonedElementsGroup(newAttribute);
          wrapPositions.push(new position_default(parent3, i));
        } else if (isAttribute) {
          this._wrapChildren(child, 0, child.childCount, wrapElement);
        }
        i++;
      }
      let offsetChange = 0;
      for (const position30 of wrapPositions) {
        position30.offset -= offsetChange;
        if (position30.offset == startOffset) {
          continue;
        }
        const newPosition = this.mergeAttributes(position30);
        if (!newPosition.isEqual(position30)) {
          offsetChange++;
          endOffset--;
        }
      }
      return range_default._createFromParentsAndOffsets(parent3, startOffset, parent3, endOffset);
    }
    _unwrapChildren(parent3, startOffset, endOffset, unwrapElement) {
      let i = startOffset;
      const unwrapPositions = [];
      while (i < endOffset) {
        const child = parent3.getChild(i);
        if (!child.is("attributeElement")) {
          i++;
          continue;
        }
        if (child.isSimilar(unwrapElement)) {
          const unwrapped = child.getChildren();
          const count4 = child.childCount;
          child._remove();
          parent3._insertChild(i, unwrapped);
          this._removeFromClonedElementsGroup(child);
          unwrapPositions.push(new position_default(parent3, i), new position_default(parent3, i + count4));
          i += count4;
          endOffset += count4 - 1;
          continue;
        }
        if (this._unwrapAttributeElement(unwrapElement, child)) {
          unwrapPositions.push(new position_default(parent3, i), new position_default(parent3, i + 1));
          i++;
          continue;
        }
        this._unwrapChildren(child, 0, child.childCount, unwrapElement);
        i++;
      }
      let offsetChange = 0;
      for (const position30 of unwrapPositions) {
        position30.offset -= offsetChange;
        if (position30.offset == startOffset || position30.offset == endOffset) {
          continue;
        }
        const newPosition = this.mergeAttributes(position30);
        if (!newPosition.isEqual(position30)) {
          offsetChange++;
          endOffset--;
        }
      }
      return range_default._createFromParentsAndOffsets(parent3, startOffset, parent3, endOffset);
    }
    _wrapRange(range29, attribute) {
      const {start: breakStart, end: breakEnd} = this._breakAttributesRange(range29, true);
      const parentContainer = breakStart.parent;
      const newRange = this._wrapChildren(parentContainer, breakStart.offset, breakEnd.offset, attribute);
      const start = this.mergeAttributes(newRange.start);
      if (!start.isEqual(newRange.start)) {
        newRange.end.offset--;
      }
      const end = this.mergeAttributes(newRange.end);
      return new range_default(start, end);
    }
    _wrapPosition(position30, attribute) {
      if (attribute.isSimilar(position30.parent)) {
        return movePositionToTextNode(position30.clone());
      }
      if (position30.parent.is("$text")) {
        position30 = breakTextNode(position30);
      }
      const fakePosition = this.createAttributeElement();
      fakePosition._priority = Number.POSITIVE_INFINITY;
      fakePosition.isSimilar = () => false;
      position30.parent._insertChild(position30.offset, fakePosition);
      const wrapRange = new range_default(position30, position30.getShiftedBy(1));
      this.wrap(wrapRange, attribute);
      const newPosition = new position_default(fakePosition.parent, fakePosition.index);
      fakePosition._remove();
      const nodeBefore = newPosition.nodeBefore;
      const nodeAfter = newPosition.nodeAfter;
      if (nodeBefore instanceof text_default && nodeAfter instanceof text_default) {
        return mergeTextNodes(nodeBefore, nodeAfter);
      }
      return movePositionToTextNode(newPosition);
    }
    _wrapAttributeElement(wrapper, toWrap) {
      if (!canBeJoined(wrapper, toWrap)) {
        return false;
      }
      if (wrapper.name !== toWrap.name || wrapper.priority !== toWrap.priority) {
        return false;
      }
      for (const key of wrapper.getAttributeKeys()) {
        if (key === "class" || key === "style") {
          continue;
        }
        if (toWrap.hasAttribute(key) && toWrap.getAttribute(key) !== wrapper.getAttribute(key)) {
          return false;
        }
      }
      for (const key of wrapper.getStyleNames()) {
        if (toWrap.hasStyle(key) && toWrap.getStyle(key) !== wrapper.getStyle(key)) {
          return false;
        }
      }
      for (const key of wrapper.getAttributeKeys()) {
        if (key === "class" || key === "style") {
          continue;
        }
        if (!toWrap.hasAttribute(key)) {
          this.setAttribute(key, wrapper.getAttribute(key), toWrap);
        }
      }
      for (const key of wrapper.getStyleNames()) {
        if (!toWrap.hasStyle(key)) {
          this.setStyle(key, wrapper.getStyle(key), toWrap);
        }
      }
      for (const key of wrapper.getClassNames()) {
        if (!toWrap.hasClass(key)) {
          this.addClass(key, toWrap);
        }
      }
      return true;
    }
    _unwrapAttributeElement(wrapper, toUnwrap) {
      if (!canBeJoined(wrapper, toUnwrap)) {
        return false;
      }
      if (wrapper.name !== toUnwrap.name || wrapper.priority !== toUnwrap.priority) {
        return false;
      }
      for (const key of wrapper.getAttributeKeys()) {
        if (key === "class" || key === "style") {
          continue;
        }
        if (!toUnwrap.hasAttribute(key) || toUnwrap.getAttribute(key) !== wrapper.getAttribute(key)) {
          return false;
        }
      }
      if (!toUnwrap.hasClass(...wrapper.getClassNames())) {
        return false;
      }
      for (const key of wrapper.getStyleNames()) {
        if (!toUnwrap.hasStyle(key) || toUnwrap.getStyle(key) !== wrapper.getStyle(key)) {
          return false;
        }
      }
      for (const key of wrapper.getAttributeKeys()) {
        if (key === "class" || key === "style") {
          continue;
        }
        this.removeAttribute(key, toUnwrap);
      }
      this.removeClass(Array.from(wrapper.getClassNames()), toUnwrap);
      this.removeStyle(Array.from(wrapper.getStyleNames()), toUnwrap);
      return true;
    }
    _breakAttributesRange(range29, forceSplitText = false) {
      const rangeStart = range29.start;
      const rangeEnd = range29.end;
      validateRangeContainer(range29, this.document);
      if (range29.isCollapsed) {
        const position30 = this._breakAttributes(range29.start, forceSplitText);
        return new range_default(position30, position30);
      }
      const breakEnd = this._breakAttributes(rangeEnd, forceSplitText);
      const count4 = breakEnd.parent.childCount;
      const breakStart = this._breakAttributes(rangeStart, forceSplitText);
      breakEnd.offset += breakEnd.parent.childCount - count4;
      return new range_default(breakStart, breakEnd);
    }
    _breakAttributes(position30, forceSplitText = false) {
      const positionOffset = position30.offset;
      const positionParent = position30.parent;
      if (position30.parent.is("emptyElement")) {
        throw new ckeditorerror_default("view-writer-cannot-break-empty-element", this.document);
      }
      if (position30.parent.is("uiElement")) {
        throw new ckeditorerror_default("view-writer-cannot-break-ui-element", this.document);
      }
      if (position30.parent.is("rawElement")) {
        throw new ckeditorerror_default("view-writer-cannot-break-raw-element", this.document);
      }
      if (!forceSplitText && positionParent.is("$text") && isContainerOrFragment(positionParent.parent)) {
        return position30.clone();
      }
      if (isContainerOrFragment(positionParent)) {
        return position30.clone();
      }
      if (positionParent.is("$text")) {
        return this._breakAttributes(breakTextNode(position30), forceSplitText);
      }
      const length = positionParent.childCount;
      if (positionOffset == length) {
        const newPosition = new position_default(positionParent.parent, positionParent.index + 1);
        return this._breakAttributes(newPosition, forceSplitText);
      } else {
        if (positionOffset === 0) {
          const newPosition = new position_default(positionParent.parent, positionParent.index);
          return this._breakAttributes(newPosition, forceSplitText);
        } else {
          const offsetAfter = positionParent.index + 1;
          const clonedNode = positionParent._clone();
          positionParent.parent._insertChild(offsetAfter, clonedNode);
          this._addToClonedElementsGroup(clonedNode);
          const count4 = positionParent.childCount - positionOffset;
          const nodesToMove = positionParent._removeChildren(positionOffset, count4);
          clonedNode._appendChild(nodesToMove);
          const newPosition = new position_default(positionParent.parent, offsetAfter);
          return this._breakAttributes(newPosition, forceSplitText);
        }
      }
    }
    _addToClonedElementsGroup(element18) {
      if (!element18.root.is("rootElement")) {
        return;
      }
      if (element18.is("element")) {
        for (const child of element18.getChildren()) {
          this._addToClonedElementsGroup(child);
        }
      }
      const id = element18.id;
      if (!id) {
        return;
      }
      let group = this._cloneGroups.get(id);
      if (!group) {
        group = new Set();
        this._cloneGroups.set(id, group);
      }
      group.add(element18);
      element18._clonesGroup = group;
    }
    _removeFromClonedElementsGroup(element18) {
      if (element18.is("element")) {
        for (const child of element18.getChildren()) {
          this._removeFromClonedElementsGroup(child);
        }
      }
      const id = element18.id;
      if (!id) {
        return;
      }
      const group = this._cloneGroups.get(id);
      if (!group) {
        return;
      }
      group.delete(element18);
    }
  };
  var downcastwriter_default = DowncastWriter;
  function _hasNonUiChildren(parent3) {
    return Array.from(parent3.getChildren()).some((child) => !child.is("uiElement"));
  }
  function getParentContainer(position30) {
    let parent3 = position30.parent;
    while (!isContainerOrFragment(parent3)) {
      if (!parent3) {
        return void 0;
      }
      parent3 = parent3.parent;
    }
    return parent3;
  }
  function shouldABeOutsideB(a, b) {
    if (a.priority < b.priority) {
      return true;
    } else if (a.priority > b.priority) {
      return false;
    }
    return a.getIdentity() < b.getIdentity();
  }
  function movePositionToTextNode(position30) {
    const nodeBefore = position30.nodeBefore;
    if (nodeBefore && nodeBefore.is("$text")) {
      return new position_default(nodeBefore, nodeBefore.data.length);
    }
    const nodeAfter = position30.nodeAfter;
    if (nodeAfter && nodeAfter.is("$text")) {
      return new position_default(nodeAfter, 0);
    }
    return position30;
  }
  function breakTextNode(position30) {
    if (position30.offset == position30.parent.data.length) {
      return new position_default(position30.parent.parent, position30.parent.index + 1);
    }
    if (position30.offset === 0) {
      return new position_default(position30.parent.parent, position30.parent.index);
    }
    const textToMove = position30.parent.data.slice(position30.offset);
    position30.parent._data = position30.parent.data.slice(0, position30.offset);
    position30.parent.parent._insertChild(position30.parent.index + 1, new text_default(position30.root.document, textToMove));
    return new position_default(position30.parent.parent, position30.parent.index + 1);
  }
  function mergeTextNodes(t1, t2) {
    const nodeBeforeLength = t1.data.length;
    t1._data += t2.data;
    t2._remove();
    return new position_default(t1, nodeBeforeLength);
  }
  function validateNodesToInsert(nodes, errorContext) {
    for (const node12 of nodes) {
      if (!validNodesToInsert.some((validNode) => node12 instanceof validNode)) {
        throw new ckeditorerror_default("view-writer-insert-invalid-node-type", errorContext);
      }
      if (!node12.is("$text")) {
        validateNodesToInsert(node12.getChildren(), errorContext);
      }
    }
  }
  var validNodesToInsert = [text_default, attributeelement_default, containerelement_default, emptyelement_default, rawelement_default, uielement_default];
  function isContainerOrFragment(node12) {
    return node12 && (node12.is("containerElement") || node12.is("documentFragment"));
  }
  function validateRangeContainer(range29, errorContext) {
    const startContainer = getParentContainer(range29.start);
    const endContainer = getParentContainer(range29.end);
    if (!startContainer || !endContainer || startContainer !== endContainer) {
      throw new ckeditorerror_default("view-writer-invalid-range-container", errorContext);
    }
  }
  function canBeJoined(a, b) {
    return a.id === null && b.id === null;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/istext.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function isText(obj) {
    return Object.prototype.toString.call(obj) == "[object Text]";
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/filler.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var NBSP_FILLER = (domDocument) => domDocument.createTextNode("\xA0");
  var BR_FILLER = (domDocument) => {
    const fillerBr = domDocument.createElement("br");
    fillerBr.dataset.ckeFiller = true;
    return fillerBr;
  };
  var INLINE_FILLER_LENGTH = 7;
  var INLINE_FILLER = (() => {
    let inlineFiller = "";
    for (let i = 0; i < INLINE_FILLER_LENGTH; i++) {
      inlineFiller += "\u200B";
    }
    return inlineFiller;
  })();
  function startsWithFiller(domNode) {
    return isText(domNode) && domNode.data.substr(0, INLINE_FILLER_LENGTH) === INLINE_FILLER;
  }
  function isInlineFiller(domText) {
    return domText.data.length == INLINE_FILLER_LENGTH && startsWithFiller(domText);
  }
  function getDataWithoutFiller(domText) {
    if (startsWithFiller(domText)) {
      return domText.data.slice(INLINE_FILLER_LENGTH);
    } else {
      return domText.data;
    }
  }
  function injectQuirksHandling(view19) {
    view19.document.on("keydown", jumpOverInlineFiller);
  }
  function jumpOverInlineFiller(evt, data) {
    if (data.keyCode == keyCodes.arrowleft) {
      const domSelection = data.domTarget.ownerDocument.defaultView.getSelection();
      if (domSelection.rangeCount == 1 && domSelection.getRangeAt(0).collapsed) {
        const domParent = domSelection.getRangeAt(0).startContainer;
        const domOffset = domSelection.getRangeAt(0).startOffset;
        if (startsWithFiller(domParent) && domOffset <= INLINE_FILLER_LENGTH) {
          domSelection.collapse(domParent, 0);
        }
      }
    }
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/fastdiff.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function fastDiff(a, b, cmp, atomicChanges = false) {
    cmp = cmp || function(a2, b2) {
      return a2 === b2;
    };
    if (!Array.isArray(a)) {
      a = Array.prototype.slice.call(a);
    }
    if (!Array.isArray(b)) {
      b = Array.prototype.slice.call(b);
    }
    const changeIndexes = findChangeBoundaryIndexes(a, b, cmp);
    return atomicChanges ? changeIndexesToAtomicChanges(changeIndexes, b.length) : changeIndexesToChanges(b, changeIndexes);
  }
  function findChangeBoundaryIndexes(arr1, arr2, cmp) {
    const firstIndex = findFirstDifferenceIndex(arr1, arr2, cmp);
    if (firstIndex === -1) {
      return {firstIndex: -1, lastIndexOld: -1, lastIndexNew: -1};
    }
    const oldArrayReversed = cutAndReverse(arr1, firstIndex);
    const newArrayReversed = cutAndReverse(arr2, firstIndex);
    const lastIndex = findFirstDifferenceIndex(oldArrayReversed, newArrayReversed, cmp);
    const lastIndexOld = arr1.length - lastIndex;
    const lastIndexNew = arr2.length - lastIndex;
    return {firstIndex, lastIndexOld, lastIndexNew};
  }
  function findFirstDifferenceIndex(arr1, arr2, cmp) {
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
      if (arr1[i] === void 0 || arr2[i] === void 0 || !cmp(arr1[i], arr2[i])) {
        return i;
      }
    }
    return -1;
  }
  function cutAndReverse(arr, howMany) {
    return arr.slice(howMany).reverse();
  }
  function changeIndexesToChanges(newArray, changeIndexes) {
    const result = [];
    const {firstIndex, lastIndexOld, lastIndexNew} = changeIndexes;
    if (lastIndexNew - firstIndex > 0) {
      result.push({
        index: firstIndex,
        type: "insert",
        values: newArray.slice(firstIndex, lastIndexNew)
      });
    }
    if (lastIndexOld - firstIndex > 0) {
      result.push({
        index: firstIndex + (lastIndexNew - firstIndex),
        type: "delete",
        howMany: lastIndexOld - firstIndex
      });
    }
    return result;
  }
  function changeIndexesToAtomicChanges(changeIndexes, newLength) {
    const {firstIndex, lastIndexOld, lastIndexNew} = changeIndexes;
    if (firstIndex === -1) {
      return Array(newLength).fill("equal");
    }
    let result = [];
    if (firstIndex > 0) {
      result = result.concat(Array(firstIndex).fill("equal"));
    }
    if (lastIndexNew - firstIndex > 0) {
      result = result.concat(Array(lastIndexNew - firstIndex).fill("insert"));
    }
    if (lastIndexOld - firstIndex > 0) {
      result = result.concat(Array(lastIndexOld - firstIndex).fill("delete"));
    }
    if (lastIndexNew < newLength) {
      result = result.concat(Array(newLength - lastIndexNew).fill("equal"));
    }
    return result;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/diff.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function diff(a, b, cmp) {
    cmp = cmp || function(a2, b2) {
      return a2 === b2;
    };
    const aLength = a.length;
    const bLength = b.length;
    if (aLength > 200 || bLength > 200 || aLength + bLength > 300) {
      return diff.fastDiff(a, b, cmp, true);
    }
    let _insert2, _delete;
    if (bLength < aLength) {
      const tmp = a;
      a = b;
      b = tmp;
      _insert2 = "delete";
      _delete = "insert";
    } else {
      _insert2 = "insert";
      _delete = "delete";
    }
    const m = a.length;
    const n = b.length;
    const delta = n - m;
    const es = {};
    const fp = {};
    function snake(k2) {
      const y1 = (fp[k2 - 1] !== void 0 ? fp[k2 - 1] : -1) + 1;
      const y2 = fp[k2 + 1] !== void 0 ? fp[k2 + 1] : -1;
      const dir = y1 > y2 ? -1 : 1;
      if (es[k2 + dir]) {
        es[k2] = es[k2 + dir].slice(0);
      }
      if (!es[k2]) {
        es[k2] = [];
      }
      es[k2].push(y1 > y2 ? _insert2 : _delete);
      let y = Math.max(y1, y2);
      let x = y - k2;
      while (x < m && y < n && cmp(a[x], b[y])) {
        x++;
        y++;
        es[k2].push("equal");
      }
      return y;
    }
    let p = 0;
    let k;
    do {
      for (k = -p; k < delta; k++) {
        fp[k] = snake(k);
      }
      for (k = delta + p; k > delta; k--) {
        fp[k] = snake(k);
      }
      fp[delta] = snake(delta);
      p++;
    } while (fp[delta] !== n);
    return es[delta].slice(1);
  }
  diff.fastDiff = fastDiff;

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/insertat.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function insertAt(parentElement, index, nodeToInsert) {
    parentElement.insertBefore(nodeToInsert, parentElement.childNodes[index] || null);
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/remove.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function remove(node12) {
    const parent3 = node12.parentNode;
    if (parent3) {
      parent3.removeChild(node12);
    }
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/isnode.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function isNode(obj) {
    if (obj) {
      if (obj.defaultView) {
        return obj instanceof obj.defaultView.Document;
      } else if (obj.ownerDocument && obj.ownerDocument.defaultView) {
        return obj instanceof obj.ownerDocument.defaultView.Node;
      }
    }
    return false;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/renderer.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Renderer = class {
    constructor(domConverter, selection11) {
      this.domDocuments = new Set();
      this.domConverter = domConverter;
      this.markedAttributes = new Set();
      this.markedChildren = new Set();
      this.markedTexts = new Set();
      this.selection = selection11;
      this.isFocused = false;
      this._inlineFiller = null;
      this._fakeSelectionContainer = null;
    }
    markToSync(type, node12) {
      if (type === "text") {
        if (this.domConverter.mapViewToDom(node12.parent)) {
          this.markedTexts.add(node12);
        }
      } else {
        if (!this.domConverter.mapViewToDom(node12)) {
          return;
        }
        if (type === "attributes") {
          this.markedAttributes.add(node12);
        } else if (type === "children") {
          this.markedChildren.add(node12);
        } else {
          throw new ckeditorerror_default("view-renderer-unknown-type", this);
        }
      }
    }
    render() {
      let inlineFillerPosition;
      for (const element18 of this.markedChildren) {
        this._updateChildrenMappings(element18);
      }
      if (this._inlineFiller && !this._isSelectionInInlineFiller()) {
        this._removeInlineFiller();
      }
      if (this._inlineFiller) {
        inlineFillerPosition = this._getInlineFillerPosition();
      } else if (this._needsInlineFillerAtSelection()) {
        inlineFillerPosition = this.selection.getFirstPosition();
        this.markedChildren.add(inlineFillerPosition.parent);
      }
      for (const element18 of this.markedAttributes) {
        this._updateAttrs(element18);
      }
      for (const element18 of this.markedChildren) {
        this._updateChildren(element18, {inlineFillerPosition});
      }
      for (const node12 of this.markedTexts) {
        if (!this.markedChildren.has(node12.parent) && this.domConverter.mapViewToDom(node12.parent)) {
          this._updateText(node12, {inlineFillerPosition});
        }
      }
      if (inlineFillerPosition) {
        const fillerDomPosition = this.domConverter.viewPositionToDom(inlineFillerPosition);
        const domDocument = fillerDomPosition.parent.ownerDocument;
        if (!startsWithFiller(fillerDomPosition.parent)) {
          this._inlineFiller = addInlineFiller(domDocument, fillerDomPosition.parent, fillerDomPosition.offset);
        } else {
          this._inlineFiller = fillerDomPosition.parent;
        }
      } else {
        this._inlineFiller = null;
      }
      this._updateSelection();
      this._updateFocus();
      this.markedTexts.clear();
      this.markedAttributes.clear();
      this.markedChildren.clear();
    }
    _updateChildrenMappings(viewElement) {
      const domElement = this.domConverter.mapViewToDom(viewElement);
      if (!domElement) {
        return;
      }
      const actualDomChildren = this.domConverter.mapViewToDom(viewElement).childNodes;
      const expectedDomChildren = Array.from(this.domConverter.viewChildrenToDom(viewElement, domElement.ownerDocument, {withChildren: false}));
      const diff5 = this._diffNodeLists(actualDomChildren, expectedDomChildren);
      const actions = this._findReplaceActions(diff5, actualDomChildren, expectedDomChildren);
      if (actions.indexOf("replace") !== -1) {
        const counter = {equal: 0, insert: 0, delete: 0};
        for (const action of actions) {
          if (action === "replace") {
            const insertIndex = counter.equal + counter.insert;
            const deleteIndex = counter.equal + counter.delete;
            const viewChild = viewElement.getChild(insertIndex);
            if (viewChild && !(viewChild.is("uiElement") || viewChild.is("rawElement"))) {
              this._updateElementMappings(viewChild, actualDomChildren[deleteIndex]);
            }
            remove(expectedDomChildren[insertIndex]);
            counter.equal++;
          } else {
            counter[action]++;
          }
        }
      }
    }
    _updateElementMappings(viewElement, domElement) {
      this.domConverter.unbindDomElement(domElement);
      this.domConverter.bindElements(domElement, viewElement);
      this.markedChildren.add(viewElement);
      this.markedAttributes.add(viewElement);
    }
    _getInlineFillerPosition() {
      const firstPos = this.selection.getFirstPosition();
      if (firstPos.parent.is("$text")) {
        return position_default._createBefore(this.selection.getFirstPosition().parent);
      } else {
        return firstPos;
      }
    }
    _isSelectionInInlineFiller() {
      if (this.selection.rangeCount != 1 || !this.selection.isCollapsed) {
        return false;
      }
      const selectionPosition = this.selection.getFirstPosition();
      const position30 = this.domConverter.viewPositionToDom(selectionPosition);
      if (position30 && isText(position30.parent) && startsWithFiller(position30.parent)) {
        return true;
      }
      return false;
    }
    _removeInlineFiller() {
      const domFillerNode = this._inlineFiller;
      if (!startsWithFiller(domFillerNode)) {
        throw new ckeditorerror_default("view-renderer-filler-was-lost", this);
      }
      if (isInlineFiller(domFillerNode)) {
        domFillerNode.parentNode.removeChild(domFillerNode);
      } else {
        domFillerNode.data = domFillerNode.data.substr(INLINE_FILLER_LENGTH);
      }
      this._inlineFiller = null;
    }
    _needsInlineFillerAtSelection() {
      if (this.selection.rangeCount != 1 || !this.selection.isCollapsed) {
        return false;
      }
      const selectionPosition = this.selection.getFirstPosition();
      const selectionParent = selectionPosition.parent;
      const selectionOffset = selectionPosition.offset;
      if (!this.domConverter.mapViewToDom(selectionParent.root)) {
        return false;
      }
      if (!selectionParent.is("element")) {
        return false;
      }
      if (!isEditable(selectionParent)) {
        return false;
      }
      if (selectionOffset === selectionParent.getFillerOffset()) {
        return false;
      }
      const nodeBefore = selectionPosition.nodeBefore;
      const nodeAfter = selectionPosition.nodeAfter;
      if (nodeBefore instanceof text_default || nodeAfter instanceof text_default) {
        return false;
      }
      return true;
    }
    _updateText(viewText, options) {
      const domText = this.domConverter.findCorrespondingDomText(viewText);
      const newDomText = this.domConverter.viewToDom(viewText, domText.ownerDocument);
      const actualText = domText.data;
      let expectedText = newDomText.data;
      const filler5 = options.inlineFillerPosition;
      if (filler5 && filler5.parent == viewText.parent && filler5.offset == viewText.index) {
        expectedText = INLINE_FILLER + expectedText;
      }
      if (actualText != expectedText) {
        const actions = fastDiff(actualText, expectedText);
        for (const action of actions) {
          if (action.type === "insert") {
            domText.insertData(action.index, action.values.join(""));
          } else {
            domText.deleteData(action.index, action.howMany);
          }
        }
      }
    }
    _updateAttrs(viewElement) {
      const domElement = this.domConverter.mapViewToDom(viewElement);
      if (!domElement) {
        return;
      }
      const domAttrKeys = Array.from(domElement.attributes).map((attr) => attr.name);
      const viewAttrKeys = viewElement.getAttributeKeys();
      for (const key of viewAttrKeys) {
        domElement.setAttribute(key, viewElement.getAttribute(key));
      }
      for (const key of domAttrKeys) {
        if (!viewElement.hasAttribute(key)) {
          domElement.removeAttribute(key);
        }
      }
    }
    _updateChildren(viewElement, options) {
      const domElement = this.domConverter.mapViewToDom(viewElement);
      if (!domElement) {
        return;
      }
      const inlineFillerPosition = options.inlineFillerPosition;
      const actualDomChildren = this.domConverter.mapViewToDom(viewElement).childNodes;
      const expectedDomChildren = Array.from(this.domConverter.viewChildrenToDom(viewElement, domElement.ownerDocument, {bind: true, inlineFillerPosition}));
      if (inlineFillerPosition && inlineFillerPosition.parent === viewElement) {
        addInlineFiller(domElement.ownerDocument, expectedDomChildren, inlineFillerPosition.offset);
      }
      const diff5 = this._diffNodeLists(actualDomChildren, expectedDomChildren);
      let i = 0;
      const nodesToUnbind = new Set();
      for (const action of diff5) {
        if (action === "delete") {
          nodesToUnbind.add(actualDomChildren[i]);
          remove(actualDomChildren[i]);
        } else if (action === "equal") {
          i++;
        }
      }
      i = 0;
      for (const action of diff5) {
        if (action === "insert") {
          insertAt(domElement, i, expectedDomChildren[i]);
          i++;
        } else if (action === "equal") {
          this._markDescendantTextToSync(this.domConverter.domToView(expectedDomChildren[i]));
          i++;
        }
      }
      for (const node12 of nodesToUnbind) {
        if (!node12.parentNode) {
          this.domConverter.unbindDomElement(node12);
        }
      }
    }
    _diffNodeLists(actualDomChildren, expectedDomChildren) {
      actualDomChildren = filterOutFakeSelectionContainer(actualDomChildren, this._fakeSelectionContainer);
      return diff(actualDomChildren, expectedDomChildren, sameNodes.bind(null, this.domConverter));
    }
    _findReplaceActions(actions, actualDom, expectedDom) {
      if (actions.indexOf("insert") === -1 || actions.indexOf("delete") === -1) {
        return actions;
      }
      let newActions = [];
      let actualSlice = [];
      let expectedSlice = [];
      const counter = {equal: 0, insert: 0, delete: 0};
      for (const action of actions) {
        if (action === "insert") {
          expectedSlice.push(expectedDom[counter.equal + counter.insert]);
        } else if (action === "delete") {
          actualSlice.push(actualDom[counter.equal + counter.delete]);
        } else {
          newActions = newActions.concat(diff(actualSlice, expectedSlice, areSimilar).map((x) => x === "equal" ? "replace" : x));
          newActions.push("equal");
          actualSlice = [];
          expectedSlice = [];
        }
        counter[action]++;
      }
      return newActions.concat(diff(actualSlice, expectedSlice, areSimilar).map((x) => x === "equal" ? "replace" : x));
    }
    _markDescendantTextToSync(viewNode) {
      if (!viewNode) {
        return;
      }
      if (viewNode.is("$text")) {
        this.markedTexts.add(viewNode);
      } else if (viewNode.is("element")) {
        for (const child of viewNode.getChildren()) {
          this._markDescendantTextToSync(child);
        }
      }
    }
    _updateSelection() {
      if (this.selection.rangeCount === 0) {
        this._removeDomSelection();
        this._removeFakeSelection();
        return;
      }
      const domRoot = this.domConverter.mapViewToDom(this.selection.editableElement);
      if (!this.isFocused || !domRoot) {
        return;
      }
      if (this.selection.isFake) {
        this._updateFakeSelection(domRoot);
      } else {
        this._removeFakeSelection();
        this._updateDomSelection(domRoot);
      }
    }
    _updateFakeSelection(domRoot) {
      const domDocument = domRoot.ownerDocument;
      if (!this._fakeSelectionContainer) {
        this._fakeSelectionContainer = createFakeSelectionContainer(domDocument);
      }
      const container = this._fakeSelectionContainer;
      this.domConverter.bindFakeSelection(container, this.selection);
      if (!this._fakeSelectionNeedsUpdate(domRoot)) {
        return;
      }
      if (!container.parentElement || container.parentElement != domRoot) {
        domRoot.appendChild(container);
      }
      container.textContent = this.selection.fakeSelectionLabel || "\xA0";
      const domSelection = domDocument.getSelection();
      const domRange = domDocument.createRange();
      domSelection.removeAllRanges();
      domRange.selectNodeContents(container);
      domSelection.addRange(domRange);
    }
    _updateDomSelection(domRoot) {
      const domSelection = domRoot.ownerDocument.defaultView.getSelection();
      if (!this._domSelectionNeedsUpdate(domSelection)) {
        return;
      }
      const anchor = this.domConverter.viewPositionToDom(this.selection.anchor);
      const focus = this.domConverter.viewPositionToDom(this.selection.focus);
      domRoot.focus();
      domSelection.collapse(anchor.parent, anchor.offset);
      domSelection.extend(focus.parent, focus.offset);
      if (env_default.isGecko) {
        fixGeckoSelectionAfterBr(focus, domSelection);
      }
    }
    _domSelectionNeedsUpdate(domSelection) {
      if (!this.domConverter.isDomSelectionCorrect(domSelection)) {
        return true;
      }
      const oldViewSelection = domSelection && this.domConverter.domSelectionToView(domSelection);
      if (oldViewSelection && this.selection.isEqual(oldViewSelection)) {
        return false;
      }
      if (!this.selection.isCollapsed && this.selection.isSimilar(oldViewSelection)) {
        return false;
      }
      return true;
    }
    _fakeSelectionNeedsUpdate(domRoot) {
      const container = this._fakeSelectionContainer;
      const domSelection = domRoot.ownerDocument.getSelection();
      if (!container || container.parentElement !== domRoot) {
        return true;
      }
      if (domSelection.anchorNode !== container && !container.contains(domSelection.anchorNode)) {
        return true;
      }
      return container.textContent !== this.selection.fakeSelectionLabel;
    }
    _removeDomSelection() {
      for (const doc of this.domDocuments) {
        const domSelection = doc.getSelection();
        if (domSelection.rangeCount) {
          const activeDomElement = doc.activeElement;
          const viewElement = this.domConverter.mapDomToView(activeDomElement);
          if (activeDomElement && viewElement) {
            doc.getSelection().removeAllRanges();
          }
        }
      }
    }
    _removeFakeSelection() {
      const container = this._fakeSelectionContainer;
      if (container) {
        container.remove();
      }
    }
    _updateFocus() {
      if (this.isFocused) {
        const editable = this.selection.editableElement;
        if (editable) {
          this.domConverter.focus(editable);
        }
      }
    }
  };
  var renderer_default = Renderer;
  mix(Renderer, observablemixin_default);
  function isEditable(element18) {
    if (element18.getAttribute("contenteditable") == "false") {
      return false;
    }
    const parent3 = element18.findAncestor((element19) => element19.hasAttribute("contenteditable"));
    return !parent3 || parent3.getAttribute("contenteditable") == "true";
  }
  function addInlineFiller(domDocument, domParentOrArray, offset) {
    const childNodes = domParentOrArray instanceof Array ? domParentOrArray : domParentOrArray.childNodes;
    const nodeAfterFiller = childNodes[offset];
    if (isText(nodeAfterFiller)) {
      nodeAfterFiller.data = INLINE_FILLER + nodeAfterFiller.data;
      return nodeAfterFiller;
    } else {
      const fillerNode = domDocument.createTextNode(INLINE_FILLER);
      if (Array.isArray(domParentOrArray)) {
        childNodes.splice(offset, 0, fillerNode);
      } else {
        insertAt(domParentOrArray, offset, fillerNode);
      }
      return fillerNode;
    }
  }
  function areSimilar(node1, node22) {
    return isNode(node1) && isNode(node22) && !isText(node1) && !isText(node22) && node1.nodeType !== Node.COMMENT_NODE && node22.nodeType !== Node.COMMENT_NODE && node1.tagName.toLowerCase() === node22.tagName.toLowerCase();
  }
  function sameNodes(domConverter, actualDomChild, expectedDomChild) {
    if (actualDomChild === expectedDomChild) {
      return true;
    } else if (isText(actualDomChild) && isText(expectedDomChild)) {
      return actualDomChild.data === expectedDomChild.data;
    } else if (domConverter.isBlockFiller(actualDomChild) && domConverter.isBlockFiller(expectedDomChild)) {
      return true;
    }
    return false;
  }
  function fixGeckoSelectionAfterBr(focus, domSelection) {
    const parent3 = focus.parent;
    if (parent3.nodeType != Node.ELEMENT_NODE || focus.offset != parent3.childNodes.length - 1) {
      return;
    }
    const childAtOffset = parent3.childNodes[focus.offset];
    if (childAtOffset && childAtOffset.tagName == "BR") {
      domSelection.addRange(domSelection.getRangeAt(0));
    }
  }
  function filterOutFakeSelectionContainer(domChildList, fakeSelectionContainer) {
    const childList = Array.from(domChildList);
    if (childList.length == 0 || !fakeSelectionContainer) {
      return childList;
    }
    const last3 = childList[childList.length - 1];
    if (last3 == fakeSelectionContainer) {
      childList.pop();
    }
    return childList;
  }
  function createFakeSelectionContainer(domDocument) {
    const container = domDocument.createElement("div");
    container.className = "ck-fake-selection-container";
    Object.assign(container.style, {
      position: "fixed",
      top: 0,
      left: "-9999px",
      width: "42px"
    });
    container.textContent = "\xA0";
    return container;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/global.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var global_default = {window, document};

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/indexof.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function indexOf(node12) {
    let index = 0;
    while (node12.previousSibling) {
      node12 = node12.previousSibling;
      index++;
    }
    return index;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/getancestors.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function getAncestors(node12) {
    const nodes = [];
    while (node12 && node12.nodeType != Node.DOCUMENT_NODE) {
      nodes.unshift(node12);
      node12 = node12.parentNode;
    }
    return nodes;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/getcommonancestor.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function getCommonAncestor(nodeA, nodeB) {
    const ancestorsA = getAncestors(nodeA);
    const ancestorsB = getAncestors(nodeB);
    let i = 0;
    while (ancestorsA[i] == ancestorsB[i] && ancestorsA[i]) {
      i++;
    }
    return i === 0 ? null : ancestorsA[i - 1];
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/domconverter.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var BR_FILLER_REF = BR_FILLER(document);
  var DomConverter = class {
    constructor(document5, options = {}) {
      this.document = document5;
      this.blockFillerMode = options.blockFillerMode || "br";
      this.preElements = ["pre"];
      this.blockElements = ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "dd", "dt", "figcaption", "td", "th"];
      this._blockFiller = this.blockFillerMode == "br" ? BR_FILLER : NBSP_FILLER;
      this._domToViewMapping = new WeakMap();
      this._viewToDomMapping = new WeakMap();
      this._fakeSelectionMapping = new WeakMap();
      this._rawContentElementMatcher = new matcher_default();
      this._encounteredRawContentDomNodes = new WeakSet();
    }
    bindFakeSelection(domElement, viewDocumentSelection) {
      this._fakeSelectionMapping.set(domElement, new selection_default(viewDocumentSelection));
    }
    fakeSelectionToView(domElement) {
      return this._fakeSelectionMapping.get(domElement);
    }
    bindElements(domElement, viewElement) {
      this._domToViewMapping.set(domElement, viewElement);
      this._viewToDomMapping.set(viewElement, domElement);
    }
    unbindDomElement(domElement) {
      const viewElement = this._domToViewMapping.get(domElement);
      if (viewElement) {
        this._domToViewMapping.delete(domElement);
        this._viewToDomMapping.delete(viewElement);
        for (const child of domElement.childNodes) {
          this.unbindDomElement(child);
        }
      }
    }
    bindDocumentFragments(domFragment, viewFragment) {
      this._domToViewMapping.set(domFragment, viewFragment);
      this._viewToDomMapping.set(viewFragment, domFragment);
    }
    viewToDom(viewNode, domDocument, options = {}) {
      if (viewNode.is("$text")) {
        const textData = this._processDataFromViewText(viewNode);
        return domDocument.createTextNode(textData);
      } else {
        if (this.mapViewToDom(viewNode)) {
          return this.mapViewToDom(viewNode);
        }
        let domElement;
        if (viewNode.is("documentFragment")) {
          domElement = domDocument.createDocumentFragment();
          if (options.bind) {
            this.bindDocumentFragments(domElement, viewNode);
          }
        } else if (viewNode.is("uiElement")) {
          domElement = viewNode.render(domDocument);
          if (options.bind) {
            this.bindElements(domElement, viewNode);
          }
          return domElement;
        } else {
          if (viewNode.hasAttribute("xmlns")) {
            domElement = domDocument.createElementNS(viewNode.getAttribute("xmlns"), viewNode.name);
          } else {
            domElement = domDocument.createElement(viewNode.name);
          }
          if (viewNode.is("rawElement")) {
            viewNode.render(domElement);
          }
          if (options.bind) {
            this.bindElements(domElement, viewNode);
          }
          for (const key of viewNode.getAttributeKeys()) {
            domElement.setAttribute(key, viewNode.getAttribute(key));
          }
        }
        if (options.withChildren !== false) {
          for (const child of this.viewChildrenToDom(viewNode, domDocument, options)) {
            domElement.appendChild(child);
          }
        }
        return domElement;
      }
    }
    *viewChildrenToDom(viewElement, domDocument, options = {}) {
      const fillerPositionOffset = viewElement.getFillerOffset && viewElement.getFillerOffset();
      let offset = 0;
      for (const childView of viewElement.getChildren()) {
        if (fillerPositionOffset === offset) {
          yield this._blockFiller(domDocument);
        }
        yield this.viewToDom(childView, domDocument, options);
        offset++;
      }
      if (fillerPositionOffset === offset) {
        yield this._blockFiller(domDocument);
      }
    }
    viewRangeToDom(viewRange) {
      const domStart = this.viewPositionToDom(viewRange.start);
      const domEnd = this.viewPositionToDom(viewRange.end);
      const domRange = document.createRange();
      domRange.setStart(domStart.parent, domStart.offset);
      domRange.setEnd(domEnd.parent, domEnd.offset);
      return domRange;
    }
    viewPositionToDom(viewPosition) {
      const viewParent = viewPosition.parent;
      if (viewParent.is("$text")) {
        const domParent = this.findCorrespondingDomText(viewParent);
        if (!domParent) {
          return null;
        }
        let offset = viewPosition.offset;
        if (startsWithFiller(domParent)) {
          offset += INLINE_FILLER_LENGTH;
        }
        return {parent: domParent, offset};
      } else {
        let domParent, domBefore, domAfter;
        if (viewPosition.offset === 0) {
          domParent = this.mapViewToDom(viewParent);
          if (!domParent) {
            return null;
          }
          domAfter = domParent.childNodes[0];
        } else {
          const nodeBefore = viewPosition.nodeBefore;
          domBefore = nodeBefore.is("$text") ? this.findCorrespondingDomText(nodeBefore) : this.mapViewToDom(viewPosition.nodeBefore);
          if (!domBefore) {
            return null;
          }
          domParent = domBefore.parentNode;
          domAfter = domBefore.nextSibling;
        }
        if (isText(domAfter) && startsWithFiller(domAfter)) {
          return {parent: domAfter, offset: INLINE_FILLER_LENGTH};
        }
        const offset = domBefore ? indexOf(domBefore) + 1 : 0;
        return {parent: domParent, offset};
      }
    }
    domToView(domNode, options = {}) {
      if (this.isBlockFiller(domNode, this.blockFillerMode)) {
        return null;
      }
      const hostElement = this.getHostViewElement(domNode);
      if (hostElement) {
        return hostElement;
      }
      if (isText(domNode)) {
        if (isInlineFiller(domNode)) {
          return null;
        } else {
          const textData = this._processDataFromDomText(domNode);
          return textData === "" ? null : new text_default(this.document, textData);
        }
      } else if (this.isComment(domNode)) {
        return null;
      } else {
        if (this.mapDomToView(domNode)) {
          return this.mapDomToView(domNode);
        }
        let viewElement;
        if (this.isDocumentFragment(domNode)) {
          viewElement = new documentfragment_default(this.document);
          if (options.bind) {
            this.bindDocumentFragments(domNode, viewElement);
          }
        } else {
          const viewName = options.keepOriginalCase ? domNode.tagName : domNode.tagName.toLowerCase();
          viewElement = new element_default(this.document, viewName);
          if (options.bind) {
            this.bindElements(domNode, viewElement);
          }
          const attrs = domNode.attributes;
          for (let i = attrs.length - 1; i >= 0; i--) {
            viewElement._setAttribute(attrs[i].name, attrs[i].value);
          }
          if (options.withChildren !== false && this._rawContentElementMatcher.match(viewElement)) {
            viewElement._setCustomProperty("$rawContent", domNode.innerHTML);
            this._encounteredRawContentDomNodes.add(domNode);
            return viewElement;
          }
        }
        if (options.withChildren !== false) {
          for (const child of this.domChildrenToView(domNode, options)) {
            viewElement._appendChild(child);
          }
        }
        return viewElement;
      }
    }
    *domChildrenToView(domElement, options = {}) {
      for (let i = 0; i < domElement.childNodes.length; i++) {
        const domChild = domElement.childNodes[i];
        const viewChild = this.domToView(domChild, options);
        if (viewChild !== null) {
          yield viewChild;
        }
      }
    }
    domSelectionToView(domSelection) {
      if (domSelection.rangeCount === 1) {
        let container = domSelection.getRangeAt(0).startContainer;
        if (isText(container)) {
          container = container.parentNode;
        }
        const viewSelection = this.fakeSelectionToView(container);
        if (viewSelection) {
          return viewSelection;
        }
      }
      const isBackward = this.isDomSelectionBackward(domSelection);
      const viewRanges = [];
      for (let i = 0; i < domSelection.rangeCount; i++) {
        const domRange = domSelection.getRangeAt(i);
        const viewRange = this.domRangeToView(domRange);
        if (viewRange) {
          viewRanges.push(viewRange);
        }
      }
      return new selection_default(viewRanges, {backward: isBackward});
    }
    domRangeToView(domRange) {
      const viewStart = this.domPositionToView(domRange.startContainer, domRange.startOffset);
      const viewEnd = this.domPositionToView(domRange.endContainer, domRange.endOffset);
      if (viewStart && viewEnd) {
        return new range_default(viewStart, viewEnd);
      }
      return null;
    }
    domPositionToView(domParent, domOffset) {
      if (this.isBlockFiller(domParent, this.blockFillerMode)) {
        return this.domPositionToView(domParent.parentNode, indexOf(domParent));
      }
      const viewElement = this.mapDomToView(domParent);
      if (viewElement && (viewElement.is("uiElement") || viewElement.is("rawElement"))) {
        return position_default._createBefore(viewElement);
      }
      if (isText(domParent)) {
        if (isInlineFiller(domParent)) {
          return this.domPositionToView(domParent.parentNode, indexOf(domParent));
        }
        const viewParent = this.findCorrespondingViewText(domParent);
        let offset = domOffset;
        if (!viewParent) {
          return null;
        }
        if (startsWithFiller(domParent)) {
          offset -= INLINE_FILLER_LENGTH;
          offset = offset < 0 ? 0 : offset;
        }
        return new position_default(viewParent, offset);
      } else {
        if (domOffset === 0) {
          const viewParent = this.mapDomToView(domParent);
          if (viewParent) {
            return new position_default(viewParent, 0);
          }
        } else {
          const domBefore = domParent.childNodes[domOffset - 1];
          const viewBefore = isText(domBefore) ? this.findCorrespondingViewText(domBefore) : this.mapDomToView(domBefore);
          if (viewBefore && viewBefore.parent) {
            return new position_default(viewBefore.parent, viewBefore.index + 1);
          }
        }
        return null;
      }
    }
    mapDomToView(domElementOrDocumentFragment) {
      const hostElement = this.getHostViewElement(domElementOrDocumentFragment);
      return hostElement || this._domToViewMapping.get(domElementOrDocumentFragment);
    }
    findCorrespondingViewText(domText) {
      if (isInlineFiller(domText)) {
        return null;
      }
      const hostElement = this.getHostViewElement(domText);
      if (hostElement) {
        return hostElement;
      }
      const previousSibling = domText.previousSibling;
      if (previousSibling) {
        if (!this.isElement(previousSibling)) {
          return null;
        }
        const viewElement = this.mapDomToView(previousSibling);
        if (viewElement) {
          const nextSibling = viewElement.nextSibling;
          if (nextSibling instanceof text_default) {
            return viewElement.nextSibling;
          } else {
            return null;
          }
        }
      } else {
        const viewElement = this.mapDomToView(domText.parentNode);
        if (viewElement) {
          const firstChild = viewElement.getChild(0);
          if (firstChild instanceof text_default) {
            return firstChild;
          } else {
            return null;
          }
        }
      }
      return null;
    }
    mapViewToDom(documentFragmentOrElement) {
      return this._viewToDomMapping.get(documentFragmentOrElement);
    }
    findCorrespondingDomText(viewText) {
      const previousSibling = viewText.previousSibling;
      if (previousSibling && this.mapViewToDom(previousSibling)) {
        return this.mapViewToDom(previousSibling).nextSibling;
      }
      if (!previousSibling && viewText.parent && this.mapViewToDom(viewText.parent)) {
        return this.mapViewToDom(viewText.parent).childNodes[0];
      }
      return null;
    }
    focus(viewEditable) {
      const domEditable = this.mapViewToDom(viewEditable);
      if (domEditable && domEditable.ownerDocument.activeElement !== domEditable) {
        const {scrollX, scrollY} = global_default.window;
        const scrollPositions = [];
        forEachDomNodeAncestor(domEditable, (node12) => {
          const {scrollLeft, scrollTop} = node12;
          scrollPositions.push([scrollLeft, scrollTop]);
        });
        domEditable.focus();
        forEachDomNodeAncestor(domEditable, (node12) => {
          const [scrollLeft, scrollTop] = scrollPositions.shift();
          node12.scrollLeft = scrollLeft;
          node12.scrollTop = scrollTop;
        });
        global_default.window.scrollTo(scrollX, scrollY);
      }
    }
    isElement(node12) {
      return node12 && node12.nodeType == Node.ELEMENT_NODE;
    }
    isDocumentFragment(node12) {
      return node12 && node12.nodeType == Node.DOCUMENT_FRAGMENT_NODE;
    }
    isComment(node12) {
      return node12 && node12.nodeType == Node.COMMENT_NODE;
    }
    isBlockFiller(domNode) {
      if (this.blockFillerMode == "br") {
        return domNode.isEqualNode(BR_FILLER_REF);
      }
      if (domNode.tagName === "BR" && hasBlockParent(domNode, this.blockElements) && domNode.parentNode.childNodes.length === 1) {
        return true;
      }
      return isNbspBlockFiller(domNode, this.blockElements);
    }
    isDomSelectionBackward(selection11) {
      if (selection11.isCollapsed) {
        return false;
      }
      const range29 = document.createRange();
      range29.setStart(selection11.anchorNode, selection11.anchorOffset);
      range29.setEnd(selection11.focusNode, selection11.focusOffset);
      const backward = range29.collapsed;
      range29.detach();
      return backward;
    }
    getHostViewElement(domNode) {
      const ancestors = getAncestors(domNode);
      ancestors.pop();
      while (ancestors.length) {
        const domNode2 = ancestors.pop();
        const viewNode = this._domToViewMapping.get(domNode2);
        if (viewNode && (viewNode.is("uiElement") || viewNode.is("rawElement"))) {
          return viewNode;
        }
      }
      return null;
    }
    isDomSelectionCorrect(domSelection) {
      return this._isDomSelectionPositionCorrect(domSelection.anchorNode, domSelection.anchorOffset) && this._isDomSelectionPositionCorrect(domSelection.focusNode, domSelection.focusOffset);
    }
    registerRawContentMatcher(pattern) {
      this._rawContentElementMatcher.add(pattern);
    }
    _isDomSelectionPositionCorrect(domParent, offset) {
      if (isText(domParent) && startsWithFiller(domParent) && offset < INLINE_FILLER_LENGTH) {
        return false;
      }
      if (this.isElement(domParent) && startsWithFiller(domParent.childNodes[offset])) {
        return false;
      }
      const viewParent = this.mapDomToView(domParent);
      if (viewParent && (viewParent.is("uiElement") || viewParent.is("rawElement"))) {
        return false;
      }
      return true;
    }
    _processDataFromViewText(node12) {
      let data = node12.data;
      if (node12.getAncestors().some((parent3) => this.preElements.includes(parent3.name))) {
        return data;
      }
      if (data.charAt(0) == " ") {
        const prevNode = this._getTouchingViewTextNode(node12, false);
        const prevEndsWithSpace = prevNode && this._nodeEndsWithSpace(prevNode);
        if (prevEndsWithSpace || !prevNode) {
          data = "\xA0" + data.substr(1);
        }
      }
      if (data.charAt(data.length - 1) == " ") {
        const nextNode = this._getTouchingViewTextNode(node12, true);
        if (data.charAt(data.length - 2) == " " || !nextNode || nextNode.data.charAt(0) == " ") {
          data = data.substr(0, data.length - 1) + "\xA0";
        }
      }
      return data.replace(/ {2}/g, " \xA0");
    }
    _nodeEndsWithSpace(node12) {
      if (node12.getAncestors().some((parent3) => this.preElements.includes(parent3.name))) {
        return false;
      }
      const data = this._processDataFromViewText(node12);
      return data.charAt(data.length - 1) == " ";
    }
    _processDataFromDomText(node12) {
      let data = node12.data;
      if (_hasDomParentOfType(node12, this.preElements)) {
        return getDataWithoutFiller(node12);
      }
      data = data.replace(/[ \n\t\r]{1,}/g, " ");
      const prevNode = this._getTouchingInlineDomNode(node12, false);
      const nextNode = this._getTouchingInlineDomNode(node12, true);
      const shouldLeftTrim = this._checkShouldLeftTrimDomText(node12, prevNode);
      const shouldRightTrim = this._checkShouldRightTrimDomText(node12, nextNode);
      if (shouldLeftTrim) {
        data = data.replace(/^ /, "");
      }
      if (shouldRightTrim) {
        data = data.replace(/ $/, "");
      }
      data = getDataWithoutFiller(new Text(data));
      data = data.replace(/ \u00A0/g, "  ");
      if (/( |\u00A0)\u00A0$/.test(data) || !nextNode || nextNode.data && nextNode.data.charAt(0) == " ") {
        data = data.replace(/\u00A0$/, " ");
      }
      if (shouldLeftTrim) {
        data = data.replace(/^\u00A0/, " ");
      }
      return data;
    }
    _checkShouldLeftTrimDomText(node12, prevNode) {
      if (!prevNode) {
        return true;
      }
      if (isElement_default(prevNode)) {
        return true;
      }
      if (this._encounteredRawContentDomNodes.has(node12.previousSibling)) {
        return false;
      }
      return /[^\S\u00A0]/.test(prevNode.data.charAt(prevNode.data.length - 1));
    }
    _checkShouldRightTrimDomText(node12, nextNode) {
      if (nextNode) {
        return false;
      }
      return !startsWithFiller(node12);
    }
    _getTouchingViewTextNode(node12, getNext) {
      const treeWalker = new treewalker_default({
        startPosition: getNext ? position_default._createAfter(node12) : position_default._createBefore(node12),
        direction: getNext ? "forward" : "backward"
      });
      for (const value of treeWalker) {
        if (value.item.is("containerElement")) {
          return null;
        } else if (value.item.is("element", "br")) {
          return null;
        } else if (value.item.is("$textProxy")) {
          return value.item;
        }
      }
      return null;
    }
    _getTouchingInlineDomNode(node12, getNext) {
      if (!node12.parentNode) {
        return null;
      }
      const direction = getNext ? "nextNode" : "previousNode";
      const document5 = node12.ownerDocument;
      const topmostParent = getAncestors(node12)[0];
      const treeWalker = document5.createTreeWalker(topmostParent, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
        acceptNode(node13) {
          if (isText(node13)) {
            return NodeFilter.FILTER_ACCEPT;
          }
          if (node13.tagName == "BR") {
            return NodeFilter.FILTER_ACCEPT;
          }
          return NodeFilter.FILTER_SKIP;
        }
      });
      treeWalker.currentNode = node12;
      const touchingNode = treeWalker[direction]();
      if (touchingNode !== null) {
        const lca = getCommonAncestor(node12, touchingNode);
        if (lca && !_hasDomParentOfType(node12, this.blockElements, lca) && !_hasDomParentOfType(touchingNode, this.blockElements, lca)) {
          return touchingNode;
        }
      }
      return null;
    }
  };
  var domconverter_default = DomConverter;
  function _hasDomParentOfType(node12, types, boundaryParent) {
    let parents = getAncestors(node12);
    if (boundaryParent) {
      parents = parents.slice(parents.indexOf(boundaryParent) + 1);
    }
    return parents.some((parent3) => parent3.tagName && types.includes(parent3.tagName.toLowerCase()));
  }
  function forEachDomNodeAncestor(node12, callback) {
    while (node12 && node12 != global_default.document) {
      callback(node12);
      node12 = node12.parentNode;
    }
  }
  function isNbspBlockFiller(domNode, blockElements) {
    const isNBSP = isText(domNode) && domNode.data == "\xA0";
    return isNBSP && hasBlockParent(domNode, blockElements) && domNode.parentNode.childNodes.length === 1;
  }
  function hasBlockParent(domNode, blockElements) {
    const parent3 = domNode.parentNode;
    return parent3 && parent3.tagName && blockElements.includes(parent3.tagName.toLowerCase());
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/iswindow.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function isWindow(obj) {
    const stringifiedObject = Object.prototype.toString.apply(obj);
    if (stringifiedObject == "[object Window]") {
      return true;
    }
    if (stringifiedObject == "[object global]") {
      return true;
    }
    return false;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/emittermixin.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DomEmitterMixin = assignIn_default({}, emittermixin_default, {
    listenTo(emitter, ...rest) {
      if (isNode(emitter) || isWindow(emitter)) {
        const proxy = this._getProxyEmitter(emitter) || new ProxyEmitter(emitter);
        proxy.attach(...rest);
        emitter = proxy;
      }
      emittermixin_default.listenTo.call(this, emitter, ...rest);
    },
    stopListening(emitter, event, callback) {
      if (isNode(emitter) || isWindow(emitter)) {
        const proxy = this._getProxyEmitter(emitter);
        if (!proxy) {
          return;
        }
        emitter = proxy;
      }
      emittermixin_default.stopListening.call(this, emitter, event, callback);
      if (emitter instanceof ProxyEmitter) {
        emitter.detach(event);
      }
    },
    _getProxyEmitter(node12) {
      return _getEmitterListenedTo(this, getNodeUID(node12));
    }
  });
  var emittermixin_default2 = DomEmitterMixin;
  var ProxyEmitter = class {
    constructor(node12) {
      _setEmitterId(this, getNodeUID(node12));
      this._domNode = node12;
    }
  };
  assignIn_default(ProxyEmitter.prototype, emittermixin_default, {
    attach(event, callback, options = {}) {
      if (this._domListeners && this._domListeners[event]) {
        return;
      }
      const listenerOptions = {
        capture: !!options.useCapture,
        passive: !!options.usePassive
      };
      const domListener = this._createDomListener(event, listenerOptions);
      this._domNode.addEventListener(event, domListener, listenerOptions);
      if (!this._domListeners) {
        this._domListeners = {};
      }
      this._domListeners[event] = domListener;
    },
    detach(event) {
      let events;
      if (this._domListeners[event] && (!(events = this._events[event]) || !events.callbacks.length)) {
        this._domListeners[event].removeListener();
      }
    },
    _createDomListener(event, options) {
      const domListener = (domEvt) => {
        this.fire(event, domEvt);
      };
      domListener.removeListener = () => {
        this._domNode.removeEventListener(event, domListener, options);
        delete this._domListeners[event];
      };
      return domListener;
    }
  });
  function getNodeUID(node12) {
    return node12["data-ck-expando"] || (node12["data-ck-expando"] = uid());
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/observer.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Observer = class {
    constructor(view19) {
      this.view = view19;
      this.document = view19.document;
      this.isEnabled = false;
    }
    enable() {
      this.isEnabled = true;
    }
    disable() {
      this.isEnabled = false;
    }
    destroy() {
      this.disable();
      this.stopListening();
    }
    checkShouldIgnoreEventFromTarget(domTarget) {
      if (domTarget && domTarget.nodeType === 3) {
        domTarget = domTarget.parentNode;
      }
      if (!domTarget || domTarget.nodeType !== 1) {
        return false;
      }
      return domTarget.matches("[data-cke-ignore-events], [data-cke-ignore-events] *");
    }
  };
  var observer_default = Observer;
  mix(Observer, emittermixin_default2);

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/mutationobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var MutationObserver = class extends observer_default {
    constructor(view19) {
      super(view19);
      this._config = {
        childList: true,
        characterData: true,
        characterDataOldValue: true,
        subtree: true
      };
      this.domConverter = view19.domConverter;
      this.renderer = view19._renderer;
      this._domElements = [];
      this._mutationObserver = new window.MutationObserver(this._onMutations.bind(this));
    }
    flush() {
      this._onMutations(this._mutationObserver.takeRecords());
    }
    observe(domElement) {
      this._domElements.push(domElement);
      if (this.isEnabled) {
        this._mutationObserver.observe(domElement, this._config);
      }
    }
    enable() {
      super.enable();
      for (const domElement of this._domElements) {
        this._mutationObserver.observe(domElement, this._config);
      }
    }
    disable() {
      super.disable();
      this._mutationObserver.disconnect();
    }
    destroy() {
      super.destroy();
      this._mutationObserver.disconnect();
    }
    _onMutations(domMutations) {
      if (domMutations.length === 0) {
        return;
      }
      const domConverter = this.domConverter;
      const mutatedTexts = new Map();
      const mutatedElements = new Set();
      for (const mutation of domMutations) {
        if (mutation.type === "childList") {
          const element18 = domConverter.mapDomToView(mutation.target);
          if (element18 && (element18.is("uiElement") || element18.is("rawElement"))) {
            continue;
          }
          if (element18 && !this._isBogusBrMutation(mutation)) {
            mutatedElements.add(element18);
          }
        }
      }
      for (const mutation of domMutations) {
        const element18 = domConverter.mapDomToView(mutation.target);
        if (element18 && (element18.is("uiElement") || element18.is("rawElement"))) {
          continue;
        }
        if (mutation.type === "characterData") {
          const text16 = domConverter.findCorrespondingViewText(mutation.target);
          if (text16 && !mutatedElements.has(text16.parent)) {
            mutatedTexts.set(text16, {
              type: "text",
              oldText: text16.data,
              newText: getDataWithoutFiller(mutation.target),
              node: text16
            });
          } else if (!text16 && startsWithFiller(mutation.target)) {
            mutatedElements.add(domConverter.mapDomToView(mutation.target.parentNode));
          }
        }
      }
      const viewMutations = [];
      for (const mutatedText of mutatedTexts.values()) {
        this.renderer.markToSync("text", mutatedText.node);
        viewMutations.push(mutatedText);
      }
      for (const viewElement of mutatedElements) {
        const domElement = domConverter.mapViewToDom(viewElement);
        const viewChildren = Array.from(viewElement.getChildren());
        const newViewChildren = Array.from(domConverter.domChildrenToView(domElement, {withChildren: false}));
        if (!isEqualWith_default(viewChildren, newViewChildren, sameNodes2)) {
          this.renderer.markToSync("children", viewElement);
          viewMutations.push({
            type: "children",
            oldChildren: viewChildren,
            newChildren: newViewChildren,
            node: viewElement
          });
        }
      }
      const domSelection = domMutations[0].target.ownerDocument.getSelection();
      let viewSelection = null;
      if (domSelection && domSelection.anchorNode) {
        const viewSelectionAnchor = domConverter.domPositionToView(domSelection.anchorNode, domSelection.anchorOffset);
        const viewSelectionFocus = domConverter.domPositionToView(domSelection.focusNode, domSelection.focusOffset);
        if (viewSelectionAnchor && viewSelectionFocus) {
          viewSelection = new selection_default(viewSelectionAnchor);
          viewSelection.setFocus(viewSelectionFocus);
        }
      }
      if (viewMutations.length) {
        this.document.fire("mutations", viewMutations, viewSelection);
        this.view.forceRender();
      }
      function sameNodes2(child1, child2) {
        if (Array.isArray(child1)) {
          return;
        }
        if (child1 === child2) {
          return true;
        } else if (child1.is("$text") && child2.is("$text")) {
          return child1.data === child2.data;
        }
        return false;
      }
    }
    _isBogusBrMutation(mutation) {
      let addedNode = null;
      if (mutation.nextSibling === null && mutation.removedNodes.length === 0 && mutation.addedNodes.length == 1) {
        addedNode = this.domConverter.domToView(mutation.addedNodes[0], {
          withChildren: false
        });
      }
      return addedNode && addedNode.is("element", "br");
    }
  };
  var mutationobserver_default = MutationObserver;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/domeventdata.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DomEventData = class {
    constructor(view19, domEvent, additionalData) {
      this.view = view19;
      this.document = view19.document;
      this.domEvent = domEvent;
      this.domTarget = domEvent.target;
      assignIn_default(this, additionalData);
    }
    get target() {
      return this.view.domConverter.mapDomToView(this.domTarget);
    }
    preventDefault() {
      this.domEvent.preventDefault();
    }
    stopPropagation() {
      this.domEvent.stopPropagation();
    }
  };
  var domeventdata_default = DomEventData;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/domeventobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DomEventObserver = class extends observer_default {
    constructor(view19) {
      super(view19);
      this.useCapture = false;
    }
    observe(domElement) {
      const types = typeof this.domEventType == "string" ? [this.domEventType] : this.domEventType;
      types.forEach((type) => {
        this.listenTo(domElement, type, (eventInfo, domEvent) => {
          if (this.isEnabled && !this.checkShouldIgnoreEventFromTarget(domEvent.target)) {
            this.onDomEvent(domEvent);
          }
        }, {useCapture: this.useCapture});
      });
    }
    fire(eventType, domEvent, additionalData) {
      if (this.isEnabled) {
        this.document.fire(eventType, new domeventdata_default(this.view, domEvent, additionalData));
      }
    }
  };
  var domeventobserver_default = DomEventObserver;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/keyobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var KeyObserver = class extends domeventobserver_default {
    constructor(view19) {
      super(view19);
      this.domEventType = ["keydown", "keyup"];
    }
    onDomEvent(domEvt) {
      this.fire(domEvt.type, domEvt, {
        keyCode: domEvt.keyCode,
        altKey: domEvt.altKey,
        ctrlKey: domEvt.ctrlKey || domEvt.metaKey,
        shiftKey: domEvt.shiftKey,
        get keystroke() {
          return getCode(this);
        }
      });
    }
  };
  var keyobserver_default = KeyObserver;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/fakeselectionobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var FakeSelectionObserver = class extends observer_default {
    constructor(view19) {
      super(view19);
      this._fireSelectionChangeDoneDebounced = debounce_default((data) => this.document.fire("selectionChangeDone", data), 200);
    }
    observe() {
      const document5 = this.document;
      document5.on("keydown", (eventInfo, data) => {
        const selection11 = document5.selection;
        if (selection11.isFake && isArrowKeyCode(data.keyCode) && this.isEnabled) {
          data.preventDefault();
          this._handleSelectionMove(data.keyCode);
        }
      }, {priority: "lowest"});
    }
    destroy() {
      super.destroy();
      this._fireSelectionChangeDoneDebounced.cancel();
    }
    _handleSelectionMove(keyCode) {
      const selection11 = this.document.selection;
      const newSelection = new selection_default(selection11.getRanges(), {backward: selection11.isBackward, fake: false});
      if (keyCode == keyCodes.arrowleft || keyCode == keyCodes.arrowup) {
        newSelection.setTo(newSelection.getFirstPosition());
      }
      if (keyCode == keyCodes.arrowright || keyCode == keyCodes.arrowdown) {
        newSelection.setTo(newSelection.getLastPosition());
      }
      const data = {
        oldSelection: selection11,
        newSelection,
        domSelection: null
      };
      this.document.fire("selectionChange", data);
      this._fireSelectionChangeDoneDebounced(data);
    }
  };
  var fakeselectionobserver_default = FakeSelectionObserver;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/selectionobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var SelectionObserver = class extends observer_default {
    constructor(view19) {
      super(view19);
      this.mutationObserver = view19.getObserver(mutationobserver_default);
      this.selection = this.document.selection;
      this.domConverter = view19.domConverter;
      this._documents = new WeakSet();
      this._fireSelectionChangeDoneDebounced = debounce_default((data) => this.document.fire("selectionChangeDone", data), 200);
      this._clearInfiniteLoopInterval = setInterval(() => this._clearInfiniteLoop(), 1e3);
      this._loopbackCounter = 0;
    }
    observe(domElement) {
      const domDocument = domElement.ownerDocument;
      if (this._documents.has(domDocument)) {
        return;
      }
      this.listenTo(domDocument, "selectionchange", (evt, domEvent) => {
        this._handleSelectionChange(domEvent, domDocument);
      });
      this._documents.add(domDocument);
    }
    destroy() {
      super.destroy();
      clearInterval(this._clearInfiniteLoopInterval);
      this._fireSelectionChangeDoneDebounced.cancel();
    }
    _handleSelectionChange(domEvent, domDocument) {
      if (!this.isEnabled) {
        return;
      }
      const domSelection = domDocument.defaultView.getSelection();
      if (this.checkShouldIgnoreEventFromTarget(domSelection.anchorNode)) {
        return;
      }
      this.mutationObserver.flush();
      const newViewSelection = this.domConverter.domSelectionToView(domSelection);
      if (newViewSelection.rangeCount == 0) {
        this.view.hasDomSelection = false;
        return;
      }
      this.view.hasDomSelection = true;
      if (this.selection.isEqual(newViewSelection) && this.domConverter.isDomSelectionCorrect(domSelection)) {
        return;
      }
      if (++this._loopbackCounter > 60) {
        return;
      }
      if (this.selection.isSimilar(newViewSelection)) {
        this.view.forceRender();
      } else {
        const data = {
          oldSelection: this.selection,
          newSelection: newViewSelection,
          domSelection
        };
        this.document.fire("selectionChange", data);
        this._fireSelectionChangeDoneDebounced(data);
      }
    }
    _clearInfiniteLoop() {
      this._loopbackCounter = 0;
    }
  };
  var selectionobserver_default = SelectionObserver;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/focusobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var FocusObserver = class extends domeventobserver_default {
    constructor(view19) {
      super(view19);
      this.domEventType = ["focus", "blur"];
      this.useCapture = true;
      const document5 = this.document;
      document5.on("focus", () => {
        document5.isFocused = true;
        this._renderTimeoutId = setTimeout(() => view19.forceRender(), 50);
      });
      document5.on("blur", (evt, data) => {
        const selectedEditable = document5.selection.editableElement;
        if (selectedEditable === null || selectedEditable === data.target) {
          document5.isFocused = false;
          view19.forceRender();
        }
      });
    }
    onDomEvent(domEvent) {
      this.fire(domEvent.type, domEvent);
    }
    destroy() {
      if (this._renderTimeoutId) {
        clearTimeout(this._renderTimeoutId);
      }
      super.destroy();
    }
  };
  var focusobserver_default = FocusObserver;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/compositionobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var CompositionObserver = class extends domeventobserver_default {
    constructor(view19) {
      super(view19);
      this.domEventType = ["compositionstart", "compositionupdate", "compositionend"];
      const document5 = this.document;
      document5.on("compositionstart", () => {
        document5.isComposing = true;
      });
      document5.on("compositionend", () => {
        document5.isComposing = false;
      });
    }
    onDomEvent(domEvent) {
      this.fire(domEvent.type, domEvent);
    }
  };
  var compositionobserver_default = CompositionObserver;

  // node_modules/@ckeditor/ckeditor5-engine/src/view/observer/inputobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md.
   */
  var InputObserver = class extends domeventobserver_default {
    constructor(view19) {
      super(view19);
      this.domEventType = ["beforeinput"];
    }
    onDomEvent(domEvent) {
      this.fire(domEvent.type, domEvent);
    }
  };
  var inputobserver_default = InputObserver;

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/isrange.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function isRange(obj) {
    return Object.prototype.toString.apply(obj) == "[object Range]";
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/getborderwidths.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function getBorderWidths(element18) {
    const style = element18.ownerDocument.defaultView.getComputedStyle(element18);
    return {
      top: parseInt(style.borderTopWidth, 10),
      right: parseInt(style.borderRightWidth, 10),
      bottom: parseInt(style.borderBottomWidth, 10),
      left: parseInt(style.borderLeftWidth, 10)
    };
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/rect.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var rectProperties = ["top", "right", "bottom", "left", "width", "height"];
  var Rect = class {
    constructor(source) {
      const isSourceRange = isRange(source);
      Object.defineProperty(this, "_source", {
        value: source._source || source,
        writable: true,
        enumerable: false
      });
      if (isElement_default(source) || isSourceRange) {
        if (isSourceRange) {
          const rangeRects = Rect.getDomRangeRects(source);
          copyRectProperties(this, Rect.getBoundingRect(rangeRects));
        } else {
          copyRectProperties(this, source.getBoundingClientRect());
        }
      } else if (isWindow(source)) {
        const {innerWidth, innerHeight} = source;
        copyRectProperties(this, {
          top: 0,
          right: innerWidth,
          bottom: innerHeight,
          left: 0,
          width: innerWidth,
          height: innerHeight
        });
      } else {
        copyRectProperties(this, source);
      }
    }
    clone() {
      return new Rect(this);
    }
    moveTo(x, y) {
      this.top = y;
      this.right = x + this.width;
      this.bottom = y + this.height;
      this.left = x;
      return this;
    }
    moveBy(x, y) {
      this.top += y;
      this.right += x;
      this.left += x;
      this.bottom += y;
      return this;
    }
    getIntersection(anotherRect) {
      const rect5 = {
        top: Math.max(this.top, anotherRect.top),
        right: Math.min(this.right, anotherRect.right),
        bottom: Math.min(this.bottom, anotherRect.bottom),
        left: Math.max(this.left, anotherRect.left)
      };
      rect5.width = rect5.right - rect5.left;
      rect5.height = rect5.bottom - rect5.top;
      if (rect5.width < 0 || rect5.height < 0) {
        return null;
      } else {
        return new Rect(rect5);
      }
    }
    getIntersectionArea(anotherRect) {
      const rect5 = this.getIntersection(anotherRect);
      if (rect5) {
        return rect5.getArea();
      } else {
        return 0;
      }
    }
    getArea() {
      return this.width * this.height;
    }
    getVisible() {
      const source = this._source;
      let visibleRect = this.clone();
      if (!isBody(source)) {
        let parent3 = source.parentNode || source.commonAncestorContainer;
        while (parent3 && !isBody(parent3)) {
          const parentRect = new Rect(parent3);
          const intersectionRect = visibleRect.getIntersection(parentRect);
          if (intersectionRect) {
            if (intersectionRect.getArea() < visibleRect.getArea()) {
              visibleRect = intersectionRect;
            }
          } else {
            return null;
          }
          parent3 = parent3.parentNode;
        }
      }
      return visibleRect;
    }
    isEqual(anotherRect) {
      for (const prop of rectProperties) {
        if (this[prop] !== anotherRect[prop]) {
          return false;
        }
      }
      return true;
    }
    contains(anotherRect) {
      const intersectRect = this.getIntersection(anotherRect);
      return !!(intersectRect && intersectRect.isEqual(anotherRect));
    }
    excludeScrollbarsAndBorders() {
      const source = this._source;
      let scrollBarWidth, scrollBarHeight, direction;
      if (isWindow(source)) {
        scrollBarWidth = source.innerWidth - source.document.documentElement.clientWidth;
        scrollBarHeight = source.innerHeight - source.document.documentElement.clientHeight;
        direction = source.getComputedStyle(source.document.documentElement).direction;
      } else {
        const borderWidths = getBorderWidths(this._source);
        scrollBarWidth = source.offsetWidth - source.clientWidth - borderWidths.left - borderWidths.right;
        scrollBarHeight = source.offsetHeight - source.clientHeight - borderWidths.top - borderWidths.bottom;
        direction = source.ownerDocument.defaultView.getComputedStyle(source).direction;
        this.left += borderWidths.left;
        this.top += borderWidths.top;
        this.right -= borderWidths.right;
        this.bottom -= borderWidths.bottom;
        this.width = this.right - this.left;
        this.height = this.bottom - this.top;
      }
      this.width -= scrollBarWidth;
      if (direction === "ltr") {
        this.right -= scrollBarWidth;
      } else {
        this.left += scrollBarWidth;
      }
      this.height -= scrollBarHeight;
      this.bottom -= scrollBarHeight;
      return this;
    }
    static getDomRangeRects(range29) {
      const rects = [];
      const clientRects = Array.from(range29.getClientRects());
      if (clientRects.length) {
        for (const rect5 of clientRects) {
          rects.push(new Rect(rect5));
        }
      } else {
        let startContainer = range29.startContainer;
        if (isText(startContainer)) {
          startContainer = startContainer.parentNode;
        }
        const rect5 = new Rect(startContainer.getBoundingClientRect());
        rect5.right = rect5.left;
        rect5.width = 0;
        rects.push(rect5);
      }
      return rects;
    }
    static getBoundingRect(rects) {
      const boundingRectData = {
        left: Number.POSITIVE_INFINITY,
        top: Number.POSITIVE_INFINITY,
        right: Number.NEGATIVE_INFINITY,
        bottom: Number.NEGATIVE_INFINITY
      };
      let rectangleCount = 0;
      for (const rect5 of rects) {
        rectangleCount++;
        boundingRectData.left = Math.min(boundingRectData.left, rect5.left);
        boundingRectData.top = Math.min(boundingRectData.top, rect5.top);
        boundingRectData.right = Math.max(boundingRectData.right, rect5.right);
        boundingRectData.bottom = Math.max(boundingRectData.bottom, rect5.bottom);
      }
      if (rectangleCount == 0) {
        return null;
      }
      boundingRectData.width = boundingRectData.right - boundingRectData.left;
      boundingRectData.height = boundingRectData.bottom - boundingRectData.top;
      return new Rect(boundingRectData);
    }
  };
  var rect_default = Rect;
  function copyRectProperties(rect5, source) {
    for (const p of rectProperties) {
      rect5[p] = source[p];
    }
  }
  function isBody(elementOrRange) {
    if (!isElement_default(elementOrRange)) {
      return false;
    }
    return elementOrRange === elementOrRange.ownerDocument.body;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/scroll.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var utils = {};
  function scrollViewportToShowTarget({target, viewportOffset = 0}) {
    const targetWindow = getWindow(target);
    let currentWindow = targetWindow;
    let currentFrame = null;
    while (currentWindow) {
      let firstAncestorToScroll;
      if (currentWindow == targetWindow) {
        firstAncestorToScroll = getParentElement(target);
      } else {
        firstAncestorToScroll = getParentElement(currentFrame);
      }
      scrollAncestorsToShowRect(firstAncestorToScroll, () => {
        return getRectRelativeToWindow(target, currentWindow);
      });
      const targetRect = getRectRelativeToWindow(target, currentWindow);
      scrollWindowToShowRect(currentWindow, targetRect, viewportOffset);
      if (currentWindow.parent != currentWindow) {
        currentFrame = currentWindow.frameElement;
        currentWindow = currentWindow.parent;
        if (!currentFrame) {
          return;
        }
      } else {
        currentWindow = null;
      }
    }
  }
  function scrollAncestorsToShowTarget(target) {
    const targetParent = getParentElement(target);
    scrollAncestorsToShowRect(targetParent, () => {
      return new rect_default(target);
    });
  }
  Object.assign(utils, {
    scrollViewportToShowTarget,
    scrollAncestorsToShowTarget
  });
  function scrollWindowToShowRect(window2, rect5, viewportOffset) {
    const targetShiftedDownRect = rect5.clone().moveBy(0, viewportOffset);
    const targetShiftedUpRect = rect5.clone().moveBy(0, -viewportOffset);
    const viewportRect = new rect_default(window2).excludeScrollbarsAndBorders();
    const rects = [targetShiftedUpRect, targetShiftedDownRect];
    if (!rects.every((rect6) => viewportRect.contains(rect6))) {
      let {scrollX, scrollY} = window2;
      if (isAbove(targetShiftedUpRect, viewportRect)) {
        scrollY -= viewportRect.top - rect5.top + viewportOffset;
      } else if (isBelow(targetShiftedDownRect, viewportRect)) {
        scrollY += rect5.bottom - viewportRect.bottom + viewportOffset;
      }
      if (isLeftOf(rect5, viewportRect)) {
        scrollX -= viewportRect.left - rect5.left + viewportOffset;
      } else if (isRightOf(rect5, viewportRect)) {
        scrollX += rect5.right - viewportRect.right + viewportOffset;
      }
      window2.scrollTo(scrollX, scrollY);
    }
  }
  function scrollAncestorsToShowRect(parent3, getRect) {
    const parentWindow = getWindow(parent3);
    let parentRect, targetRect;
    while (parent3 != parentWindow.document.body) {
      targetRect = getRect();
      parentRect = new rect_default(parent3).excludeScrollbarsAndBorders();
      if (!parentRect.contains(targetRect)) {
        if (isAbove(targetRect, parentRect)) {
          parent3.scrollTop -= parentRect.top - targetRect.top;
        } else if (isBelow(targetRect, parentRect)) {
          parent3.scrollTop += targetRect.bottom - parentRect.bottom;
        }
        if (isLeftOf(targetRect, parentRect)) {
          parent3.scrollLeft -= parentRect.left - targetRect.left;
        } else if (isRightOf(targetRect, parentRect)) {
          parent3.scrollLeft += targetRect.right - parentRect.right;
        }
      }
      parent3 = parent3.parentNode;
    }
  }
  function isBelow(firstRect, secondRect) {
    return firstRect.bottom > secondRect.bottom;
  }
  function isAbove(firstRect, secondRect) {
    return firstRect.top < secondRect.top;
  }
  function isLeftOf(firstRect, secondRect) {
    return firstRect.left < secondRect.left;
  }
  function isRightOf(firstRect, secondRect) {
    return firstRect.right > secondRect.right;
  }
  function getWindow(elementOrRange) {
    if (isRange(elementOrRange)) {
      return elementOrRange.startContainer.ownerDocument.defaultView;
    } else {
      return elementOrRange.ownerDocument.defaultView;
    }
  }
  function getParentElement(elementOrRange) {
    if (isRange(elementOrRange)) {
      let parent3 = elementOrRange.commonAncestorContainer;
      if (isText(parent3)) {
        parent3 = parent3.parentNode;
      }
      return parent3;
    } else {
      return elementOrRange.parentNode;
    }
  }
  function getRectRelativeToWindow(target, relativeWindow) {
    const targetWindow = getWindow(target);
    const rect5 = new rect_default(target);
    if (targetWindow === relativeWindow) {
      return rect5;
    } else {
      let currentWindow = targetWindow;
      while (currentWindow != relativeWindow) {
        const frame = currentWindow.frameElement;
        const frameRect = new rect_default(frame).excludeScrollbarsAndBorders();
        rect5.moveBy(frameRect.left, frameRect.top);
        currentWindow = currentWindow.parent;
      }
    }
    return rect5;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/view.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var View = class {
    constructor(stylesProcessor) {
      this.document = new document_default(stylesProcessor);
      this.domConverter = new domconverter_default(this.document);
      this.domRoots = new Map();
      this.set("isRenderingInProgress", false);
      this.set("hasDomSelection", false);
      this._renderer = new renderer_default(this.domConverter, this.document.selection);
      this._renderer.bind("isFocused").to(this.document);
      this._initialDomRootAttributes = new WeakMap();
      this._observers = new Map();
      this._ongoingChange = false;
      this._postFixersInProgress = false;
      this._renderingDisabled = false;
      this._hasChangedSinceTheLastRendering = false;
      this._writer = new downcastwriter_default(this.document);
      this.addObserver(mutationobserver_default);
      this.addObserver(selectionobserver_default);
      this.addObserver(focusobserver_default);
      this.addObserver(keyobserver_default);
      this.addObserver(fakeselectionobserver_default);
      this.addObserver(compositionobserver_default);
      if (env_default.isAndroid) {
        this.addObserver(inputobserver_default);
      }
      injectQuirksHandling(this);
      injectUiElementHandling(this);
      this.on("render", () => {
        this._render();
        this.document.fire("layoutChanged");
        this._hasChangedSinceTheLastRendering = false;
      });
      this.listenTo(this.document.selection, "change", () => {
        this._hasChangedSinceTheLastRendering = true;
      });
    }
    attachDomRoot(domRoot, name = "main") {
      const viewRoot = this.document.getRoot(name);
      viewRoot._name = domRoot.tagName.toLowerCase();
      const initialDomRootAttributes = {};
      for (const {name: name2, value} of Array.from(domRoot.attributes)) {
        initialDomRootAttributes[name2] = value;
        if (name2 === "class") {
          this._writer.addClass(value.split(" "), viewRoot);
        } else {
          this._writer.setAttribute(name2, value, viewRoot);
        }
      }
      this._initialDomRootAttributes.set(domRoot, initialDomRootAttributes);
      const updateContenteditableAttribute = () => {
        this._writer.setAttribute("contenteditable", !viewRoot.isReadOnly, viewRoot);
        if (viewRoot.isReadOnly) {
          this._writer.addClass("ck-read-only", viewRoot);
        } else {
          this._writer.removeClass("ck-read-only", viewRoot);
        }
      };
      updateContenteditableAttribute();
      this.domRoots.set(name, domRoot);
      this.domConverter.bindElements(domRoot, viewRoot);
      this._renderer.markToSync("children", viewRoot);
      this._renderer.markToSync("attributes", viewRoot);
      this._renderer.domDocuments.add(domRoot.ownerDocument);
      viewRoot.on("change:children", (evt, node12) => this._renderer.markToSync("children", node12));
      viewRoot.on("change:attributes", (evt, node12) => this._renderer.markToSync("attributes", node12));
      viewRoot.on("change:text", (evt, node12) => this._renderer.markToSync("text", node12));
      viewRoot.on("change:isReadOnly", () => this.change(updateContenteditableAttribute));
      viewRoot.on("change", () => {
        this._hasChangedSinceTheLastRendering = true;
      });
      for (const observer7 of this._observers.values()) {
        observer7.observe(domRoot, name);
      }
    }
    detachDomRoot(name) {
      const domRoot = this.domRoots.get(name);
      Array.from(domRoot.attributes).forEach(({name: name2}) => domRoot.removeAttribute(name2));
      const initialDomRootAttributes = this._initialDomRootAttributes.get(domRoot);
      for (const attribute in initialDomRootAttributes) {
        domRoot.setAttribute(attribute, initialDomRootAttributes[attribute]);
      }
      this.domRoots.delete(name);
      this.domConverter.unbindDomElement(domRoot);
    }
    getDomRoot(name = "main") {
      return this.domRoots.get(name);
    }
    addObserver(Observer2) {
      let observer7 = this._observers.get(Observer2);
      if (observer7) {
        return observer7;
      }
      observer7 = new Observer2(this);
      this._observers.set(Observer2, observer7);
      for (const [name, domElement] of this.domRoots) {
        observer7.observe(domElement, name);
      }
      observer7.enable();
      return observer7;
    }
    getObserver(Observer2) {
      return this._observers.get(Observer2);
    }
    disableObservers() {
      for (const observer7 of this._observers.values()) {
        observer7.disable();
      }
    }
    enableObservers() {
      for (const observer7 of this._observers.values()) {
        observer7.enable();
      }
    }
    scrollToTheSelection() {
      const range29 = this.document.selection.getFirstRange();
      if (range29) {
        scrollViewportToShowTarget({
          target: this.domConverter.viewRangeToDom(range29),
          viewportOffset: 20
        });
      }
    }
    focus() {
      if (!this.document.isFocused) {
        const editable = this.document.selection.editableElement;
        if (editable) {
          this.domConverter.focus(editable);
          this.forceRender();
        } else {
        }
      }
    }
    change(callback) {
      if (this.isRenderingInProgress || this._postFixersInProgress) {
        throw new ckeditorerror_default("cannot-change-view-tree", this);
      }
      try {
        if (this._ongoingChange) {
          return callback(this._writer);
        }
        this._ongoingChange = true;
        const callbackResult = callback(this._writer);
        this._ongoingChange = false;
        if (!this._renderingDisabled && this._hasChangedSinceTheLastRendering) {
          this._postFixersInProgress = true;
          this.document._callPostFixers(this._writer);
          this._postFixersInProgress = false;
          this.fire("render");
        }
        return callbackResult;
      } catch (err) {
        ckeditorerror_default.rethrowUnexpectedError(err, this);
      }
    }
    forceRender() {
      this._hasChangedSinceTheLastRendering = true;
      this.change(() => {
      });
    }
    destroy() {
      for (const observer7 of this._observers.values()) {
        observer7.destroy();
      }
      this.document.destroy();
      this.stopListening();
    }
    createPositionAt(itemOrPosition, offset) {
      return position_default._createAt(itemOrPosition, offset);
    }
    createPositionAfter(item) {
      return position_default._createAfter(item);
    }
    createPositionBefore(item) {
      return position_default._createBefore(item);
    }
    createRange(start, end) {
      return new range_default(start, end);
    }
    createRangeOn(item) {
      return range_default._createOn(item);
    }
    createRangeIn(element18) {
      return range_default._createIn(element18);
    }
    createSelection(selectable, placeOrOffset, options) {
      return new selection_default(selectable, placeOrOffset, options);
    }
    _disableRendering(flag) {
      this._renderingDisabled = flag;
      if (flag == false) {
        this.change(() => {
        });
      }
    }
    _render() {
      this.isRenderingInProgress = true;
      this.disableObservers();
      this._renderer.render();
      this.enableObservers();
      this.isRenderingInProgress = false;
    }
  };
  var view_default = View;
  mix(View, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/model/node.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Node3 = class {
    constructor(attrs) {
      this.parent = null;
      this._attrs = toMap(attrs);
    }
    get index() {
      let pos;
      if (!this.parent) {
        return null;
      }
      if ((pos = this.parent.getChildIndex(this)) === null) {
        throw new ckeditorerror_default("model-node-not-found-in-parent", this);
      }
      return pos;
    }
    get startOffset() {
      let pos;
      if (!this.parent) {
        return null;
      }
      if ((pos = this.parent.getChildStartOffset(this)) === null) {
        throw new ckeditorerror_default("model-node-not-found-in-parent", this);
      }
      return pos;
    }
    get offsetSize() {
      return 1;
    }
    get endOffset() {
      if (!this.parent) {
        return null;
      }
      return this.startOffset + this.offsetSize;
    }
    get nextSibling() {
      const index = this.index;
      return index !== null && this.parent.getChild(index + 1) || null;
    }
    get previousSibling() {
      const index = this.index;
      return index !== null && this.parent.getChild(index - 1) || null;
    }
    get root() {
      let root11 = this;
      while (root11.parent) {
        root11 = root11.parent;
      }
      return root11;
    }
    isAttached() {
      return this.root.is("rootElement");
    }
    getPath() {
      const path = [];
      let node12 = this;
      while (node12.parent) {
        path.unshift(node12.startOffset);
        node12 = node12.parent;
      }
      return path;
    }
    getAncestors(options = {includeSelf: false, parentFirst: false}) {
      const ancestors = [];
      let parent3 = options.includeSelf ? this : this.parent;
      while (parent3) {
        ancestors[options.parentFirst ? "push" : "unshift"](parent3);
        parent3 = parent3.parent;
      }
      return ancestors;
    }
    getCommonAncestor(node12, options = {}) {
      const ancestorsA = this.getAncestors(options);
      const ancestorsB = node12.getAncestors(options);
      let i = 0;
      while (ancestorsA[i] == ancestorsB[i] && ancestorsA[i]) {
        i++;
      }
      return i === 0 ? null : ancestorsA[i - 1];
    }
    isBefore(node12) {
      if (this == node12) {
        return false;
      }
      if (this.root !== node12.root) {
        return false;
      }
      const thisPath = this.getPath();
      const nodePath = node12.getPath();
      const result = compareArrays(thisPath, nodePath);
      switch (result) {
        case "prefix":
          return true;
        case "extension":
          return false;
        default:
          return thisPath[result] < nodePath[result];
      }
    }
    isAfter(node12) {
      if (this == node12) {
        return false;
      }
      if (this.root !== node12.root) {
        return false;
      }
      return !this.isBefore(node12);
    }
    hasAttribute(key) {
      return this._attrs.has(key);
    }
    getAttribute(key) {
      return this._attrs.get(key);
    }
    getAttributes() {
      return this._attrs.entries();
    }
    getAttributeKeys() {
      return this._attrs.keys();
    }
    toJSON() {
      const json = {};
      if (this._attrs.size) {
        json.attributes = Array.from(this._attrs).reduce((result, attr) => {
          result[attr[0]] = attr[1];
          return result;
        }, {});
      }
      return json;
    }
    is(type) {
      return type === "node" || type === "model:node";
    }
    _clone() {
      return new Node3(this._attrs);
    }
    _remove() {
      this.parent._removeChildren(this.index);
    }
    _setAttribute(key, value) {
      this._attrs.set(key, value);
    }
    _setAttributesTo(attrs) {
      this._attrs = toMap(attrs);
    }
    _removeAttribute(key) {
      return this._attrs.delete(key);
    }
    _clearAttributes() {
      this._attrs.clear();
    }
  };
  var node_default2 = Node3;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/text.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Text3 = class extends node_default2 {
    constructor(data, attrs) {
      super(attrs);
      this._data = data || "";
    }
    get offsetSize() {
      return this.data.length;
    }
    get data() {
      return this._data;
    }
    is(type) {
      return type === "$text" || type === "model:$text" || type === "text" || type === "model:text" || type === "node" || type === "model:node";
    }
    toJSON() {
      const json = super.toJSON();
      json.data = this.data;
      return json;
    }
    _clone() {
      return new Text3(this.data, this.getAttributes());
    }
    static fromJSON(json) {
      return new Text3(json.data, json.attributes);
    }
  };
  var text_default2 = Text3;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/textproxy.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var TextProxy2 = class {
    constructor(textNode, offsetInText, length) {
      this.textNode = textNode;
      if (offsetInText < 0 || offsetInText > textNode.offsetSize) {
        throw new ckeditorerror_default("model-textproxy-wrong-offsetintext", this);
      }
      if (length < 0 || offsetInText + length > textNode.offsetSize) {
        throw new ckeditorerror_default("model-textproxy-wrong-length", this);
      }
      this.data = textNode.data.substring(offsetInText, offsetInText + length);
      this.offsetInText = offsetInText;
    }
    get startOffset() {
      return this.textNode.startOffset !== null ? this.textNode.startOffset + this.offsetInText : null;
    }
    get offsetSize() {
      return this.data.length;
    }
    get endOffset() {
      return this.startOffset !== null ? this.startOffset + this.offsetSize : null;
    }
    get isPartial() {
      return this.offsetSize !== this.textNode.offsetSize;
    }
    get parent() {
      return this.textNode.parent;
    }
    get root() {
      return this.textNode.root;
    }
    is(type) {
      return type === "$textProxy" || type === "model:$textProxy" || type === "textProxy" || type === "model:textProxy";
    }
    getPath() {
      const path = this.textNode.getPath();
      if (path.length > 0) {
        path[path.length - 1] += this.offsetInText;
      }
      return path;
    }
    getAncestors(options = {includeSelf: false, parentFirst: false}) {
      const ancestors = [];
      let parent3 = options.includeSelf ? this : this.parent;
      while (parent3) {
        ancestors[options.parentFirst ? "push" : "unshift"](parent3);
        parent3 = parent3.parent;
      }
      return ancestors;
    }
    hasAttribute(key) {
      return this.textNode.hasAttribute(key);
    }
    getAttribute(key) {
      return this.textNode.getAttribute(key);
    }
    getAttributes() {
      return this.textNode.getAttributes();
    }
    getAttributeKeys() {
      return this.textNode.getAttributeKeys();
    }
  };
  var textproxy_default2 = TextProxy2;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/nodelist.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var NodeList = class {
    constructor(nodes) {
      this._nodes = [];
      if (nodes) {
        this._insertNodes(0, nodes);
      }
    }
    [Symbol.iterator]() {
      return this._nodes[Symbol.iterator]();
    }
    get length() {
      return this._nodes.length;
    }
    get maxOffset() {
      return this._nodes.reduce((sum, node12) => sum + node12.offsetSize, 0);
    }
    getNode(index) {
      return this._nodes[index] || null;
    }
    getNodeIndex(node12) {
      const index = this._nodes.indexOf(node12);
      return index == -1 ? null : index;
    }
    getNodeStartOffset(node12) {
      const index = this.getNodeIndex(node12);
      return index === null ? null : this._nodes.slice(0, index).reduce((sum, node13) => sum + node13.offsetSize, 0);
    }
    indexToOffset(index) {
      if (index == this._nodes.length) {
        return this.maxOffset;
      }
      const node12 = this._nodes[index];
      if (!node12) {
        throw new ckeditorerror_default("model-nodelist-index-out-of-bounds", this);
      }
      return this.getNodeStartOffset(node12);
    }
    offsetToIndex(offset) {
      let totalOffset = 0;
      for (const node12 of this._nodes) {
        if (offset >= totalOffset && offset < totalOffset + node12.offsetSize) {
          return this.getNodeIndex(node12);
        }
        totalOffset += node12.offsetSize;
      }
      if (totalOffset != offset) {
        throw new ckeditorerror_default("model-nodelist-offset-out-of-bounds", this, {
          offset,
          nodeList: this
        });
      }
      return this.length;
    }
    _insertNodes(index, nodes) {
      for (const node12 of nodes) {
        if (!(node12 instanceof node_default2)) {
          throw new ckeditorerror_default("model-nodelist-insertnodes-not-node", this);
        }
      }
      this._nodes.splice(index, 0, ...nodes);
    }
    _removeNodes(indexStart, howMany = 1) {
      return this._nodes.splice(indexStart, howMany);
    }
    toJSON() {
      return this._nodes.map((node12) => node12.toJSON());
    }
  };
  var nodelist_default = NodeList;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/element.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Element2 = class extends node_default2 {
    constructor(name, attrs, children) {
      super(attrs);
      this.name = name;
      this._children = new nodelist_default();
      if (children) {
        this._insertChild(0, children);
      }
    }
    get childCount() {
      return this._children.length;
    }
    get maxOffset() {
      return this._children.maxOffset;
    }
    get isEmpty() {
      return this.childCount === 0;
    }
    is(type, name = null) {
      if (!name) {
        return type === "element" || type === "model:element" || type === "node" || type === "model:node";
      }
      return name === this.name && (type === "element" || type === "model:element");
    }
    getChild(index) {
      return this._children.getNode(index);
    }
    getChildren() {
      return this._children[Symbol.iterator]();
    }
    getChildIndex(node12) {
      return this._children.getNodeIndex(node12);
    }
    getChildStartOffset(node12) {
      return this._children.getNodeStartOffset(node12);
    }
    offsetToIndex(offset) {
      return this._children.offsetToIndex(offset);
    }
    getNodeByPath(relativePath) {
      let node12 = this;
      for (const index of relativePath) {
        node12 = node12.getChild(node12.offsetToIndex(index));
      }
      return node12;
    }
    findAncestor(parentName, options = {includeSelf: false}) {
      let parent3 = options.includeSelf ? this : this.parent;
      while (parent3) {
        if (parent3.name === parentName) {
          return parent3;
        }
        parent3 = parent3.parent;
      }
      return null;
    }
    toJSON() {
      const json = super.toJSON();
      json.name = this.name;
      if (this._children.length > 0) {
        json.children = [];
        for (const node12 of this._children) {
          json.children.push(node12.toJSON());
        }
      }
      return json;
    }
    _clone(deep = false) {
      const children = deep ? Array.from(this._children).map((node12) => node12._clone(true)) : null;
      return new Element2(this.name, this.getAttributes(), children);
    }
    _appendChild(nodes) {
      this._insertChild(this.childCount, nodes);
    }
    _insertChild(index, items) {
      const nodes = normalize3(items);
      for (const node12 of nodes) {
        if (node12.parent !== null) {
          node12._remove();
        }
        node12.parent = this;
      }
      this._children._insertNodes(index, nodes);
    }
    _removeChildren(index, howMany = 1) {
      const nodes = this._children._removeNodes(index, howMany);
      for (const node12 of nodes) {
        node12.parent = null;
      }
      return nodes;
    }
    static fromJSON(json) {
      let children = null;
      if (json.children) {
        children = [];
        for (const child of json.children) {
          if (child.name) {
            children.push(Element2.fromJSON(child));
          } else {
            children.push(text_default2.fromJSON(child));
          }
        }
      }
      return new Element2(json.name, json.attributes, children);
    }
  };
  var element_default2 = Element2;
  function normalize3(nodes) {
    if (typeof nodes == "string") {
      return [new text_default2(nodes)];
    }
    if (!isIterable(nodes)) {
      nodes = [nodes];
    }
    return Array.from(nodes).map((node12) => {
      if (typeof node12 == "string") {
        return new text_default2(node12);
      }
      if (node12 instanceof textproxy_default2) {
        return new text_default2(node12.data, node12.getAttributes());
      }
      return node12;
    });
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/treewalker.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var TreeWalker2 = class {
    constructor(options = {}) {
      if (!options.boundaries && !options.startPosition) {
        throw new ckeditorerror_default("model-tree-walker-no-start-position", null);
      }
      const direction = options.direction || "forward";
      if (direction != "forward" && direction != "backward") {
        throw new ckeditorerror_default("model-tree-walker-unknown-direction", options, {direction});
      }
      this.direction = direction;
      this.boundaries = options.boundaries || null;
      if (options.startPosition) {
        this.position = options.startPosition.clone();
      } else {
        this.position = position_default2._createAt(this.boundaries[this.direction == "backward" ? "end" : "start"]);
      }
      this.position.stickiness = "toNone";
      this.singleCharacters = !!options.singleCharacters;
      this.shallow = !!options.shallow;
      this.ignoreElementEnd = !!options.ignoreElementEnd;
      this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null;
      this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null;
      this._visitedParent = this.position.parent;
    }
    [Symbol.iterator]() {
      return this;
    }
    skip(skip) {
      let done, value, prevPosition, prevVisitedParent;
      do {
        prevPosition = this.position;
        prevVisitedParent = this._visitedParent;
        ({done, value} = this.next());
      } while (!done && skip(value));
      if (!done) {
        this.position = prevPosition;
        this._visitedParent = prevVisitedParent;
      }
    }
    next() {
      if (this.direction == "forward") {
        return this._next();
      } else {
        return this._previous();
      }
    }
    _next() {
      const previousPosition = this.position;
      const position30 = this.position.clone();
      const parent3 = this._visitedParent;
      if (parent3.parent === null && position30.offset === parent3.maxOffset) {
        return {done: true};
      }
      if (parent3 === this._boundaryEndParent && position30.offset == this.boundaries.end.offset) {
        return {done: true};
      }
      const positionParent = position30.parent;
      const textNodeAtPosition = getTextNodeAtPosition(position30, positionParent);
      const node12 = textNodeAtPosition ? textNodeAtPosition : getNodeAfterPosition(position30, positionParent, textNodeAtPosition);
      if (node12 instanceof element_default2) {
        if (!this.shallow) {
          position30.path.push(0);
          this._visitedParent = node12;
        } else {
          position30.offset++;
        }
        this.position = position30;
        return formatReturnValue("elementStart", node12, previousPosition, position30, 1);
      } else if (node12 instanceof text_default2) {
        let charactersCount;
        if (this.singleCharacters) {
          charactersCount = 1;
        } else {
          let offset = node12.endOffset;
          if (this._boundaryEndParent == parent3 && this.boundaries.end.offset < offset) {
            offset = this.boundaries.end.offset;
          }
          charactersCount = offset - position30.offset;
        }
        const offsetInTextNode = position30.offset - node12.startOffset;
        const item = new textproxy_default2(node12, offsetInTextNode, charactersCount);
        position30.offset += charactersCount;
        this.position = position30;
        return formatReturnValue("text", item, previousPosition, position30, charactersCount);
      } else {
        position30.path.pop();
        position30.offset++;
        this.position = position30;
        this._visitedParent = parent3.parent;
        if (this.ignoreElementEnd) {
          return this._next();
        } else {
          return formatReturnValue("elementEnd", parent3, previousPosition, position30);
        }
      }
    }
    _previous() {
      const previousPosition = this.position;
      const position30 = this.position.clone();
      const parent3 = this._visitedParent;
      if (parent3.parent === null && position30.offset === 0) {
        return {done: true};
      }
      if (parent3 == this._boundaryStartParent && position30.offset == this.boundaries.start.offset) {
        return {done: true};
      }
      const positionParent = position30.parent;
      const textNodeAtPosition = getTextNodeAtPosition(position30, positionParent);
      const node12 = textNodeAtPosition ? textNodeAtPosition : getNodeBeforePosition(position30, positionParent, textNodeAtPosition);
      if (node12 instanceof element_default2) {
        position30.offset--;
        if (!this.shallow) {
          position30.path.push(node12.maxOffset);
          this.position = position30;
          this._visitedParent = node12;
          if (this.ignoreElementEnd) {
            return this._previous();
          } else {
            return formatReturnValue("elementEnd", node12, previousPosition, position30);
          }
        } else {
          this.position = position30;
          return formatReturnValue("elementStart", node12, previousPosition, position30, 1);
        }
      } else if (node12 instanceof text_default2) {
        let charactersCount;
        if (this.singleCharacters) {
          charactersCount = 1;
        } else {
          let offset = node12.startOffset;
          if (this._boundaryStartParent == parent3 && this.boundaries.start.offset > offset) {
            offset = this.boundaries.start.offset;
          }
          charactersCount = position30.offset - offset;
        }
        const offsetInTextNode = position30.offset - node12.startOffset;
        const item = new textproxy_default2(node12, offsetInTextNode - charactersCount, charactersCount);
        position30.offset -= charactersCount;
        this.position = position30;
        return formatReturnValue("text", item, previousPosition, position30, charactersCount);
      } else {
        position30.path.pop();
        this.position = position30;
        this._visitedParent = parent3.parent;
        return formatReturnValue("elementStart", parent3, previousPosition, position30, 1);
      }
    }
  };
  var treewalker_default2 = TreeWalker2;
  function formatReturnValue(type, item, previousPosition, nextPosition, length) {
    return {
      done: false,
      value: {
        type,
        item,
        previousPosition,
        nextPosition,
        length
      }
    };
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/position.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Position2 = class {
    constructor(root11, path, stickiness = "toNone") {
      if (!root11.is("element") && !root11.is("documentFragment")) {
        throw new ckeditorerror_default("model-position-root-invalid", root11);
      }
      if (!(path instanceof Array) || path.length === 0) {
        throw new ckeditorerror_default("model-position-path-incorrect-format", root11, {path});
      }
      if (root11.is("rootElement")) {
        path = path.slice();
      } else {
        path = [...root11.getPath(), ...path];
        root11 = root11.root;
      }
      this.root = root11;
      this.path = path;
      this.stickiness = stickiness;
    }
    get offset() {
      return this.path[this.path.length - 1];
    }
    set offset(newOffset) {
      this.path[this.path.length - 1] = newOffset;
    }
    get parent() {
      let parent3 = this.root;
      for (let i = 0; i < this.path.length - 1; i++) {
        parent3 = parent3.getChild(parent3.offsetToIndex(this.path[i]));
        if (!parent3) {
          throw new ckeditorerror_default("model-position-path-incorrect", this, {position: this});
        }
      }
      if (parent3.is("$text")) {
        throw new ckeditorerror_default("model-position-path-incorrect", this, {position: this});
      }
      return parent3;
    }
    get index() {
      return this.parent.offsetToIndex(this.offset);
    }
    get textNode() {
      return getTextNodeAtPosition(this, this.parent);
    }
    get nodeAfter() {
      const parent3 = this.parent;
      return getNodeAfterPosition(this, parent3, getTextNodeAtPosition(this, parent3));
    }
    get nodeBefore() {
      const parent3 = this.parent;
      return getNodeBeforePosition(this, parent3, getTextNodeAtPosition(this, parent3));
    }
    get isAtStart() {
      return this.offset === 0;
    }
    get isAtEnd() {
      return this.offset == this.parent.maxOffset;
    }
    compareWith(otherPosition) {
      if (this.root != otherPosition.root) {
        return "different";
      }
      const result = compareArrays(this.path, otherPosition.path);
      switch (result) {
        case "same":
          return "same";
        case "prefix":
          return "before";
        case "extension":
          return "after";
        default:
          return this.path[result] < otherPosition.path[result] ? "before" : "after";
      }
    }
    getLastMatchingPosition(skip, options = {}) {
      options.startPosition = this;
      const treeWalker = new treewalker_default2(options);
      treeWalker.skip(skip);
      return treeWalker.position;
    }
    getParentPath() {
      return this.path.slice(0, -1);
    }
    getAncestors() {
      const parent3 = this.parent;
      if (parent3.is("documentFragment")) {
        return [parent3];
      } else {
        return parent3.getAncestors({includeSelf: true});
      }
    }
    findAncestor(parentName) {
      const parent3 = this.parent;
      if (parent3.is("element")) {
        return parent3.findAncestor(parentName, {includeSelf: true});
      }
      return null;
    }
    getCommonPath(position30) {
      if (this.root != position30.root) {
        return [];
      }
      const cmp = compareArrays(this.path, position30.path);
      const diffAt = typeof cmp == "string" ? Math.min(this.path.length, position30.path.length) : cmp;
      return this.path.slice(0, diffAt);
    }
    getCommonAncestor(position30) {
      const ancestorsA = this.getAncestors();
      const ancestorsB = position30.getAncestors();
      let i = 0;
      while (ancestorsA[i] == ancestorsB[i] && ancestorsA[i]) {
        i++;
      }
      return i === 0 ? null : ancestorsA[i - 1];
    }
    getShiftedBy(shift) {
      const shifted = this.clone();
      const offset = shifted.offset + shift;
      shifted.offset = offset < 0 ? 0 : offset;
      return shifted;
    }
    isAfter(otherPosition) {
      return this.compareWith(otherPosition) == "after";
    }
    isBefore(otherPosition) {
      return this.compareWith(otherPosition) == "before";
    }
    isEqual(otherPosition) {
      return this.compareWith(otherPosition) == "same";
    }
    isTouching(otherPosition) {
      let left = null;
      let right = null;
      const compare = this.compareWith(otherPosition);
      switch (compare) {
        case "same":
          return true;
        case "before":
          left = Position2._createAt(this);
          right = Position2._createAt(otherPosition);
          break;
        case "after":
          left = Position2._createAt(otherPosition);
          right = Position2._createAt(this);
          break;
        default:
          return false;
      }
      let leftParent = left.parent;
      while (left.path.length + right.path.length) {
        if (left.isEqual(right)) {
          return true;
        }
        if (left.path.length > right.path.length) {
          if (left.offset !== leftParent.maxOffset) {
            return false;
          }
          left.path = left.path.slice(0, -1);
          leftParent = leftParent.parent;
          left.offset++;
        } else {
          if (right.offset !== 0) {
            return false;
          }
          right.path = right.path.slice(0, -1);
        }
      }
    }
    is(type) {
      return type === "position" || type === "model:position";
    }
    hasSameParentAs(position30) {
      if (this.root !== position30.root) {
        return false;
      }
      const thisParentPath = this.getParentPath();
      const posParentPath = position30.getParentPath();
      return compareArrays(thisParentPath, posParentPath) == "same";
    }
    getTransformedByOperation(operation12) {
      let result;
      switch (operation12.type) {
        case "insert":
          result = this._getTransformedByInsertOperation(operation12);
          break;
        case "move":
        case "remove":
        case "reinsert":
          result = this._getTransformedByMoveOperation(operation12);
          break;
        case "split":
          result = this._getTransformedBySplitOperation(operation12);
          break;
        case "merge":
          result = this._getTransformedByMergeOperation(operation12);
          break;
        default:
          result = Position2._createAt(this);
          break;
      }
      return result;
    }
    _getTransformedByInsertOperation(operation12) {
      return this._getTransformedByInsertion(operation12.position, operation12.howMany);
    }
    _getTransformedByMoveOperation(operation12) {
      return this._getTransformedByMove(operation12.sourcePosition, operation12.targetPosition, operation12.howMany);
    }
    _getTransformedBySplitOperation(operation12) {
      const movedRange = operation12.movedRange;
      const isContained = movedRange.containsPosition(this) || movedRange.start.isEqual(this) && this.stickiness == "toNext";
      if (isContained) {
        return this._getCombined(operation12.splitPosition, operation12.moveTargetPosition);
      } else {
        if (operation12.graveyardPosition) {
          return this._getTransformedByMove(operation12.graveyardPosition, operation12.insertionPosition, 1);
        } else {
          return this._getTransformedByInsertion(operation12.insertionPosition, 1);
        }
      }
    }
    _getTransformedByMergeOperation(operation12) {
      const movedRange = operation12.movedRange;
      const isContained = movedRange.containsPosition(this) || movedRange.start.isEqual(this);
      let pos;
      if (isContained) {
        pos = this._getCombined(operation12.sourcePosition, operation12.targetPosition);
        if (operation12.sourcePosition.isBefore(operation12.targetPosition)) {
          pos = pos._getTransformedByDeletion(operation12.deletionPosition, 1);
        }
      } else if (this.isEqual(operation12.deletionPosition)) {
        pos = Position2._createAt(operation12.deletionPosition);
      } else {
        pos = this._getTransformedByMove(operation12.deletionPosition, operation12.graveyardPosition, 1);
      }
      return pos;
    }
    _getTransformedByDeletion(deletePosition, howMany) {
      const transformed = Position2._createAt(this);
      if (this.root != deletePosition.root) {
        return transformed;
      }
      if (compareArrays(deletePosition.getParentPath(), this.getParentPath()) == "same") {
        if (deletePosition.offset < this.offset) {
          if (deletePosition.offset + howMany > this.offset) {
            return null;
          } else {
            transformed.offset -= howMany;
          }
        }
      } else if (compareArrays(deletePosition.getParentPath(), this.getParentPath()) == "prefix") {
        const i = deletePosition.path.length - 1;
        if (deletePosition.offset <= this.path[i]) {
          if (deletePosition.offset + howMany > this.path[i]) {
            return null;
          } else {
            transformed.path[i] -= howMany;
          }
        }
      }
      return transformed;
    }
    _getTransformedByInsertion(insertPosition, howMany) {
      const transformed = Position2._createAt(this);
      if (this.root != insertPosition.root) {
        return transformed;
      }
      if (compareArrays(insertPosition.getParentPath(), this.getParentPath()) == "same") {
        if (insertPosition.offset < this.offset || insertPosition.offset == this.offset && this.stickiness != "toPrevious") {
          transformed.offset += howMany;
        }
      } else if (compareArrays(insertPosition.getParentPath(), this.getParentPath()) == "prefix") {
        const i = insertPosition.path.length - 1;
        if (insertPosition.offset <= this.path[i]) {
          transformed.path[i] += howMany;
        }
      }
      return transformed;
    }
    _getTransformedByMove(sourcePosition, targetPosition, howMany) {
      targetPosition = targetPosition._getTransformedByDeletion(sourcePosition, howMany);
      if (sourcePosition.isEqual(targetPosition)) {
        return Position2._createAt(this);
      }
      const transformed = this._getTransformedByDeletion(sourcePosition, howMany);
      const isMoved = transformed === null || sourcePosition.isEqual(this) && this.stickiness == "toNext" || sourcePosition.getShiftedBy(howMany).isEqual(this) && this.stickiness == "toPrevious";
      if (isMoved) {
        return this._getCombined(sourcePosition, targetPosition);
      } else {
        return transformed._getTransformedByInsertion(targetPosition, howMany);
      }
    }
    _getCombined(source, target) {
      const i = source.path.length - 1;
      const combined = Position2._createAt(target);
      combined.stickiness = this.stickiness;
      combined.offset = combined.offset + this.path[i] - source.offset;
      combined.path = [...combined.path, ...this.path.slice(i + 1)];
      return combined;
    }
    toJSON() {
      return {
        root: this.root.toJSON(),
        path: Array.from(this.path),
        stickiness: this.stickiness
      };
    }
    clone() {
      return new this.constructor(this.root, this.path, this.stickiness);
    }
    static _createAt(itemOrPosition, offset, stickiness = "toNone") {
      if (itemOrPosition instanceof Position2) {
        return new Position2(itemOrPosition.root, itemOrPosition.path, itemOrPosition.stickiness);
      } else {
        const node12 = itemOrPosition;
        if (offset == "end") {
          offset = node12.maxOffset;
        } else if (offset == "before") {
          return this._createBefore(node12, stickiness);
        } else if (offset == "after") {
          return this._createAfter(node12, stickiness);
        } else if (offset !== 0 && !offset) {
          throw new ckeditorerror_default("model-createpositionat-offset-required", [this, itemOrPosition]);
        }
        if (!node12.is("element") && !node12.is("documentFragment")) {
          throw new ckeditorerror_default("model-position-parent-incorrect", [this, itemOrPosition]);
        }
        const path = node12.getPath();
        path.push(offset);
        return new this(node12.root, path, stickiness);
      }
    }
    static _createAfter(item, stickiness) {
      if (!item.parent) {
        throw new ckeditorerror_default("model-position-after-root", [this, item], {root: item});
      }
      return this._createAt(item.parent, item.endOffset, stickiness);
    }
    static _createBefore(item, stickiness) {
      if (!item.parent) {
        throw new ckeditorerror_default("model-position-before-root", item, {root: item});
      }
      return this._createAt(item.parent, item.startOffset, stickiness);
    }
    static fromJSON(json, doc) {
      if (json.root === "$graveyard") {
        const pos = new Position2(doc.graveyard, json.path);
        pos.stickiness = json.stickiness;
        return pos;
      }
      if (!doc.getRoot(json.root)) {
        throw new ckeditorerror_default("model-position-fromjson-no-root", doc, {rootName: json.root});
      }
      return new Position2(doc.getRoot(json.root), json.path, json.stickiness);
    }
  };
  var position_default2 = Position2;
  function getTextNodeAtPosition(position30, positionParent) {
    const node12 = positionParent.getChild(positionParent.offsetToIndex(position30.offset));
    if (node12 && node12.is("$text") && node12.startOffset < position30.offset) {
      return node12;
    }
    return null;
  }
  function getNodeAfterPosition(position30, positionParent, textNode) {
    if (textNode !== null) {
      return null;
    }
    return positionParent.getChild(positionParent.offsetToIndex(position30.offset));
  }
  function getNodeBeforePosition(position30, positionParent, textNode) {
    if (textNode !== null) {
      return null;
    }
    return positionParent.getChild(positionParent.offsetToIndex(position30.offset) - 1);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/range.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Range2 = class {
    constructor(start, end = null) {
      this.start = position_default2._createAt(start);
      this.end = end ? position_default2._createAt(end) : position_default2._createAt(start);
      this.start.stickiness = this.isCollapsed ? "toNone" : "toNext";
      this.end.stickiness = this.isCollapsed ? "toNone" : "toPrevious";
    }
    *[Symbol.iterator]() {
      yield* new treewalker_default2({boundaries: this, ignoreElementEnd: true});
    }
    get isCollapsed() {
      return this.start.isEqual(this.end);
    }
    get isFlat() {
      const startParentPath = this.start.getParentPath();
      const endParentPath = this.end.getParentPath();
      return compareArrays(startParentPath, endParentPath) == "same";
    }
    get root() {
      return this.start.root;
    }
    containsPosition(position30) {
      return position30.isAfter(this.start) && position30.isBefore(this.end);
    }
    containsRange(otherRange, loose = false) {
      if (otherRange.isCollapsed) {
        loose = false;
      }
      const containsStart = this.containsPosition(otherRange.start) || loose && this.start.isEqual(otherRange.start);
      const containsEnd = this.containsPosition(otherRange.end) || loose && this.end.isEqual(otherRange.end);
      return containsStart && containsEnd;
    }
    containsItem(item) {
      const pos = position_default2._createBefore(item);
      return this.containsPosition(pos) || this.start.isEqual(pos);
    }
    is(type) {
      return type === "range" || type === "model:range";
    }
    isEqual(otherRange) {
      return this.start.isEqual(otherRange.start) && this.end.isEqual(otherRange.end);
    }
    isIntersecting(otherRange) {
      return this.start.isBefore(otherRange.end) && this.end.isAfter(otherRange.start);
    }
    getDifference(otherRange) {
      const ranges = [];
      if (this.isIntersecting(otherRange)) {
        if (this.containsPosition(otherRange.start)) {
          ranges.push(new Range2(this.start, otherRange.start));
        }
        if (this.containsPosition(otherRange.end)) {
          ranges.push(new Range2(otherRange.end, this.end));
        }
      } else {
        ranges.push(new Range2(this.start, this.end));
      }
      return ranges;
    }
    getIntersection(otherRange) {
      if (this.isIntersecting(otherRange)) {
        let commonRangeStart = this.start;
        let commonRangeEnd = this.end;
        if (this.containsPosition(otherRange.start)) {
          commonRangeStart = otherRange.start;
        }
        if (this.containsPosition(otherRange.end)) {
          commonRangeEnd = otherRange.end;
        }
        return new Range2(commonRangeStart, commonRangeEnd);
      }
      return null;
    }
    getJoined(otherRange, loose = false) {
      let shouldJoin = this.isIntersecting(otherRange);
      if (!shouldJoin) {
        if (this.start.isBefore(otherRange.start)) {
          shouldJoin = loose ? this.end.isTouching(otherRange.start) : this.end.isEqual(otherRange.start);
        } else {
          shouldJoin = loose ? otherRange.end.isTouching(this.start) : otherRange.end.isEqual(this.start);
        }
      }
      if (!shouldJoin) {
        return null;
      }
      let startPosition = this.start;
      let endPosition = this.end;
      if (otherRange.start.isBefore(startPosition)) {
        startPosition = otherRange.start;
      }
      if (otherRange.end.isAfter(endPosition)) {
        endPosition = otherRange.end;
      }
      return new Range2(startPosition, endPosition);
    }
    getMinimalFlatRanges() {
      const ranges = [];
      const diffAt = this.start.getCommonPath(this.end).length;
      const pos = position_default2._createAt(this.start);
      let posParent = pos.parent;
      while (pos.path.length > diffAt + 1) {
        const howMany = posParent.maxOffset - pos.offset;
        if (howMany !== 0) {
          ranges.push(new Range2(pos, pos.getShiftedBy(howMany)));
        }
        pos.path = pos.path.slice(0, -1);
        pos.offset++;
        posParent = posParent.parent;
      }
      while (pos.path.length <= this.end.path.length) {
        const offset = this.end.path[pos.path.length - 1];
        const howMany = offset - pos.offset;
        if (howMany !== 0) {
          ranges.push(new Range2(pos, pos.getShiftedBy(howMany)));
        }
        pos.offset = offset;
        pos.path.push(0);
      }
      return ranges;
    }
    getWalker(options = {}) {
      options.boundaries = this;
      return new treewalker_default2(options);
    }
    *getItems(options = {}) {
      options.boundaries = this;
      options.ignoreElementEnd = true;
      const treeWalker = new treewalker_default2(options);
      for (const value of treeWalker) {
        yield value.item;
      }
    }
    *getPositions(options = {}) {
      options.boundaries = this;
      const treeWalker = new treewalker_default2(options);
      yield treeWalker.position;
      for (const value of treeWalker) {
        yield value.nextPosition;
      }
    }
    getTransformedByOperation(operation12) {
      switch (operation12.type) {
        case "insert":
          return this._getTransformedByInsertOperation(operation12);
        case "move":
        case "remove":
        case "reinsert":
          return this._getTransformedByMoveOperation(operation12);
        case "split":
          return [this._getTransformedBySplitOperation(operation12)];
        case "merge":
          return [this._getTransformedByMergeOperation(operation12)];
      }
      return [new Range2(this.start, this.end)];
    }
    getTransformedByOperations(operations2) {
      const ranges = [new Range2(this.start, this.end)];
      for (const operation12 of operations2) {
        for (let i = 0; i < ranges.length; i++) {
          const result = ranges[i].getTransformedByOperation(operation12);
          ranges.splice(i, 1, ...result);
          i += result.length - 1;
        }
      }
      for (let i = 0; i < ranges.length; i++) {
        const range29 = ranges[i];
        for (let j = i + 1; j < ranges.length; j++) {
          const next = ranges[j];
          if (range29.containsRange(next) || next.containsRange(range29) || range29.isEqual(next)) {
            ranges.splice(j, 1);
          }
        }
      }
      return ranges;
    }
    getCommonAncestor() {
      return this.start.getCommonAncestor(this.end);
    }
    getContainedElement() {
      if (this.isCollapsed) {
        return null;
      }
      const nodeAfterStart = this.start.nodeAfter;
      const nodeBeforeEnd = this.end.nodeBefore;
      if (nodeAfterStart && nodeAfterStart.is("element") && nodeAfterStart === nodeBeforeEnd) {
        return nodeAfterStart;
      }
      return null;
    }
    toJSON() {
      return {
        start: this.start.toJSON(),
        end: this.end.toJSON()
      };
    }
    clone() {
      return new this.constructor(this.start, this.end);
    }
    _getTransformedByInsertOperation(operation12, spread = false) {
      return this._getTransformedByInsertion(operation12.position, operation12.howMany, spread);
    }
    _getTransformedByMoveOperation(operation12, spread = false) {
      const sourcePosition = operation12.sourcePosition;
      const howMany = operation12.howMany;
      const targetPosition = operation12.targetPosition;
      return this._getTransformedByMove(sourcePosition, targetPosition, howMany, spread);
    }
    _getTransformedBySplitOperation(operation12) {
      const start = this.start._getTransformedBySplitOperation(operation12);
      let end = this.end._getTransformedBySplitOperation(operation12);
      if (this.end.isEqual(operation12.insertionPosition)) {
        end = this.end.getShiftedBy(1);
      }
      if (start.root != end.root) {
        end = this.end.getShiftedBy(-1);
      }
      return new Range2(start, end);
    }
    _getTransformedByMergeOperation(operation12) {
      if (this.start.isEqual(operation12.targetPosition) && this.end.isEqual(operation12.deletionPosition)) {
        return new Range2(this.start);
      }
      let start = this.start._getTransformedByMergeOperation(operation12);
      let end = this.end._getTransformedByMergeOperation(operation12);
      if (start.root != end.root) {
        end = this.end.getShiftedBy(-1);
      }
      if (start.isAfter(end)) {
        if (operation12.sourcePosition.isBefore(operation12.targetPosition)) {
          start = position_default2._createAt(end);
          start.offset = 0;
        } else {
          if (!operation12.deletionPosition.isEqual(start)) {
            end = operation12.deletionPosition;
          }
          start = operation12.targetPosition;
        }
        return new Range2(start, end);
      }
      return new Range2(start, end);
    }
    _getTransformedByInsertion(insertPosition, howMany, spread = false) {
      if (spread && this.containsPosition(insertPosition)) {
        return [
          new Range2(this.start, insertPosition),
          new Range2(insertPosition.getShiftedBy(howMany), this.end._getTransformedByInsertion(insertPosition, howMany))
        ];
      } else {
        const range29 = new Range2(this.start, this.end);
        range29.start = range29.start._getTransformedByInsertion(insertPosition, howMany);
        range29.end = range29.end._getTransformedByInsertion(insertPosition, howMany);
        return [range29];
      }
    }
    _getTransformedByMove(sourcePosition, targetPosition, howMany, spread = false) {
      if (this.isCollapsed) {
        const newPos = this.start._getTransformedByMove(sourcePosition, targetPosition, howMany);
        return [new Range2(newPos)];
      }
      const moveRange = Range2._createFromPositionAndShift(sourcePosition, howMany);
      const insertPosition = targetPosition._getTransformedByDeletion(sourcePosition, howMany);
      if (this.containsPosition(targetPosition) && !spread) {
        if (moveRange.containsPosition(this.start) || moveRange.containsPosition(this.end)) {
          const start = this.start._getTransformedByMove(sourcePosition, targetPosition, howMany);
          const end = this.end._getTransformedByMove(sourcePosition, targetPosition, howMany);
          return [new Range2(start, end)];
        }
      }
      let result;
      const differenceSet = this.getDifference(moveRange);
      let difference = null;
      const common = this.getIntersection(moveRange);
      if (differenceSet.length == 1) {
        difference = new Range2(differenceSet[0].start._getTransformedByDeletion(sourcePosition, howMany), differenceSet[0].end._getTransformedByDeletion(sourcePosition, howMany));
      } else if (differenceSet.length == 2) {
        difference = new Range2(this.start, this.end._getTransformedByDeletion(sourcePosition, howMany));
      }
      if (difference) {
        result = difference._getTransformedByInsertion(insertPosition, howMany, common !== null || spread);
      } else {
        result = [];
      }
      if (common) {
        const transformedCommon = new Range2(common.start._getCombined(moveRange.start, insertPosition), common.end._getCombined(moveRange.start, insertPosition));
        if (result.length == 2) {
          result.splice(1, 0, transformedCommon);
        } else {
          result.push(transformedCommon);
        }
      }
      return result;
    }
    _getTransformedByDeletion(deletePosition, howMany) {
      let newStart = this.start._getTransformedByDeletion(deletePosition, howMany);
      let newEnd = this.end._getTransformedByDeletion(deletePosition, howMany);
      if (newStart == null && newEnd == null) {
        return null;
      }
      if (newStart == null) {
        newStart = deletePosition;
      }
      if (newEnd == null) {
        newEnd = deletePosition;
      }
      return new Range2(newStart, newEnd);
    }
    static _createFromPositionAndShift(position30, shift) {
      const start = position30;
      const end = position30.getShiftedBy(shift);
      return shift > 0 ? new this(start, end) : new this(end, start);
    }
    static _createIn(element18) {
      return new this(position_default2._createAt(element18, 0), position_default2._createAt(element18, element18.maxOffset));
    }
    static _createOn(item) {
      return this._createFromPositionAndShift(position_default2._createBefore(item), item.offsetSize);
    }
    static _createFromRanges(ranges) {
      if (ranges.length === 0) {
        throw new ckeditorerror_default("range-create-from-ranges-empty-array", null);
      } else if (ranges.length == 1) {
        return ranges[0].clone();
      }
      const ref = ranges[0];
      ranges.sort((a, b) => {
        return a.start.isAfter(b.start) ? 1 : -1;
      });
      const refIndex = ranges.indexOf(ref);
      const result = new this(ref.start, ref.end);
      if (refIndex > 0) {
        for (let i = refIndex - 1; true; i++) {
          if (ranges[i].end.isEqual(result.start)) {
            result.start = position_default2._createAt(ranges[i].start);
          } else {
            break;
          }
        }
      }
      for (let i = refIndex + 1; i < ranges.length; i++) {
        if (ranges[i].start.isEqual(result.end)) {
          result.end = position_default2._createAt(ranges[i].end);
        } else {
          break;
        }
      }
      return result;
    }
    static fromJSON(json, doc) {
      return new this(position_default2.fromJSON(json.start, doc), position_default2.fromJSON(json.end, doc));
    }
  };
  var range_default2 = Range2;

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/mapper.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Mapper = class {
    constructor() {
      this._modelToViewMapping = new WeakMap();
      this._viewToModelMapping = new WeakMap();
      this._viewToModelLengthCallbacks = new Map();
      this._markerNameToElements = new Map();
      this._elementToMarkerNames = new Map();
      this._unboundMarkerNames = new Set();
      this.on("modelToViewPosition", (evt, data) => {
        if (data.viewPosition) {
          return;
        }
        const viewContainer = this._modelToViewMapping.get(data.modelPosition.parent);
        data.viewPosition = this.findPositionIn(viewContainer, data.modelPosition.offset);
      }, {priority: "low"});
      this.on("viewToModelPosition", (evt, data) => {
        if (data.modelPosition) {
          return;
        }
        const viewBlock = this.findMappedViewAncestor(data.viewPosition);
        const modelParent = this._viewToModelMapping.get(viewBlock);
        const modelOffset = this._toModelOffset(data.viewPosition.parent, data.viewPosition.offset, viewBlock);
        data.modelPosition = position_default2._createAt(modelParent, modelOffset);
      }, {priority: "low"});
    }
    bindElements(modelElement, viewElement) {
      this._modelToViewMapping.set(modelElement, viewElement);
      this._viewToModelMapping.set(viewElement, modelElement);
    }
    unbindViewElement(viewElement) {
      const modelElement = this.toModelElement(viewElement);
      this._viewToModelMapping.delete(viewElement);
      if (this._elementToMarkerNames.has(viewElement)) {
        for (const markerName of this._elementToMarkerNames.get(viewElement)) {
          this._unboundMarkerNames.add(markerName);
        }
      }
      if (this._modelToViewMapping.get(modelElement) == viewElement) {
        this._modelToViewMapping.delete(modelElement);
      }
    }
    unbindModelElement(modelElement) {
      const viewElement = this.toViewElement(modelElement);
      this._modelToViewMapping.delete(modelElement);
      if (this._viewToModelMapping.get(viewElement) == modelElement) {
        this._viewToModelMapping.delete(viewElement);
      }
    }
    bindElementToMarker(element18, name) {
      const elements = this._markerNameToElements.get(name) || new Set();
      elements.add(element18);
      const names = this._elementToMarkerNames.get(element18) || new Set();
      names.add(name);
      this._markerNameToElements.set(name, elements);
      this._elementToMarkerNames.set(element18, names);
    }
    unbindElementFromMarkerName(element18, name) {
      const nameToElements = this._markerNameToElements.get(name);
      if (nameToElements) {
        nameToElements.delete(element18);
        if (nameToElements.size == 0) {
          this._markerNameToElements.delete(name);
        }
      }
      const elementToNames = this._elementToMarkerNames.get(element18);
      if (elementToNames) {
        elementToNames.delete(name);
        if (elementToNames.size == 0) {
          this._elementToMarkerNames.delete(element18);
        }
      }
    }
    flushUnboundMarkerNames() {
      const markerNames = Array.from(this._unboundMarkerNames);
      this._unboundMarkerNames.clear();
      return markerNames;
    }
    clearBindings() {
      this._modelToViewMapping = new WeakMap();
      this._viewToModelMapping = new WeakMap();
      this._markerNameToElements = new Map();
      this._elementToMarkerNames = new Map();
      this._unboundMarkerNames = new Set();
    }
    toModelElement(viewElement) {
      return this._viewToModelMapping.get(viewElement);
    }
    toViewElement(modelElement) {
      return this._modelToViewMapping.get(modelElement);
    }
    toModelRange(viewRange) {
      return new range_default2(this.toModelPosition(viewRange.start), this.toModelPosition(viewRange.end));
    }
    toViewRange(modelRange) {
      return new range_default(this.toViewPosition(modelRange.start), this.toViewPosition(modelRange.end));
    }
    toModelPosition(viewPosition) {
      const data = {
        viewPosition,
        mapper: this
      };
      this.fire("viewToModelPosition", data);
      return data.modelPosition;
    }
    toViewPosition(modelPosition, options = {isPhantom: false}) {
      const data = {
        modelPosition,
        mapper: this,
        isPhantom: options.isPhantom
      };
      this.fire("modelToViewPosition", data);
      return data.viewPosition;
    }
    markerNameToElements(name) {
      const boundElements = this._markerNameToElements.get(name);
      if (!boundElements) {
        return null;
      }
      const elements = new Set();
      for (const element18 of boundElements) {
        if (element18.is("attributeElement")) {
          for (const clone3 of element18.getElementsWithSameId()) {
            elements.add(clone3);
          }
        } else {
          elements.add(element18);
        }
      }
      return elements;
    }
    registerViewToModelLength(viewElementName, lengthCallback) {
      this._viewToModelLengthCallbacks.set(viewElementName, lengthCallback);
    }
    findMappedViewAncestor(viewPosition) {
      let parent3 = viewPosition.parent;
      while (!this._viewToModelMapping.has(parent3)) {
        parent3 = parent3.parent;
      }
      return parent3;
    }
    _toModelOffset(viewParent, viewOffset, viewBlock) {
      if (viewBlock != viewParent) {
        const offsetToParentStart = this._toModelOffset(viewParent.parent, viewParent.index, viewBlock);
        const offsetInParent = this._toModelOffset(viewParent, viewOffset, viewParent);
        return offsetToParentStart + offsetInParent;
      }
      if (viewParent.is("$text")) {
        return viewOffset;
      }
      let modelOffset = 0;
      for (let i = 0; i < viewOffset; i++) {
        modelOffset += this.getModelLength(viewParent.getChild(i));
      }
      return modelOffset;
    }
    getModelLength(viewNode) {
      if (this._viewToModelLengthCallbacks.get(viewNode.name)) {
        const callback = this._viewToModelLengthCallbacks.get(viewNode.name);
        return callback(viewNode);
      } else if (this._viewToModelMapping.has(viewNode)) {
        return 1;
      } else if (viewNode.is("$text")) {
        return viewNode.data.length;
      } else if (viewNode.is("uiElement")) {
        return 0;
      } else {
        let len = 0;
        for (const child of viewNode.getChildren()) {
          len += this.getModelLength(child);
        }
        return len;
      }
    }
    findPositionIn(viewParent, expectedOffset) {
      let viewNode;
      let lastLength = 0;
      let modelOffset = 0;
      let viewOffset = 0;
      if (viewParent.is("$text")) {
        return new position_default(viewParent, expectedOffset);
      }
      while (modelOffset < expectedOffset) {
        viewNode = viewParent.getChild(viewOffset);
        lastLength = this.getModelLength(viewNode);
        modelOffset += lastLength;
        viewOffset++;
      }
      if (modelOffset == expectedOffset) {
        return this._moveViewPositionToTextNode(new position_default(viewParent, viewOffset));
      } else {
        return this.findPositionIn(viewNode, expectedOffset - (modelOffset - lastLength));
      }
    }
    _moveViewPositionToTextNode(viewPosition) {
      const nodeBefore = viewPosition.nodeBefore;
      const nodeAfter = viewPosition.nodeAfter;
      if (nodeBefore instanceof text_default) {
        return new position_default(nodeBefore, nodeBefore.data.length);
      } else if (nodeAfter instanceof text_default) {
        return new position_default(nodeAfter, 0);
      }
      return viewPosition;
    }
  };
  var mapper_default = Mapper;
  mix(Mapper, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/modelconsumable.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ModelConsumable = class {
    constructor() {
      this._consumable = new Map();
      this._textProxyRegistry = new Map();
    }
    add(item, type) {
      type = _normalizeConsumableType(type);
      if (item instanceof textproxy_default2) {
        item = this._getSymbolForTextProxy(item);
      }
      if (!this._consumable.has(item)) {
        this._consumable.set(item, new Map());
      }
      this._consumable.get(item).set(type, true);
    }
    consume(item, type) {
      type = _normalizeConsumableType(type);
      if (item instanceof textproxy_default2) {
        item = this._getSymbolForTextProxy(item);
      }
      if (this.test(item, type)) {
        this._consumable.get(item).set(type, false);
        return true;
      } else {
        return false;
      }
    }
    test(item, type) {
      type = _normalizeConsumableType(type);
      if (item instanceof textproxy_default2) {
        item = this._getSymbolForTextProxy(item);
      }
      const itemConsumables = this._consumable.get(item);
      if (itemConsumables === void 0) {
        return null;
      }
      const value = itemConsumables.get(type);
      if (value === void 0) {
        return null;
      }
      return value;
    }
    revert(item, type) {
      type = _normalizeConsumableType(type);
      if (item instanceof textproxy_default2) {
        item = this._getSymbolForTextProxy(item);
      }
      const test = this.test(item, type);
      if (test === false) {
        this._consumable.get(item).set(type, true);
        return true;
      } else if (test === true) {
        return false;
      }
      return null;
    }
    _getSymbolForTextProxy(textProxy) {
      let symbol = null;
      const startMap = this._textProxyRegistry.get(textProxy.startOffset);
      if (startMap) {
        const endMap = startMap.get(textProxy.endOffset);
        if (endMap) {
          symbol = endMap.get(textProxy.parent);
        }
      }
      if (!symbol) {
        symbol = this._addSymbolForTextProxy(textProxy.startOffset, textProxy.endOffset, textProxy.parent);
      }
      return symbol;
    }
    _addSymbolForTextProxy(start, end, parent3) {
      const symbol = Symbol("textProxySymbol");
      let startMap, endMap;
      startMap = this._textProxyRegistry.get(start);
      if (!startMap) {
        startMap = new Map();
        this._textProxyRegistry.set(start, startMap);
      }
      endMap = startMap.get(end);
      if (!endMap) {
        endMap = new Map();
        startMap.set(end, endMap);
      }
      endMap.set(parent3, symbol);
      return symbol;
    }
  };
  var modelconsumable_default = ModelConsumable;
  function _normalizeConsumableType(type) {
    const parts = type.split(":");
    return parts.length > 1 ? parts[0] + ":" + parts[1] : parts[0];
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DowncastDispatcher = class {
    constructor(conversionApi) {
      this.conversionApi = Object.assign({dispatcher: this}, conversionApi);
      this._reconversionEventsMapping = new Map();
    }
    convertChanges(differ2, markers, writer2) {
      for (const change of differ2.getMarkersToRemove()) {
        this.convertMarkerRemove(change.name, change.range, writer2);
      }
      const changes = this._mapChangesWithAutomaticReconversion(differ2);
      for (const entry of changes) {
        if (entry.type === "insert") {
          this.convertInsert(range_default2._createFromPositionAndShift(entry.position, entry.length), writer2);
        } else if (entry.type === "remove") {
          this.convertRemove(entry.position, entry.length, entry.name, writer2);
        } else if (entry.type === "reconvert") {
          this.reconvertElement(entry.element, writer2);
        } else {
          this.convertAttribute(entry.range, entry.attributeKey, entry.attributeOldValue, entry.attributeNewValue, writer2);
        }
      }
      for (const markerName of this.conversionApi.mapper.flushUnboundMarkerNames()) {
        const markerRange = markers.get(markerName).getRange();
        this.convertMarkerRemove(markerName, markerRange, writer2);
        this.convertMarkerAdd(markerName, markerRange, writer2);
      }
      for (const change of differ2.getMarkersToAdd()) {
        this.convertMarkerAdd(change.name, change.range, writer2);
      }
    }
    convertInsert(range29, writer2) {
      this.conversionApi.writer = writer2;
      this.conversionApi.consumable = this._createInsertConsumable(range29);
      for (const data of Array.from(range29).map(walkerValueToEventData)) {
        this._convertInsertWithAttributes(data);
      }
      this._clearConversionApi();
    }
    convertRemove(position30, length, name, writer2) {
      this.conversionApi.writer = writer2;
      this.fire("remove:" + name, {position: position30, length}, this.conversionApi);
      this._clearConversionApi();
    }
    convertAttribute(range29, key, oldValue, newValue, writer2) {
      this.conversionApi.writer = writer2;
      this.conversionApi.consumable = this._createConsumableForRange(range29, `attribute:${key}`);
      for (const value of range29) {
        const item = value.item;
        const itemRange = range_default2._createFromPositionAndShift(value.previousPosition, value.length);
        const data = {
          item,
          range: itemRange,
          attributeKey: key,
          attributeOldValue: oldValue,
          attributeNewValue: newValue
        };
        this._testAndFire(`attribute:${key}`, data);
      }
      this._clearConversionApi();
    }
    reconvertElement(element18, writer2) {
      const elementRange = range_default2._createOn(element18);
      this.conversionApi.writer = writer2;
      this.conversionApi.consumable = this._createInsertConsumable(elementRange);
      const mapper3 = this.conversionApi.mapper;
      const currentView = mapper3.toViewElement(element18);
      writer2.remove(currentView);
      this._convertInsertWithAttributes({
        item: element18,
        range: elementRange
      });
      const convertedViewElement = mapper3.toViewElement(element18);
      for (const value of range_default2._createIn(element18)) {
        const {item} = value;
        const view19 = elementOrTextProxyToView(item, mapper3);
        if (view19) {
          if (view19.root !== convertedViewElement.root) {
            writer2.move(writer2.createRangeOn(view19), mapper3.toViewPosition(position_default2._createBefore(item)));
          }
        } else {
          this._convertInsertWithAttributes(walkerValueToEventData(value));
        }
      }
      mapper3.unbindViewElement(currentView);
      this._clearConversionApi();
    }
    convertSelection(selection11, markers, writer2) {
      const markersAtSelection = Array.from(markers.getMarkersAtPosition(selection11.getFirstPosition()));
      this.conversionApi.writer = writer2;
      this.conversionApi.consumable = this._createSelectionConsumable(selection11, markersAtSelection);
      this.fire("selection", {selection: selection11}, this.conversionApi);
      if (!selection11.isCollapsed) {
        return;
      }
      for (const marker of markersAtSelection) {
        const markerRange = marker.getRange();
        if (!shouldMarkerChangeBeConverted(selection11.getFirstPosition(), marker, this.conversionApi.mapper)) {
          continue;
        }
        const data = {
          item: selection11,
          markerName: marker.name,
          markerRange
        };
        if (this.conversionApi.consumable.test(selection11, "addMarker:" + marker.name)) {
          this.fire("addMarker:" + marker.name, data, this.conversionApi);
        }
      }
      for (const key of selection11.getAttributeKeys()) {
        const data = {
          item: selection11,
          range: selection11.getFirstRange(),
          attributeKey: key,
          attributeOldValue: null,
          attributeNewValue: selection11.getAttribute(key)
        };
        if (this.conversionApi.consumable.test(selection11, "attribute:" + data.attributeKey)) {
          this.fire("attribute:" + data.attributeKey + ":$text", data, this.conversionApi);
        }
      }
      this._clearConversionApi();
    }
    convertMarkerAdd(markerName, markerRange, writer2) {
      if (!markerRange.root.document || markerRange.root.rootName == "$graveyard") {
        return;
      }
      this.conversionApi.writer = writer2;
      const eventName = "addMarker:" + markerName;
      const consumable = new modelconsumable_default();
      consumable.add(markerRange, eventName);
      this.conversionApi.consumable = consumable;
      this.fire(eventName, {markerName, markerRange}, this.conversionApi);
      if (!consumable.test(markerRange, eventName)) {
        return;
      }
      this.conversionApi.consumable = this._createConsumableForRange(markerRange, eventName);
      for (const item of markerRange.getItems()) {
        if (!this.conversionApi.consumable.test(item, eventName)) {
          continue;
        }
        const data = {item, range: range_default2._createOn(item), markerName, markerRange};
        this.fire(eventName, data, this.conversionApi);
      }
      this._clearConversionApi();
    }
    convertMarkerRemove(markerName, markerRange, writer2) {
      if (!markerRange.root.document || markerRange.root.rootName == "$graveyard") {
        return;
      }
      this.conversionApi.writer = writer2;
      this.fire("removeMarker:" + markerName, {markerName, markerRange}, this.conversionApi);
      this._clearConversionApi();
    }
    _mapReconversionTriggerEvent(modelName, eventName) {
      this._reconversionEventsMapping.set(eventName, modelName);
    }
    _createInsertConsumable(range29) {
      const consumable = new modelconsumable_default();
      for (const value of range29) {
        const item = value.item;
        consumable.add(item, "insert");
        for (const key of item.getAttributeKeys()) {
          consumable.add(item, "attribute:" + key);
        }
      }
      return consumable;
    }
    _createConsumableForRange(range29, type) {
      const consumable = new modelconsumable_default();
      for (const item of range29.getItems()) {
        consumable.add(item, type);
      }
      return consumable;
    }
    _createSelectionConsumable(selection11, markers) {
      const consumable = new modelconsumable_default();
      consumable.add(selection11, "selection");
      for (const marker of markers) {
        consumable.add(selection11, "addMarker:" + marker.name);
      }
      for (const key of selection11.getAttributeKeys()) {
        consumable.add(selection11, "attribute:" + key);
      }
      return consumable;
    }
    _testAndFire(type, data) {
      if (!this.conversionApi.consumable.test(data.item, type)) {
        return;
      }
      this.fire(getEventName(type, data), data, this.conversionApi);
    }
    _clearConversionApi() {
      delete this.conversionApi.writer;
      delete this.conversionApi.consumable;
    }
    _convertInsertWithAttributes(data) {
      this._testAndFire("insert", data);
      for (const key of data.item.getAttributeKeys()) {
        data.attributeKey = key;
        data.attributeOldValue = null;
        data.attributeNewValue = data.item.getAttribute(key);
        this._testAndFire(`attribute:${key}`, data);
      }
    }
    _mapChangesWithAutomaticReconversion(differ2) {
      const itemsToReconvert = new Set();
      const updated = [];
      for (const entry of differ2.getChanges()) {
        const position30 = entry.position || entry.range.start;
        const positionParent = position30.parent;
        const textNode = getTextNodeAtPosition(position30, positionParent);
        if (textNode) {
          updated.push(entry);
          continue;
        }
        const element18 = entry.type === "attribute" ? getNodeAfterPosition(position30, positionParent, null) : positionParent;
        if (element18.is("$text")) {
          updated.push(entry);
          continue;
        }
        let eventName;
        if (entry.type === "attribute") {
          eventName = `attribute:${entry.attributeKey}:${element18.name}`;
        } else {
          eventName = `${entry.type}:${entry.name}`;
        }
        if (this._isReconvertTriggerEvent(eventName, element18.name)) {
          if (itemsToReconvert.has(element18)) {
            continue;
          }
          itemsToReconvert.add(element18);
          updated.push({type: "reconvert", element: element18});
        } else {
          updated.push(entry);
        }
      }
      return updated;
    }
    _isReconvertTriggerEvent(eventName, elementName) {
      return this._reconversionEventsMapping.get(eventName) === elementName;
    }
  };
  var downcastdispatcher_default = DowncastDispatcher;
  mix(DowncastDispatcher, emittermixin_default);
  function shouldMarkerChangeBeConverted(modelPosition, marker, mapper3) {
    const range29 = marker.getRange();
    const ancestors = Array.from(modelPosition.getAncestors());
    ancestors.shift();
    ancestors.reverse();
    const hasCustomHandling = ancestors.some((element18) => {
      if (range29.containsItem(element18)) {
        const viewElement = mapper3.toViewElement(element18);
        return !!viewElement.getCustomProperty("addHighlight");
      }
    });
    return !hasCustomHandling;
  }
  function getEventName(type, data) {
    const name = data.item.name || "$text";
    return `${type}:${name}`;
  }
  function walkerValueToEventData(value) {
    const item = value.item;
    const itemRange = range_default2._createFromPositionAndShift(value.previousPosition, value.length);
    return {
      item,
      range: itemRange
    };
  }
  function elementOrTextProxyToView(item, mapper3) {
    if (item.is("textProxy")) {
      const mappedPosition = mapper3.toViewPosition(position_default2._createBefore(item));
      const positionParent = mappedPosition.parent;
      return positionParent.is("$text") ? positionParent : null;
    }
    return mapper3.toViewElement(item);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/selection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Selection2 = class {
    constructor(selectable, placeOrOffset, options) {
      this._lastRangeBackward = false;
      this._ranges = [];
      this._attrs = new Map();
      if (selectable) {
        this.setTo(selectable, placeOrOffset, options);
      }
    }
    get anchor() {
      if (this._ranges.length > 0) {
        const range29 = this._ranges[this._ranges.length - 1];
        return this._lastRangeBackward ? range29.end : range29.start;
      }
      return null;
    }
    get focus() {
      if (this._ranges.length > 0) {
        const range29 = this._ranges[this._ranges.length - 1];
        return this._lastRangeBackward ? range29.start : range29.end;
      }
      return null;
    }
    get isCollapsed() {
      const length = this._ranges.length;
      if (length === 1) {
        return this._ranges[0].isCollapsed;
      } else {
        return false;
      }
    }
    get rangeCount() {
      return this._ranges.length;
    }
    get isBackward() {
      return !this.isCollapsed && this._lastRangeBackward;
    }
    isEqual(otherSelection) {
      if (this.rangeCount != otherSelection.rangeCount) {
        return false;
      } else if (this.rangeCount === 0) {
        return true;
      }
      if (!this.anchor.isEqual(otherSelection.anchor) || !this.focus.isEqual(otherSelection.focus)) {
        return false;
      }
      for (const thisRange of this._ranges) {
        let found = false;
        for (const otherRange of otherSelection._ranges) {
          if (thisRange.isEqual(otherRange)) {
            found = true;
            break;
          }
        }
        if (!found) {
          return false;
        }
      }
      return true;
    }
    *getRanges() {
      for (const range29 of this._ranges) {
        yield new range_default2(range29.start, range29.end);
      }
    }
    getFirstRange() {
      let first6 = null;
      for (const range29 of this._ranges) {
        if (!first6 || range29.start.isBefore(first6.start)) {
          first6 = range29;
        }
      }
      return first6 ? new range_default2(first6.start, first6.end) : null;
    }
    getLastRange() {
      let last3 = null;
      for (const range29 of this._ranges) {
        if (!last3 || range29.end.isAfter(last3.end)) {
          last3 = range29;
        }
      }
      return last3 ? new range_default2(last3.start, last3.end) : null;
    }
    getFirstPosition() {
      const first6 = this.getFirstRange();
      return first6 ? first6.start.clone() : null;
    }
    getLastPosition() {
      const lastRange = this.getLastRange();
      return lastRange ? lastRange.end.clone() : null;
    }
    setTo(selectable, placeOrOffset, options) {
      if (selectable === null) {
        this._setRanges([]);
      } else if (selectable instanceof Selection2) {
        this._setRanges(selectable.getRanges(), selectable.isBackward);
      } else if (selectable && typeof selectable.getRanges == "function") {
        this._setRanges(selectable.getRanges(), selectable.isBackward);
      } else if (selectable instanceof range_default2) {
        this._setRanges([selectable], !!placeOrOffset && !!placeOrOffset.backward);
      } else if (selectable instanceof position_default2) {
        this._setRanges([new range_default2(selectable)]);
      } else if (selectable instanceof node_default2) {
        const backward = !!options && !!options.backward;
        let range29;
        if (placeOrOffset == "in") {
          range29 = range_default2._createIn(selectable);
        } else if (placeOrOffset == "on") {
          range29 = range_default2._createOn(selectable);
        } else if (placeOrOffset !== void 0) {
          range29 = new range_default2(position_default2._createAt(selectable, placeOrOffset));
        } else {
          throw new ckeditorerror_default("model-selection-setto-required-second-parameter", [this, selectable]);
        }
        this._setRanges([range29], backward);
      } else if (isIterable(selectable)) {
        this._setRanges(selectable, placeOrOffset && !!placeOrOffset.backward);
      } else {
        throw new ckeditorerror_default("model-selection-setto-not-selectable", [this, selectable]);
      }
    }
    _setRanges(newRanges, isLastBackward = false) {
      newRanges = Array.from(newRanges);
      const anyNewRange = newRanges.some((newRange) => {
        if (!(newRange instanceof range_default2)) {
          throw new ckeditorerror_default("model-selection-set-ranges-not-range", [this, newRanges]);
        }
        return this._ranges.every((oldRange) => {
          return !oldRange.isEqual(newRange);
        });
      });
      if (newRanges.length === this._ranges.length && !anyNewRange) {
        return;
      }
      this._removeAllRanges();
      for (const range29 of newRanges) {
        this._pushRange(range29);
      }
      this._lastRangeBackward = !!isLastBackward;
      this.fire("change:range", {directChange: true});
    }
    setFocus(itemOrPosition, offset) {
      if (this.anchor === null) {
        throw new ckeditorerror_default("model-selection-setfocus-no-ranges", [this, itemOrPosition]);
      }
      const newFocus = position_default2._createAt(itemOrPosition, offset);
      if (newFocus.compareWith(this.focus) == "same") {
        return;
      }
      const anchor = this.anchor;
      if (this._ranges.length) {
        this._popRange();
      }
      if (newFocus.compareWith(anchor) == "before") {
        this._pushRange(new range_default2(newFocus, anchor));
        this._lastRangeBackward = true;
      } else {
        this._pushRange(new range_default2(anchor, newFocus));
        this._lastRangeBackward = false;
      }
      this.fire("change:range", {directChange: true});
    }
    getAttribute(key) {
      return this._attrs.get(key);
    }
    getAttributes() {
      return this._attrs.entries();
    }
    getAttributeKeys() {
      return this._attrs.keys();
    }
    hasAttribute(key) {
      return this._attrs.has(key);
    }
    removeAttribute(key) {
      if (this.hasAttribute(key)) {
        this._attrs.delete(key);
        this.fire("change:attribute", {attributeKeys: [key], directChange: true});
      }
    }
    setAttribute(key, value) {
      if (this.getAttribute(key) !== value) {
        this._attrs.set(key, value);
        this.fire("change:attribute", {attributeKeys: [key], directChange: true});
      }
    }
    getSelectedElement() {
      if (this.rangeCount !== 1) {
        return null;
      }
      return this.getFirstRange().getContainedElement();
    }
    is(type) {
      return type === "selection" || type === "model:selection";
    }
    *getSelectedBlocks() {
      const visited = new WeakSet();
      for (const range29 of this.getRanges()) {
        const startBlock = getParentBlock(range29.start, visited);
        if (startBlock && isTopBlockInRange(startBlock, range29)) {
          yield startBlock;
        }
        for (const value of range29.getWalker()) {
          const block = value.item;
          if (value.type == "elementEnd" && isUnvisitedTopBlock(block, visited, range29)) {
            yield block;
          }
        }
        const endBlock = getParentBlock(range29.end, visited);
        if (endBlock && !range29.end.isTouching(position_default2._createAt(endBlock, 0)) && isTopBlockInRange(endBlock, range29)) {
          yield endBlock;
        }
      }
    }
    containsEntireContent(element18 = this.anchor.root) {
      const limitStartPosition = position_default2._createAt(element18, 0);
      const limitEndPosition = position_default2._createAt(element18, "end");
      return limitStartPosition.isTouching(this.getFirstPosition()) && limitEndPosition.isTouching(this.getLastPosition());
    }
    _pushRange(range29) {
      this._checkRange(range29);
      this._ranges.push(new range_default2(range29.start, range29.end));
    }
    _checkRange(range29) {
      for (let i = 0; i < this._ranges.length; i++) {
        if (range29.isIntersecting(this._ranges[i])) {
          throw new ckeditorerror_default("model-selection-range-intersects", [this, range29], {addedRange: range29, intersectingRange: this._ranges[i]});
        }
      }
    }
    _removeAllRanges() {
      while (this._ranges.length > 0) {
        this._popRange();
      }
    }
    _popRange() {
      this._ranges.pop();
    }
  };
  var selection_default2 = Selection2;
  mix(Selection2, emittermixin_default);
  function isUnvisitedBlock(element18, visited) {
    if (visited.has(element18)) {
      return false;
    }
    visited.add(element18);
    return element18.root.document.model.schema.isBlock(element18) && element18.parent;
  }
  function isUnvisitedTopBlock(element18, visited, range29) {
    return isUnvisitedBlock(element18, visited) && isTopBlockInRange(element18, range29);
  }
  function getParentBlock(position30, visited) {
    const element18 = position30.parent;
    const schema3 = element18.root.document.model.schema;
    const ancestors = position30.parent.getAncestors({parentFirst: true, includeSelf: true});
    let hasParentLimit = false;
    const block = ancestors.find((element19) => {
      if (hasParentLimit) {
        return false;
      }
      hasParentLimit = schema3.isLimit(element19);
      return !hasParentLimit && isUnvisitedBlock(element19, visited);
    });
    ancestors.forEach((element19) => visited.add(element19));
    return block;
  }
  function isTopBlockInRange(block, range29) {
    const parentBlock = findAncestorBlock(block);
    if (!parentBlock) {
      return true;
    }
    const isParentInRange = range29.containsRange(range_default2._createOn(parentBlock), true);
    return !isParentInRange;
  }
  function findAncestorBlock(node12) {
    const schema3 = node12.root.document.model.schema;
    let parent3 = node12.parent;
    while (parent3) {
      if (schema3.isBlock(parent3)) {
        return parent3;
      }
      parent3 = parent3.parent;
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/liverange.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var LiveRange = class extends range_default2 {
    constructor(start, end) {
      super(start, end);
      bindWithDocument.call(this);
    }
    detach() {
      this.stopListening();
    }
    is(type) {
      return type === "liveRange" || type === "model:liveRange" || type == "range" || type === "model:range";
    }
    toRange() {
      return new range_default2(this.start, this.end);
    }
    static fromRange(range29) {
      return new LiveRange(range29.start, range29.end);
    }
  };
  var liverange_default = LiveRange;
  function bindWithDocument() {
    this.listenTo(this.root.document.model, "applyOperation", (event, args) => {
      const operation12 = args[0];
      if (!operation12.isDocumentOperation) {
        return;
      }
      transform.call(this, operation12);
    }, {priority: "low"});
  }
  function transform(operation12) {
    const ranges = this.getTransformedByOperation(operation12);
    const result = range_default2._createFromRanges(ranges);
    const boundariesChanged = !result.isEqual(this);
    const contentChanged = doesOperationChangeRangeContent(this, operation12);
    let deletionPosition = null;
    if (boundariesChanged) {
      if (result.root.rootName == "$graveyard") {
        if (operation12.type == "remove") {
          deletionPosition = operation12.sourcePosition;
        } else {
          deletionPosition = operation12.deletionPosition;
        }
      }
      const oldRange = this.toRange();
      this.start = result.start;
      this.end = result.end;
      this.fire("change:range", oldRange, {deletionPosition});
    } else if (contentChanged) {
      this.fire("change:content", this.toRange(), {deletionPosition});
    }
  }
  function doesOperationChangeRangeContent(range29, operation12) {
    switch (operation12.type) {
      case "insert":
        return range29.containsPosition(operation12.position);
      case "move":
      case "remove":
      case "reinsert":
      case "merge":
        return range29.containsPosition(operation12.sourcePosition) || range29.start.isEqual(operation12.sourcePosition) || range29.containsPosition(operation12.targetPosition);
      case "split":
        return range29.containsPosition(operation12.splitPosition) || range29.containsPosition(operation12.insertionPosition);
    }
    return false;
  }
  mix(LiveRange, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/model/documentselection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var storePrefix = "selection:";
  var DocumentSelection2 = class {
    constructor(doc) {
      this._selection = new LiveSelection(doc);
      this._selection.delegate("change:range").to(this);
      this._selection.delegate("change:attribute").to(this);
      this._selection.delegate("change:marker").to(this);
    }
    get isCollapsed() {
      return this._selection.isCollapsed;
    }
    get anchor() {
      return this._selection.anchor;
    }
    get focus() {
      return this._selection.focus;
    }
    get rangeCount() {
      return this._selection.rangeCount;
    }
    get hasOwnRange() {
      return this._selection.hasOwnRange;
    }
    get isBackward() {
      return this._selection.isBackward;
    }
    get isGravityOverridden() {
      return this._selection.isGravityOverridden;
    }
    get markers() {
      return this._selection.markers;
    }
    get _ranges() {
      return this._selection._ranges;
    }
    getRanges() {
      return this._selection.getRanges();
    }
    getFirstPosition() {
      return this._selection.getFirstPosition();
    }
    getLastPosition() {
      return this._selection.getLastPosition();
    }
    getFirstRange() {
      return this._selection.getFirstRange();
    }
    getLastRange() {
      return this._selection.getLastRange();
    }
    getSelectedBlocks() {
      return this._selection.getSelectedBlocks();
    }
    getSelectedElement() {
      return this._selection.getSelectedElement();
    }
    containsEntireContent(element18) {
      return this._selection.containsEntireContent(element18);
    }
    destroy() {
      this._selection.destroy();
    }
    getAttributeKeys() {
      return this._selection.getAttributeKeys();
    }
    getAttributes() {
      return this._selection.getAttributes();
    }
    getAttribute(key) {
      return this._selection.getAttribute(key);
    }
    hasAttribute(key) {
      return this._selection.hasAttribute(key);
    }
    refresh() {
      this._selection._updateMarkers();
      this._selection._updateAttributes(false);
    }
    observeMarkers(prefixOrName) {
      this._selection.observeMarkers(prefixOrName);
    }
    is(type) {
      return type === "selection" || type == "model:selection" || type == "documentSelection" || type == "model:documentSelection";
    }
    _setFocus(itemOrPosition, offset) {
      this._selection.setFocus(itemOrPosition, offset);
    }
    _setTo(selectable, placeOrOffset, options) {
      this._selection.setTo(selectable, placeOrOffset, options);
    }
    _setAttribute(key, value) {
      this._selection.setAttribute(key, value);
    }
    _removeAttribute(key) {
      this._selection.removeAttribute(key);
    }
    _getStoredAttributes() {
      return this._selection._getStoredAttributes();
    }
    _overrideGravity() {
      return this._selection.overrideGravity();
    }
    _restoreGravity(uid8) {
      this._selection.restoreGravity(uid8);
    }
    static _getStoreAttributeKey(key) {
      return storePrefix + key;
    }
    static _isStoreAttributeKey(key) {
      return key.startsWith(storePrefix);
    }
  };
  var documentselection_default2 = DocumentSelection2;
  mix(DocumentSelection2, emittermixin_default);
  var LiveSelection = class extends selection_default2 {
    constructor(doc) {
      super();
      this.markers = new collection_default({idProperty: "name"});
      this._model = doc.model;
      this._document = doc;
      this._attributePriority = new Map();
      this._selectionRestorePosition = null;
      this._hasChangedRange = false;
      this._overriddenGravityRegister = new Set();
      this._observedMarkers = new Set();
      this.listenTo(this._model, "applyOperation", (evt, args) => {
        const operation12 = args[0];
        if (!operation12.isDocumentOperation || operation12.type == "marker" || operation12.type == "rename" || operation12.type == "noop") {
          return;
        }
        if (this._ranges.length == 0 && this._selectionRestorePosition) {
          this._fixGraveyardSelection(this._selectionRestorePosition);
        }
        this._selectionRestorePosition = null;
        if (this._hasChangedRange) {
          this._hasChangedRange = false;
          this.fire("change:range", {directChange: false});
        }
      }, {priority: "lowest"});
      this.on("change:range", () => {
        for (const range29 of this.getRanges()) {
          if (!this._document._validateSelectionRange(range29)) {
            throw new ckeditorerror_default("document-selection-wrong-position", this, {range: range29});
          }
        }
      });
      this.listenTo(this._model.markers, "update", (evt, marker, oldRange, newRange) => {
        this._updateMarker(marker, newRange);
      });
      this.listenTo(this._document, "change", (evt, batch2) => {
        clearAttributesStoredInElement(this._model, batch2);
      });
    }
    get isCollapsed() {
      const length = this._ranges.length;
      return length === 0 ? this._document._getDefaultRange().isCollapsed : super.isCollapsed;
    }
    get anchor() {
      return super.anchor || this._document._getDefaultRange().start;
    }
    get focus() {
      return super.focus || this._document._getDefaultRange().end;
    }
    get rangeCount() {
      return this._ranges.length ? this._ranges.length : 1;
    }
    get hasOwnRange() {
      return this._ranges.length > 0;
    }
    get isGravityOverridden() {
      return !!this._overriddenGravityRegister.size;
    }
    destroy() {
      for (let i = 0; i < this._ranges.length; i++) {
        this._ranges[i].detach();
      }
      this.stopListening();
    }
    *getRanges() {
      if (this._ranges.length) {
        yield* super.getRanges();
      } else {
        yield this._document._getDefaultRange();
      }
    }
    getFirstRange() {
      return super.getFirstRange() || this._document._getDefaultRange();
    }
    getLastRange() {
      return super.getLastRange() || this._document._getDefaultRange();
    }
    setTo(selectable, optionsOrPlaceOrOffset, options) {
      super.setTo(selectable, optionsOrPlaceOrOffset, options);
      this._updateAttributes(true);
      this._updateMarkers();
    }
    setFocus(itemOrPosition, offset) {
      super.setFocus(itemOrPosition, offset);
      this._updateAttributes(true);
      this._updateMarkers();
    }
    setAttribute(key, value) {
      if (this._setAttribute(key, value)) {
        const attributeKeys = [key];
        this.fire("change:attribute", {attributeKeys, directChange: true});
      }
    }
    removeAttribute(key) {
      if (this._removeAttribute(key)) {
        const attributeKeys = [key];
        this.fire("change:attribute", {attributeKeys, directChange: true});
      }
    }
    overrideGravity() {
      const overrideUid = uid();
      this._overriddenGravityRegister.add(overrideUid);
      if (this._overriddenGravityRegister.size === 1) {
        this._updateAttributes(true);
      }
      return overrideUid;
    }
    restoreGravity(uid8) {
      if (!this._overriddenGravityRegister.has(uid8)) {
        throw new ckeditorerror_default("document-selection-gravity-wrong-restore", this, {uid: uid8});
      }
      this._overriddenGravityRegister.delete(uid8);
      if (!this.isGravityOverridden) {
        this._updateAttributes(true);
      }
    }
    observeMarkers(prefixOrName) {
      this._observedMarkers.add(prefixOrName);
      this._updateMarkers();
    }
    _popRange() {
      this._ranges.pop().detach();
    }
    _pushRange(range29) {
      const liveRange = this._prepareRange(range29);
      if (liveRange) {
        this._ranges.push(liveRange);
      }
    }
    _prepareRange(range29) {
      this._checkRange(range29);
      if (range29.root == this._document.graveyard) {
        return;
      }
      const liveRange = liverange_default.fromRange(range29);
      liveRange.on("change:range", (evt, oldRange, data) => {
        this._hasChangedRange = true;
        if (liveRange.root == this._document.graveyard) {
          this._selectionRestorePosition = data.deletionPosition;
          const index = this._ranges.indexOf(liveRange);
          this._ranges.splice(index, 1);
          liveRange.detach();
        }
      });
      return liveRange;
    }
    _updateMarkers() {
      if (!this._observedMarkers.size) {
        return;
      }
      const markers = [];
      let changed = false;
      for (const marker of this._model.markers) {
        const markerGroup = marker.name.split(":", 1)[0];
        if (!this._observedMarkers.has(markerGroup)) {
          continue;
        }
        const markerRange = marker.getRange();
        for (const selectionRange of this.getRanges()) {
          if (markerRange.containsRange(selectionRange, !selectionRange.isCollapsed)) {
            markers.push(marker);
          }
        }
      }
      const oldMarkers = Array.from(this.markers);
      for (const marker of markers) {
        if (!this.markers.has(marker)) {
          this.markers.add(marker);
          changed = true;
        }
      }
      for (const marker of Array.from(this.markers)) {
        if (!markers.includes(marker)) {
          this.markers.remove(marker);
          changed = true;
        }
      }
      if (changed) {
        this.fire("change:marker", {oldMarkers, directChange: false});
      }
    }
    _updateMarker(marker, markerRange) {
      const markerGroup = marker.name.split(":", 1)[0];
      if (!this._observedMarkers.has(markerGroup)) {
        return;
      }
      let changed = false;
      const oldMarkers = Array.from(this.markers);
      const hasMarker = this.markers.has(marker);
      if (!markerRange) {
        if (hasMarker) {
          this.markers.remove(marker);
          changed = true;
        }
      } else {
        let contained = false;
        for (const selectionRange of this.getRanges()) {
          if (markerRange.containsRange(selectionRange, !selectionRange.isCollapsed)) {
            contained = true;
            break;
          }
        }
        if (contained && !hasMarker) {
          this.markers.add(marker);
          changed = true;
        } else if (!contained && hasMarker) {
          this.markers.remove(marker);
          changed = true;
        }
      }
      if (changed) {
        this.fire("change:marker", {oldMarkers, directChange: false});
      }
    }
    _updateAttributes(clearAll) {
      const newAttributes = toMap(this._getSurroundingAttributes());
      const oldAttributes = toMap(this.getAttributes());
      if (clearAll) {
        this._attributePriority = new Map();
        this._attrs = new Map();
      } else {
        for (const [key, priority] of this._attributePriority) {
          if (priority == "low") {
            this._attrs.delete(key);
            this._attributePriority.delete(key);
          }
        }
      }
      this._setAttributesTo(newAttributes);
      const changed = [];
      for (const [newKey, newValue] of this.getAttributes()) {
        if (!oldAttributes.has(newKey) || oldAttributes.get(newKey) !== newValue) {
          changed.push(newKey);
        }
      }
      for (const [oldKey] of oldAttributes) {
        if (!this.hasAttribute(oldKey)) {
          changed.push(oldKey);
        }
      }
      if (changed.length > 0) {
        this.fire("change:attribute", {attributeKeys: changed, directChange: false});
      }
    }
    _setAttribute(key, value, directChange = true) {
      const priority = directChange ? "normal" : "low";
      if (priority == "low" && this._attributePriority.get(key) == "normal") {
        return false;
      }
      const oldValue = super.getAttribute(key);
      if (oldValue === value) {
        return false;
      }
      this._attrs.set(key, value);
      this._attributePriority.set(key, priority);
      return true;
    }
    _removeAttribute(key, directChange = true) {
      const priority = directChange ? "normal" : "low";
      if (priority == "low" && this._attributePriority.get(key) == "normal") {
        return false;
      }
      this._attributePriority.set(key, priority);
      if (!super.hasAttribute(key)) {
        return false;
      }
      this._attrs.delete(key);
      return true;
    }
    _setAttributesTo(attrs) {
      const changed = new Set();
      for (const [oldKey, oldValue] of this.getAttributes()) {
        if (attrs.get(oldKey) === oldValue) {
          continue;
        }
        this._removeAttribute(oldKey, false);
      }
      for (const [key, value] of attrs) {
        const gotAdded = this._setAttribute(key, value, false);
        if (gotAdded) {
          changed.add(key);
        }
      }
      return changed;
    }
    *_getStoredAttributes() {
      const selectionParent = this.getFirstPosition().parent;
      if (this.isCollapsed && selectionParent.isEmpty) {
        for (const key of selectionParent.getAttributeKeys()) {
          if (key.startsWith(storePrefix)) {
            const realKey = key.substr(storePrefix.length);
            yield [realKey, selectionParent.getAttribute(key)];
          }
        }
      }
    }
    _getSurroundingAttributes() {
      const position30 = this.getFirstPosition();
      const schema3 = this._model.schema;
      let attrs = null;
      if (!this.isCollapsed) {
        const range29 = this.getFirstRange();
        for (const value of range29) {
          if (value.item.is("element") && schema3.isObject(value.item)) {
            break;
          }
          if (value.type == "text") {
            attrs = value.item.getAttributes();
            break;
          }
        }
      } else {
        const nodeBefore = position30.textNode ? position30.textNode : position30.nodeBefore;
        const nodeAfter = position30.textNode ? position30.textNode : position30.nodeAfter;
        if (!this.isGravityOverridden) {
          attrs = getAttrsIfCharacter(nodeBefore);
        }
        if (!attrs) {
          attrs = getAttrsIfCharacter(nodeAfter);
        }
        if (!this.isGravityOverridden && !attrs) {
          let node12 = nodeBefore;
          while (node12 && !schema3.isInline(node12) && !attrs) {
            node12 = node12.previousSibling;
            attrs = getAttrsIfCharacter(node12);
          }
        }
        if (!attrs) {
          let node12 = nodeAfter;
          while (node12 && !schema3.isInline(node12) && !attrs) {
            node12 = node12.nextSibling;
            attrs = getAttrsIfCharacter(node12);
          }
        }
        if (!attrs) {
          attrs = this._getStoredAttributes();
        }
      }
      return attrs;
    }
    _fixGraveyardSelection(deletionPosition) {
      const selectionRange = this._model.schema.getNearestSelectionRange(deletionPosition);
      if (selectionRange) {
        this._pushRange(selectionRange);
      }
    }
  };
  function getAttrsIfCharacter(node12) {
    if (node12 instanceof textproxy_default2 || node12 instanceof text_default2) {
      return node12.getAttributes();
    }
    return null;
  }
  function clearAttributesStoredInElement(model3, batch2) {
    const differ2 = model3.document.differ;
    for (const entry of differ2.getChanges()) {
      if (entry.type != "insert") {
        continue;
      }
      const changeParent = entry.position.parent;
      const isNoLongerEmpty = entry.length === changeParent.maxOffset;
      if (isNoLongerEmpty) {
        model3.enqueueChange(batch2, (writer2) => {
          const storedAttributes = Array.from(changeParent.getAttributeKeys()).filter((key) => key.startsWith(storePrefix));
          for (const key of storedAttributes) {
            writer2.removeAttribute(key, changeParent);
          }
        });
      }
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/conversionhelpers.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ConversionHelpers = class {
    constructor(dispatchers) {
      this._dispatchers = dispatchers;
    }
    add(conversionHelper) {
      for (const dispatcher of this._dispatchers) {
        conversionHelper(dispatcher);
      }
      return this;
    }
  };
  var conversionhelpers_default = ConversionHelpers;

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/downcasthelpers.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DowncastHelpers = class extends conversionhelpers_default {
    elementToElement(config3) {
      return this.add(downcastElementToElement(config3));
    }
    attributeToElement(config3) {
      return this.add(downcastAttributeToElement(config3));
    }
    attributeToAttribute(config3) {
      return this.add(downcastAttributeToAttribute(config3));
    }
    markerToElement(config3) {
      return this.add(downcastMarkerToElement(config3));
    }
    markerToHighlight(config3) {
      return this.add(downcastMarkerToHighlight(config3));
    }
    markerToData(config3) {
      return this.add(downcastMarkerToData(config3));
    }
  };
  var downcasthelpers_default = DowncastHelpers;
  function insertText() {
    return (evt, data, conversionApi) => {
      if (!conversionApi.consumable.consume(data.item, "insert")) {
        return;
      }
      const viewWriter = conversionApi.writer;
      const viewPosition = conversionApi.mapper.toViewPosition(data.range.start);
      const viewText = viewWriter.createText(data.item.data);
      viewWriter.insert(viewPosition, viewText);
    };
  }
  function remove3() {
    return (evt, data, conversionApi) => {
      const viewStart = conversionApi.mapper.toViewPosition(data.position);
      const modelEnd = data.position.getShiftedBy(data.length);
      const viewEnd = conversionApi.mapper.toViewPosition(modelEnd, {isPhantom: true});
      const viewRange = conversionApi.writer.createRange(viewStart, viewEnd);
      const removed = conversionApi.writer.remove(viewRange.getTrimmed());
      for (const child of conversionApi.writer.createRangeIn(removed).getItems()) {
        conversionApi.mapper.unbindViewElement(child);
      }
    };
  }
  function createViewElementFromHighlightDescriptor(writer2, descriptor) {
    const viewElement = writer2.createAttributeElement("span", descriptor.attributes);
    if (descriptor.classes) {
      viewElement._addClass(descriptor.classes);
    }
    if (descriptor.priority) {
      viewElement._priority = descriptor.priority;
    }
    viewElement._id = descriptor.id;
    return viewElement;
  }
  function convertRangeSelection() {
    return (evt, data, conversionApi) => {
      const selection11 = data.selection;
      if (selection11.isCollapsed) {
        return;
      }
      if (!conversionApi.consumable.consume(selection11, "selection")) {
        return;
      }
      const viewRanges = [];
      for (const range29 of selection11.getRanges()) {
        const viewRange = conversionApi.mapper.toViewRange(range29);
        viewRanges.push(viewRange);
      }
      conversionApi.writer.setSelection(viewRanges, {backward: selection11.isBackward});
    };
  }
  function convertCollapsedSelection() {
    return (evt, data, conversionApi) => {
      const selection11 = data.selection;
      if (!selection11.isCollapsed) {
        return;
      }
      if (!conversionApi.consumable.consume(selection11, "selection")) {
        return;
      }
      const viewWriter = conversionApi.writer;
      const modelPosition = selection11.getFirstPosition();
      const viewPosition = conversionApi.mapper.toViewPosition(modelPosition);
      const brokenPosition = viewWriter.breakAttributes(viewPosition);
      viewWriter.setSelection(brokenPosition);
    };
  }
  function clearAttributes() {
    return (evt, data, conversionApi) => {
      const viewWriter = conversionApi.writer;
      const viewSelection = viewWriter.document.selection;
      for (const range29 of viewSelection.getRanges()) {
        if (range29.isCollapsed) {
          if (range29.end.parent.isAttached()) {
            conversionApi.writer.mergeAttributes(range29.start);
          }
        }
      }
      viewWriter.setSelection(null);
    };
  }
  function wrap(elementCreator) {
    return (evt, data, conversionApi) => {
      const oldViewElement = elementCreator(data.attributeOldValue, conversionApi);
      const newViewElement = elementCreator(data.attributeNewValue, conversionApi);
      if (!oldViewElement && !newViewElement) {
        return;
      }
      if (!conversionApi.consumable.consume(data.item, evt.name)) {
        return;
      }
      const viewWriter = conversionApi.writer;
      const viewSelection = viewWriter.document.selection;
      if (data.item instanceof selection_default2 || data.item instanceof documentselection_default2) {
        viewWriter.wrap(viewSelection.getFirstRange(), newViewElement);
      } else {
        let viewRange = conversionApi.mapper.toViewRange(data.range);
        if (data.attributeOldValue !== null && oldViewElement) {
          viewRange = viewWriter.unwrap(viewRange, oldViewElement);
        }
        if (data.attributeNewValue !== null && newViewElement) {
          viewWriter.wrap(viewRange, newViewElement);
        }
      }
    };
  }
  function insertElement(elementCreator) {
    return (evt, data, conversionApi) => {
      const viewElement = elementCreator(data.item, conversionApi);
      if (!viewElement) {
        return;
      }
      if (!conversionApi.consumable.consume(data.item, "insert")) {
        return;
      }
      const viewPosition = conversionApi.mapper.toViewPosition(data.range.start);
      conversionApi.mapper.bindElements(data.item, viewElement);
      conversionApi.writer.insert(viewPosition, viewElement);
    };
  }
  function insertUIElement(elementCreator) {
    return (evt, data, conversionApi) => {
      data.isOpening = true;
      const viewStartElement = elementCreator(data, conversionApi);
      data.isOpening = false;
      const viewEndElement = elementCreator(data, conversionApi);
      if (!viewStartElement || !viewEndElement) {
        return;
      }
      const markerRange = data.markerRange;
      if (markerRange.isCollapsed && !conversionApi.consumable.consume(markerRange, evt.name)) {
        return;
      }
      for (const value of markerRange) {
        if (!conversionApi.consumable.consume(value.item, evt.name)) {
          return;
        }
      }
      const mapper3 = conversionApi.mapper;
      const viewWriter = conversionApi.writer;
      viewWriter.insert(mapper3.toViewPosition(markerRange.start), viewStartElement);
      conversionApi.mapper.bindElementToMarker(viewStartElement, data.markerName);
      if (!markerRange.isCollapsed) {
        viewWriter.insert(mapper3.toViewPosition(markerRange.end), viewEndElement);
        conversionApi.mapper.bindElementToMarker(viewEndElement, data.markerName);
      }
      evt.stop();
    };
  }
  function removeUIElement() {
    return (evt, data, conversionApi) => {
      const elements = conversionApi.mapper.markerNameToElements(data.markerName);
      if (!elements) {
        return;
      }
      for (const element18 of elements) {
        conversionApi.mapper.unbindElementFromMarkerName(element18, data.markerName);
        conversionApi.writer.clear(conversionApi.writer.createRangeOn(element18), element18);
      }
      conversionApi.writer.clearClonedElementsGroup(data.markerName);
      evt.stop();
    };
  }
  function insertMarkerData(viewCreator) {
    return (evt, data, conversionApi) => {
      const viewMarkerData = viewCreator(data.markerName, conversionApi);
      if (!viewMarkerData) {
        return;
      }
      const markerRange = data.markerRange;
      if (!conversionApi.consumable.consume(markerRange, evt.name)) {
        return;
      }
      handleMarkerBoundary(markerRange, false, conversionApi, data, viewMarkerData);
      handleMarkerBoundary(markerRange, true, conversionApi, data, viewMarkerData);
      evt.stop();
    };
  }
  function handleMarkerBoundary(range29, isStart, conversionApi, data, viewMarkerData) {
    const modelPosition = isStart ? range29.start : range29.end;
    const canInsertElement = conversionApi.schema.checkChild(modelPosition, "$text");
    if (canInsertElement) {
      const viewPosition = conversionApi.mapper.toViewPosition(modelPosition);
      insertMarkerAsElement(viewPosition, isStart, conversionApi, data, viewMarkerData);
    } else {
      let modelElement;
      let isBefore;
      if (isStart && modelPosition.nodeAfter || !isStart && !modelPosition.nodeBefore) {
        modelElement = modelPosition.nodeAfter;
        isBefore = true;
      } else {
        modelElement = modelPosition.nodeBefore;
        isBefore = false;
      }
      const viewElement = conversionApi.mapper.toViewElement(modelElement);
      insertMarkerAsAttribute(viewElement, isStart, isBefore, conversionApi, data, viewMarkerData);
    }
  }
  function insertMarkerAsAttribute(viewElement, isStart, isBefore, conversionApi, data, viewMarkerData) {
    const attributeName = `data-${viewMarkerData.group}-${isStart ? "start" : "end"}-${isBefore ? "before" : "after"}`;
    const markerNames = viewElement.hasAttribute(attributeName) ? viewElement.getAttribute(attributeName).split(",") : [];
    markerNames.unshift(viewMarkerData.name);
    conversionApi.writer.setAttribute(attributeName, markerNames.join(","), viewElement);
    conversionApi.mapper.bindElementToMarker(viewElement, data.markerName);
  }
  function insertMarkerAsElement(position30, isStart, conversionApi, data, viewMarkerData) {
    const viewElementName = `${viewMarkerData.group}-${isStart ? "start" : "end"}`;
    const attrs = viewMarkerData.name ? {name: viewMarkerData.name} : null;
    const viewElement = conversionApi.writer.createUIElement(viewElementName, attrs);
    conversionApi.writer.insert(position30, viewElement);
    conversionApi.mapper.bindElementToMarker(viewElement, data.markerName);
  }
  function removeMarkerData(viewCreator) {
    return (evt, data, conversionApi) => {
      const viewData = viewCreator(data.markerName, conversionApi);
      if (!viewData) {
        return;
      }
      const elements = conversionApi.mapper.markerNameToElements(data.markerName);
      if (!elements) {
        return;
      }
      for (const element18 of elements) {
        conversionApi.mapper.unbindElementFromMarkerName(element18, data.markerName);
        if (element18.is("containerElement")) {
          removeMarkerFromAttribute(`data-${viewData.group}-start-before`, element18);
          removeMarkerFromAttribute(`data-${viewData.group}-start-after`, element18);
          removeMarkerFromAttribute(`data-${viewData.group}-end-before`, element18);
          removeMarkerFromAttribute(`data-${viewData.group}-end-after`, element18);
        } else {
          conversionApi.writer.clear(conversionApi.writer.createRangeOn(element18), element18);
        }
      }
      conversionApi.writer.clearClonedElementsGroup(data.markerName);
      evt.stop();
      function removeMarkerFromAttribute(attributeName, element18) {
        if (element18.hasAttribute(attributeName)) {
          const markerNames = new Set(element18.getAttribute(attributeName).split(","));
          markerNames.delete(viewData.name);
          if (markerNames.size == 0) {
            conversionApi.writer.removeAttribute(attributeName, element18);
          } else {
            conversionApi.writer.setAttribute(attributeName, Array.from(markerNames).join(","), element18);
          }
        }
      }
    };
  }
  function changeAttribute(attributeCreator) {
    return (evt, data, conversionApi) => {
      const oldAttribute = attributeCreator(data.attributeOldValue, conversionApi);
      const newAttribute = attributeCreator(data.attributeNewValue, conversionApi);
      if (!oldAttribute && !newAttribute) {
        return;
      }
      if (!conversionApi.consumable.consume(data.item, evt.name)) {
        return;
      }
      const viewElement = conversionApi.mapper.toViewElement(data.item);
      const viewWriter = conversionApi.writer;
      if (!viewElement) {
        throw new ckeditorerror_default("conversion-attribute-to-attribute-on-text", [data, conversionApi]);
      }
      if (data.attributeOldValue !== null && oldAttribute) {
        if (oldAttribute.key == "class") {
          const classes = toArray(oldAttribute.value);
          for (const className of classes) {
            viewWriter.removeClass(className, viewElement);
          }
        } else if (oldAttribute.key == "style") {
          const keys5 = Object.keys(oldAttribute.value);
          for (const key of keys5) {
            viewWriter.removeStyle(key, viewElement);
          }
        } else {
          viewWriter.removeAttribute(oldAttribute.key, viewElement);
        }
      }
      if (data.attributeNewValue !== null && newAttribute) {
        if (newAttribute.key == "class") {
          const classes = toArray(newAttribute.value);
          for (const className of classes) {
            viewWriter.addClass(className, viewElement);
          }
        } else if (newAttribute.key == "style") {
          const keys5 = Object.keys(newAttribute.value);
          for (const key of keys5) {
            viewWriter.setStyle(key, newAttribute.value[key], viewElement);
          }
        } else {
          viewWriter.setAttribute(newAttribute.key, newAttribute.value, viewElement);
        }
      }
    };
  }
  function highlightText(highlightDescriptor) {
    return (evt, data, conversionApi) => {
      if (!data.item) {
        return;
      }
      if (!(data.item instanceof selection_default2 || data.item instanceof documentselection_default2) && !data.item.is("$textProxy")) {
        return;
      }
      const descriptor = prepareDescriptor(highlightDescriptor, data, conversionApi);
      if (!descriptor) {
        return;
      }
      if (!conversionApi.consumable.consume(data.item, evt.name)) {
        return;
      }
      const viewWriter = conversionApi.writer;
      const viewElement = createViewElementFromHighlightDescriptor(viewWriter, descriptor);
      const viewSelection = viewWriter.document.selection;
      if (data.item instanceof selection_default2 || data.item instanceof documentselection_default2) {
        viewWriter.wrap(viewSelection.getFirstRange(), viewElement, viewSelection);
      } else {
        const viewRange = conversionApi.mapper.toViewRange(data.range);
        const rangeAfterWrap = viewWriter.wrap(viewRange, viewElement);
        for (const element18 of rangeAfterWrap.getItems()) {
          if (element18.is("attributeElement") && element18.isSimilar(viewElement)) {
            conversionApi.mapper.bindElementToMarker(element18, data.markerName);
            break;
          }
        }
      }
    };
  }
  function highlightElement(highlightDescriptor) {
    return (evt, data, conversionApi) => {
      if (!data.item) {
        return;
      }
      if (!(data.item instanceof element_default2)) {
        return;
      }
      const descriptor = prepareDescriptor(highlightDescriptor, data, conversionApi);
      if (!descriptor) {
        return;
      }
      if (!conversionApi.consumable.test(data.item, evt.name)) {
        return;
      }
      const viewElement = conversionApi.mapper.toViewElement(data.item);
      if (viewElement && viewElement.getCustomProperty("addHighlight")) {
        conversionApi.consumable.consume(data.item, evt.name);
        for (const value of range_default2._createIn(data.item)) {
          conversionApi.consumable.consume(value.item, evt.name);
        }
        viewElement.getCustomProperty("addHighlight")(viewElement, descriptor, conversionApi.writer);
        conversionApi.mapper.bindElementToMarker(viewElement, data.markerName);
      }
    };
  }
  function removeHighlight(highlightDescriptor) {
    return (evt, data, conversionApi) => {
      if (data.markerRange.isCollapsed) {
        return;
      }
      const descriptor = prepareDescriptor(highlightDescriptor, data, conversionApi);
      if (!descriptor) {
        return;
      }
      const viewHighlightElement = createViewElementFromHighlightDescriptor(conversionApi.writer, descriptor);
      const elements = conversionApi.mapper.markerNameToElements(data.markerName);
      if (!elements) {
        return;
      }
      for (const element18 of elements) {
        conversionApi.mapper.unbindElementFromMarkerName(element18, data.markerName);
        if (element18.is("attributeElement")) {
          conversionApi.writer.unwrap(conversionApi.writer.createRangeOn(element18), viewHighlightElement);
        } else {
          element18.getCustomProperty("removeHighlight")(element18, descriptor.id, conversionApi.writer);
        }
      }
      conversionApi.writer.clearClonedElementsGroup(data.markerName);
      evt.stop();
    };
  }
  function downcastElementToElement(config3) {
    config3 = cloneDeep_default(config3);
    config3.view = normalizeToElementConfig(config3.view, "container");
    return (dispatcher) => {
      dispatcher.on("insert:" + config3.model, insertElement(config3.view), {priority: config3.converterPriority || "normal"});
      if (config3.triggerBy) {
        if (config3.triggerBy.attributes) {
          for (const attributeKey of config3.triggerBy.attributes) {
            dispatcher._mapReconversionTriggerEvent(config3.model, `attribute:${attributeKey}:${config3.model}`);
          }
        }
        if (config3.triggerBy.children) {
          for (const childName of config3.triggerBy.children) {
            dispatcher._mapReconversionTriggerEvent(config3.model, `insert:${childName}`);
            dispatcher._mapReconversionTriggerEvent(config3.model, `remove:${childName}`);
          }
        }
      }
    };
  }
  function downcastAttributeToElement(config3) {
    config3 = cloneDeep_default(config3);
    const modelKey = config3.model.key ? config3.model.key : config3.model;
    let eventName = "attribute:" + modelKey;
    if (config3.model.name) {
      eventName += ":" + config3.model.name;
    }
    if (config3.model.values) {
      for (const modelValue of config3.model.values) {
        config3.view[modelValue] = normalizeToElementConfig(config3.view[modelValue], "attribute");
      }
    } else {
      config3.view = normalizeToElementConfig(config3.view, "attribute");
    }
    const elementCreator = getFromAttributeCreator(config3);
    return (dispatcher) => {
      dispatcher.on(eventName, wrap(elementCreator), {priority: config3.converterPriority || "normal"});
    };
  }
  function downcastAttributeToAttribute(config3) {
    config3 = cloneDeep_default(config3);
    const modelKey = config3.model.key ? config3.model.key : config3.model;
    let eventName = "attribute:" + modelKey;
    if (config3.model.name) {
      eventName += ":" + config3.model.name;
    }
    if (config3.model.values) {
      for (const modelValue of config3.model.values) {
        config3.view[modelValue] = normalizeToAttributeConfig(config3.view[modelValue]);
      }
    } else {
      config3.view = normalizeToAttributeConfig(config3.view);
    }
    const elementCreator = getFromAttributeCreator(config3);
    return (dispatcher) => {
      dispatcher.on(eventName, changeAttribute(elementCreator), {priority: config3.converterPriority || "normal"});
    };
  }
  function downcastMarkerToElement(config3) {
    config3 = cloneDeep_default(config3);
    config3.view = normalizeToElementConfig(config3.view, "ui");
    return (dispatcher) => {
      dispatcher.on("addMarker:" + config3.model, insertUIElement(config3.view), {priority: config3.converterPriority || "normal"});
      dispatcher.on("removeMarker:" + config3.model, removeUIElement(config3.view), {priority: config3.converterPriority || "normal"});
    };
  }
  function downcastMarkerToData(config3) {
    config3 = cloneDeep_default(config3);
    const group = config3.model;
    if (!config3.view) {
      config3.view = (markerName) => ({
        group,
        name: markerName.substr(config3.model.length + 1)
      });
    }
    return (dispatcher) => {
      dispatcher.on("addMarker:" + group, insertMarkerData(config3.view), {priority: config3.converterPriority || "normal"});
      dispatcher.on("removeMarker:" + group, removeMarkerData(config3.view), {priority: config3.converterPriority || "normal"});
    };
  }
  function downcastMarkerToHighlight(config3) {
    return (dispatcher) => {
      dispatcher.on("addMarker:" + config3.model, highlightText(config3.view), {priority: config3.converterPriority || "normal"});
      dispatcher.on("addMarker:" + config3.model, highlightElement(config3.view), {priority: config3.converterPriority || "normal"});
      dispatcher.on("removeMarker:" + config3.model, removeHighlight(config3.view), {priority: config3.converterPriority || "normal"});
    };
  }
  function normalizeToElementConfig(view19, viewElementType) {
    if (typeof view19 == "function") {
      return view19;
    }
    return (modelData, conversionApi) => createViewElementFromDefinition(view19, conversionApi, viewElementType);
  }
  function createViewElementFromDefinition(viewElementDefinition, conversionApi, viewElementType) {
    if (typeof viewElementDefinition == "string") {
      viewElementDefinition = {name: viewElementDefinition};
    }
    let element18;
    const viewWriter = conversionApi.writer;
    const attributes = Object.assign({}, viewElementDefinition.attributes);
    if (viewElementType == "container") {
      element18 = viewWriter.createContainerElement(viewElementDefinition.name, attributes);
    } else if (viewElementType == "attribute") {
      const options = {
        priority: viewElementDefinition.priority || attributeelement_default.DEFAULT_PRIORITY
      };
      element18 = viewWriter.createAttributeElement(viewElementDefinition.name, attributes, options);
    } else {
      element18 = viewWriter.createUIElement(viewElementDefinition.name, attributes);
    }
    if (viewElementDefinition.styles) {
      const keys5 = Object.keys(viewElementDefinition.styles);
      for (const key of keys5) {
        viewWriter.setStyle(key, viewElementDefinition.styles[key], element18);
      }
    }
    if (viewElementDefinition.classes) {
      const classes = viewElementDefinition.classes;
      if (typeof classes == "string") {
        viewWriter.addClass(classes, element18);
      } else {
        for (const className of classes) {
          viewWriter.addClass(className, element18);
        }
      }
    }
    return element18;
  }
  function getFromAttributeCreator(config3) {
    if (config3.model.values) {
      return (modelAttributeValue, conversionApi) => {
        const view19 = config3.view[modelAttributeValue];
        if (view19) {
          return view19(modelAttributeValue, conversionApi);
        }
        return null;
      };
    } else {
      return config3.view;
    }
  }
  function normalizeToAttributeConfig(view19) {
    if (typeof view19 == "string") {
      return (modelAttributeValue) => ({key: view19, value: modelAttributeValue});
    } else if (typeof view19 == "object") {
      if (view19.value) {
        return () => view19;
      } else {
        return (modelAttributeValue) => ({key: view19.key, value: modelAttributeValue});
      }
    } else {
      return view19;
    }
  }
  function prepareDescriptor(highlightDescriptor, data, conversionApi) {
    const descriptor = typeof highlightDescriptor == "function" ? highlightDescriptor(data, conversionApi) : highlightDescriptor;
    if (!descriptor) {
      return null;
    }
    if (!descriptor.priority) {
      descriptor.priority = 10;
    }
    if (!descriptor.id) {
      descriptor.id = data.markerName;
    }
    return descriptor;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/utils/autoparagraphing.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function autoParagraphEmptyRoots(writer2) {
    const {schema: schema3, document: document5} = writer2.model;
    for (const rootName of document5.getRootNames()) {
      const root11 = document5.getRoot(rootName);
      if (root11.isEmpty && !schema3.checkChild(root11, "$text")) {
        if (schema3.checkChild(root11, "paragraph")) {
          writer2.insertElement("paragraph", root11);
          return true;
        }
      }
    }
    return false;
  }
  function isParagraphable(position30, nodeOrType, schema3) {
    const context2 = schema3.createContext(position30);
    if (!schema3.checkChild(context2, "paragraph")) {
      return false;
    }
    if (!schema3.checkChild(context2.push("paragraph"), nodeOrType)) {
      return false;
    }
    return true;
  }
  function wrapInParagraph(position30, writer2) {
    const paragraph4 = writer2.createElement("paragraph");
    writer2.insert(paragraph4, position30);
    return writer2.createPositionAt(paragraph4, 0);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/upcasthelpers.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var UpcastHelpers = class extends conversionhelpers_default {
    elementToElement(config3) {
      return this.add(upcastElementToElement(config3));
    }
    elementToAttribute(config3) {
      return this.add(upcastElementToAttribute(config3));
    }
    attributeToAttribute(config3) {
      return this.add(upcastAttributeToAttribute(config3));
    }
    elementToMarker(config3) {
      logWarning("upcast-helpers-element-to-marker-deprecated");
      return this.add(upcastElementToMarker(config3));
    }
    dataToMarker(config3) {
      return this.add(upcastDataToMarker(config3));
    }
  };
  var upcasthelpers_default = UpcastHelpers;
  function convertToModelFragment() {
    return (evt, data, conversionApi) => {
      if (!data.modelRange && conversionApi.consumable.consume(data.viewItem, {name: true})) {
        const {modelRange, modelCursor} = conversionApi.convertChildren(data.viewItem, data.modelCursor);
        data.modelRange = modelRange;
        data.modelCursor = modelCursor;
      }
    };
  }
  function convertText() {
    return (evt, data, {schema: schema3, consumable, writer: writer2}) => {
      let position30 = data.modelCursor;
      if (!consumable.test(data.viewItem)) {
        return;
      }
      if (!schema3.checkChild(position30, "$text")) {
        if (!isParagraphable(position30, "$text", schema3)) {
          return;
        }
        position30 = wrapInParagraph(position30, writer2);
      }
      consumable.consume(data.viewItem);
      const text16 = writer2.createText(data.viewItem.data);
      writer2.insert(text16, position30);
      data.modelRange = writer2.createRange(position30, position30.getShiftedBy(text16.offsetSize));
      data.modelCursor = data.modelRange.end;
    };
  }
  function convertSelectionChange(model3, mapper3) {
    return (evt, data) => {
      const viewSelection = data.newSelection;
      const ranges = [];
      for (const viewRange of viewSelection.getRanges()) {
        ranges.push(mapper3.toModelRange(viewRange));
      }
      const modelSelection = model3.createSelection(ranges, {backward: viewSelection.isBackward});
      if (!modelSelection.isEqual(model3.document.selection)) {
        model3.change((writer2) => {
          writer2.setSelection(modelSelection);
        });
      }
    };
  }
  function upcastElementToElement(config3) {
    config3 = cloneDeep_default(config3);
    const converter = prepareToElementConverter(config3);
    const elementName = getViewElementNameFromConfig(config3.view);
    const eventName = elementName ? "element:" + elementName : "element";
    return (dispatcher) => {
      dispatcher.on(eventName, converter, {priority: config3.converterPriority || "normal"});
    };
  }
  function upcastElementToAttribute(config3) {
    config3 = cloneDeep_default(config3);
    normalizeModelAttributeConfig(config3);
    const converter = prepareToAttributeConverter(config3, false);
    const elementName = getViewElementNameFromConfig(config3.view);
    const eventName = elementName ? "element:" + elementName : "element";
    return (dispatcher) => {
      dispatcher.on(eventName, converter, {priority: config3.converterPriority || "low"});
    };
  }
  function upcastAttributeToAttribute(config3) {
    config3 = cloneDeep_default(config3);
    let viewKey = null;
    if (typeof config3.view == "string" || config3.view.key) {
      viewKey = normalizeViewAttributeKeyValueConfig(config3);
    }
    normalizeModelAttributeConfig(config3, viewKey);
    const converter = prepareToAttributeConverter(config3, true);
    return (dispatcher) => {
      dispatcher.on("element", converter, {priority: config3.converterPriority || "low"});
    };
  }
  function upcastElementToMarker(config3) {
    config3 = cloneDeep_default(config3);
    normalizeElementToMarkerConfig(config3);
    return upcastElementToElement(config3);
  }
  function upcastDataToMarker(config3) {
    config3 = cloneDeep_default(config3);
    if (!config3.model) {
      config3.model = (name) => {
        return name ? config3.view + ":" + name : config3.view;
      };
    }
    const converterStart = prepareToElementConverter(normalizeDataToMarkerConfig(config3, "start"));
    const converterEnd = prepareToElementConverter(normalizeDataToMarkerConfig(config3, "end"));
    return (dispatcher) => {
      dispatcher.on("element:" + config3.view + "-start", converterStart, {priority: config3.converterPriority || "normal"});
      dispatcher.on("element:" + config3.view + "-end", converterEnd, {priority: config3.converterPriority || "normal"});
      const basePriority = priorities_default.get("low");
      const maxPriority = priorities_default.get("highest");
      const priorityFactor = priorities_default.get(config3.converterPriority) / maxPriority;
      dispatcher.on("element", upcastAttributeToMarker(config3), {priority: basePriority + priorityFactor});
    };
  }
  function upcastAttributeToMarker(config3) {
    return (evt, data, conversionApi) => {
      const attrName = `data-${config3.view}`;
      if (!data.modelRange) {
        data = Object.assign(data, conversionApi.convertChildren(data.viewItem, data.modelCursor));
      }
      if (conversionApi.consumable.consume(data.viewItem, {attributes: attrName + "-end-after"})) {
        addMarkerElements(data.modelRange.end, data.viewItem.getAttribute(attrName + "-end-after").split(","));
      }
      if (conversionApi.consumable.consume(data.viewItem, {attributes: attrName + "-start-after"})) {
        addMarkerElements(data.modelRange.end, data.viewItem.getAttribute(attrName + "-start-after").split(","));
      }
      if (conversionApi.consumable.consume(data.viewItem, {attributes: attrName + "-end-before"})) {
        addMarkerElements(data.modelRange.start, data.viewItem.getAttribute(attrName + "-end-before").split(","));
      }
      if (conversionApi.consumable.consume(data.viewItem, {attributes: attrName + "-start-before"})) {
        addMarkerElements(data.modelRange.start, data.viewItem.getAttribute(attrName + "-start-before").split(","));
      }
      function addMarkerElements(position30, markerViewNames) {
        for (const markerViewName of markerViewNames) {
          const markerName = config3.model(markerViewName, conversionApi);
          const element18 = conversionApi.writer.createElement("$marker", {"data-name": markerName});
          conversionApi.writer.insert(element18, position30);
          if (data.modelCursor.isEqual(position30)) {
            data.modelCursor = data.modelCursor.getShiftedBy(1);
          } else {
            data.modelCursor = data.modelCursor._getTransformedByInsertion(position30, 1);
          }
          data.modelRange = data.modelRange._getTransformedByInsertion(position30, 1)[0];
        }
      }
    };
  }
  function getViewElementNameFromConfig(viewConfig) {
    if (typeof viewConfig == "string") {
      return viewConfig;
    }
    if (typeof viewConfig == "object" && typeof viewConfig.name == "string") {
      return viewConfig.name;
    }
    return null;
  }
  function prepareToElementConverter(config3) {
    const matcher4 = new matcher_default(config3.view);
    return (evt, data, conversionApi) => {
      const matcherResult = matcher4.match(data.viewItem);
      if (!matcherResult) {
        return;
      }
      const match = matcherResult.match;
      match.name = true;
      if (!conversionApi.consumable.test(data.viewItem, match)) {
        return;
      }
      const modelElement = getModelElement(config3.model, data.viewItem, conversionApi);
      if (!modelElement) {
        return;
      }
      if (!conversionApi.safeInsert(modelElement, data.modelCursor)) {
        return;
      }
      conversionApi.consumable.consume(data.viewItem, match);
      conversionApi.convertChildren(data.viewItem, modelElement);
      conversionApi.updateConversionResult(modelElement, data);
    };
  }
  function getModelElement(model3, input2, conversionApi) {
    if (model3 instanceof Function) {
      return model3(input2, conversionApi);
    } else {
      return conversionApi.writer.createElement(model3);
    }
  }
  function normalizeViewAttributeKeyValueConfig(config3) {
    if (typeof config3.view == "string") {
      config3.view = {key: config3.view};
    }
    const key = config3.view.key;
    let normalized;
    if (key == "class" || key == "style") {
      const keyName = key == "class" ? "classes" : "styles";
      normalized = {
        [keyName]: config3.view.value
      };
    } else {
      const value = typeof config3.view.value == "undefined" ? /[\s\S]*/ : config3.view.value;
      normalized = {
        attributes: {
          [key]: value
        }
      };
    }
    if (config3.view.name) {
      normalized.name = config3.view.name;
    }
    config3.view = normalized;
    return key;
  }
  function normalizeModelAttributeConfig(config3, viewAttributeKeyToCopy = null) {
    const defaultModelValue = viewAttributeKeyToCopy === null ? true : (viewElement) => viewElement.getAttribute(viewAttributeKeyToCopy);
    const key = typeof config3.model != "object" ? config3.model : config3.model.key;
    const value = typeof config3.model != "object" || typeof config3.model.value == "undefined" ? defaultModelValue : config3.model.value;
    config3.model = {key, value};
  }
  function prepareToAttributeConverter(config3, shallow) {
    const matcher4 = new matcher_default(config3.view);
    return (evt, data, conversionApi) => {
      const match = matcher4.match(data.viewItem);
      if (!match) {
        return;
      }
      const modelKey = config3.model.key;
      const modelValue = typeof config3.model.value == "function" ? config3.model.value(data.viewItem, conversionApi) : config3.model.value;
      if (modelValue === null) {
        return;
      }
      if (onlyViewNameIsDefined(config3.view, data.viewItem)) {
        match.match.name = true;
      } else {
        delete match.match.name;
      }
      if (!conversionApi.consumable.test(data.viewItem, match.match)) {
        return;
      }
      if (!data.modelRange) {
        data = Object.assign(data, conversionApi.convertChildren(data.viewItem, data.modelCursor));
      }
      const attributeWasSet = setAttributeOn(data.modelRange, {key: modelKey, value: modelValue}, shallow, conversionApi);
      if (attributeWasSet) {
        conversionApi.consumable.consume(data.viewItem, match.match);
      }
    };
  }
  function onlyViewNameIsDefined(viewConfig, viewItem) {
    const configToTest = typeof viewConfig == "function" ? viewConfig(viewItem) : viewConfig;
    if (typeof configToTest == "object" && !getViewElementNameFromConfig(configToTest)) {
      return false;
    }
    return !configToTest.classes && !configToTest.attributes && !configToTest.styles;
  }
  function setAttributeOn(modelRange, modelAttribute, shallow, conversionApi) {
    let result = false;
    for (const node12 of Array.from(modelRange.getItems({shallow}))) {
      if (conversionApi.schema.checkAttribute(node12, modelAttribute.key)) {
        conversionApi.writer.setAttribute(modelAttribute.key, modelAttribute.value, node12);
        result = true;
      }
    }
    return result;
  }
  function normalizeElementToMarkerConfig(config3) {
    const oldModel = config3.model;
    config3.model = (viewElement, conversionApi) => {
      const markerName = typeof oldModel == "string" ? oldModel : oldModel(viewElement, conversionApi);
      return conversionApi.writer.createElement("$marker", {"data-name": markerName});
    };
  }
  function normalizeDataToMarkerConfig(config3, type) {
    const configForElements = {};
    configForElements.view = config3.view + "-" + type;
    configForElements.model = (viewElement, conversionApi) => {
      const viewName = viewElement.getAttribute("name");
      const markerName = config3.model(viewName, conversionApi);
      return conversionApi.writer.createElement("$marker", {"data-name": markerName});
    };
    return configForElements;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/controller/editingcontroller.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EditingController = class {
    constructor(model3, stylesProcessor) {
      this.model = model3;
      this.view = new view_default(stylesProcessor);
      this.mapper = new mapper_default();
      this.downcastDispatcher = new downcastdispatcher_default({
        mapper: this.mapper,
        schema: model3.schema
      });
      const doc = this.model.document;
      const selection11 = doc.selection;
      const markers = this.model.markers;
      this.listenTo(this.model, "_beforeChanges", () => {
        this.view._disableRendering(true);
      }, {priority: "highest"});
      this.listenTo(this.model, "_afterChanges", () => {
        this.view._disableRendering(false);
      }, {priority: "lowest"});
      this.listenTo(doc, "change", () => {
        this.view.change((writer2) => {
          this.downcastDispatcher.convertChanges(doc.differ, markers, writer2);
          this.downcastDispatcher.convertSelection(selection11, markers, writer2);
        });
      }, {priority: "low"});
      this.listenTo(this.view.document, "selectionChange", convertSelectionChange(this.model, this.mapper));
      this.downcastDispatcher.on("insert:$text", insertText(), {priority: "lowest"});
      this.downcastDispatcher.on("remove", remove3(), {priority: "low"});
      this.downcastDispatcher.on("selection", clearAttributes(), {priority: "low"});
      this.downcastDispatcher.on("selection", convertRangeSelection(), {priority: "low"});
      this.downcastDispatcher.on("selection", convertCollapsedSelection(), {priority: "low"});
      this.view.document.roots.bindTo(this.model.document.roots).using((root11) => {
        if (root11.rootName == "$graveyard") {
          return null;
        }
        const viewRoot = new rooteditableelement_default(this.view.document, root11.name);
        viewRoot.rootName = root11.rootName;
        this.mapper.bindElements(root11, viewRoot);
        return viewRoot;
      });
    }
    destroy() {
      this.view.destroy();
      this.stopListening();
    }
  };
  var editingcontroller_default = EditingController;
  mix(EditingController, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-core/src/commandcollection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var CommandCollection = class {
    constructor() {
      this._commands = new Map();
    }
    add(commandName, command13) {
      this._commands.set(commandName, command13);
    }
    get(commandName) {
      return this._commands.get(commandName);
    }
    execute(commandName, ...args) {
      const command13 = this.get(commandName);
      if (!command13) {
        throw new ckeditorerror_default("commandcollection-command-not-found", this, {commandName});
      }
      return command13.execute(...args);
    }
    *names() {
      yield* this._commands.keys();
    }
    *commands() {
      yield* this._commands.values();
    }
    [Symbol.iterator]() {
      return this._commands[Symbol.iterator]();
    }
    destroy() {
      for (const command13 of this.commands()) {
        command13.destroy();
      }
    }
  };
  var commandcollection_default = CommandCollection;

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/viewconsumable.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ViewConsumable = class {
    constructor() {
      this._consumables = new Map();
    }
    add(element18, consumables) {
      let elementConsumables;
      if (element18.is("$text") || element18.is("documentFragment")) {
        this._consumables.set(element18, true);
        return;
      }
      if (!this._consumables.has(element18)) {
        elementConsumables = new ViewElementConsumables(element18);
        this._consumables.set(element18, elementConsumables);
      } else {
        elementConsumables = this._consumables.get(element18);
      }
      elementConsumables.add(consumables);
    }
    test(element18, consumables) {
      const elementConsumables = this._consumables.get(element18);
      if (elementConsumables === void 0) {
        return null;
      }
      if (element18.is("$text") || element18.is("documentFragment")) {
        return elementConsumables;
      }
      return elementConsumables.test(consumables);
    }
    consume(element18, consumables) {
      if (this.test(element18, consumables)) {
        if (element18.is("$text") || element18.is("documentFragment")) {
          this._consumables.set(element18, false);
        } else {
          this._consumables.get(element18).consume(consumables);
        }
        return true;
      }
      return false;
    }
    revert(element18, consumables) {
      const elementConsumables = this._consumables.get(element18);
      if (elementConsumables !== void 0) {
        if (element18.is("$text") || element18.is("documentFragment")) {
          this._consumables.set(element18, true);
        } else {
          elementConsumables.revert(consumables);
        }
      }
    }
    static consumablesFromElement(element18) {
      const consumables = {
        element: element18,
        name: true,
        attributes: [],
        classes: [],
        styles: []
      };
      const attributes = element18.getAttributeKeys();
      for (const attribute of attributes) {
        if (attribute == "style" || attribute == "class") {
          continue;
        }
        consumables.attributes.push(attribute);
      }
      const classes = element18.getClassNames();
      for (const className of classes) {
        consumables.classes.push(className);
      }
      const styles = element18.getStyleNames();
      for (const style of styles) {
        consumables.styles.push(style);
      }
      return consumables;
    }
    static createFrom(from, instance) {
      if (!instance) {
        instance = new ViewConsumable(from);
      }
      if (from.is("$text")) {
        instance.add(from);
        return instance;
      }
      if (from.is("element")) {
        instance.add(from, ViewConsumable.consumablesFromElement(from));
      }
      if (from.is("documentFragment")) {
        instance.add(from);
      }
      for (const child of from.getChildren()) {
        instance = ViewConsumable.createFrom(child, instance);
      }
      return instance;
    }
  };
  var viewconsumable_default = ViewConsumable;
  var ViewElementConsumables = class {
    constructor(from) {
      this.element = from;
      this._canConsumeName = null;
      this._consumables = {
        attributes: new Map(),
        styles: new Map(),
        classes: new Map()
      };
    }
    add(consumables) {
      if (consumables.name) {
        this._canConsumeName = true;
      }
      for (const type in this._consumables) {
        if (type in consumables) {
          this._add(type, consumables[type]);
        }
      }
    }
    test(consumables) {
      if (consumables.name && !this._canConsumeName) {
        return this._canConsumeName;
      }
      for (const type in this._consumables) {
        if (type in consumables) {
          const value = this._test(type, consumables[type]);
          if (value !== true) {
            return value;
          }
        }
      }
      return true;
    }
    consume(consumables) {
      if (consumables.name) {
        this._canConsumeName = false;
      }
      for (const type in this._consumables) {
        if (type in consumables) {
          this._consume(type, consumables[type]);
        }
      }
    }
    revert(consumables) {
      if (consumables.name) {
        this._canConsumeName = true;
      }
      for (const type in this._consumables) {
        if (type in consumables) {
          this._revert(type, consumables[type]);
        }
      }
    }
    _add(type, item) {
      const items = isArray_default(item) ? item : [item];
      const consumables = this._consumables[type];
      for (const name of items) {
        if (type === "attributes" && (name === "class" || name === "style")) {
          throw new ckeditorerror_default("viewconsumable-invalid-attribute", this);
        }
        consumables.set(name, true);
        if (type === "styles") {
          for (const alsoName of this.element.document.stylesProcessor.getRelatedStyles(name)) {
            consumables.set(alsoName, true);
          }
        }
      }
    }
    _test(type, item) {
      const items = isArray_default(item) ? item : [item];
      const consumables = this._consumables[type];
      for (const name of items) {
        if (type === "attributes" && (name === "class" || name === "style")) {
          const consumableName = name == "class" ? "classes" : "styles";
          const value = this._test(consumableName, [...this._consumables[consumableName].keys()]);
          if (value !== true) {
            return value;
          }
        } else {
          const value = consumables.get(name);
          if (value === void 0) {
            return null;
          }
          if (!value) {
            return false;
          }
        }
      }
      return true;
    }
    _consume(type, item) {
      const items = isArray_default(item) ? item : [item];
      const consumables = this._consumables[type];
      for (const name of items) {
        if (type === "attributes" && (name === "class" || name === "style")) {
          const consumableName = name == "class" ? "classes" : "styles";
          this._consume(consumableName, [...this._consumables[consumableName].keys()]);
        } else {
          consumables.set(name, false);
          if (type == "styles") {
            for (const toConsume of this.element.document.stylesProcessor.getRelatedStyles(name)) {
              consumables.set(toConsume, false);
            }
          }
        }
      }
    }
    _revert(type, item) {
      const items = isArray_default(item) ? item : [item];
      const consumables = this._consumables[type];
      for (const name of items) {
        if (type === "attributes" && (name === "class" || name === "style")) {
          const consumableName = name == "class" ? "classes" : "styles";
          this._revert(consumableName, [...this._consumables[consumableName].keys()]);
        } else {
          const value = consumables.get(name);
          if (value === false) {
            consumables.set(name, true);
          }
        }
      }
    }
  };

  // node_modules/@ckeditor/ckeditor5-engine/src/model/schema.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Schema = class {
    constructor() {
      this._sourceDefinitions = {};
      this._attributeProperties = {};
      this.decorate("checkChild");
      this.decorate("checkAttribute");
      this.on("checkAttribute", (evt, args) => {
        args[0] = new SchemaContext(args[0]);
      }, {priority: "highest"});
      this.on("checkChild", (evt, args) => {
        args[0] = new SchemaContext(args[0]);
        args[1] = this.getDefinition(args[1]);
      }, {priority: "highest"});
    }
    register(itemName, definition) {
      if (this._sourceDefinitions[itemName]) {
        throw new ckeditorerror_default("schema-cannot-register-item-twice", this, {
          itemName
        });
      }
      this._sourceDefinitions[itemName] = [
        Object.assign({}, definition)
      ];
      this._clearCache();
    }
    extend(itemName, definition) {
      if (!this._sourceDefinitions[itemName]) {
        throw new ckeditorerror_default("schema-cannot-extend-missing-item", this, {
          itemName
        });
      }
      this._sourceDefinitions[itemName].push(Object.assign({}, definition));
      this._clearCache();
    }
    getDefinitions() {
      if (!this._compiledDefinitions) {
        this._compile();
      }
      return this._compiledDefinitions;
    }
    getDefinition(item) {
      let itemName;
      if (typeof item == "string") {
        itemName = item;
      } else if (item.is && (item.is("$text") || item.is("$textProxy"))) {
        itemName = "$text";
      } else {
        itemName = item.name;
      }
      return this.getDefinitions()[itemName];
    }
    isRegistered(item) {
      return !!this.getDefinition(item);
    }
    isBlock(item) {
      const def = this.getDefinition(item);
      return !!(def && def.isBlock);
    }
    isLimit(item) {
      const def = this.getDefinition(item);
      if (!def) {
        return false;
      }
      return !!(def.isLimit || def.isObject);
    }
    isObject(item) {
      const def = this.getDefinition(item);
      if (!def) {
        return false;
      }
      return !!(def.isObject || def.isLimit && def.isSelectable && def.isContent);
    }
    isInline(item) {
      const def = this.getDefinition(item);
      return !!(def && def.isInline);
    }
    isSelectable(item) {
      const def = this.getDefinition(item);
      if (!def) {
        return false;
      }
      return !!(def.isSelectable || def.isObject);
    }
    isContent(item) {
      const def = this.getDefinition(item);
      if (!def) {
        return false;
      }
      return !!(def.isContent || def.isObject);
    }
    checkChild(context2, def) {
      if (!def) {
        return false;
      }
      return this._checkContextMatch(def, context2);
    }
    checkAttribute(context2, attributeName) {
      const def = this.getDefinition(context2.last);
      if (!def) {
        return false;
      }
      return def.allowAttributes.includes(attributeName);
    }
    checkMerge(positionOrBaseElement, elementToMerge = null) {
      if (positionOrBaseElement instanceof position_default2) {
        const nodeBefore = positionOrBaseElement.nodeBefore;
        const nodeAfter = positionOrBaseElement.nodeAfter;
        if (!(nodeBefore instanceof element_default2)) {
          throw new ckeditorerror_default("schema-check-merge-no-element-before", this);
        }
        if (!(nodeAfter instanceof element_default2)) {
          throw new ckeditorerror_default("schema-check-merge-no-element-after", this);
        }
        return this.checkMerge(nodeBefore, nodeAfter);
      }
      for (const child of elementToMerge.getChildren()) {
        if (!this.checkChild(positionOrBaseElement, child)) {
          return false;
        }
      }
      return true;
    }
    addChildCheck(callback) {
      this.on("checkChild", (evt, [ctx, childDef]) => {
        if (!childDef) {
          return;
        }
        const retValue = callback(ctx, childDef);
        if (typeof retValue == "boolean") {
          evt.stop();
          evt.return = retValue;
        }
      }, {priority: "high"});
    }
    addAttributeCheck(callback) {
      this.on("checkAttribute", (evt, [ctx, attributeName]) => {
        const retValue = callback(ctx, attributeName);
        if (typeof retValue == "boolean") {
          evt.stop();
          evt.return = retValue;
        }
      }, {priority: "high"});
    }
    setAttributeProperties(attributeName, properties) {
      this._attributeProperties[attributeName] = Object.assign(this.getAttributeProperties(attributeName), properties);
    }
    getAttributeProperties(attributeName) {
      return this._attributeProperties[attributeName] || {};
    }
    getLimitElement(selectionOrRangeOrPosition) {
      let element18;
      if (selectionOrRangeOrPosition instanceof position_default2) {
        element18 = selectionOrRangeOrPosition.parent;
      } else {
        const ranges = selectionOrRangeOrPosition instanceof range_default2 ? [selectionOrRangeOrPosition] : Array.from(selectionOrRangeOrPosition.getRanges());
        element18 = ranges.reduce((element19, range29) => {
          const rangeCommonAncestor = range29.getCommonAncestor();
          if (!element19) {
            return rangeCommonAncestor;
          }
          return element19.getCommonAncestor(rangeCommonAncestor, {includeSelf: true});
        }, null);
      }
      while (!this.isLimit(element18)) {
        if (element18.parent) {
          element18 = element18.parent;
        } else {
          break;
        }
      }
      return element18;
    }
    checkAttributeInSelection(selection11, attribute) {
      if (selection11.isCollapsed) {
        const firstPosition = selection11.getFirstPosition();
        const context2 = [
          ...firstPosition.getAncestors(),
          new text_default2("", selection11.getAttributes())
        ];
        return this.checkAttribute(context2, attribute);
      } else {
        const ranges = selection11.getRanges();
        for (const range29 of ranges) {
          for (const value of range29) {
            if (this.checkAttribute(value.item, attribute)) {
              return true;
            }
          }
        }
      }
      return false;
    }
    *getValidRanges(ranges, attribute) {
      ranges = convertToMinimalFlatRanges(ranges);
      for (const range29 of ranges) {
        yield* this._getValidRangesForRange(range29, attribute);
      }
    }
    getNearestSelectionRange(position30, direction = "both") {
      if (this.checkChild(position30, "$text")) {
        return new range_default2(position30);
      }
      let backwardWalker, forwardWalker;
      const limitElement = position30.getAncestors().reverse().find((item) => this.isLimit(item)) || position30.root;
      if (direction == "both" || direction == "backward") {
        backwardWalker = new treewalker_default2({
          boundaries: range_default2._createIn(limitElement),
          startPosition: position30,
          direction: "backward"
        });
      }
      if (direction == "both" || direction == "forward") {
        forwardWalker = new treewalker_default2({
          boundaries: range_default2._createIn(limitElement),
          startPosition: position30
        });
      }
      for (const data of combineWalkers(backwardWalker, forwardWalker)) {
        const type = data.walker == backwardWalker ? "elementEnd" : "elementStart";
        const value = data.value;
        if (value.type == type && this.isObject(value.item)) {
          return range_default2._createOn(value.item);
        }
        if (this.checkChild(value.nextPosition, "$text")) {
          return new range_default2(value.nextPosition);
        }
      }
      return null;
    }
    findAllowedParent(position30, node12) {
      let parent3 = position30.parent;
      while (parent3) {
        if (this.checkChild(parent3, node12)) {
          return parent3;
        }
        if (this.isLimit(parent3)) {
          return null;
        }
        parent3 = parent3.parent;
      }
      return null;
    }
    removeDisallowedAttributes(nodes, writer2) {
      for (const node12 of nodes) {
        if (node12.is("$text")) {
          removeDisallowedAttributeFromNode(this, node12, writer2);
        } else {
          const rangeInNode = range_default2._createIn(node12);
          const positionsInRange = rangeInNode.getPositions();
          for (const position30 of positionsInRange) {
            const item = position30.nodeBefore || position30.parent;
            removeDisallowedAttributeFromNode(this, item, writer2);
          }
        }
      }
    }
    createContext(context2) {
      return new SchemaContext(context2);
    }
    _clearCache() {
      this._compiledDefinitions = null;
    }
    _compile() {
      const compiledDefinitions = {};
      const sourceRules = this._sourceDefinitions;
      const itemNames = Object.keys(sourceRules);
      for (const itemName of itemNames) {
        compiledDefinitions[itemName] = compileBaseItemRule(sourceRules[itemName], itemName);
      }
      for (const itemName of itemNames) {
        compileAllowContentOf(compiledDefinitions, itemName);
      }
      for (const itemName of itemNames) {
        compileAllowWhere(compiledDefinitions, itemName);
      }
      for (const itemName of itemNames) {
        compileAllowAttributesOf(compiledDefinitions, itemName);
        compileInheritPropertiesFrom(compiledDefinitions, itemName);
      }
      for (const itemName of itemNames) {
        cleanUpAllowIn(compiledDefinitions, itemName);
        cleanUpAllowAttributes(compiledDefinitions, itemName);
      }
      this._compiledDefinitions = compiledDefinitions;
    }
    _checkContextMatch(def, context2, contextItemIndex = context2.length - 1) {
      const contextItem = context2.getItem(contextItemIndex);
      if (def.allowIn.includes(contextItem.name)) {
        if (contextItemIndex == 0) {
          return true;
        } else {
          const parentRule = this.getDefinition(contextItem);
          return this._checkContextMatch(parentRule, context2, contextItemIndex - 1);
        }
      } else {
        return false;
      }
    }
    *_getValidRangesForRange(range29, attribute) {
      let start = range29.start;
      let end = range29.start;
      for (const item of range29.getItems({shallow: true})) {
        if (item.is("element")) {
          yield* this._getValidRangesForRange(range_default2._createIn(item), attribute);
        }
        if (!this.checkAttribute(item, attribute)) {
          if (!start.isEqual(end)) {
            yield new range_default2(start, end);
          }
          start = position_default2._createAfter(item);
        }
        end = position_default2._createAfter(item);
      }
      if (!start.isEqual(end)) {
        yield new range_default2(start, end);
      }
    }
  };
  var schema_default = Schema;
  mix(Schema, observablemixin_default);
  var SchemaContext = class {
    constructor(context2) {
      if (context2 instanceof SchemaContext) {
        return context2;
      }
      if (typeof context2 == "string") {
        context2 = [context2];
      } else if (!Array.isArray(context2)) {
        context2 = context2.getAncestors({includeSelf: true});
      }
      if (context2[0] && typeof context2[0] != "string" && context2[0].is("documentFragment")) {
        context2.shift();
      }
      this._items = context2.map(mapContextItem);
    }
    get length() {
      return this._items.length;
    }
    get last() {
      return this._items[this._items.length - 1];
    }
    [Symbol.iterator]() {
      return this._items[Symbol.iterator]();
    }
    push(item) {
      const ctx = new SchemaContext([item]);
      ctx._items = [...this._items, ...ctx._items];
      return ctx;
    }
    getItem(index) {
      return this._items[index];
    }
    *getNames() {
      yield* this._items.map((item) => item.name);
    }
    endsWith(query) {
      return Array.from(this.getNames()).join(" ").endsWith(query);
    }
    startsWith(query) {
      return Array.from(this.getNames()).join(" ").startsWith(query);
    }
  };
  function compileBaseItemRule(sourceItemRules, itemName) {
    const itemRule = {
      name: itemName,
      allowIn: [],
      allowContentOf: [],
      allowWhere: [],
      allowAttributes: [],
      allowAttributesOf: [],
      inheritTypesFrom: []
    };
    copyTypes(sourceItemRules, itemRule);
    copyProperty(sourceItemRules, itemRule, "allowIn");
    copyProperty(sourceItemRules, itemRule, "allowContentOf");
    copyProperty(sourceItemRules, itemRule, "allowWhere");
    copyProperty(sourceItemRules, itemRule, "allowAttributes");
    copyProperty(sourceItemRules, itemRule, "allowAttributesOf");
    copyProperty(sourceItemRules, itemRule, "inheritTypesFrom");
    makeInheritAllWork(sourceItemRules, itemRule);
    return itemRule;
  }
  function compileAllowContentOf(compiledDefinitions, itemName) {
    for (const allowContentOfItemName of compiledDefinitions[itemName].allowContentOf) {
      if (compiledDefinitions[allowContentOfItemName]) {
        const allowedChildren = getAllowedChildren(compiledDefinitions, allowContentOfItemName);
        allowedChildren.forEach((allowedItem) => {
          allowedItem.allowIn.push(itemName);
        });
      }
    }
    delete compiledDefinitions[itemName].allowContentOf;
  }
  function compileAllowWhere(compiledDefinitions, itemName) {
    for (const allowWhereItemName of compiledDefinitions[itemName].allowWhere) {
      const inheritFrom = compiledDefinitions[allowWhereItemName];
      if (inheritFrom) {
        const allowedIn = inheritFrom.allowIn;
        compiledDefinitions[itemName].allowIn.push(...allowedIn);
      }
    }
    delete compiledDefinitions[itemName].allowWhere;
  }
  function compileAllowAttributesOf(compiledDefinitions, itemName) {
    for (const allowAttributeOfItem of compiledDefinitions[itemName].allowAttributesOf) {
      const inheritFrom = compiledDefinitions[allowAttributeOfItem];
      if (inheritFrom) {
        const inheritAttributes = inheritFrom.allowAttributes;
        compiledDefinitions[itemName].allowAttributes.push(...inheritAttributes);
      }
    }
    delete compiledDefinitions[itemName].allowAttributesOf;
  }
  function compileInheritPropertiesFrom(compiledDefinitions, itemName) {
    const item = compiledDefinitions[itemName];
    for (const inheritPropertiesOfItem of item.inheritTypesFrom) {
      const inheritFrom = compiledDefinitions[inheritPropertiesOfItem];
      if (inheritFrom) {
        const typeNames = Object.keys(inheritFrom).filter((name) => name.startsWith("is"));
        for (const name of typeNames) {
          if (!(name in item)) {
            item[name] = inheritFrom[name];
          }
        }
      }
    }
    delete item.inheritTypesFrom;
  }
  function cleanUpAllowIn(compiledDefinitions, itemName) {
    const itemRule = compiledDefinitions[itemName];
    const existingItems = itemRule.allowIn.filter((itemToCheck) => compiledDefinitions[itemToCheck]);
    itemRule.allowIn = Array.from(new Set(existingItems));
  }
  function cleanUpAllowAttributes(compiledDefinitions, itemName) {
    const itemRule = compiledDefinitions[itemName];
    itemRule.allowAttributes = Array.from(new Set(itemRule.allowAttributes));
  }
  function copyTypes(sourceItemRules, itemRule) {
    for (const sourceItemRule of sourceItemRules) {
      const typeNames = Object.keys(sourceItemRule).filter((name) => name.startsWith("is"));
      for (const name of typeNames) {
        itemRule[name] = sourceItemRule[name];
      }
    }
  }
  function copyProperty(sourceItemRules, itemRule, propertyName) {
    for (const sourceItemRule of sourceItemRules) {
      if (typeof sourceItemRule[propertyName] == "string") {
        itemRule[propertyName].push(sourceItemRule[propertyName]);
      } else if (Array.isArray(sourceItemRule[propertyName])) {
        itemRule[propertyName].push(...sourceItemRule[propertyName]);
      }
    }
  }
  function makeInheritAllWork(sourceItemRules, itemRule) {
    for (const sourceItemRule of sourceItemRules) {
      const inheritFrom = sourceItemRule.inheritAllFrom;
      if (inheritFrom) {
        itemRule.allowContentOf.push(inheritFrom);
        itemRule.allowWhere.push(inheritFrom);
        itemRule.allowAttributesOf.push(inheritFrom);
        itemRule.inheritTypesFrom.push(inheritFrom);
      }
    }
  }
  function getAllowedChildren(compiledDefinitions, itemName) {
    const itemRule = compiledDefinitions[itemName];
    return getValues(compiledDefinitions).filter((def) => def.allowIn.includes(itemRule.name));
  }
  function getValues(obj) {
    return Object.keys(obj).map((key) => obj[key]);
  }
  function mapContextItem(ctxItem) {
    if (typeof ctxItem == "string") {
      return {
        name: ctxItem,
        *getAttributeKeys() {
        },
        getAttribute() {
        }
      };
    } else {
      return {
        name: ctxItem.is("element") ? ctxItem.name : "$text",
        *getAttributeKeys() {
          yield* ctxItem.getAttributeKeys();
        },
        getAttribute(key) {
          return ctxItem.getAttribute(key);
        }
      };
    }
  }
  function* combineWalkers(backward, forward) {
    let done = false;
    while (!done) {
      done = true;
      if (backward) {
        const step = backward.next();
        if (!step.done) {
          done = false;
          yield {
            walker: backward,
            value: step.value
          };
        }
      }
      if (forward) {
        const step = forward.next();
        if (!step.done) {
          done = false;
          yield {
            walker: forward,
            value: step.value
          };
        }
      }
    }
  }
  function* convertToMinimalFlatRanges(ranges) {
    for (const range29 of ranges) {
      yield* range29.getMinimalFlatRanges();
    }
  }
  function removeDisallowedAttributeFromNode(schema3, node12, writer2) {
    for (const attribute of node12.getAttributeKeys()) {
      if (!schema3.checkAttribute(node12, attribute)) {
        writer2.removeAttribute(attribute, node12);
      }
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var UpcastDispatcher = class {
    constructor(conversionApi = {}) {
      this._splitParts = new Map();
      this._cursorParents = new Map();
      this._modelCursor = null;
      this.conversionApi = Object.assign({}, conversionApi);
      this.conversionApi.convertItem = this._convertItem.bind(this);
      this.conversionApi.convertChildren = this._convertChildren.bind(this);
      this.conversionApi.safeInsert = this._safeInsert.bind(this);
      this.conversionApi.updateConversionResult = this._updateConversionResult.bind(this);
      this.conversionApi.splitToAllowedParent = this._splitToAllowedParent.bind(this);
      this.conversionApi.getSplitParts = this._getSplitParts.bind(this);
    }
    convert(viewItem, writer2, context2 = ["$root"]) {
      this.fire("viewCleanup", viewItem);
      this._modelCursor = createContextTree(context2, writer2);
      this.conversionApi.writer = writer2;
      this.conversionApi.consumable = viewconsumable_default.createFrom(viewItem);
      this.conversionApi.store = {};
      const {modelRange} = this._convertItem(viewItem, this._modelCursor);
      const documentFragment = writer2.createDocumentFragment();
      if (modelRange) {
        this._removeEmptyElements();
        for (const item of Array.from(this._modelCursor.parent.getChildren())) {
          writer2.append(item, documentFragment);
        }
        documentFragment.markers = extractMarkersFromModelFragment(documentFragment, writer2);
      }
      this._modelCursor = null;
      this._splitParts.clear();
      this._cursorParents.clear();
      this.conversionApi.writer = null;
      this.conversionApi.store = null;
      return documentFragment;
    }
    _convertItem(viewItem, modelCursor) {
      const data = Object.assign({viewItem, modelCursor, modelRange: null});
      if (viewItem.is("element")) {
        this.fire("element:" + viewItem.name, data, this.conversionApi);
      } else if (viewItem.is("$text")) {
        this.fire("text", data, this.conversionApi);
      } else {
        this.fire("documentFragment", data, this.conversionApi);
      }
      if (data.modelRange && !(data.modelRange instanceof range_default2)) {
        throw new ckeditorerror_default("view-conversion-dispatcher-incorrect-result", this);
      }
      return {modelRange: data.modelRange, modelCursor: data.modelCursor};
    }
    _convertChildren(viewItem, elementOrModelCursor) {
      let nextModelCursor = elementOrModelCursor.is("position") ? elementOrModelCursor : position_default2._createAt(elementOrModelCursor, 0);
      const modelRange = new range_default2(nextModelCursor);
      for (const viewChild of Array.from(viewItem.getChildren())) {
        const result = this._convertItem(viewChild, nextModelCursor);
        if (result.modelRange instanceof range_default2) {
          modelRange.end = result.modelRange.end;
          nextModelCursor = result.modelCursor;
        }
      }
      return {modelRange, modelCursor: nextModelCursor};
    }
    _safeInsert(modelElement, position30) {
      const splitResult = this._splitToAllowedParent(modelElement, position30);
      if (!splitResult) {
        return false;
      }
      this.conversionApi.writer.insert(modelElement, splitResult.position);
      return true;
    }
    _updateConversionResult(modelElement, data) {
      const parts = this._getSplitParts(modelElement);
      const writer2 = this.conversionApi.writer;
      if (!data.modelRange) {
        data.modelRange = writer2.createRange(writer2.createPositionBefore(modelElement), writer2.createPositionAfter(parts[parts.length - 1]));
      }
      const savedCursorParent = this._cursorParents.get(modelElement);
      if (savedCursorParent) {
        data.modelCursor = writer2.createPositionAt(savedCursorParent, 0);
      } else {
        data.modelCursor = data.modelRange.end;
      }
    }
    _splitToAllowedParent(node12, modelCursor) {
      const {schema: schema3, writer: writer2} = this.conversionApi;
      let allowedParent = schema3.findAllowedParent(modelCursor, node12);
      if (allowedParent) {
        if (allowedParent === modelCursor.parent) {
          return {position: modelCursor};
        }
        if (this._modelCursor.parent.getAncestors().includes(allowedParent)) {
          allowedParent = null;
        }
      }
      if (!allowedParent) {
        if (!isParagraphable(modelCursor, node12, schema3)) {
          return null;
        }
        return {
          position: wrapInParagraph(modelCursor, writer2)
        };
      }
      const splitResult = this.conversionApi.writer.split(modelCursor, allowedParent);
      const stack = [];
      for (const treeWalkerValue of splitResult.range.getWalker()) {
        if (treeWalkerValue.type == "elementEnd") {
          stack.push(treeWalkerValue.item);
        } else {
          const originalPart = stack.pop();
          const splitPart = treeWalkerValue.item;
          this._registerSplitPair(originalPart, splitPart);
        }
      }
      const cursorParent = splitResult.range.end.parent;
      this._cursorParents.set(node12, cursorParent);
      return {
        position: splitResult.position,
        cursorParent
      };
    }
    _registerSplitPair(originalPart, splitPart) {
      if (!this._splitParts.has(originalPart)) {
        this._splitParts.set(originalPart, [originalPart]);
      }
      const list3 = this._splitParts.get(originalPart);
      this._splitParts.set(splitPart, list3);
      list3.push(splitPart);
    }
    _getSplitParts(element18) {
      let parts;
      if (!this._splitParts.has(element18)) {
        parts = [element18];
      } else {
        parts = this._splitParts.get(element18);
      }
      return parts;
    }
    _removeEmptyElements() {
      let anyRemoved = false;
      for (const element18 of this._splitParts.keys()) {
        if (element18.isEmpty) {
          this.conversionApi.writer.remove(element18);
          this._splitParts.delete(element18);
          anyRemoved = true;
        }
      }
      if (anyRemoved) {
        this._removeEmptyElements();
      }
    }
  };
  var upcastdispatcher_default = UpcastDispatcher;
  mix(UpcastDispatcher, emittermixin_default);
  function extractMarkersFromModelFragment(modelItem, writer2) {
    const markerElements = new Set();
    const markers = new Map();
    const range29 = range_default2._createIn(modelItem).getItems();
    for (const item of range29) {
      if (item.name == "$marker") {
        markerElements.add(item);
      }
    }
    for (const markerElement of markerElements) {
      const markerName = markerElement.getAttribute("data-name");
      const currentPosition = writer2.createPositionBefore(markerElement);
      if (!markers.has(markerName)) {
        markers.set(markerName, new range_default2(currentPosition.clone()));
      } else {
        markers.get(markerName).end = currentPosition.clone();
      }
      writer2.remove(markerElement);
    }
    return markers;
  }
  function createContextTree(contextDefinition, writer2) {
    let position30;
    for (const item of new SchemaContext(contextDefinition)) {
      const attributes = {};
      for (const key of item.getAttributeKeys()) {
        attributes[key] = item.getAttribute(key);
      }
      const current = writer2.createElement(item.name, attributes);
      if (position30) {
        writer2.append(current, position30);
      }
      position30 = position_default2._createAt(current, 0);
    }
    return position30;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/controller/datacontroller.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DataController = class {
    constructor(model3, stylesProcessor) {
      this.model = model3;
      this.stylesProcessor = stylesProcessor;
      this.processor = void 0;
      this.mapper = new mapper_default();
      this.downcastDispatcher = new downcastdispatcher_default({
        mapper: this.mapper,
        schema: model3.schema
      });
      this.downcastDispatcher.on("insert:$text", insertText(), {priority: "lowest"});
      this.upcastDispatcher = new upcastdispatcher_default({
        schema: model3.schema
      });
      this.viewDocument = new document_default(stylesProcessor);
      this._viewWriter = new downcastwriter_default(this.viewDocument);
      this.upcastDispatcher.on("text", convertText(), {priority: "lowest"});
      this.upcastDispatcher.on("element", convertToModelFragment(), {priority: "lowest"});
      this.upcastDispatcher.on("documentFragment", convertToModelFragment(), {priority: "lowest"});
      this.decorate("init");
      this.decorate("set");
      this.on("init", () => {
        this.fire("ready");
      }, {priority: "lowest"});
      this.on("ready", () => {
        this.model.enqueueChange("transparent", autoParagraphEmptyRoots);
      }, {priority: "lowest"});
    }
    get(options = {}) {
      const {rootName = "main", trim = "empty"} = options;
      if (!this._checkIfRootsExists([rootName])) {
        throw new ckeditorerror_default("datacontroller-get-non-existent-root", this);
      }
      const root11 = this.model.document.getRoot(rootName);
      if (trim === "empty" && !this.model.hasContent(root11, {ignoreWhitespaces: true})) {
        return "";
      }
      return this.stringify(root11, options);
    }
    stringify(modelElementOrFragment, options) {
      const viewDocumentFragment = this.toView(modelElementOrFragment, options);
      return this.processor.toData(viewDocumentFragment);
    }
    toView(modelElementOrFragment, options) {
      const viewDocument = this.viewDocument;
      const viewWriter = this._viewWriter;
      this.mapper.clearBindings();
      const modelRange = range_default2._createIn(modelElementOrFragment);
      const viewDocumentFragment = new documentfragment_default(viewDocument);
      this.mapper.bindElements(modelElementOrFragment, viewDocumentFragment);
      this.downcastDispatcher.conversionApi.options = options;
      this.downcastDispatcher.convertInsert(modelRange, viewWriter);
      if (!modelElementOrFragment.is("documentFragment")) {
        const markers = _getMarkersRelativeToElement(modelElementOrFragment);
        for (const [name, range29] of markers) {
          this.downcastDispatcher.convertMarkerAdd(name, range29, viewWriter);
        }
      }
      delete this.downcastDispatcher.conversionApi.options;
      return viewDocumentFragment;
    }
    init(data) {
      if (this.model.document.version) {
        throw new ckeditorerror_default("datacontroller-init-document-not-empty", this);
      }
      let initialData = {};
      if (typeof data === "string") {
        initialData.main = data;
      } else {
        initialData = data;
      }
      if (!this._checkIfRootsExists(Object.keys(initialData))) {
        throw new ckeditorerror_default("datacontroller-init-non-existent-root", this);
      }
      this.model.enqueueChange("transparent", (writer2) => {
        for (const rootName of Object.keys(initialData)) {
          const modelRoot = this.model.document.getRoot(rootName);
          writer2.insert(this.parse(initialData[rootName], modelRoot), modelRoot, 0);
        }
      });
      return Promise.resolve();
    }
    set(data) {
      let newData = {};
      if (typeof data === "string") {
        newData.main = data;
      } else {
        newData = data;
      }
      if (!this._checkIfRootsExists(Object.keys(newData))) {
        throw new ckeditorerror_default("datacontroller-set-non-existent-root", this);
      }
      this.model.enqueueChange("transparent", (writer2) => {
        writer2.setSelection(null);
        writer2.removeSelectionAttribute(this.model.document.selection.getAttributeKeys());
        for (const rootName of Object.keys(newData)) {
          const modelRoot = this.model.document.getRoot(rootName);
          writer2.remove(writer2.createRangeIn(modelRoot));
          writer2.insert(this.parse(newData[rootName], modelRoot), modelRoot, 0);
        }
      });
    }
    parse(data, context2 = "$root") {
      const viewDocumentFragment = this.processor.toView(data);
      return this.toModel(viewDocumentFragment, context2);
    }
    toModel(viewElementOrFragment, context2 = "$root") {
      return this.model.change((writer2) => {
        return this.upcastDispatcher.convert(viewElementOrFragment, writer2, context2);
      });
    }
    addStyleProcessorRules(callback) {
      callback(this.stylesProcessor);
    }
    destroy() {
      this.stopListening();
    }
    _checkIfRootsExists(rootNames) {
      for (const rootName of rootNames) {
        if (!this.model.document.getRootNames().includes(rootName)) {
          return false;
        }
      }
      return true;
    }
  };
  var datacontroller_default = DataController;
  mix(DataController, observablemixin_default);
  function _getMarkersRelativeToElement(element18) {
    const result = [];
    const doc = element18.root.document;
    if (!doc) {
      return [];
    }
    const elementRange = range_default2._createIn(element18);
    for (const marker of doc.model.markers) {
      const intersection = elementRange.getIntersection(marker.getRange());
      if (intersection) {
        result.push([marker.name, intersection]);
      }
    }
    return result;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/conversion/conversion.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Conversion = class {
    constructor(downcastDispatchers, upcastDispatchers) {
      this._helpers = new Map();
      this._downcast = toArray(downcastDispatchers);
      this._createConversionHelpers({name: "downcast", dispatchers: this._downcast, isDowncast: true});
      this._upcast = toArray(upcastDispatchers);
      this._createConversionHelpers({name: "upcast", dispatchers: this._upcast, isDowncast: false});
    }
    addAlias(alias, dispatcher) {
      const isDowncast = this._downcast.includes(dispatcher);
      const isUpcast = this._upcast.includes(dispatcher);
      if (!isUpcast && !isDowncast) {
        throw new ckeditorerror_default("conversion-add-alias-dispatcher-not-registered", this);
      }
      this._createConversionHelpers({name: alias, dispatchers: [dispatcher], isDowncast});
    }
    for(groupName) {
      if (!this._helpers.has(groupName)) {
        throw new ckeditorerror_default("conversion-for-unknown-group", this);
      }
      return this._helpers.get(groupName);
    }
    elementToElement(definition) {
      this.for("downcast").elementToElement(definition);
      for (const {model: model3, view: view19} of _getAllUpcastDefinitions(definition)) {
        this.for("upcast").elementToElement({
          model: model3,
          view: view19,
          converterPriority: definition.converterPriority
        });
      }
    }
    attributeToElement(definition) {
      this.for("downcast").attributeToElement(definition);
      for (const {model: model3, view: view19} of _getAllUpcastDefinitions(definition)) {
        this.for("upcast").elementToAttribute({
          view: view19,
          model: model3,
          converterPriority: definition.converterPriority
        });
      }
    }
    attributeToAttribute(definition) {
      this.for("downcast").attributeToAttribute(definition);
      for (const {model: model3, view: view19} of _getAllUpcastDefinitions(definition)) {
        this.for("upcast").attributeToAttribute({
          view: view19,
          model: model3
        });
      }
    }
    _createConversionHelpers({name, dispatchers, isDowncast}) {
      if (this._helpers.has(name)) {
        throw new ckeditorerror_default("conversion-group-exists", this);
      }
      const helpers = isDowncast ? new downcasthelpers_default(dispatchers) : new upcasthelpers_default(dispatchers);
      this._helpers.set(name, helpers);
    }
  };
  var conversion_default = Conversion;
  function* _getAllUpcastDefinitions(definition) {
    if (definition.model.values) {
      for (const value of definition.model.values) {
        const model3 = {key: definition.model.key, value};
        const view19 = definition.view[value];
        const upcastAlso = definition.upcastAlso ? definition.upcastAlso[value] : void 0;
        yield* _getUpcastDefinition(model3, view19, upcastAlso);
      }
    } else {
      yield* _getUpcastDefinition(definition.model, definition.view, definition.upcastAlso);
    }
  }
  function* _getUpcastDefinition(model3, view19, upcastAlso) {
    yield {model: model3, view: view19};
    if (upcastAlso) {
      for (const upcastAlsoItem of toArray(upcastAlso)) {
        yield {model: model3, view: upcastAlsoItem};
      }
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/batch.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Batch = class {
    constructor(type = "default") {
      this.operations = [];
      this.type = type;
    }
    get baseVersion() {
      for (const op of this.operations) {
        if (op.baseVersion !== null) {
          return op.baseVersion;
        }
      }
      return null;
    }
    addOperation(operation12) {
      operation12.batch = this;
      this.operations.push(operation12);
      return operation12;
    }
  };
  var batch_default = Batch;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/operation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Operation = class {
    constructor(baseVersion) {
      this.baseVersion = baseVersion;
      this.isDocumentOperation = this.baseVersion !== null;
      this.batch = null;
    }
    _validate() {
    }
    toJSON() {
      const json = Object.assign({}, this);
      json.__className = this.constructor.className;
      delete json.batch;
      delete json.isDocumentOperation;
      return json;
    }
    static get className() {
      return "Operation";
    }
    static fromJSON(json) {
      return new this(json.baseVersion);
    }
  };
  var operation_default = Operation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/documentfragment.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DocumentFragment2 = class {
    constructor(children) {
      this.markers = new Map();
      this._children = new nodelist_default();
      if (children) {
        this._insertChild(0, children);
      }
    }
    [Symbol.iterator]() {
      return this.getChildren();
    }
    get childCount() {
      return this._children.length;
    }
    get maxOffset() {
      return this._children.maxOffset;
    }
    get isEmpty() {
      return this.childCount === 0;
    }
    get root() {
      return this;
    }
    get parent() {
      return null;
    }
    is(type) {
      return type === "documentFragment" || type === "model:documentFragment";
    }
    getChild(index) {
      return this._children.getNode(index);
    }
    getChildren() {
      return this._children[Symbol.iterator]();
    }
    getChildIndex(node12) {
      return this._children.getNodeIndex(node12);
    }
    getChildStartOffset(node12) {
      return this._children.getNodeStartOffset(node12);
    }
    getPath() {
      return [];
    }
    getNodeByPath(relativePath) {
      let node12 = this;
      for (const index of relativePath) {
        node12 = node12.getChild(node12.offsetToIndex(index));
      }
      return node12;
    }
    offsetToIndex(offset) {
      return this._children.offsetToIndex(offset);
    }
    toJSON() {
      const json = [];
      for (const node12 of this._children) {
        json.push(node12.toJSON());
      }
      return json;
    }
    static fromJSON(json) {
      const children = [];
      for (const child of json) {
        if (child.name) {
          children.push(element_default2.fromJSON(child));
        } else {
          children.push(text_default2.fromJSON(child));
        }
      }
      return new DocumentFragment2(children);
    }
    _appendChild(items) {
      this._insertChild(this.childCount, items);
    }
    _insertChild(index, items) {
      const nodes = normalize4(items);
      for (const node12 of nodes) {
        if (node12.parent !== null) {
          node12._remove();
        }
        node12.parent = this;
      }
      this._children._insertNodes(index, nodes);
    }
    _removeChildren(index, howMany = 1) {
      const nodes = this._children._removeNodes(index, howMany);
      for (const node12 of nodes) {
        node12.parent = null;
      }
      return nodes;
    }
  };
  var documentfragment_default2 = DocumentFragment2;
  function normalize4(nodes) {
    if (typeof nodes == "string") {
      return [new text_default2(nodes)];
    }
    if (!isIterable(nodes)) {
      nodes = [nodes];
    }
    return Array.from(nodes).map((node12) => {
      if (typeof node12 == "string") {
        return new text_default2(node12);
      }
      if (node12 instanceof textproxy_default2) {
        return new text_default2(node12.data, node12.getAttributes());
      }
      return node12;
    });
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/utils.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function _insert(position30, nodes) {
    nodes = _normalizeNodes(nodes);
    const offset = nodes.reduce((sum, node12) => sum + node12.offsetSize, 0);
    const parent3 = position30.parent;
    _splitNodeAtPosition(position30);
    const index = position30.index;
    parent3._insertChild(index, nodes);
    _mergeNodesAtIndex(parent3, index + nodes.length);
    _mergeNodesAtIndex(parent3, index);
    return new range_default2(position30, position30.getShiftedBy(offset));
  }
  function _remove(range29) {
    if (!range29.isFlat) {
      throw new ckeditorerror_default("operation-utils-remove-range-not-flat", this);
    }
    const parent3 = range29.start.parent;
    _splitNodeAtPosition(range29.start);
    _splitNodeAtPosition(range29.end);
    const removed = parent3._removeChildren(range29.start.index, range29.end.index - range29.start.index);
    _mergeNodesAtIndex(parent3, range29.start.index);
    return removed;
  }
  function _move(sourceRange, targetPosition) {
    if (!sourceRange.isFlat) {
      throw new ckeditorerror_default("operation-utils-move-range-not-flat", this);
    }
    const nodes = _remove(sourceRange);
    targetPosition = targetPosition._getTransformedByDeletion(sourceRange.start, sourceRange.end.offset - sourceRange.start.offset);
    return _insert(targetPosition, nodes);
  }
  function _setAttribute(range29, key, value) {
    _splitNodeAtPosition(range29.start);
    _splitNodeAtPosition(range29.end);
    for (const item of range29.getItems({shallow: true})) {
      const node12 = item.is("$textProxy") ? item.textNode : item;
      if (value !== null) {
        node12._setAttribute(key, value);
      } else {
        node12._removeAttribute(key);
      }
      _mergeNodesAtIndex(node12.parent, node12.index);
    }
    _mergeNodesAtIndex(range29.end.parent, range29.end.index);
  }
  function _normalizeNodes(nodes) {
    const normalized = [];
    if (!(nodes instanceof Array)) {
      nodes = [nodes];
    }
    for (let i = 0; i < nodes.length; i++) {
      if (typeof nodes[i] == "string") {
        normalized.push(new text_default2(nodes[i]));
      } else if (nodes[i] instanceof textproxy_default2) {
        normalized.push(new text_default2(nodes[i].data, nodes[i].getAttributes()));
      } else if (nodes[i] instanceof documentfragment_default2 || nodes[i] instanceof nodelist_default) {
        for (const child of nodes[i]) {
          normalized.push(child);
        }
      } else if (nodes[i] instanceof node_default2) {
        normalized.push(nodes[i]);
      }
    }
    for (let i = 1; i < normalized.length; i++) {
      const node12 = normalized[i];
      const prev = normalized[i - 1];
      if (node12 instanceof text_default2 && prev instanceof text_default2 && _haveSameAttributes(node12, prev)) {
        normalized.splice(i - 1, 2, new text_default2(prev.data + node12.data, prev.getAttributes()));
        i--;
      }
    }
    return normalized;
  }
  function _mergeNodesAtIndex(element18, index) {
    const nodeBefore = element18.getChild(index - 1);
    const nodeAfter = element18.getChild(index);
    if (nodeBefore && nodeAfter && nodeBefore.is("$text") && nodeAfter.is("$text") && _haveSameAttributes(nodeBefore, nodeAfter)) {
      const mergedNode = new text_default2(nodeBefore.data + nodeAfter.data, nodeBefore.getAttributes());
      element18._removeChildren(index - 1, 2);
      element18._insertChild(index - 1, mergedNode);
    }
  }
  function _splitNodeAtPosition(position30) {
    const textNode = position30.textNode;
    const element18 = position30.parent;
    if (textNode) {
      const offsetDiff = position30.offset - textNode.startOffset;
      const index = textNode.index;
      element18._removeChildren(index, 1);
      const firstPart = new text_default2(textNode.data.substr(0, offsetDiff), textNode.getAttributes());
      const secondPart = new text_default2(textNode.data.substr(offsetDiff), textNode.getAttributes());
      element18._insertChild(index, [firstPart, secondPart]);
    }
  }
  function _haveSameAttributes(nodeA, nodeB) {
    const iteratorA = nodeA.getAttributes();
    const iteratorB = nodeB.getAttributes();
    for (const attr of iteratorA) {
      if (attr[1] !== nodeB.getAttribute(attr[0])) {
        return false;
      }
      iteratorB.next();
    }
    return iteratorB.next().done;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/attributeoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var AttributeOperation = class extends operation_default {
    constructor(range29, key, oldValue, newValue, baseVersion) {
      super(baseVersion);
      this.range = range29.clone();
      this.key = key;
      this.oldValue = oldValue === void 0 ? null : oldValue;
      this.newValue = newValue === void 0 ? null : newValue;
    }
    get type() {
      if (this.oldValue === null) {
        return "addAttribute";
      } else if (this.newValue === null) {
        return "removeAttribute";
      } else {
        return "changeAttribute";
      }
    }
    clone() {
      return new AttributeOperation(this.range, this.key, this.oldValue, this.newValue, this.baseVersion);
    }
    getReversed() {
      return new AttributeOperation(this.range, this.key, this.newValue, this.oldValue, this.baseVersion + 1);
    }
    toJSON() {
      const json = super.toJSON();
      json.range = this.range.toJSON();
      return json;
    }
    _validate() {
      if (!this.range.isFlat) {
        throw new ckeditorerror_default("attribute-operation-range-not-flat", this);
      }
      for (const item of this.range.getItems({shallow: true})) {
        if (this.oldValue !== null && !isEqual_default(item.getAttribute(this.key), this.oldValue)) {
          throw new ckeditorerror_default("attribute-operation-wrong-old-value", this, {item, key: this.key, value: this.oldValue});
        }
        if (this.oldValue === null && this.newValue !== null && item.hasAttribute(this.key)) {
          throw new ckeditorerror_default("attribute-operation-attribute-exists", this, {node: item, key: this.key});
        }
      }
    }
    _execute() {
      if (!isEqual_default(this.oldValue, this.newValue)) {
        _setAttribute(this.range, this.key, this.newValue);
      }
    }
    static get className() {
      return "AttributeOperation";
    }
    static fromJSON(json, document5) {
      return new AttributeOperation(range_default2.fromJSON(json.range, document5), json.key, json.oldValue, json.newValue, json.baseVersion);
    }
  };
  var attributeoperation_default = AttributeOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/detachoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DetachOperation = class extends operation_default {
    constructor(sourcePosition, howMany) {
      super(null);
      this.sourcePosition = sourcePosition.clone();
      this.howMany = howMany;
    }
    get type() {
      return "detach";
    }
    toJSON() {
      const json = super.toJSON();
      json.sourcePosition = this.sourcePosition.toJSON();
      return json;
    }
    _validate() {
      if (this.sourcePosition.root.document) {
        throw new ckeditorerror_default("detach-operation-on-document-node", this);
      }
    }
    _execute() {
      _remove(range_default2._createFromPositionAndShift(this.sourcePosition, this.howMany));
    }
    static get className() {
      return "DetachOperation";
    }
  };
  var detachoperation_default = DetachOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/moveoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var MoveOperation = class extends operation_default {
    constructor(sourcePosition, howMany, targetPosition, baseVersion) {
      super(baseVersion);
      this.sourcePosition = sourcePosition.clone();
      this.sourcePosition.stickiness = "toNext";
      this.howMany = howMany;
      this.targetPosition = targetPosition.clone();
      this.targetPosition.stickiness = "toNone";
    }
    get type() {
      if (this.targetPosition.root.rootName == "$graveyard") {
        return "remove";
      } else if (this.sourcePosition.root.rootName == "$graveyard") {
        return "reinsert";
      }
      return "move";
    }
    clone() {
      return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.baseVersion);
    }
    getMovedRangeStart() {
      return this.targetPosition._getTransformedByDeletion(this.sourcePosition, this.howMany);
    }
    getReversed() {
      const newTargetPosition = this.sourcePosition._getTransformedByInsertion(this.targetPosition, this.howMany);
      return new this.constructor(this.getMovedRangeStart(), this.howMany, newTargetPosition, this.baseVersion + 1);
    }
    _validate() {
      const sourceElement = this.sourcePosition.parent;
      const targetElement = this.targetPosition.parent;
      const sourceOffset = this.sourcePosition.offset;
      const targetOffset = this.targetPosition.offset;
      if (sourceOffset + this.howMany > sourceElement.maxOffset) {
        throw new ckeditorerror_default("move-operation-nodes-do-not-exist", this);
      } else if (sourceElement === targetElement && sourceOffset < targetOffset && targetOffset < sourceOffset + this.howMany) {
        throw new ckeditorerror_default("move-operation-range-into-itself", this);
      } else if (this.sourcePosition.root == this.targetPosition.root) {
        if (compareArrays(this.sourcePosition.getParentPath(), this.targetPosition.getParentPath()) == "prefix") {
          const i = this.sourcePosition.path.length - 1;
          if (this.targetPosition.path[i] >= sourceOffset && this.targetPosition.path[i] < sourceOffset + this.howMany) {
            throw new ckeditorerror_default("move-operation-node-into-itself", this);
          }
        }
      }
    }
    _execute() {
      _move(range_default2._createFromPositionAndShift(this.sourcePosition, this.howMany), this.targetPosition);
    }
    toJSON() {
      const json = super.toJSON();
      json.sourcePosition = this.sourcePosition.toJSON();
      json.targetPosition = this.targetPosition.toJSON();
      return json;
    }
    static get className() {
      return "MoveOperation";
    }
    static fromJSON(json, document5) {
      const sourcePosition = position_default2.fromJSON(json.sourcePosition, document5);
      const targetPosition = position_default2.fromJSON(json.targetPosition, document5);
      return new this(sourcePosition, json.howMany, targetPosition, json.baseVersion);
    }
  };
  var moveoperation_default = MoveOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/insertoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var InsertOperation = class extends operation_default {
    constructor(position30, nodes, baseVersion) {
      super(baseVersion);
      this.position = position30.clone();
      this.position.stickiness = "toNone";
      this.nodes = new nodelist_default(_normalizeNodes(nodes));
      this.shouldReceiveAttributes = false;
    }
    get type() {
      return "insert";
    }
    get howMany() {
      return this.nodes.maxOffset;
    }
    clone() {
      const nodes = new nodelist_default([...this.nodes].map((node12) => node12._clone(true)));
      const insert = new InsertOperation(this.position, nodes, this.baseVersion);
      insert.shouldReceiveAttributes = this.shouldReceiveAttributes;
      return insert;
    }
    getReversed() {
      const graveyard = this.position.root.document.graveyard;
      const gyPosition = new position_default2(graveyard, [0]);
      return new moveoperation_default(this.position, this.nodes.maxOffset, gyPosition, this.baseVersion + 1);
    }
    _validate() {
      const targetElement = this.position.parent;
      if (!targetElement || targetElement.maxOffset < this.position.offset) {
        throw new ckeditorerror_default("insert-operation-position-invalid", this);
      }
    }
    _execute() {
      const originalNodes = this.nodes;
      this.nodes = new nodelist_default([...originalNodes].map((node12) => node12._clone(true)));
      _insert(this.position, originalNodes);
    }
    toJSON() {
      const json = super.toJSON();
      json.position = this.position.toJSON();
      json.nodes = this.nodes.toJSON();
      return json;
    }
    static get className() {
      return "InsertOperation";
    }
    static fromJSON(json, document5) {
      const children = [];
      for (const child of json.nodes) {
        if (child.name) {
          children.push(element_default2.fromJSON(child));
        } else {
          children.push(text_default2.fromJSON(child));
        }
      }
      const insert = new InsertOperation(position_default2.fromJSON(json.position, document5), children, json.baseVersion);
      insert.shouldReceiveAttributes = json.shouldReceiveAttributes;
      return insert;
    }
  };
  var insertoperation_default = InsertOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/markeroperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var MarkerOperation = class extends operation_default {
    constructor(name, oldRange, newRange, markers, affectsData, baseVersion) {
      super(baseVersion);
      this.name = name;
      this.oldRange = oldRange ? oldRange.clone() : null;
      this.newRange = newRange ? newRange.clone() : null;
      this.affectsData = affectsData;
      this._markers = markers;
    }
    get type() {
      return "marker";
    }
    clone() {
      return new MarkerOperation(this.name, this.oldRange, this.newRange, this._markers, this.affectsData, this.baseVersion);
    }
    getReversed() {
      return new MarkerOperation(this.name, this.newRange, this.oldRange, this._markers, this.affectsData, this.baseVersion + 1);
    }
    _execute() {
      const type = this.newRange ? "_set" : "_remove";
      this._markers[type](this.name, this.newRange, true, this.affectsData);
    }
    toJSON() {
      const json = super.toJSON();
      if (this.oldRange) {
        json.oldRange = this.oldRange.toJSON();
      }
      if (this.newRange) {
        json.newRange = this.newRange.toJSON();
      }
      delete json._markers;
      return json;
    }
    static get className() {
      return "MarkerOperation";
    }
    static fromJSON(json, document5) {
      return new MarkerOperation(json.name, json.oldRange ? range_default2.fromJSON(json.oldRange, document5) : null, json.newRange ? range_default2.fromJSON(json.newRange, document5) : null, document5.model.markers, json.affectsData, json.baseVersion);
    }
  };
  var markeroperation_default = MarkerOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/renameoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var RenameOperation = class extends operation_default {
    constructor(position30, oldName, newName, baseVersion) {
      super(baseVersion);
      this.position = position30;
      this.position.stickiness = "toNext";
      this.oldName = oldName;
      this.newName = newName;
    }
    get type() {
      return "rename";
    }
    clone() {
      return new RenameOperation(this.position.clone(), this.oldName, this.newName, this.baseVersion);
    }
    getReversed() {
      return new RenameOperation(this.position.clone(), this.newName, this.oldName, this.baseVersion + 1);
    }
    _validate() {
      const element18 = this.position.nodeAfter;
      if (!(element18 instanceof element_default2)) {
        throw new ckeditorerror_default("rename-operation-wrong-position", this);
      } else if (element18.name !== this.oldName) {
        throw new ckeditorerror_default("rename-operation-wrong-name", this);
      }
    }
    _execute() {
      const element18 = this.position.nodeAfter;
      element18.name = this.newName;
    }
    toJSON() {
      const json = super.toJSON();
      json.position = this.position.toJSON();
      return json;
    }
    static get className() {
      return "RenameOperation";
    }
    static fromJSON(json, document5) {
      return new RenameOperation(position_default2.fromJSON(json.position, document5), json.oldName, json.newName, json.baseVersion);
    }
  };
  var renameoperation_default = RenameOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/rootattributeoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var RootAttributeOperation = class extends operation_default {
    constructor(root11, key, oldValue, newValue, baseVersion) {
      super(baseVersion);
      this.root = root11;
      this.key = key;
      this.oldValue = oldValue;
      this.newValue = newValue;
    }
    get type() {
      if (this.oldValue === null) {
        return "addRootAttribute";
      } else if (this.newValue === null) {
        return "removeRootAttribute";
      } else {
        return "changeRootAttribute";
      }
    }
    clone() {
      return new RootAttributeOperation(this.root, this.key, this.oldValue, this.newValue, this.baseVersion);
    }
    getReversed() {
      return new RootAttributeOperation(this.root, this.key, this.newValue, this.oldValue, this.baseVersion + 1);
    }
    _validate() {
      if (this.root != this.root.root || this.root.is("documentFragment")) {
        throw new ckeditorerror_default("rootattribute-operation-not-a-root", this, {root: this.root, key: this.key});
      }
      if (this.oldValue !== null && this.root.getAttribute(this.key) !== this.oldValue) {
        throw new ckeditorerror_default("rootattribute-operation-wrong-old-value", this, {root: this.root, key: this.key});
      }
      if (this.oldValue === null && this.newValue !== null && this.root.hasAttribute(this.key)) {
        throw new ckeditorerror_default("rootattribute-operation-attribute-exists", this, {root: this.root, key: this.key});
      }
    }
    _execute() {
      if (this.newValue !== null) {
        this.root._setAttribute(this.key, this.newValue);
      } else {
        this.root._removeAttribute(this.key);
      }
    }
    toJSON() {
      const json = super.toJSON();
      json.root = this.root.toJSON();
      return json;
    }
    static get className() {
      return "RootAttributeOperation";
    }
    static fromJSON(json, document5) {
      if (!document5.getRoot(json.root)) {
        throw new ckeditorerror_default("rootattribute-operation-fromjson-no-root", this, {rootName: json.root});
      }
      return new RootAttributeOperation(document5.getRoot(json.root), json.key, json.oldValue, json.newValue, json.baseVersion);
    }
  };
  var rootattributeoperation_default = RootAttributeOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/mergeoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var MergeOperation = class extends operation_default {
    constructor(sourcePosition, howMany, targetPosition, graveyardPosition, baseVersion) {
      super(baseVersion);
      this.sourcePosition = sourcePosition.clone();
      this.sourcePosition.stickiness = "toPrevious";
      this.howMany = howMany;
      this.targetPosition = targetPosition.clone();
      this.targetPosition.stickiness = "toNext";
      this.graveyardPosition = graveyardPosition.clone();
    }
    get type() {
      return "merge";
    }
    get deletionPosition() {
      return new position_default2(this.sourcePosition.root, this.sourcePosition.path.slice(0, -1));
    }
    get movedRange() {
      const end = this.sourcePosition.getShiftedBy(Number.POSITIVE_INFINITY);
      return new range_default2(this.sourcePosition, end);
    }
    clone() {
      return new this.constructor(this.sourcePosition, this.howMany, this.targetPosition, this.graveyardPosition, this.baseVersion);
    }
    getReversed() {
      const targetPosition = this.targetPosition._getTransformedByMergeOperation(this);
      const path = this.sourcePosition.path.slice(0, -1);
      const insertionPosition = new position_default2(this.sourcePosition.root, path)._getTransformedByMergeOperation(this);
      const split = new splitoperation_default(targetPosition, this.howMany, this.graveyardPosition, this.baseVersion + 1);
      split.insertionPosition = insertionPosition;
      return split;
    }
    _validate() {
      const sourceElement = this.sourcePosition.parent;
      const targetElement = this.targetPosition.parent;
      if (!sourceElement.parent) {
        throw new ckeditorerror_default("merge-operation-source-position-invalid", this);
      } else if (!targetElement.parent) {
        throw new ckeditorerror_default("merge-operation-target-position-invalid", this);
      } else if (this.howMany != sourceElement.maxOffset) {
        throw new ckeditorerror_default("merge-operation-how-many-invalid", this);
      }
    }
    _execute() {
      const mergedElement = this.sourcePosition.parent;
      const sourceRange = range_default2._createIn(mergedElement);
      _move(sourceRange, this.targetPosition);
      _move(range_default2._createOn(mergedElement), this.graveyardPosition);
    }
    toJSON() {
      const json = super.toJSON();
      json.sourcePosition = json.sourcePosition.toJSON();
      json.targetPosition = json.targetPosition.toJSON();
      json.graveyardPosition = json.graveyardPosition.toJSON();
      return json;
    }
    static get className() {
      return "MergeOperation";
    }
    static fromJSON(json, document5) {
      const sourcePosition = position_default2.fromJSON(json.sourcePosition, document5);
      const targetPosition = position_default2.fromJSON(json.targetPosition, document5);
      const graveyardPosition = position_default2.fromJSON(json.graveyardPosition, document5);
      return new this(sourcePosition, json.howMany, targetPosition, graveyardPosition, json.baseVersion);
    }
  };
  var mergeoperation_default = MergeOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/splitoperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var SplitOperation = class extends operation_default {
    constructor(splitPosition, howMany, graveyardPosition, baseVersion) {
      super(baseVersion);
      this.splitPosition = splitPosition.clone();
      this.splitPosition.stickiness = "toNext";
      this.howMany = howMany;
      this.insertionPosition = SplitOperation.getInsertionPosition(splitPosition);
      this.insertionPosition.stickiness = "toNone";
      this.graveyardPosition = graveyardPosition ? graveyardPosition.clone() : null;
      if (this.graveyardPosition) {
        this.graveyardPosition.stickiness = "toNext";
      }
    }
    get type() {
      return "split";
    }
    get moveTargetPosition() {
      const path = this.insertionPosition.path.slice();
      path.push(0);
      return new position_default2(this.insertionPosition.root, path);
    }
    get movedRange() {
      const end = this.splitPosition.getShiftedBy(Number.POSITIVE_INFINITY);
      return new range_default2(this.splitPosition, end);
    }
    clone() {
      const split = new this.constructor(this.splitPosition, this.howMany, this.graveyardPosition, this.baseVersion);
      split.insertionPosition = this.insertionPosition;
      return split;
    }
    getReversed() {
      const graveyard = this.splitPosition.root.document.graveyard;
      const graveyardPosition = new position_default2(graveyard, [0]);
      return new mergeoperation_default(this.moveTargetPosition, this.howMany, this.splitPosition, graveyardPosition, this.baseVersion + 1);
    }
    _validate() {
      const element18 = this.splitPosition.parent;
      const offset = this.splitPosition.offset;
      if (!element18 || element18.maxOffset < offset) {
        throw new ckeditorerror_default("split-operation-position-invalid", this);
      } else if (!element18.parent) {
        throw new ckeditorerror_default("split-operation-split-in-root", this);
      } else if (this.howMany != element18.maxOffset - this.splitPosition.offset) {
        throw new ckeditorerror_default("split-operation-how-many-invalid", this);
      } else if (this.graveyardPosition && !this.graveyardPosition.nodeAfter) {
        throw new ckeditorerror_default("split-operation-graveyard-position-invalid", this);
      }
    }
    _execute() {
      const splitElement = this.splitPosition.parent;
      if (this.graveyardPosition) {
        _move(range_default2._createFromPositionAndShift(this.graveyardPosition, 1), this.insertionPosition);
      } else {
        const newElement = splitElement._clone();
        _insert(this.insertionPosition, newElement);
      }
      const sourceRange = new range_default2(position_default2._createAt(splitElement, this.splitPosition.offset), position_default2._createAt(splitElement, splitElement.maxOffset));
      _move(sourceRange, this.moveTargetPosition);
    }
    toJSON() {
      const json = super.toJSON();
      json.splitPosition = this.splitPosition.toJSON();
      json.insertionPosition = this.insertionPosition.toJSON();
      if (this.graveyardPosition) {
        json.graveyardPosition = this.graveyardPosition.toJSON();
      }
      return json;
    }
    static get className() {
      return "SplitOperation";
    }
    static getInsertionPosition(splitPosition) {
      const path = splitPosition.path.slice(0, -1);
      path[path.length - 1]++;
      return new position_default2(splitPosition.root, path);
    }
    static fromJSON(json, document5) {
      const splitPosition = position_default2.fromJSON(json.splitPosition, document5);
      const insertionPosition = position_default2.fromJSON(json.insertionPosition, document5);
      const graveyardPosition = json.graveyardPosition ? position_default2.fromJSON(json.graveyardPosition, document5) : null;
      const split = new this(splitPosition, json.howMany, graveyardPosition, json.baseVersion);
      split.insertionPosition = insertionPosition;
      return split;
    }
  };
  var splitoperation_default = SplitOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/rootelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var RootElement = class extends element_default2 {
    constructor(document5, name, rootName = "main") {
      super(name);
      this._document = document5;
      this.rootName = rootName;
    }
    get document() {
      return this._document;
    }
    is(type, name) {
      if (!name) {
        return type === "rootElement" || type === "model:rootElement" || type === "element" || type === "model:element" || type === "node" || type === "model:node";
      }
      return name === this.name && (type === "rootElement" || type === "model:rootElement" || type === "element" || type === "model:element");
    }
    toJSON() {
      return this.rootName;
    }
  };
  var rootelement_default = RootElement;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/writer.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Writer = class {
    constructor(model3, batch2) {
      this.model = model3;
      this.batch = batch2;
    }
    createText(data, attributes) {
      return new text_default2(data, attributes);
    }
    createElement(name, attributes) {
      return new element_default2(name, attributes);
    }
    createDocumentFragment() {
      return new documentfragment_default2();
    }
    cloneElement(element18, deep = true) {
      return element18._clone(deep);
    }
    insert(item, itemOrPosition, offset = 0) {
      this._assertWriterUsedCorrectly();
      if (item instanceof text_default2 && item.data == "") {
        return;
      }
      const position30 = position_default2._createAt(itemOrPosition, offset);
      if (item.parent) {
        if (isSameTree(item.root, position30.root)) {
          this.move(range_default2._createOn(item), position30);
          return;
        } else {
          if (item.root.document) {
            throw new ckeditorerror_default("model-writer-insert-forbidden-move", this);
          } else {
            this.remove(item);
          }
        }
      }
      const version7 = position30.root.document ? position30.root.document.version : null;
      const insert = new insertoperation_default(position30, item, version7);
      if (item instanceof text_default2) {
        insert.shouldReceiveAttributes = true;
      }
      this.batch.addOperation(insert);
      this.model.applyOperation(insert);
      if (item instanceof documentfragment_default2) {
        for (const [markerName, markerRange] of item.markers) {
          const rangeRootPosition = position_default2._createAt(markerRange.root, 0);
          const range29 = new range_default2(markerRange.start._getCombined(rangeRootPosition, position30), markerRange.end._getCombined(rangeRootPosition, position30));
          const options = {range: range29, usingOperation: true, affectsData: true};
          if (this.model.markers.has(markerName)) {
            this.updateMarker(markerName, options);
          } else {
            this.addMarker(markerName, options);
          }
        }
      }
    }
    insertText(text16, attributes, itemOrPosition, offset) {
      if (attributes instanceof documentfragment_default2 || attributes instanceof element_default2 || attributes instanceof position_default2) {
        this.insert(this.createText(text16), attributes, itemOrPosition);
      } else {
        this.insert(this.createText(text16, attributes), itemOrPosition, offset);
      }
    }
    insertElement(name, attributes, itemOrPosition, offset) {
      if (attributes instanceof documentfragment_default2 || attributes instanceof element_default2 || attributes instanceof position_default2) {
        this.insert(this.createElement(name), attributes, itemOrPosition);
      } else {
        this.insert(this.createElement(name, attributes), itemOrPosition, offset);
      }
    }
    append(item, parent3) {
      this.insert(item, parent3, "end");
    }
    appendText(text16, attributes, parent3) {
      if (attributes instanceof documentfragment_default2 || attributes instanceof element_default2) {
        this.insert(this.createText(text16), attributes, "end");
      } else {
        this.insert(this.createText(text16, attributes), parent3, "end");
      }
    }
    appendElement(name, attributes, parent3) {
      if (attributes instanceof documentfragment_default2 || attributes instanceof element_default2) {
        this.insert(this.createElement(name), attributes, "end");
      } else {
        this.insert(this.createElement(name, attributes), parent3, "end");
      }
    }
    setAttribute(key, value, itemOrRange) {
      this._assertWriterUsedCorrectly();
      if (itemOrRange instanceof range_default2) {
        const ranges = itemOrRange.getMinimalFlatRanges();
        for (const range29 of ranges) {
          setAttributeOnRange(this, key, value, range29);
        }
      } else {
        setAttributeOnItem(this, key, value, itemOrRange);
      }
    }
    setAttributes(attributes, itemOrRange) {
      for (const [key, val] of toMap(attributes)) {
        this.setAttribute(key, val, itemOrRange);
      }
    }
    removeAttribute(key, itemOrRange) {
      this._assertWriterUsedCorrectly();
      if (itemOrRange instanceof range_default2) {
        const ranges = itemOrRange.getMinimalFlatRanges();
        for (const range29 of ranges) {
          setAttributeOnRange(this, key, null, range29);
        }
      } else {
        setAttributeOnItem(this, key, null, itemOrRange);
      }
    }
    clearAttributes(itemOrRange) {
      this._assertWriterUsedCorrectly();
      const removeAttributesFromItem = (item) => {
        for (const attribute of item.getAttributeKeys()) {
          this.removeAttribute(attribute, item);
        }
      };
      if (!(itemOrRange instanceof range_default2)) {
        removeAttributesFromItem(itemOrRange);
      } else {
        for (const item of itemOrRange.getItems()) {
          removeAttributesFromItem(item);
        }
      }
    }
    move(range29, itemOrPosition, offset) {
      this._assertWriterUsedCorrectly();
      if (!(range29 instanceof range_default2)) {
        throw new ckeditorerror_default("writer-move-invalid-range", this);
      }
      if (!range29.isFlat) {
        throw new ckeditorerror_default("writer-move-range-not-flat", this);
      }
      const position30 = position_default2._createAt(itemOrPosition, offset);
      if (position30.isEqual(range29.start)) {
        return;
      }
      this._addOperationForAffectedMarkers("move", range29);
      if (!isSameTree(range29.root, position30.root)) {
        throw new ckeditorerror_default("writer-move-different-document", this);
      }
      const version7 = range29.root.document ? range29.root.document.version : null;
      const operation12 = new moveoperation_default(range29.start, range29.end.offset - range29.start.offset, position30, version7);
      this.batch.addOperation(operation12);
      this.model.applyOperation(operation12);
    }
    remove(itemOrRange) {
      this._assertWriterUsedCorrectly();
      const rangeToRemove = itemOrRange instanceof range_default2 ? itemOrRange : range_default2._createOn(itemOrRange);
      const ranges = rangeToRemove.getMinimalFlatRanges().reverse();
      for (const flat of ranges) {
        this._addOperationForAffectedMarkers("move", flat);
        applyRemoveOperation(flat.start, flat.end.offset - flat.start.offset, this.batch, this.model);
      }
    }
    merge(position30) {
      this._assertWriterUsedCorrectly();
      const nodeBefore = position30.nodeBefore;
      const nodeAfter = position30.nodeAfter;
      this._addOperationForAffectedMarkers("merge", position30);
      if (!(nodeBefore instanceof element_default2)) {
        throw new ckeditorerror_default("writer-merge-no-element-before", this);
      }
      if (!(nodeAfter instanceof element_default2)) {
        throw new ckeditorerror_default("writer-merge-no-element-after", this);
      }
      if (!position30.root.document) {
        this._mergeDetached(position30);
      } else {
        this._merge(position30);
      }
    }
    createPositionFromPath(root11, path, stickiness) {
      return this.model.createPositionFromPath(root11, path, stickiness);
    }
    createPositionAt(itemOrPosition, offset) {
      return this.model.createPositionAt(itemOrPosition, offset);
    }
    createPositionAfter(item) {
      return this.model.createPositionAfter(item);
    }
    createPositionBefore(item) {
      return this.model.createPositionBefore(item);
    }
    createRange(start, end) {
      return this.model.createRange(start, end);
    }
    createRangeIn(element18) {
      return this.model.createRangeIn(element18);
    }
    createRangeOn(element18) {
      return this.model.createRangeOn(element18);
    }
    createSelection(selectable, placeOrOffset, options) {
      return this.model.createSelection(selectable, placeOrOffset, options);
    }
    _mergeDetached(position30) {
      const nodeBefore = position30.nodeBefore;
      const nodeAfter = position30.nodeAfter;
      this.move(range_default2._createIn(nodeAfter), position_default2._createAt(nodeBefore, "end"));
      this.remove(nodeAfter);
    }
    _merge(position30) {
      const targetPosition = position_default2._createAt(position30.nodeBefore, "end");
      const sourcePosition = position_default2._createAt(position30.nodeAfter, 0);
      const graveyard = position30.root.document.graveyard;
      const graveyardPosition = new position_default2(graveyard, [0]);
      const version7 = position30.root.document.version;
      const merge2 = new mergeoperation_default(sourcePosition, position30.nodeAfter.maxOffset, targetPosition, graveyardPosition, version7);
      this.batch.addOperation(merge2);
      this.model.applyOperation(merge2);
    }
    rename(element18, newName) {
      this._assertWriterUsedCorrectly();
      if (!(element18 instanceof element_default2)) {
        throw new ckeditorerror_default("writer-rename-not-element-instance", this);
      }
      const version7 = element18.root.document ? element18.root.document.version : null;
      const renameOperation = new renameoperation_default(position_default2._createBefore(element18), element18.name, newName, version7);
      this.batch.addOperation(renameOperation);
      this.model.applyOperation(renameOperation);
    }
    split(position30, limitElement) {
      this._assertWriterUsedCorrectly();
      let splitElement = position30.parent;
      if (!splitElement.parent) {
        throw new ckeditorerror_default("writer-split-element-no-parent", this);
      }
      if (!limitElement) {
        limitElement = splitElement.parent;
      }
      if (!position30.parent.getAncestors({includeSelf: true}).includes(limitElement)) {
        throw new ckeditorerror_default("writer-split-invalid-limit-element", this);
      }
      let firstSplitElement, firstCopyElement;
      do {
        const version7 = splitElement.root.document ? splitElement.root.document.version : null;
        const howMany = splitElement.maxOffset - position30.offset;
        const split = new splitoperation_default(position30, howMany, null, version7);
        this.batch.addOperation(split);
        this.model.applyOperation(split);
        if (!firstSplitElement && !firstCopyElement) {
          firstSplitElement = splitElement;
          firstCopyElement = position30.parent.nextSibling;
        }
        position30 = this.createPositionAfter(position30.parent);
        splitElement = position30.parent;
      } while (splitElement !== limitElement);
      return {
        position: position30,
        range: new range_default2(position_default2._createAt(firstSplitElement, "end"), position_default2._createAt(firstCopyElement, 0))
      };
    }
    wrap(range29, elementOrString) {
      this._assertWriterUsedCorrectly();
      if (!range29.isFlat) {
        throw new ckeditorerror_default("writer-wrap-range-not-flat", this);
      }
      const element18 = elementOrString instanceof element_default2 ? elementOrString : new element_default2(elementOrString);
      if (element18.childCount > 0) {
        throw new ckeditorerror_default("writer-wrap-element-not-empty", this);
      }
      if (element18.parent !== null) {
        throw new ckeditorerror_default("writer-wrap-element-attached", this);
      }
      this.insert(element18, range29.start);
      const shiftedRange = new range_default2(range29.start.getShiftedBy(1), range29.end.getShiftedBy(1));
      this.move(shiftedRange, position_default2._createAt(element18, 0));
    }
    unwrap(element18) {
      this._assertWriterUsedCorrectly();
      if (element18.parent === null) {
        throw new ckeditorerror_default("writer-unwrap-element-no-parent", this);
      }
      this.move(range_default2._createIn(element18), this.createPositionAfter(element18));
      this.remove(element18);
    }
    addMarker(name, options) {
      this._assertWriterUsedCorrectly();
      if (!options || typeof options.usingOperation != "boolean") {
        throw new ckeditorerror_default("writer-addmarker-no-usingoperation", this);
      }
      const usingOperation = options.usingOperation;
      const range29 = options.range;
      const affectsData = options.affectsData === void 0 ? false : options.affectsData;
      if (this.model.markers.has(name)) {
        throw new ckeditorerror_default("writer-addmarker-marker-exists", this);
      }
      if (!range29) {
        throw new ckeditorerror_default("writer-addmarker-no-range", this);
      }
      if (!usingOperation) {
        return this.model.markers._set(name, range29, usingOperation, affectsData);
      }
      applyMarkerOperation(this, name, null, range29, affectsData);
      return this.model.markers.get(name);
    }
    updateMarker(markerOrName, options) {
      this._assertWriterUsedCorrectly();
      const markerName = typeof markerOrName == "string" ? markerOrName : markerOrName.name;
      const currentMarker = this.model.markers.get(markerName);
      if (!currentMarker) {
        throw new ckeditorerror_default("writer-updatemarker-marker-not-exists", this);
      }
      if (!options) {
        this.model.markers._refresh(currentMarker);
        return;
      }
      const hasUsingOperationDefined = typeof options.usingOperation == "boolean";
      const affectsDataDefined = typeof options.affectsData == "boolean";
      const affectsData = affectsDataDefined ? options.affectsData : currentMarker.affectsData;
      if (!hasUsingOperationDefined && !options.range && !affectsDataDefined) {
        throw new ckeditorerror_default("writer-updatemarker-wrong-options", this);
      }
      const currentRange = currentMarker.getRange();
      const updatedRange = options.range ? options.range : currentRange;
      if (hasUsingOperationDefined && options.usingOperation !== currentMarker.managedUsingOperations) {
        if (options.usingOperation) {
          applyMarkerOperation(this, markerName, null, updatedRange, affectsData);
        } else {
          applyMarkerOperation(this, markerName, currentRange, null, affectsData);
          this.model.markers._set(markerName, updatedRange, void 0, affectsData);
        }
        return;
      }
      if (currentMarker.managedUsingOperations) {
        applyMarkerOperation(this, markerName, currentRange, updatedRange, affectsData);
      } else {
        this.model.markers._set(markerName, updatedRange, void 0, affectsData);
      }
    }
    removeMarker(markerOrName) {
      this._assertWriterUsedCorrectly();
      const name = typeof markerOrName == "string" ? markerOrName : markerOrName.name;
      if (!this.model.markers.has(name)) {
        throw new ckeditorerror_default("writer-removemarker-no-marker", this);
      }
      const marker = this.model.markers.get(name);
      if (!marker.managedUsingOperations) {
        this.model.markers._remove(name);
        return;
      }
      const oldRange = marker.getRange();
      applyMarkerOperation(this, name, oldRange, null, marker.affectsData);
    }
    setSelection(selectable, placeOrOffset, options) {
      this._assertWriterUsedCorrectly();
      this.model.document.selection._setTo(selectable, placeOrOffset, options);
    }
    setSelectionFocus(itemOrPosition, offset) {
      this._assertWriterUsedCorrectly();
      this.model.document.selection._setFocus(itemOrPosition, offset);
    }
    setSelectionAttribute(keyOrObjectOrIterable, value) {
      this._assertWriterUsedCorrectly();
      if (typeof keyOrObjectOrIterable === "string") {
        this._setSelectionAttribute(keyOrObjectOrIterable, value);
      } else {
        for (const [key, value2] of toMap(keyOrObjectOrIterable)) {
          this._setSelectionAttribute(key, value2);
        }
      }
    }
    removeSelectionAttribute(keyOrIterableOfKeys) {
      this._assertWriterUsedCorrectly();
      if (typeof keyOrIterableOfKeys === "string") {
        this._removeSelectionAttribute(keyOrIterableOfKeys);
      } else {
        for (const key of keyOrIterableOfKeys) {
          this._removeSelectionAttribute(key);
        }
      }
    }
    overrideSelectionGravity() {
      return this.model.document.selection._overrideGravity();
    }
    restoreSelectionGravity(uid8) {
      this.model.document.selection._restoreGravity(uid8);
    }
    _setSelectionAttribute(key, value) {
      const selection11 = this.model.document.selection;
      if (selection11.isCollapsed && selection11.anchor.parent.isEmpty) {
        const storeKey = documentselection_default2._getStoreAttributeKey(key);
        this.setAttribute(storeKey, value, selection11.anchor.parent);
      }
      selection11._setAttribute(key, value);
    }
    _removeSelectionAttribute(key) {
      const selection11 = this.model.document.selection;
      if (selection11.isCollapsed && selection11.anchor.parent.isEmpty) {
        const storeKey = documentselection_default2._getStoreAttributeKey(key);
        this.removeAttribute(storeKey, selection11.anchor.parent);
      }
      selection11._removeAttribute(key);
    }
    _assertWriterUsedCorrectly() {
      if (this.model._currentWriter !== this) {
        throw new ckeditorerror_default("writer-incorrect-use", this);
      }
    }
    _addOperationForAffectedMarkers(type, positionOrRange) {
      for (const marker of this.model.markers) {
        if (!marker.managedUsingOperations) {
          continue;
        }
        const markerRange = marker.getRange();
        let isAffected = false;
        if (type === "move") {
          isAffected = positionOrRange.containsPosition(markerRange.start) || positionOrRange.start.isEqual(markerRange.start) || positionOrRange.containsPosition(markerRange.end) || positionOrRange.end.isEqual(markerRange.end);
        } else {
          const elementBefore = positionOrRange.nodeBefore;
          const elementAfter = positionOrRange.nodeAfter;
          const affectedInLeftElement = markerRange.start.parent == elementBefore && markerRange.start.isAtEnd;
          const affectedInRightElement = markerRange.end.parent == elementAfter && markerRange.end.offset == 0;
          const affectedAfterLeftElement = markerRange.end.nodeAfter == elementAfter;
          const affectedBeforeRightElement = markerRange.start.nodeAfter == elementAfter;
          isAffected = affectedInLeftElement || affectedInRightElement || affectedAfterLeftElement || affectedBeforeRightElement;
        }
        if (isAffected) {
          this.updateMarker(marker.name, {range: markerRange});
        }
      }
    }
  };
  var writer_default = Writer;
  function setAttributeOnRange(writer2, key, value, range29) {
    const model3 = writer2.model;
    const doc = model3.document;
    let lastSplitPosition = range29.start;
    let position30;
    let valueBefore;
    let valueAfter;
    for (const val of range29.getWalker({shallow: true})) {
      valueAfter = val.item.getAttribute(key);
      if (position30 && valueBefore != valueAfter) {
        if (valueBefore != value) {
          addOperation();
        }
        lastSplitPosition = position30;
      }
      position30 = val.nextPosition;
      valueBefore = valueAfter;
    }
    if (position30 instanceof position_default2 && position30 != lastSplitPosition && valueBefore != value) {
      addOperation();
    }
    function addOperation() {
      const range30 = new range_default2(lastSplitPosition, position30);
      const version7 = range30.root.document ? doc.version : null;
      const operation12 = new attributeoperation_default(range30, key, valueBefore, value, version7);
      writer2.batch.addOperation(operation12);
      model3.applyOperation(operation12);
    }
  }
  function setAttributeOnItem(writer2, key, value, item) {
    const model3 = writer2.model;
    const doc = model3.document;
    const previousValue = item.getAttribute(key);
    let range29, operation12;
    if (previousValue != value) {
      const isRootChanged = item.root === item;
      if (isRootChanged) {
        const version7 = item.document ? doc.version : null;
        operation12 = new rootattributeoperation_default(item, key, previousValue, value, version7);
      } else {
        range29 = new range_default2(position_default2._createBefore(item), writer2.createPositionAfter(item));
        const version7 = range29.root.document ? doc.version : null;
        operation12 = new attributeoperation_default(range29, key, previousValue, value, version7);
      }
      writer2.batch.addOperation(operation12);
      model3.applyOperation(operation12);
    }
  }
  function applyMarkerOperation(writer2, name, oldRange, newRange, affectsData) {
    const model3 = writer2.model;
    const doc = model3.document;
    const operation12 = new markeroperation_default(name, oldRange, newRange, model3.markers, affectsData, doc.version);
    writer2.batch.addOperation(operation12);
    model3.applyOperation(operation12);
  }
  function applyRemoveOperation(position30, howMany, batch2, model3) {
    let operation12;
    if (position30.root.document) {
      const doc = model3.document;
      const graveyardPosition = new position_default2(doc.graveyard, [0]);
      operation12 = new moveoperation_default(position30, howMany, graveyardPosition, doc.version);
    } else {
      operation12 = new detachoperation_default(position30, howMany);
    }
    batch2.addOperation(operation12);
    model3.applyOperation(operation12);
  }
  function isSameTree(rootA, rootB) {
    if (rootA === rootB) {
      return true;
    }
    if (rootA instanceof rootelement_default && rootB instanceof rootelement_default) {
      return true;
    }
    return false;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/differ.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Differ = class {
    constructor(markerCollection) {
      this._markerCollection = markerCollection;
      this._changesInElement = new Map();
      this._elementSnapshots = new Map();
      this._changedMarkers = new Map();
      this._changeCount = 0;
      this._cachedChanges = null;
      this._cachedChangesWithGraveyard = null;
    }
    get isEmpty() {
      return this._changesInElement.size == 0 && this._changedMarkers.size == 0;
    }
    refreshItem(item) {
      if (this._isInInsertedElement(item.parent)) {
        return;
      }
      this._markRemove(item.parent, item.startOffset, item.offsetSize);
      this._markInsert(item.parent, item.startOffset, item.offsetSize);
      const range29 = range_default2._createOn(item);
      for (const marker of this._markerCollection.getMarkersIntersectingRange(range29)) {
        const markerRange = marker.getRange();
        this.bufferMarkerChange(marker.name, markerRange, markerRange, marker.affectsData);
      }
      this._cachedChanges = null;
    }
    bufferOperation(operation12) {
      switch (operation12.type) {
        case "insert": {
          if (this._isInInsertedElement(operation12.position.parent)) {
            return;
          }
          this._markInsert(operation12.position.parent, operation12.position.offset, operation12.nodes.maxOffset);
          break;
        }
        case "addAttribute":
        case "removeAttribute":
        case "changeAttribute": {
          for (const item of operation12.range.getItems({shallow: true})) {
            if (this._isInInsertedElement(item.parent)) {
              continue;
            }
            this._markAttribute(item);
          }
          break;
        }
        case "remove":
        case "move":
        case "reinsert": {
          if (operation12.sourcePosition.isEqual(operation12.targetPosition) || operation12.sourcePosition.getShiftedBy(operation12.howMany).isEqual(operation12.targetPosition)) {
            return;
          }
          const sourceParentInserted = this._isInInsertedElement(operation12.sourcePosition.parent);
          const targetParentInserted = this._isInInsertedElement(operation12.targetPosition.parent);
          if (!sourceParentInserted) {
            this._markRemove(operation12.sourcePosition.parent, operation12.sourcePosition.offset, operation12.howMany);
          }
          if (!targetParentInserted) {
            this._markInsert(operation12.targetPosition.parent, operation12.getMovedRangeStart().offset, operation12.howMany);
          }
          break;
        }
        case "rename": {
          if (this._isInInsertedElement(operation12.position.parent)) {
            return;
          }
          this._markRemove(operation12.position.parent, operation12.position.offset, 1);
          this._markInsert(operation12.position.parent, operation12.position.offset, 1);
          const range29 = range_default2._createFromPositionAndShift(operation12.position, 1);
          for (const marker of this._markerCollection.getMarkersIntersectingRange(range29)) {
            const markerRange = marker.getRange();
            this.bufferMarkerChange(marker.name, markerRange, markerRange, marker.affectsData);
          }
          break;
        }
        case "split": {
          const splitElement = operation12.splitPosition.parent;
          if (!this._isInInsertedElement(splitElement)) {
            this._markRemove(splitElement, operation12.splitPosition.offset, operation12.howMany);
          }
          if (!this._isInInsertedElement(operation12.insertionPosition.parent)) {
            this._markInsert(operation12.insertionPosition.parent, operation12.insertionPosition.offset, 1);
          }
          if (operation12.graveyardPosition) {
            this._markRemove(operation12.graveyardPosition.parent, operation12.graveyardPosition.offset, 1);
          }
          break;
        }
        case "merge": {
          const mergedElement = operation12.sourcePosition.parent;
          if (!this._isInInsertedElement(mergedElement.parent)) {
            this._markRemove(mergedElement.parent, mergedElement.startOffset, 1);
          }
          const graveyardParent = operation12.graveyardPosition.parent;
          this._markInsert(graveyardParent, operation12.graveyardPosition.offset, 1);
          const mergedIntoElement = operation12.targetPosition.parent;
          if (!this._isInInsertedElement(mergedIntoElement)) {
            this._markInsert(mergedIntoElement, operation12.targetPosition.offset, mergedElement.maxOffset);
          }
          break;
        }
      }
      this._cachedChanges = null;
    }
    bufferMarkerChange(markerName, oldRange, newRange, affectsData) {
      const buffered = this._changedMarkers.get(markerName);
      if (!buffered) {
        this._changedMarkers.set(markerName, {
          oldRange,
          newRange,
          affectsData
        });
      } else {
        buffered.newRange = newRange;
        buffered.affectsData = affectsData;
        if (buffered.oldRange == null && buffered.newRange == null) {
          this._changedMarkers.delete(markerName);
        }
      }
    }
    getMarkersToRemove() {
      const result = [];
      for (const [name, change] of this._changedMarkers) {
        if (change.oldRange != null) {
          result.push({name, range: change.oldRange});
        }
      }
      return result;
    }
    getMarkersToAdd() {
      const result = [];
      for (const [name, change] of this._changedMarkers) {
        if (change.newRange != null) {
          result.push({name, range: change.newRange});
        }
      }
      return result;
    }
    getChangedMarkers() {
      return Array.from(this._changedMarkers).map((item) => ({
        name: item[0],
        data: {
          oldRange: item[1].oldRange,
          newRange: item[1].newRange
        }
      }));
    }
    hasDataChanges() {
      for (const [, change] of this._changedMarkers) {
        if (change.affectsData) {
          return true;
        }
      }
      return this._changesInElement.size > 0;
    }
    getChanges(options = {includeChangesInGraveyard: false}) {
      if (this._cachedChanges) {
        if (options.includeChangesInGraveyard) {
          return this._cachedChangesWithGraveyard.slice();
        } else {
          return this._cachedChanges.slice();
        }
      }
      const diffSet = [];
      for (const element18 of this._changesInElement.keys()) {
        const changes = this._changesInElement.get(element18).sort((a, b) => {
          if (a.offset === b.offset) {
            if (a.type != b.type) {
              return a.type == "remove" ? -1 : 1;
            }
            return 0;
          }
          return a.offset < b.offset ? -1 : 1;
        });
        const snapshotChildren = this._elementSnapshots.get(element18);
        const elementChildren = _getChildrenSnapshot(element18.getChildren());
        const actions = _generateActionsFromChanges(snapshotChildren.length, changes);
        let i = 0;
        let j = 0;
        for (const action of actions) {
          if (action === "i") {
            diffSet.push(this._getInsertDiff(element18, i, elementChildren[i].name));
            i++;
          } else if (action === "r") {
            diffSet.push(this._getRemoveDiff(element18, i, snapshotChildren[j].name));
            j++;
          } else if (action === "a") {
            const elementAttributes = elementChildren[i].attributes;
            const snapshotAttributes = snapshotChildren[j].attributes;
            let range29;
            if (elementChildren[i].name == "$text") {
              range29 = new range_default2(position_default2._createAt(element18, i), position_default2._createAt(element18, i + 1));
            } else {
              const index = element18.offsetToIndex(i);
              range29 = new range_default2(position_default2._createAt(element18, i), position_default2._createAt(element18.getChild(index), 0));
            }
            diffSet.push(...this._getAttributesDiff(range29, snapshotAttributes, elementAttributes));
            i++;
            j++;
          } else {
            i++;
            j++;
          }
        }
      }
      diffSet.sort((a, b) => {
        if (a.position.root != b.position.root) {
          return a.position.root.rootName < b.position.root.rootName ? -1 : 1;
        }
        if (a.position.isEqual(b.position)) {
          return a.changeCount - b.changeCount;
        }
        return a.position.isBefore(b.position) ? -1 : 1;
      });
      for (let i = 1; i < diffSet.length; i++) {
        const prevDiff = diffSet[i - 1];
        const thisDiff = diffSet[i];
        const isConsecutiveTextRemove = prevDiff.type == "remove" && thisDiff.type == "remove" && prevDiff.name == "$text" && thisDiff.name == "$text" && prevDiff.position.isEqual(thisDiff.position);
        const isConsecutiveTextAdd = prevDiff.type == "insert" && thisDiff.type == "insert" && prevDiff.name == "$text" && thisDiff.name == "$text" && prevDiff.position.parent == thisDiff.position.parent && prevDiff.position.offset + prevDiff.length == thisDiff.position.offset;
        const isConsecutiveAttributeChange = prevDiff.type == "attribute" && thisDiff.type == "attribute" && prevDiff.position.parent == thisDiff.position.parent && prevDiff.range.isFlat && thisDiff.range.isFlat && prevDiff.position.offset + prevDiff.length == thisDiff.position.offset && prevDiff.attributeKey == thisDiff.attributeKey && prevDiff.attributeOldValue == thisDiff.attributeOldValue && prevDiff.attributeNewValue == thisDiff.attributeNewValue;
        if (isConsecutiveTextRemove || isConsecutiveTextAdd || isConsecutiveAttributeChange) {
          diffSet[i - 1].length++;
          if (isConsecutiveAttributeChange) {
            diffSet[i - 1].range.end = diffSet[i - 1].range.end.getShiftedBy(1);
          }
          diffSet.splice(i, 1);
          i--;
        }
      }
      for (const item of diffSet) {
        delete item.changeCount;
        if (item.type == "attribute") {
          delete item.position;
          delete item.length;
        }
      }
      this._changeCount = 0;
      this._cachedChangesWithGraveyard = diffSet.slice();
      this._cachedChanges = diffSet.slice().filter(_changesInGraveyardFilter);
      if (options.includeChangesInGraveyard) {
        return this._cachedChangesWithGraveyard;
      } else {
        return this._cachedChanges;
      }
    }
    reset() {
      this._changesInElement.clear();
      this._elementSnapshots.clear();
      this._changedMarkers.clear();
      this._cachedChanges = null;
    }
    _markInsert(parent3, offset, howMany) {
      const changeItem = {type: "insert", offset, howMany, count: this._changeCount++};
      this._markChange(parent3, changeItem);
    }
    _markRemove(parent3, offset, howMany) {
      const changeItem = {type: "remove", offset, howMany, count: this._changeCount++};
      this._markChange(parent3, changeItem);
      this._removeAllNestedChanges(parent3, offset, howMany);
    }
    _markAttribute(item) {
      const changeItem = {type: "attribute", offset: item.startOffset, howMany: item.offsetSize, count: this._changeCount++};
      this._markChange(item.parent, changeItem);
    }
    _markChange(parent3, changeItem) {
      this._makeSnapshot(parent3);
      const changes = this._getChangesForElement(parent3);
      this._handleChange(changeItem, changes);
      changes.push(changeItem);
      for (let i = 0; i < changes.length; i++) {
        if (changes[i].howMany < 1) {
          changes.splice(i, 1);
          i--;
        }
      }
    }
    _getChangesForElement(element18) {
      let changes;
      if (this._changesInElement.has(element18)) {
        changes = this._changesInElement.get(element18);
      } else {
        changes = [];
        this._changesInElement.set(element18, changes);
      }
      return changes;
    }
    _makeSnapshot(element18) {
      if (!this._elementSnapshots.has(element18)) {
        this._elementSnapshots.set(element18, _getChildrenSnapshot(element18.getChildren()));
      }
    }
    _handleChange(inc, changes) {
      inc.nodesToHandle = inc.howMany;
      for (const old of changes) {
        const incEnd = inc.offset + inc.howMany;
        const oldEnd = old.offset + old.howMany;
        if (inc.type == "insert") {
          if (old.type == "insert") {
            if (inc.offset <= old.offset) {
              old.offset += inc.howMany;
            } else if (inc.offset < oldEnd) {
              old.howMany += inc.nodesToHandle;
              inc.nodesToHandle = 0;
            }
          }
          if (old.type == "remove") {
            if (inc.offset < old.offset) {
              old.offset += inc.howMany;
            }
          }
          if (old.type == "attribute") {
            if (inc.offset <= old.offset) {
              old.offset += inc.howMany;
            } else if (inc.offset < oldEnd) {
              const howMany = old.howMany;
              old.howMany = inc.offset - old.offset;
              changes.unshift({
                type: "attribute",
                offset: incEnd,
                howMany: howMany - old.howMany,
                count: this._changeCount++
              });
            }
          }
        }
        if (inc.type == "remove") {
          if (old.type == "insert") {
            if (incEnd <= old.offset) {
              old.offset -= inc.howMany;
            } else if (incEnd <= oldEnd) {
              if (inc.offset < old.offset) {
                const intersectionLength = incEnd - old.offset;
                old.offset = inc.offset;
                old.howMany -= intersectionLength;
                inc.nodesToHandle -= intersectionLength;
              } else {
                old.howMany -= inc.nodesToHandle;
                inc.nodesToHandle = 0;
              }
            } else {
              if (inc.offset <= old.offset) {
                inc.nodesToHandle -= old.howMany;
                old.howMany = 0;
              } else if (inc.offset < oldEnd) {
                const intersectionLength = oldEnd - inc.offset;
                old.howMany -= intersectionLength;
                inc.nodesToHandle -= intersectionLength;
              }
            }
          }
          if (old.type == "remove") {
            if (incEnd <= old.offset) {
              old.offset -= inc.howMany;
            } else if (inc.offset < old.offset) {
              inc.nodesToHandle += old.howMany;
              old.howMany = 0;
            }
          }
          if (old.type == "attribute") {
            if (incEnd <= old.offset) {
              old.offset -= inc.howMany;
            } else if (inc.offset < old.offset) {
              const intersectionLength = incEnd - old.offset;
              old.offset = inc.offset;
              old.howMany -= intersectionLength;
            } else if (inc.offset < oldEnd) {
              if (incEnd <= oldEnd) {
                const howMany = old.howMany;
                old.howMany = inc.offset - old.offset;
                const howManyAfter = howMany - old.howMany - inc.nodesToHandle;
                changes.unshift({
                  type: "attribute",
                  offset: inc.offset,
                  howMany: howManyAfter,
                  count: this._changeCount++
                });
              } else {
                old.howMany -= oldEnd - inc.offset;
              }
            }
          }
        }
        if (inc.type == "attribute") {
          if (old.type == "insert") {
            if (inc.offset < old.offset && incEnd > old.offset) {
              if (incEnd > oldEnd) {
                const attributePart = {
                  type: "attribute",
                  offset: oldEnd,
                  howMany: incEnd - oldEnd,
                  count: this._changeCount++
                };
                this._handleChange(attributePart, changes);
                changes.push(attributePart);
              }
              inc.nodesToHandle = old.offset - inc.offset;
              inc.howMany = inc.nodesToHandle;
            } else if (inc.offset >= old.offset && inc.offset < oldEnd) {
              if (incEnd > oldEnd) {
                inc.nodesToHandle = incEnd - oldEnd;
                inc.offset = oldEnd;
              } else {
                inc.nodesToHandle = 0;
              }
            }
          }
          if (old.type == "remove") {
            if (inc.offset < old.offset && incEnd > old.offset) {
              const attributePart = {
                type: "attribute",
                offset: old.offset,
                howMany: incEnd - old.offset,
                count: this._changeCount++
              };
              this._handleChange(attributePart, changes);
              changes.push(attributePart);
              inc.nodesToHandle = old.offset - inc.offset;
              inc.howMany = inc.nodesToHandle;
            }
          }
          if (old.type == "attribute") {
            if (inc.offset >= old.offset && incEnd <= oldEnd) {
              inc.nodesToHandle = 0;
              inc.howMany = 0;
              inc.offset = 0;
            } else if (inc.offset <= old.offset && incEnd >= oldEnd) {
              old.howMany = 0;
            }
          }
        }
      }
      inc.howMany = inc.nodesToHandle;
      delete inc.nodesToHandle;
    }
    _getInsertDiff(parent3, offset, name) {
      return {
        type: "insert",
        position: position_default2._createAt(parent3, offset),
        name,
        length: 1,
        changeCount: this._changeCount++
      };
    }
    _getRemoveDiff(parent3, offset, name) {
      return {
        type: "remove",
        position: position_default2._createAt(parent3, offset),
        name,
        length: 1,
        changeCount: this._changeCount++
      };
    }
    _getAttributesDiff(range29, oldAttributes, newAttributes) {
      const diffs = [];
      newAttributes = new Map(newAttributes);
      for (const [key, oldValue] of oldAttributes) {
        const newValue = newAttributes.has(key) ? newAttributes.get(key) : null;
        if (newValue !== oldValue) {
          diffs.push({
            type: "attribute",
            position: range29.start,
            range: range29.clone(),
            length: 1,
            attributeKey: key,
            attributeOldValue: oldValue,
            attributeNewValue: newValue,
            changeCount: this._changeCount++
          });
        }
        newAttributes.delete(key);
      }
      for (const [key, newValue] of newAttributes) {
        diffs.push({
          type: "attribute",
          position: range29.start,
          range: range29.clone(),
          length: 1,
          attributeKey: key,
          attributeOldValue: null,
          attributeNewValue: newValue,
          changeCount: this._changeCount++
        });
      }
      return diffs;
    }
    _isInInsertedElement(element18) {
      const parent3 = element18.parent;
      if (!parent3) {
        return false;
      }
      const changes = this._changesInElement.get(parent3);
      const offset = element18.startOffset;
      if (changes) {
        for (const change of changes) {
          if (change.type == "insert" && offset >= change.offset && offset < change.offset + change.howMany) {
            return true;
          }
        }
      }
      return this._isInInsertedElement(parent3);
    }
    _removeAllNestedChanges(parent3, offset, howMany) {
      const range29 = new range_default2(position_default2._createAt(parent3, offset), position_default2._createAt(parent3, offset + howMany));
      for (const item of range29.getItems({shallow: true})) {
        if (item.is("element")) {
          this._elementSnapshots.delete(item);
          this._changesInElement.delete(item);
          this._removeAllNestedChanges(item, 0, item.maxOffset);
        }
      }
    }
  };
  var differ_default = Differ;
  function _getChildrenSnapshot(children) {
    const snapshot = [];
    for (const child of children) {
      if (child.is("$text")) {
        for (let i = 0; i < child.data.length; i++) {
          snapshot.push({
            name: "$text",
            attributes: new Map(child.getAttributes())
          });
        }
      } else {
        snapshot.push({
          name: child.name,
          attributes: new Map(child.getAttributes())
        });
      }
    }
    return snapshot;
  }
  function _generateActionsFromChanges(oldChildrenLength, changes) {
    const actions = [];
    let offset = 0;
    let oldChildrenHandled = 0;
    for (const change of changes) {
      if (change.offset > offset) {
        for (let i = 0; i < change.offset - offset; i++) {
          actions.push("e");
        }
        oldChildrenHandled += change.offset - offset;
      }
      if (change.type == "insert") {
        for (let i = 0; i < change.howMany; i++) {
          actions.push("i");
        }
        offset = change.offset + change.howMany;
      } else if (change.type == "remove") {
        for (let i = 0; i < change.howMany; i++) {
          actions.push("r");
        }
        offset = change.offset;
        oldChildrenHandled += change.howMany;
      } else {
        actions.push(..."a".repeat(change.howMany).split(""));
        offset = change.offset + change.howMany;
        oldChildrenHandled += change.howMany;
      }
    }
    if (oldChildrenHandled < oldChildrenLength) {
      for (let i = 0; i < oldChildrenLength - oldChildrenHandled - offset; i++) {
        actions.push("e");
      }
    }
    return actions;
  }
  function _changesInGraveyardFilter(entry) {
    const posInGy = entry.position && entry.position.root.rootName == "$graveyard";
    const rangeInGy = entry.range && entry.range.root.rootName == "$graveyard";
    return !posInGy && !rangeInGy;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/history.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var History = class {
    constructor() {
      this._operations = [];
      this._undoPairs = new Map();
      this._undoneOperations = new Set();
    }
    addOperation(operation12) {
      if (this._operations.includes(operation12)) {
        return;
      }
      this._operations.push(operation12);
    }
    getOperations(from = Number.NEGATIVE_INFINITY, to = Number.POSITIVE_INFINITY) {
      const operations2 = [];
      for (const operation12 of this._operations) {
        if (operation12.baseVersion >= from && operation12.baseVersion < to) {
          operations2.push(operation12);
        }
      }
      return operations2;
    }
    getOperation(baseVersion) {
      for (const operation12 of this._operations) {
        if (operation12.baseVersion == baseVersion) {
          return operation12;
        }
      }
    }
    setOperationAsUndone(undoneOperation, undoingOperation) {
      this._undoPairs.set(undoingOperation, undoneOperation);
      this._undoneOperations.add(undoneOperation);
    }
    isUndoingOperation(operation12) {
      return this._undoPairs.has(operation12);
    }
    isUndoneOperation(operation12) {
      return this._undoneOperations.has(operation12);
    }
    getUndoneOperation(undoingOperation) {
      return this._undoPairs.get(undoingOperation);
    }
  };
  var history_default = History;

  // node_modules/@ckeditor/ckeditor5-utils/src/unicode.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function isCombiningMark(character) {
    return !!character && character.length == 1 && /[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(character);
  }
  function isHighSurrogateHalf(character) {
    return !!character && character.length == 1 && /[\ud800-\udbff]/.test(character);
  }
  function isLowSurrogateHalf(character) {
    return !!character && character.length == 1 && /[\udc00-\udfff]/.test(character);
  }
  function isInsideSurrogatePair(string, offset) {
    return isHighSurrogateHalf(string.charAt(offset - 1)) && isLowSurrogateHalf(string.charAt(offset));
  }
  function isInsideCombinedSymbol(string, offset) {
    return isCombiningMark(string.charAt(offset));
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/document.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var graveyardName = "$graveyard";
  var Document2 = class {
    constructor(model3) {
      this.model = model3;
      this.version = 0;
      this.history = new history_default(this);
      this.selection = new documentselection_default2(this);
      this.roots = new collection_default({idProperty: "rootName"});
      this.differ = new differ_default(model3.markers);
      this._postFixers = new Set();
      this._hasSelectionChangedFromTheLastChangeBlock = false;
      this.createRoot("$root", graveyardName);
      this.listenTo(model3, "applyOperation", (evt, args) => {
        const operation12 = args[0];
        if (operation12.isDocumentOperation && operation12.baseVersion !== this.version) {
          throw new ckeditorerror_default("model-document-applyoperation-wrong-version", this, {operation: operation12});
        }
      }, {priority: "highest"});
      this.listenTo(model3, "applyOperation", (evt, args) => {
        const operation12 = args[0];
        if (operation12.isDocumentOperation) {
          this.differ.bufferOperation(operation12);
        }
      }, {priority: "high"});
      this.listenTo(model3, "applyOperation", (evt, args) => {
        const operation12 = args[0];
        if (operation12.isDocumentOperation) {
          this.version++;
          this.history.addOperation(operation12);
        }
      }, {priority: "low"});
      this.listenTo(this.selection, "change", () => {
        this._hasSelectionChangedFromTheLastChangeBlock = true;
      });
      this.listenTo(model3.markers, "update", (evt, marker, oldRange, newRange) => {
        this.differ.bufferMarkerChange(marker.name, oldRange, newRange, marker.affectsData);
        if (oldRange === null) {
          marker.on("change", (evt2, oldRange2) => {
            this.differ.bufferMarkerChange(marker.name, oldRange2, marker.getRange(), marker.affectsData);
          });
        }
      });
    }
    get graveyard() {
      return this.getRoot(graveyardName);
    }
    createRoot(elementName = "$root", rootName = "main") {
      if (this.roots.get(rootName)) {
        throw new ckeditorerror_default("model-document-createroot-name-exists", this, {name: rootName});
      }
      const root11 = new rootelement_default(this, elementName, rootName);
      this.roots.add(root11);
      return root11;
    }
    destroy() {
      this.selection.destroy();
      this.stopListening();
    }
    getRoot(name = "main") {
      return this.roots.get(name);
    }
    getRootNames() {
      return Array.from(this.roots, (root11) => root11.rootName).filter((name) => name != graveyardName);
    }
    registerPostFixer(postFixer) {
      this._postFixers.add(postFixer);
    }
    toJSON() {
      const json = clone_default(this);
      json.selection = "[engine.model.DocumentSelection]";
      json.model = "[engine.model.Model]";
      return json;
    }
    _handleChangeBlock(writer2) {
      if (this._hasDocumentChangedFromTheLastChangeBlock()) {
        this._callPostFixers(writer2);
        this.selection.refresh();
        if (this.differ.hasDataChanges()) {
          this.fire("change:data", writer2.batch);
        } else {
          this.fire("change", writer2.batch);
        }
        this.selection.refresh();
        this.differ.reset();
      }
      this._hasSelectionChangedFromTheLastChangeBlock = false;
    }
    _hasDocumentChangedFromTheLastChangeBlock() {
      return !this.differ.isEmpty || this._hasSelectionChangedFromTheLastChangeBlock;
    }
    _getDefaultRoot() {
      for (const root11 of this.roots) {
        if (root11 !== this.graveyard) {
          return root11;
        }
      }
      return this.graveyard;
    }
    _getDefaultRange() {
      const defaultRoot = this._getDefaultRoot();
      const model3 = this.model;
      const schema3 = model3.schema;
      const position30 = model3.createPositionFromPath(defaultRoot, [0]);
      const nearestRange = schema3.getNearestSelectionRange(position30);
      return nearestRange || model3.createRange(position30);
    }
    _validateSelectionRange(range29) {
      return validateTextNodePosition(range29.start) && validateTextNodePosition(range29.end);
    }
    _callPostFixers(writer2) {
      let wasFixed = false;
      do {
        for (const callback of this._postFixers) {
          this.selection.refresh();
          wasFixed = callback(writer2);
          if (wasFixed) {
            break;
          }
        }
      } while (wasFixed);
    }
  };
  var document_default2 = Document2;
  mix(Document2, emittermixin_default);
  function validateTextNodePosition(rangeBoundary) {
    const textNode = rangeBoundary.textNode;
    if (textNode) {
      const data = textNode.data;
      const offset = rangeBoundary.offset - textNode.startOffset;
      return !isInsideSurrogatePair(data, offset) && !isInsideCombinedSymbol(data, offset);
    }
    return true;
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/markercollection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var MarkerCollection = class {
    constructor() {
      this._markers = new Map();
    }
    [Symbol.iterator]() {
      return this._markers.values();
    }
    has(markerName) {
      return this._markers.has(markerName);
    }
    get(markerName) {
      return this._markers.get(markerName) || null;
    }
    _set(markerOrName, range29, managedUsingOperations = false, affectsData = false) {
      const markerName = markerOrName instanceof Marker ? markerOrName.name : markerOrName;
      if (markerName.includes(",")) {
        throw new ckeditorerror_default("markercollection-incorrect-marker-name", this);
      }
      const oldMarker = this._markers.get(markerName);
      if (oldMarker) {
        const oldRange = oldMarker.getRange();
        let hasChanged = false;
        if (!oldRange.isEqual(range29)) {
          oldMarker._attachLiveRange(liverange_default.fromRange(range29));
          hasChanged = true;
        }
        if (managedUsingOperations != oldMarker.managedUsingOperations) {
          oldMarker._managedUsingOperations = managedUsingOperations;
          hasChanged = true;
        }
        if (typeof affectsData === "boolean" && affectsData != oldMarker.affectsData) {
          oldMarker._affectsData = affectsData;
          hasChanged = true;
        }
        if (hasChanged) {
          this.fire("update:" + markerName, oldMarker, oldRange, range29);
        }
        return oldMarker;
      }
      const liveRange = liverange_default.fromRange(range29);
      const marker = new Marker(markerName, liveRange, managedUsingOperations, affectsData);
      this._markers.set(markerName, marker);
      this.fire("update:" + markerName, marker, null, range29);
      return marker;
    }
    _remove(markerOrName) {
      const markerName = markerOrName instanceof Marker ? markerOrName.name : markerOrName;
      const oldMarker = this._markers.get(markerName);
      if (oldMarker) {
        this._markers.delete(markerName);
        this.fire("update:" + markerName, oldMarker, oldMarker.getRange(), null);
        this._destroyMarker(oldMarker);
        return true;
      }
      return false;
    }
    _refresh(markerOrName) {
      const markerName = markerOrName instanceof Marker ? markerOrName.name : markerOrName;
      const marker = this._markers.get(markerName);
      if (!marker) {
        throw new ckeditorerror_default("markercollection-refresh-marker-not-exists", this);
      }
      const range29 = marker.getRange();
      this.fire("update:" + markerName, marker, range29, range29, marker.managedUsingOperations, marker.affectsData);
    }
    *getMarkersAtPosition(position30) {
      for (const marker of this) {
        if (marker.getRange().containsPosition(position30)) {
          yield marker;
        }
      }
    }
    *getMarkersIntersectingRange(range29) {
      for (const marker of this) {
        if (marker.getRange().getIntersection(range29) !== null) {
          yield marker;
        }
      }
    }
    destroy() {
      for (const marker of this._markers.values()) {
        this._destroyMarker(marker);
      }
      this._markers = null;
      this.stopListening();
    }
    *getMarkersGroup(prefix) {
      for (const marker of this._markers.values()) {
        if (marker.name.startsWith(prefix + ":")) {
          yield marker;
        }
      }
    }
    _destroyMarker(marker) {
      marker.stopListening();
      marker._detachLiveRange();
    }
  };
  var markercollection_default = MarkerCollection;
  mix(MarkerCollection, emittermixin_default);
  var Marker = class {
    constructor(name, liveRange, managedUsingOperations, affectsData) {
      this.name = name;
      this._liveRange = this._attachLiveRange(liveRange);
      this._managedUsingOperations = managedUsingOperations;
      this._affectsData = affectsData;
    }
    get managedUsingOperations() {
      if (!this._liveRange) {
        throw new ckeditorerror_default("marker-destroyed", this);
      }
      return this._managedUsingOperations;
    }
    get affectsData() {
      if (!this._liveRange) {
        throw new ckeditorerror_default("marker-destroyed", this);
      }
      return this._affectsData;
    }
    getStart() {
      if (!this._liveRange) {
        throw new ckeditorerror_default("marker-destroyed", this);
      }
      return this._liveRange.start.clone();
    }
    getEnd() {
      if (!this._liveRange) {
        throw new ckeditorerror_default("marker-destroyed", this);
      }
      return this._liveRange.end.clone();
    }
    getRange() {
      if (!this._liveRange) {
        throw new ckeditorerror_default("marker-destroyed", this);
      }
      return this._liveRange.toRange();
    }
    is(type) {
      return type === "marker" || type === "model:marker";
    }
    _attachLiveRange(liveRange) {
      if (this._liveRange) {
        this._detachLiveRange();
      }
      liveRange.delegate("change:range").to(this);
      liveRange.delegate("change:content").to(this);
      this._liveRange = liveRange;
      return liveRange;
    }
    _detachLiveRange() {
      this._liveRange.stopDelegating("change:range", this);
      this._liveRange.stopDelegating("change:content", this);
      this._liveRange.detach();
      this._liveRange = null;
    }
  };
  mix(Marker, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/nooperation.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var NoOperation = class extends operation_default {
    get type() {
      return "noop";
    }
    clone() {
      return new NoOperation(this.baseVersion);
    }
    getReversed() {
      return new NoOperation(this.baseVersion + 1);
    }
    _execute() {
    }
    static get className() {
      return "NoOperation";
    }
  };
  var nooperation_default = NoOperation;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/operationfactory.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var operations = {};
  operations[attributeoperation_default.className] = attributeoperation_default;
  operations[insertoperation_default.className] = insertoperation_default;
  operations[markeroperation_default.className] = markeroperation_default;
  operations[moveoperation_default.className] = moveoperation_default;
  operations[nooperation_default.className] = nooperation_default;
  operations[operation_default.className] = operation_default;
  operations[renameoperation_default.className] = renameoperation_default;
  operations[rootattributeoperation_default.className] = rootattributeoperation_default;
  operations[splitoperation_default.className] = splitoperation_default;
  operations[mergeoperation_default.className] = mergeoperation_default;
  var OperationFactory = class {
    static fromJSON(json, document5) {
      return operations[json.__className].fromJSON(json, document5);
    }
  };
  var operationfactory_default = OperationFactory;

  // node_modules/@ckeditor/ckeditor5-engine/src/model/liveposition.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var LivePosition = class extends position_default2 {
    constructor(root11, path, stickiness = "toNone") {
      super(root11, path, stickiness);
      if (!this.root.is("rootElement")) {
        throw new ckeditorerror_default("model-liveposition-root-not-rootelement", root11);
      }
      bindWithDocument2.call(this);
    }
    detach() {
      this.stopListening();
    }
    is(type) {
      return type === "livePosition" || type === "model:livePosition" || type == "position" || type === "model:position";
    }
    toPosition() {
      return new position_default2(this.root, this.path.slice(), this.stickiness);
    }
    static fromPosition(position30, stickiness) {
      return new this(position30.root, position30.path.slice(), stickiness ? stickiness : position30.stickiness);
    }
  };
  var liveposition_default = LivePosition;
  function bindWithDocument2() {
    this.listenTo(this.root.document.model, "applyOperation", (event, args) => {
      const operation12 = args[0];
      if (!operation12.isDocumentOperation) {
        return;
      }
      transform2.call(this, operation12);
    }, {priority: "low"});
  }
  function transform2(operation12) {
    const result = this.getTransformedByOperation(operation12);
    if (!this.isEqual(result)) {
      const oldPosition = this.toPosition();
      this.path = result.path;
      this.root = result.root;
      this.fire("change", oldPosition);
    }
  }
  mix(LivePosition, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-engine/src/model/utils/insertcontent.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function insertContent(model3, content, selectable, placeOrOffset) {
    return model3.change((writer2) => {
      let selection11;
      if (!selectable) {
        selection11 = model3.document.selection;
      } else if (selectable instanceof selection_default2 || selectable instanceof documentselection_default2) {
        selection11 = selectable;
      } else {
        selection11 = writer2.createSelection(selectable, placeOrOffset);
      }
      if (!selection11.isCollapsed) {
        model3.deleteContent(selection11, {doNotAutoparagraph: true});
      }
      const insertion = new Insertion(model3, writer2, selection11.anchor);
      let nodesToInsert;
      if (content.is("documentFragment")) {
        nodesToInsert = content.getChildren();
      } else {
        nodesToInsert = [content];
      }
      insertion.handleNodes(nodesToInsert, {
        isFirst: true,
        isLast: true
      });
      const newRange = insertion.getSelectionRange();
      if (newRange) {
        if (selection11 instanceof documentselection_default2) {
          writer2.setSelection(newRange);
        } else {
          selection11.setTo(newRange);
        }
      } else {
      }
      const affectedRange = insertion.getAffectedRange() || model3.createRange(selection11.anchor);
      insertion.destroy();
      return affectedRange;
    });
  }
  var Insertion = class {
    constructor(model3, writer2, position30) {
      this.model = model3;
      this.writer = writer2;
      this.position = position30;
      this.canMergeWith = new Set([this.position.parent]);
      this.schema = model3.schema;
      this._filterAttributesOf = [];
      this._affectedStart = null;
      this._affectedEnd = null;
    }
    handleNodes(nodes, parentContext) {
      nodes = Array.from(nodes);
      for (let i = 0; i < nodes.length; i++) {
        const node12 = nodes[i];
        this._handleNode(node12, {
          isFirst: i === 0 && parentContext.isFirst,
          isLast: i === nodes.length - 1 && parentContext.isLast
        });
      }
      this.schema.removeDisallowedAttributes(this._filterAttributesOf, this.writer);
      this._filterAttributesOf = [];
    }
    getSelectionRange() {
      if (this.nodeToSelect) {
        return range_default2._createOn(this.nodeToSelect);
      }
      return this.model.schema.getNearestSelectionRange(this.position);
    }
    getAffectedRange() {
      if (!this._affectedStart) {
        return null;
      }
      return new range_default2(this._affectedStart, this._affectedEnd);
    }
    destroy() {
      if (this._affectedStart) {
        this._affectedStart.detach();
      }
      if (this._affectedEnd) {
        this._affectedEnd.detach();
      }
    }
    _handleNode(node12, context2) {
      if (this.schema.isObject(node12)) {
        this._handleObject(node12, context2);
        return;
      }
      const isAllowed = this._checkAndSplitToAllowedPosition(node12, context2);
      if (!isAllowed) {
        this._handleDisallowedNode(node12, context2);
        return;
      }
      this._insert(node12);
      this._mergeSiblingsOf(node12, context2);
    }
    _handleObject(node12, context2) {
      if (this._checkAndSplitToAllowedPosition(node12)) {
        this._insert(node12);
      } else {
        this._tryAutoparagraphing(node12, context2);
      }
    }
    _handleDisallowedNode(node12, context2) {
      if (node12.is("element")) {
        this.handleNodes(node12.getChildren(), context2);
      } else {
        this._tryAutoparagraphing(node12, context2);
      }
    }
    _insert(node12) {
      if (!this.schema.checkChild(this.position, node12)) {
        throw new ckeditorerror_default("insertcontent-wrong-position", this, {node: node12, position: this.position});
      }
      const livePos = liveposition_default.fromPosition(this.position, "toNext");
      this._setAffectedBoundaries(this.position);
      this.writer.insert(node12, this.position);
      this.position = livePos.toPosition();
      livePos.detach();
      if (this.schema.isObject(node12) && !this.schema.checkChild(this.position, "$text")) {
        this.nodeToSelect = node12;
      } else {
        this.nodeToSelect = null;
      }
      this._filterAttributesOf.push(node12);
    }
    _setAffectedBoundaries(position30) {
      if (!this._affectedStart) {
        this._affectedStart = liveposition_default.fromPosition(position30, "toPrevious");
      }
      if (!this._affectedEnd || this._affectedEnd.isBefore(position30)) {
        if (this._affectedEnd) {
          this._affectedEnd.detach();
        }
        this._affectedEnd = liveposition_default.fromPosition(position30, "toNext");
      }
    }
    _mergeSiblingsOf(node12, context2) {
      if (!(node12 instanceof element_default2)) {
        return;
      }
      const mergeLeft = this._canMergeLeft(node12, context2);
      const mergeRight2 = this._canMergeRight(node12, context2);
      const mergePosLeft = liveposition_default._createBefore(node12);
      mergePosLeft.stickiness = "toNext";
      const mergePosRight = liveposition_default._createAfter(node12);
      mergePosRight.stickiness = "toNext";
      if (mergeLeft) {
        const livePosition = liveposition_default.fromPosition(this.position);
        livePosition.stickiness = "toNext";
        if (this._affectedStart.isEqual(mergePosLeft)) {
          this._affectedStart.detach();
          this._affectedStart = liveposition_default._createAt(mergePosLeft.nodeBefore, "end", "toPrevious");
        }
        this.writer.merge(mergePosLeft);
        if (mergePosLeft.isEqual(this._affectedEnd) && context2.isLast) {
          this._affectedEnd.detach();
          this._affectedEnd = liveposition_default._createAt(mergePosLeft.nodeBefore, "end", "toNext");
        }
        this.position = livePosition.toPosition();
        livePosition.detach();
      }
      if (mergeRight2) {
        if (!this.position.isEqual(mergePosRight)) {
          throw new ckeditorerror_default("insertcontent-invalid-insertion-position", this);
        }
        this.position = position_default2._createAt(mergePosRight.nodeBefore, "end");
        const livePosition = liveposition_default.fromPosition(this.position, "toPrevious");
        if (this._affectedEnd.isEqual(mergePosRight)) {
          this._affectedEnd.detach();
          this._affectedEnd = liveposition_default._createAt(mergePosRight.nodeBefore, "end", "toNext");
        }
        this.writer.merge(mergePosRight);
        if (mergePosRight.getShiftedBy(-1).isEqual(this._affectedStart) && context2.isFirst) {
          this._affectedStart.detach();
          this._affectedStart = liveposition_default._createAt(mergePosRight.nodeBefore, 0, "toPrevious");
        }
        this.position = livePosition.toPosition();
        livePosition.detach();
      }
      if (mergeLeft || mergeRight2) {
        this._filterAttributesOf.push(this.position.parent);
      }
      mergePosLeft.detach();
      mergePosRight.detach();
    }
    _canMergeLeft(node12, context2) {
      const previousSibling = node12.previousSibling;
      return context2.isFirst && previousSibling instanceof element_default2 && this.canMergeWith.has(previousSibling) && this.model.schema.checkMerge(previousSibling, node12);
    }
    _canMergeRight(node12, context2) {
      const nextSibling = node12.nextSibling;
      return context2.isLast && nextSibling instanceof element_default2 && this.canMergeWith.has(nextSibling) && this.model.schema.checkMerge(node12, nextSibling);
    }
    _tryAutoparagraphing(node12, context2) {
      const paragraph4 = this.writer.createElement("paragraph");
      if (this._getAllowedIn(paragraph4, this.position.parent) && this.schema.checkChild(paragraph4, node12)) {
        paragraph4._appendChild(node12);
        this._handleNode(paragraph4, context2);
      }
    }
    _checkAndSplitToAllowedPosition(node12) {
      const allowedIn = this._getAllowedIn(node12, this.position.parent);
      if (!allowedIn) {
        return false;
      }
      while (allowedIn != this.position.parent) {
        if (this.schema.isLimit(this.position.parent)) {
          return false;
        }
        if (this.position.isAtStart) {
          const parent3 = this.position.parent;
          this.position = this.writer.createPositionBefore(parent3);
          if (parent3.isEmpty && parent3.parent === allowedIn) {
            this.writer.remove(parent3);
          }
        } else if (this.position.isAtEnd) {
          this.position = this.writer.createPositionAfter(this.position.parent);
        } else {
          const tempPos = this.writer.createPositionAfter(this.position.parent);
          this._setAffectedBoundaries(this.position);
          this.writer.split(this.position);
          this.position = tempPos;
          this.canMergeWith.add(this.position.nodeAfter);
        }
      }
      return true;
    }
    _getAllowedIn(node12, element18) {
      if (this.schema.checkChild(element18, node12)) {
        return element18;
      }
      if (element18.parent) {
        return this._getAllowedIn(node12, element18.parent);
      }
      return null;
    }
  };

  // node_modules/@ckeditor/ckeditor5-engine/src/model/utils/deletecontent.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function deleteContent(model3, selection11, options = {}) {
    if (selection11.isCollapsed) {
      return;
    }
    const selRange = selection11.getFirstRange();
    if (selRange.root.rootName == "$graveyard") {
      return;
    }
    const schema3 = model3.schema;
    model3.change((writer2) => {
      if (!options.doNotResetEntireContent && shouldEntireContentBeReplacedWithParagraph(schema3, selection11)) {
        replaceEntireContentWithParagraph(writer2, selection11, schema3);
        return;
      }
      const [startPosition, endPosition] = getLivePositionsForSelectedBlocks(selRange);
      if (!startPosition.isTouching(endPosition)) {
        writer2.remove(writer2.createRange(startPosition, endPosition));
      }
      if (!options.leaveUnmerged) {
        mergeBranches(writer2, startPosition, endPosition);
        schema3.removeDisallowedAttributes(startPosition.parent.getChildren(), writer2);
      }
      collapseSelectionAt(writer2, selection11, startPosition);
      if (!options.doNotAutoparagraph && shouldAutoparagraph(schema3, startPosition)) {
        insertParagraph(writer2, startPosition, selection11);
      }
      startPosition.detach();
      endPosition.detach();
    });
  }
  function getLivePositionsForSelectedBlocks(range29) {
    const model3 = range29.root.document.model;
    const startPosition = range29.start;
    let endPosition = range29.end;
    if (model3.hasContent(range29, {ignoreMarkers: true})) {
      const endBlock = getParentBlock2(endPosition);
      if (endBlock && endPosition.isTouching(model3.createPositionAt(endBlock, 0))) {
        const selection11 = model3.createSelection(range29);
        model3.modifySelection(selection11, {direction: "backward"});
        endPosition = selection11.getLastPosition();
      }
    }
    return [
      liveposition_default.fromPosition(startPosition, "toPrevious"),
      liveposition_default.fromPosition(endPosition, "toNext")
    ];
  }
  function getParentBlock2(position30) {
    const element18 = position30.parent;
    const schema3 = element18.root.document.model.schema;
    const ancestors = element18.getAncestors({parentFirst: true, includeSelf: true});
    for (const element19 of ancestors) {
      if (schema3.isLimit(element19)) {
        return null;
      }
      if (schema3.isBlock(element19)) {
        return element19;
      }
    }
  }
  function mergeBranches(writer2, startPosition, endPosition) {
    const model3 = writer2.model;
    if (!checkShouldMerge(writer2.model.schema, startPosition, endPosition)) {
      return;
    }
    const [startAncestor, endAncestor] = getAncestorsJustBelowCommonAncestor(startPosition, endPosition);
    if (!startAncestor || !endAncestor) {
      return;
    }
    if (!model3.hasContent(startAncestor, {ignoreMarkers: true}) && model3.hasContent(endAncestor, {ignoreMarkers: true})) {
      mergeBranchesRight(writer2, startPosition, endPosition, startAncestor.parent);
    } else {
      mergeBranchesLeft(writer2, startPosition, endPosition, startAncestor.parent);
    }
  }
  function mergeBranchesLeft(writer2, startPosition, endPosition, commonAncestor) {
    const startElement = startPosition.parent;
    const endElement = endPosition.parent;
    if (startElement == commonAncestor || endElement == commonAncestor) {
      return;
    }
    startPosition = writer2.createPositionAfter(startElement);
    endPosition = writer2.createPositionBefore(endElement);
    if (!endPosition.isEqual(startPosition)) {
      writer2.insert(endElement, startPosition);
    }
    writer2.merge(startPosition);
    while (endPosition.parent.isEmpty) {
      const parentToRemove = endPosition.parent;
      endPosition = writer2.createPositionBefore(parentToRemove);
      writer2.remove(parentToRemove);
    }
    if (!checkShouldMerge(writer2.model.schema, startPosition, endPosition)) {
      return;
    }
    mergeBranchesLeft(writer2, startPosition, endPosition, commonAncestor);
  }
  function mergeBranchesRight(writer2, startPosition, endPosition, commonAncestor) {
    const startElement = startPosition.parent;
    const endElement = endPosition.parent;
    if (startElement == commonAncestor || endElement == commonAncestor) {
      return;
    }
    startPosition = writer2.createPositionAfter(startElement);
    endPosition = writer2.createPositionBefore(endElement);
    if (!endPosition.isEqual(startPosition)) {
      writer2.insert(startElement, endPosition);
    }
    while (startPosition.parent.isEmpty) {
      const parentToRemove = startPosition.parent;
      startPosition = writer2.createPositionBefore(parentToRemove);
      writer2.remove(parentToRemove);
    }
    endPosition = writer2.createPositionBefore(endElement);
    mergeRight(writer2, endPosition);
    if (!checkShouldMerge(writer2.model.schema, startPosition, endPosition)) {
      return;
    }
    mergeBranchesRight(writer2, startPosition, endPosition, commonAncestor);
  }
  function mergeRight(writer2, position30) {
    const startElement = position30.nodeBefore;
    const endElement = position30.nodeAfter;
    if (startElement.name != endElement.name) {
      writer2.rename(startElement, endElement.name);
    }
    writer2.clearAttributes(startElement);
    writer2.setAttributes(Object.fromEntries(endElement.getAttributes()), startElement);
    writer2.merge(position30);
  }
  function checkShouldMerge(schema3, startPosition, endPosition) {
    const startElement = startPosition.parent;
    const endElement = endPosition.parent;
    if (startElement == endElement) {
      return false;
    }
    if (schema3.isLimit(startElement) || schema3.isLimit(endElement)) {
      return false;
    }
    return isCrossingLimitElement(startPosition, endPosition, schema3);
  }
  function getAncestorsJustBelowCommonAncestor(positionA, positionB) {
    const ancestorsA = positionA.getAncestors();
    const ancestorsB = positionB.getAncestors();
    let i = 0;
    while (ancestorsA[i] && ancestorsA[i] == ancestorsB[i]) {
      i++;
    }
    return [ancestorsA[i], ancestorsB[i]];
  }
  function shouldAutoparagraph(schema3, position30) {
    const isTextAllowed = schema3.checkChild(position30, "$text");
    const isParagraphAllowed = schema3.checkChild(position30, "paragraph");
    return !isTextAllowed && isParagraphAllowed;
  }
  function isCrossingLimitElement(leftPos, rightPos, schema3) {
    const rangeToCheck = new range_default2(leftPos, rightPos);
    for (const value of rangeToCheck.getWalker()) {
      if (schema3.isLimit(value.item)) {
        return false;
      }
    }
    return true;
  }
  function insertParagraph(writer2, position30, selection11) {
    const paragraph4 = writer2.createElement("paragraph");
    writer2.insert(paragraph4, position30);
    collapseSelectionAt(writer2, selection11, writer2.createPositionAt(paragraph4, 0));
  }
  function replaceEntireContentWithParagraph(writer2, selection11) {
    const limitElement = writer2.model.schema.getLimitElement(selection11);
    writer2.remove(writer2.createRangeIn(limitElement));
    insertParagraph(writer2, writer2.createPositionAt(limitElement, 0), selection11);
  }
  function shouldEntireContentBeReplacedWithParagraph(schema3, selection11) {
    const limitElement = schema3.getLimitElement(selection11);
    if (!selection11.containsEntireContent(limitElement)) {
      return false;
    }
    const range29 = selection11.getFirstRange();
    if (range29.start.parent == range29.end.parent) {
      return false;
    }
    return schema3.checkChild(limitElement, "paragraph");
  }
  function collapseSelectionAt(writer2, selection11, positionOrRange) {
    if (selection11 instanceof documentselection_default2) {
      writer2.setSelection(positionOrRange);
    } else {
      selection11.setTo(positionOrRange);
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/utils/modifyselection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var wordBoundaryCharacters = ' ,.?!:;"-()';
  function modifySelection(model3, selection11, options = {}) {
    const schema3 = model3.schema;
    const isForward = options.direction != "backward";
    const unit = options.unit ? options.unit : "character";
    const focus = selection11.focus;
    const walker = new treewalker_default2({
      boundaries: getSearchRange(focus, isForward),
      singleCharacters: true,
      direction: isForward ? "forward" : "backward"
    });
    const data = {walker, schema: schema3, isForward, unit};
    let next;
    while (next = walker.next()) {
      if (next.done) {
        return;
      }
      const position30 = tryExtendingTo(data, next.value);
      if (position30) {
        if (selection11 instanceof documentselection_default2) {
          model3.change((writer2) => {
            writer2.setSelectionFocus(position30);
          });
        } else {
          selection11.setFocus(position30);
        }
        return;
      }
    }
  }
  function tryExtendingTo(data, value) {
    const {isForward, walker, unit, schema: schema3} = data;
    const {type, item, nextPosition} = value;
    if (type == "text") {
      if (data.unit === "word") {
        return getCorrectWordBreakPosition(walker, isForward);
      }
      return getCorrectPosition(walker, unit, isForward);
    }
    if (type == (isForward ? "elementStart" : "elementEnd")) {
      if (schema3.isSelectable(item)) {
        return position_default2._createAt(item, isForward ? "after" : "before");
      }
      if (schema3.checkChild(nextPosition, "$text")) {
        return nextPosition;
      }
    } else {
      if (schema3.isLimit(item)) {
        walker.skip(() => true);
        return;
      }
      if (schema3.checkChild(nextPosition, "$text")) {
        return nextPosition;
      }
    }
  }
  function getCorrectPosition(walker, unit) {
    const textNode = walker.position.textNode;
    if (textNode) {
      const data = textNode.data;
      let offset = walker.position.offset - textNode.startOffset;
      while (isInsideSurrogatePair(data, offset) || unit == "character" && isInsideCombinedSymbol(data, offset)) {
        walker.next();
        offset = walker.position.offset - textNode.startOffset;
      }
    }
    return walker.position;
  }
  function getCorrectWordBreakPosition(walker, isForward) {
    let textNode = walker.position.textNode;
    if (textNode) {
      let offset = walker.position.offset - textNode.startOffset;
      while (!isAtWordBoundary(textNode.data, offset, isForward) && !isAtNodeBoundary(textNode, offset, isForward)) {
        walker.next();
        const nextNode = isForward ? walker.position.nodeAfter : walker.position.nodeBefore;
        if (nextNode && nextNode.is("$text")) {
          const boundaryChar = nextNode.data.charAt(isForward ? 0 : nextNode.data.length - 1);
          if (!wordBoundaryCharacters.includes(boundaryChar)) {
            walker.next();
            textNode = walker.position.textNode;
          }
        }
        offset = walker.position.offset - textNode.startOffset;
      }
    }
    return walker.position;
  }
  function getSearchRange(start, isForward) {
    const root11 = start.root;
    const searchEnd = position_default2._createAt(root11, isForward ? "end" : 0);
    if (isForward) {
      return new range_default2(start, searchEnd);
    } else {
      return new range_default2(searchEnd, start);
    }
  }
  function isAtWordBoundary(data, offset, isForward) {
    const offsetToCheck = offset + (isForward ? 0 : -1);
    return wordBoundaryCharacters.includes(data.charAt(offsetToCheck));
  }
  function isAtNodeBoundary(textNode, offset, isForward) {
    return offset === (isForward ? textNode.endOffset : 0);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/utils/getselectedcontent.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function getSelectedContent(model3, selection11) {
    return model3.change((writer2) => {
      const frag = writer2.createDocumentFragment();
      const range29 = selection11.getFirstRange();
      if (!range29 || range29.isCollapsed) {
        return frag;
      }
      const root11 = range29.start.root;
      const commonPath = range29.start.getCommonPath(range29.end);
      const commonParent = root11.getNodeByPath(commonPath);
      let flatSubtreeRange;
      if (range29.start.parent == range29.end.parent) {
        flatSubtreeRange = range29;
      } else {
        flatSubtreeRange = writer2.createRange(writer2.createPositionAt(commonParent, range29.start.path[commonPath.length]), writer2.createPositionAt(commonParent, range29.end.path[commonPath.length] + 1));
      }
      const howMany = flatSubtreeRange.end.offset - flatSubtreeRange.start.offset;
      for (const item of flatSubtreeRange.getItems({shallow: true})) {
        if (item.is("$textProxy")) {
          writer2.appendText(item.data, item.getAttributes(), frag);
        } else {
          writer2.append(writer2.cloneElement(item, true), frag);
        }
      }
      if (flatSubtreeRange != range29) {
        const newRange = range29._getTransformedByMove(flatSubtreeRange.start, writer2.createPositionAt(frag, 0), howMany)[0];
        const leftExcessRange = writer2.createRange(writer2.createPositionAt(frag, 0), newRange.start);
        const rightExcessRange = writer2.createRange(newRange.end, writer2.createPositionAt(frag, "end"));
        removeRangeContent(rightExcessRange, writer2);
        removeRangeContent(leftExcessRange, writer2);
      }
      return frag;
    });
  }
  function removeRangeContent(range29, writer2) {
    const parentsToCheck = [];
    Array.from(range29.getItems({direction: "backward"})).map((item) => writer2.createRangeOn(item)).filter((itemRange) => {
      const contained = (itemRange.start.isAfter(range29.start) || itemRange.start.isEqual(range29.start)) && (itemRange.end.isBefore(range29.end) || itemRange.end.isEqual(range29.end));
      return contained;
    }).forEach((itemRange) => {
      parentsToCheck.push(itemRange.start.parent);
      writer2.remove(itemRange);
    });
    parentsToCheck.forEach((parentToCheck) => {
      let parent3 = parentToCheck;
      while (parent3.parent && parent3.isEmpty) {
        const removeRange = writer2.createRangeOn(parent3);
        parent3 = parent3.parent;
        writer2.remove(removeRange);
      }
    });
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/utils/selection-post-fixer.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function injectSelectionPostFixer(model3) {
    model3.document.registerPostFixer((writer2) => selectionPostFixer(writer2, model3));
  }
  function selectionPostFixer(writer2, model3) {
    const selection11 = model3.document.selection;
    const schema3 = model3.schema;
    const ranges = [];
    let wasFixed = false;
    for (const modelRange of selection11.getRanges()) {
      const correctedRange = tryFixingRange(modelRange, schema3);
      if (correctedRange && !correctedRange.isEqual(modelRange)) {
        ranges.push(correctedRange);
        wasFixed = true;
      } else {
        ranges.push(modelRange);
      }
    }
    if (wasFixed) {
      writer2.setSelection(mergeIntersectingRanges(ranges), {backward: selection11.isBackward});
    }
  }
  function tryFixingRange(range29, schema3) {
    if (range29.isCollapsed) {
      return tryFixingCollapsedRange(range29, schema3);
    }
    return tryFixingNonCollapsedRage(range29, schema3);
  }
  function tryFixingCollapsedRange(range29, schema3) {
    const originalPosition = range29.start;
    const nearestSelectionRange = schema3.getNearestSelectionRange(originalPosition);
    if (!nearestSelectionRange) {
      return null;
    }
    if (!nearestSelectionRange.isCollapsed) {
      return nearestSelectionRange;
    }
    const fixedPosition = nearestSelectionRange.start;
    if (originalPosition.isEqual(fixedPosition)) {
      return null;
    }
    return new range_default2(fixedPosition);
  }
  function tryFixingNonCollapsedRage(range29, schema3) {
    const {start, end} = range29;
    const isTextAllowedOnStart = schema3.checkChild(start, "$text");
    const isTextAllowedOnEnd = schema3.checkChild(end, "$text");
    const startLimitElement = schema3.getLimitElement(start);
    const endLimitElement = schema3.getLimitElement(end);
    if (startLimitElement === endLimitElement) {
      if (isTextAllowedOnStart && isTextAllowedOnEnd) {
        return null;
      }
      if (checkSelectionOnNonLimitElements(start, end, schema3)) {
        const isStartBeforeSelectable = start.nodeAfter && schema3.isSelectable(start.nodeAfter);
        const fixedStart = isStartBeforeSelectable ? null : schema3.getNearestSelectionRange(start, "forward");
        const isEndAfterSelectable = end.nodeBefore && schema3.isSelectable(end.nodeBefore);
        const fixedEnd = isEndAfterSelectable ? null : schema3.getNearestSelectionRange(end, "backward");
        const rangeStart = fixedStart ? fixedStart.start : start;
        const rangeEnd = fixedEnd ? fixedEnd.end : end;
        return new range_default2(rangeStart, rangeEnd);
      }
    }
    const isStartInLimit = startLimitElement && !startLimitElement.is("rootElement");
    const isEndInLimit = endLimitElement && !endLimitElement.is("rootElement");
    if (isStartInLimit || isEndInLimit) {
      const bothInSameParent = start.nodeAfter && end.nodeBefore && start.nodeAfter.parent === end.nodeBefore.parent;
      const expandStart = isStartInLimit && (!bothInSameParent || !isSelectable(start.nodeAfter, schema3));
      const expandEnd = isEndInLimit && (!bothInSameParent || !isSelectable(end.nodeBefore, schema3));
      let fixedStart = start;
      let fixedEnd = end;
      if (expandStart) {
        fixedStart = position_default2._createBefore(findOutermostLimitAncestor(startLimitElement, schema3));
      }
      if (expandEnd) {
        fixedEnd = position_default2._createAfter(findOutermostLimitAncestor(endLimitElement, schema3));
      }
      return new range_default2(fixedStart, fixedEnd);
    }
    return null;
  }
  function findOutermostLimitAncestor(startingNode, schema3) {
    let isLimitNode = startingNode;
    let parent3 = isLimitNode;
    while (schema3.isLimit(parent3) && parent3.parent) {
      isLimitNode = parent3;
      parent3 = parent3.parent;
    }
    return isLimitNode;
  }
  function checkSelectionOnNonLimitElements(start, end, schema3) {
    const startIsOnBlock = start.nodeAfter && !schema3.isLimit(start.nodeAfter) || schema3.checkChild(start, "$text");
    const endIsOnBlock = end.nodeBefore && !schema3.isLimit(end.nodeBefore) || schema3.checkChild(end, "$text");
    return startIsOnBlock || endIsOnBlock;
  }
  function mergeIntersectingRanges(ranges) {
    const nonIntersectingRanges = [];
    nonIntersectingRanges.push(ranges.shift());
    for (const range29 of ranges) {
      const previousRange = nonIntersectingRanges.pop();
      if (range29.isEqual(previousRange)) {
        nonIntersectingRanges.push(previousRange);
      } else if (range29.isIntersecting(previousRange)) {
        const start = previousRange.start.isAfter(range29.start) ? range29.start : previousRange.start;
        const end = previousRange.end.isAfter(range29.end) ? previousRange.end : range29.end;
        const merged = new range_default2(start, end);
        nonIntersectingRanges.push(merged);
      } else {
        nonIntersectingRanges.push(previousRange);
        nonIntersectingRanges.push(range29);
      }
    }
    return nonIntersectingRanges;
  }
  function isSelectable(node12, schema3) {
    return node12 && schema3.isSelectable(node12);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/model/model.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Model = class {
    constructor() {
      this.markers = new markercollection_default();
      this.document = new document_default2(this);
      this.schema = new schema_default();
      this._pendingChanges = [];
      this._currentWriter = null;
      ["insertContent", "deleteContent", "modifySelection", "getSelectedContent", "applyOperation"].forEach((methodName) => this.decorate(methodName));
      this.on("applyOperation", (evt, args) => {
        const operation12 = args[0];
        operation12._validate();
      }, {priority: "highest"});
      this.schema.register("$root", {
        isLimit: true
      });
      this.schema.register("$block", {
        allowIn: "$root",
        isBlock: true
      });
      this.schema.register("$text", {
        allowIn: "$block",
        isInline: true,
        isContent: true
      });
      this.schema.register("$clipboardHolder", {
        allowContentOf: "$root",
        isLimit: true
      });
      this.schema.extend("$text", {allowIn: "$clipboardHolder"});
      this.schema.register("$marker");
      this.schema.addChildCheck((context2, childDefinition) => {
        if (childDefinition.name === "$marker") {
          return true;
        }
      });
      injectSelectionPostFixer(this);
      this.document.registerPostFixer(autoParagraphEmptyRoots);
    }
    change(callback) {
      try {
        if (this._pendingChanges.length === 0) {
          this._pendingChanges.push({batch: new batch_default(), callback});
          return this._runPendingChanges()[0];
        } else {
          return callback(this._currentWriter);
        }
      } catch (err) {
        ckeditorerror_default.rethrowUnexpectedError(err, this);
      }
    }
    enqueueChange(batchOrType, callback) {
      try {
        if (typeof batchOrType === "string") {
          batchOrType = new batch_default(batchOrType);
        } else if (typeof batchOrType == "function") {
          callback = batchOrType;
          batchOrType = new batch_default();
        }
        this._pendingChanges.push({batch: batchOrType, callback});
        if (this._pendingChanges.length == 1) {
          this._runPendingChanges();
        }
      } catch (err) {
        ckeditorerror_default.rethrowUnexpectedError(err, this);
      }
    }
    applyOperation(operation12) {
      operation12._execute();
    }
    insertContent(content, selectable, placeOrOffset) {
      return insertContent(this, content, selectable, placeOrOffset);
    }
    deleteContent(selection11, options) {
      deleteContent(this, selection11, options);
    }
    modifySelection(selection11, options) {
      modifySelection(this, selection11, options);
    }
    getSelectedContent(selection11) {
      return getSelectedContent(this, selection11);
    }
    hasContent(rangeOrElement, options = {}) {
      const range29 = rangeOrElement instanceof element_default2 ? range_default2._createIn(rangeOrElement) : rangeOrElement;
      if (range29.isCollapsed) {
        return false;
      }
      const {ignoreWhitespaces = false, ignoreMarkers = false} = options;
      if (!ignoreMarkers) {
        for (const intersectingMarker of this.markers.getMarkersIntersectingRange(range29)) {
          if (intersectingMarker.affectsData) {
            return true;
          }
        }
      }
      for (const item of range29.getItems()) {
        if (this.schema.isContent(item)) {
          if (item.is("$textProxy")) {
            if (!ignoreWhitespaces) {
              return true;
            } else if (item.data.search(/\S/) !== -1) {
              return true;
            }
          } else {
            return true;
          }
        }
      }
      return false;
    }
    createPositionFromPath(root11, path, stickiness) {
      return new position_default2(root11, path, stickiness);
    }
    createPositionAt(itemOrPosition, offset) {
      return position_default2._createAt(itemOrPosition, offset);
    }
    createPositionAfter(item) {
      return position_default2._createAfter(item);
    }
    createPositionBefore(item) {
      return position_default2._createBefore(item);
    }
    createRange(start, end) {
      return new range_default2(start, end);
    }
    createRangeIn(element18) {
      return range_default2._createIn(element18);
    }
    createRangeOn(item) {
      return range_default2._createOn(item);
    }
    createSelection(selectable, placeOrOffset, options) {
      return new selection_default2(selectable, placeOrOffset, options);
    }
    createBatch(type) {
      return new batch_default(type);
    }
    createOperationFromJSON(json) {
      return operationfactory_default.fromJSON(json, this.document);
    }
    destroy() {
      this.document.destroy();
      this.stopListening();
    }
    _runPendingChanges() {
      const ret = [];
      this.fire("_beforeChanges");
      while (this._pendingChanges.length) {
        const currentBatch = this._pendingChanges[0].batch;
        this._currentWriter = new writer_default(this, currentBatch);
        const callbackReturnValue = this._pendingChanges[0].callback(this._currentWriter);
        ret.push(callbackReturnValue);
        this.document._handleChangeBlock(this._currentWriter);
        this._pendingChanges.shift();
        this._currentWriter = null;
      }
      this.fire("_afterChanges");
      return ret;
    }
  };
  var model_default = Model;
  mix(Model, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-utils/src/keystrokehandler.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var KeystrokeHandler = class {
    constructor() {
      this._listener = Object.create(emittermixin_default2);
    }
    listenTo(emitter) {
      this._listener.listenTo(emitter, "keydown", (evt, keyEvtData) => {
        this._listener.fire("_keydown:" + getCode(keyEvtData), keyEvtData);
      });
    }
    set(keystroke, callback, options = {}) {
      const keyCode = parseKeystroke(keystroke);
      const priority = options.priority;
      this._listener.listenTo(this._listener, "_keydown:" + keyCode, (evt, keyEvtData) => {
        callback(keyEvtData, () => {
          keyEvtData.preventDefault();
          keyEvtData.stopPropagation();
          evt.stop();
        });
        evt.return = true;
      }, {priority});
    }
    press(keyEvtData) {
      return !!this._listener.fire("_keydown:" + getCode(keyEvtData), keyEvtData);
    }
    destroy() {
      this._listener.stopListening();
    }
  };
  var keystrokehandler_default = KeystrokeHandler;

  // node_modules/@ckeditor/ckeditor5-core/src/editingkeystrokehandler.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EditingKeystrokeHandler = class extends keystrokehandler_default {
    constructor(editor2) {
      super();
      this.editor = editor2;
    }
    set(keystroke, callback, options = {}) {
      if (typeof callback == "string") {
        const commandName = callback;
        callback = (evtData, cancel) => {
          this.editor.execute(commandName);
          cancel();
        };
      }
      super.set(keystroke, callback, options);
    }
  };
  var editingkeystrokehandler_default = EditingKeystrokeHandler;

  // node_modules/@ckeditor/ckeditor5-core/src/editor/editor.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Editor = class {
    constructor(config3 = {}) {
      this._context = config3.context || new context_default({language: config3.language});
      this._context._addEditor(this, !config3.context);
      const availablePlugins = Array.from(this.constructor.builtinPlugins || []);
      this.config = new config_default(config3, this.constructor.defaultConfig);
      this.config.define("plugins", availablePlugins);
      this.config.define(this._context._getEditorConfig());
      this.plugins = new plugincollection_default(this, availablePlugins, this._context.plugins);
      this.locale = this._context.locale;
      this.t = this.locale.t;
      this.commands = new commandcollection_default();
      this.set("state", "initializing");
      this.once("ready", () => this.state = "ready", {priority: "high"});
      this.once("destroy", () => this.state = "destroyed", {priority: "high"});
      this.set("isReadOnly", false);
      this.model = new model_default();
      const stylesProcessor = new StylesProcessor();
      this.data = new datacontroller_default(this.model, stylesProcessor);
      this.editing = new editingcontroller_default(this.model, stylesProcessor);
      this.editing.view.document.bind("isReadOnly").to(this);
      this.conversion = new conversion_default([this.editing.downcastDispatcher, this.data.downcastDispatcher], this.data.upcastDispatcher);
      this.conversion.addAlias("dataDowncast", this.data.downcastDispatcher);
      this.conversion.addAlias("editingDowncast", this.editing.downcastDispatcher);
      this.keystrokes = new editingkeystrokehandler_default(this);
      this.keystrokes.listenTo(this.editing.view.document);
    }
    initPlugins() {
      const config3 = this.config;
      const plugins = config3.get("plugins");
      const removePlugins = config3.get("removePlugins") || [];
      const extraPlugins = config3.get("extraPlugins") || [];
      return this.plugins.init(plugins.concat(extraPlugins), removePlugins);
    }
    destroy() {
      let readyPromise = Promise.resolve();
      if (this.state == "initializing") {
        readyPromise = new Promise((resolve) => this.once("ready", resolve));
      }
      return readyPromise.then(() => {
        this.fire("destroy");
        this.stopListening();
        this.commands.destroy();
      }).then(() => this.plugins.destroy()).then(() => {
        this.model.destroy();
        this.data.destroy();
        this.editing.destroy();
        this.keystrokes.destroy();
      }).then(() => this._context._removeEditor(this));
    }
    execute(...args) {
      try {
        return this.commands.execute(...args);
      } catch (err) {
        ckeditorerror_default.rethrowUnexpectedError(err, this);
      }
    }
    focus() {
      this.editing.view.focus();
    }
  };
  var editor_default = Editor;
  mix(Editor, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-core/src/editor/utils/dataapimixin.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DataApiMixin = {
    setData(data) {
      this.data.set(data);
    },
    getData(options) {
      return this.data.get(options);
    }
  };
  var dataapimixin_default = DataApiMixin;

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/setdatainelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function setDataInElement(el, data) {
    if (el instanceof HTMLTextAreaElement) {
      el.value = data;
    }
    el.innerHTML = data;
  }

  // node_modules/@ckeditor/ckeditor5-core/src/editor/utils/elementapimixin.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ElementApiMixin = {
    updateSourceElement() {
      if (!this.sourceElement) {
        throw new ckeditorerror_default("editor-missing-sourceelement", this);
      }
      setDataInElement(this.sourceElement, this.data.get());
    }
  };
  var elementapimixin_default = ElementApiMixin;

  // node_modules/@ckeditor/ckeditor5-core/src/editor/utils/attachtoform.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function attachToForm(editor2) {
    if (!isFunction_default(editor2.updateSourceElement)) {
      throw new ckeditorerror_default("attachtoform-missing-elementapi-interface", editor2);
    }
    const sourceElement = editor2.sourceElement;
    if (sourceElement && sourceElement.tagName.toLowerCase() === "textarea" && sourceElement.form) {
      let originalSubmit;
      const form = sourceElement.form;
      const onSubmit = () => editor2.updateSourceElement();
      if (isFunction_default(form.submit)) {
        originalSubmit = form.submit;
        form.submit = () => {
          onSubmit();
          originalSubmit.apply(form);
        };
      }
      form.addEventListener("submit", onSubmit);
      editor2.on("destroy", () => {
        form.removeEventListener("submit", onSubmit);
        if (originalSubmit) {
          form.submit = originalSubmit;
        }
      });
    }
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/dataprocessor/basichtmlwriter.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var BasicHtmlWriter = class {
    getHtml(fragment) {
      const doc = document.implementation.createHTMLDocument("");
      const container = doc.createElement("div");
      container.appendChild(fragment);
      return container.innerHTML;
    }
  };
  var basichtmlwriter_default = BasicHtmlWriter;

  // node_modules/@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var HtmlDataProcessor = class {
    constructor(document5) {
      this._domParser = new DOMParser();
      this._domConverter = new domconverter_default(document5, {blockFillerMode: "nbsp"});
      this._htmlWriter = new basichtmlwriter_default();
    }
    toData(viewFragment) {
      const domFragment = this._domConverter.viewToDom(viewFragment, document);
      return this._htmlWriter.getHtml(domFragment);
    }
    toView(data) {
      const domFragment = this._toDom(data);
      return this._domConverter.domToView(domFragment);
    }
    registerRawContentMatcher(pattern) {
      this._domConverter.registerRawContentMatcher(pattern);
    }
    _toDom(data) {
      const document5 = this._domParser.parseFromString(data, "text/html");
      const fragment = document5.createDocumentFragment();
      const nodes = document5.body.childNodes;
      while (nodes.length > 0) {
        fragment.appendChild(nodes[0]);
      }
      return fragment;
    }
  };
  var htmldataprocessor_default = HtmlDataProcessor;

  // node_modules/@ckeditor/ckeditor5-ui/src/componentfactory.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ComponentFactory = class {
    constructor(editor2) {
      this.editor = editor2;
      this._components = new Map();
    }
    *names() {
      for (const value of this._components.values()) {
        yield value.originalName;
      }
    }
    add(name, callback) {
      this._components.set(getNormalized(name), {callback, originalName: name});
    }
    create(name) {
      if (!this.has(name)) {
        throw new ckeditorerror_default("componentfactory-item-missing", this, {name});
      }
      return this._components.get(getNormalized(name)).callback(this.editor.locale);
    }
    has(name) {
      return this._components.has(getNormalized(name));
    }
  };
  var componentfactory_default = ComponentFactory;
  function getNormalized(name) {
    return String(name).toLowerCase();
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/focustracker.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var FocusTracker = class {
    constructor() {
      this.set("isFocused", false);
      this.set("focusedElement", null);
      this._elements = new Set();
      this._nextEventLoopTimeout = null;
    }
    add(element18) {
      if (this._elements.has(element18)) {
        throw new ckeditorerror_default("focustracker-add-element-already-exist", this);
      }
      this.listenTo(element18, "focus", () => this._focus(element18), {useCapture: true});
      this.listenTo(element18, "blur", () => this._blur(), {useCapture: true});
      this._elements.add(element18);
    }
    remove(element18) {
      if (element18 === this.focusedElement) {
        this._blur(element18);
      }
      if (this._elements.has(element18)) {
        this.stopListening(element18);
        this._elements.delete(element18);
      }
    }
    destroy() {
      this.stopListening();
    }
    _focus(element18) {
      clearTimeout(this._nextEventLoopTimeout);
      this.focusedElement = element18;
      this.isFocused = true;
    }
    _blur() {
      clearTimeout(this._nextEventLoopTimeout);
      this._nextEventLoopTimeout = setTimeout(() => {
        this.focusedElement = null;
        this.isFocused = false;
      }, 0);
    }
  };
  var focustracker_default = FocusTracker;
  mix(FocusTracker, emittermixin_default2);
  mix(FocusTracker, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-core/src/editor/editorui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EditorUI = class {
    constructor(editor2) {
      this.editor = editor2;
      this.componentFactory = new componentfactory_default(editor2);
      this.focusTracker = new focustracker_default();
      this._editableElementsMap = new Map();
      this.listenTo(editor2.editing.view.document, "layoutChanged", () => this.update());
    }
    get element() {
      return null;
    }
    update() {
      this.fire("update");
    }
    destroy() {
      this.stopListening();
      this.focusTracker.destroy();
      for (const domElement of this._editableElementsMap.values()) {
        domElement.ckeditorInstance = null;
      }
      this._editableElementsMap = new Map();
    }
    setEditableElement(rootName, domElement) {
      this._editableElementsMap.set(rootName, domElement);
      if (!domElement.ckeditorInstance) {
        domElement.ckeditorInstance = this.editor;
      }
    }
    getEditableElement(rootName = "main") {
      return this._editableElementsMap.get(rootName);
    }
    getEditableElementsNames() {
      return this._editableElementsMap.keys();
    }
    get _editableElements() {
      console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.", {editorUI: this});
      return this._editableElementsMap;
    }
  };
  var editorui_default = EditorUI;
  mix(EditorUI, emittermixin_default);

  // node_modules/@ckeditor/ckeditor5-ui/src/toolbar/enabletoolbarkeyboardfocus.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function enableToolbarKeyboardFocus({
    origin,
    originKeystrokeHandler,
    originFocusTracker,
    toolbar: toolbar2,
    beforeFocus,
    afterBlur
  }) {
    originFocusTracker.add(toolbar2.element);
    originKeystrokeHandler.set("Alt+F10", (data, cancel) => {
      if (originFocusTracker.isFocused && !toolbar2.focusTracker.isFocused) {
        if (beforeFocus) {
          beforeFocus();
        }
        toolbar2.focus();
        cancel();
      }
    });
    toolbar2.keystrokes.set("Esc", (data, cancel) => {
      if (toolbar2.focusTracker.isFocused) {
        origin.focus();
        if (afterBlur) {
          afterBlur();
        }
        cancel();
      }
    });
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/toolbar/normalizetoolbarconfig.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function normalizeToolbarConfig(config3) {
    if (Array.isArray(config3)) {
      return {
        items: config3
      };
    }
    if (!config3) {
      return {
        items: []
      };
    }
    return Object.assign({
      items: []
    }, config3);
  }

  // node_modules/@ckeditor/ckeditor5-engine/src/view/placeholder.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var documentPlaceholders = new WeakMap();
  function enablePlaceholder(options) {
    const {view: view19, element: element18, text: text16, isDirectHost = true} = options;
    const doc = view19.document;
    if (!documentPlaceholders.has(doc)) {
      documentPlaceholders.set(doc, new Map());
      doc.registerPostFixer((writer2) => updateDocumentPlaceholders(doc, writer2));
    }
    documentPlaceholders.get(doc).set(element18, {
      text: text16,
      isDirectHost
    });
    view19.change((writer2) => updateDocumentPlaceholders(doc, writer2));
  }
  function showPlaceholder(writer2, element18) {
    if (!element18.hasClass("ck-placeholder")) {
      writer2.addClass("ck-placeholder", element18);
      return true;
    }
    return false;
  }
  function hidePlaceholder(writer2, element18) {
    if (element18.hasClass("ck-placeholder")) {
      writer2.removeClass("ck-placeholder", element18);
      return true;
    }
    return false;
  }
  function needsPlaceholder(element18) {
    if (!element18.isAttached()) {
      return false;
    }
    const isEmptyish = !Array.from(element18.getChildren()).some((element19) => !element19.is("uiElement"));
    const doc = element18.document;
    if (!doc.isFocused && isEmptyish) {
      return true;
    }
    const viewSelection = doc.selection;
    const selectionAnchor = viewSelection.anchor;
    if (isEmptyish && selectionAnchor && selectionAnchor.parent !== element18) {
      return true;
    }
    return false;
  }
  function updateDocumentPlaceholders(doc, writer2) {
    const placeholders = documentPlaceholders.get(doc);
    let wasViewModified = false;
    for (const [element18, config3] of placeholders) {
      if (updatePlaceholder(writer2, element18, config3)) {
        wasViewModified = true;
      }
    }
    return wasViewModified;
  }
  function updatePlaceholder(writer2, element18, config3) {
    const {text: text16, isDirectHost} = config3;
    const hostElement = isDirectHost ? element18 : getChildPlaceholderHostSubstitute(element18);
    let wasViewModified = false;
    if (!hostElement) {
      return false;
    }
    config3.hostElement = hostElement;
    if (hostElement.getAttribute("data-placeholder") !== text16) {
      writer2.setAttribute("data-placeholder", text16, hostElement);
      wasViewModified = true;
    }
    if (needsPlaceholder(hostElement)) {
      if (showPlaceholder(writer2, hostElement)) {
        wasViewModified = true;
      }
    } else if (hidePlaceholder(writer2, hostElement)) {
      wasViewModified = true;
    }
    return wasViewModified;
  }
  function getChildPlaceholderHostSubstitute(parent3) {
    if (parent3.childCount === 1) {
      const firstChild = parent3.getChild(0);
      if (firstChild.is("element") && !firstChild.is("uiElement")) {
        return firstChild;
      }
    }
    return null;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/elementreplacer.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ElementReplacer = class {
    constructor() {
      this._replacedElements = [];
    }
    replace(element18, newElement) {
      this._replacedElements.push({element: element18, newElement});
      element18.style.display = "none";
      if (newElement) {
        element18.parentNode.insertBefore(newElement, element18.nextSibling);
      }
    }
    restore() {
      this._replacedElements.forEach(({element: element18, newElement}) => {
        element18.style.display = "";
        if (newElement) {
          newElement.remove();
        }
      });
      this._replacedElements = [];
    }
  };
  var elementreplacer_default = ElementReplacer;

  // node_modules/@ckeditor/ckeditor5-editor-classic/src/classiceditorui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ClassicEditorUI = class extends editorui_default {
    constructor(editor2, view19) {
      super(editor2);
      this.view = view19;
      this._toolbarConfig = normalizeToolbarConfig(editor2.config.get("toolbar"));
      this._elementReplacer = new elementreplacer_default();
    }
    get element() {
      return this.view.element;
    }
    init(replacementElement) {
      const editor2 = this.editor;
      const view19 = this.view;
      const editingView = editor2.editing.view;
      const editable = view19.editable;
      const editingRoot = editingView.document.getRoot();
      editable.name = editingRoot.rootName;
      view19.render();
      const editableElement = editable.element;
      this.setEditableElement(editable.name, editableElement);
      this.focusTracker.add(editableElement);
      view19.editable.bind("isFocused").to(this.focusTracker);
      editingView.attachDomRoot(editableElement);
      if (replacementElement) {
        this._elementReplacer.replace(replacementElement, this.element);
      }
      this._initPlaceholder();
      this._initToolbar();
      this.fire("ready");
    }
    destroy() {
      const view19 = this.view;
      const editingView = this.editor.editing.view;
      this._elementReplacer.restore();
      editingView.detachDomRoot(view19.editable.name);
      view19.destroy();
      super.destroy();
    }
    _initToolbar() {
      const editor2 = this.editor;
      const view19 = this.view;
      const editingView = editor2.editing.view;
      view19.stickyPanel.bind("isActive").to(this.focusTracker, "isFocused");
      view19.stickyPanel.limiterElement = view19.element;
      if (this._toolbarConfig.viewportTopOffset) {
        view19.stickyPanel.viewportTopOffset = this._toolbarConfig.viewportTopOffset;
      }
      view19.toolbar.fillFromConfig(this._toolbarConfig.items, this.componentFactory);
      enableToolbarKeyboardFocus({
        origin: editingView,
        originFocusTracker: this.focusTracker,
        originKeystrokeHandler: editor2.keystrokes,
        toolbar: view19.toolbar
      });
    }
    _initPlaceholder() {
      const editor2 = this.editor;
      const editingView = editor2.editing.view;
      const editingRoot = editingView.document.getRoot();
      const sourceElement = editor2.sourceElement;
      const placeholderText = editor2.config.get("placeholder") || sourceElement && sourceElement.tagName.toLowerCase() === "textarea" && sourceElement.getAttribute("placeholder");
      if (placeholderText) {
        enablePlaceholder({
          view: editingView,
          element: editingRoot,
          text: placeholderText,
          isDirectHost: false
        });
      }
    }
  };
  var classiceditorui_default = ClassicEditorUI;

  // node_modules/@ckeditor/ckeditor5-ui/src/viewcollection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ViewCollection = class extends collection_default {
    constructor(initialItems = []) {
      super(initialItems, {
        idProperty: "viewUid"
      });
      this.on("add", (evt, view19, index) => {
        this._renderViewIntoCollectionParent(view19, index);
      });
      this.on("remove", (evt, view19) => {
        if (view19.element && this._parentElement) {
          view19.element.remove();
        }
      });
      this._parentElement = null;
    }
    destroy() {
      this.map((view19) => view19.destroy());
    }
    setParent(elementOrDocFragment) {
      this._parentElement = elementOrDocFragment;
      for (const view19 of this) {
        this._renderViewIntoCollectionParent(view19);
      }
    }
    delegate(...events) {
      if (!events.length || !isStringArray2(events)) {
        throw new ckeditorerror_default("ui-viewcollection-delegate-wrong-events", this);
      }
      return {
        to: (dest) => {
          for (const view19 of this) {
            for (const evtName of events) {
              view19.delegate(evtName).to(dest);
            }
          }
          this.on("add", (evt, view19) => {
            for (const evtName of events) {
              view19.delegate(evtName).to(dest);
            }
          });
          this.on("remove", (evt, view19) => {
            for (const evtName of events) {
              view19.stopDelegating(evtName, dest);
            }
          });
        }
      };
    }
    _renderViewIntoCollectionParent(view19, index) {
      if (!view19.isRendered) {
        view19.render();
      }
      if (view19.element && this._parentElement) {
        this._parentElement.insertBefore(view19.element, this._parentElement.children[index]);
      }
    }
  };
  var viewcollection_default = ViewCollection;
  function isStringArray2(arr) {
    return arr.every((a) => typeof a == "string");
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/template.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var xhtmlNs = "http://www.w3.org/1999/xhtml";
  var Template = class {
    constructor(def) {
      Object.assign(this, normalize5(clone2(def)));
      this._isRendered = false;
      this._revertData = null;
    }
    render() {
      const node12 = this._renderNode({
        intoFragment: true
      });
      this._isRendered = true;
      return node12;
    }
    apply(node12) {
      this._revertData = getEmptyRevertData();
      this._renderNode({
        node: node12,
        isApplying: true,
        revertData: this._revertData
      });
      return node12;
    }
    revert(node12) {
      if (!this._revertData) {
        throw new ckeditorerror_default("ui-template-revert-not-applied", [this, node12]);
      }
      this._revertTemplateFromNode(node12, this._revertData);
    }
    *getViews() {
      function* search(def) {
        if (def.children) {
          for (const child of def.children) {
            if (isView(child)) {
              yield child;
            } else if (isTemplate(child)) {
              yield* search(child);
            }
          }
        }
      }
      yield* search(this);
    }
    static bind(observable, emitter) {
      return {
        to(eventNameOrFunctionOrAttribute, callback) {
          return new TemplateToBinding({
            eventNameOrFunction: eventNameOrFunctionOrAttribute,
            attribute: eventNameOrFunctionOrAttribute,
            observable,
            emitter,
            callback
          });
        },
        if(attribute, valueIfTrue, callback) {
          return new TemplateIfBinding({
            observable,
            emitter,
            attribute,
            valueIfTrue,
            callback
          });
        }
      };
    }
    static extend(template4, def) {
      if (template4._isRendered) {
        throw new ckeditorerror_default("template-extend-render", [this, template4]);
      }
      extendTemplate(template4, normalize5(clone2(def)));
    }
    _renderNode(data) {
      let isInvalid;
      if (data.node) {
        isInvalid = this.tag && this.text;
      } else {
        isInvalid = this.tag ? this.text : !this.text;
      }
      if (isInvalid) {
        throw new ckeditorerror_default("ui-template-wrong-syntax", this);
      }
      if (this.text) {
        return this._renderText(data);
      } else {
        return this._renderElement(data);
      }
    }
    _renderElement(data) {
      let node12 = data.node;
      if (!node12) {
        node12 = data.node = document.createElementNS(this.ns || xhtmlNs, this.tag);
      }
      this._renderAttributes(data);
      this._renderElementChildren(data);
      this._setUpListeners(data);
      return node12;
    }
    _renderText(data) {
      let node12 = data.node;
      if (node12) {
        data.revertData.text = node12.textContent;
      } else {
        node12 = data.node = document.createTextNode("");
      }
      if (hasTemplateBinding(this.text)) {
        this._bindToObservable({
          schema: this.text,
          updater: getTextUpdater(node12),
          data
        });
      } else {
        node12.textContent = this.text.join("");
      }
      return node12;
    }
    _renderAttributes(data) {
      let attrName, attrValue, domAttrValue, attrNs;
      if (!this.attributes) {
        return;
      }
      const node12 = data.node;
      const revertData = data.revertData;
      for (attrName in this.attributes) {
        domAttrValue = node12.getAttribute(attrName);
        attrValue = this.attributes[attrName];
        if (revertData) {
          revertData.attributes[attrName] = domAttrValue;
        }
        attrNs = isObject_default(attrValue[0]) && attrValue[0].ns ? attrValue[0].ns : null;
        if (hasTemplateBinding(attrValue)) {
          const valueToBind = attrNs ? attrValue[0].value : attrValue;
          if (revertData && shouldExtend(attrName)) {
            valueToBind.unshift(domAttrValue);
          }
          this._bindToObservable({
            schema: valueToBind,
            updater: getAttributeUpdater(node12, attrName, attrNs),
            data
          });
        } else if (attrName == "style" && typeof attrValue[0] !== "string") {
          this._renderStyleAttribute(attrValue[0], data);
        } else {
          if (revertData && domAttrValue && shouldExtend(attrName)) {
            attrValue.unshift(domAttrValue);
          }
          attrValue = attrValue.map((val) => val ? val.value || val : val).reduce((prev, next) => prev.concat(next), []).reduce(arrayValueReducer, "");
          if (!isFalsy(attrValue)) {
            node12.setAttributeNS(attrNs, attrName, attrValue);
          }
        }
      }
    }
    _renderStyleAttribute(styles, data) {
      const node12 = data.node;
      for (const styleName in styles) {
        const styleValue = styles[styleName];
        if (hasTemplateBinding(styleValue)) {
          this._bindToObservable({
            schema: [styleValue],
            updater: getStyleUpdater(node12, styleName),
            data
          });
        } else {
          node12.style[styleName] = styleValue;
        }
      }
    }
    _renderElementChildren(data) {
      const node12 = data.node;
      const container = data.intoFragment ? document.createDocumentFragment() : node12;
      const isApplying = data.isApplying;
      let childIndex = 0;
      for (const child of this.children) {
        if (isViewCollection(child)) {
          if (!isApplying) {
            child.setParent(node12);
            for (const view19 of child) {
              container.appendChild(view19.element);
            }
          }
        } else if (isView(child)) {
          if (!isApplying) {
            if (!child.isRendered) {
              child.render();
            }
            container.appendChild(child.element);
          }
        } else if (isNode(child)) {
          container.appendChild(child);
        } else {
          if (isApplying) {
            const revertData = data.revertData;
            const childRevertData = getEmptyRevertData();
            revertData.children.push(childRevertData);
            child._renderNode({
              node: container.childNodes[childIndex++],
              isApplying: true,
              revertData: childRevertData
            });
          } else {
            container.appendChild(child.render());
          }
        }
      }
      if (data.intoFragment) {
        node12.appendChild(container);
      }
    }
    _setUpListeners(data) {
      if (!this.eventListeners) {
        return;
      }
      for (const key in this.eventListeners) {
        const revertBindings = this.eventListeners[key].map((schemaItem) => {
          const [domEvtName, domSelector] = key.split("@");
          return schemaItem.activateDomEventListener(domEvtName, domSelector, data);
        });
        if (data.revertData) {
          data.revertData.bindings.push(revertBindings);
        }
      }
    }
    _bindToObservable({schema: schema3, updater, data}) {
      const revertData = data.revertData;
      syncValueSchemaValue(schema3, updater, data);
      const revertBindings = schema3.filter((item) => !isFalsy(item)).filter((item) => item.observable).map((templateBinding) => templateBinding.activateAttributeListener(schema3, updater, data));
      if (revertData) {
        revertData.bindings.push(revertBindings);
      }
    }
    _revertTemplateFromNode(node12, revertData) {
      for (const binding of revertData.bindings) {
        for (const revertBinding of binding) {
          revertBinding();
        }
      }
      if (revertData.text) {
        node12.textContent = revertData.text;
        return;
      }
      for (const attrName in revertData.attributes) {
        const attrValue = revertData.attributes[attrName];
        if (attrValue === null) {
          node12.removeAttribute(attrName);
        } else {
          node12.setAttribute(attrName, attrValue);
        }
      }
      for (let i = 0; i < revertData.children.length; ++i) {
        this._revertTemplateFromNode(node12.childNodes[i], revertData.children[i]);
      }
    }
  };
  var template_default = Template;
  mix(Template, emittermixin_default);
  var TemplateBinding = class {
    constructor(def) {
      Object.assign(this, def);
    }
    getValue(node12) {
      const value = this.observable[this.attribute];
      return this.callback ? this.callback(value, node12) : value;
    }
    activateAttributeListener(schema3, updater, data) {
      const callback = () => syncValueSchemaValue(schema3, updater, data);
      this.emitter.listenTo(this.observable, "change:" + this.attribute, callback);
      return () => {
        this.emitter.stopListening(this.observable, "change:" + this.attribute, callback);
      };
    }
  };
  var TemplateToBinding = class extends TemplateBinding {
    activateDomEventListener(domEvtName, domSelector, data) {
      const callback = (evt, domEvt) => {
        if (!domSelector || domEvt.target.matches(domSelector)) {
          if (typeof this.eventNameOrFunction == "function") {
            this.eventNameOrFunction(domEvt);
          } else {
            this.observable.fire(this.eventNameOrFunction, domEvt);
          }
        }
      };
      this.emitter.listenTo(data.node, domEvtName, callback);
      return () => {
        this.emitter.stopListening(data.node, domEvtName, callback);
      };
    }
  };
  var TemplateIfBinding = class extends TemplateBinding {
    getValue(node12) {
      const value = super.getValue(node12);
      return isFalsy(value) ? false : this.valueIfTrue || true;
    }
  };
  function hasTemplateBinding(schema3) {
    if (!schema3) {
      return false;
    }
    if (schema3.value) {
      schema3 = schema3.value;
    }
    if (Array.isArray(schema3)) {
      return schema3.some(hasTemplateBinding);
    } else if (schema3 instanceof TemplateBinding) {
      return true;
    }
    return false;
  }
  function getValueSchemaValue(schema3, node12) {
    return schema3.map((schemaItem) => {
      if (schemaItem instanceof TemplateBinding) {
        return schemaItem.getValue(node12);
      }
      return schemaItem;
    });
  }
  function syncValueSchemaValue(schema3, updater, {node: node12}) {
    let value = getValueSchemaValue(schema3, node12);
    if (schema3.length == 1 && schema3[0] instanceof TemplateIfBinding) {
      value = value[0];
    } else {
      value = value.reduce(arrayValueReducer, "");
    }
    if (isFalsy(value)) {
      updater.remove();
    } else {
      updater.set(value);
    }
  }
  function getTextUpdater(node12) {
    return {
      set(value) {
        node12.textContent = value;
      },
      remove() {
        node12.textContent = "";
      }
    };
  }
  function getAttributeUpdater(el, attrName, ns) {
    return {
      set(value) {
        el.setAttributeNS(ns, attrName, value);
      },
      remove() {
        el.removeAttributeNS(ns, attrName);
      }
    };
  }
  function getStyleUpdater(el, styleName) {
    return {
      set(value) {
        el.style[styleName] = value;
      },
      remove() {
        el.style[styleName] = null;
      }
    };
  }
  function clone2(def) {
    const clone3 = cloneDeepWith_default(def, (value) => {
      if (value && (value instanceof TemplateBinding || isTemplate(value) || isView(value) || isViewCollection(value))) {
        return value;
      }
    });
    return clone3;
  }
  function normalize5(def) {
    if (typeof def == "string") {
      def = normalizePlainTextDefinition(def);
    } else if (def.text) {
      normalizeTextDefinition(def);
    }
    if (def.on) {
      def.eventListeners = normalizeListeners(def.on);
      delete def.on;
    }
    if (!def.text) {
      if (def.attributes) {
        normalizeAttributes(def.attributes);
      }
      const children = [];
      if (def.children) {
        if (isViewCollection(def.children)) {
          children.push(def.children);
        } else {
          for (const child of def.children) {
            if (isTemplate(child) || isView(child) || isNode(child)) {
              children.push(child);
            } else {
              children.push(new Template(child));
            }
          }
        }
      }
      def.children = children;
    }
    return def;
  }
  function normalizeAttributes(attributes) {
    for (const a in attributes) {
      if (attributes[a].value) {
        attributes[a].value = toArray(attributes[a].value);
      }
      arrayify(attributes, a);
    }
  }
  function normalizeListeners(listeners) {
    for (const l in listeners) {
      arrayify(listeners, l);
    }
    return listeners;
  }
  function normalizePlainTextDefinition(def) {
    return {
      text: [def]
    };
  }
  function normalizeTextDefinition(def) {
    def.text = toArray(def.text);
  }
  function arrayify(obj, key) {
    obj[key] = toArray(obj[key]);
  }
  function arrayValueReducer(prev, cur) {
    if (isFalsy(cur)) {
      return prev;
    } else if (isFalsy(prev)) {
      return cur;
    } else {
      return `${prev} ${cur}`;
    }
  }
  function extendObjectValueArray(obj, ext) {
    for (const a in ext) {
      if (obj[a]) {
        obj[a].push(...ext[a]);
      } else {
        obj[a] = ext[a];
      }
    }
  }
  function extendTemplate(template4, def) {
    if (def.attributes) {
      if (!template4.attributes) {
        template4.attributes = {};
      }
      extendObjectValueArray(template4.attributes, def.attributes);
    }
    if (def.eventListeners) {
      if (!template4.eventListeners) {
        template4.eventListeners = {};
      }
      extendObjectValueArray(template4.eventListeners, def.eventListeners);
    }
    if (def.text) {
      template4.text.push(...def.text);
    }
    if (def.children && def.children.length) {
      if (template4.children.length != def.children.length) {
        throw new ckeditorerror_default("ui-template-extend-children-mismatch", template4);
      }
      let childIndex = 0;
      for (const childDef of def.children) {
        extendTemplate(template4.children[childIndex++], childDef);
      }
    }
  }
  function isFalsy(value) {
    return !value && value !== 0;
  }
  function isView(item) {
    return item instanceof view_default2;
  }
  function isTemplate(item) {
    return item instanceof Template;
  }
  function isViewCollection(item) {
    return item instanceof viewcollection_default;
  }
  function getEmptyRevertData() {
    return {
      children: [],
      bindings: [],
      attributes: {}
    };
  }
  function shouldExtend(attrName) {
    return attrName == "class" || attrName == "style";
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/view.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var View2 = class {
    constructor(locale2) {
      this.element = null;
      this.isRendered = false;
      this.locale = locale2;
      this.t = locale2 && locale2.t;
      this._viewCollections = new collection_default();
      this._unboundChildren = this.createCollection();
      this._viewCollections.on("add", (evt, collection8) => {
        collection8.locale = locale2;
      });
      this.decorate("render");
    }
    get bindTemplate() {
      if (this._bindTemplate) {
        return this._bindTemplate;
      }
      return this._bindTemplate = template_default.bind(this, this);
    }
    createCollection(views) {
      const collection8 = new viewcollection_default(views);
      this._viewCollections.add(collection8);
      return collection8;
    }
    registerChild(children) {
      if (!isIterable(children)) {
        children = [children];
      }
      for (const child of children) {
        this._unboundChildren.add(child);
      }
    }
    deregisterChild(children) {
      if (!isIterable(children)) {
        children = [children];
      }
      for (const child of children) {
        this._unboundChildren.remove(child);
      }
    }
    setTemplate(definition) {
      this.template = new template_default(definition);
    }
    extendTemplate(definition) {
      template_default.extend(this.template, definition);
    }
    render() {
      if (this.isRendered) {
        throw new ckeditorerror_default("ui-view-render-already-rendered", this);
      }
      if (this.template) {
        this.element = this.template.render();
        this.registerChild(this.template.getViews());
      }
      this.isRendered = true;
    }
    destroy() {
      this.stopListening();
      this._viewCollections.map((c) => c.destroy());
      if (this.template && this.template._revertData) {
        this.template.revert(this.element);
      }
    }
  };
  var view_default2 = View2;
  mix(View2, emittermixin_default2);
  mix(View2, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/createelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function createElement(doc, name, attributes = {}, children = []) {
    const namespace = attributes && attributes.xmlns;
    const element18 = namespace ? doc.createElementNS(namespace, name) : doc.createElement(name);
    for (const key in attributes) {
      element18.setAttribute(key, attributes[key]);
    }
    if (isString_default(children) || !isIterable(children)) {
      children = [children];
    }
    for (let child of children) {
      if (isString_default(child)) {
        child = doc.createTextNode(child);
      }
      element18.appendChild(child);
    }
    return element18;
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/editorui/bodycollection.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var BodyCollection = class extends viewcollection_default {
    constructor(locale2, initialItems = []) {
      super(initialItems);
      this.locale = locale2;
    }
    attachToDom() {
      this._bodyCollectionContainer = new template_default({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-reset_all",
            "ck-body",
            "ck-rounded-corners"
          ],
          dir: this.locale.uiLanguageDirection
        },
        children: this
      }).render();
      let wrapper = document.querySelector(".ck-body-wrapper");
      if (!wrapper) {
        wrapper = createElement(document, "div", {class: "ck-body-wrapper"});
        document.body.appendChild(wrapper);
      }
      wrapper.appendChild(this._bodyCollectionContainer);
    }
    detachFromDom() {
      super.destroy();
      if (this._bodyCollectionContainer) {
        this._bodyCollectionContainer.remove();
      }
      const wrapper = document.querySelector(".ck-body-wrapper");
      if (wrapper && wrapper.childElementCount == 0) {
        wrapper.remove();
      }
    }
  };
  var bodycollection_default = BodyCollection;

  // node_modules/@ckeditor/ckeditor5-ui/src/editorui/editoruiview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EditorUIView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      this.body = new bodycollection_default(locale2);
    }
    render() {
      super.render();
      this.body.attachToDom();
    }
    destroy() {
      this.body.detachFromDom();
      return super.destroy();
    }
  };
  var editoruiview_default = EditorUIView;

  // node_modules/@ckeditor/ckeditor5-ui/src/label/labelview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var LabelView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      this.set("text");
      this.set("for");
      this.id = `ck-editor__label_${uid()}`;
      const bind = this.bindTemplate;
      this.setTemplate({
        tag: "label",
        attributes: {
          class: [
            "ck",
            "ck-label"
          ],
          id: this.id,
          for: bind.to("for")
        },
        children: [
          {
            text: bind.to("text")
          }
        ]
      });
    }
  };
  var labelview_default = LabelView;

  // node_modules/@ckeditor/ckeditor5-ui/src/editorui/boxed/boxededitoruiview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var BoxedEditorUIView = class extends editoruiview_default {
    constructor(locale2) {
      super(locale2);
      this.top = this.createCollection();
      this.main = this.createCollection();
      this._voiceLabelView = this._createVoiceLabel();
      this.setTemplate({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-reset",
            "ck-editor",
            "ck-rounded-corners"
          ],
          role: "application",
          dir: locale2.uiLanguageDirection,
          lang: locale2.uiLanguage,
          "aria-labelledby": this._voiceLabelView.id
        },
        children: [
          this._voiceLabelView,
          {
            tag: "div",
            attributes: {
              class: [
                "ck",
                "ck-editor__top",
                "ck-reset_all"
              ],
              role: "presentation"
            },
            children: this.top
          },
          {
            tag: "div",
            attributes: {
              class: [
                "ck",
                "ck-editor__main"
              ],
              role: "presentation"
            },
            children: this.main
          }
        ]
      });
    }
    _createVoiceLabel() {
      const t = this.t;
      const voiceLabel = new labelview_default();
      voiceLabel.text = t("Rich Text Editor");
      voiceLabel.extendTemplate({
        attributes: {
          class: "ck-voice-label"
        }
      });
      return voiceLabel;
    }
  };
  var boxededitoruiview_default = BoxedEditorUIView;

  // node_modules/@ckeditor/ckeditor5-ui/src/editableui/editableuiview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var EditableUIView = class extends view_default2 {
    constructor(locale2, editingView, editableElement) {
      super(locale2);
      this.setTemplate({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-content",
            "ck-editor__editable",
            "ck-rounded-corners"
          ],
          lang: locale2.contentLanguage,
          dir: locale2.contentLanguageDirection
        }
      });
      this.name = null;
      this.set("isFocused", false);
      this._editableElement = editableElement;
      this._hasExternalElement = !!this._editableElement;
      this._editingView = editingView;
    }
    render() {
      super.render();
      if (this._hasExternalElement) {
        this.template.apply(this.element = this._editableElement);
      } else {
        this._editableElement = this.element;
      }
      this.on("change:isFocused", () => this._updateIsFocusedClasses());
      this._updateIsFocusedClasses();
    }
    destroy() {
      if (this._hasExternalElement) {
        this.template.revert(this._editableElement);
      }
      super.destroy();
    }
    _updateIsFocusedClasses() {
      const editingView = this._editingView;
      if (editingView.isRenderingInProgress) {
        updateAfterRender(this);
      } else {
        update(this);
      }
      function update(view19) {
        editingView.change((writer2) => {
          const viewRoot = editingView.document.getRoot(view19.name);
          writer2.addClass(view19.isFocused ? "ck-focused" : "ck-blurred", viewRoot);
          writer2.removeClass(view19.isFocused ? "ck-blurred" : "ck-focused", viewRoot);
        });
      }
      function updateAfterRender(view19) {
        editingView.once("change:isRenderingInProgress", (evt, name, value) => {
          if (!value) {
            update(view19);
          } else {
            updateAfterRender(view19);
          }
        });
      }
    }
  };
  var editableuiview_default = EditableUIView;

  // node_modules/@ckeditor/ckeditor5-ui/src/editableui/inline/inlineeditableuiview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var InlineEditableUIView = class extends editableuiview_default {
    constructor(locale2, editingView, editableElement) {
      super(locale2, editingView, editableElement);
      this.extendTemplate({
        attributes: {
          role: "textbox",
          class: "ck-editor__editable_inline"
        }
      });
    }
    render() {
      super.render();
      const editingView = this._editingView;
      const t = this.t;
      editingView.change((writer2) => {
        const viewRoot = editingView.document.getRoot(this.name);
        writer2.setAttribute("aria-label", t("Rich Text Editor, %0", this.name), viewRoot);
      });
    }
  };
  var inlineeditableuiview_default = InlineEditableUIView;

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/tounit.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function toUnit(unit) {
    return (value) => value + unit;
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/panel/sticky/stickypanelview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var toPx = toUnit("px");
  var StickyPanelView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      const bind = this.bindTemplate;
      this.set("isActive", false);
      this.set("isSticky", false);
      this.set("limiterElement", null);
      this.set("limiterBottomOffset", 50);
      this.set("viewportTopOffset", 0);
      this.set("_marginLeft", null);
      this.set("_isStickyToTheLimiter", false);
      this.set("_hasViewportTopOffset", false);
      this.content = this.createCollection();
      this._contentPanelPlaceholder = new template_default({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-sticky-panel__placeholder"
          ],
          style: {
            display: bind.to("isSticky", (isSticky) => isSticky ? "block" : "none"),
            height: bind.to("isSticky", (isSticky) => {
              return isSticky ? toPx(this._panelRect.height) : null;
            })
          }
        }
      }).render();
      this._contentPanel = new template_default({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-sticky-panel__content",
            bind.if("isSticky", "ck-sticky-panel__content_sticky"),
            bind.if("_isStickyToTheLimiter", "ck-sticky-panel__content_sticky_bottom-limit")
          ],
          style: {
            width: bind.to("isSticky", (isSticky) => {
              return isSticky ? toPx(this._contentPanelPlaceholder.getBoundingClientRect().width) : null;
            }),
            top: bind.to("_hasViewportTopOffset", (_hasViewportTopOffset) => {
              return _hasViewportTopOffset ? toPx(this.viewportTopOffset) : null;
            }),
            bottom: bind.to("_isStickyToTheLimiter", (_isStickyToTheLimiter) => {
              return _isStickyToTheLimiter ? toPx(this.limiterBottomOffset) : null;
            }),
            marginLeft: bind.to("_marginLeft")
          }
        },
        children: this.content
      }).render();
      this.setTemplate({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-sticky-panel"
          ]
        },
        children: [
          this._contentPanelPlaceholder,
          this._contentPanel
        ]
      });
    }
    render() {
      super.render();
      this._checkIfShouldBeSticky();
      this.listenTo(global_default.window, "scroll", () => {
        this._checkIfShouldBeSticky();
      });
      this.listenTo(this, "change:isActive", () => {
        this._checkIfShouldBeSticky();
      });
    }
    _checkIfShouldBeSticky() {
      const panelRect = this._panelRect = this._contentPanel.getBoundingClientRect();
      let limiterRect;
      if (!this.limiterElement) {
        this.isSticky = false;
      } else {
        limiterRect = this._limiterRect = this.limiterElement.getBoundingClientRect();
        this.isSticky = this.isActive && limiterRect.top < this.viewportTopOffset && this._panelRect.height + this.limiterBottomOffset < limiterRect.height;
      }
      if (this.isSticky) {
        this._isStickyToTheLimiter = limiterRect.bottom < panelRect.height + this.limiterBottomOffset + this.viewportTopOffset;
        this._hasViewportTopOffset = !this._isStickyToTheLimiter && !!this.viewportTopOffset;
        this._marginLeft = this._isStickyToTheLimiter ? null : toPx(-global_default.window.scrollX);
      } else {
        this._isStickyToTheLimiter = false;
        this._hasViewportTopOffset = false;
        this._marginLeft = null;
      }
    }
  };
  var stickypanelview_default = StickyPanelView;

  // node_modules/@ckeditor/ckeditor5-ui/src/focuscycler.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var FocusCycler = class {
    constructor(options) {
      Object.assign(this, options);
      if (options.actions && options.keystrokeHandler) {
        for (const methodName in options.actions) {
          let actions = options.actions[methodName];
          if (typeof actions == "string") {
            actions = [actions];
          }
          for (const keystroke of actions) {
            options.keystrokeHandler.set(keystroke, (data, cancel) => {
              this[methodName]();
              cancel();
            });
          }
        }
      }
    }
    get first() {
      return this.focusables.find(isFocusable) || null;
    }
    get last() {
      return this.focusables.filter(isFocusable).slice(-1)[0] || null;
    }
    get next() {
      return this._getFocusableItem(1);
    }
    get previous() {
      return this._getFocusableItem(-1);
    }
    get current() {
      let index = null;
      if (this.focusTracker.focusedElement === null) {
        return null;
      }
      this.focusables.find((view19, viewIndex) => {
        const focused = view19.element === this.focusTracker.focusedElement;
        if (focused) {
          index = viewIndex;
        }
        return focused;
      });
      return index;
    }
    focusFirst() {
      this._focus(this.first);
    }
    focusLast() {
      this._focus(this.last);
    }
    focusNext() {
      this._focus(this.next);
    }
    focusPrevious() {
      this._focus(this.previous);
    }
    _focus(view19) {
      if (view19) {
        view19.focus();
      }
    }
    _getFocusableItem(step) {
      const current = this.current;
      const collectionLength = this.focusables.length;
      if (!collectionLength) {
        return null;
      }
      if (current === null) {
        return this[step === 1 ? "first" : "last"];
      }
      let index = (current + collectionLength + step) % collectionLength;
      do {
        const view19 = this.focusables.get(index);
        if (isFocusable(view19)) {
          return view19;
        }
        index = (index + collectionLength + step) % collectionLength;
      } while (index !== current);
      return null;
    }
  };
  var focuscycler_default = FocusCycler;
  function isFocusable(view19) {
    return !!(view19.focus && global_default.window.getComputedStyle(view19.element).display != "none");
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/toolbar/toolbarseparatorview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ToolbarSeparatorView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      this.setTemplate({
        tag: "span",
        attributes: {
          class: [
            "ck",
            "ck-toolbar__separator"
          ]
        }
      });
    }
  };
  var toolbarseparatorview_default = ToolbarSeparatorView;

  // node_modules/@ckeditor/ckeditor5-ui/src/toolbar/toolbarlinebreakview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ToolbarLineBreakView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      this.setTemplate({
        tag: "span",
        attributes: {
          class: [
            "ck",
            "ck-toolbar__line-break"
          ]
        }
      });
    }
  };
  var toolbarlinebreakview_default = ToolbarLineBreakView;

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/resizeobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var RESIZE_CHECK_INTERVAL = 100;
  var ResizeObserver = class {
    constructor(element18, callback) {
      if (!ResizeObserver._observerInstance) {
        ResizeObserver._createObserver();
      }
      this._element = element18;
      this._callback = callback;
      ResizeObserver._addElementCallback(element18, callback);
      ResizeObserver._observerInstance.observe(element18);
    }
    destroy() {
      ResizeObserver._deleteElementCallback(this._element, this._callback);
    }
    static _addElementCallback(element18, callback) {
      if (!ResizeObserver._elementCallbacks) {
        ResizeObserver._elementCallbacks = new Map();
      }
      let callbacks = ResizeObserver._elementCallbacks.get(element18);
      if (!callbacks) {
        callbacks = new Set();
        ResizeObserver._elementCallbacks.set(element18, callbacks);
      }
      callbacks.add(callback);
    }
    static _deleteElementCallback(element18, callback) {
      const callbacks = ResizeObserver._getElementCallbacks(element18);
      if (callbacks) {
        callbacks.delete(callback);
        if (!callbacks.size) {
          ResizeObserver._elementCallbacks.delete(element18);
          ResizeObserver._observerInstance.unobserve(element18);
        }
      }
      if (ResizeObserver._elementCallbacks && !ResizeObserver._elementCallbacks.size) {
        ResizeObserver._observerInstance = null;
        ResizeObserver._elementCallbacks = null;
      }
    }
    static _getElementCallbacks(element18) {
      if (!ResizeObserver._elementCallbacks) {
        return null;
      }
      return ResizeObserver._elementCallbacks.get(element18);
    }
    static _createObserver() {
      let ObserverConstructor;
      if (typeof global_default.window.ResizeObserver === "function") {
        ObserverConstructor = global_default.window.ResizeObserver;
      } else {
        ObserverConstructor = ResizeObserverPolyfill;
      }
      ResizeObserver._observerInstance = new ObserverConstructor((entries) => {
        for (const entry of entries) {
          const callbacks = ResizeObserver._getElementCallbacks(entry.target);
          if (callbacks) {
            for (const callback of callbacks) {
              callback(entry);
            }
          }
        }
      });
    }
  };
  var resizeobserver_default = ResizeObserver;
  ResizeObserver._observerInstance = null;
  ResizeObserver._elementCallbacks = null;
  var ResizeObserverPolyfill = class {
    constructor(callback) {
      this._callback = callback;
      this._elements = new Set();
      this._previousRects = new Map();
      this._periodicCheckTimeout = null;
    }
    observe(element18) {
      this._elements.add(element18);
      this._checkElementRectsAndExecuteCallback();
      if (this._elements.size === 1) {
        this._startPeriodicCheck();
      }
    }
    unobserve(element18) {
      this._elements.delete(element18);
      this._previousRects.delete(element18);
      if (!this._elements.size) {
        this._stopPeriodicCheck();
      }
    }
    _startPeriodicCheck() {
      const periodicCheck = () => {
        this._checkElementRectsAndExecuteCallback();
        this._periodicCheckTimeout = setTimeout(periodicCheck, RESIZE_CHECK_INTERVAL);
      };
      this.listenTo(global_default.window, "resize", () => {
        this._checkElementRectsAndExecuteCallback();
      });
      this._periodicCheckTimeout = setTimeout(periodicCheck, RESIZE_CHECK_INTERVAL);
    }
    _stopPeriodicCheck() {
      clearTimeout(this._periodicCheckTimeout);
      this.stopListening();
      this._previousRects.clear();
    }
    _checkElementRectsAndExecuteCallback() {
      const entries = [];
      for (const element18 of this._elements) {
        if (this._hasRectChanged(element18)) {
          entries.push({
            target: element18,
            contentRect: this._previousRects.get(element18)
          });
        }
      }
      if (entries.length) {
        this._callback(entries);
      }
    }
    _hasRectChanged(element18) {
      if (!element18.ownerDocument.body.contains(element18)) {
        return false;
      }
      const currentRect = new rect_default(element18);
      const previousRect = this._previousRects.get(element18);
      const hasChanged = !previousRect || !previousRect.isEqual(currentRect);
      this._previousRects.set(element18, currentRect);
      return hasChanged;
    }
  };
  mix(ResizeObserverPolyfill, emittermixin_default2);

  // node_modules/@ckeditor/ckeditor5-ui/src/bindings/preventdefault.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function preventDefault(view19) {
    return view19.bindTemplate.to((evt) => {
      if (evt.target === view19.element) {
        evt.preventDefault();
      }
    });
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/dropdown/dropdownpanelview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DropdownPanelView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      const bind = this.bindTemplate;
      this.set("isVisible", false);
      this.set("position", "se");
      this.children = this.createCollection();
      this.setTemplate({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-reset",
            "ck-dropdown__panel",
            bind.to("position", (value) => `ck-dropdown__panel_${value}`),
            bind.if("isVisible", "ck-dropdown__panel-visible")
          ]
        },
        children: this.children,
        on: {
          selectstart: bind.to((evt) => evt.preventDefault())
        }
      });
    }
    focus() {
      if (this.children.length) {
        this.children.first.focus();
      }
    }
    focusLast() {
      if (this.children.length) {
        const lastChild = this.children.last;
        if (typeof lastChild.focusLast === "function") {
          lastChild.focusLast();
        } else {
          lastChild.focus();
        }
      }
    }
  };
  var dropdownpanelview_default = DropdownPanelView;

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/getpositionedancestor.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function getPositionedAncestor(element18) {
    if (!element18 || !element18.parentNode) {
      return null;
    }
    if (element18.offsetParent === global_default.document.body) {
      return null;
    }
    return element18.offsetParent;
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/position.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function getOptimalPosition({element: element18, target, positions, limiter, fitInViewport}) {
    if (isFunction_default(target)) {
      target = target();
    }
    if (isFunction_default(limiter)) {
      limiter = limiter();
    }
    const positionedElementAncestor = getPositionedAncestor(element18);
    const elementRect = new rect_default(element18);
    const targetRect = new rect_default(target);
    let bestPositionRect;
    let bestPositionName;
    if (!limiter && !fitInViewport) {
      [bestPositionName, bestPositionRect] = getPositionNameAndRect(positions[0], targetRect, elementRect);
    } else {
      const limiterRect = limiter && new rect_default(limiter).getVisible();
      const viewportRect = fitInViewport && new rect_default(global_default.window);
      const bestPosition = getBestPositionNameAndRect(positions, {targetRect, elementRect, limiterRect, viewportRect});
      [bestPositionName, bestPositionRect] = bestPosition || getPositionNameAndRect(positions[0], targetRect, elementRect);
    }
    let absoluteRectCoordinates = getAbsoluteRectCoordinates(bestPositionRect);
    if (positionedElementAncestor) {
      absoluteRectCoordinates = shiftRectCoordinatesDueToPositionedAncestor(absoluteRectCoordinates, positionedElementAncestor);
    }
    return {
      left: absoluteRectCoordinates.left,
      top: absoluteRectCoordinates.top,
      name: bestPositionName
    };
  }
  function getPositionNameAndRect(position30, targetRect, elementRect) {
    const positionData = position30(targetRect, elementRect);
    if (!positionData) {
      return null;
    }
    const {left, top, name} = positionData;
    return [name, elementRect.clone().moveTo(left, top)];
  }
  function getBestPositionNameAndRect(positions, options) {
    const {elementRect, viewportRect} = options;
    const elementRectArea = elementRect.getArea();
    const processedPositions = processPositionsToAreas(positions, options);
    if (viewportRect) {
      const processedPositionsInViewport = processedPositions.filter(({viewportIntersectArea}) => {
        return viewportIntersectArea === elementRectArea;
      });
      const bestPositionData = getBestOfProcessedPositions(processedPositionsInViewport, elementRectArea);
      if (bestPositionData) {
        return bestPositionData;
      }
    }
    return getBestOfProcessedPositions(processedPositions, elementRectArea);
  }
  function processPositionsToAreas(positions, {targetRect, elementRect, limiterRect, viewportRect}) {
    const processedPositions = [];
    const elementRectArea = elementRect.getArea();
    for (const position30 of positions) {
      const positionData = getPositionNameAndRect(position30, targetRect, elementRect);
      if (!positionData) {
        continue;
      }
      const [positionName, positionRect] = positionData;
      let limiterIntersectArea = 0;
      let viewportIntersectArea = 0;
      if (limiterRect) {
        if (viewportRect) {
          const limiterViewportIntersectRect = limiterRect.getIntersection(viewportRect);
          if (limiterViewportIntersectRect) {
            limiterIntersectArea = limiterViewportIntersectRect.getIntersectionArea(positionRect);
          }
        } else {
          limiterIntersectArea = limiterRect.getIntersectionArea(positionRect);
        }
      }
      if (viewportRect) {
        viewportIntersectArea = viewportRect.getIntersectionArea(positionRect);
      }
      const processedPosition = {
        positionName,
        positionRect,
        limiterIntersectArea,
        viewportIntersectArea
      };
      if (limiterIntersectArea === elementRectArea) {
        return [processedPosition];
      }
      processedPositions.push(processedPosition);
    }
    return processedPositions;
  }
  function getBestOfProcessedPositions(processedPositions, elementRectArea) {
    let maxFitFactor = 0;
    let bestPositionRect;
    let bestPositionName;
    for (const {positionName, positionRect, limiterIntersectArea, viewportIntersectArea} of processedPositions) {
      if (limiterIntersectArea === elementRectArea) {
        return [positionName, positionRect];
      }
      const fitFactor = viewportIntersectArea ** 2 + limiterIntersectArea ** 2;
      if (fitFactor > maxFitFactor) {
        maxFitFactor = fitFactor;
        bestPositionRect = positionRect;
        bestPositionName = positionName;
      }
    }
    return bestPositionRect ? [bestPositionName, bestPositionRect] : null;
  }
  function shiftRectCoordinatesDueToPositionedAncestor({left, top}, positionedElementAncestor) {
    const ancestorPosition = getAbsoluteRectCoordinates(new rect_default(positionedElementAncestor));
    const ancestorBorderWidths = getBorderWidths(positionedElementAncestor);
    left -= ancestorPosition.left;
    top -= ancestorPosition.top;
    left += positionedElementAncestor.scrollLeft;
    top += positionedElementAncestor.scrollTop;
    left -= ancestorBorderWidths.left;
    top -= ancestorBorderWidths.top;
    return {left, top};
  }
  function getAbsoluteRectCoordinates({left, top}) {
    const {scrollX, scrollY} = global_default.window;
    return {
      left: left + scrollX,
      top: top + scrollY
    };
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/dropdown/dropdownview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DropdownView = class extends view_default2 {
    constructor(locale2, buttonView, panelView) {
      super(locale2);
      const bind = this.bindTemplate;
      this.buttonView = buttonView;
      this.panelView = panelView;
      this.set("isOpen", false);
      this.set("isEnabled", true);
      this.set("class");
      this.set("id");
      this.set("panelPosition", "auto");
      this.keystrokes = new keystrokehandler_default();
      this.setTemplate({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-dropdown",
            bind.to("class"),
            bind.if("isEnabled", "ck-disabled", (value) => !value)
          ],
          id: bind.to("id"),
          "aria-describedby": bind.to("ariaDescribedById")
        },
        children: [
          buttonView,
          panelView
        ]
      });
      buttonView.extendTemplate({
        attributes: {
          class: [
            "ck-dropdown__button"
          ]
        }
      });
    }
    render() {
      super.render();
      this.listenTo(this.buttonView, "open", () => {
        this.isOpen = !this.isOpen;
      });
      this.panelView.bind("isVisible").to(this, "isOpen");
      this.on("change:isOpen", () => {
        if (!this.isOpen) {
          return;
        }
        if (this.panelPosition === "auto") {
          this.panelView.position = DropdownView._getOptimalPosition({
            element: this.panelView.element,
            target: this.buttonView.element,
            fitInViewport: true,
            positions: this._panelPositions
          }).name;
        } else {
          this.panelView.position = this.panelPosition;
        }
      });
      this.keystrokes.listenTo(this.element);
      const closeDropdown = (data, cancel) => {
        if (this.isOpen) {
          this.buttonView.focus();
          this.isOpen = false;
          cancel();
        }
      };
      this.keystrokes.set("arrowdown", (data, cancel) => {
        if (this.buttonView.isEnabled && !this.isOpen) {
          this.isOpen = true;
          cancel();
        }
      });
      this.keystrokes.set("arrowright", (data, cancel) => {
        if (this.isOpen) {
          cancel();
        }
      });
      this.keystrokes.set("arrowleft", closeDropdown);
      this.keystrokes.set("esc", closeDropdown);
    }
    focus() {
      this.buttonView.focus();
    }
    get _panelPositions() {
      const {southEast, southWest, northEast, northWest} = DropdownView.defaultPanelPositions;
      if (this.locale.uiLanguageDirection === "ltr") {
        return [southEast, southWest, northEast, northWest];
      } else {
        return [southWest, southEast, northWest, northEast];
      }
    }
  };
  var dropdownview_default = DropdownView;
  DropdownView.defaultPanelPositions = {
    southEast: (buttonRect) => {
      return {
        top: buttonRect.bottom,
        left: buttonRect.left,
        name: "se"
      };
    },
    southWest: (buttonRect, panelRect) => {
      return {
        top: buttonRect.bottom,
        left: buttonRect.left - panelRect.width + buttonRect.width,
        name: "sw"
      };
    },
    northEast: (buttonRect, panelRect) => {
      return {
        top: buttonRect.top - panelRect.height,
        left: buttonRect.left,
        name: "ne"
      };
    },
    northWest: (buttonRect, panelRect) => {
      return {
        top: buttonRect.bottom - panelRect.height,
        left: buttonRect.left - panelRect.width + buttonRect.width,
        name: "nw"
      };
    }
  };
  DropdownView._getOptimalPosition = getOptimalPosition;

  // node_modules/@ckeditor/ckeditor5-ui/src/icon/iconview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var IconView = class extends view_default2 {
    constructor() {
      super();
      const bind = this.bindTemplate;
      this.set("content", "");
      this.set("viewBox", "0 0 20 20");
      this.set("fillColor", "");
      this.setTemplate({
        tag: "svg",
        ns: "http://www.w3.org/2000/svg",
        attributes: {
          class: [
            "ck",
            "ck-icon"
          ],
          viewBox: bind.to("viewBox")
        }
      });
    }
    render() {
      super.render();
      this._updateXMLContent();
      this._colorFillPaths();
      this.on("change:content", () => {
        this._updateXMLContent();
        this._colorFillPaths();
      });
      this.on("change:fillColor", () => {
        this._colorFillPaths();
      });
    }
    _updateXMLContent() {
      if (this.content) {
        const parsed = new DOMParser().parseFromString(this.content.trim(), "image/svg+xml");
        const svg = parsed.querySelector("svg");
        const viewBox = svg.getAttribute("viewBox");
        if (viewBox) {
          this.viewBox = viewBox;
        }
        this.element.innerHTML = "";
        while (svg.childNodes.length > 0) {
          this.element.appendChild(svg.childNodes[0]);
        }
      }
    }
    _colorFillPaths() {
      if (this.fillColor) {
        this.element.querySelectorAll(".ck-icon__fill").forEach((path) => {
          path.style.fill = this.fillColor;
        });
      }
    }
  };
  var iconview_default = IconView;

  // node_modules/@ckeditor/ckeditor5-ui/src/tooltip/tooltipview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var TooltipView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      this.set("text", "");
      this.set("position", "s");
      const bind = this.bindTemplate;
      this.setTemplate({
        tag: "span",
        attributes: {
          class: [
            "ck",
            "ck-tooltip",
            bind.to("position", (position30) => "ck-tooltip_" + position30),
            bind.if("text", "ck-hidden", (value) => !value.trim())
          ]
        },
        children: [
          {
            tag: "span",
            attributes: {
              class: [
                "ck",
                "ck-tooltip__text"
              ]
            },
            children: [
              {
                text: bind.to("text")
              }
            ]
          }
        ]
      });
    }
  };
  var tooltipview_default = TooltipView;

  // node_modules/@ckeditor/ckeditor5-ui/src/button/buttonview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ButtonView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      const bind = this.bindTemplate;
      const ariaLabelUid = uid();
      this.set("class");
      this.set("labelStyle");
      this.set("icon");
      this.set("isEnabled", true);
      this.set("isOn", false);
      this.set("isVisible", true);
      this.set("isToggleable", false);
      this.set("keystroke");
      this.set("label");
      this.set("tabindex", -1);
      this.set("tooltip");
      this.set("tooltipPosition", "s");
      this.set("type", "button");
      this.set("withText", false);
      this.set("withKeystroke", false);
      this.children = this.createCollection();
      this.tooltipView = this._createTooltipView();
      this.labelView = this._createLabelView(ariaLabelUid);
      this.iconView = new iconview_default();
      this.iconView.extendTemplate({
        attributes: {
          class: "ck-button__icon"
        }
      });
      this.keystrokeView = this._createKeystrokeView();
      this.bind("_tooltipString").to(this, "tooltip", this, "label", this, "keystroke", this._getTooltipString.bind(this));
      this.setTemplate({
        tag: "button",
        attributes: {
          class: [
            "ck",
            "ck-button",
            bind.to("class"),
            bind.if("isEnabled", "ck-disabled", (value) => !value),
            bind.if("isVisible", "ck-hidden", (value) => !value),
            bind.to("isOn", (value) => value ? "ck-on" : "ck-off"),
            bind.if("withText", "ck-button_with-text"),
            bind.if("withKeystroke", "ck-button_with-keystroke")
          ],
          type: bind.to("type", (value) => value ? value : "button"),
          tabindex: bind.to("tabindex"),
          "aria-labelledby": `ck-editor__aria-label_${ariaLabelUid}`,
          "aria-disabled": bind.if("isEnabled", true, (value) => !value),
          "aria-pressed": bind.to("isOn", (value) => this.isToggleable ? String(value) : false)
        },
        children: this.children,
        on: {
          mousedown: bind.to((evt) => {
            evt.preventDefault();
          }),
          click: bind.to((evt) => {
            if (this.isEnabled) {
              this.fire("execute");
            } else {
              evt.preventDefault();
            }
          })
        }
      });
    }
    render() {
      super.render();
      if (this.icon) {
        this.iconView.bind("content").to(this, "icon");
        this.children.add(this.iconView);
      }
      this.children.add(this.tooltipView);
      this.children.add(this.labelView);
      if (this.withKeystroke) {
        this.children.add(this.keystrokeView);
      }
    }
    focus() {
      this.element.focus();
    }
    _createTooltipView() {
      const tooltipView = new tooltipview_default();
      tooltipView.bind("text").to(this, "_tooltipString");
      tooltipView.bind("position").to(this, "tooltipPosition");
      return tooltipView;
    }
    _createLabelView(ariaLabelUid) {
      const labelView = new view_default2();
      const bind = this.bindTemplate;
      labelView.setTemplate({
        tag: "span",
        attributes: {
          class: [
            "ck",
            "ck-button__label"
          ],
          style: bind.to("labelStyle"),
          id: `ck-editor__aria-label_${ariaLabelUid}`
        },
        children: [
          {
            text: this.bindTemplate.to("label")
          }
        ]
      });
      return labelView;
    }
    _createKeystrokeView() {
      const keystrokeView = new view_default2();
      keystrokeView.setTemplate({
        tag: "span",
        attributes: {
          class: [
            "ck",
            "ck-button__keystroke"
          ]
        },
        children: [
          {
            text: this.bindTemplate.to("keystroke", (text16) => getEnvKeystrokeText(text16))
          }
        ]
      });
      return keystrokeView;
    }
    _getTooltipString(tooltip2, label2, keystroke) {
      if (tooltip2) {
        if (typeof tooltip2 == "string") {
          return tooltip2;
        } else {
          if (keystroke) {
            keystroke = getEnvKeystrokeText(keystroke);
          }
          if (tooltip2 instanceof Function) {
            return tooltip2(label2, keystroke);
          } else {
            return `${label2}${keystroke ? ` (${keystroke})` : ""}`;
          }
        }
      }
      return "";
    }
  };
  var buttonview_default = ButtonView;

  // node_modules/@ckeditor/ckeditor5-ui/theme/icons/dropdown-arrow.svg
  var dropdown_arrow_default = "dropdown-arrow.CZT72UCI.svg";

  // node_modules/@ckeditor/ckeditor5-ui/src/dropdown/button/dropdownbuttonview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var DropdownButtonView = class extends buttonview_default {
    constructor(locale2) {
      super(locale2);
      this.arrowView = this._createArrowView();
      this.extendTemplate({
        attributes: {
          "aria-haspopup": true
        }
      });
      this.delegate("execute").to(this, "open");
    }
    render() {
      super.render();
      this.children.add(this.arrowView);
    }
    _createArrowView() {
      const arrowView = new iconview_default();
      arrowView.content = dropdown_arrow_default;
      arrowView.extendTemplate({
        attributes: {
          class: "ck-dropdown__arrow"
        }
      });
      return arrowView;
    }
  };
  var dropdownbuttonview_default = DropdownButtonView;

  // node_modules/@ckeditor/ckeditor5-ui/src/list/listview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-ui/src/list/listitemview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-ui/src/list/listseparatorview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-ui/src/button/switchbuttonview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var SwitchButtonView = class extends buttonview_default {
    constructor(locale2) {
      super(locale2);
      this.isToggleable = true;
      this.toggleSwitchView = this._createToggleView();
      this.extendTemplate({
        attributes: {
          class: "ck-switchbutton"
        }
      });
    }
    render() {
      super.render();
      this.children.add(this.toggleSwitchView);
    }
    _createToggleView() {
      const toggleSwitchView = new view_default2();
      toggleSwitchView.setTemplate({
        tag: "span",
        attributes: {
          class: [
            "ck",
            "ck-button__toggle"
          ]
        },
        children: [
          {
            tag: "span",
            attributes: {
              class: [
                "ck",
                "ck-button__toggle__inner"
              ]
            }
          }
        ]
      });
      return toggleSwitchView;
    }
  };
  var switchbuttonview_default = SwitchButtonView;

  // node_modules/@ckeditor/ckeditor5-ui/src/bindings/clickoutsidehandler.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function clickOutsideHandler({emitter, activator, callback, contextElements}) {
    emitter.listenTo(document, "mousedown", (evt, domEvt) => {
      if (!activator()) {
        return;
      }
      const path = typeof domEvt.composedPath == "function" ? domEvt.composedPath() : [];
      for (const contextElement of contextElements) {
        if (contextElement.contains(domEvt.target) || path.includes(contextElement)) {
          return;
        }
      }
      callback();
    });
  }

  // node_modules/@ckeditor/ckeditor5-ui/src/dropdown/utils.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function createDropdown(locale2, ButtonClass = dropdownbuttonview_default) {
    const buttonView = new ButtonClass(locale2);
    const panelView = new dropdownpanelview_default(locale2);
    const dropdownView = new dropdownview_default(locale2, buttonView, panelView);
    buttonView.bind("isEnabled").to(dropdownView);
    if (buttonView instanceof dropdownbuttonview_default) {
      buttonView.bind("isOn").to(dropdownView, "isOpen");
    } else {
      buttonView.arrowView.bind("isOn").to(dropdownView, "isOpen");
    }
    addDefaultBehavior(dropdownView);
    return dropdownView;
  }
  function addToolbarToDropdown(dropdownView, buttons) {
    const locale2 = dropdownView.locale;
    const t = locale2.t;
    const toolbarView = dropdownView.toolbarView = new toolbarview_default(locale2);
    toolbarView.set("ariaLabel", t("Dropdown toolbar"));
    dropdownView.extendTemplate({
      attributes: {
        class: ["ck-toolbar-dropdown"]
      }
    });
    buttons.map((view19) => toolbarView.items.add(view19));
    dropdownView.panelView.children.add(toolbarView);
    toolbarView.items.delegate("execute").to(dropdownView);
  }
  function addDefaultBehavior(dropdownView) {
    closeDropdownOnBlur(dropdownView);
    closeDropdownOnExecute(dropdownView);
    focusDropdownContentsOnArrows(dropdownView);
  }
  function closeDropdownOnBlur(dropdownView) {
    dropdownView.on("render", () => {
      clickOutsideHandler({
        emitter: dropdownView,
        activator: () => dropdownView.isOpen,
        callback: () => {
          dropdownView.isOpen = false;
        },
        contextElements: [dropdownView.element]
      });
    });
  }
  function closeDropdownOnExecute(dropdownView) {
    dropdownView.on("execute", (evt) => {
      if (evt.source instanceof switchbuttonview_default) {
        return;
      }
      dropdownView.isOpen = false;
    });
  }
  function focusDropdownContentsOnArrows(dropdownView) {
    dropdownView.keystrokes.set("arrowdown", (data, cancel) => {
      if (dropdownView.isOpen) {
        dropdownView.panelView.focus();
        cancel();
      }
    });
    dropdownView.keystrokes.set("arrowup", (data, cancel) => {
      if (dropdownView.isOpen) {
        dropdownView.panelView.focusLast();
        cancel();
      }
    });
  }

  // node_modules/@ckeditor/ckeditor5-core/theme/icons/three-vertical-dots.svg
  var three_vertical_dots_default = "three-vertical-dots.UX3BSCJB.svg";

  // node_modules/@ckeditor/ckeditor5-ui/src/toolbar/toolbarview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ToolbarView = class extends view_default2 {
    constructor(locale2, options) {
      super(locale2);
      const bind = this.bindTemplate;
      const t = this.t;
      this.options = options || {};
      this.set("ariaLabel", t("Editor toolbar"));
      this.set("maxWidth", "auto");
      this.items = this.createCollection();
      this.focusTracker = new focustracker_default();
      this.keystrokes = new keystrokehandler_default();
      this.set("class");
      this.set("isCompact", false);
      this.itemsView = new ItemsView(locale2);
      this.children = this.createCollection();
      this.children.add(this.itemsView);
      this.focusables = this.createCollection();
      this._focusCycler = new focuscycler_default({
        focusables: this.focusables,
        focusTracker: this.focusTracker,
        keystrokeHandler: this.keystrokes,
        actions: {
          focusPrevious: ["arrowleft", "arrowup"],
          focusNext: ["arrowright", "arrowdown"]
        }
      });
      const classes = [
        "ck",
        "ck-toolbar",
        bind.to("class"),
        bind.if("isCompact", "ck-toolbar_compact")
      ];
      if (this.options.shouldGroupWhenFull && this.options.isFloating) {
        classes.push("ck-toolbar_floating");
      }
      this.setTemplate({
        tag: "div",
        attributes: {
          class: classes,
          role: "toolbar",
          "aria-label": bind.to("ariaLabel"),
          style: {
            maxWidth: bind.to("maxWidth")
          }
        },
        children: this.children,
        on: {
          mousedown: preventDefault(this)
        }
      });
      this._behavior = this.options.shouldGroupWhenFull ? new DynamicGrouping(this) : new StaticLayout(this);
    }
    render() {
      super.render();
      for (const item of this.items) {
        this.focusTracker.add(item.element);
      }
      this.items.on("add", (evt, item) => {
        this.focusTracker.add(item.element);
      });
      this.items.on("remove", (evt, item) => {
        this.focusTracker.remove(item.element);
      });
      this.keystrokes.listenTo(this.element);
      this._behavior.render(this);
    }
    destroy() {
      this._behavior.destroy();
      return super.destroy();
    }
    focus() {
      this._focusCycler.focusFirst();
    }
    focusLast() {
      this._focusCycler.focusLast();
    }
    fillFromConfig(config3, factory) {
      this.items.addMany(config3.map((name) => {
        if (name == "|") {
          return new toolbarseparatorview_default();
        } else if (name == "-") {
          if (this.options.shouldGroupWhenFull) {
            logWarning("toolbarview-line-break-ignored-when-grouping-items", config3);
          }
          return new toolbarlinebreakview_default();
        } else if (factory.has(name)) {
          return factory.create(name);
        } else {
          logWarning("toolbarview-item-unavailable", {name});
        }
      }).filter((item) => item !== void 0));
    }
  };
  var toolbarview_default = ToolbarView;
  var ItemsView = class extends view_default2 {
    constructor(locale2) {
      super(locale2);
      this.children = this.createCollection();
      this.setTemplate({
        tag: "div",
        attributes: {
          class: [
            "ck",
            "ck-toolbar__items"
          ]
        },
        children: this.children
      });
    }
  };
  var StaticLayout = class {
    constructor(view19) {
      const bind = view19.bindTemplate;
      view19.set("isVertical", false);
      view19.itemsView.children.bindTo(view19.items).using((item) => item);
      view19.focusables.bindTo(view19.items).using((item) => item);
      view19.extendTemplate({
        attributes: {
          class: [
            bind.if("isVertical", "ck-toolbar_vertical")
          ]
        }
      });
    }
    render() {
    }
    destroy() {
    }
  };
  var DynamicGrouping = class {
    constructor(view19) {
      this.view = view19;
      this.viewChildren = view19.children;
      this.viewFocusables = view19.focusables;
      this.viewItemsView = view19.itemsView;
      this.viewFocusTracker = view19.focusTracker;
      this.viewLocale = view19.locale;
      this.ungroupedItems = view19.createCollection();
      this.groupedItems = view19.createCollection();
      this.groupedItemsDropdown = this._createGroupedItemsDropdown();
      this.resizeObserver = null;
      this.cachedPadding = null;
      this.shouldUpdateGroupingOnNextResize = false;
      view19.itemsView.children.bindTo(this.ungroupedItems).using((item) => item);
      this.ungroupedItems.on("add", this._updateFocusCycleableItems.bind(this));
      this.ungroupedItems.on("remove", this._updateFocusCycleableItems.bind(this));
      view19.children.on("add", this._updateFocusCycleableItems.bind(this));
      view19.children.on("remove", this._updateFocusCycleableItems.bind(this));
      view19.items.on("change", (evt, changeData) => {
        const index = changeData.index;
        for (const removedItem of changeData.removed) {
          if (index >= this.ungroupedItems.length) {
            this.groupedItems.remove(removedItem);
          } else {
            this.ungroupedItems.remove(removedItem);
          }
        }
        for (let currentIndex = index; currentIndex < index + changeData.added.length; currentIndex++) {
          const addedItem = changeData.added[currentIndex - index];
          if (currentIndex > this.ungroupedItems.length) {
            this.groupedItems.add(addedItem, currentIndex - this.ungroupedItems.length);
          } else {
            this.ungroupedItems.add(addedItem, currentIndex);
          }
        }
        this._updateGrouping();
      });
      view19.extendTemplate({
        attributes: {
          class: [
            "ck-toolbar_grouping"
          ]
        }
      });
    }
    render(view19) {
      this.viewElement = view19.element;
      this._enableGroupingOnResize();
      this._enableGroupingOnMaxWidthChange(view19);
    }
    destroy() {
      this.groupedItemsDropdown.destroy();
      this.resizeObserver.destroy();
    }
    _updateGrouping() {
      if (!this.viewElement.ownerDocument.body.contains(this.viewElement)) {
        return;
      }
      if (!this.viewElement.offsetParent) {
        this.shouldUpdateGroupingOnNextResize = true;
        return;
      }
      const initialGroupedItemsCount = this.groupedItems.length;
      let wereItemsGrouped;
      while (this._areItemsOverflowing) {
        this._groupLastItem();
        wereItemsGrouped = true;
      }
      if (!wereItemsGrouped && this.groupedItems.length) {
        while (this.groupedItems.length && !this._areItemsOverflowing) {
          this._ungroupFirstItem();
        }
        if (this._areItemsOverflowing) {
          this._groupLastItem();
        }
      }
      if (this.groupedItems.length !== initialGroupedItemsCount) {
        this.view.fire("groupedItemsUpdate");
      }
    }
    get _areItemsOverflowing() {
      if (!this.ungroupedItems.length) {
        return false;
      }
      const element18 = this.viewElement;
      const uiLanguageDirection = this.viewLocale.uiLanguageDirection;
      const lastChildRect = new rect_default(element18.lastChild);
      const toolbarRect = new rect_default(element18);
      if (!this.cachedPadding) {
        const computedStyle = global_default.window.getComputedStyle(element18);
        const paddingProperty = uiLanguageDirection === "ltr" ? "paddingRight" : "paddingLeft";
        this.cachedPadding = Number.parseInt(computedStyle[paddingProperty]);
      }
      if (uiLanguageDirection === "ltr") {
        return lastChildRect.right > toolbarRect.right - this.cachedPadding;
      } else {
        return lastChildRect.left < toolbarRect.left + this.cachedPadding;
      }
    }
    _enableGroupingOnResize() {
      let previousWidth;
      this.resizeObserver = new resizeobserver_default(this.viewElement, (entry) => {
        if (!previousWidth || previousWidth !== entry.contentRect.width || this.shouldUpdateGroupingOnNextResize) {
          this.shouldUpdateGroupingOnNextResize = false;
          this._updateGrouping();
          previousWidth = entry.contentRect.width;
        }
      });
      this._updateGrouping();
    }
    _enableGroupingOnMaxWidthChange(view19) {
      view19.on("change:maxWidth", () => {
        this._updateGrouping();
      });
    }
    _groupLastItem() {
      if (!this.groupedItems.length) {
        this.viewChildren.add(new toolbarseparatorview_default());
        this.viewChildren.add(this.groupedItemsDropdown);
        this.viewFocusTracker.add(this.groupedItemsDropdown.element);
      }
      this.groupedItems.add(this.ungroupedItems.remove(this.ungroupedItems.last), 0);
    }
    _ungroupFirstItem() {
      this.ungroupedItems.add(this.groupedItems.remove(this.groupedItems.first));
      if (!this.groupedItems.length) {
        this.viewChildren.remove(this.groupedItemsDropdown);
        this.viewChildren.remove(this.viewChildren.last);
        this.viewFocusTracker.remove(this.groupedItemsDropdown.element);
      }
    }
    _createGroupedItemsDropdown() {
      const locale2 = this.viewLocale;
      const t = locale2.t;
      const dropdown2 = createDropdown(locale2);
      dropdown2.class = "ck-toolbar__grouped-dropdown";
      dropdown2.panelPosition = locale2.uiLanguageDirection === "ltr" ? "sw" : "se";
      addToolbarToDropdown(dropdown2, []);
      dropdown2.buttonView.set({
        label: t("Show more items"),
        tooltip: true,
        icon: three_vertical_dots_default
      });
      dropdown2.toolbarView.items.bindTo(this.groupedItems).using((item) => item);
      return dropdown2;
    }
    _updateFocusCycleableItems() {
      this.viewFocusables.clear();
      this.ungroupedItems.map((item) => {
        this.viewFocusables.add(item);
      });
      if (this.groupedItems.length) {
        this.viewFocusables.add(this.groupedItemsDropdown);
      }
    }
  };

  // node_modules/@ckeditor/ckeditor5-editor-classic/src/classiceditoruiview.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ClassicEditorUIView = class extends boxededitoruiview_default {
    constructor(locale2, editingView, options = {}) {
      super(locale2);
      this.stickyPanel = new stickypanelview_default(locale2);
      this.toolbar = new toolbarview_default(locale2, {
        shouldGroupWhenFull: options.shouldToolbarGroupWhenFull
      });
      this.editable = new inlineeditableuiview_default(locale2, editingView);
    }
    render() {
      super.render();
      this.stickyPanel.content.add(this.toolbar);
      this.top.add(this.stickyPanel);
      this.main.add(this.editable);
    }
  };
  var classiceditoruiview_default = ClassicEditorUIView;

  // node_modules/@ckeditor/ckeditor5-utils/src/dom/getdatafromelement.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function getDataFromElement(el) {
    if (el instanceof HTMLTextAreaElement) {
      return el.value;
    }
    return el.innerHTML;
  }

  // node_modules/@ckeditor/ckeditor5-editor-classic/src/classiceditor.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ClassicEditor = class extends editor_default {
    constructor(sourceElementOrData, config3) {
      super(config3);
      if (isElement_default(sourceElementOrData)) {
        this.sourceElement = sourceElementOrData;
      }
      this.data.processor = new htmldataprocessor_default(this.data.viewDocument);
      this.model.document.createRoot();
      const shouldToolbarGroupWhenFull = !this.config.get("toolbar.shouldNotGroupWhenFull");
      const view19 = new classiceditoruiview_default(this.locale, this.editing.view, {
        shouldToolbarGroupWhenFull
      });
      this.ui = new classiceditorui_default(this, view19);
      attachToForm(this);
    }
    destroy() {
      if (this.sourceElement) {
        this.updateSourceElement();
      }
      this.ui.destroy();
      return super.destroy();
    }
    static create(sourceElementOrData, config3 = {}) {
      return new Promise((resolve) => {
        const editor2 = new this(sourceElementOrData, config3);
        resolve(editor2.initPlugins().then(() => editor2.ui.init(isElement_default(sourceElementOrData) ? sourceElementOrData : null)).then(() => {
          if (!isElement_default(sourceElementOrData) && config3.initialData) {
            throw new ckeditorerror_default("editor-create-initial-data", null);
          }
          const initialData = config3.initialData || getInitialData(sourceElementOrData);
          return editor2.data.init(initialData);
        }).then(() => editor2.fire("ready")).then(() => editor2));
      });
    }
  };
  var classiceditor_default = ClassicEditor;
  mix(ClassicEditor, dataapimixin_default);
  mix(ClassicEditor, elementapimixin_default);
  function getInitialData(sourceElementOrData) {
    return isElement_default(sourceElementOrData) ? getDataFromElement(sourceElementOrData) : sourceElementOrData;
  }

  // node_modules/@ckeditor/ckeditor5-core/src/plugin.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Plugin = class {
    constructor(editor2) {
      this.editor = editor2;
      this.set("isEnabled", true);
      this._disableStack = new Set();
    }
    forceDisabled(id) {
      this._disableStack.add(id);
      if (this._disableStack.size == 1) {
        this.on("set:isEnabled", forceDisable, {priority: "highest"});
        this.isEnabled = false;
      }
    }
    clearForceDisabled(id) {
      this._disableStack.delete(id);
      if (this._disableStack.size == 0) {
        this.off("set:isEnabled", forceDisable);
        this.isEnabled = true;
      }
    }
    destroy() {
      this.stopListening();
    }
    static get isContextPlugin() {
      return false;
    }
  };
  var plugin_default = Plugin;
  mix(Plugin, observablemixin_default);
  function forceDisable(evt) {
    evt.return = false;
    evt.stop();
  }

  // node_modules/@ckeditor/ckeditor5-clipboard/src/datatransfer.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-clipboard/src/clipboardobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-clipboard/src/pasteplaintext.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-clipboard/src/utils/plaintexttohtml.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-clipboard/src/utils/normalizeclipboarddata.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-clipboard/src/utils/viewtoplaintext.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-clipboard/src/clipboard.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-core/src/command.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Command = class {
    constructor(editor2) {
      this.editor = editor2;
      this.set("value", void 0);
      this.set("isEnabled", false);
      this._disableStack = new Set();
      this.decorate("execute");
      this.listenTo(this.editor.model.document, "change", () => {
        this.refresh();
      });
      this.on("execute", (evt) => {
        if (!this.isEnabled) {
          evt.stop();
        }
      }, {priority: "high"});
      this.listenTo(editor2, "change:isReadOnly", (evt, name, value) => {
        if (value) {
          this.forceDisabled("readOnlyMode");
        } else {
          this.clearForceDisabled("readOnlyMode");
        }
      });
    }
    refresh() {
      this.isEnabled = true;
    }
    forceDisabled(id) {
      this._disableStack.add(id);
      if (this._disableStack.size == 1) {
        this.on("set:isEnabled", forceDisable2, {priority: "highest"});
        this.isEnabled = false;
      }
    }
    clearForceDisabled(id) {
      this._disableStack.delete(id);
      if (this._disableStack.size == 0) {
        this.off("set:isEnabled", forceDisable2);
        this.refresh();
      }
    }
    execute() {
    }
    destroy() {
      this.stopListening();
    }
  };
  var command_default = Command;
  mix(Command, observablemixin_default);
  function forceDisable2(evt) {
    evt.return = false;
    evt.stop();
  }

  // node_modules/@ckeditor/ckeditor5-enter/src/utils.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-enter/src/entercommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-enter/src/enterobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-enter/src/enter.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-enter/src/shiftentercommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-enter/src/shiftenter.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-select-all/src/selectallcommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-select-all/src/selectallediting.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var SELECT_ALL_KEYSTROKE = parseKeystroke("Ctrl+A");

  // node_modules/@ckeditor/ckeditor5-select-all/src/selectallui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-select-all/src/selectall.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/utils/changebuffer.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/inputcommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/utils/injectunsafekeystrokeshandling.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var safeKeycodes = [
    getCode("arrowUp"),
    getCode("arrowRight"),
    getCode("arrowDown"),
    getCode("arrowLeft"),
    9,
    16,
    17,
    18,
    19,
    20,
    27,
    33,
    34,
    35,
    36,
    45,
    91,
    93,
    144,
    145,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    255
  ];
  for (let code = 112; code <= 135; code++) {
    safeKeycodes.push(code);
  }

  // node_modules/@ckeditor/ckeditor5-utils/src/difftochanges.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/utils/utils.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/utils/injecttypingmutationshandling.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/input.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/deletecommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/deleteobserver.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/delete.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-typing/src/typing.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-engine/src/model/operation/transform.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var transformations = new Map();
  function setTransformation(OperationA, OperationB, transformationFunction) {
    let aGroup = transformations.get(OperationA);
    if (!aGroup) {
      aGroup = new Map();
      transformations.set(OperationA, aGroup);
    }
    aGroup.set(OperationB, transformationFunction);
  }
  setTransformation(attributeoperation_default, attributeoperation_default, (a, b, context2) => {
    if (a.key === b.key && a.range.start.hasSameParentAs(b.range.start)) {
      const operations2 = a.range.getDifference(b.range).map((range29) => {
        return new attributeoperation_default(range29, a.key, a.oldValue, a.newValue, 0);
      });
      const common = a.range.getIntersection(b.range);
      if (common) {
        if (context2.aIsStrong) {
          operations2.push(new attributeoperation_default(common, b.key, b.newValue, a.newValue, 0));
        }
      }
      if (operations2.length == 0) {
        return [new nooperation_default(0)];
      }
      return operations2;
    } else {
      return [a];
    }
  });
  setTransformation(attributeoperation_default, insertoperation_default, (a, b) => {
    if (a.range.start.hasSameParentAs(b.position) && a.range.containsPosition(b.position)) {
      const range29 = a.range._getTransformedByInsertion(b.position, b.howMany, !b.shouldReceiveAttributes);
      const result = range29.map((r) => {
        return new attributeoperation_default(r, a.key, a.oldValue, a.newValue, a.baseVersion);
      });
      if (b.shouldReceiveAttributes) {
        const op = _getComplementaryAttributeOperations(b, a.key, a.oldValue);
        if (op) {
          result.unshift(op);
        }
      }
      return result;
    }
    a.range = a.range._getTransformedByInsertion(b.position, b.howMany, false)[0];
    return [a];
  });
  function _getComplementaryAttributeOperations(insertOperation, key, newValue) {
    const nodes = insertOperation.nodes;
    const insertValue = nodes.getNode(0).getAttribute(key);
    if (insertValue == newValue) {
      return null;
    }
    const range29 = new range_default2(insertOperation.position, insertOperation.position.getShiftedBy(insertOperation.howMany));
    return new attributeoperation_default(range29, key, insertValue, newValue, 0);
  }
  setTransformation(attributeoperation_default, mergeoperation_default, (a, b) => {
    const ranges = [];
    if (a.range.start.hasSameParentAs(b.deletionPosition)) {
      if (a.range.containsPosition(b.deletionPosition) || a.range.start.isEqual(b.deletionPosition)) {
        ranges.push(range_default2._createFromPositionAndShift(b.graveyardPosition, 1));
      }
    }
    const range29 = a.range._getTransformedByMergeOperation(b);
    if (!range29.isCollapsed) {
      ranges.push(range29);
    }
    return ranges.map((range30) => {
      return new attributeoperation_default(range30, a.key, a.oldValue, a.newValue, a.baseVersion);
    });
  });
  setTransformation(attributeoperation_default, moveoperation_default, (a, b) => {
    const ranges = _breakRangeByMoveOperation(a.range, b);
    return ranges.map((range29) => new attributeoperation_default(range29, a.key, a.oldValue, a.newValue, a.baseVersion));
  });
  function _breakRangeByMoveOperation(range29, moveOp) {
    const moveRange = range_default2._createFromPositionAndShift(moveOp.sourcePosition, moveOp.howMany);
    let common = null;
    let difference = [];
    if (moveRange.containsRange(range29, true)) {
      common = range29;
    } else if (range29.start.hasSameParentAs(moveRange.start)) {
      difference = range29.getDifference(moveRange);
      common = range29.getIntersection(moveRange);
    } else {
      difference = [range29];
    }
    const result = [];
    for (let diff5 of difference) {
      diff5 = diff5._getTransformedByDeletion(moveOp.sourcePosition, moveOp.howMany);
      const targetPosition = moveOp.getMovedRangeStart();
      const spread = diff5.start.hasSameParentAs(targetPosition);
      diff5 = diff5._getTransformedByInsertion(targetPosition, moveOp.howMany, spread);
      result.push(...diff5);
    }
    if (common) {
      result.push(common._getTransformedByMove(moveOp.sourcePosition, moveOp.targetPosition, moveOp.howMany, false)[0]);
    }
    return result;
  }
  setTransformation(attributeoperation_default, splitoperation_default, (a, b) => {
    if (a.range.end.isEqual(b.insertionPosition)) {
      if (!b.graveyardPosition) {
        a.range.end.offset++;
      }
      return [a];
    }
    if (a.range.start.hasSameParentAs(b.splitPosition) && a.range.containsPosition(b.splitPosition)) {
      const secondPart = a.clone();
      secondPart.range = new range_default2(b.moveTargetPosition.clone(), a.range.end._getCombined(b.splitPosition, b.moveTargetPosition));
      a.range.end = b.splitPosition.clone();
      a.range.end.stickiness = "toPrevious";
      return [a, secondPart];
    }
    a.range = a.range._getTransformedBySplitOperation(b);
    return [a];
  });
  setTransformation(insertoperation_default, attributeoperation_default, (a, b) => {
    const result = [a];
    if (a.shouldReceiveAttributes && a.position.hasSameParentAs(b.range.start) && b.range.containsPosition(a.position)) {
      const op = _getComplementaryAttributeOperations(a, b.key, b.newValue);
      if (op) {
        result.push(op);
      }
    }
    return result;
  });
  setTransformation(insertoperation_default, insertoperation_default, (a, b, context2) => {
    if (a.position.isEqual(b.position) && context2.aIsStrong) {
      return [a];
    }
    a.position = a.position._getTransformedByInsertOperation(b);
    return [a];
  });
  setTransformation(insertoperation_default, moveoperation_default, (a, b) => {
    a.position = a.position._getTransformedByMoveOperation(b);
    return [a];
  });
  setTransformation(insertoperation_default, splitoperation_default, (a, b) => {
    a.position = a.position._getTransformedBySplitOperation(b);
    return [a];
  });
  setTransformation(insertoperation_default, mergeoperation_default, (a, b) => {
    a.position = a.position._getTransformedByMergeOperation(b);
    return [a];
  });
  setTransformation(markeroperation_default, insertoperation_default, (a, b) => {
    if (a.oldRange) {
      a.oldRange = a.oldRange._getTransformedByInsertOperation(b)[0];
    }
    if (a.newRange) {
      a.newRange = a.newRange._getTransformedByInsertOperation(b)[0];
    }
    return [a];
  });
  setTransformation(markeroperation_default, markeroperation_default, (a, b, context2) => {
    if (a.name == b.name) {
      if (context2.aIsStrong) {
        a.oldRange = b.newRange ? b.newRange.clone() : null;
      } else {
        return [new nooperation_default(0)];
      }
    }
    return [a];
  });
  setTransformation(markeroperation_default, mergeoperation_default, (a, b) => {
    if (a.oldRange) {
      a.oldRange = a.oldRange._getTransformedByMergeOperation(b);
    }
    if (a.newRange) {
      a.newRange = a.newRange._getTransformedByMergeOperation(b);
    }
    return [a];
  });
  setTransformation(markeroperation_default, moveoperation_default, (a, b, context2) => {
    if (a.oldRange) {
      a.oldRange = range_default2._createFromRanges(a.oldRange._getTransformedByMoveOperation(b));
    }
    if (a.newRange) {
      if (context2.abRelation) {
        const aNewRange = range_default2._createFromRanges(a.newRange._getTransformedByMoveOperation(b));
        if (context2.abRelation.side == "left" && b.targetPosition.isEqual(a.newRange.start)) {
          a.newRange.start.path = context2.abRelation.path;
          a.newRange.end = aNewRange.end;
          return [a];
        } else if (context2.abRelation.side == "right" && b.targetPosition.isEqual(a.newRange.end)) {
          a.newRange.start = aNewRange.start;
          a.newRange.end.path = context2.abRelation.path;
          return [a];
        }
      }
      a.newRange = range_default2._createFromRanges(a.newRange._getTransformedByMoveOperation(b));
    }
    return [a];
  });
  setTransformation(markeroperation_default, splitoperation_default, (a, b, context2) => {
    if (a.oldRange) {
      a.oldRange = a.oldRange._getTransformedBySplitOperation(b);
    }
    if (a.newRange) {
      if (context2.abRelation) {
        const aNewRange = a.newRange._getTransformedBySplitOperation(b);
        if (a.newRange.start.isEqual(b.splitPosition) && context2.abRelation.wasStartBeforeMergedElement) {
          a.newRange.start = position_default2._createAt(b.insertionPosition);
        } else if (a.newRange.start.isEqual(b.splitPosition) && !context2.abRelation.wasInLeftElement) {
          a.newRange.start = position_default2._createAt(b.moveTargetPosition);
        }
        if (a.newRange.end.isEqual(b.splitPosition) && context2.abRelation.wasInRightElement) {
          a.newRange.end = position_default2._createAt(b.moveTargetPosition);
        } else if (a.newRange.end.isEqual(b.splitPosition) && context2.abRelation.wasEndBeforeMergedElement) {
          a.newRange.end = position_default2._createAt(b.insertionPosition);
        } else {
          a.newRange.end = aNewRange.end;
        }
        return [a];
      }
      a.newRange = a.newRange._getTransformedBySplitOperation(b);
    }
    return [a];
  });
  setTransformation(mergeoperation_default, insertoperation_default, (a, b) => {
    if (a.sourcePosition.hasSameParentAs(b.position)) {
      a.howMany += b.howMany;
    }
    a.sourcePosition = a.sourcePosition._getTransformedByInsertOperation(b);
    a.targetPosition = a.targetPosition._getTransformedByInsertOperation(b);
    return [a];
  });
  setTransformation(mergeoperation_default, mergeoperation_default, (a, b, context2) => {
    if (a.sourcePosition.isEqual(b.sourcePosition) && a.targetPosition.isEqual(b.targetPosition)) {
      if (!context2.bWasUndone) {
        return [new nooperation_default(0)];
      } else {
        const path = b.graveyardPosition.path.slice();
        path.push(0);
        a.sourcePosition = new position_default2(b.graveyardPosition.root, path);
        a.howMany = 0;
        return [a];
      }
    }
    if (a.sourcePosition.isEqual(b.sourcePosition) && !a.targetPosition.isEqual(b.targetPosition) && !context2.bWasUndone && context2.abRelation != "splitAtSource") {
      const aToGraveyard = a.targetPosition.root.rootName == "$graveyard";
      const bToGraveyard = b.targetPosition.root.rootName == "$graveyard";
      const aIsWeak = aToGraveyard && !bToGraveyard;
      const bIsWeak = bToGraveyard && !aToGraveyard;
      const forceMove = bIsWeak || !aIsWeak && context2.aIsStrong;
      if (forceMove) {
        const sourcePosition = b.targetPosition._getTransformedByMergeOperation(b);
        const targetPosition = a.targetPosition._getTransformedByMergeOperation(b);
        return [new moveoperation_default(sourcePosition, a.howMany, targetPosition, 0)];
      } else {
        return [new nooperation_default(0)];
      }
    }
    if (a.sourcePosition.hasSameParentAs(b.targetPosition)) {
      a.howMany += b.howMany;
    }
    a.sourcePosition = a.sourcePosition._getTransformedByMergeOperation(b);
    a.targetPosition = a.targetPosition._getTransformedByMergeOperation(b);
    if (!a.graveyardPosition.isEqual(b.graveyardPosition) || !context2.aIsStrong) {
      a.graveyardPosition = a.graveyardPosition._getTransformedByMergeOperation(b);
    }
    return [a];
  });
  setTransformation(mergeoperation_default, moveoperation_default, (a, b, context2) => {
    const removedRange = range_default2._createFromPositionAndShift(b.sourcePosition, b.howMany);
    if (b.type == "remove" && !context2.bWasUndone && !context2.forceWeakRemove) {
      if (a.deletionPosition.hasSameParentAs(b.sourcePosition) && removedRange.containsPosition(a.sourcePosition)) {
        return [new nooperation_default(0)];
      }
    }
    if (a.sourcePosition.hasSameParentAs(b.targetPosition)) {
      a.howMany += b.howMany;
    }
    if (a.sourcePosition.hasSameParentAs(b.sourcePosition)) {
      a.howMany -= b.howMany;
    }
    a.sourcePosition = a.sourcePosition._getTransformedByMoveOperation(b);
    a.targetPosition = a.targetPosition._getTransformedByMoveOperation(b);
    if (!a.graveyardPosition.isEqual(b.targetPosition)) {
      a.graveyardPosition = a.graveyardPosition._getTransformedByMoveOperation(b);
    }
    return [a];
  });
  setTransformation(mergeoperation_default, splitoperation_default, (a, b, context2) => {
    if (b.graveyardPosition) {
      a.graveyardPosition = a.graveyardPosition._getTransformedByDeletion(b.graveyardPosition, 1);
      if (a.deletionPosition.isEqual(b.graveyardPosition)) {
        a.howMany = b.howMany;
      }
    }
    if (a.targetPosition.isEqual(b.splitPosition)) {
      const mergeInside = b.howMany != 0;
      const mergeSplittingElement = b.graveyardPosition && a.deletionPosition.isEqual(b.graveyardPosition);
      if (mergeInside || mergeSplittingElement || context2.abRelation == "mergeTargetNotMoved") {
        a.sourcePosition = a.sourcePosition._getTransformedBySplitOperation(b);
        return [a];
      }
    }
    if (a.sourcePosition.isEqual(b.splitPosition)) {
      if (context2.abRelation == "mergeSourceNotMoved") {
        a.howMany = 0;
        a.targetPosition = a.targetPosition._getTransformedBySplitOperation(b);
        return [a];
      }
      if (context2.abRelation == "mergeSameElement" || a.sourcePosition.offset > 0) {
        a.sourcePosition = b.moveTargetPosition.clone();
        a.targetPosition = a.targetPosition._getTransformedBySplitOperation(b);
        return [a];
      }
    }
    if (a.sourcePosition.hasSameParentAs(b.splitPosition)) {
      a.howMany = b.splitPosition.offset;
    }
    a.sourcePosition = a.sourcePosition._getTransformedBySplitOperation(b);
    a.targetPosition = a.targetPosition._getTransformedBySplitOperation(b);
    return [a];
  });
  setTransformation(moveoperation_default, insertoperation_default, (a, b) => {
    const moveRange = range_default2._createFromPositionAndShift(a.sourcePosition, a.howMany);
    const transformed = moveRange._getTransformedByInsertOperation(b, false)[0];
    a.sourcePosition = transformed.start;
    a.howMany = transformed.end.offset - transformed.start.offset;
    if (!a.targetPosition.isEqual(b.position)) {
      a.targetPosition = a.targetPosition._getTransformedByInsertOperation(b);
    }
    return [a];
  });
  setTransformation(moveoperation_default, moveoperation_default, (a, b, context2) => {
    const rangeA = range_default2._createFromPositionAndShift(a.sourcePosition, a.howMany);
    const rangeB = range_default2._createFromPositionAndShift(b.sourcePosition, b.howMany);
    let aIsStrong = context2.aIsStrong;
    let insertBefore = !context2.aIsStrong;
    if (context2.abRelation == "insertBefore" || context2.baRelation == "insertAfter") {
      insertBefore = true;
    } else if (context2.abRelation == "insertAfter" || context2.baRelation == "insertBefore") {
      insertBefore = false;
    }
    let newTargetPosition;
    if (a.targetPosition.isEqual(b.targetPosition) && insertBefore) {
      newTargetPosition = a.targetPosition._getTransformedByDeletion(b.sourcePosition, b.howMany);
    } else {
      newTargetPosition = a.targetPosition._getTransformedByMove(b.sourcePosition, b.targetPosition, b.howMany);
    }
    if (_moveTargetIntoMovedRange(a, b) && _moveTargetIntoMovedRange(b, a)) {
      return [b.getReversed()];
    }
    const bTargetsToA = rangeA.containsPosition(b.targetPosition);
    if (bTargetsToA && rangeA.containsRange(rangeB, true)) {
      rangeA.start = rangeA.start._getTransformedByMove(b.sourcePosition, b.targetPosition, b.howMany);
      rangeA.end = rangeA.end._getTransformedByMove(b.sourcePosition, b.targetPosition, b.howMany);
      return _makeMoveOperationsFromRanges([rangeA], newTargetPosition);
    }
    const aTargetsToB = rangeB.containsPosition(a.targetPosition);
    if (aTargetsToB && rangeB.containsRange(rangeA, true)) {
      rangeA.start = rangeA.start._getCombined(b.sourcePosition, b.getMovedRangeStart());
      rangeA.end = rangeA.end._getCombined(b.sourcePosition, b.getMovedRangeStart());
      return _makeMoveOperationsFromRanges([rangeA], newTargetPosition);
    }
    const aCompB = compareArrays(a.sourcePosition.getParentPath(), b.sourcePosition.getParentPath());
    if (aCompB == "prefix" || aCompB == "extension") {
      rangeA.start = rangeA.start._getTransformedByMove(b.sourcePosition, b.targetPosition, b.howMany);
      rangeA.end = rangeA.end._getTransformedByMove(b.sourcePosition, b.targetPosition, b.howMany);
      return _makeMoveOperationsFromRanges([rangeA], newTargetPosition);
    }
    if (a.type == "remove" && b.type != "remove" && !context2.aWasUndone && !context2.forceWeakRemove) {
      aIsStrong = true;
    } else if (a.type != "remove" && b.type == "remove" && !context2.bWasUndone && !context2.forceWeakRemove) {
      aIsStrong = false;
    }
    const ranges = [];
    const difference = rangeA.getDifference(rangeB);
    for (const range29 of difference) {
      range29.start = range29.start._getTransformedByDeletion(b.sourcePosition, b.howMany);
      range29.end = range29.end._getTransformedByDeletion(b.sourcePosition, b.howMany);
      const shouldSpread = compareArrays(range29.start.getParentPath(), b.getMovedRangeStart().getParentPath()) == "same";
      const newRanges = range29._getTransformedByInsertion(b.getMovedRangeStart(), b.howMany, shouldSpread);
      ranges.push(...newRanges);
    }
    const common = rangeA.getIntersection(rangeB);
    if (common !== null && aIsStrong) {
      common.start = common.start._getCombined(b.sourcePosition, b.getMovedRangeStart());
      common.end = common.end._getCombined(b.sourcePosition, b.getMovedRangeStart());
      if (ranges.length === 0) {
        ranges.push(common);
      } else if (ranges.length == 1) {
        if (rangeB.start.isBefore(rangeA.start) || rangeB.start.isEqual(rangeA.start)) {
          ranges.unshift(common);
        } else {
          ranges.push(common);
        }
      } else {
        ranges.splice(1, 0, common);
      }
    }
    if (ranges.length === 0) {
      return [new nooperation_default(a.baseVersion)];
    }
    return _makeMoveOperationsFromRanges(ranges, newTargetPosition);
  });
  setTransformation(moveoperation_default, splitoperation_default, (a, b, context2) => {
    let newTargetPosition = a.targetPosition.clone();
    if (!a.targetPosition.isEqual(b.insertionPosition) || !b.graveyardPosition || context2.abRelation == "moveTargetAfter") {
      newTargetPosition = a.targetPosition._getTransformedBySplitOperation(b);
    }
    const moveRange = range_default2._createFromPositionAndShift(a.sourcePosition, a.howMany);
    if (moveRange.end.isEqual(b.insertionPosition)) {
      if (!b.graveyardPosition) {
        a.howMany++;
      }
      a.targetPosition = newTargetPosition;
      return [a];
    }
    if (moveRange.start.hasSameParentAs(b.splitPosition) && moveRange.containsPosition(b.splitPosition)) {
      let rightRange = new range_default2(b.splitPosition, moveRange.end);
      rightRange = rightRange._getTransformedBySplitOperation(b);
      const ranges2 = [
        new range_default2(moveRange.start, b.splitPosition),
        rightRange
      ];
      return _makeMoveOperationsFromRanges(ranges2, newTargetPosition);
    }
    if (a.targetPosition.isEqual(b.splitPosition) && context2.abRelation == "insertAtSource") {
      newTargetPosition = b.moveTargetPosition;
    }
    if (a.targetPosition.isEqual(b.insertionPosition) && context2.abRelation == "insertBetween") {
      newTargetPosition = a.targetPosition;
    }
    const transformed = moveRange._getTransformedBySplitOperation(b);
    const ranges = [transformed];
    if (b.graveyardPosition) {
      const movesGraveyardElement = moveRange.start.isEqual(b.graveyardPosition) || moveRange.containsPosition(b.graveyardPosition);
      if (a.howMany > 1 && movesGraveyardElement && !context2.aWasUndone) {
        ranges.push(range_default2._createFromPositionAndShift(b.insertionPosition, 1));
      }
    }
    return _makeMoveOperationsFromRanges(ranges, newTargetPosition);
  });
  setTransformation(moveoperation_default, mergeoperation_default, (a, b, context2) => {
    const movedRange = range_default2._createFromPositionAndShift(a.sourcePosition, a.howMany);
    if (b.deletionPosition.hasSameParentAs(a.sourcePosition) && movedRange.containsPosition(b.sourcePosition)) {
      if (a.type == "remove" && !context2.forceWeakRemove) {
        if (!context2.aWasUndone) {
          const results = [];
          let gyMoveSource = b.graveyardPosition.clone();
          let splitNodesMoveSource = b.targetPosition._getTransformedByMergeOperation(b);
          if (a.howMany > 1) {
            results.push(new moveoperation_default(a.sourcePosition, a.howMany - 1, a.targetPosition, 0));
            gyMoveSource = gyMoveSource._getTransformedByMove(a.sourcePosition, a.targetPosition, a.howMany - 1);
            splitNodesMoveSource = splitNodesMoveSource._getTransformedByMove(a.sourcePosition, a.targetPosition, a.howMany - 1);
          }
          const gyMoveTarget = b.deletionPosition._getCombined(a.sourcePosition, a.targetPosition);
          const gyMove = new moveoperation_default(gyMoveSource, 1, gyMoveTarget, 0);
          const splitNodesMoveTargetPath = gyMove.getMovedRangeStart().path.slice();
          splitNodesMoveTargetPath.push(0);
          const splitNodesMoveTarget = new position_default2(gyMove.targetPosition.root, splitNodesMoveTargetPath);
          splitNodesMoveSource = splitNodesMoveSource._getTransformedByMove(gyMoveSource, gyMoveTarget, 1);
          const splitNodesMove = new moveoperation_default(splitNodesMoveSource, b.howMany, splitNodesMoveTarget, 0);
          results.push(gyMove);
          results.push(splitNodesMove);
          return results;
        }
      } else {
        if (a.howMany == 1) {
          if (!context2.bWasUndone) {
            return [new nooperation_default(0)];
          } else {
            a.sourcePosition = b.graveyardPosition.clone();
            a.targetPosition = a.targetPosition._getTransformedByMergeOperation(b);
            return [a];
          }
        }
      }
    }
    const moveRange = range_default2._createFromPositionAndShift(a.sourcePosition, a.howMany);
    const transformed = moveRange._getTransformedByMergeOperation(b);
    a.sourcePosition = transformed.start;
    a.howMany = transformed.end.offset - transformed.start.offset;
    a.targetPosition = a.targetPosition._getTransformedByMergeOperation(b);
    return [a];
  });
  setTransformation(renameoperation_default, insertoperation_default, (a, b) => {
    a.position = a.position._getTransformedByInsertOperation(b);
    return [a];
  });
  setTransformation(renameoperation_default, mergeoperation_default, (a, b) => {
    if (a.position.isEqual(b.deletionPosition)) {
      a.position = b.graveyardPosition.clone();
      a.position.stickiness = "toNext";
      return [a];
    }
    a.position = a.position._getTransformedByMergeOperation(b);
    return [a];
  });
  setTransformation(renameoperation_default, moveoperation_default, (a, b) => {
    a.position = a.position._getTransformedByMoveOperation(b);
    return [a];
  });
  setTransformation(renameoperation_default, renameoperation_default, (a, b, context2) => {
    if (a.position.isEqual(b.position)) {
      if (context2.aIsStrong) {
        a.oldName = b.newName;
      } else {
        return [new nooperation_default(0)];
      }
    }
    return [a];
  });
  setTransformation(renameoperation_default, splitoperation_default, (a, b) => {
    const renamePath = a.position.path;
    const splitPath = b.splitPosition.getParentPath();
    if (compareArrays(renamePath, splitPath) == "same" && !b.graveyardPosition) {
      const extraRename = new renameoperation_default(a.position.getShiftedBy(1), a.oldName, a.newName, 0);
      return [a, extraRename];
    }
    a.position = a.position._getTransformedBySplitOperation(b);
    return [a];
  });
  setTransformation(rootattributeoperation_default, rootattributeoperation_default, (a, b, context2) => {
    if (a.root === b.root && a.key === b.key) {
      if (!context2.aIsStrong || a.newValue === b.newValue) {
        return [new nooperation_default(0)];
      } else {
        a.oldValue = b.newValue;
      }
    }
    return [a];
  });
  setTransformation(splitoperation_default, insertoperation_default, (a, b) => {
    if (a.splitPosition.hasSameParentAs(b.position) && a.splitPosition.offset < b.position.offset) {
      a.howMany += b.howMany;
    }
    a.splitPosition = a.splitPosition._getTransformedByInsertOperation(b);
    a.insertionPosition = splitoperation_default.getInsertionPosition(a.splitPosition);
    return [a];
  });
  setTransformation(splitoperation_default, mergeoperation_default, (a, b, context2) => {
    if (!a.graveyardPosition && !context2.bWasUndone && a.splitPosition.hasSameParentAs(b.sourcePosition)) {
      const splitPath = b.graveyardPosition.path.slice();
      splitPath.push(0);
      const splitPosition = new position_default2(b.graveyardPosition.root, splitPath);
      const insertionPosition = splitoperation_default.getInsertionPosition(new position_default2(b.graveyardPosition.root, splitPath));
      const additionalSplit = new splitoperation_default(splitPosition, 0, null, 0);
      additionalSplit.insertionPosition = insertionPosition;
      a.splitPosition = a.splitPosition._getTransformedByMergeOperation(b);
      a.insertionPosition = splitoperation_default.getInsertionPosition(a.splitPosition);
      a.graveyardPosition = additionalSplit.insertionPosition.clone();
      a.graveyardPosition.stickiness = "toNext";
      return [additionalSplit, a];
    }
    if (a.splitPosition.hasSameParentAs(b.deletionPosition) && !a.splitPosition.isAfter(b.deletionPosition)) {
      a.howMany--;
    }
    if (a.splitPosition.hasSameParentAs(b.targetPosition)) {
      a.howMany += b.howMany;
    }
    a.splitPosition = a.splitPosition._getTransformedByMergeOperation(b);
    a.insertionPosition = splitoperation_default.getInsertionPosition(a.splitPosition);
    if (a.graveyardPosition) {
      a.graveyardPosition = a.graveyardPosition._getTransformedByMergeOperation(b);
    }
    return [a];
  });
  setTransformation(splitoperation_default, moveoperation_default, (a, b, context2) => {
    const rangeToMove = range_default2._createFromPositionAndShift(b.sourcePosition, b.howMany);
    if (a.graveyardPosition) {
      const gyElementMoved = rangeToMove.start.isEqual(a.graveyardPosition) || rangeToMove.containsPosition(a.graveyardPosition);
      if (!context2.bWasUndone && gyElementMoved) {
        const sourcePosition = a.splitPosition._getTransformedByMoveOperation(b);
        const newParentPosition = a.graveyardPosition._getTransformedByMoveOperation(b);
        const newTargetPath = newParentPosition.path.slice();
        newTargetPath.push(0);
        const newTargetPosition = new position_default2(newParentPosition.root, newTargetPath);
        const moveOp = new moveoperation_default(sourcePosition, a.howMany, newTargetPosition, 0);
        return [moveOp];
      }
      a.graveyardPosition = a.graveyardPosition._getTransformedByMoveOperation(b);
    }
    if (a.splitPosition.hasSameParentAs(b.sourcePosition) && rangeToMove.containsPosition(a.splitPosition)) {
      const howManyRemoved = b.howMany - (a.splitPosition.offset - b.sourcePosition.offset);
      a.howMany -= howManyRemoved;
      if (a.splitPosition.hasSameParentAs(b.targetPosition) && a.splitPosition.offset < b.targetPosition.offset) {
        a.howMany += b.howMany;
      }
      a.splitPosition = b.sourcePosition.clone();
      a.insertionPosition = splitoperation_default.getInsertionPosition(a.splitPosition);
      return [a];
    }
    const splitAtTarget = a.splitPosition.isEqual(b.targetPosition);
    if (splitAtTarget && (context2.baRelation == "insertAtSource" || context2.abRelation == "splitBefore")) {
      a.howMany += b.howMany;
      a.splitPosition = a.splitPosition._getTransformedByDeletion(b.sourcePosition, b.howMany);
      a.insertionPosition = splitoperation_default.getInsertionPosition(a.splitPosition);
      return [a];
    }
    if (!b.sourcePosition.isEqual(b.targetPosition)) {
      if (a.splitPosition.hasSameParentAs(b.sourcePosition) && a.splitPosition.offset <= b.sourcePosition.offset) {
        a.howMany -= b.howMany;
      }
      if (a.splitPosition.hasSameParentAs(b.targetPosition) && a.splitPosition.offset < b.targetPosition.offset) {
        a.howMany += b.howMany;
      }
    }
    a.splitPosition.stickiness = "toNone";
    a.splitPosition = a.splitPosition._getTransformedByMoveOperation(b);
    a.splitPosition.stickiness = "toNext";
    if (a.graveyardPosition) {
      a.insertionPosition = a.insertionPosition._getTransformedByMoveOperation(b);
    } else {
      a.insertionPosition = splitoperation_default.getInsertionPosition(a.splitPosition);
    }
    return [a];
  });
  setTransformation(splitoperation_default, splitoperation_default, (a, b, context2) => {
    if (a.splitPosition.isEqual(b.splitPosition)) {
      if (!a.graveyardPosition && !b.graveyardPosition) {
        return [new nooperation_default(0)];
      }
      if (a.graveyardPosition && b.graveyardPosition && a.graveyardPosition.isEqual(b.graveyardPosition)) {
        return [new nooperation_default(0)];
      }
      if (context2.abRelation == "splitBefore") {
        a.howMany = 0;
        a.graveyardPosition = a.graveyardPosition._getTransformedBySplitOperation(b);
        return [a];
      }
    }
    if (a.graveyardPosition && b.graveyardPosition && a.graveyardPosition.isEqual(b.graveyardPosition)) {
      const aInGraveyard = a.splitPosition.root.rootName == "$graveyard";
      const bInGraveyard = b.splitPosition.root.rootName == "$graveyard";
      const aIsWeak = aInGraveyard && !bInGraveyard;
      const bIsWeak = bInGraveyard && !aInGraveyard;
      const forceMove = bIsWeak || !aIsWeak && context2.aIsStrong;
      if (forceMove) {
        const result = [];
        if (b.howMany) {
          result.push(new moveoperation_default(b.moveTargetPosition, b.howMany, b.splitPosition, 0));
        }
        if (a.howMany) {
          result.push(new moveoperation_default(a.splitPosition, a.howMany, a.moveTargetPosition, 0));
        }
        return result;
      } else {
        return [new nooperation_default(0)];
      }
    }
    if (a.graveyardPosition) {
      a.graveyardPosition = a.graveyardPosition._getTransformedBySplitOperation(b);
    }
    if (a.splitPosition.isEqual(b.insertionPosition) && context2.abRelation == "splitBefore") {
      a.howMany++;
      return [a];
    }
    if (b.splitPosition.isEqual(a.insertionPosition) && context2.baRelation == "splitBefore") {
      const newPositionPath = b.insertionPosition.path.slice();
      newPositionPath.push(0);
      const newPosition = new position_default2(b.insertionPosition.root, newPositionPath);
      const moveOp = new moveoperation_default(a.insertionPosition, 1, newPosition, 0);
      return [a, moveOp];
    }
    if (a.splitPosition.hasSameParentAs(b.splitPosition) && a.splitPosition.offset < b.splitPosition.offset) {
      a.howMany -= b.howMany;
    }
    a.splitPosition = a.splitPosition._getTransformedBySplitOperation(b);
    a.insertionPosition = splitoperation_default.getInsertionPosition(a.splitPosition);
    return [a];
  });
  function _moveTargetIntoMovedRange(a, b) {
    return a.targetPosition._getTransformedByDeletion(b.sourcePosition, b.howMany) === null;
  }
  function _makeMoveOperationsFromRanges(ranges, targetPosition) {
    const operations2 = [];
    for (let i = 0; i < ranges.length; i++) {
      const range29 = ranges[i];
      const op = new moveoperation_default(range29.start, range29.end.offset - range29.start.offset, targetPosition, 0);
      operations2.push(op);
      for (let j = i + 1; j < ranges.length; j++) {
        ranges[j] = ranges[j]._getTransformedByMove(op.sourcePosition, op.targetPosition, op.howMany)[0];
      }
      targetPosition = targetPosition._getTransformedByMove(op.sourcePosition, op.targetPosition, op.howMany);
    }
    return operations2;
  }

  // node_modules/@ckeditor/ckeditor5-undo/src/basecommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-undo/src/undocommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-undo/src/redocommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-undo/src/undoediting.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-undo/src/undoui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-undo/src/undo.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-essentials/src/essentials.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-utils/src/first.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  function first(iterable) {
    const iteratorItem = iterable.next();
    if (iteratorItem.done) {
      return null;
    }
    return iteratorItem.value;
  }

  // node_modules/@ckeditor/ckeditor5-paragraph/src/paragraphcommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var ParagraphCommand = class extends command_default {
    refresh() {
      const model3 = this.editor.model;
      const document5 = model3.document;
      const block = first(document5.selection.getSelectedBlocks());
      this.value = !!block && block.is("element", "paragraph");
      this.isEnabled = !!block && checkCanBecomeParagraph(block, model3.schema);
    }
    execute(options = {}) {
      const model3 = this.editor.model;
      const document5 = model3.document;
      model3.change((writer2) => {
        const blocks = (options.selection || document5.selection).getSelectedBlocks();
        for (const block of blocks) {
          if (!block.is("element", "paragraph") && checkCanBecomeParagraph(block, model3.schema)) {
            writer2.rename(block, "paragraph");
          }
        }
      });
    }
  };
  var paragraphcommand_default = ParagraphCommand;
  function checkCanBecomeParagraph(block, schema3) {
    return schema3.checkChild(block.parent, "paragraph") && !schema3.isObject(block);
  }

  // node_modules/@ckeditor/ckeditor5-paragraph/src/insertparagraphcommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var InsertParagraphCommand = class extends command_default {
    execute(options) {
      const model3 = this.editor.model;
      let position30 = options.position;
      model3.change((writer2) => {
        const paragraph4 = writer2.createElement("paragraph");
        if (!model3.schema.checkChild(position30.parent, paragraph4)) {
          const allowedParent = model3.schema.findAllowedParent(position30, paragraph4);
          if (!allowedParent) {
            return;
          }
          position30 = writer2.split(position30, allowedParent).position;
        }
        model3.insertContent(paragraph4, position30);
        writer2.setSelection(paragraph4, "in");
      });
    }
  };
  var insertparagraphcommand_default = InsertParagraphCommand;

  // node_modules/@ckeditor/ckeditor5-paragraph/src/paragraph.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Paragraph = class extends plugin_default {
    static get pluginName() {
      return "Paragraph";
    }
    init() {
      const editor2 = this.editor;
      const model3 = editor2.model;
      editor2.commands.add("paragraph", new paragraphcommand_default(editor2));
      editor2.commands.add("insertParagraph", new insertparagraphcommand_default(editor2));
      model3.schema.register("paragraph", {inheritAllFrom: "$block"});
      editor2.conversion.elementToElement({model: "paragraph", view: "p"});
      editor2.conversion.for("upcast").elementToElement({
        model: (viewElement, {writer: writer2}) => {
          if (!Paragraph.paragraphLikeElements.has(viewElement.name)) {
            return null;
          }
          if (viewElement.isEmpty) {
            return null;
          }
          return writer2.createElement("paragraph");
        },
        view: /.+/,
        converterPriority: "low"
      });
    }
  };
  var paragraph_default = Paragraph;
  Paragraph.paragraphLikeElements = new Set([
    "blockquote",
    "dd",
    "div",
    "dt",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "li",
    "p",
    "td",
    "th"
  ]);

  // node_modules/@ckeditor/ckeditor5-heading/src/headingcommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-heading/src/headingediting.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-ui/src/model.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */
  var Model2 = class {
    constructor(attributes, properties) {
      if (properties) {
        assignIn_default(this, properties);
      }
      if (attributes) {
        this.set(attributes);
      }
    }
  };
  var model_default2 = Model2;
  mix(Model2, observablemixin_default);

  // node_modules/@ckeditor/ckeditor5-heading/src/utils.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-heading/src/headingui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-heading/src/heading.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-list/src/listcommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-list/src/indentcommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-list/src/utils.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-list/src/converters.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-list/src/listediting.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-list/src/listui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-list/src/list.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/attributecommand.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/bold/boldediting.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/bold/boldui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/bold.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/italic/italicediting.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/italic/italicui.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // node_modules/@ckeditor/ckeditor5-basic-styles/src/italic.js
  /**
   * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
   * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
   */

  // djangocms_text_ckeditor/static/djangocms_text_ckeditor/build.ckeditor.js
  var build_ckeditor_default = classiceditor_default;
})();
//# sourceMappingURL=bundle.js.map
