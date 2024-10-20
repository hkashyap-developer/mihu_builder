import { createClient } from "next-sanity";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    apiVersion: "2023-05-03", 
    dataset: "production", 
    projectId: "r4t34vko", 
    useCdn: false,
}); 

const builder = ImageUrlBuilder(client);

export function urlFor(source:String){ 
    return builder.image(source);
} 