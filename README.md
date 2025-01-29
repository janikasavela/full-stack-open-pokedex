# Full Stack open CI/CD

This repository is used for the CI/CD module of the Full stack open course

Fork the repository to complete course exercises

## Commands

Start by running `npm install` inside the project folder

`npm start` to run the webpack dev server
`npm test` to run tests
`npm run eslint` to run eslint
`npm run build` to make a production build
`npm run start-prod` to run your production build

# Janikan lisäykset repoon:

- Korjasin testien ja linttauksen aiheuttamat errorit
- Lisäsin pari simppeliä end-to-end testiä (Playwright)
- Deployasin sovellusekn Fly.io:hon
- Suojasin main branchin, eli lisäsin vaatimukset: Kaikki pull requestit pitää olla hyväksyttyjä ennen mergeä ja kaikkien status tarkistusten tulee onnistua ennen mergeä
- Tein health check workflown, joka pingaa kerran vuorokaudessa sovelluksen /health endpointiin tarkistaen että se on toiminnassa
- Tein projektille CI/CD pipelinen, joka:

1. Linttaa ja ajaa testikoodit (sekä Jestin että Playwrightin) frontendin ja backendin koodin aina, kun pushataan koodia tai tehdään pull request main-branchiin. Lisäksi lisää Playwrightin testi raportit omaan kansioonsa.
2. Lähettää Discrod kanavalle error viestin jos buildaus epäonnistuu
3. Tarkistaa commit viestin - jos siinä on #skip, se ei deployaa uutta koodia
4. Varmistaa, että koodi on oikeasti menossa mainiin ennen deployta, eikä kyse ole vain pull requestista
5. Redeployaa sovelluksen
6. Tekee health checkin ja pingaa sovelluksen päätepisteeseen /health
7. Luo version tagin onnistuneen deployn jälkeen
8. Lähettää Discord kanavalle ilmoituksen onnistuneen deployn jälkeen

Kurssion osiossa tein myös CI/CD pipelinen toiselle kurssissä tehdylle sovellukselle, se löytyy täältä:
https://github.com/janikasavela/Fullstack-kurssin-Backend/tree/main
