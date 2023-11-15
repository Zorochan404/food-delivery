import sanityClient from '@sanity/client';
import imageUrlBundler from '@sanity/image-url';


const client = sanityClient({
    projectId:"7u1605m7",
    dataset: "hoe",
    useCdn: true,
    apiVersion: 1,
})


const bundler = imageUrlBundler(client);
export const urlFor = (source) => bundler.image(source);


export default client