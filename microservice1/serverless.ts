import type { AWS } from '@serverless/typescript'

import functions from './resources/functions'

const serverlessConfiguration: AWS = {
  service: 'microservice1',
  frameworkVersion: '2',
  custom: {
    region: '${opt:region, self:provider.region}',
    stage: '${opt:stage, self:provider.stage}',
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    splitStacks: {
      perFunction: true,
      perType: true,
    },
  },
  plugins: ['serverless-webpack', 'serverless-offline'],
  package: {
    individually: true,
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: 'dev',
    region: 'us-west-1',
    apiGateway: {
      shouldStartNameWithService: true,
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      REGION: '${self:custom.region}',
      STAGE: '${self:custom.stage}',
    },
    lambdaHashingVersion: '20201221',
  },
  // import the function via paths
  functions,
}

module.exports = serverlessConfiguration
