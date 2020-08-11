# Hangman Module

word = ['a','w','k','w','a','r','d']
fill_word = ['_','_','k','_','_','_','_']                            
def game_board():
    print('Welcome to the game')
    a=print('_'+'_'+'k'+'_'+'_'+'_'+'_')
def start_game():
    countw=0
    countc=0
    game = True
    while game == True:
        b=input('Enter a letter of the alphabet: ')
        if b in word:
            for i in range(0,len(word)):
                if word[i] == b:
                    fill_word[i] = b
                    countc += 1
        else:
            print('Incorect!')
            countw += 1
        if word == fill_word:
            print('You have won the game!')
            game = False
        elif countw == 6:
            print('You took more then 6 tries. Try again later.')
            game = False
        b = ""
        for x in range(0,len(fill_word)):
            b=b+fill_word[x]
        print(b)
game_board()
start_game()    


        
    




