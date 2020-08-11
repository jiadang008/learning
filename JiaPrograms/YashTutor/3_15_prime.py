number = int(input("Enter a number: "))
i =1

while i<= number:
    j=2
    while j<i:
        if i%j == 0:
            print(i,"Is a not a prime number")
            break
        j=j+1
    if(j == i):
        print(i,"Is a prime number")
    i=i+1
