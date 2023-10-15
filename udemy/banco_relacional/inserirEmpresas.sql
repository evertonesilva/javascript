ALTER TABLE empresas MODIFY cnpj VARCHAR (15);


INSERT INTO empresas (nome, cnpj)
VALUES ('Bradesco', 889009789456123),
        ('Vale', 789456321107789),
        ('Cielo', 789654741852963);

desc empresas;

INSERT INTO empresas_unidades (empresa_id, cidade_id, sede)
VALUES (1, 1, 1),
        (1, 2, 0),
        (2, 1, 0),
        (2, 2, 1);