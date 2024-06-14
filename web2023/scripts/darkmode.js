// Start dark mode if it's after 6:59:59pm
if (new Date().getHours() > 18) {
  //alert(new Date().getHours());
  const html = document.querySelector('html');
  html.style.backgroundColor = 'black';
  html.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const wrapperBody = document.getElementsByClassName('wrapper');
  wrapperBody[0].style.backgroundColor = 'black';
  wrapperBody[0].style.color = 'white';
}

if (new Date().getHours() > 18) {
  const secondaryBody = document.getElementById('secondary');
  secondaryBody.style.backgroundColor = 'black';
  secondaryBody.style.color = 'white';
}

if (new Date().getHours() > 18) {
  const figCap = document.getElementById('fig_cap');
  figCap.style.backgroundColor = 'black';
  figCap.style.color = 'white';
}
