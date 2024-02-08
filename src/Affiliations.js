export default class Affiliation {
  constructor(affiliation) {
    // TODO: name is readable but still might want to clean them up
    // i.e "NewLokaSyndicate" can be "New Loka"" instead
    this.name = affiliation.Tag;
    this.standing = affiliation.Standing;
    this.title = affiliation.Title;
  }
}
