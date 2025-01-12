# Podcast maneger

### Descrição
Api para separar episódios de podcast por categoria

### Dominio
Podcast feito em vídeo

### Features
- Listar os episódios podcasts em sessões de categoria
[Fitness, psicologia, humor, finanças, esportes, corrida]
- Filtrar episódios por nomes de podcast

### Como implementar: 
Retornar em uma api rest o nome do podcast,
nome do episódio, capa do vídeo, link e categoria

```js
[
    {
        podcastName: "flow",
        episode: "CBUM - Flow #319",
        videoId: "pQSuQmUfS30",
        categories: ["fitness", "bodybuilder"]
    },
    {
        podcastName: "flow",
        episode: "RUBENS BARRICHELLO - Flow #339",
        videoId: "4KDGTdiOV4I",
        categories: ["esportes", "corrida"]
    },
    {
        podcastName: "venus",
        episode: "Xuxa",
        videoId: "4KDGTdiOV4I",
        categories: ["famosos"]
    }
]
```