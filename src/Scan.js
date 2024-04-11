/** @module */

export default class Scan {
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
