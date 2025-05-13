document.getElementById("contactForm").addEventListener("submit" ,function(e){
    const name=document.getElementById("name").value.trim();
    const gmail=document.getElementById("email").value.trim();
    const phone=document.getElementById("phoneno").value.trim();
    const message=document.getElementById("message").value.trim();
    const nameRegx=/^[A-Za-z\s]+$/;
    const phoneRegx=/^[0-9]{10}$/;
    const gmailRegx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!nameRegx.test(name))
    {
        alert("The name field should only have alphabets and spaces are allowed");
        e.preventDefault();
        return;
    }
    if(phone==="")
    {
        alert("phone number is required");
        e.preventDefault();
        return;
    }
    if(!phoneRegx.test(phone))
    {
        alert("phone number should only contain digits")
        e.preventDefault();
        return;
    }
    if(phone.length!==10)
    {
        alert("Phone number should contain exactly 10 digits");
        e.preventDefault();
        return;
    }
    
    if(!gmailRegx.test(gmail))
    {
        alert("please enter valid email id");
        e.preventDefault();
        return;
    }
    const info={
    userName:name,
    userPhone:phone,
    userEmail:gmail,
    message:message
    };
    console.log("collected data:",info);
    console.log("successfull");
    });