const projectsInfo = [
  {
    imageSrc: '/assets/images/ghg-emissions-ledger-dashboard.png',
    altText: 'GHG Emissions Ledger ESG dashboard preview',
    title: 'GHG Emissions Ledger',
    description:
      'An auditable Scope 1 & 2 carbon ledger built from multi-currency, multi-unit energy invoices. Airflow loads Climatiq emission factors and invoices from MinIO into an append-only PostgreSQL / Supabase warehouse, dbt deduplicates and tests the data, and a Streamlit ESG dashboard reports the CO₂e.',
    url: 'https://github.com/BarbDMC/ghg-emissions-ledger',
    demoUrl: 'https://ghg-emissions-ledger.streamlit.app/',
  },
  {
    imageSrc: '/assets/images/pokeApi.png',
    altText: 'PokeApi project preview',
    title: 'PokeApi',
    description:
      "It's a Pokemon API to fetch and show information about Blaziken pokemon, it's description, basic points and, weaknesses.",
    url: 'https://github.com/BarbDMC/PokeApi',
  },
];

export default projectsInfo;
