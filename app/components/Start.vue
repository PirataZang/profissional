<template>
    <div class="start flex justify-between items-center">
        <div class="startText flex flex-col p-5 text-white">
            <span class="text-3xl">Olá me chamo <b>Igor Fronza</b></span>
            <span class="text-2xl">Desenvolvedor fullstack</span>

            <div class="flex gap-5 mt-5 justify-between">
                <Button href="https://br.linkedin.com/in/igor-fronza-592796249?trk=people-guest_people_search-card" target="_blank" label="<i class='text-xl fa-brands fa-square-linkedin'></i> Linkedin" type="square" customClass="linkedIn" />
                <Button href="https://github.com/PirataZang" target="_blank" label="<i class='text-xl fa-brands fa-github'></i> GitHub" type="square" customClass="github" />
            </div>
        </div>
        <div class="startImage">
            <img src="/images/start.jpeg" alt="" srcset="" />
        </div>
    </div>
</template>

<style lang="scss">
.start {
    background: linear-gradient(250deg, #210055, #000000);
    box-shadow: 0px 11px 12px 0px #00000073;

    .startText {
        margin-left: calc(10% - 20px);
        border-radius: 7px;
    }

    .linkedIn {
        background-color: rgb(0 126 255);
        box-shadow: inset 1px 3px 10px 0px rgb(6 0 97);

        &:hover {
            background-color: rgb(0 100 204);
            box-shadow: inset 1px 3px 10px 0px rgb(6 0 97);
        }

        &:active {
            transform: scale(0.92);
            background-color: rgb(0 80 163);
            box-shadow: inset 1px 3px 10px 0px rgb(6 0 97);
        }
    }

    .github {
        background-color: rgb(119, 0, 255);
        box-shadow: inset 1px 3px 10px 0px rgb(50, 0, 97);

        &:hover {
            background-color: rgb(95, 0, 204);
            box-shadow: inset 1px 3px 10px 0px rgb(27, 0, 53);
        }

        &:active {
            transform: scale(0.92);
            background-color: rgb(95, 0, 204);
            box-shadow: inset 1px 3px 10px 0px rgb(27, 0, 53);
        }
    }

    img {
        height: 800px;
        object-fit: cover;
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%);
    }


    @media (max-width: 1050px) {
        flex-direction: column;
        text-align: center;
        gap: 50px;
        padding: 20px 0;
        box-shadow: none;
        background: none;

        .startText {
            margin-left: 0;
        }

        img {
            height: auto;
            width: 80vw;
            border-radius: 25px;
            mask-image: none;
        }
    }
}
</style>
