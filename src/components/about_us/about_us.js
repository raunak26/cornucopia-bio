import './about_us.css';
import React from 'react';

const About_Us = () =>{
	return(
		<React.Fragment>
            <div class="about_us">
                <h2>About Us</h2>
                <p>
                    Welcome to Cornucopia, the brainchild of two visionary graduates from UC Davis, 
                    Raunak Anand and Himay (Mickey) Makhija. Our journey began with a shared passion 
                    for pushing the boundaries of scientific discovery and a desire to bridge the 
                    gap between the realms of computer science, statistics, and biotechnology. 
                    Cornucopia's genesis lies in the synergy between Raunak's technological prowess 
                    and Mickey's profound knowledge of the life sciences. Together, they envisioned a 
                    world where biotech research could flourish with AI-driven insights, optimizing 
                    experimentation, and accelerating discoveries. 
                </p>
                <div class="team">
                    <div class="member" id="raunak">
                        <h4>Raunak Anand</h4>
                        <h6>The Tech Visionary</h6>
                        <p>
                            Raunak brings a dynamic blend of Computer Science and Statistics to Cornucopia. 
                            With a penchant for cutting-edge technology and a keen eye for data-driven 
                            insights, he is the driving force behind our AI and ML solutions. Raunak's 
                            dedication to crafting innovative tools has paved the way for scientists to 
                            expedite their research, making him a key architect of our mission.
                        </p>
                    </div>
                    <div class="member" id="mickey">
                        <h4>Himay (Mickey) Makhija</h4>
                        <h6>The BioTech Maestro</h6>
                        <p>
                            Himay, often known as Mickey, embodies the fusion of Biochemistry, Molecular 
                            Biology, and Statistics. His deep understanding of biotech intricacies, coupled 
                            with statistical rigor, empowers Cornucopia to provide precise, context-aware 
                            feedback to researchers. Mickey's commitment to ethical and responsible 
                            research practices sets the foundation for our company's core values.
                        </p>
                    </div>
                </div>
            </div>
		</React.Fragment>
	);
}

export default About_Us;