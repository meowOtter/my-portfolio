import "./resume.css";

export const Resume = () => {
	const linkedinURL = "https://www.linkedin.com/in/angie-to/";
	const linkedinURLComponent = (
		<a href={linkedinURL} target="_blank" rel="noreferrer">
			{linkedinURL}
		</a>
	);

	return (
		<div class="container">
			<header>
				<h1>ANGIE TO</h1>
				<p class="email">
					Email:
					<a href="mailto:angie.to@berkeley.edu">
						angie.to@berkeley.edu
					</a>
				</p>
				<p class="location">Location: Kirkland, WA</p>
				<p class="linkedin">
					LinkedIn:
					{linkedinURLComponent}
				</p>
			</header>

			<section class="experience-section">
				<h2>EXPERIENCE</h2>
				<p class="job-title">
					Software Engineer @ Microsoft - Power Apps Scale | Redmond,
					WA 12/21 – 12/23
				</p>
				<ul class="job-description">
					<li>
						Drove the end-to-end implementation of an AI-generated
						informational panel for 1000+ connectors, saving ~270
						dev hours, simplifying navigation, and boosting
						adoption.
					</li>
					<li>
						Collaborated with senior engineers on the development of
						high-impact features including Tenant Isolation,
						allowing users to govern their data access, and Tenant
						Policy Impact Analysis, facilitating data-driven
						decision making for over 5,000 monthly active users.
					</li>
					<li>
						Fixed flaky end-to-end tests in Cypress, saving ~150 dev
						hours spent on manual test runs.
					</li>
					<li>
						Implemented UI telemetries for user click tracking and
						visualized user interactions through Azure and PowerBI
						dashboards. Utilized the insights to formulate a
						multi-step plan for a customer mitigation deflection
						system.
					</li>
					<li>
						Created UX components shared across 4 projects, saving
						implementation time by 20%.
					</li>
					<li>
						Co-led the 'Share Your Lived Stories' campaign, engaging
						over 300 participants, and pioneered the 'Whole Heart
						Bookclub' to foster diversity and inclusion.
					</li>
				</ul>

				<p class="job-title">
					Software Engineer @ Microsoft - Maps & Geospatial |
					Bellevue, WA 03/20 – 12/21
				</p>
				<ul class="job-description">
					<li>
						Accelerated data collection for annual revenue lift from
						300 hits/day to 1000 hits/hour by designing, automating,
						and integrating the crowd-sourcing pipeline into model
						training.
					</li>
					<li>
						Designed UX and built a diverse range of geospatial
						applications and data visualization tools.
					</li>
					<li>
						Oversaw internal and crowdsourced data labeling,
						fine-tuned quality control tasks, monitored user
						performance, enhanced app tutorials, and provided
						feedback to annotators.
					</li>
					<li>
						Organized events for Bing's GIVE campaign to increase
						donations.
					</li>
					<li>
						Exceeded all performance objectives, leading to a
						full-time employment offer.
					</li>
				</ul>

				<p class="job-title">
					Front-end Engineer (Contractor) @ Microsoft - TScience |
					Bellevue, WA 03/19 – 03/20
				</p>
				<ul class="job-description">
					<li>
						Developed internal web applications for a team of data
						scientists, with the goal of translating research teams'
						vision into actionable tasks and improving their natural
						language models.
					</li>
					<li>
						Delivered AI-based applications, knowledge generation
						tools, and natural language learning apps as part of an
						agile development team.
					</li>
					<li>
						Implemented app authentication and authorization for
						both client and backend systems.
					</li>
				</ul>
			</section>

			<section class="education-section">
				<h2>EDUCATION</h2>
				<p>
					Coding Dojo, Bellevue, WA - Coding Bootcamp, Web Development
					08/18 – 12/18
				</p>
				<p>
					University of California, Berkeley, CA - Bachelor of Arts,
					Psychology 02/15 – 05/17
				</p>
			</section>

			<section class="technologies-section">
				<h2>TECHNOLOGIES</h2>
				<p>
					JavaScript, TypeScript, C#, HTML, CSS, jQuery, React, Redux,
					.Net, .Net Core, Kusto Query Language (KQL), Cosmos DB,
					Azure SQL, Git, Postman, Swagger, Jarvis, ARIA, Azure AD,
					Azure Data Explorer, Azure Data Factory, Azure ML, Prompt
					Engineer
				</p>
			</section>
		</div>
	);
};
