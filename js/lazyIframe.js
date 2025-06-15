document.addEventListener("DOMContentLoaded", function() {
  if ("IntersectionObserver" in window) {
    const lazyIframe = document.querySelector("iframe.lazy-iframe");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          entry.target.src = entry.target.dataset.src;
          obs.unobserve(entry.target); 
        }
      });
    });
    observer.observe(lazyIframe);
  } else {

    const iframe = document.querySelector("iframe.lazy-iframe");
    if (iframe) iframe.src = iframe.dataset.src;
  }
});
