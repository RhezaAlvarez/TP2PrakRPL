const DB_USER = [
    {
        username: "rheza",
        password: "1234"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const inputConfirmPassword = document.querySelector("#confirmPassword");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputUsername = inputUsername.value;
    const valueInputConfirmPassword = inputConfirmPassword.value;
    //console.log(valueInputUsername);
    //console.log(valueInputPassword);
    //console.log(valueInputConfirmPassword);

    let confirm = 0;
    if(valueInputPassword === valueInputConfirmPassword){
        confirm = 1;
    }

    const warninglsg = document.querySelector(".warning");

    console.log(warninglsg.className);

    if(confirm === 0){
        warninglsg.className = "text-danger";
    }
    else if(confirm === 1){
        DB_USER.map((data) => {
            data.username = valueInputUsername;
            data.password = valueInputPassword;
        })
        alert("Registrasi anda berhasil");
    }
})

/*console.log(inputUsername);
console.log(inputPassword);
console.log(buttonSubmit);*/