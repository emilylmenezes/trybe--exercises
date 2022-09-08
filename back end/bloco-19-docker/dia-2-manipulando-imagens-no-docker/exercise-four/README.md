## RUN vs. ENTRYPOINT vs. CMD

### Considere o seguinte Dockerfile abaixo e que já construímos essa imagem com nome de exemplo-cmd:

[Vídeo](https://user-images.githubusercontent.com/84086374/189196216-801ad325-17ea-4e5b-b4f8-287d52983f53.webm)

No arquivo Dockerfile eu adicionei o conteúdo: 

![image](https://user-images.githubusercontent.com/84086374/189205375-c46129fa-7d8f-4bfd-b7d7-a33de3b1e311.png)

E ao rodar o comando: docker run --rm exemplo-cmd obtive esse resultado: 

![image](https://user-images.githubusercontent.com/84086374/189205503-83957303-a29e-4f87-a634-31f361a6e691.png)

Agora, ao executar essa imagem como um container com o comando docker run --rm exemplo-entrypoint "Sou diferente!", temos:

![image](https://user-images.githubusercontent.com/84086374/189205663-b123fd8b-8a79-403f-87cd-e8e9a5cfa8f4.png)

Notamos que não sobrescreveu, então no Dockerfile fiz as seguintes alterações: 

![image](https://user-images.githubusercontent.com/84086374/189205987-fd61e939-94ce-44f3-bc43-88e1219961ff.png)

E ao rodar o comando docker run --rm exemplo-entrypoint-cmd, o retorno que tive foi: Sou a mensagem padrão.

Por último, fiz outro teste com o comando: docker run --rm exemplo-entrypoint-cmd "Sou uma mensagem nova!" E, o comando sobrescreveu a mensagem anterior, exibindo-a uma nova que foi passada entenre aspas 


