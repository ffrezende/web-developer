class Autor():

    def __init__(self, firstName, lastName, yearBorn):
        self.firstName = firstName
        self.lastName = lastName
        self.yearBorn = yearBorn
    
    def nome_como_citado(self):
        return self.lastName.upper() + set(firstName)[0].upper()