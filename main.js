const sectionAbout = document.querySelector('.About');

const options = {
    threshold: 1,
    rootMargin: "0px 0px -190px 0px"
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