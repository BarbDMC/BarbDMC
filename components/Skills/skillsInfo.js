import { faLayerGroup, faDatabase, faCode, faCloudArrowUp, faClipboardCheck, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const skillsInfo = [
  {
    icon: faLayerGroup,
    title: 'Data Warehousing & Orchestration',
    list: ['Snowflake', 'dbt', 'Data Modeling', 'ELT/ETL Pipelines']
  },
  {
    icon: faDatabase,
    title: 'Databases & Querying',
    list: ['PostgreSQL', 'MongoDB', 'SQL Optimization', 'Prisma']
  },
  {
    icon: faCode,
    title: 'Programming Languages',
    list: ['Python', 'SQL', 'Java (Spring Boot)', 'Node.js', 'TypeScript']
  },
  {
    icon: faCloudArrowUp,
    title: 'Cloud & Infrastructure',
    list: ['AWS (Cloud Practitioner)', 'Docker', 'Datadog (Observability)']
  },
  {
    icon: faClipboardCheck,
    title: 'Testing & Quality',
    list: ['TDD', 'Data Testing (dbt tests)', 'Jest', 'Mockito']
  },
  {
    icon: faPeopleGroup,
    title: 'Soft skills',
    list: ['Self-Taught', 'Persistent', 'Communicative', 'Organized', 'Methodical']
  },
];

export default skillsInfo;
