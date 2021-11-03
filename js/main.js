// loading-screen
$(document).ready(()=>{
  $(".loader").fadeOut(1000,()=>{
    $("#load").fadeOut(1000,()=>{
      $("#load").remove();
      $("body").css("overflow","auto")
    });
  });
});

// loading-screen

// 3an awl mayft7 browser bkon gowa
let navWidth = $("#navBar").innerWidth();
$("#navBar").animate({ left: `-${navWidth}` }, 0);

// b3den yzhra
$("#myOpen").click(() => {
  $("#navBar").animate({ left: "0" }, 1000);
  $(".hder-content").animate({ left: "45%" }, 1000);
});

//yd5l gowa
$("#myClose").click(() => {
  let navWidth = $("#navBar").innerWidth();
  $("#navBar").animate({ left: `-${navWidth}` }, 1000);
  $(".hder-content").animate({ left: "35%" }, 1000);
});


$('a[href^="#"]').click((e)=>{
  // console.log(e.target);
  let aHerf = $(e.target).attr('href');
  let sectionOffset = $(aHerf).offset().top;
  $('html,body').animate({scrollTop:sectionOffset},50);

});
//date & counter

function displayDate() {
  let fullDate = new Date();

  document.getElementById("counterDay").innerHTML = fullDate.getDate() + " D";
  document.getElementById("counterHours").innerHTML =
    fullDate.getHours() + " H";
  document.getElementById("counterMiuntes").innerHTML =
    fullDate.getMinutes() + " M";
  document.getElementById("counterSecond").innerHTML =
    fullDate.getSeconds() + " s";
};

setInterval(() => {
  displayDate();
}, 100);


//footer section

$("h4").click((e) => {
  let element = $(e.target);
  $(element).next().slideToggle(1000);

  $("blockquote").slideUp(1000);
  $("blockquote").not($(element).next()).slideUp(1000);
  console.log(element);
});

let x = Number($("#count").html());

$("textarea").keypress(() => {
  console.log("hello");
  if (x == 0) {
    $("#count").html("your characters is finish");
  } 
  else {
    x--;
    $("#count").html(x);
    console.log(x);
  };
});

$("textarea").keydown((e) => {
  console.log("hello");

  if (e.code == "Backspace" && x < 100) {
    x++;
    $("#count").html(x);
    console.log(x);
  };
});
