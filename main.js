const sectionAbout = document.querySelector('.About');

const options = {
    threshold: 1,
    rootMargin: "0px 0px -100px 0px",
    threshold: 0.5,
};

const observer = new IntersectionObserver(function(entries,observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            sectionAbout.classList.remove('Appear')
        } else {
            sectionAbout.classList.add('Appear')
        }
    });
}, options);

observer.observe(sectionAbout)


const span = document.querySelector("span");

span.onclick = function() {
  document.execCommand("copy");
}

span.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", span.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});



