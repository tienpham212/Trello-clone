import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import {create, getAll, getOne, deleteCol} from "@functions/columnsFunction";

const serverlessConfiguration: AWS = {
  service: "test",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
      DYNAMODB_TABLE: "${self:service}-Board-${sls:stage}",
    },
    iam: {
      role: {
        statements: [
          {
            Effect: "Allow",
            Action: [
              "dynamodb:PutItem",
              "dynamodb:Get*",
              "dynamodb:Scan*",
              "dynamodb:UpdateItem",
              "dynamodb:DeleteItem",
            ],
            Resource:
              "arn:aws:dynamodb:us-east-1:410901427741:table/test-Board-dev",
          },
        ],
      },
    },
  },
  // import the function via paths
  functions: {hello, create, getAll, getOne, deleteCol},
  package: {individually: true},
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node14",
      define: {"require.resolve": undefined},
      platform: "node",
      concurrency: 10,
    },
    ["serverless-offline"]: {
      httpPort: 4000,
    },
  },
  resources: {
    Resources: {
      BoardTable: {
        Type: "AWS::DynamoDB::Table",
        Properties: {
          AttributeDefinitions: [
            {AttributeName: "primary_key", AttributeType: "S"},
          ],
          BillingMode: "PAY_PER_REQUEST",
          KeySchema: [{AttributeName: "primary_key", KeyType: "HASH"}],
          TableName: "${self:service}-Board-${sls:stage}",
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
