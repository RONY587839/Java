// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
var contactpage= document.getdocumentbyId("#contact-page");
var submitbutton=document.getdocumentbyId("#submit-button");

function replacepage(){
    contactPage.innerhtml='Thank you for your message!';
}
submitbutton.addeventlistener('click',replacepage);
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

