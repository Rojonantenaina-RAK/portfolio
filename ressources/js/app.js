// Menu dropdown du navbar
let menuContent = document.getElementById('menuContent')
let btnNav = document.getElementById('btnNav')

btnNav.addEventListener('click', ()=>{
    menuContent.classList.toggle('is-active')
    btnNav.classList.toggle('is-active')
})


// Plus de menu dropdown sur le navbar lors d'un quelconque scroll
window.addEventListener('scroll', ()=>{
    if(menuContent.classList.contains('is-active')) {menuContent.classList.remove('is-active')}
    if(btnNav.classList.contains('is-active')) {btnNav.classList.remove('is-active')}
})

// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Envoi d'email

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche la soumission par défaut du formulaire

    let nom = document.getElementById('nomClient').value;
    let prenom = document.getElementById('prenomClient').value;
    let email = document.getElementById('emailClient').value;
    let message = document.getElementById('messageClient').value;

    // Envoi de l'e-mail via une requête AJAX à un serveur
//     var xhr = new XMLHttpRequest();
//     xhr.open('POST', '/envoyer-email', true); // Remplacez '/envoyer-email' par l'URL de votre endpoint serveur pour envoyer l'e-mail
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             alert('E-mail envoyé avec succès !');
//             // Réinitialisez les champs du formulaire si nécessaire
//             document.getElementById('nomClient').value = '';
//             document.getElementById('prenomClient').value = '';
//             document.getElementById('emailClient').value = '';
//             document.getElementById('messageClient').value = '';
//         } else {
//             alert('Une erreur s\'est produite lors de l\'envoi de l\'e-mail.');
//         }
//     };
//     var data = JSON.stringify({ email: email, message: message });
//     xhr.send(data);
});
