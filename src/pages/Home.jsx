import { Link } from "react-router-dom";

import PageFooterCTA from "../components/PageFooterCTA";
import SceneAccent from "../components/SceneAccent";
import { personal } from "../constants/content";

const Home = () => {
  return (
    <section className='max-container flex flex-col gap-16'>
      <div className='flex flex-col gap-10'>
        <div className='flex flex-col gap-6 animate-fade-up'>
          <p className='eyebrow'>{personal.roleTitle}</p>

          <h1 className='head-text'>
            Hi, I&apos;m{" "}
            <span className='blue-gradient_text font-semibold drop-shadow'>
              {personal.displayName}
            </span>{" "}
            👋
          </h1>

          <p className='max-w-lg leading-relaxed text-slate-500'>
            {personal.heroTagline}
          </p>

          <div className='flex flex-wrap gap-4 pt-2'>
            <Link to='/about' className='btn !w-auto'>
              About Me
            </Link>
            <Link to='/projects' className='btn-outline !w-auto'>
              View Projects
            </Link>
          </div>
        </div>

        <SceneAccent />
      </div>

      <PageFooterCTA />
    </section>
  );
};

export default Home;
