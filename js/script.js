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
   const alp = /^[a-zA-Z ]+$/;
   const num = /^[0-9]+$/;
   const mail = /^\w+[\+\.\w-]*@([\w-]+\.)*\w+[\w-]*\.([a-z]{2,4}|\d+)$/i;
   const fname = document.getElementById("fname");
   const lname = document.getElementById("lname");
   const phone = document.getElementById("phone");
   const email = document.getElementById("email");
   const message = document.getElementById("message");
   const errFname = document.getElementById("errFname");
   const errLname = document.getElementById("errLname");
   const errPhone = document.getElementById("errPhone");
   const errEmail = document.getElementById("errEmail");
   const errMes = document.getElementById("errMes");
   const name = fname.value;

   // First Name
   if (fname.value == "") {
      errFname.innerHTML = "* Required";
      fname.focus();
      return false;
   } else {
      errFname.innerHTML = "";
   }

   if (!fname.value.match(alp)) {
      errFname.innerHTML = "* Invalid";
      fname.focus();
      return false;
   } else {
      errFname.innerHTML = "";
   }


   // Last Name
   if (lname.value == "") {
      errLname.innerHTML = "* Required";
      lname.focus();
      return false;
   } else {
      errLname.innerHTML = "";
   }

   if (!lname.value.match(alp)) {
      errLname.innerHTML = "* Invalid";
      lname.focus();
      return false;
   } else {
      errLname.innerHTML = "";
   }


   // Phone
   if (phone.value == "") {
      errPhone.innerHTML = "* Required";
      phone.focus();
      return false;
   } else {
      errPhone.innerHTML = "";
   }

   if (!phone.value.match(num)) {
      errPhone.innerHTML = "* Invalid";
      phone.focus();
      return false;
   } else {
      errPhone.innerHTML = "";
   }

   if (phone.value.length < 10 || phone.value.length > 13) {
      errPhone.innerHTML = "* Invalid";
      phone.focus();
      return false;
   } else {
      errPhone.innerHTML = "";
   }


   // Email
   if (email.value == "") {
      errEmail.innerHTML = "* Required";
      email.focus();
      return false;
   } else {
      errEmail.innerHTML = "";
   }

   if (!email.value.match(mail)) {
      errEmail.innerHTML = "* Invalid";
      email.focus();
      return false;
   } else {
      errEmail.innerHTML = "";
   }


   // Message
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
      fname.value = "";
      lname.value = "";
      phone.value = "";
      email.value = "";
      message.value = "";
      return false;
   }
}



// => Sweet Alert
document.querySelector(".Skills button").addEventListener("click", function () {
   Swal.fire(
      'Under Construction',
      '',
      'info'
   )
});