Crie um Dockerfile utilizando a imagem chuanwen/cowsay.

![image](https://user-images.githubusercontent.com/84086374/189210861-321b6f60-19db-4648-a555-28d7bb609ce8.png)

Defina um ENTRYPOINT para a execução do comando.

Observe que o executável cowsay está no diretório /usr/games/

Lembre-se que com ele, diferente do CMD, o comando não poderá ser sobrescrito com o docker run, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.
Utilize o CMD para definir uma mensagem padrão.

![image](https://user-images.githubusercontent.com/84086374/189211068-f6ce7692-8c8b-4ceb-b805-bdac11231837.png)

Gere uma build e execute um container baseado em sua imagem sem passar nenhum comando.

![image](https://user-images.githubusercontent.com/84086374/189211245-1139d875-5537-4e09-8c9c-9c97c60fef2e.png)

Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção -l para listar outros personagens disponíveis e então executar algo como docker container run cowsay -f dragon-and-cow "VQV TRYBE", para exibir um dragão junto com a vaquinha.

![image](https://user-images.githubusercontent.com/84086374/189211386-2bd85dc4-2bf2-46b2-b9a7-a9ebfff054bd.png)

