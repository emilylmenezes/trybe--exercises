## Criando imagens mais robustas

### Limpando tudo antes de começar!

Comando: docker system prune -af

### Para o arquivo config.toml, use o seguinte código-fonte:

![image](https://user-images.githubusercontent.com/84086374/189190106-615ba808-bc2b-44a4-9c07-ab4e3ffc1916.png)


### Para o arquivo index.html, use o seguinte código-fonte:

![image](https://user-images.githubusercontent.com/84086374/189190474-545271e9-79e2-4b5b-997f-bd3e9b6fdb72.png)


###  Para o arquivo _index.md, use o seguinte código-fonte:

![image](https://user-images.githubusercontent.com/84086374/189190776-1c7a3422-51dd-42a4-98ab-d3b18e9f97f9.png)


Por fim, para o nosso arquivo Dockerfile, use o seguinte código-fonte:

![image](https://user-images.githubusercontent.com/84086374/189190690-c950993b-0d6a-4e0d-8e83-7204d54dcc14.png)

## Comando para construir a imagem:

docker build -t site-hugo .

## Comando para criar um novo container utilizando a imagem criada anteriormente 

docker run -p 1234:80 -d --name meu-container site-hugo

Acessei as alterações por esse caminho: http://localhost:1234

## Remover o container

docker rm -f meu-container

## Costrução de múltiplos estágios

Mudei o Dockerfile para notar a diferença de tamanho quando utilizamos estágios

![image](https://user-images.githubusercontent.com/84086374/189194451-17ae4f3e-8dc5-4fd4-8128-0006422317ea.png)

E essa foi a diferença: 

![image](https://user-images.githubusercontent.com/84086374/189194114-f4e22eb5-192f-4b1b-8749-299c0261c720.png)
