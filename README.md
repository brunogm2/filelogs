# FileLogs

Projeto que tem o intuito receber logs de um servidor(atualmente se encontra local), salvar em um banco de dados e exibir para o usuario final.

# Como rodar localmente:

Apos clonar o projeto devera rodar o comando "npm install" em ambas pastas -> back-end / front-end
O SQL do projeto se encontra na pasta back-end/src/database e devera ser importado em uma plataforma que suporte MySql.

# Login padrão:

email: bruno@gmail.com
senha: 123456

# Como funciona:
  
Atualmente na home do projeto onde lista todas as logs contem um botão "Simular arquivo de log" onde o intuito é realmente simular um arquivo .txt vindo de um servidor, ou até mesmo de um upload
A cada clique nesse botão ele pega 2.000 dados e vai acoplando no banco de dados e exibindo para o usuario final.
Foi pensada dessa maneira pois se inserir mais de 2.000 dados de uma vez seria demorado e a experiencia do usuario não seria tão boa.

# Tecnologias usadas

 Javascript | NodeJS | ReactJs
