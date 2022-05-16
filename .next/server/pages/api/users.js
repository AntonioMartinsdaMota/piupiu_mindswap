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
exports.id = "pages/api/users";
exports.ids = ["pages/api/users"];
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

/***/ "(api)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar _mongoose = _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\nconst UserSchema = new _mongoose.default.Schema({\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Please add an email\"\n        ],\n        unique: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Please add a password\"\n        ],\n        minlength: [\n            8,\n            \"Password must be at least 8 characters\"\n        ],\n        maxlength: [\n            50,\n            \"Password can not be more than 50 characters\"\n        ]\n    },\n    name: {\n        type: String,\n        required: [\n            true,\n            \"Please add a name\"\n        ],\n        maxlength: [\n            50,\n            \"Name can not be more than 50 characters\"\n        ]\n    }\n});\nmodule.exports = _mongoose.default.models.User || _mongoose.default.model(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvVXNlci5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQXFCLGFBQVUsOENBQVYsMEJBQVU7Ozs7OztBQUUvQixNQUFNQSxVQUFVLEdBQUcsSUFBSUMsU0FBUSxTQUFDQyxNQUFNLENBQUM7SUFDbkNDLEtBQUssRUFBRTtRQUNIQyxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFO1lBQUMsSUFBSTtZQUFFLHFCQUFxQjtTQUFDO1FBQ3ZDQyxNQUFNLEVBQUUsSUFBSTtRQUNaQyxJQUFJLEVBQUUsSUFBSTtLQUtiO0lBQ0RDLFFBQVEsRUFBRTtRQUNOTCxJQUFJLEVBQUVDLE1BQU07UUFDWkMsUUFBUSxFQUFFO1lBQUMsSUFBSTtZQUFFLHVCQUF1QjtTQUFDO1FBQ3pDSSxTQUFTLEVBQUU7QUFBQyxhQUFDO1lBQUUsd0NBQXdDO1NBQUM7UUFDeERDLFNBQVMsRUFBRTtBQUFDLGNBQUU7WUFBRSw2Q0FBNkM7U0FBQztLQUNqRTtJQUNEQyxJQUFJLEVBQUU7UUFDRlIsSUFBSSxFQUFFQyxNQUFNO1FBQ1pDLFFBQVEsRUFBRTtZQUFDLElBQUk7WUFBRSxtQkFBbUI7U0FBQztRQUNyQ0ssU0FBUyxFQUFFO0FBQUMsY0FBRTtZQUFFLHlDQUF5QztTQUFDO0tBQzdEO0NBR0osQ0FBQztBQUVGRSxNQUFNLENBQUNDLE9BQU8sR0FBR2IsU0FBUSxTQUFDYyxNQUFNLENBQUNDLElBQUksSUFBSWYsU0FBUSxTQUFDZ0IsS0FBSyxDQUFDLE1BQU0sRUFBRWpCLFVBQVUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbW9kZWxzL1VzZXIuanM/NzM2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBlbWFpbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgYWRkIGFuIGVtYWlsXCJdLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHRyaW06IHRydWUsXG4gICAgICAgIC8vIG1hdGNoOiBbXG4gICAgICAgIC8vICAgICAvXlxcdysoW1xcLi1dP1xcdyspKkBcXHcrKFtcXC4tXT9cXHcrKSooXFwuXFx3ezIsM30pKyQvLFxuICAgICAgICAvLyAgICAgXCJQbGVhc2UgYWRkIGEgdmFsaWQgZW1haWxcIlxuICAgICAgICAvLyBdXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgXCJQbGVhc2UgYWRkIGEgcGFzc3dvcmRcIl0sXG4gICAgICAgIG1pbmxlbmd0aDogWzgsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIl0sXG4gICAgICAgIG1heGxlbmd0aDogWzUwLCBcIlBhc3N3b3JkIGNhbiBub3QgYmUgbW9yZSB0aGFuIDUwIGNoYXJhY3RlcnNcIl1cbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZXF1aXJlZDogW3RydWUsIFwiUGxlYXNlIGFkZCBhIG5hbWVcIl0sXG4gICAgICAgIG1heGxlbmd0aDogWzUwLCBcIk5hbWUgY2FuIG5vdCBiZSBtb3JlIHRoYW4gNTAgY2hhcmFjdGVyc1wiXVxuICAgIH0sXG4gIFxuXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuVXNlciB8fCBtb25nb29zZS5tb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XG5cblxuXG4iXSwibmFtZXMiOlsiVXNlclNjaGVtYSIsIm1vbmdvb3NlIiwiU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJ0cmltIiwicGFzc3dvcmQiLCJtaW5sZW5ndGgiLCJtYXhsZW5ndGgiLCJuYW1lIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./models/User.js\n");

/***/ }),

/***/ "(api)/./pages/api/users/index.js":
/*!**********************************!*\
  !*** ./pages/api/users/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/dbConnect */ \"(api)/./utils/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(api)/./models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n\n\n(0,_utils_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const method = req.method;\n    switch(method){\n        case \"GET\":\n            try {\n                const users = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().find();\n                res.status(200).json({\n                    success: true,\n                    data: users\n                });\n            } catch (e) {\n                res.status(400).json({\n                    method: get,\n                    success: false,\n                    error: e.message\n                });\n            }\n            break;\n        case \"POST\":\n            try {\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().create(req.body);\n                res.status(201).json({\n                    success: true,\n                    data: user\n                });\n            } catch (e1) {\n                res.status(400).json({\n                    success: false,\n                    error: e1.message\n                });\n            }\n            break;\n        default:\n            res.status(400).json({\n                success: false,\n                error: \"Bad request\"\n            });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpRDtBQUNUO0FBSXhDQSw0REFBUyxFQUFFLENBQUM7QUFFWixpRUFBZSxPQUFPRSxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNsQyxNQUFNQyxNQUFNLEdBQUdGLEdBQUcsQ0FBQ0UsTUFBTTtJQUV0QixPQUFRQSxNQUFNO1FBQ1YsS0FBSyxLQUFLO1lBQ04sSUFBSTtnQkFDQSxNQUFNQyxLQUFLLEdBQUcsTUFBTUosd0RBQVMsRUFBRTtnQkFDL0JFLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7b0JBQUNDLE9BQU8sRUFBRSxJQUFJO29CQUFFQyxJQUFJLEVBQUVMLEtBQUs7aUJBQUMsQ0FBQyxDQUFDO2FBQ3RELENBQ0QsT0FBT00sQ0FBQyxFQUFFO2dCQUNOUixHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFDSixNQUFNLEVBQUVRLEdBQUc7b0JBQUNILE9BQU8sRUFBRSxLQUFLO29CQUFFSSxLQUFLLEVBQUVGLENBQUMsQ0FBQ0csT0FBTztpQkFBQyxDQUFDLENBQUM7YUFFeEU7WUFDRCxNQUFNO1FBQ1YsS0FBSyxNQUFNO1lBQ1AsSUFBSTtnQkFDQSxNQUFNQyxJQUFJLEdBQUcsTUFBTWQsMERBQVcsQ0FBQ0MsR0FBRyxDQUFDZSxJQUFJLENBQUM7Z0JBQ3hDZCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO29CQUFDQyxPQUFPLEVBQUUsSUFBSTtvQkFBRUMsSUFBSSxFQUFFSyxJQUFJO2lCQUFDLENBQUMsQ0FBQzthQUNyRCxDQUNELE9BQU9KLEVBQUMsRUFBRTtnQkFDTlIsR0FBRyxDQUFDSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztvQkFBQ0MsT0FBTyxFQUFFLEtBQUs7b0JBQUVJLEtBQUssRUFBRUYsRUFBQyxDQUFDRyxPQUFPO2lCQUFDLENBQUMsQ0FBQzthQUM1RDtZQUNELE1BQU07UUFDVjtZQUNJWCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsS0FBSztnQkFBRUksS0FBSyxFQUFFLGFBQWE7YUFBQyxDQUFDLENBQUM7S0FDcEU7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS91c2Vycy9pbmRleC5qcz8xZDhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYkNvbm5lY3QgZnJvbSAnLi4vLi4vLi4vdXRpbHMvZGJDb25uZWN0JztcbmltcG9ydCBVc2VyIGZyb20gJy4uLy4uLy4uL21vZGVscy9Vc2VyJztcblxuXG5cbmRiQ29ubmVjdCgpO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcbiBjb25zdCBtZXRob2QgPSByZXEubWV0aG9kO1xuXG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgICAgY2FzZSAnR0VUJzpcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBVc2VyLmZpbmQoKTtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7c3VjY2VzczogdHJ1ZSwgZGF0YTogdXNlcnN9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe21ldGhvZDogZ2V0LHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZS5tZXNzYWdlfSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnUE9TVCc6XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmNyZWF0ZShyZXEuYm9keSk7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe3N1Y2Nlc3M6IHRydWUsIGRhdGE6IHVzZXJ9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe3N1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZS5tZXNzYWdlfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtzdWNjZXNzOiBmYWxzZSwgZXJyb3I6ICdCYWQgcmVxdWVzdCd9KTtcbiAgICB9XG59XG5cbiJdLCJuYW1lcyI6WyJkYkNvbm5lY3QiLCJVc2VyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidXNlcnMiLCJmaW5kIiwic3RhdHVzIiwianNvbiIsInN1Y2Nlc3MiLCJkYXRhIiwiZSIsImdldCIsImVycm9yIiwibWVzc2FnZSIsInVzZXIiLCJjcmVhdGUiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/users/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/users/index.js"));
module.exports = __webpack_exports__;

})();