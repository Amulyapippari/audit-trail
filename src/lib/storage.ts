export interface VersionEntry {
  id: string;
  timestamp: string;
  addedWords: string[];
  removedWords: string[];
  oldLength: number;
  newLength: number;
}

let versions: VersionEntry[] = [];
let lastText = "";

export function getVersions() {
  return versions;
}

export function getLastText() {
  return lastText;
}

export function saveVersion(entry: VersionEntry, newText: string) {
  versions.push(entry);
  lastText = newText;
}
