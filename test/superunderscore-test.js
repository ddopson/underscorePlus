var _ = require('underscore');
var vows = require('vows');
var assert = require('assert');
var superunderscore = require('../lib/underscorePlus');

vows.describe('superunderscore')
.addBatch({
  'underscore': {
    '_.map is a functionn': function() {
      assert.isFunction(_.map);
    }
    ,'_.sprintf is a functionn': function() {
      assert.isFunction(_.sprintf);
    }
  }
})
.export(module);

