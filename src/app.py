from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/")
def home1():
   return render_template("home.html")

@app.route("/home.html")
def home2():
   return render_template("home.html")

@app.route("/spotlight.html")
def spotl():
   return render_template("spotlight.html")

@app.route("/pinkfloyd/dsotm.html")
def dsotm():
   return render_template("pinkfloyd/dsotm.html")

@app.route("/pinkfloyd/meddle.html")
def meddle():
   return render_template("pinkfloyd/meddle.html")

@app.route("/pinkfloyd/pinkfloyd.html")
def floyd():
   return render_template("pinkfloyd/pinkfloyd.html")

@app.route("/pinkfloyd/wall.html")
def wall():
   return render_template("pinkfloyd/wall.html")

@app.route("/pinkfloyd/piper.html")
def piper():
   return render_template("pinkfloyd/piper.html")

@app.route("/pinkfloyd/wywh.html")
def wywh():
   return render_template("pinkfloyd/wywh.html")

@app.route("/ledzeppelin/hoth.html")
def hoth():
   return render_template("ledzeppelin/hoth.html")

@app.route("/ledzeppelin/ledzeppelin.html")
def ledzep():
   return render_template("ledzeppelin/ledzeppelin.html")

@app.route("/ledzeppelin/lz.html")
def lz():
   return render_template("ledzeppelin/lz.html")

@app.route("/ledzeppelin/lz2.html")
def lz2():
   return render_template("ledzeppelin/lz2.html")

@app.route("/ledzeppelin/lz3.html")
def lz3():
   return render_template("ledzeppelin/lz3.html")

@app.route("/ledzeppelin/lz4.html")
def lz4():
   return render_template("ledzeppelin/lz4.html")

@app.route("/ledzeppelin/presence.html")
def presence():
   return render_template("ledzeppelin/presence.html")

@app.route("/edsheeran/divide.html")
def divide():
   return render_template("edsheeran/divide.html")

@app.route("/edsheeran/edsheeran.html")
def eds():
   return render_template("edsheeran/edsheeran.html")

@app.route("/edsheeran/equals.html")
def equals():
   return render_template("edsheeran/equals.html")

@app.route("/edsheeran/five.html")
def five():
   return render_template("edsheeran/five.html")

@app.route("/edsheeran/multiply.html")
def multiply():
   return render_template("edsheeran/multiply.html")
   
@app.route("/edsheeran/plus.html")
def plus():
   return render_template("edsheeran/plus.html")

@app.route("/1d/1d.html")
def od():
   return render_template("1d/1d.html")

@app.route("/1d/4.html")
def fouras():
   return render_template("1d/4.html")

@app.route("/1d/am.html")
def am():
   return render_template("1d/am.html")

@app.route("/1d/mm.html")
def mm():
   return render_template("1d/mm.html")

@app.route("/1d/tmh.html")
def tmh():
   return render_template("1d/tmh.html")

@app.route("/1d/up.html")
def up():
   return render_template("1d/up.html")

@app.route("/about.html")
def about():
   return render_template("about.html")

@app.route("/artists.html")
def artists():
   return render_template("artists.html")

@app.route("/search.html")
def search():
   return render_template("search.html")

@app.route("/theweeknd/dawn.html")
def dawn():
   return render_template("theweeknd/dawn.html")

@app.route("/theweeknd/after.html")
def after():
   return render_template("theweeknd/after.html")

@app.route("/theweeknd/bbtm.html")
def bbtm():
   return render_template("theweeknd/bbtm.html")

@app.route("/theweeknd/eos.html")
def eos():
   return render_template("theweeknd/eos.html")

@app.route("/theweeknd/hob.html")
def hob():
   return render_template("theweeknd/hob.html")

@app.route("/theweeknd/kiss.html")
def kiss():
   return render_template("theweeknd/kiss.html")

@app.route("/theweeknd/mdm.html")
def mdm():
   return render_template("theweeknd/mdm.html")

@app.route("/theweeknd/starboy.html")
def starboy():
   return render_template("theweeknd/starboy.html")

@app.route("/theweeknd/theweeknd.html")
def week():
   return render_template("theweeknd/theweeknd.html")

@app.route("/theweeknd/thu.html")
def thu():
   return render_template("theweeknd/thu.html")

@app.route('/store-data', methods=['POST'])


def store_data():
   data = request.get_json()

   conn = sqlite3.connect('playlist.db')
   cur = conn.cursor()
   cur.execute("CREATE TABLE IF NOT EXISTS songs (id INTEGER PRIMARY KEY AUTOINCREMENT, image TEXT, song TEXT, artist TEXT, album TEXT, duration TEXT)")
   
   cur.execute("SELECT * FROM songs WHERE song = ?", (data['song'],))
   result = cur.fetchone()
   if result is not None:
      conn.commit()
      conn.close()
      response = {'status': 'success', 'message': 'Song is aldready in playlist'}
   else:
      cur.execute("INSERT INTO songs (image, song, artist, album, duration) VALUES (?, ?, ?, ?, ?)", (data['image'], data['song'], data['artist'], data['album'], data['duration']))
      conn.commit()
      conn.close()
      response = {'status': 'success', 'message': 'Song added to your playlist'}

   return jsonify(response)

@app.route('/playlist.html')
def playlists():
    conn = sqlite3.connect('playlist.db')
    c = conn.cursor()

    c.execute('SELECT * FROM songs')
    playlists = c.fetchall()

    playlist_songs = []
    for row in playlists:
        playlist_songs.append({'id': row[0],'img': row[1],'name': row[2],'artist': row[3],'album': row[4],'duration': row[5]})
    conn.close()
    return render_template('playlist.html', agrim=playlist_songs)

@app.route('/delete_item/<int:item_id>', methods=['POST'])
def delete_item(item_id):
    conn = sqlite3.connect('playlist.db')
    cur = conn.cursor()
    cur.execute("DELETE FROM songs WHERE id=?",(item_id,))
    conn.commit()
    conn.close()
    return jsonify({'status': 'success'})



if __name__ == '__main__':
   app.run(debug = True)
