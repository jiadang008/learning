mathamatics = input(" What is the score in mathamatics")
chemistry = input(" What is the score in chemistry")
bioligy = input(" What is the score in bioligy")
phisics = input(" What is the score in phisics")
computer = input(" What is the score in computer")
total = mathamatics + chemistry + bioligy + phisics + computer
quotient = total/5
if quotient >= 90:
    print("You got an A")
elif quotient >= 80:
    print("You got a B")
elif quotient >= 70:
    print("You got a C")
elif quotient >= 60:
     print("You got a D")
elif quotient >= 40:
    print("You got a E")
elif quotient < 40:
    print("You got an F")

