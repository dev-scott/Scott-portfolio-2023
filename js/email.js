const submitBtn = document.querySelector('.submitBtn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();


  SendMail();



});

function SendMail() {

    var params = {

        to_name: 'Dev scott',
        from_name:document.getElementById('fullName').value,
        message: document.getElementById('message').value,

    }
    emailjs.send("service_c64e4wx","template_rekwibr",params).then(function(res){


        // alert("Email Sent " + res.status)


    })

}