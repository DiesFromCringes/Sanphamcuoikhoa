import sys
board = [['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
         ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
         ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
         ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']]
def display_board():
    for row in board:
        print(' '.join(row))
        def is_valid_move(start_pos, end_pos):
            if board[start_pos[0]][start_pos[1]] == ' ':
        return False
    if board[start_pos[0]][start_pos[1]].islower() == board[end_pos[0]][end_pos[1]].islower():
        return False
     return True
def move_piece(start_pos, end_pos):
    if is_valid_move(start_pos, end_pos):
        piece = board[start_pos[0]][start_pos[1]]
        board[start_pos[0]][start_pos[1]] = ' '
        board[end_pos[0]][end_pos[1]] = piece
    else:
        print("Nước đi không hợp lệ!")
        def play_game():
    print("Chào mừng bạn đến với trò chơi cờ vua!")
    display_board()
    while True:
        start_row = int(input("Nhập hàng xuất phát: "))
        start_col = int(input("Nhập cột xuất phát: "))
        end_row = int(input("Nhập hàng đích: "))
        end_col = int(input("Nhập cột đích: "))
        move_piece((start_row, start_col), (end_row, end_col))
         display_board()
        play_game()