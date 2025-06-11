from flask import Flask, request, jsonify,redirect,url_for
import sqlite3
app=Flask(__name__)
@app.route('/submit', methods=['POST'])
def submit():
    name=request.form['name']
    email=request.form['email']
    phone=request.form['phone']
    message=request.form['message']
    conn=sqlite3.connect("customers.db")
    cursor=conn.cursor()
    cursor.execute('''
           create table IF NOT EXISTS review(
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name VARCHAR(20), 
           email VARCHAR(30),
           phone INTEGER(10), 
           message VARCHAR(200))''')
    cursor.execute('''INSERT INTO review (name,email,phone,message) VALUES(?,?,?,?)''',(name,email,phone,message))
    conn.commit()
    conn.close()
    return redirect(url_for('success'))
@app.route('/success')
def success():
    return "Form submitted successfully! <a href='/'> Go Back</a>"
@app.route('/get_reviews',methods=['GET'])
def get_reviews():
    conn=sqlite3.connect("customers.db")
    cursor=conn.cursor()
    cursor.execute("select * from review")
    reviews=cursor.fetchall()
    conn.close()
    return jsonify(reviews)
if __name__=="__main__":
    app.run(debug=True)
