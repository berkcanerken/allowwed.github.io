import os, time, datetime, sqlite3, asyncpg, json 


with open("config.json" , "r") as f:
    data = json.load(f)

