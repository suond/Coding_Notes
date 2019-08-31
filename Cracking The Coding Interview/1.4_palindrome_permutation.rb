def palindromePermutation(str1)

    charCountHash = createHashCount(str1)
    #tracks if more than one odd count for a character was found,
    # if it was then it's impossible for the string to be a permutation
    foundOdd = false
  
    charCountHash.each { |key, value|
      if value % 2 == 1
        if foundOdd
          return false
        end
        foundOdd = true
      end
    }
    return true
  end
  
  def createHashCount(str)
    result = {}
     
     str.chars.each{ |c|
        result[c] = result[c] ? result[c] + 1 : 1
    }
    result
  end

  puts palindromePermutation("atacocata")
  puts createHashCount("atacocata")