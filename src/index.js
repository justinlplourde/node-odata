"use strict";

import express from 'express';
import proto from './server';
import Resource from './resource';

const server = function(db, prefix) {
  const server = {};
  /*jshint -W103 */
  server.__proto__ = proto;
  server.init(db, prefix);
  return server;
};

server.Resource = function(name, model) {
  const resource = {};
  /*jshint -W103 */
  resource.__proto__ = Resource;
  resource.init(name, model);
};

server.Function = function() {
  return express.Router();
};

export default server;
