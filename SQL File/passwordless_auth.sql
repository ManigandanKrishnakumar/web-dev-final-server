DROP SCHEMA IF EXISTS `passwordless_auth`;
CREATE SCHEMA `passwordless_auth`;
USE `passwordless_auth`;

CREATE TABLE `users` (
  `user_name` VARCHAR(40) NOT NULL,
  `user_role` VARCHAR(30) NOT NULL DEFAULT 'Normal-User',
  `public_key` JSON NOT NULL,
  `meta_data` JSON NOT NULL,
  PRIMARY KEY (`user_name`));

CREATE TABLE `speedTests` (
  `id` INTEGER AUTO_INCREMENT,
  `user_name` VARCHAR(40) NOT NULL,
  `download` DOUBLE NOT NULL,
  `hostname` VARCHAR(40) NOT NULL,
  `ip_address` VARCHAR(40) NOT NULL,
  `jitter` VARCHAR(40),
  `latency` VARCHAR(40),
  `maxDownload` DOUBLE,
  `maxUpload` DOUBLE,
  `testDate` DATETIME NOT NULL,
  `testServer` VARCHAR(40),
  `upload` DOUBLE,
  `isp` VARCHAR(40),
  `address` VARCHAR(40),
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_name`) REFERENCES `users`(`user_name`));

  CREATE TABLE `requests` (
  `id` INTEGER AUTO_INCREMENT,
  `user_name` VARCHAR(40) NOT NULL,
  `time_stamp` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`user_name`) REFERENCES `users`(`user_name`));