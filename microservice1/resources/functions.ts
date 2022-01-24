export default {
  createFoo: {
    handler: 'handler.createFoo',
    events: [
      {
        http: {
          method: 'POST',
          path: 'foos',
          cors: true,
        },
      },
    ],
  },
  getFoos: {
    handler: 'handler.getFoos',
    events: [
      {
        http: {
          method: 'GET',
          path: 'foos',
          cors: true,
        },
      },
    ],
  },
}
