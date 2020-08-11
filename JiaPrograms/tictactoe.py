def game_board(x):
    print(x[0]+'|'+x[1]+'|'+x[2])
    print(x[3]+'|'+x[4]+'|'+x[5])
    print(x[6]+'|'+x[7]+'|'+x[8])

def start_game():
    mylist = [' ',' ' ,' ',' ',' ',' ',' ',' ',' ']
    use=[]
    turn = 1
    play1 = ''
    play2 = ''
    win = False
    while play1 != 'x' and play1 != 'o':
        play1 = input('Player 1: Enter either x or o: ')
        if play1 == 'x':
            play2 = 'o'
        else:
            play2 = 'x'
    
    while win != True: 
        user_input = False
        while user_input != True:
            val = int(input('Enter a number between 1-9: '))-1
            if val in use:
                print('The number entered as already in use')
            elif val not in range(0,9):
                print('Enter numbers between 1-9')
            else:
                use.append(val)
                if turn == 1:
                    mylist[val] = play1
                    turn = 2
                else:   
                    mylist[val] = play2
                    turn = 1
                user_input = True
        winner = check_win(mylist)
        game_board(mylist)
        if winner == 'x':
            if play1 == winner:
                print('Player 1 is the winner')
            else:
                print('Player 2 is the winner')
            playagain = input('Would you like to play again (Y/N)?')
            if playagain == 'Y':
                mylist = [' ',' ' ,' ',' ',' ',' ',' ',' ',' ']
                use=[]
                turn = 1
            else:
                win = True
        elif winner == 'o':
            if play1 == winner:
                print('Player 1 is the winner')
            else:
                print('Player 2 is the winner')
            playagain = input('Would you like to play again (Y/N)?')
            if playagain == 'Y':
                mylist = [' ',' ' ,' ',' ',' ',' ',' ',' ',' ']
                use=[]
                turn = 1
            else:
                win = True
        elif winner == 'T':
            print('Its a Tie')
            playagain = input('Would you like to play again (Y/N)?')
            if playagain == 'Y':
                mylist = [' ',' ' ,' ',' ',' ',' ',' ',' ',' ']
                use=[]
                turn = 1
            else:
                win = True
    
def check_win(lst):
    win_chk = 0
    new_list = [lst[0:3],lst[3:6],lst[6:]]
    for n in new_list:
        if len(set(n)) == 1 and n[0] != ' ':
            win_chk = 1
            return n[0]
            break
    if win_chk == 0:
        for m in range(0,3):
            if new_list[0][m] == new_list[1][m] == new_list[2][m] and new_list[0][m] != ' ':
                return new_list[0][m]
                win_chk = 1
                break
    if win_chk == 0:
        if lst[0] == lst[4] == lst[8] and lst[0] != ' ':
            return lst[0]
        elif lst[2] == lst[4] == lst[6] and lst[2] != ' ':
            return lst[0]
        elif ' ' in lst:
            return 'C'
        else:
            return 'T'
            
            
            
            
            
            
     
                
                
             
                       
            
        
        
        
    
    
    
        
        
