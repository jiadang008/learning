print('Welcome to the birthday dictionary. We know the birthdays of: Gandhiji, Chacha Nehru, and Jesus Christ.')
#name=input('Enter the name of the person whose name you want to look up: ').title()
#dictionary_bday={'Gandhiji':'02/10/1869', 'Jesus Christ':'12/25/late 1700s', 'Chacha Nehru':'11/14/1889'}
#if name == 'Gandhiji' or 'gandhiji':
#    print(f"Gandhiji's birthday is on {dictionary_bday['Gandhiji']}.")
#elif name == 'Jesus Christ' or 'jesus christ':
#    print(f"Jesus Christ's birthday is on {dictionary_bday['Jesus Christ']}.")
#elif name == 'Chacha Nehru' or 'chacha nehru':
#    print(f"Chacha Nehru's birthday is on {dictionary_bday['Chacha Nehru']}.")
#else:
#    print("We don't know the birthday of that person. Try again.")
 


# lower 
# message for no person     

def birthday_dictionary(name):
    if dictionary_bday.get(name):
        print(f"{name}'s Birthday is on {dictionary_bday[name]}")
    else:
        print('Sorry')

strings = ['1','21', '37', '49', '5', '6', '7']
print([int(lst) for lst in strings])


var = list(map(lambda n: int(n), filter(lambda x: int(x) % 2 != 0, strings)))
print('Unsorted List: {}'.format(var))
var.sort()
print('Accending List: {}'.format(var))
var.sort(reverse=True)
print('Decending Lsit: {}'.format(var))

#birthday_dictionary(name)
# 1, 2,3,4,5: 1*2*3*4*5=120
