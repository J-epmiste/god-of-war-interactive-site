document.addEventListener('DOMContentLoaded', function () {
 
    // ===== FORMULAIRE ÉVÉNEMENT =====
    const formEvent = document.getElementById('form-event');
    const eventConfirm = document.getElementById('event-confirm');
 
    if (formEvent) {
        formEvent.addEventListener('submit', function (e) {
            e.preventDefault();
            const prenom = document.getElementById('event-prenom').value.trim();
            const email  = document.getElementById('event-email').value.trim();
 
            if (!prenom || !email) return;
 
            // Simulation confirmation
            formEvent.style.display = 'none';
            eventConfirm.classList.remove('hidden');
            eventConfirm.textContent = `✅ Inscription enregistrée pour ${prenom} ! Tu seras contacté(e) à ${email}.`;
 
            console.log('📅 Inscription événement :', {
                prenom: document.getElementById('event-prenom').value,
                nom:    document.getElementById('event-nom').value,
                email:  email,
                jeu:    document.getElementById('event-jeu').value
            });
        });
    }
 
    // ===== FORMULAIRE ADHÉSION =====
    const formAdhesion  = document.getElementById('form-adhesion');
    const adhesionConfirm = document.getElementById('adhesion-confirm');
 
    if (formAdhesion) {
        formAdhesion.addEventListener('submit', function (e) {
            e.preventDefault();
            const prenom = document.getElementById('adh-prenom').value.trim();
            const email  = document.getElementById('adh-email').value.trim();
 
            if (!prenom || !email) return;
 
            const cotisation = document.querySelector('input[name="cotisation"]:checked').value;
 
            // Simulation redirection HelloAsso
            formAdhesion.style.display = 'none';
            adhesionConfirm.classList.remove('hidden');
            adhesionConfirm.textContent =
                `🎮 Bienvenue ${prenom} ! Cotisation de ${cotisation}€ — Tu vas recevoir un email de confirmation à ${email}.`;
 
            console.log('🎮 Nouvelle adhésion :', {
                prenom:    prenom,
                nom:       document.getElementById('adh-nom').value,
                email:     email,
                promo:     document.getElementById('adh-promo').value,
                pole:      document.getElementById('adh-pole').value,
                niveau:    document.getElementById('adh-niveau').value,
                cotisation: cotisation + '€'
            });
        });
    }
 
    // ===== SMOOTH SCROLL pour les ancres =====
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
 
    // ===== ANIMATION ENTRÉE DES CARDS =====
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity    = '1';
                entry.target.style.transform  = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
 
    const cards = document.querySelectorAll(
        '.orga-card, .event-card, .partenaire-card, .doc-card, .actu-card'
    );
 
    cards.forEach((card, i) => {
        card.style.opacity   = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.4s ease ${i * 0.06}s, transform 0.4s ease ${i * 0.06}s`;
        observer.observe(card);
    });
 
    console.log('🎮 EPMI Gaming — Page chargée !');
});