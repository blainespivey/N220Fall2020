let objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];

   for(var i = 0; i < objects.length; i++) {
    var curObjects = objects[i];

    var newEl = document.createElement("div");

    newEl.style.backgroundColor = curObjects.color;
    newEl.style.height = curObjects.height;
    newEl.style.width = curObjects.width;

    document.body.appendChild(newEl);
}