@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&family=Poppins:wght@300&family=Roboto:wght@100&display=swap');

*{
    padding: 0px;
    margin: 0px;
}

.first-div{
    background-color: rgb(81, 22, 184);
    display: flex;
    justify-content: space-evenly;
    height: 50px;
    align-items: center;
 
}
.first-div>div>.icons-border{
   border-right: 1px solid grey;
   padding: 10px;
}
.fa-brands,.fa-solid {
font-size: 14px;
color: rgb(255, 255, 255);
cursor: pointer;
}
.top-contact>p{
    display: inline-block;
    padding: 5px;
    font-size: 12px;
    
}
.number{
    border-right: 1px solid grey;
    margin-right: 10px;
    color: white;

}
.email{
    color: white;
}

.top-contact{
display: flex;
justify-content: center;
align-items: center;
}
.first-div-btn{
    background-color: rgb(161, 236, 12);
    border-radius: 20px;
    padding: 10px;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
}

/* Main Menu */

 .main-menu{
    display: flex;
    /* background-color: aqua; */
    justify-content: space-around;
    align-items: center;
    height: 70px;
    /* position: sticky;
    top: 0px; */
}
.main-menu>div>img{
    width: 130px;
    height: 130px;
}
.un-order{
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-menu>.list>ul>li{
padding: 20px;
list-style: none;
margin: 5px;
} 

.main-menu>.list>ul>li:hover{
    background-color: rgb(164, 213, 14);
    /* padding: 20px; */
    cursor: pointer;
}

#buy-now{
    background-color: rgb(164, 213, 14);
    padding: 20px;
}
.fa-magnifying-glass{
    background-color: rgb(164, 213, 14);
    padding: 20px;
}



/* Hero Section */
.hero-section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
   
}
.hero-section:before{
    content: "";
    top: 120px;
    left: 0px;
    width: 100%;
    position: absolute;
    background-image: url("Public/Hero-bg.jpg");
    background-color: rgb(31, 49, 49);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 20%;
    z-index: -1;

}


.heading-hero{
    width: 70%;
    border-left: 5px solid grey;
    padding: 10px;
    
}
.heading-hero>h2{
    font-size: 1rem;
    padding: 10px;
}
.heading-hero>h1{
    font-size: 3rem;
    padding: 10px;
}
.heading-hero>p{
    padding-top: 10px;
}
.button{
    background-color: rgb(161, 236, 12);
    border-radius: 20px;
    padding: 15px;
    outline: none;
    border: none;
    cursor: pointer !important;
    font-size: 12px;
    font-weight: bold;
}




/* Third-section */

.main-third{
    width: 100%;
    height: 150px;
    background-color: rgb(81, 22, 184);
    display: flex;
    justify-content: center;
    align-items: center;
}

.third-section{
    display: flex;
    width: 80%;
}
.third-section>div>.fa-solid{
    font-size: 25px;
    margin-right: 10px;
}

.third-section>div>p{
    display: inline-block;
    padding: 5px;
    font-size: 20px;   
    margin-right: 50px;
    color: white;
}
.para-text{
    font-size: 10px !important;
}



/* About Us Section */

.about-us-main{
    /* background-color: aqua; */
display: flex;
justify-content: space-around;
align-items: center;
    /* width: 80%; */
}
.about-us-sub{
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
}
.about-left>h2,h4,p,button{
    padding: 10px;
}
.about-left>h2{
    font-size: 2rem;
}

.about-left{
    width: 50%;
}
.about-right{
    width: 30%;
}
.about-right>img{
    width: 400px;
    height: 400px;

}
.about-right{
    position: relative;
}

.img-bg{
    border: 5px solid grey;
    height: 50px;
    width: 400px;
    position: absolute;
    top: 340px;
    z-index: -1;
    left: 0px;
}


/* Service Section */

.service-section{
    height: 700px;
    justify-content: space-around;
    align-items: center;
    color: white;
   
}
.service-section::before{
  
    content: "";
    position: absolute;
    padding-top: 100px;
    background-image: url("./Public/tech-bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 700px;
    width:100%;
    z-index: -1;
    /* opacity: 40%; */
}
.service-heading{
    width: 80%;
    margin-left: 120px;
    padding-top: 70px;
}
.service-box{
    /* background-color: black; */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
.service-box>div>img{
    width: 300px;
    width: 300px;
}
.service-box>div{
    padding-right: 35px;
    padding-top: 35px;
    padding-bottom: 35px;
}
.service-box>div>h1{
    text-align: center;
    color: rgb(255, 255, 255);
}

/* Footer */



footer {
    color: black;
    padding: 20px;
    text-align: center;
    margin-top: 100px;
}

.footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.footer-links li {
    margin: 0 10px;
   
}

.footer-links li:hover{
    color:rgb(161, 236, 12);
    background-color: none !important;
}
.footer-links a {
    text-decoration: none;
    color: black;
    font-weight: bold;
}
.footer-links a:hover{
    color:rgb(161, 236, 12);
    background-color: none !important;
}


.footer-social {
    margin-top: 20px;
}

.footer-social a {
    display: inline-block;
    margin: 0 10px;
    color: black;
    text-decoration: none;
    font-size: 20px;
}





/* Global Settings */
h1,h2,h4{
    font-family: 'Playfair Display', serif;
}
p{
    font-family: 'Poppins', sans-serif;
}





/* Media Query for Tablets and Mobile */



@media only screen and (max-width: 1210px) {

    body{
        overflow: none;
    }
    .first-div{
        background-color: rgb(81, 22, 184);
        display: flex;
        justify-content: space-evenly;
        height: 50px;
        align-items: center;
        overflow: none;
    }
    .first-div>div>.icons-border{
        border: none;
       padding: 10px;
    
    }
    .fa-brands,.fa-solid {
    font-size: 14px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    }
    .top-contact>p{
        display: inline-block;
        padding: 5px;
        font-size: 12px;
        
    }
    .number{
        border: none;
        margin-right: 10px;
        color: white;
    
    }
    .email{
        color: white;
    }
    
    .top-contact{
    display: flex;
    justify-content: center;
    align-items: center;
    }
    .first-div-btn{
        background-color: rgb(161, 236, 12);
        border-radius: 20px;
        padding: 10px;
        outline: none;
        border: none;
        cursor: pointer;
        font-size: 12px;
    }

    .un-order{
        display: none;
    }

    /* About Us Section */

.about-us-main{
    width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 25px;
overflow: none;
}
.about-us-sub{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    text-align: center;
}
.about-left>h2,h4,p,button{
    padding: 10px;
}
.about-left>h2{
    font-size: 2rem;
}

.about-left{
    width: 100%;
}
.about-right{
    width: 100%;
}
.about-right>img{
    width: 400px;
    height: 400px;
    /* margin: 0px auto; */
    /* background-color: red; */
text-align: center;
}
/* .about-right{
    position: relative;
} */

.img-bg{
    border: 5px solid grey;
    height: 50px;
    width: 400px;
    position: absolute;
    top: 340px;
    z-index: -1;
    left: 0px;
    display: none;
}


/* Third Section */
.main-third{
    width: 100%;
    height: 200px;
    background-color: rgb(81, 22, 184);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    overflow: none;
}

.third-section{
    display: flex;
    width: 80%;
}
.third-section>div>.fa-solid{
    font-size: 25px;
    margin-right: 10px;
}

.third-section>div>p{
    display: inline-block;
    padding: 5px;
    font-size: 20px;   
    margin-right: 50px;
    color: white;
}
.para-text{
    font-size: 10px !important;
}

/* Service Section */

.service-section {
    height: auto; /* Adjust height to fit content */
    flex-direction: column; /* Stack items vertically */
    padding: 50px 20px; /* Add some padding for better spacing */
    overflow: none;
}

.service-section::before {
    content: ""; /* Keep the background for larger screens */
    display: none;
}

.service-heading {
    width: 100%; /* Full width for better readability */
    margin-left: 0; /* Remove left margin */
    text-align: center; /* Center the text */
    padding-top: 30px; /* Adjust padding for better spacing */
    color: black;
    margin-bottom: 20px;
}

.service-box > div {
    padding: 20px; /* Adjust padding for better spacing */
    color: black;
}


.service-box > div > img {
    width: 100%; /* Make images responsive within their containers */
    max-width: 300px; /* Limit maximum width for larger screens */
    height: auto;
}
.service-box>div>h1{
    color: black;
}



/*
/* Third Section */
.main-third {
    height: auto; /* Adjust height to fit content */
   
}

.third-section {
    flex-direction: column; /* Stack items vertically */
    align-items: center; /* Center items */
   
}

.third-section > div {
    text-align: center; /* Center the text within the div */
    margin-bottom: 20px; /* Add spacing between items */
}

.third-section > div > .fa-solid {
    margin-right: 0; /* Remove right margin for better alignment */
    margin-bottom: 10px; /* Add spacing between icon and text */
    padding-top: 20px;
}

.third-section > div > p {
    margin-right: 0; /* Remove right margin for better alignment */
}

.para-text {
    font-size: 14px; /* Adjust font size for better readability */
}



@media only screen and (max-width: 559px) {

    .first-div{
        background-color: rgb(81, 22, 184);
        display: flex;
        justify-content: space-evenly;
        height: 50px;
        align-items: center;
        overflow: none;
        display: none;
    }
}

footer {
    color: black;
    padding: 20px;
    text-align: center;
    margin-top: -50px;
    overflow: none;
}

.footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.footer-links li {
    margin: 0 10px;
   
}

.footer-links li:hover{
    color:rgb(161, 236, 12);
    background-color: none !important;
}
.footer-links a {
    text-decoration: none;
    color: black;
    font-weight: bold;
}
.footer-links a:hover{
    color:rgb(161, 236, 12);
    background-color: none !important;
}


.footer-social {
    margin-top: 20px;
}

.footer-social a {
    display: inline-block;
    margin: 0 10px;
    color: black;
    text-decoration: none;
    font-size: 20px;
}
}


@media only screen and (max-width: 767px) {
  /* Toggle Button CSS */
  .nav-menu {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 135px;
    left: 0px;
    width: 100%;
    background-color: #ffffff;
    /* text-align: center; */
    color: black;
}
.bar {
    width: 35px;
    height: 1px;
    background-color: #ff0202;
    margin: 6px 0px;
    border: 1px solid white;
    /* text-align: center; */
    display: flex;
    /* justify-content: center; */
    
}

.nav-menu.show{
    display: flex;
}
.toggle-btn {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    justify-content: space-between;
    margin-bottom: 0px;
    margin-top: 30px;
    align-items: self-end;
   
}


.hero-section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    margin-top: 0px;
   
}
.hero-section:before{
    content: "";
    top: -100px;
    left: 0px;
    width: 100%;
    position: absolute;
    background-image: url("Public/Hero-bg.jpg");
    background-color: rgb(31, 49, 49);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 20%;
    z-index: -1;

}


}













