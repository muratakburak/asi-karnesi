from hello import app
import dbops

from flask import request, jsonify


def get_result(res, status):
    result = jsonify(res)
    result.status_code = status
    return result


@app.route("/add_user", methods=["POST"])
def add_user():
    name = request.json.get("name")
    country_id = request.json.get("country_id")
    dbops.add_user(name, country_id=country_id)
    return get_result({}, 200)


@app.route("/user", methods=["GET"])
def get_user():
    if "id" not in request.args:
        return get_result({"error": "No user id provided"}, 400)
    id = request.args["id"]
    user = dbops.get_user(id)
    if user is None:
        return get_result({"error": "User not found"}, 400)
    res = {
        "name": user.name,
        "country_id": user.country_id,
    }
    return get_result(res, 200)


@app.route("/basic_test")
def hello_world():
    dbops.add_country("turkeyq")
    turkey = dbops.get_country_by_name("turkeyq")
    print('id:', turkey)
    dbops.add_user("erdemsu", country_id=turkey.id)
    erdem = dbops.get_user_by_name("erdem")
    print(erdem.id, erdem)
    return "Hello Worldqqqasd!"
