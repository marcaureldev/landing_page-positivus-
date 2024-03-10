// Responsive Navbar configuration
const burger_btn = document.querySelector(".burger_btn");
const nav_content = document.querySelector(".nav_content");

burger_btn.addEventListener('click', function()
{
    if(nav_content.classList.contains('hidden'))
    {
        nav_content.classList.remove('hidden')
    }
    else
    {
        nav_content.classList.add('hidden')
    }
})

function AfficheContenu(btn, color, plus, content, closeBtn)
{
    btn.addEventListener('click', function() {
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
            color.style.backgroundColor = '#B9FF66';
            btn.innerHTML = "";
            btn.appendChild(closeBtn);
        } else {
            content.classList.add('hidden');
            color.style.backgroundColor = '#F3F3F3';
            btn.innerHTML = "";
            btn.appendChild(plus)
    
        }
    });
}

// Permet  de récupérer l'élément HTML correspondant au bouton qui  a pour id "btn"
const btn = document.getElementById('btn') 

//Permet  de récupérer l'élément HTML correspondant à la div qui  a pour classe "color"
const color = document.querySelector('.color');

//Permet  de récupérer l'élément HTML correspondant à l'image qui  a pour id "plus"
const plus = document.querySelector('#plus');

//Permet  de récupérer l'élément HTML correspondant à l'image qui  a pour classe "content"
const content = document.querySelector('.content');

//Permet  de créer une nouvelle image et de lui passer le chemin de la nouvelle image 
closeBtn = new Image();
closeBtn.src='./assets/icons/Plus_icon.svg';

AfficheContenu(btn, color, plus, content, closeBtn);


const btn1 = document.getElementById('btn1') 
const color1 = document.querySelector('.color1');
const plus1 = document.querySelector('#plus1');
const content1 = document.querySelector('.content1');
closeBtn1 = new Image();
closeBtn1.src='./assets/icons/Plus_icon.svg';

AfficheContenu(btn1, color1, plus1, content1, closeBtn1);


const btn2 = document.getElementById('btn2') 
const color2 = document.querySelector('.color2');
const plus2 = document.querySelector('#plus2');
const content2 = document.querySelector('.content2');
closeBtn2 = new Image();
closeBtn2.src='./assets/icons/Plus_icon.svg';

AfficheContenu(btn2, color2, plus2, content2, closeBtn2);


const btn3 = document.getElementById('btn3') 
const color3 = document.querySelector('.color3');
const plus3 = document.querySelector('#plus3');
const content3 = document.querySelector('.content3');
closeBtn3 = new Image();
closeBtn3.src='./assets/icons/Plus_icon.svg';
AfficheContenu(btn3, color3, plus3, content3, closeBtn3);


const btn4 = document.getElementById('btn4') 
const color4 = document.querySelector('.color4');
const plus4 = document.querySelector('#plus4');
const content4 = document.querySelector('.content4');
closeBtn4 = new Image();
closeBtn4.src='./assets/icons/Plus_icon.svg';
AfficheContenu(btn4, color4, plus4, content4, closeBtn4);


const btn5 = document.getElementById('btn5') 
const color5 = document.querySelector('.color5');
const plus5 = document.querySelector('#plus5');
const content5 = document.querySelector('.content5');
closeBtn5 = new Image();
closeBtn5.src='./assets/icons/Plus_icon.svg';
AfficheContenu(btn5, color5, plus5, content5, closeBtn5);
