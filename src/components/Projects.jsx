import { PROJECTS } from "../constants/index";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LiaAnkhSolid } from "react-icons/lia";
import { IoLinkOutline } from "react-icons/io5";

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            // Add 'text-center' for mobile and 'lg:text-left' for desktop
            className="mb-8 flex flex-wrap items-start justify-center text-center lg:justify-center lg:text-left"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 relative p-4"
            >
              {project.images && project.images.length > 0 ? (
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  className="mySwiper"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <img
                        src={image}
                        width={250}
                        height={250}
                        alt={`${project.title} - ${imgIndex + 1}`}
                        className="rounded object-cover w-full h-auto mb-0"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <img
                  src={project.image}
                  width={250}
                  height={250}
                  alt={project.title}
                  className="mb-6 rounded object-cover w-full h-auto"
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 lg:pl-8 lg:pt-4"
            >
              <h3 className="mb-2 font-semibold text-2xl mt-0 pt-0">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">{project.description}</p>
              {/* Add a div to wrap the technologies for better control */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    className="rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                    key={techIndex}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-stone-800 rounded-md p-2 gap-2 w-fit flex items-center text-stone-200 text-md
                             transform transition-transform duration-300 hover:-translate-y-1 hover:bg-stone-600 hover:text-stone-100"
                >
                  Visit Website
                  <span className="text-xl">
                    <IoLinkOutline />
                  </span>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
