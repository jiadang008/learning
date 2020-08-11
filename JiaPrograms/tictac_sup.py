def game_board(x):
    print(x[0]+'|'+x[1]+'|'+x[2])
    print(x[3]+'|'+x[4]+'|'+x[5])
    print(x[6]+'|'+x[7]+'|'+x[8])


def start_game():
    mylist = [' ',' ' ,' ',' ',' ',' ',' ',' ',' ']
    use = []
    turn = 1
    win = False
    play1 = ''
    play2 = ''
    while play1 != 'x' or play1 != 'o':
	    play1 = input('Player 1 Enter either x or o')
    if play1 == 'x':
        play2 = 'o'
    else:
        play2 = 'x'
    while win != True:
        x = user_inp(use)
        use.append()
        if turn == 1:
            mylist[x] = play1
            turn = 2
        else:
            mylist[x] = play2
                turn = 1
        code = check_win(mylist)       

def check_win(lst):
    mylst1 = lst[0:3]
    mylst2 = lst[3:6]
    mylst3 = lst[6:]
    for x in range (0,3):
        if mylst1[x] == mylst2[x] == mylst3[x] and mylst1[x] != ' ':
            return mylst1[x]
            exit
    newlst = [mylst1,mylst2,mylst3]
    for x in newlst:
        if len(set(x) == 1) and x[0] !=' ':
               return newlst[x][0]
               exit
    if lst[0]==lst[4]==lst[8] and lst[0]:

            
    

def user_inp(chk):
    corr_inp = False
    while corr_inp != True:
        val = int(input('Enter a number between 1-9'))-1
        if val in chk:
            print('Entered number is already used')
        elif val not in range(0,9):
            print('Entered no is out of range')
        else:
            corr_inp = True
            return val
                
                
                
                
		
		
		
