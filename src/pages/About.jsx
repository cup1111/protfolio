import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from "../components/CTA";
import {
  awards,
  certifications,
  education,
  experiences,
  personal,
  skills,
} from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I&apos;m{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {personal.displayName}
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>{personal.summary}</p>
        <p className='text-sm text-slate-400'>
          <a
            className='text-blue-500 hover:underline'
            href={`mailto:${personal.email}`}
          >
            {personal.email}
          </a>
          {" · "}
          {personal.phone}
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container h-20 w-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front flex items-center justify-center rounded-xl'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='h-1/2 w-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-10'>
        <h3 className='subhead-text'>Education</h3>
        <ul className='mt-8 flex flex-col gap-6'>
          {education.map((edu) => (
            <li
              key={edu.school + edu.period}
              className='border-l-4 border-blue-500 pl-4'
            >
              <p className='font-poppins text-lg font-semibold text-black-500'>
                {edu.degree}
              </p>
              <p className='text-black-500/80'>{edu.field}</p>
              <p className='text-sm text-slate-500'>{edu.school}</p>
              <p className='text-sm text-slate-400'>{edu.period}</p>
            </li>
          ))}
        </ul>

        <div className='mt-10 flex flex-col gap-4 sm:flex-row sm:gap-12'>
          <div>
            <h4 className='font-poppins text-sm font-semibold text-black-500'>
              Certifications
            </h4>
            <ul className='mt-2 list-disc pl-5 text-sm text-slate-600'>
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='font-poppins text-sm font-semibold text-black-500'>
              Awards
            </h4>
            <ul className='mt-2 list-disc pl-5 text-sm text-slate-600'>
              {awards.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            Roles across B2B SaaS, AI tooling, and full-stack product delivery —
            highlights below.
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.date}`}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex h-full w-full items-center justify-center'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='h-[60%] w-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='font-poppins text-xl font-semibold text-black'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 text-base font-medium'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 ml-5 list-disc space-y-2'>
                  {experience.points.map((point, pointIndex) => (
                    <li
                      key={`experience-point-${index}-${pointIndex}`}
                      className='text-black-500/50 pl-1 text-sm font-normal'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
