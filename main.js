function getJson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if (xhr.readyState===4 && xhr.status == "200"){
            callback(xhr.responseText);
        }
    }
    xhr.send();
}
// calling Function
getJson("js/data.json",function(text){
    var data =JSON.parse(text)
    console.log(data)
    displayData(data.data)
    ven(data.Trainers)

})

var bodyElement = document.querySelector("body");
var maindiv = document.createElement("div");
maindiv.classList.add("maindiv");
bodyElement.appendChild(maindiv);


function displayData(info){
    var leftdiv = document.createElement("div");
    leftdiv.classList.add("leftdiv");
    maindiv.appendChild(leftdiv);
    var img = document.createElement("img");
    img.src = info.img;
    leftdiv.appendChild(img);
    var h1 = document.createElement("h1");
    h1.textContent = info.name;
    leftdiv.appendChild(h1);
    var h3 = document.createElement("h3");
    h3.textContent ="COURSES:";
    leftdiv.appendChild(h3);
    for (let i in info.courses) {
        var span = document.createElement("span");
        span.textContent = info.courses[i];
        leftdiv.appendChild(span);
    }

}

function ven(usa){
    var rightdiv = document.createElement("div");
    rightdiv.classList.add("rightdivflex");
    maindiv.appendChild(rightdiv);

    for (let i in usa){
        var vdiv = document.createElement("div");
        vdiv.classList.add("vdiv");
        rightdiv.appendChild(vdiv);
        var h2 = document.createElement("h2");
        h2.textContent = usa[i].Name;
        vdiv.appendChild(h2);
        var p = document.createElement("p");
        p.textContent = usa[i].PhoneNumber;
        vdiv.appendChild(p);
        var h4 =document.createElement("h4");
        h4.textContent = usa[i].w;
        vdiv.appendChild(h4);
        var h5 = document.createElement("h5");
        h5.textContent = usa[i].Salary;
        vdiv.appendChild(h5);

        var img = document.createElement("img");
        img.src = usa[i].img;
        img.classList.add("rightImage");
        rightdiv.appendChild(img);
    }
}