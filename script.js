const container = document.querySelector(".container"),
        pwShowHide = document.querySelectorAll(".showHidePw"),
        pwfields= document.querySelectorAll(".password"),
        signUp= document.querySelector(".signup-link"),
        login= document.querySelector(".login-link");

        // js code to show/hide password and change icon
        pwShowHide.forEach(eyeIcon =>{
            eyeIcon.addEventListener("click", ()=>{
                pwfields.forEach(pwfield =>{
                    if(pwfield.type ==="password"){
                        pwfield.type = "text";

                        pwShowHide.forEach(icon =>{
                            icon.classList.replace("uil-eye-slash", "uil-eye");
                        })
                    }else{
                        pwfield.type = "password";

                        pwShowHide.forEach(icon =>{
                            icon.classList.replace("uil-eye", "uil-eye-slash");
                        })
                    }
                })
            })
        })

        // js code to appear signup and login form
        signUp.addEventListener("click", ( )=>{
            container.classList.add("active");
        });
        login.addEventListener("click", ()=>{
            container.classList.remove("active");
        });
