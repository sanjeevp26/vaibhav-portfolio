const skills = [
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'ML Engineering', 'NLP'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['ML Engineering', 'NLP'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Transformers (HuggingFace)',
    competency: 4,
    category: ['ML Engineering', 'NLP'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Analysis', 'Python'],
  },
  {
    title: 'Jupyter Notebooks',
    competency: 5,
    category: ['Data Analysis', 'Python'],
  },
  {
    title: 'LaTeX',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Social Media Analytics',
    competency: 5,
    category: ['Research Areas'],
  },
  {
    title: 'Natural Language Processing (NLP)',
    competency: 5,
    category: ['Research Areas', 'ML Engineering', 'NLP'],
  },
  {
    title: 'Computational Social Science',
    competency: 4,
    category: ['Research Areas'],
  },
  {
    title: 'AI for Social Good',
    competency: 5,
    category: ['Research Areas'],
  },
  {
    title: 'Responsible Computing',
    competency: 4,
    category: ['Research Areas'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#6968b3', // Languages
  '#37b1f5', // ML Engineering
  '#40494e', // NLP
  '#515dd4', // Tools
  '#e47272', // Data Analysis
  '#cc7b94', // Research Areas
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index % colors.length],
  }));

export { categories, skills };
