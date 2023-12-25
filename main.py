
from fastapi import FastAPI, Request, Form, Depends
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

import os, time, datetime, sqlite3, asyncpg

from models import pydantics
from helpers import data



HOST = 'smtp.gmail.com'
PORT = 587

GMAIL = 'annomybot@gmail.com'
GMAIL_PASSWORD = 'dlnq bjdp vyft dikf'


app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory='templates')

try:
    db = asyncpg.create_pool(data['DB_CONFIG'], min_size=4, max_size=5)
    print("Connected to POSTGRESQL Database")
except Exception as e:
    print("Failed to connect to POSTGRESQL Database: ", e)


@app.get("/", response_class=HTMLResponse)
async def index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/contact", response_class=HTMLResponse)
async def contact(request: Request):
    return templates.TemplateResponse("contact.html", {"request": request})




# uvicorn main:app --reload