-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Client :  ustonesezv13.mysql.db
-- Généré le :  Lun 05 Décembre 2016 à 11:05
-- Version du serveur :  5.5.50-0+deb7u2-log
-- Version de PHP :  5.4.45-0+deb7u5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ustonesezv13`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL,
  `root_id` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `lft` int(11) NOT NULL,
  `lvl` int(11) NOT NULL,
  `rgt` int(11) NOT NULL,
  `slug` varchar(128) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Contenu de la table `categories`
--

INSERT INTO `categories` (`id`, `root_id`, `parent_id`, `name`, `lft`, `lvl`, `rgt`, `slug`) VALUES
(1, 1, NULL, 'Travaux / Gros travaux', 290, 1, 329, 'travaux-gros-travaux'),
(2, 2, NULL, 'Enfance', 112, 1, 119, 'enfance'),
(3, 3, 2, 'Babysitting, garde d&#39;enfants, nounou et sortie d&#39;école', 117, 2, 118, 'babysitting-garde-d-39-enfants-nounou-et-sortie-d-39-ecole'),
(4, 4, 87, 'Jardinage', 125, 2, 126, 'jardinage'),
(5, 5, 87, 'Bricolage', 121, 2, 122, 'bricolage'),
(6, 6, NULL, 'Administration et gestion', 2, 1, 23, 'administration-et-gestion'),
(7, 7, NULL, 'Déménagement', 104, 1, 111, 'demenagement'),
(8, 6, 6, 'Assistance administrative et écrivain public', 3, 2, 4, 'assistance-administrative-et-ecrivain-public'),
(9, 9, 1, 'Décoration et agencement', 299, 2, 300, 'decoration-et-agencement'),
(10, 6, 6, 'Comptabilité', 5, 2, 6, 'comptabilite'),
(11, 11, 6, 'Courtier en assurance', 15, 2, 16, 'courtier-en-assurance'),
(12, 12, 6, 'Ressources humaines', 19, 2, 20, 'ressources-humaines'),
(13, 13, 6, 'Secrétariat', 21, 2, 22, 'secretariat'),
(14, 14, 6, 'Conciergerie', 7, 2, 8, 'conciergerie'),
(15, 6, 6, 'Conseil aux entreprises / dirigeants', 9, 2, 10, 'conseil-aux-entreprises-dirigeants'),
(16, 16, 6, 'Courtier en crédit', 17, 2, 18, 'courtier-en-credit'),
(17, 17, 6, 'Conseil juridique', 13, 2, 14, 'conseil-juridique'),
(18, 18, 6, 'Conseil fiscal et impôts', 11, 2, 12, 'conseil-fiscal-et-impots'),
(19, 19, NULL, 'Animaux', 24, 1, 33, 'animaux'),
(20, 20, 19, 'Promenade d&#39;animaux', 27, 2, 28, 'promenade-d-39-animaux'),
(21, 21, 19, 'Garde d&#39;animaux', 25, 2, 26, 'garde-d-39-animaux'),
(22, 22, 19, 'Soin d&#39;animaux', 29, 2, 30, 'soin-d-39-animaux'),
(23, 23, 19, 'Toilettage', 31, 2, 32, 'toilettage'),
(24, 24, NULL, 'Automobile et 2 roues', 34, 1, 49, 'automobile-et-2-roues'),
(25, 25, 24, 'Chasseur de voiture', 37, 2, 38, 'chasseur-de-voiture'),
(26, 26, 24, 'Carrosserie et peinture auto', 35, 2, 36, 'carrosserie-et-peinture-auto'),
(27, 27, 24, 'Mécanicien et garagiste', 45, 2, 46, 'mecanicien-et-garagiste'),
(28, 28, 24, 'Dépannage et diagnostic auto', 41, 2, 42, 'depannage-et-diagnostic-auto'),
(29, 29, 24, 'Réparation de vélo', 47, 2, 48, 'reparation-de-velo'),
(30, 30, 24, 'Lavage et entretien auto', 43, 2, 44, 'lavage-et-entretien-auto'),
(31, 31, 24, 'Covoiturage', 39, 2, 40, 'covoiturage'),
(32, 32, NULL, 'Beauté, santé et bien-être', 50, 1, 77, 'beaute-sante-et-bien-etre'),
(33, 33, 32, 'Coaching et développement personnel', 51, 2, 52, 'coaching-et-developpement-personnel'),
(34, 34, 32, 'Coiffure (coupe, lissage, couleur, extension)', 53, 2, 54, 'coiffure-coupe-lissage-couleur-extension'),
(35, 35, 32, 'Pose et soin des ongles, manucure et pédicure ', 69, 2, 70, 'pose-et-soin-des-ongles-manucure-et-pedicure'),
(36, 36, 32, 'Massage', 65, 2, 66, 'massage'),
(37, 37, 32, 'Pose de faux cils et extension', 67, 2, 68, 'pose-de-faux-cils-et-extension'),
(38, 38, 32, 'Epilation', 55, 2, 56, 'epilation'),
(39, 39, 32, 'Maquillage', 63, 2, 64, 'maquillage'),
(40, 40, 32, 'Tatouage', 75, 2, 76, 'tatouage'),
(41, 41, 32, 'Kinésithérapeute et ostéopathe', 61, 2, 62, 'kinesitherapeute-et-osteopathe'),
(42, 42, 32, 'Sophrologie', 73, 2, 74, 'sophrologie'),
(43, 43, 32, 'Infirmier(e) et aide-soignant(e)', 59, 2, 60, 'infirmier-e-et-aide-soignant-e'),
(44, 44, 32, 'Guérisseur et magnétiseur', 57, 2, 58, 'guerisseur-et-magnetiseur'),
(45, 45, 32, 'Rebouteux et conjureur de feu', 71, 2, 72, 'rebouteux-et-conjureur-de-feu'),
(46, 46, NULL, 'Culture et loisirs', 78, 1, 105, 'culture-et-loisirs'),
(47, 47, 46, 'Dessin, peinture, portraitiste et illustrateur', 93, 2, 94, 'dessin-peinture-portraitiste-et-illustrateur'),
(48, 48, 46, 'Lecture', 99, 2, 100, 'lecture'),
(49, 49, 46, 'Ecriture', 97, 2, 98, 'ecriture'),
(50, 50, 46, 'Compositeur et beatmaker', 87, 2, 88, 'compositeur-et-beatmaker'),
(51, 51, 46, 'Cours divers', 91, 2, 92, 'cours-divers'),
(52, 52, 46, 'Cameraman et photographe', 83, 2, 84, 'cameraman-et-photographe'),
(53, 53, 46, 'Cours de musique et de chant', 89, 2, 90, 'cours-de-musique-et-de-chant'),
(54, 54, 46, 'DJ', 95, 2, 96, 'dj'),
(55, 55, 46, 'Accordage d&#39;instruments', 79, 2, 80, 'accordage-d-39-instruments'),
(56, 56, 1, 'Architecture', 291, 2, 292, 'architecture'),
(57, 57, 1, 'Architecture d&#39;intérieur', 293, 2, 294, 'architecture-d-39-interieur'),
(58, 58, 1, 'Paysagiste', 315, 2, 316, 'paysagiste'),
(59, 59, 46, 'Carrelage et pose de parquet', 85, 2, 86, 'carrelage-et-pose-de-parquet'),
(60, 60, 46, 'Pose et agencement de cuisine', 101, 2, 102, 'pose-et-agencement-de-cuisine'),
(61, 61, 1, 'Terrassement', 327, 2, 328, 'terrassement'),
(62, 62, 1, 'Débroussaillage et démaquisage', 297, 2, 298, 'debroussaillage-et-demaquisage'),
(63, 63, 1, 'Plomberie', 321, 2, 322, 'plomberie'),
(64, 64, 1, 'Électricien ', 301, 2, 302, 'electricien'),
(65, 65, 1, 'Maçon', 309, 2, 310, 'macon'),
(66, 66, 1, 'Plaquiste', 319, 2, 320, 'plaquiste'),
(67, 67, 1, 'Menuisier', 311, 2, 312, 'menuisier'),
(68, 68, 1, 'Peintre', 317, 2, 318, 'peintre'),
(69, 69, 1, 'Serrurier et métallier', 325, 2, 326, 'serrurier-et-metallier'),
(70, 70, 1, 'Fabrication de meubles', 303, 2, 304, 'fabrication-de-meubles'),
(71, 71, 1, 'Luthier', 307, 2, 308, 'luthier'),
(72, 72, 1, 'Nettoyage après travaux', 313, 2, 314, 'nettoyage-apres-travaux'),
(73, 73, 1, 'Installation', 305, 2, 306, 'installation'),
(74, 74, 1, 'Rénovation', 323, 2, 324, 'renovation'),
(75, 75, 1, 'Couture et reprisage ', 295, 2, 296, 'couture-et-reprisage'),
(76, 76, NULL, 'Informatique et web', 210, 1, 225, 'informatique-et-web'),
(77, 77, 76, 'Formation et cours d&#39;informatique', 213, 2, 214, 'formation-et-cours-d-39-informatique'),
(78, 78, 76, 'Dépannage et réparation informatique', 211, 2, 212, 'depannage-et-reparation-informatique'),
(79, 79, 76, 'Montage photo et vidéo', 217, 2, 218, 'montage-photo-et-video'),
(80, 80, 76, 'Webdesign, création et développement de site web', 223, 2, 224, 'webdesign-creation-et-developpement-de-site-web'),
(81, 81, 76, 'Graphisme et création de logo', 215, 2, 216, 'graphisme-et-creation-de-logo'),
(82, 82, 76, 'Réparation d&#39;ordinateur, smartphone et console', 219, 2, 220, 'reparation-d-39-ordinateur-smartphone-et-console'),
(83, 83, 76, 'Web marketing et communication', 221, 2, 222, 'web-marketing-et-communication'),
(84, 84, 7, 'Déménagement', 105, 2, 106, 'demenagement-1'),
(85, 85, 7, 'Transport de meubles et d&#39;objets', 109, 2, 110, 'transport-de-meubles-et-d-39-objets'),
(86, 86, 7, 'Montage / démontage de meubles', 107, 2, 108, 'montage-demontage-de-meubles'),
(87, 87, NULL, 'Entretien de la maison', 120, 1, 135, 'entretien-de-la-maison'),
(88, 88, 87, 'Gardiennage', 123, 2, 124, 'gardiennage'),
(89, 89, 87, 'Lavage de vitres', 127, 2, 128, 'lavage-de-vitres'),
(90, 90, 87, 'Ménage', 129, 2, 130, 'menage'),
(91, 91, 87, 'Repassage', 133, 2, 134, 'repassage'),
(92, 92, 87, 'Ramonage', 131, 2, 132, 'ramonage'),
(93, 93, NULL, 'Services à la personne', 258, 1, 277, 'services-a-la-personne'),
(94, 94, 93, 'Auxiliaire de vie', 263, 2, 264, 'auxiliaire-de-vie'),
(95, 95, 93, 'Aide aux personnes âgées', 259, 2, 260, 'aide-aux-personnes-agees'),
(96, 96, 93, 'Famille d&#39;accueil', 267, 2, 268, 'famille-d-39-accueil'),
(97, 97, 93, 'Transport de personne', 273, 2, 274, 'transport-de-personne'),
(98, 98, 93, 'Livraison de repas', 271, 2, 272, 'livraison-de-repas'),
(99, 99, 93, 'Livraison de courses', 269, 2, 270, 'livraison-de-courses'),
(100, 100, 93, 'Cuisine à domicile', 265, 2, 266, 'cuisine-a-domicile'),
(101, 101, 93, 'Aide aux personnes en situation de handicap', 261, 2, 262, 'aide-aux-personnes-en-situation-de-handicap'),
(102, 102, 93, 'Transport de personne en situation de handicap', 275, 2, 276, 'transport-de-personne-en-situation-de-handicap'),
(103, 103, 2, 'Animation pour enfant', 113, 2, 114, 'animation-pour-enfant'),
(104, 104, 2, 'Assistance maternelle', 115, 2, 116, 'assistance-maternelle'),
(105, 105, NULL, 'Sport et danse', 284, 1, 289, 'sport-et-danse'),
(106, 106, 105, 'Coaching sportif, cours et fitness', 285, 2, 286, 'coaching-sportif-cours-et-fitness'),
(107, 107, 105, 'Cours de danse', 287, 2, 288, 'cours-de-danse'),
(108, 108, NULL, 'Soutien scolaire', 278, 1, 283, 'soutien-scolaire'),
(109, 109, 108, 'Aide aux devoirs', 279, 2, 280, 'aide-aux-devoirs'),
(110, 110, 108, 'Soutien scolaire', 281, 2, 282, 'soutien-scolaire-1'),
(111, 111, NULL, 'Langues', 226, 1, 233, 'langues'),
(112, 112, 111, 'Cours de langue', 227, 2, 228, 'cours-de-langue'),
(113, 113, 111, 'Cours de langue rare', 229, 2, 230, 'cours-de-langue-rare'),
(114, 114, 111, 'Traduction', 231, 2, 232, 'traduction'),
(115, 115, NULL, 'Locations', 234, 1, 249, 'locations'),
(116, 116, 115, 'Location d&#39;électroménager', 237, 2, 238, 'location-d-39-electromenager'),
(117, 117, 115, 'Location de meuble', 241, 2, 242, 'location-de-meuble'),
(118, 118, 115, 'Location de vêtement', 245, 2, 246, 'location-de-vetement'),
(119, 119, 115, 'Location d&#39;outils', 239, 2, 240, 'location-d-39-outils'),
(120, 120, 115, 'Location d’œuvre d&#39;art', 235, 2, 236, 'location-d-oeuvre-d-39-art'),
(121, 121, 115, 'Location de voiture', 247, 2, 248, 'location-de-voiture'),
(122, 122, 115, 'Location de sono, éclairages et platines', 243, 2, 244, 'location-de-sono-eclairages-et-platines'),
(123, 123, NULL, 'Événementiel et arts du spectacle ', 140, 1, 161, 'evenementiel-et-arts-du-spectacle'),
(124, 124, 123, 'Acteur et comédien', 141, 2, 142, 'acteur-et-comedien'),
(125, 125, 123, 'Agent de sécurité', 143, 2, 144, 'agent-de-securite'),
(126, 126, 123, 'Animateur de soirée', 145, 2, 146, 'animateur-de-soiree'),
(127, 127, 123, 'Wedding planner', 159, 2, 160, 'wedding-planner'),
(128, 128, 123, 'Traiteur', 157, 2, 158, 'traiteur'),
(129, 129, 123, 'Chanteur, musicien et groupe de musique', 147, 2, 148, 'chanteur-musicien-et-groupe-de-musique'),
(130, 130, 123, 'Ingénieur du son', 149, 2, 150, 'ingenieur-du-son'),
(131, 131, 123, 'Location de salle', 151, 2, 152, 'location-de-salle'),
(132, 132, 123, 'Régisseur', 153, 2, 154, 'regisseur'),
(133, 133, 123, 'Street marketing', 155, 2, 156, 'street-marketing'),
(134, 134, NULL, 'Hébergement et immobilier', 162, 1, 179, 'hebergement-et-immobilier'),
(135, 135, 134, 'Location de chambre', 173, 2, 174, 'location-de-chambre'),
(136, 136, 134, 'Chasseur d&#39;appartement', 163, 2, 164, 'chasseur-d-39-appartement'),
(137, 137, 134, 'Location d&#39;appartement et maison', 169, 2, 170, 'location-d-39-appartement-et-maison'),
(138, 138, 134, 'Colocation', 165, 2, 166, 'colocation'),
(139, 139, 134, 'Location de bureaux et espaces de coworking', 171, 2, 172, 'location-de-bureaux-et-espaces-de-coworking'),
(140, 140, 134, 'Location de parking', 175, 2, 176, 'location-de-parking'),
(141, 141, 134, 'Location de vacances', 177, 2, 178, 'location-de-vacances'),
(142, 142, 143, 'Location de cave et d&#39;entrepôt', 187, 2, 188, 'location-de-cave-et-d-39-entrepot'),
(143, 143, NULL, 'Hôtellerie et restauration', 180, 1, 193, 'hotellerie-et-restauration'),
(144, 144, 143, 'Barman et serveur/se', 181, 2, 182, 'barman-et-serveur-se'),
(145, 145, 143, 'Cuisine (hôtellerie et restauration)', 183, 2, 184, 'cuisine-hotellerie-et-restauration'),
(146, 146, 143, 'Femme de chambre et gouvernante', 185, 2, 186, 'femme-de-chambre-et-gouvernante'),
(147, 147, 143, 'Maître d&#39;hôtel et réceptionniste', 189, 2, 190, 'maitre-d-39-hotel-et-receptionniste'),
(148, 148, 143, 'Sommelier', 191, 2, 192, 'sommelier'),
(149, 149, NULL, 'Industrie', 194, 1, 209, 'industrie'),
(150, 150, 149, 'Dessinateur industriel', 195, 2, 196, 'dessinateur-industriel'),
(151, 151, 149, 'Ingénieur', 197, 2, 198, 'ingenieur'),
(152, 152, 149, 'Manutentionnaire', 199, 2, 200, 'manutentionnaire'),
(153, 153, 149, 'Nettoyage industriel', 201, 2, 202, 'nettoyage-industriel'),
(154, 154, 149, 'Opérateur en industrie', 203, 2, 204, 'operateur-en-industrie'),
(155, 155, 149, 'Technicien d&#39;industrie', 207, 2, 208, 'technicien-d-39-industrie'),
(156, 156, 149, 'Ouvrier du bâtiment', 205, 2, 206, 'ouvrier-du-batiment'),
(157, 157, NULL, 'Ésotérisme ', 136, 1, 139, 'esoterisme'),
(158, 158, 157, 'Voyant(e) et medium ', 137, 2, 138, 'voyant-e-et-medium'),
(159, 159, NULL, 'Rencontres', 250, 1, 257, 'rencontres'),
(160, 160, 159, 'Rencontre amoureuse', 255, 2, 256, 'rencontre-amoureuse'),
(161, 161, 159, 'Coaching amoureux', 251, 2, 252, 'coaching-amoureux'),
(162, 162, 159, 'Discussion, sortie et amitié', 253, 2, 254, 'discussion-sortie-et-amitie'),
(163, 163, 134, 'Garde meuble', 167, 2, 168, 'garde-meuble'),
(164, 164, 46, 'Association', 81, 2, 82, 'association');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_3AF34668989D9B62` (`slug`),
  ADD KEY `IDX_3AF3466879066886` (`root_id`),
  ADD KEY `IDX_3AF34668727ACA70` (`parent_id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=165;
--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `FK_3AF34668727ACA70` FOREIGN KEY (`parent_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_3AF3466879066886` FOREIGN KEY (`root_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
