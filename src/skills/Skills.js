import React from "react";
import styles from "./Skills.module.scss";
import stylesContainer from "../common/styles/Container.module.scss";
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";
import cssImage from "./iconSkills/css.png";
import htmlImage from "./iconSkills/html-5.png";
import jsImage from "./iconSkills/js.png";
import reactImage from "./iconSkills/physics.png";
import gitImage from "./iconSkills/github.png";
import tsImage from "./iconSkills/ts.png"
import Fade from "react-reveal/Fade"

function Skills() {
    const html = {
        backgroundImage: `url(${htmlImage})`
    };
    const css = {
        backgroundImage: `url(${cssImage})`
    };
    const js = {
        backgroundImage: `url(${jsImage})`
    };
    const react = {
        backgroundImage: `url(${reactImage})`,
        backgroundColor: 'white'
    };
    const ts = {
        backgroundImage: `url(${tsImage})`
    };
    const git = {
        backgroundImage: `url(${gitImage})`,
        backgroundColor: 'white',
        borderRadius: '50px',
    };
    return (
        <div id='skills' className={styles.skillsBlock}>
            <div className={`${stylesContainer.containers} ${styles.skillsContainer}`}>
                <Title text={'Skills'}/>
                <Fade bottom>
                    <div className={styles.skills}>
                        <Fade bottom>
                            <Skill style={html} title={'HTML'}/>
                        </Fade>
                        <Fade bottom>
                            <Skill style={css} title={'CSS'}/>
                        </Fade>
                        <Fade bottom>
                            <Skill style={js} title={'JS'}/>
                        </Fade>
                        <Fade bottom>
                            <Skill style={react} title={'REACT'}/>
                        </Fade>
                        <Fade bottom>
                            <Skill style={ts} title={'TS'}/>
                        </Fade>
                        <Fade bottom>
                            <Skill style={git} title={'GIT'}/>
                        </Fade>
                    </div>
                </Fade>
            </div>
        </div>
    )
        ;
}

export default Skills;
