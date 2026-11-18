// HEADER SECTION

const header = document.getElementById('head');
header.style.backgroundColor = '#4A7DF2';

const logo = document.createElement('img');
logo.src = '/logo-image.webp';
logo.alt = 'logo';
logo.classList.add('logo-image');
header.prepend(logo);

/*MAIN SECTION
        HERO SECTION */

    //  IMAGE Section 
    const hero = document.getElementById('hero');
const heroImage = document.createElement('img');
heroImage.src= '/hero-image.jpg';
heroImage.alt = 'an image';
heroImage.style.maxWidth = '100%'
heroImage.style.maxHeight = '50%'
heroImage.classList.add('hero-image');
//  THE TEXT Content
const heading = document.createElement('h1');
heading.textContent = 'A simple webpage'
heading.style.textAlign= 'center';
heading.style.fontSize ='40px';
heading.style.color = '#4A7DF2'
const paragraph = document.createElement('p');
paragraph.textContent = 'Here is a simple website created using javaScript DOM manipulation to input all the content therein'
paragraph.classList.add('text')
paragraph.style.fontSize ='18px'
hero.appendChild(heroImage);
hero.appendChild(heading);
hero.appendChild(paragraph);

// ABOUT SECTION
const about =document.getElementById('about');
about.style.backgroundColor = '#f5f5f5';
about.style.height = '50vh';
const aboutHeader = document.createElement('h2');
aboutHeader.textContent = 'About Us';
aboutHeader.style.fontSize = '32px';
aboutHeader.style.color ='#4A7DF2';
aboutHeader.style.marginLeft = '10px';
aboutHeader.style.paddingTop = '50px';
const aboutParagraph = document.createElement('p');
aboutParagraph.textContent ='Sept cohort of AppclickICTAcademy using javaScript DOM to manipulate all the documents in our document and also styling all that is written therein ';
aboutParagraph.style.fontSize = '18px';
const button = document.createElement('button');
button.textContent = 'For more';
button.style.fontSize = "15px";
button.style.marginTop = "18px";
button.style.marginLeft = "28px";
button.style.backgroundColor = "#4a7cf266";
button.style.width = "100px";
button.style.height = "100px";
button.style.borderRadius = "50%";
button.classList.add('btn');
about.appendChild(aboutHeader);
about.appendChild(aboutParagraph);
about.appendChild(button);


// CONTACT section
const contact = document.getElementById('contact');
const contactHeader = document.createElement('h2');
contactHeader.textContent = 'Contact Us'
contactHeader.style.color = '#4A7DF2';
contactHeader.style.marginLeft = '10px';
contactHeader.style.fontSize = '30px';

const contactParagraph = document.createElement('p');
contactParagraph.textContent = 'For more information on our september cohort and their rapid increase in technology development especially our  Full Stack students reach us via the contact below'
contactParagraph.style.fontSize = '18px';
const subParagraph = document.createElement('p');
subParagraph.textContent = 'call : +234 904 4522 123';
subParagraph.style.marginLeft = '20px';
subParagraph.style.marginBottom = '20px';
contact.appendChild(contactHeader);
contact.appendChild(contactParagraph);
contactParagraph.appendChild(subParagraph);

// FOOTER section

const footer = document.querySelector('footer');
const footerParagraph = document.createElement('p');
footerParagraph.textContent = '\u00A9 All copyright reserved 2026';
footer.style.backgroundColor = '#4A7DF2';
footer.style.color = '#fff';
footerParagraph.style.fontSize = '18px';
footerParagraph.style.marginTop = '20px';
footerParagraph.style.paddingTop = '80px';
footerParagraph.style.paddingBottom = '20px';
footerParagraph.style.textAlign = 'center';
footer.style.height = '30vh';
footer.appendChild(footerParagraph);
