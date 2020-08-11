lst = [1,2,3,4]
try:
    print(1/0)
    #print(lst[5])
    print('Hello World')
except Exception as abd:
    print(abd)
else:
    print('This block will be exectuted if there is not error in try block')
finally:
    print('This block will be executed every time.')
print('End of the program')

raise IndexError('This is a index error.')