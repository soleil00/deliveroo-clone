import  { createClient } from "@sanity/client"
import  ImageUrlBuilder  from "@sanity/image-url"

export const sanityClient = createClient({
    projectId: "fvgzndwi",
    dataset: "new-data-set",
    apiVersion: "2021-10-21",
    useCdn: true,
})

const builder = ImageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)
