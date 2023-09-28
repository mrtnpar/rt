import { Company } from "./shared";

export const companies: Record<string, Company> = {
  salesforce: {
    id: "salesforce",
    label: "Salesforce",
    icon: "salesforce.svg",
  },
  mongodb: {
    id: "mongodb",
    label: "MongoDB",
    icon: "mongodb.svg",
  },
  snowflake: {
    id: "snowflake",
    label: "Snowflake",
    icon: "snowflake.svg",
  },
  bigquery: {
    id: "bigquery",
    label: "BigQuery",
    icon: "bigquery.svg",
  },
  stripe: {
    id: "stripe",
    label: "Stripe",
    icon: "stripe.svg",
  },
  twilio: {
    id: "twilio",
    label: "Twilio",
    icon: "twilio.svg",
  },
  googleSheets: {
    id: "googleSheets",
    label: "Google Sheets",
    icon: "google-sheets.svg",
  },
  oracle: {
    id: "oracle",
    label: "Oracle",
    icon: "oracle.svg",
  },
  couchdb: {
    id: "couchdb",
    label: "CouchDB",
    icon: "couchdb.svg",
  },
  jira: {
    id: "jira",
    label: "Jira",
    icon: "jira.svg",
  },
  postgresql: {
    id: "postgresql",
    label: "PostgreSQL",
    icon: "postgresql.svg",
  },
};

export const dataA = [
  companies.salesforce,
  companies.mongodb,
  companies.snowflake,
  companies.bigquery,
  companies.stripe,
  companies.twilio,
  companies.googleSheets,
  companies.oracle,
  companies.couchdb,
  companies.jira,
  companies.postgresql,
];

export const dataB = [
  companies.snowflake,
  companies.mongodb,
  companies.salesforce,
  companies.stripe,
  companies.twilio,
  companies.bigquery,
  companies.postgresql,
  companies.googleSheets,
  companies.couchdb,
  companies.jira,
  companies.oracle,
];

export const dataC = [
  companies.mongodb,
  companies.bigquery,
  companies.salesforce,
  companies.snowflake,
  companies.stripe,
  companies.twilio,
  companies.googleSheets,
  companies.postgresql,
  companies.oracle,
  companies.couchdb,
  companies.jira,
];
