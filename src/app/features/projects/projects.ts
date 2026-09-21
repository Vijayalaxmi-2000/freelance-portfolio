import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface Project {
  title: string;
  period: string;
  client: string;
  role: string;
  category: string;
  type: string;
  icon: string;
  summary: string;
  description: string;
  contributions: string[];
  technologies: string[];
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})


export class Projects {

  selectedProject: Project | null = null;


  projects: Project[] = [

    {
      title: 'EMR — Oncology',

      period: 'Jun 2025 — Nov 2025',

      client: 'India',

      role: 'Software Engineer',

      category: 'Healthcare',

      type: 'emr',

      icon: 'medical_services',

      summary:
        'Clinical software solutions and a centralized annotation framework for oncology applications.',

      description:
        'Developed and optimized clinical software solutions for oncology departments. Analysed requirements and collaborated with medical stakeholders to deliver scalable solutions focused on usability, consistency and practical clinical workflows.',

      contributions: [
        'Developed and optimized clinical software solutions for oncology departments.',
        'Analysed requirements and collaborated with medical stakeholders.',
        'Architected and implemented a centralized annotation framework for standardized medical data management.',
        'Designed intuitive UI/UX solutions for clinical applications.',
        'Delivered features in an Agile development environment.'
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'Java',
        'Spring Boot',
        'REST APIs'
      ]
    },


    {
      title: 'Audit Planning & Management System',

      period: 'Apr 2024 — Jun 2025',

      client: 'Oman',

      role: 'Software Engineer',

      category: 'Enterprise',

      type: 'audit',

      icon: 'fact_check',

      summary:
        'Full-stack audit lifecycle management platform with role-based modules, security and reporting.',

      description:
        'Developed full-stack features for an audit planning and management system covering different stages of the audit lifecycle. Worked on responsive Angular interfaces, backend APIs, role-based modules, security controls and reporting.',

      contributions: [
        'Developed full-stack features for audit lifecycle management.',
        'Designed role-based modules including RFQ, CRR and Lead Auditor Dashboard.',
        'Built responsive UI components using Angular and integrated backend APIs.',
        'Implemented file validation and ClamAV integration for security controls.',
        'Generated dynamic reports using Jasper Reports.',
        'Led a QA team of 6 testers and supported pre-QA testing.'
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Jasper Reports',
        'ClamAV'
      ]
    },


    {
      title: 'Internal Website',

      period: 'Feb 2024 — Mar 2024',

      client: 'Internal',

      role: 'Software Engineer',

      category: 'Frontend',

      type: 'website',

      icon: 'language',

      summary:
        'Responsive internal website developed from Figma designs with email functionality.',

      description:
        'Developed a responsive static website for mobile, tablet and desktop experiences. Translated Figma designs into a consistent and usable interface while implementing email functionality.',

      contributions: [
        'Developed a responsive static website using HTML, CSS and JavaScript.',
        'Implemented responsive layouts for mobile, tablet and desktop.',
        'Implemented email functionality using EmailJS and Elastic Email.',
        'Translated Figma designs into a pixel-perfect UI.',
        'Collaborated on UI/UX implementation and usability improvements.'
      ],

      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'EmailJS',
        'Elastic Email',
        'Figma'
      ]
    },


    {
      title: 'Alumni Management System',

      period: 'Oct 2023 — Mar 2024',

      client: 'Singapore',

      role: 'Associate Software Engineer',

      category: 'Membership',

      type: 'alumni',

      icon: 'school',

      summary:
        'Membership management platform covering alumni, events, departments and communication.',

      description:
        'Developed full-stack features and intuitive UI/UX solutions for a membership management platform. The application included alumni data management, event management, membership categories and communication functionality.',

      contributions: [
        'Developed full-stack features for a membership management platform.',
        'Designed modules for events, departments and membership categories.',
        'Implemented alumni data management functionality.',
        'Built communication and event-management features.',
        'Implemented email notifications.',
        'Implemented QR code-based ticket validation.'
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'Java',
        'Spring Boot',
        'MySQL'
      ]
    },


    {
      title: 'Alambana',

      period: 'Mar 2023 — Oct 2023',

      client: 'India',

      role: 'Associate Software Engineer',

      category: 'Full-stack',

      type: 'alambana',

      icon: 'dashboard',

      summary:
        'Full-stack application with dashboards, authentication, administration, forum and chat functionality.',

      description:
        'Developed full-stack features using Angular and Spring Boot. Worked across dashboard, authentication and administration modules as well as communication functionality including forums, chat and file sharing.',

      contributions: [
        'Developed dashboard functionality.',
        'Implemented authentication and administration modules.',
        'Developed forum functionality.',
        'Implemented chat functionality with file-sharing support.',
        'Supported PDF and image file sharing.',
        'Generated dynamic reports using Jasper Reports.',
        'Supported deployment and server management using Docker and PuTTY.'
      ],

      technologies: [
        'Angular',
        'TypeScript',
        'Java',
        'Spring Boot',
        'PostgreSQL',
        'Jasper Reports',
        'Docker',
        'PuTTY'
      ]
    }

  ];


  openProject(project: Project): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }


  closeProject(): void {
    this.selectedProject = null;
    document.body.style.overflow = '';
  }

}
