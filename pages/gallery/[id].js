import { photos } from ".";
import Image from "next/image";
import { motion } from "framer-motion";

function GalleryImage({ photo }) {
  return (
    <motion.div layoutId={photo.id} className="container mx-auto ">
      <Image src={photo.url} width={800} height={800} />
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
  return {
    props: {
      photo: photos.find(({ id }) => id == params.id),
    },
  };
}

export default GalleryImage;
