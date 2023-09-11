// VERIFY LOGIN
		function verifyLogin()
		{
			var loginUsername=document.getElementById("login-username").value;
			var loginPassword=document.getElementById("login-password").value;
			var usernameCheck=/^[a-zA-Z ]+$/
			var passwordCheck = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
			if(!loginPassword.match(passwordCheck)&&(loginUsername==""||loginUsername.length<3))
				{
					alert('please enter valid username and password');
					return false;
				}
			if(loginUsername==""||loginUsername.length<3)
			{
				alert('please enter a valid name');
				return false;
			}
			if(!loginUsername.match(usernameCheck))
			{
				alert('name must contain only alphabets');
				return false;

			}
			if(!loginPassword.match(passwordCheck))
			{  
				 alert("enter a strong password");
				return false;
			}
				return true;
		}

// UNDERLINING ACTIVE NAV-BAR TAB
	$(document).ready(function () {
	  $(".nav-item").on("click", function () {
	    $(".tab").removeClass("active-tab");
	    $(".nav-item").removeClass("active-nav-item");

	    var tabId = $(this).data("tab-id");
	    $("#" + tabId).addClass("active-tab");
	    $(this).addClass("active-nav-item");
	  });
	});
var dashboard=document.querySelector('.dashboard');
// UPDATING CARD VALUES
 function updateValues(inputId,cardId){
		    var newValue=document.getElementById(inputId).value;
		    document.getElementById(cardId).textContent=newValue;
	 }
// OPENING MODAL
	document.querySelectorAll('.open-modal').forEach(function (elem) {
    elem.addEventListener('click', function () {
        var modalId = elem.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
            dashboard.classList.toggle('modal-active');
        	}
    	});
	});
// CLOSING MODAL
	document.querySelectorAll('.close-modal-btn1').forEach(function (elem) {
	    elem.addEventListener('click', function () {
	        var modalId = elem.getAttribute('data-modal');
	        var modal = document.getElementById(modalId);
	        if (modal) {
	            modal.close();
	          	dashboard.classList.toggle('modal-active');
	        }
	    });
	});
	document.querySelectorAll('.close-modal-btn2').forEach(function (elem) {
	    elem.addEventListener('click', function () {
	        var modalId = elem.getAttribute('data-modal');
	        var modal = document.getElementById(modalId);
	        if (modal){
	            modal.close();
	            dashboard.classList.toggle('modal-active');
	        }
	    });
	});





