import sqlite3

from flask import g
from flask_sqlalchemy import SQLAlchemy

from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

from sqlalchemy import create_engine

engine = create_engine(
    "sqlite:///database.db", echo=True, connect_args={"check_same_thread": False}
)

from sqlalchemy.orm import sessionmaker

Session = sessionmaker(bind=engine)
session = Session()
