import { configOverridesGenerated } from './config-overrides-generated'
// DO NOT DELETE THIS FILE!!!

//==============================================
// Default configurations
//==============================================

const Config = {

  USER_POOL_ID:               'us-east-1_MLG7xjbGl',
  USER_POOL_DOMAIN_NAME:      'toga.auth.us-east-1.amazoncognito.com',
  USER_POOL_DOMAIN_PREFIX:    'toga',
  CLIENT_ID:                  '2gk41j3h6nloe080ucjklg8hbv',
  IDENTITY_POOL_ID:           'us-east-1:424509786123:userpool/us-east-1_MLG7xjbGl',
  REGION:                     'us-east-1',  // Your AWS region where you setup your Cognito User Pool and Federated Identities

  PROFILE_IMAGES_S3_BUCKET:   'spacefinder-development-stack-userdatabucket-11wtuhxdpzbp5',

  API_ENDPOINT:               'https://getoa5h520.execute-api.us-east-1.amazonaws.com/v1/hello',

  DEVELOPER_MODE:             false, // enable to automatically login
  CODE_VERSION:               '1.0.0',
  DEFAULT_USERNAMES:          ['user1', 'admin1'] // default users cannot change their passwords

};

//==============================================



// Merge in the values from the auto-generated config.
// If there are are conflicts, then the values from the
// auto-generated config will override
function mergeConfigurations() {
  for (let attributeName of Object.keys(configOverridesGenerated)) {
    Config[attributeName] = configOverridesGenerated[attributeName];
  }
}

mergeConfigurations();

export { Config }
