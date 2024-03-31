CREATE TABLE `complaints` (
	`id` integer PRIMARY KEY NOT NULL,
	`firstName` text,
	`lastName` text,
	`email` text,
	`place` text,
	`description` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
