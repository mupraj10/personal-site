import React,{Component} from 'react';
import skills from '../../information/skills';

import SkillCard from './SkillCard';

export default class Skills extends Component {
    constructor(){
        super()
        this.state = {
            skillId: null
        }
        this.changeSkill = this.changeSkill.bind(this)
    }

    changeSkill(evt){
        evt.preventDefault();
        (this.state.skillId === evt.target.id)
        ? this.setState({skillId: null})
        : this.setState({skillId: evt.target.id});
       
        
    }

    render(){
        console.log(this.state);

        return (
                    <section className="dtc v-mid cover ph3 ph4-m ph5-l">
                        {skills.map(skill =>
                           ( <a
                            key={Math.random()}
                            onClick={this.changeSkill}
                            id={skill.id}className="f3 link b hover-light-green no-underline black dib ph2 pv1" >

                            {skill.category}

                            </a>)
                        )}

                        {this.state.skillId && <SkillCard skillId={this.state.skillId} />}
                    </section>
            
                )

    }
}
   





