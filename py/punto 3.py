def separar(lista):
    pares=[]
    impares=[]
    for x in lista:
       
        if x % 2 == 0:        
            pares.append(x)
            
        else:
            impares.append(x)

    pares.sort()
    impares.sort()
    return  pares, impares

pares, impares = separar([3,5,8,6,2,23])
print (pares)
print (impares)