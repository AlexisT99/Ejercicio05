var mongoose = require("mongoose");
var schema = require("./blogs-schema");

mongoose.connect("mongodb://localhost:27017/eje05");

var Blog = mongoose.model("Blog", schema, "blog");

let blog = new Blog({
  title: "Mi blog",
  author: "Alexis Torres",
  body:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus blandit metus vel placerat. Nulla dictum tristique pulvinar. Nam in faucibus massa. Aenean suscipit eros massa. Nullam ante mauris, laoreet tristique est sit amet, efficitur sodales ante. Aenean blandit ligula ac dui eleifend, ut gravida ante sodales. Aenean turpis arcu, tempor ac turpis eget, faucibus efficitur ante.",
  comments: [
    {
      body: "Hola mi comentarios",
      date: "2021/02/20",
    },
    {
      body: "Hola mi comentarios 2",
      date: "2021/02/21",
    }
  ],
  meta:{
      votes: 4,
      favs: 3
  }
});

blog.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Guardado correctamente");
    process.exit(0);
});
