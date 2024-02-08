export default class Scan {
  constructor(scan) {
    this.uniqueName = scan.type;
    this.scans = scan.scans;
  }
}
