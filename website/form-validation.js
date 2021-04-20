const form = document.getElementById('form')
const last_name = document.getElementById('lastname')
const first_name = document.getElementById('firstname')
const middle_name = document.getElementById('middlename')
const emailadd = document.getElementById('email')
const phone_number = document.getElementById('phone')
const birth_date = document.getElementById('birthdate')
const civil_stat = document.getElementById('civilstat')
const address = document.getElementById('address')
const voter_id = document.getElementById('votersid')
const pass_word = document.getElementById('password')
const password_two = document.getElementById('passwordtwo')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs(){
    const last_nameValue = last_name.value.trim();
    const first_nameValue = first_name.value.trim();
    const middle_nameValue = middle_name.value.trim();
    const emailaddValue = emailadd.value.trim();
    const phone_numberValue = phone_number.value.trim();
    const birth_dateValue = birth_date.value.trim();
    const civil_statValue = civil_stat.value.trim();
    const addressValue = address.value.trim();
    const voter_idValue = voter_id.value.trim();
    const passwordValue = pass_word.value.trim();
    const password_twoValue = password_two.value.trim();

   
        if(last_nameValue == ''){
                setErrorfor(last_name, 'Lastname cannot be blank');
             }

             else {
                setSuccessFor(last_name);
             }


        if(first_nameValue == ''){
            setErrorfor(first_name, 'Firstname cannot be blank');
        }
        

        if(middle_nameValue == ''){
            setErrorfor(middle_name, 'Middlename cannot be blank');
        }

        if(phone_numberValue == ''){

            setErrorfor(phone_number, 'Phone Number cannot be blank');
        }

        if (birth_dateValue == '') {
            setErrorfor(birth_date, 'Birthdate cannot be blank');
        }

        if (civil_statValue == ''){

            setErrorfor(civil_stat,'Civil Status cannot be blank');

        }

        if (addressValue == ''){
            setErrorfor(address, 'Address cannot be blank');
        }

        if (voter_idValue == '') {
            setErrorfor(voter_id, 'Voter ID cannot be blank ');
            
        }

        if (passwordValue == '')
         {
            setErrorfor(pass_word, 'Password cannot be blank' );
        }

        else{

        
        setSuccessFor(first_name);
        setSuccessFor(middle_name);
        setSuccessFor(phone_number);
        setSuccessFor(birth_date);
        setSuccessFor (civil_stat);
        setSuccessFor(address);
        setSuccessFor(voter_id);
        setSuccessFor(pass_word);
        setSuccessFor(password_two);
        }
           

        if(emailaddValue == ''){
            setErrorfor(emailadd, 'Email cannot be blank');
        }
            else if(!Email(emailaddValue)){
                setErrorfor(emailadd, 'Invalid email');

            }

            else {
                setSuccessFor(emailadd);
            }


            if (password_twoValue == '') {
                setErrorfor(password_two, 'Re-type your password');
                
            }

        else if (passwordValue !== password_twoValue) {
            setErrorfor(password_two, 'Password does not match');
        }

       





}


function setErrorfor(input,message){
const formControl = input.parentElement;
const small = formControl.querySelector('small');

small.innerText = message;
formControl.className = 'form-control error';
}


function setSuccessFor(input){
const formControl = input.parentElement;
formControl.className = 'form-control success';

}

function Email(emailadd) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailadd);
}

