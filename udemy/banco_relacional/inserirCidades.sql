select * from estados

INSERT INTO cidade (nome, area, estado_id)
VALUES ('Campinas', 795, 28)

INSERT INTO cidade (nome, area, estado_id)
VALUES ('Niterói', 133.9, 22)

INSERT INTO cidade (nome, area, estado_id)
value('Caruaru', 920.6, (select id from estados where sigla = 'PE'))

INSERT INTO cidade (id, nome, area, estado_id)
VALUE (2, 'Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE'))

select * from cidade