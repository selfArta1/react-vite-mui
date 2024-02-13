export default function SectionLayout(
    {section, inViewRef}
    ) {
        const { title, subtitle } = section;

        return (
            <section id={title} ref={inViewRef}>
              <div className="content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
              </div>
            </section>
          );
  
    }

