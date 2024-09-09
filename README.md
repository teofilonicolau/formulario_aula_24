# Formulário de Contato com Validação

Este projeto foi desenvolvido como parte do exercício da **Aula 24** do curso **Turma Full Stack 2 (+praTi e Codifica Edu) - 2024/2**. O objetivo é criar um formulário de contato com validação de campos usando HTML, CSS e JavaScript.

## Funcionalidades

O formulário contém os seguintes campos:

- **Nome**: Campo obrigatório para inserção do nome completo do usuário.
- **E-mail**: Campo obrigatório que valida o formato do e-mail.
- **Telefone (opcional)**: Campo opcional para inserção do telefone no formato `(99) 99999-9999`.
- **Assunto**: Campo de seleção com 3 opções (Dúvida, Suporte, Feedback).
- **Mensagem**: Campo obrigatório onde o usuário insere sua mensagem.
- **Aceito os Termos de Uso**: Checkbox obrigatório que deve ser marcado para enviar o formulário.
- **Botão de Enviar**: O botão de envio só é habilitado quando todos os campos obrigatórios são preenchidos corretamente.
- ![image](https://github.com/user-attachments/assets/31716db9-4184-4113-a3ec-1eb9a525df55)


## Validações
![image](https://github.com/user-attachments/assets/5b149a6f-0d77-443a-b35a-15521e56fa12)


As validações são realizadas utilizando JavaScript, com as seguintes regras:

- **Nome**: Não pode estar vazio.
- **E-mail**: Deve estar no formato correto de e-mail.
- **Telefone**: Opcional, mas deve seguir o padrão de telefone brasileiro caso seja preenchido.
- **Assunto**: O usuário deve selecionar uma das opções.
- **Mensagem**: Não pode estar vazia.
- **Termos de Uso**: O checkbox deve ser marcado.

## Estilização

A estilização do formulário foi realizada com CSS, aplicando os seguintes elementos:

- **Borda arredondada** ao redor do formulário.
- **Espaçamento adequado** entre os campos para melhorar a experiência do usuário.
- **Estilos de foco** nos campos de input para destacar o campo ativo.
- **Botão de envio** estilizado com sombra, efeito hover e animação suave ao clicar.

## Como Executar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/teofilonicolau/formulario_aula_24.git
```

2. Navegue até o diretório do projeto:

```bash
cd formulario_aula_24

```
3. Abra o arquivo index.html em um navegador para visualizar e testar o formulário.

## Tecnologias Utilizadas
 - HTML5: Para estruturação do formulário.
 - ![image](https://github.com/user-attachments/assets/acda15c6-834b-43bb-abb7-1b396cc4de74)

 - CSS3: Para estilização e responsividade do layout.
 - ![image](https://github.com/user-attachments/assets/c0d028bf-7eb2-42bb-a34a-10d82fdaf0cd)

 - JavaScript: Para validação dos campos e habilitação do botão de envio.
 - ![image](https://github.com/user-attachments/assets/0112417f-61df-4df3-ae3a-83c0949b4962)

## Autor:
#### Teófilo Nicolau


