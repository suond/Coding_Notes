def isRotation(str1, str2)

    len1 = str1.length

    if(len1 = str2.length && len1 != 0)
        str1str1 = str1 + str1
        return str1str1.include?(str2)
    end
    return false
end

p isRotation("waterbottle","erbottlewat")
p isRotation("waterbottle","erbottlewar")