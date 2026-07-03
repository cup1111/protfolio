/**
 * About/Projects/Contact's "what page is this" header (eyebrow + title).
 * Distinct from Home's Hero Section (see CONTEXT.md) — the Hero carries a
 * tagline and CTAs and stays hand-written in Home.jsx.
 */
const PageHeader = ({ eyebrow, title }) => (
  <>
    <p className='eyebrow'>{eyebrow}</p>
    <h1 className='head-text mt-2'>{title}</h1>
  </>
);

export default PageHeader;
