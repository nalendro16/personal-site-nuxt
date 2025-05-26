export default defineEventHandler(async (event) => {
  console.log(event)
  return [
    {
      id: 1,
      name: 'Project 1',
      description: 'Description of Project 1',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      name: 'Project 2',
      description: 'Description of Project 2',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]
})
