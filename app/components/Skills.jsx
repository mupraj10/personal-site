import React from 'react';

const Skills = () => {
    return (

        <section className="section">
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <article className="tile is-child">
                        <p className="title">Frontend</p>
                        <div className='box'>
                            <li> JavaScript (ES6) </li>
                            <li> HTML5 </li>
                            <li> CSS3 </li>
                            <li> React </li>
                            <li> React Native </li>
                            <li> Redux </li>
                        </div>

                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child">
                        <p className="title">Backend</p>
                        <div className='box'>
                            <li> Node.js </li>
                            <li>  Express.js </li>
                            <li>  SQL/PostgreSQL </li>
                            <li>  Sequelize </li>

                        </div>

                    </article>
                </div>
                <div className="tile is-parent">
                    <article className="tile is-child">
                        <p className="title">Tools</p>
                        <div className='box'>
                            <li> Git + Github </li>
                            <li> Command Line </li>
                            <li> Chrome DevTools </li>
                            <li> Postman </li>
                            <li> Mocha/Chai </li>
                            <li> Jasmine </li>
                            <li> Agile </li>
                        </div>

                    </article>
                </div>
            </div>
        </section>

    )
}

export default Skills;




