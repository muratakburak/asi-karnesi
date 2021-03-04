from dbconf import session
from models import User, Country


def add_user(name, *, country_id=None, visibility=None):
    user = User(name=name, country_id=country_id, visibility=visibility)
    session.add(user)
    session.commit()


def get_user(user_id):
    query = session.query(User).filter(User.id == user_id)
    user = query.one_or_none()
    return user


def get_user_by_name(name):
    query = session.query(User).filter(User.name.like("%" + name + "%"))
    return query.first()


def remove_user(user_id):
    session.query(User).filter(User.id == user_id).delete()


def add_country(name):
    country = Country(name=name)
    session.add(country)
    session.commit()


def get_country_by_name(name):
    query = session.query(Country).filter(Country.name.like("%" + name + "%"))
    return query.first()
