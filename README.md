# Aplicativo Mobile de Gerenciamento de Cursos / Programação de Dispositivos Móveis

## Visão Geral

Esse é um app mobile feito com **React Native** e **Expo**, voltado para o gerenciamento de cursos. Ele usa o **Firebase** para autenticação de usuários e para salvar os dados no **Firestore**, um banco de dados NoSQL.

## Tecnologias Utilizadas

- **React Native**: Framework para criar apps nativos usando JavaScript
- **Expo**: Plataforma que facilita o desenvolvimento com React Native
- **Firebase**:
  - *Authentication*: para login e cadastro de usuários
  - *Firestore*: banco de dados em tempo real para armazenar os cursos
- **React Navigation**:
  - *Stack Navigator*: navegação entre telas
  - *Bottom Tab Navigator*: navegação por abas na parte de baixo do app

## Estrutura de Pastas

### `/src`

Pasta principal com todo o código do app. Está dividida por responsabilidade:

#### `/config`

- `firebaseConfig.js`: configuração do Firebase usando variáveis de ambiente

#### `/context`

- `AuthContext.js`: gerencia o estado de autenticação (login, logout e loading)

#### `/navigation`

- `AppNavigation.js`: organiza a navegação usando Stack e Tab Navigator (telas como login, home, perfil etc.)

#### `/screens`

Telas principais do app:

- `LoginScreen.js`: tela de login
- `RegisterScreen.js`: tela de cadastro
- `HomeScreen.js`: lista de cursos
- `DetailsScreen.js`: detalhes de um curso específico
- `CursoFormScreen.js`: formulário para criar ou editar cursos
- `ProfileScreen.js`: informações do usuário e botão de logout

#### `/services`

- `CursoService.js`: funções que interagem com o Firestore:
  - `getCursos()`: busca os cursos do usuário logado
  - `adicionarCurso()`: adiciona um novo curso
  - `atualizarCurso()`: edita um curso já existente
  - `deletarCurso()`: remove um curso

## Como o App Funciona

1. O app começa pelo `App.js`, onde são carregadas:
   - a navegação (`NavigationContainer`)
   - o contexto de autenticação (`AuthProvider`)
   - as rotas (`AppNavigation`)

2. O fluxo do usuário é:
   - login ou cadastro com Firebase
   - navegação entre telas usando as abas
   - visualização, criação, edição e exclusão de cursos
   - acesso ao perfil e logout

## Pontos Importantes

### Organização

- Uso da **Context API** para gerenciar autenticação
- Separação clara entre telas, lógica de negócio e serviços
- Comunicação com o Firebase feita por arquivos separados (serviços)

### Boas Práticas

- Estrutura organizada por função
- Uso de `.env` para esconder chaves e credenciais
- Confirmação de ações sensíveis (como deletar curso)
- Atualização da lista de cursos quando a tela é focada (`useFocusEffect`)

### Segurança

- Login seguro com Firebase
- Regras no Firestore para mostrar apenas os dados do usuário logado (`where('userId', '==', userId)`)
- Nenhuma chave sensível deixada no código

### Interface

- Telas simples e objetivas
- Estilos organizados com `StyleSheet`
- Alertas e feedbacks visuais para o usuário
- Navegação fácil e direta entre as partes do app

### Facilidade para Crescer

- Estrutura preparada para novas funcionalidades
- Separação entre lógica e visual facilita a manutenção
- Serviços bem isolados facilitam mudanças no backend no futuro

