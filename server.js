 const express= require("express");
 const fs = require("fs");
  const {createFile,createFolder}=require("./utils");
  const postsData=require("./public/posts.json");

  const app= express();
  console.log(postsData);
  // routing
  
   createFile("public/posts.json", "Content here");
   app.get("/", function(req,res){
      res.send("Home Route");
   })
   app.get("/posts/:id",function(req,res){
     const id=req.params.id;
     const postFound=postsData.find(post=>{
        return post.id===id;
     });
     console.log(postFound);
   });
   
   // "
   app.put("/posts/:id",function(req,res){
       const id=req.params;
        console.log(id);
    res.send("Update posts route");
   });
 
  app.delete("/posts/:id",function(req,res){
     res.send(" Delete posts route");
  });
  app.get("posts/:id",function(req,res){
    res.send("single posts route...");
});
  app.listen(9000,function(){
     console.log("Server is up nd running");
  })