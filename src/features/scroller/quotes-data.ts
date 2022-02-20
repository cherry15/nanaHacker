export interface Quote {
  id: number
  content: string
  reference: string
}

export const quotes: Quote[] = [
  {
    id: 1,
    content: `According to a global software developer survey in 2021, the vast majority of developers are males, 
    accounting for 91.7 percent of all respondents. Female developers were only five percent of all respondents, 
    demonstrating the male-dominating reality of software development jobs.`,
    reference: 'statista.com/statistics/1126823/worldwide-developer-gender'
  }, {
    id: 2,
    content: `We like to think of our champions and idols as superheroes who were
    born different from us. We don't like to think of them as relatively
    ordinary people who made themselves extraordinary.`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success'
  }, {
    id: 3,
    content: `More and more research is suggesting that, far from being simply encoded in the genes, 
    much of personality is a flexible and dynamic thing that changes over the lifespan and is shaped by experience.`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success'
  }, {
    id: 4,
    content: `Picture your brain forming new connections as you meet the challenge and learn. Keep on going`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success'
  }, {
    id: 5,
    content: `Teaching is a wonderful way to learn.`,
    reference: 'Carol Dweck, Mindset: The New Psychology of Success'
  }
]
