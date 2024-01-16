
// Load footer content
const footerPlaceholder = document.getElementById('footer-placeholder');
const footerContent = new XMLHttpRequest();
footerContent.open('GET', 'footer.html', true);
footerContent.onreadystatechange = function () {
  if (footerContent.readyState === XMLHttpRequest.DONE && footerContent.status === 200) {
    footerPlaceholder.innerHTML = footerContent.responseText;
  }
};
footerContent.send();
