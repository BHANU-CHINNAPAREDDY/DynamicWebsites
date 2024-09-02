
function switchOff(){
    let bulb=document.getElementById("bulbImage");
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    let cat=document.getElementById("catImage");
    cat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";

    document.getElementById("switchStatus").textContent="Switched Off";

    document.getElementById("onSwitch").style.backgroundColor="#22c55e";
    document.getElementById("offSwitch").style.backgroundColor="#cbd2d9";
}

function switchOn(){
    let bulb=document.getElementById("bulbImage");
    bulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    let cat=document.getElementById("catImage");
    cat.src= "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";

    document.getElementById("switchStatus").textContent="Switched ON";

    document.getElementById("onSwitch").style.backgroundColor="#cbd2d9";
    document.getElementById("offSwitch").style.backgroundColor="#e12d39";

}