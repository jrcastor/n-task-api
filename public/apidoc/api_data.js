define({ "api": [
  {
    "type": "post",
    "url": "/token",
    "title": "Token autenticado",
    "group": "Credencial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email de usuário</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n\"email\": \"teste@teste.com\",\n\"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de usuário autenticado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"token\": \"xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de autenticação",
          "content": "HTTP/1.1 401 Unauthorized",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/token.js",
    "groupTitle": "Credencial",
    "name": "PostToken"
  },
  {
    "type": "get",
    "url": "/",
    "title": "API Status",
    "group": "Status",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de status da API</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\"status\": \"NTask API\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "Status",
    "name": "Get"
  },
  {
    "type": "delete",
    "url": "/user",
    "title": "Exclui usuário autenticado",
    "group": "Usu_rio",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro na exclusão",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Usu_rio",
    "name": "DeleteUser"
  },
  {
    "type": "get",
    "url": "/user",
    "title": "Exibe usuário autenticado",
    "group": "Usu_rio",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de usuário</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header",
          "content": "{\"Authorization\": \"JWT xyz.abc.123.hgf\"}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\"id\": 1,\n\"name\": \"John Connor\",\n\"email\": \"john@connor.net\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro de consulta",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Usu_rio",
    "name": "GetUser"
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Cadastra novo usuário",
    "group": "Usu_rio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Entrada",
          "content": "{\n\"name\": \"John Connor\",\n\"email\": \"john@connor.net\",\n\"password\": \"123456\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id de registro</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nome</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Senha criptografada</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": "<p>Data de atualização</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": "<p>Data de cadastro</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n\"id\": 1,\n\"name\": \"John Connor\",\n\"email\": \"john@connor.net\",\n\"password\": \"$2a$10$SK1B1\",\n\"updated_at\": \"2015-09-24T15:46:51.778Z\",\n\"created_at\": \"2015-09-24T15:46:51.778Z\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro no cadastro",
          "content": "HTTP/1.1 412 Precondition Failed",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Usu_rio",
    "name": "PostUsers"
  }
] });
