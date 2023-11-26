const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  const dotenv = require('dotenv');
  // Configure Angular `environment.ts` file path
  const devFilePath = './src/environments/environment.development.ts';
  const prodFilePath = './src/environments/environment.prod.ts';
  // Load node modules
  dotenv.config({
    path: '.env'
  });

  // `environment.ts` file structure
  const prodFile = `export const environment = {
    STRIPE_PUBLIC_KEY: '${process.env["STRIPE_PUBLIC_KEY"]}',
    STRIPE_SECRET_KEY: '${process.env["STRIPE_SECRET_KEY"]}',
    baseURL:'${process.env["baseURL"]}',
    PORT:${process.env["PORT"]},
    production: true,
    };
  `;

  const devFile = `export const environment = {
    STRIPE_PUBLIC_KEY: '${process.env["STRIPE_PUBLIC_KEY"]}',
    STRIPE_SECRET_KEY: '${process.env["STRIPE_SECRET_KEY"]}',
    baseURL:'${process.env["baseURL"]}',
    PORT:${process.env["PORT"]},
    production: false,
    };
  `;
  writeFile(devFilePath, devFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${devFilePath} \n`);
    }
  });

  writeFile(prodFilePath, prodFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(`Angular environment.ts file generated correctly at ${prodFilePath} \n`);
    }
  });
};

setEnv();
