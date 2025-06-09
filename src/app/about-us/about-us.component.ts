import { Component } from '@angular/core';

interface Section {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent {
  // Data for the accordion sections
  sections = [
    {
      id: '001',
      title: 'MISSION AND GOALS',
      content: 'Create an environment where students don\'t just learn, but experiment, challenge technology and implement their own ideas.',
      details: 'Goals: In-depth study of modern technology / Hands-on work on real cases / Forming teams to dev your own projects / Improve soft skills',
      isOpen: true
    },
    {
      id: '002',
      title: 'CREATION STORY',
      content: 'Here we would describe the founding story of the IT-club, its initial challenges, and early successes.',
      details: '',
      isOpen: false
    },
    {
      id: '003',
      title: 'OUR KEY ACHIEVEMENTS',
      content: 'This section would highlight major projects, competition wins, or successful alumni stories.',
      details: '',
      isOpen: false
    }
  ];

  // Data for the team members
  teamMembers = [
    {
      name: 'АРТЕМ',
      role: 'Technical Mentor',
      image: 'assets/team.png',
      linkedinUrl: 'https://www.youtube.com/watch?v=Ay8lynMZ4mE'
    },
    {
      name: 'ПЕТРОВИЧ',
      role: 'UI/UX Designer',
      image: 'assets/team.png',
      linkedinUrl: 'https://www.youtube.com/watch?v=Ay8lynMZ4mE'
    },
    {
      name: 'СІНЬКОВСЬКИЙ',
      role: 'Frontend Mentor',
      image: 'assets/team.png',
      linkedinUrl: 'https://www.youtube.com/watch?v=Ay8lynMZ4mE'
    }
  ];
    toggleSection(clickedSectionId: string, event: MouseEvent): void {
    // Prevent the default <details> toggle behavior
    event.preventDefault();

    const clickedSection = this.sections.find(s => s.id === clickedSectionId);
    if (!clickedSection) return;

    // Check if the clicked section was already open
    const wasOpen = clickedSection.isOpen;

    // First, close all sections
    this.sections.forEach(section => section.isOpen = false);

    // If the clicked section was NOT open, open it.
    // If it was open, it will now be closed (because of the line above),
    // achieving the toggle effect.
    if (!wasOpen) {
      clickedSection.isOpen = true;
    }
  }
}