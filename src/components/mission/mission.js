import './mission.css';
import React from 'react';

const Mission = () =>{
	return(
		<React.Fragment>
            <main class="main">
                <section class="mission">
                    <h2>Our Mission</h2>
                    <p>
                        In today’s biotech landscape, scientists face an overwhelming challenge: sifting through vast amounts of experimental data, protocols, and previous research while managing parallel projects across teams and institutions. 
                        At Cornucopia, our mission is to revolutionize this process. We aim to empower researchers by providing an AI-driven solution that transforms how knowledge is accessed, shared, and utilized in biotech research.
                    </p>
                </section>

                <section class="challenges">
                    <h3>The Challenges Researchers Face</h3>
                    <div class="challenge-item">
                        <h4>Data Overload</h4>
                        <p>Scientists must sift through massive amounts of experimental data, protocols, and ELNs (Electronic Lab Notebooks), slowing innovation.</p>
                    </div>
                    <div class="challenge-item">
                        <h4>Redundant Efforts</h4>
                        <p>Parallel projects in universities, companies, and research groups often lead to duplicated experiments and wasted resources.</p>
                    </div>
                    <div class="challenge-item">
                        <h4>Restricted Access</h4>
                        <p>Valuable data is siloed within teams, limiting collaboration and preventing discoveries from reaching their full potential.</p>
                    </div>
                </section>

                <section class="solution">
                    <h3>How Cornucopia Solves These Challenges</h3>
                    <div class="solution-item">
                        <h4>Smart Data Querying</h4>
                        <p>With Cornucopia’s S.A.M, researchers can easily query their protocols, drafts, previous experiments, and ELN data, saving time and enabling actionable insights.</p>
                    </div>
                    <div class="solution-item">
                        <h4>Democratized Research Access</h4>
                        <p>Cornucopia enables seamless collaboration by allowing users to share their data in a shared Knowledge Vault while maintaining control over proprietary information.</p>
                    </div>
                    <div class="solution-item">
                        <h4>Customizable Access Control</h4>
                        <p>Users can define access restrictions, share data within their organization, or keep it private, ensuring compliance with proprietary research needs.</p>
                    </div>
                    <div class="solution-item">
                        <h4>Redundancy Elimination</h4>
                        <p>By integrating data across multiple projects and teams, Cornucopia reduces redundant efforts and accelerates innovation.</p>
                    </div>
                </section>
            </main>
		</React.Fragment>
	);
}

export default Mission;