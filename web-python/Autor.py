class Autor():
    def __init__(self, firstName, lastName, yearBorn):
        self.firstName = firstName
        self.lastName = lastName
        self.yearBorn = yearBorn
    
    def __str__(self):
        return self.lastName
    
    def nome_como_citado(self):
        return self.lastName.upper() + ' .' + self.lastName[0].upper()