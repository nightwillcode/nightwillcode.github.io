const carousel = document.getElementById("carousel");
const packages = document.getElementsByClassName("choice-packages");
const sizes = document.getElementsByClassName("choice-sizes");
const firstImg = carousel.querySelectorAll("img")[0];
const mousepad = document.getElementById("mousepad");
const paket = document.getElementById("paket");
const total = document.getElementById("total");

let isDragging = false, prevPagex, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 16;
let HargaMousepad;
let HargaPaket;
let HargaTotal;
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
let lebar;
let tinggi;


function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
window.onscroll = function() {myFunction()};


function ScrollForView(tujuan){
    const navigation = document.getElementsByClassName(tujuan);
    navigation[0].scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

Array.prototype.forEach.call(packages, function(list) {
    list.addEventListener("click", () => {

        Array.prototype.forEach.call(packages, function(list2) {
        list2.classList.remove("picked"); 
        list2.style.backgroundColor = "inherit";
        list2.style.borderColor = "inherit";
        list2.getElementsByClassName("harga")[0].style.color = "white";
    })
        list.classList.add("picked");
        list.getElementsByClassName("harga")[0].style.color = "#FF8730";        
        list.style.backgroundColor = "#FF8730";
        list.style.borderColor = "#FF8730";
        // const Text = document.getElementsByClassName("choice-packages picked")[0].children[3].innerHTML.substring(5);
        // HargaPaket=Harga(Text)
        // paket.innerHTML = Rupiah(HargaPaket, "+ Rp.");
        // HargaTotal = parseInt(HargaMousepad)+ parseInt(HargaPaket);
        // total.innerHTML = Rupiah(String(HargaTotal), "Rp.");
    })
});

Array.prototype.forEach.call(sizes, function(list) {
    list.addEventListener("click", () => {

        Array.prototype.forEach.call(sizes, function(list2) {
        list2.classList.remove("picked");
        list2.style.backgroundColor = "inherit";
        list2.style.borderColor = "inherit";
        list2.getElementsByClassName("harga")[0].style.color = "white";
        })

        list.classList.add("picked");
        list.getElementsByClassName("harga")[0].style.color = "#0080FF";
        const ukuran = list.getElementsByClassName("sizes")[0].innerHTML;
        tinggi = ukuran.substring(0,3);
        lebar = ukuran.substring(4,7);

        const foto = document.getElementById("fotos");
        if(tinggi=="400"){
            foto.style.paddingTop= "5%";
            foto.style.paddingBottom= "5%";
        } else{
            foto.style.paddingTop= "8.25%";
            foto.style.paddingBottom= "8.25%";
        }

        if(lebar=="900"){
            foto.style.paddingLeft= "5%";
            foto.style.paddingRight= "5%";
        } else{
            foto.style.paddingLeft= "10%";
            foto.style.paddingRight= "10%";
        }

        
        
        list.style.backgroundColor = "#0080FF";
        list.style.borderColor = "#0080FF";
        // const Text = document.getElementsByClassName("choice-sizes picked")[0].children[3].innerHTML.substring(3);
        // HargaMousepad = Harga(Text);
        // mousepad.innerHTML = Rupiah(HargaMousepad, "Rp.");
        // HargaTotal = parseInt(HargaMousepad)+ parseInt(HargaPaket);
        // total.innerHTML = Rupiah(String(HargaTotal), "Rp.");
    })
});


function Rupiah(Text,Rp){
    if(Text.length>3){
        return Rp+Text.substring(0,Text.length-3)+"."+Text.substring(Text.length-3);
    } else {
        return Rp+Text.substring(Text.length-3);
    }
}

function Harga(Text){
    if(Text.length>4){
        return Text.substring(0,Text.length-4)+Text.substring(Text.length-3);
    } else {
        return Text;
    }
}

sizes.item(0).click();
packages.item(0).click();
const dragStop = (e) => {
    carousel.classList.remove("dragging");
    isDragging = false;
}

const dragStart = (e) => {
    carousel.classList.add("dragging");
    isDragging = true;
    prevPagex = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPagex;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}   
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);