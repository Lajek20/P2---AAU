document.addEventListener("DOMContentLoaded", (event) => { console.log('DOM is ready.')});
//function drawCanvas() {
    const canvas = document.querySelector('canvas'); //setup canvas
    //const canvas = document.getElementById('canvas'); Alternativ canvas setup
    const ctx = canvas.getContext('2d');
    //const ctx = ctx.getContext('2d');?

    const width = canvas.width = 381; // = picPixX
    //'window.innerWidth';
    const height = canvas.height = 415; // = picPixY
    //'window.innerHeight';
//}


//kode test -str
/*function drawImageMap() {
    const ctx = document.getElementById('canvas');
    if (ctx) {
    const ctx = canvas.getContext('2d');
    //Loading of the home test image - img1
    const mapImg = new Image();
    mapImg.src = '../Img/MapGraphicBackground.png';
    //drawing of the test image - img1
    mapImg.onload = function () {
    //draw background image
    ctx.drawimage(mapImg, 0, 0);
    //draw a box over the top
    //ctx.fillStyle = "rgba(200, 0, 0, 0.5)";
    //ctx.fillRect(0, 0, 500, 500);
};
}
}*/
//kode test -end

function node(lon, lat, color, size) { //node constructor
    //this.lon = lon; //may not be necessary
    //this.lat = lat; //may not be necessary
    this.color = blue;
    this.size = 10;
}

function mapGraphics(coArray) { //draw map with nodes and path - (coArray, pathArray)

    let topLeftCor = [55.657828, 12.530575]; // MapPic-corners
    let topRightCor = [55.657828, 12.539479]; // longitude = x, latitude = y
    let botLeftCor = [55.653083, 12.530575]; //These co's are soo not accurate #lazy
    //last corner not needed

    let deltaLon = topRightCor[0] - topLeftCor[0]; //longitude span
    let deltaLat = botLeftCor[1] - topLeftCor[1]; //latitude span

    const picPixX = 415; //Background map-picture dimensions i pixels
    const picPixY = 381; //Background map-picture dimensions i pixels

    let pixLon = picPixX / deltaLon; //pixels per degree of longitude
    let pixLat = picPixY / deltaLat; //pixels per degree of latitude

    //coArray = [['lon, lat'], ['lon, lat'], ['lon, lat'], ['...']]; //array with geo-coordinates
    coArray = [[12.538591, 55.657461], [12.538172, 55.656756], [12.537041, 55.656960], [12.536541, 55.656082], [12.537381, 55.655559]]; //array with geo-coordinates
    pathArray = [[12.538591, 55.657461], [12.538172, 55.656756], [12.537041, 55.656960], [12.536541, 55.656082], [12.537381, 55.655559]]; //array with dijktras best path
    pixelCoArray = [[""]]; //array with pixel-coordinates

    for (let i = 0; i < coArray.length; i++) { //finds new coordinates for nodes in array
        let tempDeltaLon = coArray[i][0] - topLeftCor[0]; //diffenrence i longitude
        let tempDeltaLat = coArray[i][1] - botLeftCor[1]; //difference in latitude
        let nodeNewCoX = Math.floor(tempDeltaLon * pixLon); //new pixel coordinate
        let nodeNewCoY = Math.floor(tempDeltaLat * pixLat); //new pixel coordinate

        pixelCoArray[i][0] = nodeNewCoX; //not neccesary
        pixelCoArray[i][1] = nodeNewCoY; // -``-

        node.prototype.draw = function() { //draw nodes
            ctx.beginPath();
            ctx.fillStyle = this.color;
            ctx.arc(nodeNewCoX, nodeNewCoY, this.size, 0, 2 * Math.PI); // last two parameters specify start and end degrees for drawing circle
        }
    }

    for (let j = 0; j < (pathArray.length - 1); j++) { //draw path
        ctx.beginPath();
        ctx.moveTo(pathArray[j][0], pathArray[j][1]);
        ctx.lineTo(pathArray[j + 1][0], pathArray[j + 1][1]);
        ctx.stroke();
    }
}

drawImageMap();
mapGraphics(coArray);