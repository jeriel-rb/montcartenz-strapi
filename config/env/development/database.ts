import path from 'path';
// @ts-ignore
export default ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(process.cwd(), env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});