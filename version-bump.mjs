import { readFileSync, writeFileSync } from "fs";

// read minAppVersion from manifest.json and bump version to target version
let packageFile = JSON.parse(readFileSync("package.json", "utf8"));
console.log('Package version : ' + packageFile.version);
let manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
console.log('Manifest version : ' + manifest.version);
const targetVersion = packageFile.version;
manifest.version = targetVersion;
console.log('Updating manifest with version : ' + manifest.version);
writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t"));
