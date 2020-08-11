
def multiply(*args):
    var = 1
    print(args)
    for i in args:
        var = var * i
    print(var)
multiply('1,2,3,4,5')
