n = 5
k = 1
for i in range(1,n):
    a= k
    for j in range(1,i+1):
        print(a, end= " ")
        a = int(a / 2)
        print(end= " ")
    print("\r")
    k = k*2
