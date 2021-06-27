type CourseSectionProps = {
  firstInOrderLayoutClass: string;
  secondInOrderLayoutClass: string;
  title: string;
  description: string;
  projectImage: string;
  courseLink: string;
  hasLink?: boolean;
  author?: string;
}

export default function CourseSection({
  courseLink,
  projectImage,
  description,
  title,
  firstInOrderLayoutClass,
  secondInOrderLayoutClass,
  hasLink = true,
  author = ''
}: CourseSectionProps) {
  return (
    <section id="scroll">
      <div className="container px-5">
        <div className="row gx-5 align-items-center">
          <div className={`col-lg-6 ${firstInOrderLayoutClass}`}>
            <div className="p-2"><img className="img-fluid rounded-circle" src={projectImage} alt={title} /></div>
          </div>
          <div className={`col-lg-6 ${secondInOrderLayoutClass}`}>
            <div className="p-5">
              <h2 className="display-4">{title}</h2>
              {author && <a href="https://www.linkedin.com/in/leandrolemes/" style={{ color: '#6c757d', paddingBottom: '2rem' }}><p>{author}</p></a>}
              <p style={{ fontSize: '1.2rem', color: '#343a40' }}>{description}</p>
              <a href={courseLink} target="_blank" className={`${!hasLink ? 'disabled' : ''}`} rel="noreferrer">{`${hasLink ? 'Ir para aula...' : 'Em breve...'}`}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


