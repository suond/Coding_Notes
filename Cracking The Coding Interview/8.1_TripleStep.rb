def countWays(num, memo={})
    #there is no way to go less than 0 steps
    if(num < 0)
        return 0
    # there is only one way to go 0 steps (no move)
    elsif (num === 0)
        return 1
    # if its already in the memoize array
    elsif memo[num] 
        return memo[num]
    else
        #add the result into the memoizer and return it
        memo[num] = countWays(num-1, memo) + countWays(num-2, memo) + countWays(num-3, memo)
    end
end

p countWays(10)