let elem = document.getElementById("elemId");
let clientHeight = elem.clientHeight;
let clientWidth = elem.clientWidth;

elem.addEventListener("click", (e) => {
    e.target.innerHTML = "Welcome";
    let clientXY = "clientX:  " + clientWidth  + "**** clientY: " + clientHeight;
    document.getElementById("client").innerHTML = clientXY;
  });
