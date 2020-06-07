<h1 align="center">Notes API</h1>

This is the REST API for the Notes Application.

This project is part of the [Native Apps I](https://bamaflexweb.hogent.be/BMFUIDetailxOLOD.aspx?a=113418&b=1&c=1) course for the Bachelor of Applied Informatics at the Ghent University College [HoGent](https://www.hogent.be/en/) (Academic year 2019-2020).

---

## Getting Started

The server is currently hosted by [Google Cloud](https://cloud.google.com) [![Website](https://img.shields.io/website?label=backend&logo=google%20cloud&url=https%3A%2F%2Fnotes-api-p4tlzt4yxq-ew.a.run.app)](https://notes-api-p4tlzt4yxq-ew.a.run.app).

> ### [`https://notes-api-p4tlzt4yxq-ew.a.run.app`](https://notes-api-p4tlzt4yxq-ew.a.run.app)

[**Visit the documentation website**](https://wafelbak-api-p4tlzt4yxq-ew.a.run.app)

### Installation

1. Clone this repo

   ```bash
   git clone https://github.com/VictorOwnt/NotesBackend
   ```

2. Open the project root directory

   ```bash
   cd NotesBackend
   ```

3. Install dependencies from npm

   ```bash
   npm install
   ```

4. Run the project

   ```bash
   npm start
   ```

   Use [nodemon](https://nodemon.io/) to reload the server automatically on changes:

   ```bash
   npm start-local
   ```

   The server is now running at `localhost:3000`

> Copy paste this in your terminal if you're lazy. 😴
>
> ```bash
> git clone https://github.com/VictorOwnt/NotesBackend && cd NotesBackend && npm i && npm start
> ```

<!--
### Trying routes with Insomnia
-->
<!--
We've included our [Insomnia](https://insomnia.rest/) configuration file for testing API calls. No automated end-to-end tests (yet).-->
<!--
You can find a guide on how to import this [here](https://support.insomnia.rest/article/52-importing-and-exporting-data). The data is located in the `Insomnia_2020_01_05.json` file.
-->
<!--
### Azure SQL Database
-->
<!--
This API relies on a [Microsoft Azure](azure.microsoft.com) database.
-->
<!--
1. Create a new file `.env` in the root folder of the project
2. Open the file and add following lines to it:

    ```bash
    WAFELBAK_BACKEND_SECRET="VictorIsDeBeste"
    WAFELBAK_DATABASE="WafelbakDatabase"
    DATABASE_USER="victorvh"
    DATABASE_PASSWORD="123Victor"
    DATABASE_SERVER="wafelbakserver.database.windows.net"
    DATABASE_DIALECT="mssql"
    ```-->
<!--
3. It is now possible to test the API with our database. **Don't abuse this.** Change the values to your own values when deploying. -->

## Built With

- [Express](https://expressjs.com/)
- [Sequellize](https://sequelize.org)
- [zxcvbn](https://github.com/dropbox/zxcvbn)
- [Swagger](https://swagger.io/)

## Creator

| <a href="https://github.com/VictorOwnt" target="_blank">**Victor Van Hulle**</a> |
| --- |
| [![Victor](https://avatars2.githubusercontent.com/u/17174095?s=200)](https://github.com/VictorOwnt) |
