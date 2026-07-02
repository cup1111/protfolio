import CTA from "../components/CTA";
import { projects, projectsIntro } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className='max-container'>
      <p className='eyebrow'>Projects</p>
      <h1 className='head-text mt-2'>
        My{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Projects
        </span>
      </h1>

      <p className='mt-2 max-w-2xl leading-relaxed text-slate-500'>
        {projectsIntro}
      </p>

      <div className='my-16 grid gap-8 sm:grid-cols-2'>
        {projects.map((project) => (
          <div className='card group flex flex-col p-6' key={project.name}>
            <div className='icon-tile group h-12 w-12'>
              <img
                src={project.iconUrl}
                alt={project.name}
                className='h-1/2 w-1/2 object-contain'
              />
            </div>

            <div className='mt-5 flex flex-1 flex-col'>
              <h4 className='font-poppins text-xl font-semibold text-black-500'>
                {project.name}
              </h4>
              <p className='mt-2 flex-1 text-sm leading-relaxed text-slate-500'>
                {project.description}
              </p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-sm font-semibold text-blue-500 transition-colors group-hover:text-blue-600'
                >
                  GitHub
                </a>
                <img
                  src={arrow}
                  alt=''
                  className='h-4 w-4 object-contain transition-transform group-hover:translate-x-1'
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;
