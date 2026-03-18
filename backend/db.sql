CREATE DATABASE db_top_player;

CREATE TABLE usuarios(
	id INT(6) AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(120) NOT NULL,
	email VARCHAR(150) NOT NULL UNIQUE,
	senha_hash VARCHAR(255) NOT NULL,
	criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE jogos(
	id INT(6) AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(120) NOT NULL UNIQUE,
	genero VARCHAR(80) NOT NULL
);

CREATE TABLE players(
	id INT(6) AUTO_INCREMENT PRIMARY KEY,
	nickname VARCHAR(120) NOT NULL,
	plataforma ENUM('PC', 'PS', 'XBOX', 'MOBILE', 'NINTENDO', 'OUTRO') NOT NULL DEFAULT 'OUTRO',
	criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE partidas(
	id INT(6) AUTO_INCREMENT PRIMARY KEY,
	jogo_id INT NOT NULL,
	player_id INT NOT NULL,
	pontos INT NOT NULL,
	data_partida DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (jogo_id) REFERENCES jogos(id) ON DELETE CASCADE,
	FOREIGN KEY (player_id) REFERENCES players(id) ON DELETE CASCADE
);

SELECT * FROM jogos


CREATE VIEW vw_ranking_por_jogo AS
SELECT
	p.jogo_id,
	p.player_id,
	j.nome AS jogo_nome,
	pl.nickname,
	pl.plataforma,
	SUM(p.pontos) AS total_pontos,
	COUNT (*) AS total_partidas
FROM partidas p
JOIN jogos j ON j.id = p.jogo_id
JOIN players pl ON pl.id = p.player_id
GROUP BY p.jogo_id, j.nome, p.player_id, pl.nickname, pl.plataforma
ORDER BY total_pontos DESC;

SELECT * FROM partidas