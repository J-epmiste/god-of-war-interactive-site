// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    
    // ========== ÉLÉMENTS DU DOM ==========
    const eraButtons = document.querySelectorAll('.era-btn');
    const mapContainers = document.querySelectorAll('.map-container');
    const allPoints = document.querySelectorAll('.point');
    const infoPanel = document.getElementById('info-panel');
    const closeBtn = document.getElementById('close-panel');
    
    // Éléments du panneau d'info
    const infoContentNormal = document.getElementById('info-content-normal');
    const submapContainer = document.getElementById('submap-container');
    const jeuTitre = document.getElementById('jeu-titre');
    const jeuAnnee = document.getElementById('jeu-annee');
    const jeuDescription = document.getElementById('jeu-description');
    const jeuImage = document.getElementById('jeu-image');
    const jeuPlateforme = document.getElementById('jeu-plateforme');
    const jeuLieu = document.getElementById('jeu-lieu');
    
    // Boutons spéciaux
    const btnExplorerRoyaumes = document.getElementById('btn-explorer-royaumes');
    const btnRetourRagnarok = document.getElementById('btn-retour-ragnarok');
    
    // Éléments royaume
    const royaumePanel = document.getElementById('royaume-panel');
    const royaumeNom = document.getElementById('royaume-nom');
    const royaumeImage = document.getElementById('royaume-image');
    const royaumeDescription = document.getElementById('royaume-description');

    // ========== BASE DE DONNÉES DES JEUX ==========
    const jeux = {
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
            image: "../images/games/gowragnarok.jpg",
            hasSubmap: true // Indique que ce jeu a une sous-map
        }
    };

    // ========== BASE DE DONNÉES DES 9 ROYAUMES ==========
    const royaumes = {
        midgard: {
            nom: "Midgard",
            description: "Le royaume des humains, au centre d'Yggdrasil. Terre natale de Kratos et Atreus, c'est ici que commence leur périple. Un monde de forêts denses, de lacs mystérieux et de montagnes majestueuses.",
            image: "../images/map/royaumes/midgard.jpg"
        },
        asgard: {
            nom: "Asgard",
            description: "Le royaume des dieux Ases, gouverné par Odin. Forteresse céleste dorée, symbole de pouvoir absolu. Ses halls dorés et murailles imprenables incarnent la puissance divine.",
            image: "../images/map/royaumes/asgard.jpg"
        },
        vanaheim: {
            nom: "Vanaheim",
            description: "Le royaume des dieux Vanes, un monde luxuriant et verdoyant. Déchiré par une guerre éternelle, c'est un lieu de beauté naturelle corrompue par les conflits.",
            image: "../images/map/royaumes/vanaheim.jpg"
        },
        alfheim: {
            nom: "Alfheim",
            description: "Le royaume des elfes de lumière, baigné d'une luminosité dorée éthérée. Divisé par une guerre sans fin entre elfes de lumière et elfes noirs pour le contrôle de la Lumière d'Alfheim.",
            image: "../images/map/royaumes/alfheim.jpg"
        },
        svartalfheim: {
            nom: "Svartalfheim",
            description: "Le royaume des nains, un monde souterrain de forges incandescentes et de mines profondes. Les nains y créent les armes les plus puissantes des neuf royaumes, comme le Mjölnir.",
            image: "../images/map/royaumes/svartalfheim.jpg"
        },
        helheim: {
            nom: "Helheim",
            description: "Le royaume des morts, un lieu glacial et désolé où errent les âmes perdues. Gouverné par Hel, enveloppé d'un froid éternel et d'une brume mortelle qui draine la vie.",
            image: "../images/map/royaumes/helheim.jpg"
        },
        niflheim: {
            nom: "Niflheim",
            description: "Le royaume des brumes et du froid primordial. Un labyrinthe mortel rempli de poisons et de dangers où seuls les plus braves guerriers osent s'aventurer pour réclamer des trésors légendaires.",
            image: "../images/map/royaumes/niflheim.jpg"
        },
        muspelheim: {
            nom: "Muspelheim",
            description: "Le royaume du feu éternel, terre des géants de feu dirigés par Surtr. Ses arènes de combat testent les guerriers les plus courageux dans des épreuves de feu et de sang.",
            image: "../images/map/royaumes/muspelheim.jpg"
        },
        jotunheim: {
            nom: "Jotunheim",
            description: "Le royaume des géants, fermé depuis des générations. Un lieu mystérieux et ancien, gardien de secrets sur les origines d'Atreus/Loki et son destin prophétisé.",
            image: "../images/map/royaumes/jotunheim.jpg"
        }
    };

    // ========== FONCTION : CHANGER D'ÈRE ==========
    function changerEre(era) {
        eraButtons.forEach(btn => btn.classList.remove('active'));
        mapContainers.forEach(map => map.classList.remove('active'));

        const btnActif = document.querySelector(`[data-era="${era}"]`);
        btnActif.classList.add('active');

        const mapActif = document.getElementById(`map-${era}`);
        mapActif.classList.add('active');
    }

    // ========== FONCTION : AFFICHER INFOS DU JEU ==========
    function afficherInfosJeu(jeuId) {
        const jeu = jeux[jeuId];
        
        if (jeu) {
            // Remplir les infos
            jeuTitre.textContent = jeu.titre;
            jeuAnnee.textContent = jeu.annee;
            jeuDescription.textContent = jeu.description;
            jeuImage.src = jeu.image;
            jeuImage.alt = jeu.titre;
            jeuPlateforme.textContent = jeu.plateforme;
            jeuLieu.textContent = jeu.lieu;
            
            // Afficher/masquer le bouton d'exploration des royaumes
            if (jeu.hasSubmap) {
                btnExplorerRoyaumes.style.display = 'flex';
            } else {
                btnExplorerRoyaumes.style.display = 'none';
            }
            
            // Afficher le contenu normal, cacher la sous-map
            infoContentNormal.style.display = 'block';
            submapContainer.style.display = 'none';
            royaumePanel.style.display = 'none';
            
            // Afficher le panneau
            infoPanel.classList.remove('hidden');
            infoPanel.style.opacity = '0';
            infoPanel.style.transform = 'translate(-50%, -50%) scale(0.8)';
            
            setTimeout(() => {
                infoPanel.style.opacity = '1';
                infoPanel.style.transform = 'translate(-50%, -50%) scale(1)';
            }, 10);
        }
    }

    // ========== FONCTION : AFFICHER LA SOUS-MAP ==========
    function afficherSousMap() {
        infoContentNormal.style.display = 'none';
        submapContainer.style.display = 'block';
        royaumePanel.style.display = 'none';
    }

    // ========== FONCTION : RETOUR À RAGNARÖK ==========
    function retourRagnarok() {
        infoContentNormal.style.display = 'block';
        submapContainer.style.display = 'none';
        royaumePanel.style.display = 'none';
    }

    // ========== FONCTION : AFFICHER INFOS ROYAUME ==========
    function afficherInfosRoyaume(royaumeId) {
        const royaume = royaumes[royaumeId];
        
        if (royaume) {
            royaumeNom.textContent = royaume.nom;
            royaumeDescription.textContent = royaume.description;
            royaumeImage.src = royaume.image;
            royaumeImage.alt = royaume.nom;
            
            royaumePanel.style.display = 'block';
        }
    }

    // ========== FONCTION : FERMER LE PANNEAU ==========
    function fermerPanel() {
        infoPanel.style.opacity = '0';
        infoPanel.style.transform = 'translate(-50%, -50%) scale(0.8)';
        
        setTimeout(() => {
            infoPanel.classList.add('hidden');
            royaumePanel.style.display = 'none';
            infoContentNormal.style.display = 'block';
            submapContainer.style.display = 'none';
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

    // ========== ÉVÉNEMENTS : BOUTON EXPLORER ROYAUMES ==========
    if (btnExplorerRoyaumes) {
        btnExplorerRoyaumes.addEventListener('click', afficherSousMap);
    }

    // ========== ÉVÉNEMENTS : BOUTON RETOUR RAGNARÖK ==========
    if (btnRetourRagnarok) {
        btnRetourRagnarok.addEventListener('click', retourRagnarok);
    }

    // ========== ÉVÉNEMENTS : POINTS DES ROYAUMES ==========
    document.addEventListener('click', function(e) {
        if (e.target.closest('.royaume-point')) {
            const royaumeId = e.target.closest('.royaume-point').getAttribute('data-royaume');
            afficherInfosRoyaume(royaumeId);
        }
    });

    // ========== ÉVÉNEMENTS : FERMER LE PANNEAU ==========
    closeBtn.addEventListener('click', fermerPanel);

    infoPanel.addEventListener('click', function(e) {
        if (e.target === this) {
            fermerPanel();
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !infoPanel.classList.contains('hidden')) {
            fermerPanel();
        }
    });

    console.log('🎮 Map Interactive God of War chargée !');
    console.log('📍 Ère Grecque : 4 jeux');
    console.log('📍 Ère Nordique : 2 jeux');
    console.log('🗺️ Sous-map Ragnarök : 9 royaumes disponibles');
});