n = input('Enter a word: ')
l= int(input('Enter a number: '))
if len(n)==3:
    print(n * l)
else:
    print(n[0:3]*l)
    