document.addEventListener("DOMContentLoaded", function() {
    var images = [
        "https://rhythmartgallery.com/wp-content/uploads/2023/08/Dnyaneshwar-Mane-Rhythm-Art-Gallery-Mumbai-Artist.jpg",
        "https://rhythmartgallery.com/wp-content/uploads/2023/08/Govind-Dumbre-30-x-60-inches-Acrylic-on-canvas-.jpeg",
        "https://rhythmartgallery.com/wp-content/uploads/2023/05/Manish-Chavda-Landscape-Nature-Rhythm-Art-Gallery-Mumbai-Artist.jpg"
    ];

    var popBox = document.querySelector(".pop-box");

    // Retrieve the last index from local storage or set a default value
    var currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;

    // Set the initial image
    popBox.style.backgroundImage = 'url("' + images[currentIndex] + '")';

    // Change image on reload
    window.addEventListener('beforeunload', function () {
        currentIndex = (currentIndex + 1) % images.length;
        localStorage.setItem('currentIndex', currentIndex);
    });
    document.querySelector('body').style.overflow="hidden";
    scrollTo(0, 0);
});

function abc(){
    document.querySelector('.bg-popContainer').style.display="flex";
    document.querySelector('body').style.overflow="hidden";
    scrollTo(0,0);
}
function show()
{
let e=document.getElementsByClassName("bg-popContainer")
}
const bg_container=document.querySelector(".bg-popContainer")
const cancelPop = document.getElementById("close");
cancelPop.addEventListener("click", CancelPopOut);
function CancelPopOut(e) {
    e.preventDefault();
    document.querySelector(".bg-popContainer").style.display = "none";
    document.querySelector('body').style.overflow="scroll";
    document.querySelector('.copy').style.color='black';
    document.querySelector('.copy').textContent="Copy Code";
}
function change(){
    document.querySelector('.copy').style.color='green';
    document.querySelector('.copy').textContent="Copied Successfully";
}
function changeButton(button) {
    button.innerHTML = 'Following';
}
function openlogin(){
    document.getElementsByClassName('account_container')[0].style.display="grid";
}
let login = document.getElementById('toggler_log');    
let toggler = document.getElementsByClassName('toggler_left')[0];
login.addEventListener('click', function () {
    let currentTransform = window.getComputedStyle(toggler).getPropertyValue('transform');
    if (currentTransform === "matrix(1, 0, 0, 1, 0, 0)") {
        toggler.style.transform = "translate(100%, 0)";
        login.innerText="SIGNUP";
        toggler.style.borderRadius="40px 0 0 40px";
    } else {
        toggler.style.transform = "translate(0, 0)";
        login.innerText="LOGIN";
        toggler.style.borderRadius="0 40px 40px 0";
      }
});

setTimeout(()=>{
    document.querySelector('.account_container').style.display="grid";
},6000);
setTimeout(()=>{
    document.querySelector(".bg-popContainer").style.display = "none";
    document.querySelector('body').style.overflow="scroll";
    document.querySelector('.copy').style.color='black';
    document.querySelector('.copy').textContent="Copy Code";
},4000);

document.querySelector('.close_account').addEventListener('click', function() {
    document.querySelector('.account_container').style.display="none";
    document.querySelector('body').style.overflow="scroll";
});
document.querySelector('#log').addEventListener('click',function(){
    let wel=document.querySelector('.welcome').value;
    let pass=document.querySelector('.pass').value;
    if(wel.length!=0 && pass.length!=0){
        let count=0;
        for(i=0;i<wel.length;i++){
            if(wel[i]=='@'){
                console.log(wel[i]);
                count=i;
                break;
            }
        }
        let new_str='';
        for(j=0;j<count;j++){
            if(j==0){
                new_str+=wel[j].toUpperCase();
            }
            else{
            new_str+=wel[j];
            console.log(wel[j]);
        }
    }
    document.querySelector('.account').textContent=`Hi, ${new_str}`;
    document.querySelector('.account').style.border="3px solid #4ba5a6";
    document.querySelector('.welcome').value='';
    document.querySelector('.pass').value='';
    document.querySelector('.account_container').style.display="none";
    document.querySelector('.sign_in').style.visibility="hidden";
    document.querySelector('.sign_up').style.visibility="hidden";
    document.querySelector('.toggler_left').style.visibility="hidden";
    document.querySelector('.logged_in').style.visibility="visible";
    document.querySelector('.logged_in h5').textContent=`Welcome ${new_str}`;
    document.querySelector('.parent_account').style.top="11%";
    document.querySelector('.parent_account').style.marginLeft="52%";
    document.querySelector('.account_container').style.width="15em";
    document.querySelector('.account_container').style.height="9em";
    document.querySelector('#account_logout').addEventListener('click',function(){
        document.querySelector('.account_container').style.display="grid";
        document.querySelector('.sign_in').style.visibility="visible";
        document.querySelector('.sign_up').style.visibility="visible";
        document.querySelector('.toggler_left').style.visibility="visible";
        document.querySelector('.logged_in').style.visibility="hidden";
        document.querySelector('.logged_in h5').textContent="";
        document.querySelector('.account_container').style.width="40em";
        document.querySelector('.account_container').style.height="28em";
        document.querySelector('.parent_account').style.top="20%";
        document.querySelector('.parent_account').style.marginLeft="0";
        document.querySelector('.account').style.border="3px solid black";
        document.querySelector('.account').textContent="LOGIN/SIGNUP";
    });
    document.querySelectorAll('.to_hidden')[0].style.display="none";
    document.querySelectorAll('.to_hidden')[1].style.display="none";
}
else{
    if(wel.length==0 && pass.length==0){
        document.querySelectorAll('.to_hidden')[0].style.display="block";
            document.querySelectorAll('.to_hidden')[1].style.display="block";
        }
        else if(wel.length==0 && pass.length!=0){
            document.querySelectorAll('.to_hidden')[0].style.display="block";
            document.querySelectorAll('.to_hidden')[1].style.display="none";
        }
        else{
            document.querySelectorAll('.to_hidden')[1].style.display="block";
            document.querySelectorAll('.to_hidden')[0].style.display="none";
            
        }
    }
})
document.querySelector('#sign').addEventListener('click',function(){
    let welcome_new=document.querySelector('.welcome_new').value;
    let welcome_last=document.querySelector('.welcome_last').value;
    let welcome_email=document.querySelector('.welcome_email').value;
    if(welcome_new.length!=0 && welcome_last.length!=0 && welcome_email.length!=0){
        document.querySelector('.account').textContent=`Hi, ${welcome_new}`;
        document.querySelector('.account').style.border="3px solid #4ba5a6";
        document.querySelector('.welcome_new').value='';
        document.querySelector('.pass').value='';
        document.querySelector('.account_container').style.display="none";
        document.querySelector('.sign_in').style.visibility="hidden";
        document.querySelector('.sign_up').style.visibility="hidden";
        document.querySelector('.toggler_left').style.visibility="hidden";
        document.querySelector('.logged_in').style.visibility="visible";
        document.querySelector('.logged_in h5').textContent=`Welcome ${welcome_new}`;
        document.querySelector('.parent_account').style.top="11%";
        document.querySelector('.parent_account').style.marginLeft="52%";
        document.querySelector('.account_container').style.width="15em";
        document.querySelector('.account_container').style.height="9em";
        document.querySelector('#account_logout').addEventListener('click',function(){
            document.querySelector('.account_container').style.display="grid";
            document.querySelector('.sign_in').style.visibility="visible";
            document.querySelector('.sign_up').style.visibility="visible";
            document.querySelector('.toggler_left').style.visibility="visible";
            document.querySelector('.logged_in').style.visibility="hidden";
            document.querySelector('.logged_in h5').textContent="";
            document.querySelector('.account_container').style.width="40em";
            document.querySelector('.account_container').style.height="28em";
            document.querySelector('.parent_account').style.top="20%";
            document.querySelector('.parent_account').style.marginLeft="0";
            document.querySelector('.account').style.border="3px solid black";
            document.querySelector('.account').textContent="LOGIN/SIGNUP";
        })
        document.querySelectorAll('.to_hidden')[2].style.display="none";
        document.querySelectorAll('.to_hidden')[3].style.display="none";
        document.querySelectorAll('.to_hidden')[4].style.display="none";
    }
    else{
        if(welcome_new.length==0 && welcome_last.length==0 && welcome_email.length==0){
            document.querySelectorAll('.to_hidden')[2].style.display="block";
            document.querySelectorAll('.to_hidden')[3].style.display="block";
            document.querySelectorAll('.to_hidden')[4].style.display="block";
        }
        else if(welcome_new.length==0 && welcome_last.length==0 && welcome_email.length!=0){
            document.querySelectorAll('.to_hidden')[2].style.display="block";
            document.querySelectorAll('.to_hidden')[3].style.display="block";
            document.querySelectorAll('.to_hidden')[4].style.display="none";
        }
        else if(welcome_new.length!=0 && welcome_last.length==0 && welcome_email.length==0){
            document.querySelectorAll('.to_hidden')[2].style.display="none";
            document.querySelectorAll('.to_hidden')[3].style.display="block";
            document.querySelectorAll('.to_hidden')[4].style.display="block";
        }
        else if(welcome_new.length==0 && welcome_last.length!=0 && welcome_email.length==0){
            document.querySelectorAll('.to_hidden')[2].style.display="block";
            document.querySelectorAll('.to_hidden')[3].style.display="none";
            document.querySelectorAll('.to_hidden')[4].style.display="block";
        }
        else if(welcome_new.length!=0 && welcome_last.length!=0 && welcome_email.length==0){
            document.querySelectorAll('.to_hidden')[2].style.display="none";
            document.querySelectorAll('.to_hidden')[3].style.display="none";
            document.querySelectorAll('.to_hidden')[4].style.display="block";
        }
        else if(welcome_new.length!=0 && welcome_last.length==0 && welcome_email.length!=0){
            document.querySelectorAll('.to_hidden')[2].style.display="none";
            document.querySelectorAll('.to_hidden')[3].style.display="block";
            document.querySelectorAll('.to_hidden')[4].style.display="none";
        }
        else if(welcome_new.length==0 && welcome_last.length!=0 && welcome_email.length!=0){
            document.querySelectorAll('.to_hidden')[2].style.display="block";
            document.querySelectorAll('.to_hidden')[3].style.display="none";
            document.querySelectorAll('.to_hidden')[4].style.display="none";
        }
    }
});
let inc=0;
document.querySelector('.artist_aj').addEventListener('click',function(){
        if(inc==0 || (document.querySelectorAll('.arts_aj')[1].style.display=="flex" ||
        document.querySelectorAll('.arts_aj')[2].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[3].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[4].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[5].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[6].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[7].style.display=="flex"))
        {
            document.querySelectorAll('.arts_aj')[0].style.display="flex";
            document.querySelectorAll('.arts_aj')[1].style.display="none";
            document.querySelectorAll('.arts_aj')[2].style.display="none";
            document.querySelectorAll('.arts_aj')[3].style.display="none";
            document.querySelectorAll('.arts_aj')[4].style.display="none";
            document.querySelectorAll('.arts_aj')[5].style.display="none";
            document.querySelectorAll('.arts_aj')[6].style.display="none";
            document.querySelectorAll('.arts_aj')[7].style.display="none";
            document.querySelector('.artist_album').style.overflow="hidden";
            inc=1;
            document.querySelector('.artist_aj').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        }
        else{
            document.querySelectorAll('.arts_aj')[0].style.display="none";
            document.querySelector('.artist_album').style.overflow="scroll";
            document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            inc=0;
        }
    }
    )
    inc=0;
    document.querySelector('.artist_amit').addEventListener('click',function(){
        if(inc==0 || (document.querySelectorAll('.arts_aj')[0].style.display=="flex" ||
        document.querySelectorAll('.arts_aj')[2].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[3].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[4].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[5].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[6].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[7].style.display=="flex")){
            document.querySelectorAll('.arts_aj')[1].style.display="flex";
            document.querySelectorAll('.arts_aj')[0].style.display="none";
            document.querySelectorAll('.arts_aj')[2].style.display="none";
            document.querySelectorAll('.arts_aj')[3].style.display="none";
            document.querySelectorAll('.arts_aj')[4].style.display="none";
            document.querySelectorAll('.arts_aj')[5].style.display="none";
            document.querySelectorAll('.arts_aj')[6].style.display="none";
            document.querySelectorAll('.arts_aj')[7].style.display="none";
            document.querySelector('.artist_album').style.overflow="hidden";
            inc=1;
            document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_amit').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        }
        else{
            document.querySelectorAll('.arts_aj')[1].style.display="none";
            document.querySelector('.artist_album').style.overflow="scroll";
            document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            
            inc=0;
        }
    }
)
inc=0;
document.querySelector('.artist_anand').addEventListener('click',function(){
    if(inc==0 || (document.querySelectorAll('.arts_aj')[1].style.display=="flex" ||
    document.querySelectorAll('.arts_aj')[0].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[3].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[4].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[5].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[6].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[7].style.display=="flex")){
        document.querySelectorAll('.arts_aj')[2].style.display="flex";
        document.querySelectorAll('.arts_aj')[1].style.display="none";
        document.querySelectorAll('.arts_aj')[0].style.display="none";
        document.querySelectorAll('.arts_aj')[3].style.display="none";
        document.querySelectorAll('.arts_aj')[4].style.display="none";
        document.querySelectorAll('.arts_aj')[5].style.display="none";
        document.querySelectorAll('.arts_aj')[6].style.display="none";
        document.querySelectorAll('.arts_aj')[7].style.display="none";
        document.querySelector('.artist_album').style.overflow="hidden";
        inc=1;
        document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_anand').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
    }
    else{
        document.querySelectorAll('.arts_aj')[2].style.display="none";
        document.querySelector('.artist_album').style.overflow="scroll";
        document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        
        inc=0;
    }
}
)
inc=0;
document.querySelector('.artist_anil').addEventListener('click',function(){
    if(inc==0 || (document.querySelectorAll('.arts_aj')[1].style.display=="flex" ||
    document.querySelectorAll('.arts_aj')[2].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[0].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[4].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[5].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[6].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[7].style.display=="flex")){
            document.querySelectorAll('.arts_aj')[3].style.display="flex";
            document.querySelectorAll('.arts_aj')[1].style.display="none";
            document.querySelectorAll('.arts_aj')[2].style.display="none";
            document.querySelectorAll('.arts_aj')[0].style.display="none";
            document.querySelectorAll('.arts_aj')[4].style.display="none";
            document.querySelectorAll('.arts_aj')[5].style.display="none";
            document.querySelectorAll('.arts_aj')[6].style.display="none";
            document.querySelectorAll('.arts_aj')[7].style.display="none";
            document.querySelector('.artist_album').style.overflow="hidden";
            inc=1;
            document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anil').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        }
        else{
            document.querySelectorAll('.arts_aj')[3].style.display="none";
            document.querySelector('.artist_album').style.overflow="scroll";
            document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            
            inc=0;
        }
    }
    )
    inc=0;
    document.querySelector('.artist_arpan').addEventListener('click',function(){
        if(inc==0 || (document.querySelectorAll('.arts_aj')[1].style.display=="flex" ||
        document.querySelectorAll('.arts_aj')[2].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[3].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[0].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[5].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[6].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[7].style.display=="flex")){
            document.querySelectorAll('.arts_aj')[4].style.display="flex";
            document.querySelectorAll('.arts_aj')[1].style.display="none";
            document.querySelectorAll('.arts_aj')[2].style.display="none";
            document.querySelectorAll('.arts_aj')[3].style.display="none";
            document.querySelectorAll('.arts_aj')[0].style.display="none";
            document.querySelectorAll('.arts_aj')[5].style.display="none";
            document.querySelectorAll('.arts_aj')[6].style.display="none";
            document.querySelectorAll('.arts_aj')[7].style.display="none";
            document.querySelector('.artist_album').style.overflow="hidden";
            inc=1;
            document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arpan').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        }
        else{
            document.querySelectorAll('.arts_aj')[4].style.display="none";
            document.querySelector('.artist_album').style.overflow="scroll";
            document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            
            inc=0;
        }
    }
    )
    inc=0;
    document.querySelector('.artist_arvind').addEventListener('click',function(){
        if(inc==0 || (document.querySelectorAll('.arts_aj')[1].style.display=="flex" ||
        document.querySelectorAll('.arts_aj')[2].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[3].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[4].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[0].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[6].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[7].style.display=="flex")){
            document.querySelectorAll('.arts_aj')[5].style.display="flex";
            document.querySelectorAll('.arts_aj')[1].style.display="none";
            document.querySelectorAll('.arts_aj')[2].style.display="none";
            document.querySelectorAll('.arts_aj')[3].style.display="none";
            document.querySelectorAll('.arts_aj')[4].style.display="none";
            document.querySelectorAll('.arts_aj')[0].style.display="none";
            document.querySelectorAll('.arts_aj')[6].style.display="none";
            document.querySelectorAll('.arts_aj')[7].style.display="none";
            document.querySelector('.artist_album').style.overflow="hidden";
            inc=1;
            document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arvind').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        }
        else{
            document.querySelectorAll('.arts_aj')[5].style.display="none";
            document.querySelector('.artist_album').style.overflow="scroll";
            document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";

            inc=0;
        }
    }
    )
    inc=0;
    document.querySelector('.artist_city').addEventListener('click',function(){
        if(inc==0 || (document.querySelectorAll('.arts_aj')[1].style.display=="flex" ||
        document.querySelectorAll('.arts_aj')[2].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[3].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[4].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[5].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[0].style.display=="flex"||
        document.querySelectorAll('.arts_aj')[7].style.display=="flex")){
            document.querySelectorAll('.arts_aj')[6].style.display="flex";
            document.querySelectorAll('.arts_aj')[1].style.display="none";
            document.querySelectorAll('.arts_aj')[2].style.display="none";
            document.querySelectorAll('.arts_aj')[3].style.display="none";
            document.querySelectorAll('.arts_aj')[4].style.display="none";
            document.querySelectorAll('.arts_aj')[5].style.display="none";
            document.querySelectorAll('.arts_aj')[0].style.display="none";
            document.querySelectorAll('.arts_aj')[7].style.display="none";
            document.querySelector('.artist_album').style.overflow="hidden";
            inc=1;
            document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_city').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
            document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        }
        else{
            document.querySelectorAll('.arts_aj')[6].style.display="none";
            document.querySelector('.artist_album').style.overflow="scroll";
            document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
            
            inc=0;
        }
    }
    )
    inc=0;
    document.querySelector('.artist_deb').addEventListener('click',function(){
        if(inc==0 || (document.querySelectorAll('.arts_aj')[1].style.display=="flex" ||
        document.querySelectorAll('.arts_aj')[2].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[3].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[4].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[5].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[6].style.display=="flex"||
    document.querySelectorAll('.arts_aj')[0].style.display=="flex")){
        document.querySelectorAll('.arts_aj')[7].style.display="flex";
        document.querySelectorAll('.arts_aj')[1].style.display="none";
        document.querySelectorAll('.arts_aj')[2].style.display="none";
        document.querySelectorAll('.arts_aj')[3].style.display="none";
        document.querySelectorAll('.arts_aj')[4].style.display="none";
        document.querySelectorAll('.arts_aj')[5].style.display="none";
        document.querySelectorAll('.arts_aj')[6].style.display="none";
        document.querySelectorAll('.arts_aj')[0].style.display="none";
        document.querySelector('.artist_album').style.overflow="hidden";
        inc=1;
        document.querySelector('.artist_aj').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_amit').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_anil').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_deb').style.boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px";
        document.querySelector('.artist_city').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_anand').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_arpan').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        document.querySelector('.artist_arvind').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
    }
    else{
        document.querySelectorAll('.arts_aj')[7].style.display="none";
        document.querySelector('.artist_album').style.overflow="scroll";
        document.querySelector('.artist_deb').style.boxShadow="0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px, 0px 0px 0px";
        
        inc=0;
    }
}
)

function searchArtists() {
    scrollTo(0, 1200);
    var input, filter, artistContainer, artists, artist, i, txtValue;
    input = document.getElementById('artistSearch');
    filter = input.value.toUpperCase();
    artistContainer = document.querySelector('.artist_album');
    artists = artistContainer.getElementsByClassName('artist');

    for (i = 0; i < artists.length; i++) {
        artist = artists[i].getElementsByTagName('p')[0];
        txtValue = artist.textContent || artist.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            artists[i].style.display = '';
        } else {
            artists[i].style.display = 'none';
        }
    }
}

function calculateTotalAmount() {
    var cartItems = document.querySelectorAll('.cart_item');
    var totalAmount = 0;
    cartItems.forEach(function(cartItem) {
        var priceText = cartItem.querySelector('p').textContent;
        // Extract numeric part from the price string
        var priceNumeric = parseFloat(priceText.match(/\d+(\.\d+)?/)[0]);
        totalAmount += priceNumeric;
    });
    return totalAmount;
}

// Function to update total amount in the cart
function updateTotalAmount() {
    var totalAmount = calculateTotalAmount();
    var totalElement = document.querySelector('.total_amount');
    totalElement.textContent = '₹' + totalAmount.toFixed(2);
}

// Function to add an item to the cart
function addButton(button) {
    button.innerHTML = 'Added ✓';
    setTimeout(() => {
        button.innerHTML = 'ADD';
    }, 1500);
    var itemDiv = button.parentNode.parentNode;
    var imageSrc = itemDiv.querySelector('.arts_image img').src;
    var title = itemDiv.querySelector('.arts_head h6').textContent;
    var price = itemDiv.querySelector('.arts_head .arts_price').textContent;

    var cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');
    cartItem.innerHTML = `
        <img src="${imageSrc}" alt="">
        <div>
            <h6>${title}</h6>
            <p>${price}</p>
        </div>
        <button class="remove_button">Remove</button>
    `;

    var cartBox = document.querySelector('.cart_box .items');
    cartBox.appendChild(cartItem);

    var removeButton = cartItem.querySelector('.remove_button');
    removeButton.addEventListener('click', function() {
        cartBox.removeChild(cartItem);
        updateTotalAmount(); // Update total amount after removing item
    });

    updateTotalAmount(); // Update total amount after adding item
}
  let cart_inc=0;
  document.querySelector('.cart').addEventListener('click',function(){
    if(cart_inc==0){
    document.querySelector('.cart_box_parent').style.visibility="visible";
    cart_inc=1;
    scrollTo(0,0);
    document.querySelector('body').style.overflow="hidden";
    }
    else{
    document.querySelector('.cart_box_parent').style.visibility="hidden";
    document.querySelector('body').style.overflow="scroll";
    cart_inc=0;
    }
  })
  document.querySelector('.closer_cart').addEventListener('click',function(){
    document.querySelector('.cart_box_parent').style.visibility="hidden";
    document.querySelector('body').style.overflow="scroll";
    cart_inc=0;
  })
let j=0;
document.querySelector('.slider').addEventListener('click',function(){
    if(j==0){
        document.querySelector('.slider_box').style.visibility="visible";
        j=1;
    }
    else{
        document.querySelector('.slider_box').style.visibility="hidden";
        j=0;
    }
})