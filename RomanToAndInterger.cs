// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;
using System.Collections.Generic;

public class RomanNumerals
{
    private static readonly Dictionary<char, int> romanToIntMap = new Dictionary<char, int>
    {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}
    };

    private static readonly Dictionary<int, string> intToRomanMap = new Dictionary<int, string>
    {
        {1000, "M"},
        {900, "CM"},
        {500, "D"},
        {400, "CD"},
        {100, "C"},
        {90, "XC"},
        {50, "L"},
        {40, "XL"},
        {10, "X"},
        {9, "IX"},
        {5, "V"},
        {4, "IV"},
        {1, "I"}
    };

    public static string IntegerToRoman(int num)
    {
        if (!IsValidInteger(num)) return "Invalid value";

        var result = string.Empty;

        foreach (var item in intToRomanMap)
        {
            while (num >= item.Key)
            {
                result += item.Value;
                num -= item.Key;
            }
        }

        return result;
    }

    public static int RomanToInteger(string roman)
    {
        if (!IsValidRomanNumeral(roman)) return -1;

        int result = 0;
        int i = 0;

        while (i < roman.Length)
        {
            if (i + 1 < roman.Length && romanToIntMap[roman[i]] < romanToIntMap[roman[i + 1]])
            {
                result += romanToIntMap[roman[i + 1]] - romanToIntMap[roman[i]];
                i += 2;
            }
            else
            {
                result += romanToIntMap[roman[i]];
                i++;
            }
        }

        return result;
    }

    public static bool IsValidRomanNumeral(string roman)
    {
        if (string.IsNullOrEmpty(roman)) return false;

        foreach (char c in roman)
        {
            if (!romanToIntMap.ContainsKey(c)) return false;
        }

        return true;
    }

    public static bool IsValidInteger(int num)
    {
        return num >= 1 && num < 4000;
    }

    public static void Main()
    {
        Console.WriteLine(IntegerToRoman(1990)); // Output: MCMXC
        Console.WriteLine(IntegerToRoman(2008)); // Output: MMVIII
        Console.WriteLine(IntegerToRoman(1666)); // Output: MDCLXVI
        Console.WriteLine(IntegerToRoman(0));    // Output: Invalid value
        Console.WriteLine(IntegerToRoman(4000)); // Output: Invalid value

        Console.WriteLine(RomanToInteger("MCMXC")); // Output: 1990
        Console.WriteLine(RomanToInteger("MMVIII")); // Output: 2008
        Console.WriteLine(RomanToInteger("MDCLXVI")); // Output: 1666
        Console.WriteLine(RomanToInteger("IIII")); // Output: 4
        Console.WriteLine(RomanToInteger("ABCD")); // Output: -1 (invalid)

        Console.WriteLine(IsValidRomanNumeral("MCMXC")); // Output: True
        Console.WriteLine(IsValidRomanNumeral("IIII")); // Output: True (basic validation)
        Console.WriteLine(IsValidRomanNumeral("ABCD")); // Output: False
        Console.WriteLine(IsValidInteger(1990)); // Output: True
        Console.WriteLine(IsValidInteger(4000)); // Output: False
    }
}
