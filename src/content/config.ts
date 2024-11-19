import { defineCollection, z } from "astro:content";

//definimos coleccion
const postCollection = defineCollection({

    schema: ({image}) => z.object({
        author: z.string(),
        date: z.string(),
        image: image(),
        title: z.string()
    })

})

export const collections = {
    //Importante el nombre de la constante "posts" debe coincidir con el path de los mxd src/content/posts
    posts: postCollection,
}