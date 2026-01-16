import { motion } from "framer-motion";
import location from "../assets/location.png";
import status from "../assets/status.png";
import work from "../assets/work.jpg";

function Status() {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6">

        <motion.div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-10
            border
            border-white/10
            bg-white/5
            backdrop-blur-sm
            px-10
            py-8
          "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >

          {/* AVAILABILITY */}
          <div className="flex items-center gap-4">
            <img
              src={status}
              alt="availability"
              className="w-9 h-9 opacity-90"
            />
            <div>
              <h4 className="text-purple-400 text-sm font-semibold mb-1">
                Availability
              </h4>
              <p className="text-gray-400 text-sm">
                Open for internships & entry-level roles
              </p>
            </div>
          </div>

          {/* WORK MODE */}
          <div className="flex items-center gap-4">
            <img
              src={location}
              alt="work mode"
              className="w-9 h-9 opacity-90"
            />
            <div>
              <h4 className="text-purple-400 text-sm font-semibold mb-1">
                Work Mode
              </h4>
              <p className="text-gray-400 text-sm">
                Remote / On-site
              </p>
            </div>
          </div>

          {/* ROLE */}
          <div className="flex items-center gap-4">
            <img
              src={work}
              alt="role"
              className="w-9 h-9 opacity-90 rounded-sm"
            />
            <div>
              <h4 className="text-purple-400 text-sm font-semibold mb-1">
                Role
              </h4>
              <p className="text-gray-400 text-sm">
                Frontend / Full-Stack Developer
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

export default Status;
