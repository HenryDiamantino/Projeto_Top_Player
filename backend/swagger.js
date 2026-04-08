// importa a biblioteca
// Ela serve para ler os comentarios do tipo @swagger no codigo
import swaggerJSDoc from "swagger-jsdoc";

const options = {

    definition: {

        // Define a versao da especificação OPENAPI usada pelo swagger
        // OPENAPI é o padrão usado para documentar APIs
        openapi: "3.0.0",

        info: {
            // titulo da API que vai aparecer no SWAGGER
            title: "API em NODESJS com express",
            // versão da API
            version: "1.0.0",
            // Pequena descrição
            describe: "My first project with API documentation with SWAGGER"
        },

        servers: [
            {
                // URL base da API
                url: "http://localhost:5000"
            }
        ]
    },

    // apis define em quais arquivos o SWAGGER deve procurar
    // os comentários com @swagger
    apis: ["./server.js", "./src/routes/usuarioRoutes.js", "./src/routes/jogosRoutes.js", "./src/routes/partidaRoutes.js", "./src/routes/playerRoutes.js", "./src/routes/rankingRoutes.js"]
};

// Aqui o swagger-jsdoc lê as configurações do objeto "options" e gera a documentação da API em formato JSON
const swaggerSPec = swaggerJSDoc(options);

// Exporta a documentação pronta para que ela possa ser usada em outro arquivo, como no server.js
export default swaggerSPec;