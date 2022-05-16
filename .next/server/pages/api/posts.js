"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "constants":
/*!****************************!*\
  !*** external "constants" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("constants");

/***/ }),

/***/ "(api)/./models/Post.js":
/*!************************!*\
  !*** ./models/Post.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst PostSchema = new _mongoose.default.Schema({\n    title: {\n        type: String,\n        required: [\n            true,\n            \"Please add a title\"\n        ],\n        maxlength: [\n            100,\n            \"Title can not be more than 100 characters\"\n        ]\n    },\n    content: {\n        type: String,\n        required: [\n            true,\n            \"Please add content\"\n        ]\n    },\n    user: {\n        type: _mongoose.default.Schema.ObjectId,\n        ref: \"User\",\n        required: [\n            true,\n            \"Please add a user\"\n        ]\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    },\n    comments: [\n        {\n            type: _mongoose.default.Schema.Types.ObjectId,\n            ref: \"Comment\"\n        }\n    ]\n});\nmodule.exports = _mongoose.default.models.Post || _mongoose.default.model(\"Post\", PostSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUG9zdC5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUFxQixhQUFVLDhDQUFWLDBCQUFVOzs7Ozs7QUFFL0IsTUFBTUEsVUFBVSxHQUFHLElBQUlDLFNBQVEsU0FBQ0MsTUFBTSxDQUFDO0lBRW5DQyxLQUFLLEVBQUU7UUFDSEMsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRTtZQUFDLElBQUk7WUFBRSxvQkFBb0I7U0FBQztRQUN0Q0MsU0FBUyxFQUFFO0FBQUMsZUFBRztZQUFFLDJDQUEyQztTQUFDO0tBQ2hFO0lBQ0RDLE9BQU8sRUFBRTtRQUNMSixJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFO1lBQUMsSUFBSTtZQUFFLG9CQUFvQjtTQUFDO0tBQ3pDO0lBQ0RHLElBQUksRUFBRTtRQUNGTCxJQUFJLEVBQUVILFNBQVEsU0FBQ0MsTUFBTSxDQUFDUSxRQUFRO1FBQzlCQyxHQUFHLEVBQUUsTUFBTTtRQUNYTCxRQUFRLEVBQUU7WUFBQyxJQUFJO1lBQUUsbUJBQW1CO1NBQUM7S0FDeEM7SUFDRE0sU0FBUyxFQUFFO1FBQ1BSLElBQUksRUFBRVMsSUFBSTtRQUNWQyxPQUFPLEVBQUVELElBQUksQ0FBQ0UsR0FBRztLQUNwQjtJQUNEQyxRQUFRLEVBQUc7UUFDUDtZQUNJWixJQUFJLEVBQUVILFNBQVEsU0FBQ0MsTUFBTSxDQUFDZSxLQUFLLENBQUNQLFFBQVE7WUFDcENDLEdBQUcsRUFBRSxTQUFTO1NBQ2pCO0tBQ0o7Q0FFSixDQUFDO0FBRUZPLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHbEIsU0FBUSxTQUFDbUIsTUFBTSxDQUFDQyxJQUFJLElBQUlwQixTQUFRLFNBQUNxQixLQUFLLENBQUMsTUFBTSxFQUFFdEIsVUFBVSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2RlbHMvUG9zdC5qcz80NmI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgUG9zdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIFxuICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBhZGQgYSB0aXRsZVwiXSxcbiAgICAgICAgbWF4bGVuZ3RoOiBbMTAwLCBcIlRpdGxlIGNhbiBub3QgYmUgbW9yZSB0aGFuIDEwMCBjaGFyYWN0ZXJzXCJdXG4gICAgfSxcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCBcIlBsZWFzZSBhZGQgY29udGVudFwiXVxuICAgIH0sXG4gICAgdXNlcjoge1xuICAgICAgICB0eXBlOiBtb25nb29zZS5TY2hlbWEuT2JqZWN0SWQsXG4gICAgICAgIHJlZjogXCJVc2VyXCIsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgYWRkIGEgdXNlclwiXVxuICAgIH0sXG4gICAgY3JlYXRlZEF0OiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIGRlZmF1bHQ6IERhdGUubm93XG4gICAgfSxcbiAgICBjb21tZW50cyA6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgICAgICAgICAgcmVmOiBcIkNvbW1lbnRcIlxuICAgICAgICB9XG4gICAgXVxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuUG9zdCB8fCBtb25nb29zZS5tb2RlbChcIlBvc3RcIiwgUG9zdFNjaGVtYSk7XG4iXSwibmFtZXMiOlsiUG9zdFNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJtYXhsZW5ndGgiLCJjb250ZW50IiwidXNlciIsIk9iamVjdElkIiwicmVmIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJjb21tZW50cyIsIlR5cGVzIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlBvc3QiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/Post.js\n");

/***/ }),

/***/ "(api)/./pages/api/posts/index.js":
/*!**********************************!*\
  !*** ./pages/api/posts/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/Post */ \"(api)/./models/Post.js\");\n/* harmony import */ var _models_Post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_models_Post__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const method = req.method;\n    switch(method){\n        case \"GET\":\n            try {\n                const posts = await _models_Post__WEBPACK_IMPORTED_MODULE_0___default().find();\n                res.status(200).json({\n                    success: true,\n                    data: posts\n                });\n            } catch (e) {\n                res.status(400).json({\n                    method: get,\n                    success: false,\n                    error: e.message\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const post = await _models_Post__WEBPACK_IMPORTED_MODULE_0___default().create(req.body);\n                res.status(201).json({\n                    success: true,\n                    data: post\n                });\n            } catch (e1) {\n                res.status(400).json({\n                    success: false,\n                    error: e1.message\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false,\n                error: \"Bad request\"\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNTO0FBRWpEQyw0REFBUyxFQUFFLENBQUM7QUFFWixpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUMvQixNQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0UsTUFBTTtJQUV6QixPQUFRQSxNQUFNO1FBQ1YsS0FBSyxLQUFLO1lBQ04sSUFBSTtnQkFDQSxNQUFNQyxLQUFLLEdBQUcsTUFBTUwsd0RBQVMsRUFBRTtnQkFDL0JHLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVMLEtBQUs7aUJBQUUsQ0FBQyxDQUFDO2FBQ3hELENBQ0QsT0FBT00sQ0FBQyxFQUFFO2dCQUNOUixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFSixNQUFNLEVBQUVRLEdBQUc7b0JBQUVILE9BQU8sRUFBRSxLQUFLO29CQUFFSSxLQUFLLEVBQUVGLENBQUMsQ0FBQ0csT0FBTztpQkFBRSxDQUFDLENBQUM7YUFDM0U7WUFDRCxNQUFNO1FBQ1YsS0FBSyxNQUFNO1lBQ1AsSUFBSTtnQkFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTWYsMERBQVcsQ0FBQ0UsR0FBRyxDQUFDZSxJQUFJLENBQUM7Z0JBQ3hDZCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFFQyxPQUFPLEVBQUUsSUFBSTtvQkFBRUMsSUFBSSxFQUFFSyxJQUFJO2lCQUFFLENBQUMsQ0FBQzthQUN2RCxDQUNELE9BQU9KLEVBQUMsRUFBRTtnQkFDTlIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBRUMsT0FBTyxFQUFFLEtBQUs7b0JBQUVJLEtBQUssRUFBRUYsRUFBQyxDQUFDRyxPQUFPO2lCQUFFLENBQUMsQ0FBQzthQUM5RDtZQUNELE1BQU07UUFDVjtZQUNJWCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFFQyxPQUFPLEVBQUUsS0FBSztnQkFBRUksS0FBSyxFQUFFLGFBQWE7YUFBRSxDQUFDLENBQUM7S0FDdEU7Q0FDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Bvc3RzL2luZGV4LmpzPzhlNzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBvc3QgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Qb3N0XCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9kYkNvbm5lY3RcIjtcblxuZGJDb25uZWN0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2Q7XG5cbiAgICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgICAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgUG9zdC5maW5kKCk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBwb3N0cyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXRob2Q6IGdldCwgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIlBPU1RcIjpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGF3YWl0IFBvc3QuY3JlYXRlKHJlcS5ib2R5KTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHBvc3QgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBcIkJhZCByZXF1ZXN0XCIgfSk7XG4gICAgfVxufTtcblxuIl0sIm5hbWVzIjpbIlBvc3QiLCJkYkNvbm5lY3QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwb3N0cyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsImRhdGEiLCJlIiwiZ2V0IiwiZXJyb3IiLCJtZXNzYWdlIiwicG9zdCIsImNyZWF0ZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts/index.js\n");

/***/ }),

/***/ "(api)/./utils/dbConnect.js":
/*!****************************!*\
  !*** ./utils/dbConnect.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants */ \"constants\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(constants__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst connection = {};\nasync function dbConnect() {\n    if (connection.isConnected) {\n        return;\n    }\n    const db = await mongoose__WEBPACK_IMPORTED_MODULE_1___default().connect(\"mongodb+srv://piupiu:piupiu@cluster0.rzqmg.mongodb.net/piupiu_db?retryWrites=true&w=majority\", {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    });\n    connection.isConnected = db.connections[0].readyState;\n    console.log(connection.isConnected);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDSTtBQUVoQyxNQUFNRSxVQUFVLEdBQUcsRUFBRTtBQUVyQixlQUFlQyxTQUFTLEdBQUU7SUFDdEIsSUFBR0QsVUFBVSxDQUFDRSxXQUFXLEVBQUM7UUFDdEIsT0FBTztLQUNWO0lBRUQsTUFBTUMsRUFBRSxHQUFHLE1BQU1KLHVEQUFnQixDQUFDTSw4RkFBcUIsRUFBRTtRQUNyREcsZUFBZSxFQUFFLElBQUk7UUFDckJDLGtCQUFrQixFQUFFLElBQUk7S0FDM0IsQ0FBQztJQUVGVCxVQUFVLENBQUNFLFdBQVcsR0FBR0MsRUFBRSxDQUFDTyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUNDLFVBQVUsQ0FBQztJQUN0REMsT0FBTyxDQUFDQyxHQUFHLENBQUNiLFVBQVUsQ0FBQ0UsV0FBVyxDQUFDO0NBQ3RDO0FBRUQsaUVBQWVELFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3V0aWxzL2RiQ29ubmVjdC5qcz9jM2NlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHAgZnJvbSBcImNvbnN0YW50c1wiO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBjb25uZWN0aW9uID0ge307XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpe1xuICAgIGlmKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZGIgPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSwge1xuICAgICAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gICAgICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSxcbiAgICB9KTtcblxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xuICAgIGNvbnNvbGUubG9nKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsiZXhwIiwibW9uZ29vc2UiLCJjb25uZWN0aW9uIiwiZGJDb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJkYiIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./utils/dbConnect.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts/index.js"));
module.exports = __webpack_exports__;

})();