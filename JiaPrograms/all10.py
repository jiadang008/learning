n = int(input(" Enter a number: "))
for i in range(1,n):
    k = 0
    for j in range(1,i - 1):
        if n-i==j-1:
            print(0,end=" ")
            k = k + 1
        else:
            print(1,end=" ")
            k = k + 1
        print(end=" ")
    print("\r")
