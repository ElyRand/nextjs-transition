import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const photos = [
  { id: 1, url: "https://source.unsplash.com/random" },
  { id: 2, url: "https://source.unsplash.com/random" },
  { id: 3, url: "https://source.unsplash.com/random" },
  { id: 4, url: "https://source.unsplash.com/random" },
  { id: 5, url: "https://source.unsplash.com/random" },
  { id: 6, url: "https://source.unsplash.com/random" },
  { id: 7, url: "https://source.unsplash.com/random" },
  { id: 8, url: "https://picsum.photos/900" },
];

function Gallery() {
  return (
    <div className="h-screen grid grid-cols-2 md:grid-cols-4 container mx-auto gap-2">
      {photos.map(({ id, url }) => {
        return (
          <div key={id}>
            <Link href={`/gallery/${id}`}>
              <a>
                <motion.div layoutId={id}>
                  <Image
                    className="block cursor-pointer"
                    src={url}
                    width={200}
                    height={200}
                  />
                </motion.div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
