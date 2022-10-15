function userRegistorValidation() {
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     var mobilenumber = document.getElementById("mobilenumber").value;
     var language = document.getElementById("language").value;
     var gender = document.getElementById("gender").value;

     const regex_pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     const RegExp = ("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");


     if (regex_pattern.test(email) == "") {
          alert('The email address is not valid');
          return false;
     }
     else if (password == "") {
          alert("Please Enter Your Password")
          return false;
     }
     else if (password.length < 8) {
          alert("Password length must be atleast 8 characters")
          return false;
     }
     else if (mobilenumber == "") {
          alert("Please Enter Your Mobile Number")
          return false;
     }
     else if (mobilenumber.length < 10) {
          alert("Please Enter Your Mobile Number")
          return false;
     }
     else if (language == "") {
          alert("Please Select Your Language")
          return false;
     }
     else if ( gender == ""){
          alert("Please Select Your Gender")
     }
     else {
          alert("Successfully Registored")
     }
     add_row()

}
function add_row() {
     var new_email = document.getElementById("email").value;
     var new_password = document.getElementById("password").value;
     var new_mobilenumber = document.getElementById("mobilenumber").value;
     var new_language = document.getElementById("language").value;
     var new_gender = document.getElementById("gender").value;

     var table = document.getElementById("data_table");
     var table_len = (table.rows.length - 1);
     var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='email_row" + table_len + "'>" + new_email + "</td><td id='password_row" + table_len + "'>" + new_password + "</td><td id='mobilenumber_row" + table_len + "'>" + new_mobilenumber + "</td><td id='language_row" + table_len + "'>" + new_language + "</td><td id='gender_row" + table_len + "'>" + new_gender + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";
}

function edit_row(no) {
     document.getElementById("edit_button" + no).style.display = "none";
     document.getElementById("save_button" + no).style.display = "block";

     var email = document.getElementById("email_row" + no);
     var password = document.getElementById("password_row" + no);
     var mobilenumber = document.getElementById("mobilenumber_row" + no);
     var language = document.getElementById("language_row" + no);
     var gender = document.getElementById("gender_row" + no);


     var email_data = email.innerHTML;
     var password_data = password.innerHTML;
     var mobilenumber_data = mobilenumber.innerHTML;
     var language_data = language.innerHTML;
     var gender_data = gender.innerHTML;


     email.innerHTML = "<input type='email' id='email_text" + no + "' value='" + email_data + "'>";
     password.innerHTML = "<input type='password' id='password_text" + no + "' value='" + password_data + "'>";
     mobilenumber.innerHTML = "<input type='mobilenumber' id='mobilenumber_text" + no + "' value='" + mobilenumber_data + "'>";
     language.innerHTML = "<option value='" + language_data + "'>Malayalam</option><option value='" + language_data + "'>English</option>";
     gender.innerHTML = "<input type='gender' id='gender_text" + no + "' value='" + gender_data + "'>";
}

function save_row(no) {
     var email_val = document.getElementById("email_text" + no).value;
     var password_val = document.getElementById("password_text" + no).value;
     var mobilenumber_val = document.getElementById("mobilenumber_text" + no).value;
     var language_val = document.getElementById("language_text" + no).value;
     var gender_val = document.getElementById("gender_text" + no).value;


     document.getElementById("email_row" + no).innerHTML = email_val;
     document.getElementById("password_row" + no).innerHTML = password_val;
     document.getElementById("mobilenumber_row" + no).innerHTML = mobilenumber_val;
     document.getElementById("langauge_row" + no).innerHTML = language_val;
     document.getElementById("gender_row" + no).innerHTML = gender_val;

     document.getElementById("edit_button" + no).style.display = "block";
     document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
     document.getElementById("row" + no + "").outerHTML = "";
}
function loginPage() {
     alert("Login Page")
     window.location.href = "loginpage.html"
}
function loginValidation() {
     var email = document.getElementById("email").value;
     var password = document.getElementById("password").value;
     verifiedemail = "sinanruzz9@gmail.com"
     verifiedpassword = "9544102487"

     if ( email == "") {
          alert('The email address is not valid');
          return false;
     }
     else if( password == "") {
          alert("Please Enter Your Password")
          window.location.href = "index.html"
     }
}
