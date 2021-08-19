# spreadsheet checker

1. Use the `.nvmrc` node version.

```sh
$ nvm use
Found '/home/user/repo/.nvmrc' with version <14>
Now using node v14.17.4 (npm v6.14.14)
```

2. Install all deps.

```sh
$ npm install
```

3. Create and fill the `local.config.ts` fine on `./src`.

```js
process.env.email = "email@domain.com";
process.env.password = "password$%!@#";
process.env.spreadsheetUrl =
  "https://docs.google.com/spreadsheets/d/SPREADSHEET_ID";
```

4. Run the script using:

```sh
$ npm run start
```
