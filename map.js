// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ÉLÉMENTS DU DOM ==========
    const eraButtons = document.querySelectorAll('.era-btn');
    const mapContainers = document.querySelectorAll('.map-container');
    const allPoints = document.querySelectorAll('.point');
    const infoPanel = document.getElementById('info-panel');
    const closeBtn = document.getElementById('close-panel');
    
    // Éléments du panneau d'info
    const jeuTitre = document.getElementById('jeu-titre');
    const jeuAnnee = document.getElementById('jeu-annee');
    const jeuDescription = document.getElementById('jeu-description');
    const jeuImage = document.getElementById('jeu-image');
    const jeuPlateforme = document.getElementById('jeu-plateforme');
    const jeuLieu = document.getElementById('jeu-lieu');

    // ========== BASE DE DONNÉES DES JEUX ==========
    const jeux = {
        // ÈRE GRECQUE
        gow1: {
            titre: "God of War",
            annee: "2005",
            description: "Le premier opus de la saga nous plonge dans la mythologie grecque. Kratos, guerrier spartiate hanté par son passé, sert les dieux de l'Olympe dans l'espoir d'être libéré de ses cauchemars. Sa quête pour tuer Arès, le dieu de la guerre, le mènera aux confins de la Grèce antique, révélant des secrets sur son passé tragique.",
            plateforme: "PlayStation 2",
            lieu: "Grèce Antique - Athènes, Désert des Âmes Perdues",
            image: "../images/games/gow1.jpg"
        },
        gow2: {
            titre: "God of War II",
            annee: "2007",
            description: "Devenu le nouveau Dieu de la Guerre, Kratos est trahi par Zeus et dépouillé de ses pouvoirs divins. Assoiffé de vengeance, il entreprend un voyage épique à travers le temps pour affronter les Sœurs du Destin et changer son funeste sort. Cette suite élargit l'univers avec des décors plus grandioses et des combats contre les Titans.",
            plateforme: "PlayStation 2, PlayStation 3 (remaster)",
            lieu: "Rhodes, Île de la Création, Temple des Sœurs du Destin",
            image: "../images/games/gow2.png"
        },
        gow3: {
            titre: "God of War III",
            annee: "2010",
            description: "Le chapitre final de la trilogie grecque. Kratos escalade le Mont Olympe avec les Titans pour sa vengeance ultime contre Zeus et les dieux. Dans une frénésie de destruction, il décime le panthéon grec entier, plongeant le monde dans le chaos. Ce jeu marque l'apogée de sa rage et révèle les conséquences dévastatrices de sa quête de vengeance.",
            plateforme: "PlayStation 3, PlayStation 4 (remaster)",
            lieu: "Mont Olympe, Enfers, Olympe",
            image: "../images/games/gow3.png"
        },
        ascension: {
            titre: "God of War: Ascension",
            annee: "2013",
            description: "Prequel chronologique de la saga, ce jeu explore les origines de Kratos en tant que serviteur d'Arès. Emprisonné et torturé par les Furies pour avoir rompu son serment envers le dieu de la guerre, Kratos doit s'échapper et regagner sa liberté. On découvre comment il est devenu le Ghost of Sparta, marqué par la tragédie.",
            plateforme: "PlayStation 3",
            lieu: "Prison des Damnés, Delphes, Temple de Delphes",
            image: "../images/games/gowascension.jpg"
        },

        // ÈRE NORDIQUE
        gow2018: {
            titre: "God of War",
            annee: "2018",
            description: "Réinvention totale de la saga. Des années après la destruction de l'Olympe, Kratos vit reclus dans les terres nordiques avec son fils Atreus. Après la mort de sa femme, ils entreprennent un voyage pour disperser ses cendres au sommet de la plus haute montagne des neuf royaumes. Ce périple père-fils les confrontera aux dieux nordiques, notamment Baldur, et révélera la véritable nature d'Atreus.",
            plateforme: "PlayStation 4, PC",
            lieu: "Midgard, Alfheim, Helheim, Jotunheim",
            image: "../images/games/gow2018.jpg"
        },
        ragnarok: {
            titre: "God of War Ragnarök",
            annee: "2022",
            description: "La suite directe de God of War (2018). Kratos et Atreus cherchent des réponses alors que le Ragnarök, la fin prophétisée des dieux nordiques, approche. Ils voyagent à travers les neuf royaumes, affrontant Thor et Odin, tout en découvrant le destin d'Atreus/Loki. Ce chapitre conclut la saga nordique avec des combats épiques et des révélations bouleversantes.",
            plateforme: "PlayStation 4, PlayStation 5",
            lieu: "Les 9 Royaumes - Svartalfheim, Vanaheim, Asgard, Muspelheim",
            image: "../images/games/gowragnarok.jpg"
        }
    };

    // ========== FONCTION : CHANGER D'ÈRE ==========
    function changerEre(era) {
        // Retirer la classe active de tous les boutons et cartes
        eraButtons.forEach(btn => btn.classList.remove('active'));
        mapContainers.forEach(map => map.classList.remove('active'));

        // Activer le bouton cliqué
        const btnActif = document.querySelector(`[data-era="${era}"]`);
        btnActif.classList.add('active');

        // Activer la carte correspondante
        const mapActif = document.getElementById(`map-${era}`);
        mapActif.classList.add('active');
    }

    // ========== FONCTION : AFFICHER INFOS DU JEU ==========
    function afficherInfosJeu(jeuId) {
        const jeu = jeux[jeuId];
        
        if (jeu) {
            // Remplir le panneau avec les infos
            jeuTitre.textContent = jeu.titre;
            jeuAnnee.textContent = jeu.annee;
            jeuDescription.textContent = jeu.description;
            jeuImage.src = jeu.image;
            jeuImage.alt = jeu.titre;
            jeuPlateforme.textContent = jeu.plateforme;
            jeuLieu.textContent = jeu.lieu;
            
            // Afficher le panneau avec animation
            infoPanel.classList.remove('hidden');
            infoPanel.style.opacity = '0';
            infoPanel.style.transform = 'translate(-50%, -50%) scale(0.8)';
            
            setTimeout(() => {
                infoPanel.style.opacity = '1';
                infoPanel.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 10);
        }
    }

    // ========== FONCTION : FERMER LE PANNEAU ==========
    function fermerPanel() {
        infoPanel.style.opacity = '0';
        infoPanel.style.transform = 'translate(-50%, -50%) scale(0.8)';
        
        setTimeout(() => {
            infoPanel.classList.add('hidden');
        }, 300);
    }

    // ========== ÉVÉNEMENTS : BOUTONS D'ÈRE ==========
    eraButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const era = this.getAttribute('data-era');
            changerEre(era);
        });
    });

    // ========== ÉVÉNEMENTS : POINTS CLIQUABLES ==========
    allPoints.forEach(point => {
        point.addEventListener('click', function() {
            const jeuId = this.getAttribute('data-jeu');
            afficherInfosJeu(jeuId);
        });
    });

    // ========== ÉVÉNEMENTS : FERMER LE PANNEAU ==========
    closeBtn.addEventListener('click', fermerPanel);

    // Fermer en cliquant sur l'overlay
    infoPanel.addEventListener('click', function(e) {
        if (e.target === this) {
            fermerPanel();
        }
    });

    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !infoPanel.classList.contains('hidden')) {
            fermerPanel();
        }
    });

    // ========== MESSAGE DE DÉMARRAGE ==========
    console.log('🎮 Map Interactive God of War chargée !');
    console.log('📍 Ère Grecque : 4 jeux');
    console.log('📍 Ère Nordique : 2 jeux');
});