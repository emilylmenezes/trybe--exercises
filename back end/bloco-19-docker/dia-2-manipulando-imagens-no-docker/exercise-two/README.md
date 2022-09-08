## Criando nosso primeiro servidor Web

### Primeiro passo:

Para deixar o ambiente limpo, utilizei o comando: docker system prune -af

### Página Incial

Dentro do arquivo index.html pude adicionar o conteúdo da página principal do servidor web:

![image](https://user-images.githubusercontent.com/84086374/189186694-3fcc7ab2-a721-4a0d-adf2-df032cf863a5.png)

### Dockerfile

Após criar o index.html, comecei a escrever dentro do arquivo docker: 

![image](https://user-images.githubusercontent.com/84086374/189187173-2d3c2433-0295-4c3a-86cb-c605fe058889.png)

E, criei a imagem utilizando o comando: docker build -t meu-servidor-web .

Para executar o container com a imagem eu utilizei: docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web

### Por fim....

Utilizei o caminho: http://localhost:1234/ para encontrar o servidor web rodando

![image](https://user-images.githubusercontent.com/84086374/189189395-d606d94a-1532-4dfe-ad30-5b720b0a667c.png)

