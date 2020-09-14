import React from 'react'
import { SkillBars } from 'react-skills';

export const SkillsBar = () => {
    const SKILLS = [
        {
          name: 'ReactJS',
          level: 75,
          color: '#FF8811',
        },
        {
          name: 'JavaScript',
          level: 95,
          color: '#177E89',
        },
        {
          name: 'HTML',
          level: 100,
          color: '#F4D35E',
        },
        {
          name: 'CSS',
          level: 85,
          color: '#DB3A34',
        },
        {
          name: 'Vue JS',
          level: 87,
          color: '#0EAF39',
        },
        {
          name: 'Python',
          level: 80,
          color: '#242331',
        }
    ]

    return (
      <SkillBars skills={SKILLS} flat/>
    )
}