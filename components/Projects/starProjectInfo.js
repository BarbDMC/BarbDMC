const starProjectInfo = [
  {
    imageSrc: '/assets/images/learning-junyi-pipeline.png',
    altText: 'Junyi Learning Pipeline dashboard preview',
    title: 'Junyi Learning Pipeline',
    paragraphs: [
      'An end-to-end data pipeline that turns 16 million student problem attempts from the Junyi Academy dataset into a star schema and an interactive learning analytics dashboard.',
      'Airflow orchestrates the load from a MinIO (S3) data lake into PostgreSQL / Supabase, dbt models the staging and marts layers, and Streamlit with Plotly serves the dashboard, all running on Docker.',
    ],
    url: 'https://github.com/BarbDMC/learning-junyi-pipeline',
    demoUrl: 'https://learning-junyi-pipeline.streamlit.app/',
  },
];

export default starProjectInfo;
