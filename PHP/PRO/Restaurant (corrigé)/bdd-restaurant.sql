-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Jeu 17 Mars 2016 à 12:04
-- Version du serveur: 5.5.46-0ubuntu0.14.04.2
-- Version de PHP: 5.5.9-1ubuntu4.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `restau`
--

-- --------------------------------------------------------

--
-- Structure de la table `Booking`
--

CREATE TABLE IF NOT EXISTS `Booking` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `BookingDate` date NOT NULL,
  `BookingTime` time NOT NULL,
  `NumberOfSeats` tinyint(4) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `User_Id` (`User_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=24 ;

--
-- Contenu de la table `Booking`
--

INSERT INTO `Booking` (`Id`, `BookingDate`, `BookingTime`, `NumberOfSeats`, `User_Id`, `CreationTimestamp`) VALUES
(10, '2016-03-16', '18:45:00', 8, 13, '2016-03-09 10:28:45'),
(11, '2016-04-20', '20:30:00', 3, 13, '2016-03-09 10:34:49'),
(12, '2016-05-11', '22:15:00', 2, 13, '2016-03-09 11:10:29'),
(13, '2016-04-17', '19:30:00', 2, 13, '2016-03-09 11:12:18'),
(14, '2016-03-28', '12:00:00', 1, 13, '2016-03-09 11:12:41'),
(16, '2016-03-14', '13:00:00', 2, 13, '2016-03-09 11:15:46'),
(17, '2016-03-31', '12:00:00', 12, 13, '2016-03-09 11:16:43'),
(18, '2016-05-05', '12:15:00', 4, 13, '2016-03-09 12:33:28'),
(19, '2016-07-19', '19:30:00', 6, 13, '2016-03-09 12:36:10'),
(20, '2016-05-18', '12:00:00', 2, 13, '2016-03-09 12:49:30'),
(21, '0000-00-00', '17:00:00', 7, 16, '2016-03-10 11:46:37'),
(22, '0000-00-00', '12:00:00', 1, 16, '2016-03-10 11:52:02'),
(23, '0000-00-00', '12:00:00', 1, 16, '2016-03-10 12:00:48');

-- --------------------------------------------------------

--
-- Structure de la table `Meal`
--

CREATE TABLE IF NOT EXISTS `Meal` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(30) NOT NULL,
  `Photo` varchar(30) NOT NULL,
  `Description` varchar(250) NOT NULL,
  `QuantityInStock` tinyint(4) NOT NULL,
  `BuyPrice` double NOT NULL,
  `SalePrice` double NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Contenu de la table `Meal`
--

INSERT INTO `Meal` (`Id`, `Name`, `Photo`, `Description`, `QuantityInStock`, `BuyPrice`, `SalePrice`) VALUES
(1, 'Coca-Cola', 'coca.jpg', 'Mmmm, le Coca-Cola avec 10 morceaux de sucres et tout plein de caféine !', 72, 0.6, 3),
(2, 'Bagel Thon', 'bagel_thon.jpg', 'Notre bagel est constitué d''un pain moelleux avec des grains de sésame et du thon albacore, accompagné de feuilles de salade fraîche du jour  et d''une sauce renversante :-)', 18, 2.75, 5.5),
(3, 'Bacon Cheeseburger', 'bacon_cheeseburger.jpg', 'Ce délicieux cheeseburger contient un steak haché viande française de 150g ainsi que d''un buns grillé juste comme il faut, le tout accompagné de frites fraîches maison !', 14, 6, 12.5),
(4, 'Carrot Cake', 'carrot_cake.jpg', 'Le carrot cake maison ravira les plus gourmands et les puristes : tous les ingrédients sont naturels !\r\nÀ consommer sans modération', 9, 3, 6.75),
(5, 'Donut Chocolat', 'chocolate_donut.jpg', 'Les donuts sont fabriqués le matin même et sont recouvert d''une délicieuse sauce au chocolat !', 16, 3, 6.2),
(6, 'Dr. Pepper', 'drpepper.jpg', 'Son goût sucré avec de l''amande vous ravira !', 53, 0.5, 2.9),
(7, 'Milkshake', 'milkshake.jpg', 'Notre milkshake bien crémeux contient des morceaux d''Oréos et est accompagné de crème chantilly et de smarties en guise de topping. Il éblouira vos papilles !', 12, 2, 5.35),
(8, 'Frites', 'frites.jpg', 'Aaaaaah ces merveilleux bâtonnets de pomme de terre qui nous régalent depuis qu''on est petit. Venez déguster les notres, elles sont faites maison !', 127, 0.5, 2.5),
(9, 'Hot-dog', 'hotdog.jpeg', 'Le typique sandwitch américain avec sa saucisse cuite accompagnée de ketchup, moutarde, oignons ou encore une bonne mayonnaise dont nous avons le secret.', 55, 0.7, 3.5),
(10, 'Gillian Anderson', 'gillian.jpeg', 'Pourquoi ne pas profiter de votre repas avec la charmante compagnie de l''héroine de X-Files ? L''Amérique comme vous l''avez toujours rêvé...', 1, 0, 4000),
(11, 'Sarah Michelle Gellar', 'sarah.jpg', 'Le petit plus de la maison : la possibilité de manger avec Buffy ! Attention elle est très gourmande...', 1, 0, 3000);

-- --------------------------------------------------------

--
-- Structure de la table `Order`
--

CREATE TABLE IF NOT EXISTS `Order` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `User_Id` int(11) NOT NULL,
  `TotalAmount` double DEFAULT NULL,
  `TaxRate` float DEFAULT NULL,
  `TaxAmount` double DEFAULT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `CompleteTimestamp` datetime NOT NULL,
  PRIMARY KEY (`Id`),
  KEY `User_Id` (`User_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `Order`
--

INSERT INTO `Order` (`Id`, `User_Id`, `TotalAmount`, `TaxRate`, `TaxAmount`, `CreationTimestamp`, `CompleteTimestamp`) VALUES
(2, 13, 4163, 20, 832.6, '2016-03-16 16:53:13', '2016-03-16 16:53:13'),
(3, 13, 4163, 20, 832.6, '2016-03-16 16:55:16', '2016-03-16 16:55:16');

-- --------------------------------------------------------

--
-- Structure de la table `OrderLine`
--

CREATE TABLE IF NOT EXISTS `OrderLine` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `QuantityOrdered` int(4) NOT NULL,
  `Meal_Id` int(11) NOT NULL,
  `Order_Id` int(11) NOT NULL,
  `PriceEach` double NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `UniciteMealOrder` (`Meal_Id`,`Order_Id`),
  KEY `Meal_Id` (`Meal_Id`),
  KEY `Order_Id` (`Order_Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Contenu de la table `OrderLine`
--

INSERT INTO `OrderLine` (`Id`, `QuantityOrdered`, `Meal_Id`, `Order_Id`, `PriceEach`) VALUES
(2, 15, 1, 2, 3),
(3, 5, 3, 2, 12.5),
(4, 6, 8, 2, 2.5),
(5, 1, 10, 2, 4000),
(6, 6, 4, 2, 6.75),
(7, 15, 1, 3, 3),
(8, 5, 3, 3, 12.5),
(9, 6, 8, 3, 2.5),
(10, 1, 10, 3, 4000),
(11, 6, 4, 3, 6.75);

-- --------------------------------------------------------

--
-- Structure de la table `User`
--

CREATE TABLE IF NOT EXISTS `User` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(40) NOT NULL,
  `LastName` varchar(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(64) NOT NULL,
  `BirthDate` date NOT NULL,
  `Address` varchar(250) NOT NULL,
  `City` varchar(40) NOT NULL,
  `ZipCode` char(5) NOT NULL,
  `Country` varchar(20) DEFAULT NULL,
  `Phone` char(10) NOT NULL,
  `CreationTimestamp` datetime NOT NULL,
  `LastLoginTimestamp` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE KEY `Email` (`Email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Contenu de la table `User`
--

INSERT INTO `User` (`Id`, `FirstName`, `LastName`, `Email`, `Password`, `BirthDate`, `Address`, `City`, `ZipCode`, `Country`, `Phone`, `CreationTimestamp`, `LastLoginTimestamp`) VALUES
(13, 'Lany', 'Drak', 'lanydrak@gmail.com', '$2y$11$da49ee0166983095e516dOBi2NgIUK/LtPMI7nJz6grrrX458Ak4i', '1980-09-18', '4 rue Robert Aylé', 'Asnières-sur-Seine', '92600', 'France', '0612562798', '2016-03-04 10:54:16', NULL),
(14, 'Yann', 'Amarre', 'yanamarre@laposte.fr', '$2y$11$cafed1e6068a72ed41ebbu70q8kDo3bwl1UlLjfhLRLmYeMtWn3Gm', '1985-06-12', '18 rue Du Ralbolle', 'Nice', '06000', 'France', '0644328599', '2016-03-08 14:50:01', NULL),
(15, 'Jean', '', 'jean@yahoo.fr', '$2y$11$2f7b7170d65112f5957e8ez7CDymXyJ6gF4Mj9eRO.DBqeDW4wzey', '0000-00-00', '', '', '', '', '', '2016-03-08 15:07:47', NULL),
(16, 'Vincent', 'Tim', '20cent@caramail.com', '$2y$11$244ed51efc8ad70ca1e54O99tttnqTySf.cWMNRJZr4zJue933dCW', '2016-03-26', '15 rue Victor Hugo', 'Poitiers', '86000', 'France', '0645847710', '2016-03-10 11:45:10', NULL),
(17, 'Marie-Odile2', 'Duchemin', 'mo@coucou', '$2y$11$441546026f24de3bbbd01eJ4RaWveSpe9K7GsylqhKUwjch80oaY.', '1995-06-16', 'btrsbtrzesgbtersbvtersv', 'vfreqzfvrevre', 'AAAAA', 'cfrsqezvfreqgresq', '125123', '2016-03-10 12:05:00', NULL),
(18, 'Michel', 'Moustache', 'michel.moustache@csvs', '$2y$11$b3e71948269136c994facew9ccZNQcpiWWYaZMRm8SzWrHYru//EO', '1966-08-24', 'vfqdsvreqsvrsevres', 'vresvresvres', 'AAAAA', 'vfdsvrfqsevrfqse', '100100', '2016-03-10 12:07:02', NULL);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `Booking`
--
ALTER TABLE `Booking`
  ADD CONSTRAINT `Booking_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `Order`
--
ALTER TABLE `Order`
  ADD CONSTRAINT `Order_ibfk_1` FOREIGN KEY (`User_Id`) REFERENCES `User` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `OrderLine`
--
ALTER TABLE `OrderLine`
  ADD CONSTRAINT `OrderLine_ibfk_1` FOREIGN KEY (`Meal_Id`) REFERENCES `Meal` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `OrderLine_ibfk_2` FOREIGN KEY (`Order_Id`) REFERENCES `Order` (`Id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
