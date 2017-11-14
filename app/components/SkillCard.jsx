import React from 'react';

import skills from '../../information/skills';

const SkillCard = props => {
     const skill = skills[props.skillId]
     console.log('something card', skill)
    return (
        <section>
        <ul className="list f6 pl4 mt3 mb0"> 
        {skill.list.map(item =>  <li key={item} className="pv2 ">{item} </li>)}
        </ul>
        </section>
    )
}

export default SkillCard;