
//image gallery
let currentImg = 1;
function hoverswap() {
    let imgNum = this.id.charAt(3);
    document.querySelector('#large').src = "img/kda" + imgNum + ".jpg";
    currentImg = imgNum
}
//next button loop around
function next() {
    if (currentImg == 4) {
        currentImg = 1;
    }
    else {
        currentImg++;
    }
    document.querySelector('#large').src = "img/kda" + currentImg + ".jpg";

}
//prev button loop around
function prev() {
    if (currentImg == 1) {
        currentImg = 4;
    }
    else {
        currentImg--;
    }
    document.querySelector('#large').src = "img/kda" + currentImg + ".jpg";

}
//hoverswap listener
document.querySelector('#img1').addEventListener("mouseover", hoverswap);
document.querySelector('#img2').addEventListener("mouseover", hoverswap);
document.querySelector('#img3').addEventListener("mouseover", hoverswap);
document.querySelector('#img4').addEventListener("mouseover", hoverswap);

//form validation
function validateForm() {
    const email1 = document.getElementById('email1').value;
    const email2 = document.getElementById('email2').value;
    if (email1 !== email2) {
      alert("Email addresses do not match.");
      return false;
    }

    const mobile = document.getElementById('mobile').value;
    if (!/^08[567]\d{7}$/.test(mobile)) {
      alert("Invalid Irish mobile number.");
      return false;
    }

    return true;

}
//hamburger menu
function toggleMenu() {
    document.getElementById('navMenu').classList.toggle('show');
  }
