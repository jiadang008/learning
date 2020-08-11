while True:
    try:
        x = int(input('Input an integer: '))
    except:
        print('An error occored please try again')
        continue
    else:
        print(f'Thank you, your number squared is: {x**2}')
        break        