import { faLayerGroup, faDatabase, faCode, faCloudArrowUp, faClipboardCheck, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

const skillsInfo = [
  {
    icon: faLayerGroup,
    title: 'Data Warehousing & Orchestration',
    list: ['Snowflake', 'dbt', 'Apache Airflow', 'Data Modeling (Star Schema)', 'ELT/ETL Pipelines']
  },
  {
    icon: faDatabase,
    title: 'Databases & Querying',
    list: ['PostgreSQL', 'Supabase', 'MongoDB', 'SQL Optimization', 'Prisma']
  },
  {
    icon: faCode,
    title: 'Programming Languages',
    list: ['Python (pandas, Streamlit, Plotly)', 'SQL', 'Java (Spring Boot)', 'Node.js', 'TypeScript']
  },
  {
    icon: faCloudArrowUp,
    title: 'Cloud & Infrastructure',
    list: ['AWS Certified Cloud Practitioner', 'AWS Certified AI Practitioner', 'Docker & Docker Compose', 'MinIO (S3 Object Storage)', 'Datadog (Observability)']
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
