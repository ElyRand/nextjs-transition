import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const photos = [
  { id: 1, url: "https://source.unsplash.com/random" },
  { id: 2, url: "https://source.unsplash.com/random" },
  { id: 3, url: "https://picsum.photos/200" },
];

function Gallery() {
  return (
    <div className="flex flex-wrap container mx-auto space-x-2">
      {photos.map(({ id, url }) => {
        return (
          <div key={id}>
            <Link href={`/gallery/${id}`}>
              <a>
                <motion.span layoutId={id}>
                  <Image
                    className="block cursor-pointer"
                    src={url}
                    width={200}
                    height={200}
                  />
                </motion.span>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
