n = 5
for i in range(1,n):
    k = 0
    for j in range(1,n):
        if k <= n:
            print("-")
            k = k + 1
        else:
            print("0")
    print("\r")
