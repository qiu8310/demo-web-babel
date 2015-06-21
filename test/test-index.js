/*
 * web-babel
 * https://github.com/qiu8310/web-babel
 *
 * Copyright (c) 2015 Zhonglei Qiu
 * Licensed under the MIT license.
 */

import assert from 'power-assert';
import should from 'should';
import m from '../src/index';

describe('root module', () => {
  it('should welcome users with `Hello World`', () => {

    assert.ok(m() === 'web-babel');
    m().should.eql('web-babel');

  });
});
