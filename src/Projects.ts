// src/projects.ts

interface Project {
    title: string;
    description: string;
    imageUrl: string;
    projectUrl: string;
    projectDates: string
}

const projects: Project[] = [
    {
        title: 'Aedes Aegypti Lifespan Extension',
        description: 'Designed novel system to extend the lifespan of Aedes Aegypti mosquitoes using CRISPR/Cas9.',
        imageUrl: 'aedes.png',
        projectUrl: 'https://labs.mcdb.ucsb.edu/montell/craig/',
        projectDates: '2021-Present'
    },
    {
        title: 'ResearchRadar',
        description: 'Co-founded AI startup that helps researchers stay up to date with the latest research in their field.',
        imageUrl: 'rr.png',
        projectUrl: 'https://research-radar.com',
        projectDates: '2023-Present'
    },
    {
        title: "MagicMirrorUS",
        description: 'Founded and ran a company designing and producing custom Linux based smart mirrors.',
        imageUrl: 'rpi.jpg',
        projectUrl: 'https://magicmirror.us',
        projectDates: '2017-2021'
    }
    // Add more project objects here
];

export default projects;
