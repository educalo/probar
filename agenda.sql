-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-02-2024 a las 12:23:58
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agenda`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `nombres`
--

CREATE TABLE `nombres` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `fecha_alta` datetime NOT NULL,
  `fecha_actualizacion` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `nombres`
--

INSERT INTO `nombres` (`id`, `nombre`, `fecha_alta`, `fecha_actualizacion`) VALUES
(20, 'a', '0000-00-00 00:00:00', NULL),
(21, 'f1', '0000-00-00 00:00:00', NULL),
(22, 'edu', '0000-00-00 00:00:00', NULL),
(23, 'bbb', '0000-00-00 00:00:00', NULL),
(24, 'uuu', '0000-00-00 00:00:00', NULL),
(25, 'eee', '0000-00-00 00:00:00', NULL),
(26, 'yyyy', '0000-00-00 00:00:00', NULL),
(27, 'qqqq', '0000-00-00 00:00:00', NULL),
(28, 'xxx', '0000-00-00 00:00:00', NULL),
(29, 'bbbbbbbb', '0000-00-00 00:00:00', NULL),
(31, 'ffa', '0000-00-00 00:00:00', NULL),
(32, 'abcdd', '0000-00-00 00:00:00', NULL),
(33, 'ABAAAA', '0000-00-00 00:00:00', NULL),
(34, 'aqqqqa', '0000-00-00 00:00:00', NULL),
(35, 'a', '0000-00-00 00:00:00', NULL),
(36, 'ns', '0000-00-00 00:00:00', NULL),
(40, '0', '0000-00-00 00:00:00', NULL),
(41, '0', '0000-00-00 00:00:00', NULL),
(42, 'a3', '2024-02-12 10:33:36', NULL),
(43, 'edu72', '2024-02-12 10:47:58', NULL),
(44, 'edu3', '2024-02-12 10:53:25', NULL),
(45, 'aaa', '2024-02-12 10:54:19', NULL),
(46, 'a', '2024-02-12 10:54:50', NULL),
(47, 'a', '2024-02-12 10:55:04', NULL),
(48, 'a9', '2024-02-12 10:57:42', NULL),
(49, 'a7', '2024-02-12 10:58:27', NULL),
(50, 'a8', '2024-02-12 11:00:09', NULL),
(51, 'a9', '2024-02-12 11:02:07', NULL),
(52, 'a3', '2024-02-12 11:03:26', NULL),
(53, 'a', '2024-02-12 11:04:28', NULL),
(54, '5555555555', '2024-02-12 12:07:53', NULL),
(55, 'aaaaaaaaaaaaa', '2024-02-12 12:08:29', NULL),
(56, 'manu', '2024-02-12 12:09:06', NULL),
(57, 'a', '2024-02-12 11:17:39', NULL),
(58, 'afffff', '2024-02-12 11:17:45', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `nombres`
--
ALTER TABLE `nombres`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `nombres`
--
ALTER TABLE `nombres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
