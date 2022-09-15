### Exercício 1: Descubra como fazer uma pesquisa em qualquer tabela sem usar uma linha de código.

- Utilizar o botão direito da tabela, e selecionar a opção "select rows - limit 600" 

### Exercício 2: Descubra como é possível criar uma tabela sem usar código SQL.
-  Utilizar o botão direito da tabela, e escolher a opção create table

### Exercício 3: Feito isso, crie a seguinte tabela com as seguintes restrições:
- Utilizando o GUI do Mysql Workbench.
- Tabela: filme
- Colunas e suas características:
filme_id - primary key, tipo int, incrementa de forma automática mais 1 a cada valor adicionado;
descricao - não permite nulos, tipo texto varchar(100);
ano_lancamento - não permite nulos, tipo int;
nota - permite nulos, tipo int;

### Exercício 4: Analise a tabela city e encontre a tabela à qual a coluna country_id faz referência.
- country.

### Exercício 5: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela city faz com a tabela country?
- N:1

### Exercício 6: Qual tipo de relacionamento a tabela country faz com a tabela city?
- 1:N
