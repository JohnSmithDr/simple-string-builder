'use strict';

let assert = require('assert'),
    StringBuilder = require('./index');

describe('StringBuilder', function() {

  let lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\r\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\r\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n\r\n";

  describe('#build', function() {

    it('should be ok', function() {

      let content = StringBuilder
        .build()
        .append('Lorem ipsum dolor sit amet, ')
        .append('consectetur adipisicing elit, ')
        .appendLine('sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.')
        .append('Ut enim ad minim veniam, ')
        .append('quis nostrud exercitation ullamco laboris ')
        .appendLine('nisi ut aliquip ex ea commodo consequat.')
        .append('Duis aute irure dolor in reprehenderit in voluptate ')
        .appendLine('velit esse cillum dolore eu fugiat nulla pariatur.')
        .append('Excepteur sint occaecat cupidatat non proident, ')
        .append('sunt in culpa qui officia deserunt ')
        .appendLine('mollit anim id est laborum.')
        .appendLine()
        .toString();

      assert.ok(lorem === content);

    });

  });

});

