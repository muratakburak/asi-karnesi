from dbconf import Base, engine
from sqlalchemy import Column, Integer, String, ForeignKey


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    country_id = Column(Integer, ForeignKey("country.id"))
    visibility = Column(Integer)
    name = Column(String)

    def __repr__(self):
        return "<User(name='%s')>" % (self.name)


class Country(Base):
    __tablename__ = "country"

    id = Column(Integer, primary_key=True)
    name = Column(String)

    def __repr__(self):
        return "<Country(name='%s')>" % (self.name)


Base.metadata.create_all(engine)
