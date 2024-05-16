/**
 * Represents an enemy scanned to the codex
 * @module
 */
export default class Scan {
  /**
   * @param {Object} scan The scanned Warframe object
   */
  constructor(scan) {
    /**
     * Enemy unique name
     * @type {String}
     */
    this.uniqueName = scan.type;

    /**
     * Number of scans done
     * @type {number}
     */
    this.scans = scan.scans;
  }
}
