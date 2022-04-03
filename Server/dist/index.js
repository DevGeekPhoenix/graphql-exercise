"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("./@lib/global");

var _runServer = _interopRequireDefault(require("./@lib/server/run-server"));

var _buildSchema = _interopRequireDefault(require("./graphql/schema/buildSchema"));

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

var typeDefs = (0, _buildSchema["default"])();
print('********************************');
print(typeDefs);
print('********************************');
(0, _runServer["default"])({
  typeDefs: typeDefs,
  resolvers: _resolvers["default"],
  port: 4000
});