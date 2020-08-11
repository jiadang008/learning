n = 5
for i in range(1,n):
    for j in range(1,n):
        if n - i <= j:
            print("*",end= " ")
        else:
            print(" ",end= " ")
        print(end= " ")
    print("\r")
