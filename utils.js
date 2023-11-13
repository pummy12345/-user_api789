const fs= require('fs');
const createFolder=(folderName)=>{
  // check if folder exists
   if(!fs.existsSync(folderName))
   {
    fs.mkdirSync(folderName);
   }
};
 const defaultPosts='[{"id":"2022","title":"HTML","url":"htttp://someurl.com"}]';
const createFile=file =>{
    // check if file exists
    if(!fs.existsSync(file)) {
        fs.writeFileSync(file,defaultPosts);
    }
};
 module.exports={
    createFolder,createFile
 };