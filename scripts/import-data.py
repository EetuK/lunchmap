import os
import requests
from bs4 import BeautifulSoup
import json

def fetch_table_data():
    url = os.environ['SHEETS_URL']

    response = requests.get(url)
    html = response.text

    soup = BeautifulSoup(html, 'html.parser')

    table = soup.find('table')

    rows = table.find_all('tr')

    data = []
    header_row = rows[1].find_all('td')
    data_rows = rows[2:]
    print(header_row)

    for row in data_rows:
        row_data = {}

        cells = row.find_all('td')

        for index, cell in enumerate(cells):
            print(cell.text)
            header_col = header_row[index].text
            cell_data = cell.text
            
            if 'Array' in header_col:
                cell_data = cell_data.split(", ")

            if 'lon' in header_col or 'lat' in header_col:
                cell_data = float(cell_data)

            row_data[header_col] = cell_data
        data.append(row_data)

    json_data = json.dumps(data)

    with open('/data/restaurants.json', 'w+') as f:
        f.write(json_data)

    print(os.listdir("/data"))

fetch_table_data()