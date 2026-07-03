import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";

import PageFooterCTA from "../components/PageFooterCTA";
import PageHeader from "../components/PageHeader";
import {
  awards,
  certifications,
  education,
  experiences,
  personal,
  skills,
} from "../constants/content";

import "react-vertical-timeline-component/style.min.css";

/** Single accent color for the whole timeline, regardless of per-item iconBg in constants. */
const TIMELINE_ACCENT = "#2b77e7";

const skillGroups = skills.reduce((groups, skill) => {
  const group = groups.find((g) => g.type === skill.type);
  if (group) {
    group.items.push(skill);
  } else {
    groups.push({ type: skill.type, items: [skill] });
  }
  return groups;
}, []);

const About = () => {
  return (
    <section className='max-container'>
      <PageHeader
        eyebrow='About'
        title={
          <>
            Hello, I&apos;m{" "}
            <span className='blue-gradient_text font-semibold drop-shadow'>
              {personal.displayName}
            </span>{" "}
            👋
          </>
        }
      />

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className='max-w-2xl leading-relaxed'>{personal.summary}</p>
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

        <div className='mt-8 flex flex-col gap-6'>
          {skillGroups.map((group) => (
            <div key={group.type}>
              <p className='mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400'>
                {group.type}
              </p>
              <div className='flex flex-wrap gap-3'>
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className='card flex items-center gap-2 rounded-full px-3.5 py-2'
                  >
                    <img
                      src={skill.imageUrl}
                      alt=''
                      className='h-4 w-4 object-contain'
                    />
                    <span className='text-sm font-medium text-black-500'>
                      {skill.name}
                    </span>
                  </div>
                ))}
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
            Formal roles and internships only. Other builds (AI Planner, Emoji
            Twitter, Resume Pack Generator, etc.) live under{" "}
            <Link className='text-blue-500 hover:underline' to='/projects'>
              Projects
            </Link>
            .
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`${experience.company_name}-${experience.date}`}
                date={experience.date}
                iconStyle={{ background: TIMELINE_ACCENT }}
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
                  borderBottom: "4px",
                  borderStyle: "solid",
                  borderBottomColor: TIMELINE_ACCENT,
                  boxShadow: "0px 4px 20px rgba(29, 34, 53, 0.06)",
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

      <PageFooterCTA />
    </section>
  );
};

export default About;
