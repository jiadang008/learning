class Fruit:

    # Attributes
    '''
    name = 'Grapes'
    color = 'Green'
    weight = '2GM'
    '''

    # initialization / Constructor
    def __init__(self, name, color, weight):
        self.color = color
        self.name = name
        self.weight = weight

    # Instance Methods
    def eat(self):
        print('Jia is eating {}'.format(self.name))

obj = Fruit('Grapes', 'Green', '2GM')
print(obj.name)
print(obj.color)
print(obj.weight)
obj.eat()

obj1 = Fruit('Banana', 'Yello', '30GM')
print(obj1.name)
print(obj1.color)
print(obj1.weight)
obj1.eat()