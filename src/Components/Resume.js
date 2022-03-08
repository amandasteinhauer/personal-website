import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if(this.props.data){
      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function(work){
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
            <p>{work.description}</p>
            <ul>
              {
                work.points.map((point, idx) => {
                  return (
                    <li key={idx}>{point}</li>
                  );
                })
              }
            </ul>
        </div>
        );
      })
      var project = this.props.data.project.map(function(project){
        var title = <h3>{project.title}</h3>
        if (project.link !== "" ){
          title = <a href={project.link}><h3>{project.title}</h3></a>
        }

        var iframe
        if(project.iframe !== ""){
          iframe = <iframe src={project.iframe} title={project.title} allow="picture-in-picture; encrypted-media; accelerometer"></iframe>
        }

        return (
          <div key={project.title}>
            {title}
            <p className="info">{project.role}<span>&bull;</span> <em className="date">{project.years}</em></p>
            <p>{project.description}</p>
            <ul>
              {
                project.points.map((point, idx) => {
                  return (
                    <li key={idx}>{point}</li>
                  );
                })
              }
            </ul>
            {iframe}
            <br/>
        </div>
        );
      })
    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="two columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="ten columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>
      <div className="row work">
          <div className="two columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="ten columns main-col">
            {work}
          </div>
      </div>
      <div className="row project">
          <div className="two columns header-col">
            <h1><span>Projects</span></h1>
          </div>
          <div className="ten columns main-col">
            {project}
          </div>
      </div>
   </section>
    );
  }
}

export default Resume;
