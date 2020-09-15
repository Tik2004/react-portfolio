import React from 'react'
import s from './projects.module.css'
import ReactWOW from 'react-wow'

const projects = () => {
    const allProjects = [
        {
          image: 'https://cdn.pixabay.com/photo/2020/04/02/18/28/coronavrius-4996242_960_720.png',
          name: 'Covid Armenia Tracker',
          link: 'https:/bit.ly/armcovid'            
        },
        {
          image: 'https://dissertatsija.com/wp-content/uploads/2019/06/checking-task-list-by-hand_23-2147501304.jpg',
          name: 'Work Tracker',
          link: 'https:/bit.ly/armcovid'            
        },
        {
          image: 'https://cutt.ly/img/1_step_m1.png',
          name: 'Link shortener',
          link: ''            
        },
        {
          image: 'data:image/jpeg;base64,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',
          name: 'Chat',
          link: ''            
        }]
    return (
        <React.Fragment>
          <div className={s.projects}>
            {allProjects.map(project => {
              return (
                <ReactWOW key={Math.random() * Date.now()} animation='bounceInDown' duration='2s'>
                  <div className={s.project}>
                    <img className={s.image} src={project.image} alt='Project' />
                    <hr />                    
                    <h4>{project.name}</h4>
                    <a href={project.link}>Check</a>
                  </div>
                </ReactWOW>
              )
            })}
          </div>
        </React.Fragment>
    )
}

export default projects