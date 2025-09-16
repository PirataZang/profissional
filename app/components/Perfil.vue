<template>
    <div class="content">
        <div class="boxPerfil">
            <img class="imagePerfil" src="../assets/images/perfil.jpg" alt="perfil" srcset="" />
            <div class="flex flex-col informations">
                <div class="textPerfil">
                    <p class="text-lg">Desenvolvedor fullstack pleno</p>
                    <p class="text-lg">Tenho 22 anos e sou apaixonado por tecnologia e programação, atuando profissionalmente há 4 anos no desenvolvimento de software. Sou um programador fullstack, com sólida experiência em front-end — área em que possuo maior expertise — e domínio consistente de back-end, permitindo-me atuar de forma completa em todas as etapas de um projeto.</p>
                    <p class="text-lg">Minha principal especialidade está em frameworks modernos, como Vue.js e Nuxt.js, além de boas práticas de arquitetura, performance e experiência do usuário. Estou sempre em busca de desafios que ampliem meus conhecimentos e me permitam entregar soluções inovadoras e de alta qualidade.</p>
                    <p class="text-lg">Se você procura um profissional dedicado, proativo e comprometido com resultados, será um prazer fazer parte do seu time!</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.content {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    margin-top: 100px;

    .boxPerfil {
        width: 50vw;
        display: flex;
        gap: 30px;
        word-break: break-word;

        .imagePerfil {
            height: 700px;
            width: 380px;
            object-fit: cover;
            border-radius: 25px;
        }

        .textPerfil {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 35vw;
            text-align: justify;
        }

        // tablet
        @media (max-width: 1050px) {
            align-items: center;
            text-align: center;
            width: 90vw;

            .imagePerfil {
                height: auto;
                width: 45vw;
            }

            .textPerfil {
                width: 45vw;
                height: 500px;
                overflow-y: scroll;
            }
        }

        // mobile
        @media (max-width: 758px) {
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 90vw;

            .imagePerfil {
                height: auto;
                width: 45vw;
            }

            .textPerfil {
                width: 70vw;
                height: 500px;
                overflow-y: scroll;
            }
        }
    }
}
</style>
