export interface Quote {
  id?: number
  content: string
  reference: string
}

const quotes: Quote[] = [
  {
    content: `There are over 7,928,505,061 people in the world, that's nearly 8 billion, I wonder how many of them are nana hackers?`,
    reference: 'Worldometers, world-population',
  },
  {
    content: `According to a global software developer survey in 2021, the vast majority of developers are males, 
    accounting for 91.7 percent of all respondents. Female developers were only five percent, 
    demonstrating the male-dominating reality of software development jobs.`,
    reference: 'Statista.com, worldwide-developer-gender',
  },
  {
    content: `We like to think of our champions and idols as superheroes who were
    born different from us. We don't like to think of them as relatively
    ordinary people who made themselves extraordinary.`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success',
  }, {
    content: `Nana hacker - smashing sterotypes and cracking code.`,
    reference: 'Nana hacker',
  }, {
    content: `More and more research is suggesting that, far from being simply encoded in the genes, 
    much of personality is a flexible and dynamic thing that changes over the lifespan and is shaped by experience.`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success',
  },
  {
    content: `Picture your brain forming new connections as you meet the challenge and learn. Keep on going`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success',
  },
  {
    content: `Teaching is a wonderful way to learn.`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success',
  },
]

const addIdsToQuotes = (): Quote[] => {
  let quotesWithIds = quotes.map((quote, index) => {
    return {...quote, id: index + 1};
  })
  return quotesWithIds
}

export const getQuotes = (): Quote[] => {
  return addIdsToQuotes()
}