'use strict';

module.exports = class StringBuilder {

  /**
   * @constructor
   * @param {object} [opts]
   * @param {string} [opts.eol] - default is '\r\n'
   * @param {string} [opts.separator] - default is empty string ''
   */
  constructor(opts) {

    opts = opts || {};
    opts.eol = opts.eol || '\r\n';
    opts.separator = opts.separator || '';

    /**
     * @type {{eol: string, separator: string}}
     * @private
     */
    this._opts = opts;

    /**
     * @type {Array<string>}
     * @private
     */
    this._buffer = [];
  }

  /**
   * Clear buffer.
   */
  clear() {
    this._buffer.length = 0;
  }

  /**
   * Append string to buffer.
   * @param {string} str
   * @returns {StringBuilder}
   */
  append(str) {
    this._buffer.push(str);
    return this;
  }

  /**
   * Append string and end of line.
   * @param {string} [str]
   * @returns {StringBuilder}
   */
  appendLine(str) {
    if (str && str.length) this.append(str);
    return this.append(this._opts.eol);
  }

  /**
   * Cast everything into string.
   * @returns {string}
   */
  toString() {
    return this._buffer.join(this._opts.separator);
  }

  /**
   * Create a new builder.
   * @returns {StringBuilder}
   */
  static build() {
    return new StringBuilder();
  }

};
