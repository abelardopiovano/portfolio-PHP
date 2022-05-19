-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 19-05-2022 a las 01:29:43
-- Versión del servidor: 5.7.11
-- Versión de PHP: 5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `portfolio_abelardo_piovano`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `educacion`
--

CREATE TABLE `educacion` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nombre_inst` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL,
  `titulo` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `educacion`
--

INSERT INTO `educacion` (`id`, `descripcion`, `nombre_inst`, `persona_id`, `titulo`) VALUES
(7, 'Analista Programador de Sistemas orientado a objetos en lenguajes Visual Basic, html, php y MySql. - Técnico especializado en Hardware y Sofware. - Técnico Superior En Redes y Telecomunicaciones.', 'Instituto Nuevo Cuyo', 1, 'Analista Superior de Sistemas'),
(8, 'Planificación de Redes MAN-WAN-LAN - Implementación de Enlaces Inalámbricos AP. y nodos - Administración de Servidore DHCP, Publicación y seguridad de las redes', 'U.T.N. Universidad Tecnolóca Nacionál - Postgrados', 1, 'Postgrado en Gestión y Planificación de Redes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `experiencia`
--

CREATE TABLE `experiencia` (
  `id` bigint(20) NOT NULL,
  `cargo` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `descripcion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nombre_empresa` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `experiencia`
--

INSERT INTO `experiencia` (`id`, `cargo`, `descripcion`, `nombre_empresa`, `persona_id`) VALUES
(1, 'Operador de Sistemas de Producción', 'Producción y Operación de las maquinarias que fabrican Tarjetas magnética para el sistema prepago de transporte MENDOBUS.', 'Expreso Jocolí El Cacique y otras U.T.E', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habilidades`
--

CREATE TABLE `habilidades` (
  `id` bigint(20) NOT NULL,
  `habilidad` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL,
  `url_habilidad` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `habilidades`
--

INSERT INTO `habilidades` (`id`, `habilidad`, `persona_id`, `url_habilidad`) VALUES
(16, '', 1, 'https://e7.pngegg.com/pngimages/320/790/png-clipart-web-development-php-programming-language-computer-programming-scripting-language-others-miscellaneous-blue-thumbnail.png'),
(17, '', 1, 'https://e7.pngegg.com/pngimages/364/982/png-clipart-python-programming-language-computer-programming-language-angle-text-thumbnail.png'),
(18, '', 1, 'https://e7.pngegg.com/pngimages/889/976/png-clipart-the-c-programming-language-computer-programming-programming-miscellaneous-blue-thumbnail.png'),
(19, '', 1, 'https://e7.pngegg.com/pngimages/650/754/png-clipart-powershell-scripting-language-programming-language-path-shell-blue-angle-thumbnail.png'),
(20, '', 1, 'https://e7.pngegg.com/pngimages/785/145/png-clipart-java-development-kit-software-development-kit-computer-programming-computer-icons-programming-language-icon-text-logo-thumbnail.png'),
(21, '', 1, 'https://e7.pngegg.com/pngimages/465/779/png-clipart-blue-and-white-c-logo-the-c-programming-language-computer-programming-computer-icons-programmer-blue-angle-thumbnail.png'),
(22, '', 1, 'https://e7.pngegg.com/pngimages/535/618/png-clipart-ruby-on-rails-computer-programming-programming-language-ruby-angle-rectangle-thumbnail.png'),
(23, '', 1, 'https://e7.pngegg.com/pngimages/328/221/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo-thumbnail.png'),
(24, '', 1, 'https://e7.pngegg.com/pngimages/292/912/png-clipart-graphql-query-language-representational-state-transfer-application-programming-interface-github-angle-magenta-thumbnail.png'),
(25, '', 1, 'https://e7.pngegg.com/pngimages/230/329/png-clipart-computer-icons-microsoft-visual-studio-visual-programming-language-icon-design-visual-studio-purple-violet-thumbnail.png'),
(26, '', 1, 'https://e7.pngegg.com/pngimages/542/657/png-clipart-web-page-programming-language-computer-icons-web-browser-computing-computer-text-hand-thumbnail.png'),
(27, '', 1, 'https://e7.pngegg.com/pngimages/276/285/png-clipart-source-code-computer-programming-web-development-digital-development-computer-computer-programming-thumbnail.png'),
(28, '', 1, 'https://e7.pngegg.com/pngimages/4/186/png-clipart-javascript-node-js-logo-computer-programming-programmer-others-miscellaneous-angle-thumbnail.png'),
(29, '', 1, 'https://e7.pngegg.com/pngimages/410/100/png-clipart-web-development-html-responsive-web-design-logo-javascript-html-angle-web-design-thumbnail.png'),
(30, '', 1, 'https://e1.pngegg.com/pngimages/326/868/png-clipart-css3-badge-blue-and-white-css-icon-thumbnail.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nombre` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `url_cv` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`id`, `descripcion`, `nombre`, `url_cv`) VALUES
(1, 'ANALISTA DE SISTEMA', 'ABELARDO H. PIOVANO', '../../../assets/doc/CV.pdf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyecto`
--

CREATE TABLE `proyecto` (
  `id` bigint(20) NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `nombre_proyecto` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `persona_id` bigint(20) DEFAULT NULL,
  `url_imagen` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `url_proyecto` varchar(255) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `proyecto`
--

INSERT INTO `proyecto` (`id`, `descripcion`, `nombre_proyecto`, `persona_id`, `url_imagen`, `url_proyecto`) VALUES
(9, 'Diseño, Programación e Implementación de la página web institucional del Nosocomio Ministro Dr. Ramón Carrillo con sede en Las Heras - Mendoza.', 'Programación e Implementación de Web Institucionál', 1, '../../../assets/images/project.jpg', 'http://www.hospitalcarrillo.mendoza.gov.ar'),
(10, 'Se ofrece a los clientes Diseño de software a medida, planificación e implementación.', 'Microemprendimiento Propio', 1, '../../../assets/images/project2.jpg', 'http://www.tecnicomp.eshost.com.ar'),
(11, 'Portal de esparcimiento personal para ser compartido con amigos y conocidos.', 'Página de esparcimiento personal', 1, '../../../assets/images/project3.jpg', 'http://www.eldespiadado.eshost.com.ar');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `educacion`
--
ALTER TABLE `educacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `habilidades`
--
ALTER TABLE `habilidades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `educacion`
--
ALTER TABLE `educacion`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT de la tabla `experiencia`
--
ALTER TABLE `experiencia`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `habilidades`
--
ALTER TABLE `habilidades`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT de la tabla `persona`
--
ALTER TABLE `persona`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `proyecto`
--
ALTER TABLE `proyecto`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
