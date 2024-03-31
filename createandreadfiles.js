const path = require('path');
const fs = require('fs');

const dirPath =  path.join(__dirname,'files');
for(i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt","file");
}