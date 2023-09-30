const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const dotenv = require('dotenv');
// Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
// Load node modules
  dotenv.config({
    path: '.env'
  });
// `environment.ts` file structure
  const envConfigFile = `export const environment = {
    STRIPE_PUBLIC_KEY: '${process.env["STRIPE_PUBLIC_KEY"]}',
    STRIPE_SECRET_KEY: '${process.env["STRIPE_SECRET_KEY"]}',
    production: true,
  };
`;
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
    }
  });
};

setEnv();