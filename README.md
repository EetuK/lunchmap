# Lunch map

This project was started for need to see lunch options nearby office. Stockholm sadly doesn't already have websites for this tasks so there's need to create new one.

Initial idea of the app is just to have list of lunch places on map. MVP Data storage for restaurants is Google Sheet which is pushlished to the internet and scraped by Python script that updates `restaurants.json` file.

## Developing

Start app by running

```bash
npm run dev
```

Fetch data from Google Sheet published version by running

```bash
npm run update-data
```

## License

Copyright (C) Eetu Koskelainen
[MIT](./MIT.txt)
