I embarked on my journey from mobile UI creation to website design with a misconception: that it would be straightforward. I assumed my experience in mobile app development would easily translate to web design, allowing me to whip up a personal portfolio site in just a few hours. This naive thought quickly unraveled as I delved into the actual process, marking the beginning of a much more involved journey from developing mobile apps and enterprise backends to designing a website I could truly be proud of.

## The 'Why' Behind My Endeavor

Before diving into any project, it's crucial to ask, "Why am I doing this?" If the sole purpose was to showcase my work quickly, a website builder would have been the most efficient route. However, my objectives were more nuanced:

1. **Showcasing My Work**: I wanted to do more than just display my projects. I aimed to elegantly present my skills and my ability to develop and design websites from the ground up, making the portfolio itself a testament to my capabilities.
2. **Expanding My Skill Set**: Originating from a world filled with Flutter and backend systems, web design was uncharted territory. I was eager to expand my knowledge to include full-stack **web** development.

## From Flutter Developer to Aspiring Web Designer: My Starting Point

My background includes developing full-stack mobile applications with Flutter and handling backend operations with Java and SQL. However, my experience with front-end work was minimal, mostly confined to minor tweaks in HTML, CSS, and JavaScript, never designing an entire page from scratch.

I thought my Flutter experience would be a significant advantage in web development. This was partly true; understanding Flutter did help me grasp React, as both are declarative UI frameworks. I was also familiar with `flutter_hooks`, which made my transition to React hooks smoother.

However, TypeScript was a different beast. My prior experience was limited to writing Firebase Cloud Functions, which didn't delve deeply into TypeScript's complexities. Coming from Dart and Java, I recognized some familiar concepts, but TypeScript introduced many new aspects I hadn't encountered in other languages.

## Selecting the Right Tools for the Task

Choosing the appropriate tools was a critical decision in this process. Here's a rundown of what I used and why:

- **Figma**: My first step was to learn Figma. I had used it before in a professional setting, but only to understand what the frontend should look like. Now, I wanted to create my site's design from scratch. Learning Figma and developing a prototype there was immensely helpful. It allowed me to focus on design first, without the added complexity of simultaneously learning HTML and CSS.
- **Next.js**: There are many web frameworks I could have chosen. Next.js appealed to me for its robust community and proven reliability in production. It's also one of the most in-demand frameworks for web development jobs, a practical consideration for my career. I was tempted by newer frameworks like SvelteKit, but ultimately, the stability and community around Next.js won me over.
- **Tailwind**: Initially, I used Tailwind for all my styling needs. It worked well at first, but as I delved into more complex designs, especially those involving animations and responsive layouts, it became too verbose. This prompted me to look for alternatives that could simplify my workflow.
- **NextUI**: On my second design iteration, I stumbled upon NextUI. Though it didn't completely align with my Figma design, its aesthetics and integration with Next.js impressed me. I decided to pivot my design to NextUI. It made the site feel more polished and reduced the need for extensive custom styling. I continued to use Tailwind for some aspects, like responsive design, but NextUI took over most of the heavy lifting.
- **Prisma**: In my past projects, I've worked with ORMs for Java and developed a similar tool for Flutter. So, picking up Prisma was relatively straightforward. It significantly simplified managing my SQL database and connecting it to my server components.
- **PostgreSQL**: I've had experience with MySQL, so transitioning to PostgreSQL wasn't a huge leap. Most of my interaction with the database was through Prisma, which shielded me from the deeper intricacies of PostgreSQL. I chose PostgreSQL over other databases because I wanted hands-on experience with a robust SQL database, and Supabase offered an affordable and scalable hosting solution.
- **Docker**: In the past, I've used prebuilt Docker images for local development, like Appwrite. This time, I decided to dockerize my PostgreSQL database. It made sense for a more flexible development environment, allowing me to spin up a new clean database instance for different projects without affecting my other work.

## Confronting the Challenges Head-On

Every project has its hurdles, and mine was no exception. Here's how I navigated through some of the biggest challenges:

1. **The Hosting Dilemma**: One of the first major decisions was whether to self-host my Next.js project or use Vercel's deployment features. Both had their pros and cons. Self-hosting offered more control, while Vercel promised convenience. After much deliberation, I opted for Vercel for its ease of use. But the intrigue of self-hosting remains, and I might explore it for future projects.
2. **Database Decisions**: Choosing a host for my PostgreSQL database was another significant decision. The market is flooded with options, each with its pricing models and feature sets. Some offered free tiers, others didn't. Costs varied widely based on usage, reads, writes, and other factors. After a lot of research and comparison, I settled on Supabase. It struck the right balance with a generous free tier, and its pricing model seemed to scale reasonably for larger projects.
3. **To CMS or Not to CMS**: I knew from the start that I wanted a blog on my portfolio site. I've worked with CMS systems professionally and understand their value, especially for content-heavy sites. But integrating a CMS wasn't a straightforward decision. I considered various factors, including cost, complexity, and the need for a separate server. Ultimately, I decided against using a CMS for this project. The additional time and expense didn't seem justifiable for a personal site. However, I'm keeping an eye on solutions like Payload CMS, which might offer a more integrated and cost-effective approach in the future.

## Reflecting on the Journey and What Lies Ahead

This journey from mobile UI design to full-stack web development has been a challenging and enlightening experience. I've learned a lot about web technologies, design principles, and project management. I've also realized the importance of making informed choices about tools and technologies based on the project's specific needs and my long-term goals.

Looking ahead, I'm excited to continue learning and growing as a developer. I plan to dive deeper into web development, explore new tools and frameworks, and refine my design and development processes. This portfolio site is just the beginning, and I can't wait to see where this path takes me.
