/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { BlogPost } from './page';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'First Week at Tech Corp: Getting Started',
    excerpt: 'My journey begins with setting up the development environment and meeting the team.',
    content: `My first week as an intern at Tech Corp has been an incredible learning experience. The team welcomed me warmly and helped me set up my development environment. I learned about their tech stack, which includes React, TypeScript, and Node.js.

Key takeaways from the first week:
- Importance of proper development environment setup
- Understanding company coding standards
- Learning about the team's agile workflow
- Getting familiar with the codebase

I'm excited to start contributing to real projects next week!`,
    date: '2024-03-01',
    time: '09:00',
    tags: ['onboarding', 'teamwork', 'setup'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
  },
  {
    id: '2',
    title: 'First Pull Request: Lessons Learned',
    excerpt: 'Creating and submitting my first PR taught me valuable lessons about code review and collaboration.',
    content: `Today I submitted my first pull request! The feature was a simple UI component, but the process taught me so much about professional development workflows.

Code snippet from my PR:
\`\`\`typescript
const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
\`\`\`

Key learnings:
- Importance of clear PR descriptions
- How to handle code review feedback
- Git workflow best practices
- Writing meaningful commit messages`,
    date: '2024-03-05',
    time: '14:30',
    tags: ['coding', 'git', 'learning'],
    codeSnippet: `const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="p-6 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};`
  },
  {
    id: '3',
    title: 'Team Building: Hackathon Success',
    excerpt: 'Participating in my first internal hackathon and winning the innovation award.',
    content: `What an exciting week! Our team participated in the company's internal hackathon and won the innovation award. We built a real-time collaboration tool using WebSocket technology.

Our project stood out because:
- Innovative solution to a real problem
- Clean, maintainable code
- Great user experience
- Excellent team collaboration

This experience taught me the importance of quick iteration and effective team communication.`,
    date: '2024-03-15',
    time: '16:45',
    tags: ['hackathon', 'teamwork', 'innovation'],
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg'
  },
  {
    id: '2',
    title: '📌 Week 1: Start van het project – Planning & Structuur',
    excerpt: 'De eerste week van mijn stage bij Numble stond in het teken van planning, structuur en het opzetten van de database.',
    content: `
Mijn stage bij Numble is begonnen! De eerste week stond vooral in het teken van planning en structuur. Voor ik kon beginnen met ontwikkelen, moest ik een duidelijk overzicht krijgen van de vereisten en de manier waarop we het project gaan aanpakken.

We werken volgens een Agile/Scrum-aanpak, dus een van mijn eerste taken was om een epic en user stories te schrijven. Dit hielp me om de scope van het project te begrijpen en te bepalen welke features als eerste opgepakt moesten worden. Vervolgens heb ik Jira opgezet en de eerste taken aangemaakt, zodat het team een overzicht had van de workflow.

Daarnaast heb ik een eerste versie van het database diagram gemaakt. Dit vereiste een diepere analyse van de datamodellen en de relaties tussen de verschillende entiteiten. Ik moest nadenken over performance, schaalbaarheid en normalisatie, zodat de database efficiënt blijft werken – ook als het aantal gebruikers toeneemt./n

### ✅ Hoogtepunten:

- Epic en user stories opgesteld voor het project  
- Database diagram ontworpen en besproken met mijn mentor  
- Jira ingericht en de eerste taken toegevoegd  

### ⚠️ Uitdagingen:

- Hoe zorg ik ervoor dat de user stories duidelijk en haalbaar zijn?  
- De juiste relaties en constraints kiezen voor de database om data-integriteit te behouden  

### 💭 Reflectie:

Deze week heb ik vooral veel nagedacht over hoe een project vanaf de basis wordt opgezet. Het schrijven van user stories hielp me om na te denken over de behoeften van de eindgebruiker, en niet alleen over de technische implementatie.
    `,
    date: '2025-10-14',
    time: '09:00',
    tags: ['planning', 'database', 'Jira'],
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg'
  }
];
