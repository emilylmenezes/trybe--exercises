🚀 No Docker Hub, utilizando a caixa de busca ("Search for great content"), busque pela imagem da Distribuição Linux Debian.

![image](https://user-images.githubusercontent.com/84086374/189022192-7241cdac-c460-4f41-9a7e-352a643ec403.png)


🚀 Uma vez que encontrar a imagem oficial, acesse-a (clicando em seu card) e verifique na página de detalhes. Confira se existe algum comando para baixar a imagem localmente sem ter que criar um container para isso.

![image](https://user-images.githubusercontent.com/84086374/189022317-38f424af-a5fc-4504-8c3e-49da07d6b1e1.png)


🚀 Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.

![image](https://user-images.githubusercontent.com/84086374/189022665-9f22d3f2-2cbc-4ceb-bebe-1c76d18aa03b.png)


🚀 Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.

🚀 No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.

🚀 Encerre o terminal.

![image](https://user-images.githubusercontent.com/84086374/189023198-1d11be1d-f6d9-4c1f-a6ed-b3cf52a95ac8.png)


🚀 Verifique na sua lista de containers qual container se refere ao exercício que acabou de praticar.

Mostrei todos que foram criados e busquei o que pratiquei através desse comando: docker ps -a

🚀 Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.

![image](https://user-images.githubusercontent.com/84086374/189023599-e696fc0e-2610-452a-ae94-5dd577136b99.png)

🚀 Retome o container que foi criado anteriormente neste exercício.

🚀 Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.

🚀 Encerre o terminal.

🚀 Remova somente o container criado para esse exercício.

![image](https://user-images.githubusercontent.com/84086374/189024181-9eaa420a-101d-4bb1-8506-af9e3d9bae3d.png)

[BÔNUS] Crie e rode de modo interativo em modo 'Cleanup', a imagem andrius/ascii-patrol.

docker run -it --rm andrius/ascii-patrol

[BÔNUS] **Encerre o container utilizando os botões [ctrl] + [c].

![image](https://user-images.githubusercontent.com/84086374/189024339-29fe7fd0-74db-4e41-81eb-9580803f81f7.png)
