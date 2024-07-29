document.addEventListener("DOMContentLoaded", (event) => {
 
    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
        <iframe class="contac__iframe"  frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.74116928197!2d-75.66361369322281!3d6.244197043290467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1721964278543!5m2!1ses!2sco"></iframe>
       `;
    }, 500);


   
})