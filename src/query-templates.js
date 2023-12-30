const queryTemplates = [
  {
    template: 'how fast can a $1 run',
    types: ['animal'],
  },
  {
    template: '$1',
    types: ['topics'],
  },
  {
    template: 'introduction to $1',
    types: ['topics'],
  },
  {
    template: '$1 in detail',
    types: ['topics'],
  },
  {
    template: 'jobs related to $1',
    types: ['topics'],
  },
  {
    template: '$1 net worth',
    types: ['person'],
  },
  {
    template: '$1 companies',
    types: ['person'],
  },
  {
    template: 'Who is $1',
    types: ['person'],
  },
  {
    template: '$1 wiki',
    types: ['person'],
  },
  {
    template: '$1 wiki',
    types: ['animal'],
  },
  {
    template: 'cartoon picture of $1',
    types: ['animal'],
  },
  {
    template: 'drawing of $1',
    types: ['person'],
  },
  {
    template: '$1 on $2',
    types: ['person', 'socialMedia'],
  },
  {
    template: 'nutrition $1 vs $2',
    types: ['food', 'food'],
  },
  {
    template: 'calories in a $1',
    types: ['food'],
  },
  {
    template: 'recipe using $1',
    types: ['food'],
  },
  {
    template: 'healthy $1',
    types: ['food'],
  },
  {
    template: 'flights to $1',
    types: ['locations'],
  },
  {
    template: 'history of $1',
    types: ['locations'],
  },
  {
    template: 'travel guide to $1',
    types: ['locations'],
  },
  {
    template: '$1 wiki',
    types: ['locations'],
  },
];

const types = {
  animal: animals,
  person: people,
  food: food,
  socialMedia: socialMedias,
  locations: locations,
  topics: topics,
};
