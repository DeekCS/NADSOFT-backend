const userSchema = {
  User: {
    type: 'object',
    properties: {
      id: { type: 'integer' },
      name: { type: 'string' },
      email: { type: 'string' },
      country: { type: 'string' },
      age: { type: 'integer' },
      mobile: { type: 'string' },
    },
  },
}

export { userSchema }
