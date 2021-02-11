AOS.init({
   once: true,
   duration: 1200
});

$("nav .menu").on("click", function () {
   $(this).toggleClass("toggle");
   $("nav ul").toggleClass("ulAction");
   $("nav li").each(function (i) {
      setTimeout(function () {
         $("nav li").eq(i).toggleClass("liAction");
      }, 120 * (i + 1));
   });

});

$("nav li a").on("click", function () {
   $("nav .menu").removeClass("toggle");
   $("nav ul").removeClass("ulAction");
   $("nav li").removeClass("liAction");
});



// => Form Validation
function validation() {
   // const alp = /^[a-zA-Z ]+$/;
   // const num = /^[0-9]+$/;
   // const email = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
   const fname = document.getElementById("fname");
   const message = document.getElementById("message");
   const errFname = document.getElementById("errFname");
   const errMes = document.getElementById("errMes");
   const name = fname.value;

   if (fname.value == "") {
      errFname.innerHTML = "* Required";
      fname.focus();
      return false;
   } else {
      errFname.innerHTML = "";
   }

   if (message.value == "") {
      errMes.innerHTML = "* Required";
      message.focus();
      return false;
   } else {
      errMes.innerHTML = "";
      Swal.fire(
         'Thanks ' + name,
         'Your Message Has Been Received',
         'success'
      )
      return false;
   }
}



// => Sweet Alert
document.querySelector(".About button").addEventListener("click", function () {
   Swal.fire(
      'Under Construction',
      '',
      'info'
   )
});

document.querySelector(".Skills button").addEventListener("click", function () {
   Swal.fire(
      'Under Construction',
      '',
      'info'
   )
});

document.querySelector(".Project .comm").addEventListener("click", function () {
   Swal.fire(
      'Coming Soon',
      '',
      'info'
   )
});