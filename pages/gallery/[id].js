import { photos } from ".";
import Image from "next/image";
import { motion } from "framer-motion";

function GalleryImage({ photo }) {
  return (
    <motion.div layoutId={photo.id} className="container mx-auto h-1/2 w-1/2">
      <Image src={photo.url} width={200} height={200} />
    </motion.div>
  );
}

export async function getStaticPaths() {
  return {
    paths: photos.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    })),
    fallback: "blocking",
  };
}
export async function getStaticProps({ params }) {
  console.log(params.id);
  return {
    props: {
      photo: photos.find(({ id }) => id == params.id),
    },
  };
}

export default GalleryImage;
