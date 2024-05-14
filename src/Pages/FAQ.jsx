import React from "react";

const FAQ = () => {
  return (
    <div>
      <section className="  ">
        <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-lg font-medium mb-10 lg:text-3xl lg:font-bold text-center"
          >
            Frequently Asked Questions
          </h1>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is StudyLab?
            </div>
            <div className="collapse-content">
              <p>
                StudyLab is an online platform designed to provide interactive
                learning modules for students of all ages. It offers a wide
                range of educational resources, including multimedia content,
                quizzes, and interactive exercises, aimed at enhancing students'
                understanding of various subjects.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I access StudyLab?
            </div>
            <div className="collapse-content">
              <p>
                StudyLab can be accessed through any web browser on desktop,
                laptop, or mobile devices. Simply visit the StudyLab website and
                start exploring the available resources.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Is StudyLab free to use?
            </div>
            <div className="collapse-content">
              <p>
                Yes, StudyLab is completely free to use. Users can access all
                educational resources and features without any subscription or
                payment.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Are the learning materials on StudyLab suitable for all ages?
            </div>
            <div className="collapse-content">
              <p>
                Yes, StudyLab offers learning materials suitable for learners of
                all ages. The platform provides resources for children,
                teenagers, and adult learners, catering to different educational
                needs and levels of expertise.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Is StudyLab suitable for homeschooling?
            </div>
            <div className="collapse-content">
              <p>
                Yes, StudyLab can be a valuable resource for homeschooling
                families. It offers a diverse range of educational content that
                can supplement homeschooling curricula and provide additional
                learning opportunities for students.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
