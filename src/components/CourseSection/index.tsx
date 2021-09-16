import { ReactNode } from "react"

type CourseSectionProps = {
  firstInOrderLayoutClass: string;
  secondInOrderLayoutClass: string;
  title: string;
  description: string;
  projectImage: string;
  courseLink?: string;
  hasLink?: boolean;
  author?: string;
  authorLink?: string;
  children?: ReactNode;
}

export default function CourseSection({
  courseLink = '',
  projectImage,
  description,
  title,
  firstInOrderLayoutClass,
  secondInOrderLayoutClass,
  hasLink = true,
  author = '',
  authorLink = '',
  children = undefined
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
              {children}
              {author && <a
                href={authorLink ? authorLink : ''}
                style={{ color: '#6c757d', paddingBottom: '2rem' }}
                target="_blank"
                rel="noreferrer"
              ><p>{author}</p></a>}
              <p style={{ fontSize: '1.2rem', color: '#343a40' }}>{description}</p>
              {courseLink ?
                <a
                  href={courseLink}
                  target="_blank"
                  rel="noreferrer"
                >Ir para aula...</a> :
                <a
                  href={courseLink}
                  target="_blank"
                  rel="noreferrer"
                  className={'disabled'}
                >Disponível em 04/10/2021...</a>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


