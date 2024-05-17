from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

class Tateti:
    def __init__(self):
        self.board = [[" " for _ in range(3)] for _ in range(3)]
        self.current_player = "X"

    def make_move(self, row, col):
        if self.board[row][col] == " ":
            self.board[row][col] = self.current_player
            self.current_player = "O" if self.current_player == "X" else "X"
            return True
        else:
            return False

    def check_win(self):
        # Implementa la lógica de verificación de victoria
        pass

    def check_draw(self):
        # Implementa la lógica de verificación de empate
        pass

# Creamos una instancia del juego
game = Tateti()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/make_move', methods=['POST'])
def make_move():
    row = int(request.form['row'])
    col = int(request.form['col'])
    if game.make_move(row, col):
        return jsonify({'success': True, 'current_player': game.current_player, 'winner': game.check_win(), 'draw': game.check_draw()})
    else:
        return jsonify({'success': False})

if __name__ == '__main__':
    app.run(debug=True)

