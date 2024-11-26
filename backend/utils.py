import os
from datetime import datetime
import requests

file_path="backend/data/data.csv"
headers = "timestamp,data,country,region,city,latitude,longitude"

def save_to_file(data_ara, file_path=file_path):
    with open(file_path, "a") as f:
        if os.path.getsize(file_path) == 0:
            f.write(headers + "\n")
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        f.write(f"{timestamp},{','.join(map(str, data_ara))}\n")


def ip_to_location(ip): 
    """
    return array [country,region,city,latitude,longitude]
    """
    url = f"http://ip-api.com/json/{ip}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if data["status"] == "success":
            return [data.get("country"), data.get("regionName"), data.get("city"), data.get("lat"), data.get("lon")]

    except Exception as e:
        print({"error": str(e)})

    return [None]*5

