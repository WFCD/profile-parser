export interface RawScan {
  type: string;
  scans: number;
}

/**
 * Represents an enemy scanned to the codex
 * @module
 */
export default class Scan {
  /**
   * Enemy unique name
   * @type {String}
   */
  uniqueName: string;

  /**
   * Number of scans done
   * @type {number}
   */
  scans: number;

  /**
   * @param {Object} scan The scanned Warframe object
   */
  constructor(scan: RawScan) {
    this.uniqueName = scan.type;
    this.scans = scan.scans;
  }
}
