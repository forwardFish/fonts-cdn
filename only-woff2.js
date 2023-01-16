const fs = require("fs");
const path = require("path");
if (process.argv.length <= 2) {
  process.exit(1);
}
const target = path.resolve(process.cwd(), process.argv.slice()[2]);
for(const name of fs.readdirSync(target)){
    if(name.endsWith(".woff2")){
        continue
    }
    fs.unlinkSync(path.join(target,name))
}